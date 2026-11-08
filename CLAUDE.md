# Vibe Coding Path (مسار الفايب كودينج)

Bilingual (Arabic RTL default / English) static site that guides people to learn vibe coding:
a personalized path wizard, a resource library, a tool map, a free-AI-with-OpenCode section and a prompt kit.
No build step, no framework, no dependencies. Plain HTML + CSS + vanilla JS.

## Run locally
    python3 -m http.server 8000      # then open http://localhost:8000
(Opening index.html directly via file:// also works.)

## Files
- `index.html` — page structure, SVG icon sprite (`<symbol id="i-...">`), static text with `data-i18n` keys.
- `assets/app.css` — all styles. Design tokens in the first `:root` block (light), redefined for dark mode. Accent presets via `[data-accent]`.
- `assets/app.js` — all logic, one IIFE. Sections in order: i18n dictionary (`I18N.ar` / `I18N.en`), data merge, live demo "studio" (scenarios in `SCEN`), idea section, wizard + path scoring (`scoreRes`, `computePath`), library, tool map, free-AI section (`renderFree`), prompt kit, admin panel (claude.ai only), boot.
- `assets/fonts/` — self-hosted woff2 fonts (Cairo for headings, IBM Plex Sans Arabic for body, IBM Plex Mono) + `fonts.css`. No Google Fonts requests. OFL license in `LICENSE.txt`.
- `assets/favicon.svg`, `assets/og.png` — tab icon and 1200×630 social preview. The canonical/`og:`/`twitter:` URLs in `index.html` point to the GitHub Pages URL `https://ahmadmansy.github.io/vibe-coding-path/`; update them if the repo name or account changes.
- `scripts/check-links.js` — run `node scripts/check-links.js` (or `--offline`) before every content update: validates the data schema and checks every link. Run it, don't check links by hand.
- `README.md`, `LICENSE` (MIT), `robots.txt`, `sitemap.xml`, `404.html` — repo/SEO files for GitHub Pages. Each resource card has a "Report an issue" button that opens a pre-filled GitHub issue (`reportUrl()` in app.js).
- "Last reviewed" date lives in three places: `hero.reviewed` and `foot.p1` (app.js I18N + index.html fallback text) and `data/free.js`. Update all when you re-review.
- `data/resources.js` — `window.VC_RESOURCES`: every learning resource. Schema documented at the top of the file.
- `data/tools.js` — `window.VC_TOOLS`: tools for the map (`ease`/`depth` 0–10 are editorial estimates; keep points from overlapping).
- `data/content.js` — `window.VC_CONTENT`: wizard goals/backgrounds/professions, path stages and weeks, tool picks per goal×background, project ideas, starter prompt template, prompt kit, golden rules, stats.
- `data/free.js` — `window.VC_FREE`: free model providers for OpenCode, setup steps, tips, sources.

## Conventions
- Every user-facing string exists in both Arabic and English: `{ ar: "...", en: "..." }` in data, `I18N.ar` / `I18N.en` in app.js. Arabic copy is Egyptian colloquial.
- Resource `url`s that are YouTube searches (`results?search_query=`) are shown with a "YouTube search" badge automatically. Prefer verified direct links.
- Resource `tags: ["opencode"]` puts it in the "Learn OpenCode" grid of the free section.
- Charts are hand-built SVG with `style="direction:ltr"`; RTL is handled by mirroring coordinates in JS, not by CSS direction.
- No remote images (the original host's CSP blocks them); thumbnails are generated SVG art in `art()`.
- Respect `prefers-reduced-motion`; keep visible focus states.
- Theme: follows the system until the user clicks the header toggle, which saves `vcp.theme` (`light`/`dark`) and sets `data-theme` on `<html>`. A tiny inline script in `<head>` applies the saved choice before first paint. A skip link (`.skip`) jumps to `<main id="main">`.

## Admin panel / database
The "Manage content" panel uses `window.claude.use("db")`, which only exists when the page is hosted as a claude.ai artifact.
Outside claude.ai the panel stays hidden and the site runs entirely from the `data/*.js` files. To make content permanent, edit the data files.

## Hosting
Originally published as a claude.ai artifact. To host elsewhere, upload the whole folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).
