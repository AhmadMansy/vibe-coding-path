#!/usr/bin/env node
/* =====================================================================
   check-links.js — validates data/*.js and checks every link.
   Usage:
     node scripts/check-links.js            schema checks + network link checks
     node scripts/check-links.js --offline  schema checks only (fast)
   Exit code 1 if there are schema errors or dead links.
   Needs Node 18+ (built-in fetch). No dependencies.
   ===================================================================== */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");

const root = path.join(__dirname, "..");
const offline = process.argv.includes("--offline");

// ---------- load the data files the same way the browser does ----------
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of ["resources", "tools", "content", "free"]) {
  vm.runInContext(fs.readFileSync(path.join(root, "data", f + ".js"), "utf8"), sandbox, { filename: f + ".js" });
}
const RES = sandbox.window.VC_RESOURCES, TOOLS = sandbox.window.VC_TOOLS, C = sandbox.window.VC_CONTENT, FREE = sandbox.window.VC_FREE;

// ---------- schema checks ----------
const errors = [], warnings = [];
const err = (m) => errors.push(m), warn = (m) => warnings.push(m);
const bi = (o) => o && typeof o.ar === "string" && o.ar.trim() && typeof o.en === "string" && o.en.trim();
const isUrl = (u) => typeof u === "string" && /^https?:\/\/\S+$/.test(u);

const TYPES = ["course", "video", "playlist", "guide", "repo", "path", "community", "tool-guide"];
const goalIds = new Set(C.goals.map((g) => g.id).concat("all"));
const whoIds = new Set(["zero", "some", "dev", "pro", "all"]);

const seen = new Set();
for (const r of RES) {
  const w = `resource "${r.id}"`;
  if (!r.id || !/^[A-Za-z0-9-]+$/.test(r.id)) err(`${w}: bad id`);
  if (seen.has(r.id)) err(`${w}: duplicate id`); seen.add(r.id);
  if (!TYPES.includes(r.type)) err(`${w}: bad type "${r.type}"`);
  if (!["ar", "en"].includes(r.lang)) err(`${w}: bad lang`);
  if (!["free", "freemium", "paid"].includes(r.cost)) err(`${w}: bad cost`);
  if (!["start", "grow", "pro"].includes(r.level)) err(`${w}: bad level`);
  if (![1, 2, 3, 4].includes(+r.stage)) err(`${w}: bad stage`);
  if (!Array.isArray(r.goals) || !r.goals.length || r.goals.some((g) => !goalIds.has(g))) err(`${w}: bad goals`);
  if (!Array.isArray(r.who) || !r.who.length || r.who.some((x) => !whoIds.has(x))) err(`${w}: bad who`);
  if (!isUrl(r.url)) err(`${w}: bad url`);
  if (!bi(r.title)) err(`${w}: title needs ar + en`);
  if (!bi(r.desc)) err(`${w}: desc needs ar + en`);
  if (/[?&](ref|aff|affiliate|utm_[a-z]+|referral|partner)=/i.test(r.url || "")) err(`${w}: affiliate/tracking parameter in url`);
  if (/results\?search_query=/.test(r.url || "")) warn(`${w}: is a YouTube search link (prefer a direct link when you find one)`);
}

const toolIds = new Set();
for (const t of TOOLS) {
  const w = `tool "${t.id}"`;
  if (toolIds.has(t.id)) err(`${w}: duplicate id`); toolIds.add(t.id);
  if (!isUrl(t.url)) err(`${w}: bad url`);
  if (!(t.ease >= 0 && t.ease <= 10) || !(t.depth >= 0 && t.depth <= 10)) err(`${w}: ease/depth must be 0-10`);
  if (!bi(t.free)) err(`${w}: free needs ar + en`);
  if (!bi(t.desc)) err(`${w}: desc needs ar + en`);
}

for (const [name, picks] of [["toolPicks", C.toolPicks], ["toolPicksFree", C.toolPicksFree]]) {
  if (!picks) { err(`content: ${name} is missing`); continue; }
  for (const g of C.goals) for (const b of C.backgrounds) {
    const list = (picks[g.id] || {})[b.id];
    if (!list || !list.length) { err(`${name}[${g.id}][${b.id}] is missing`); continue; }
    for (const id of list) if (!toolIds.has(id)) err(`${name}[${g.id}][${b.id}]: unknown tool "${id}"`);
  }
}
for (const g of C.goals) if (!C.projects[g.id]) err(`content: no project idea for goal "${g.id}"`);
for (const p of FREE.providers) {
  if (!isUrl(p.url)) err(`free provider "${p.id}": bad url`);
  for (const k of ["free", "catch", "setup"]) if (!bi(p[k])) err(`free provider "${p.id}": ${k} needs ar + en`);
}
// OpenCode coverage per stage (the "Learn OpenCode" idea): warn if a stage has nothing
for (const s of [1, 2, 3, 4]) {
  if (!RES.some((r) => (r.tags || []).includes("opencode") && +r.stage === s)) warn(`no OpenCode resource in stage ${s}`);
}

console.log(`Schema: ${RES.length} resources, ${TOOLS.length} tools, ${FREE.providers.length} free providers`);
warnings.forEach((m) => console.log("  warn  " + m));
errors.forEach((m) => console.log("  ERROR " + m));

// ---------- link checks ----------
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
const BLOCKED = new Set([401, 403, 405, 429, 451, 999]);   // sites that refuse bots: can't tell, so only a warning

async function fetchStatus(url, method) {
  const ctl = new AbortController(); const timer = setTimeout(() => ctl.abort(), 20000);
  try {
    const res = await fetch(url, { method, redirect: "follow", signal: ctl.signal, headers: { "User-Agent": UA, "Accept": "text/html,*/*", "Accept-Language": "en-US,en;q=0.8,ar;q=0.6" } });
    try { await res.body?.cancel(); } catch (e) { /* ignore */ }
    return { status: res.status };
  } catch (e) { return { error: (e.cause && e.cause.code) || e.name || String(e) }; }
  finally { clearTimeout(timer); }
}

async function checkOne(item) {
  const u = new URL(item.url);
  const yt = /(^|\.)youtube\.com$/.test(u.hostname) && (u.pathname === "/watch" || u.pathname === "/playlist");
  if (yt) {   // a removed/private video still returns 200 on the page, so ask oEmbed instead
    const o = await fetchStatus("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent(item.url), "GET");
    if (o.status === 200) return { ...item, ok: true };
    if (o.status === 401 || o.status === 404 || o.status === 400) return { ...item, dead: `YouTube says unavailable (${o.status})` };
    return { ...item, warn: `YouTube oEmbed ${o.status || o.error}` };
  }
  let r = await fetchStatus(item.url, "GET");
  if (r.error) r = await fetchStatus(item.url, "GET");   // one retry for flaky networks
  if (r.error) {
    // a timeout / reset may be our own network or a bot block, so it is not proof the page is gone
    const unsure = /TIMEOUT|AbortError|ECONNRESET|ETIMEDOUT|EAI_AGAIN|UND_ERR_SOCKET/i.test(r.error);
    return unsure ? { ...item, warn: `${r.error} (unreachable from here, check by hand)` } : { ...item, dead: r.error };   // ENOTFOUND, cert errors... are real failures
  }
  if (r.status >= 200 && r.status < 400) return { ...item, ok: true };
  if (BLOCKED.has(r.status)) return { ...item, warn: `HTTP ${r.status} (site blocks bots, check by hand)` };
  return { ...item, dead: `HTTP ${r.status}` };
}

async function main() {
  let dead = 0;
  if (!offline) {
    const map = new Map();   // url -> [labels]
    const add = (url, label) => { if (/results\?search_query=/.test(url)) return; (map.get(url) || map.set(url, []).get(url)).push(label); };
    RES.forEach((r) => add(r.url, r.id)); TOOLS.forEach((t) => add(t.url, "tool:" + t.id)); FREE.providers.forEach((p) => add(p.url, "free:" + p.id));
    (FREE.sources || []).forEach((s) => add(s.url, "source:" + s.name));
    const items = [...map.entries()].map(([url, labels]) => ({ url, labels }));
    console.log(`Links: checking ${items.length} unique URLs...`);
    const results = []; let i = 0;
    await Promise.all(Array.from({ length: 8 }, async () => { while (i < items.length) { const it = items[i++]; results.push(await checkOne(it)); } }));
    const bad = results.filter((r) => r.dead), soft = results.filter((r) => r.warn);
    soft.forEach((r) => console.log(`  warn  ${r.warn}  ${r.url}  [${r.labels.join(", ")}]`));
    bad.forEach((r) => console.log(`  DEAD  ${r.dead}  ${r.url}  [${r.labels.join(", ")}]`));
    dead = bad.length;
    console.log(`Links: ${results.filter((r) => r.ok).length} ok, ${soft.length} could not be verified, ${dead} dead`);
  }
  const failed = errors.length + dead;
  console.log(failed ? `\nFAILED: ${errors.length} schema error(s), ${dead} dead link(s)` : "\nAll good.");
  process.exit(failed ? 1 : 0);
}
main();
