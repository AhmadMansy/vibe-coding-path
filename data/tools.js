/* =====================================================================
   الأدوات — Tools
   ease  = سهولة لغير المبرمج (0 صعب جدًا … 10 سهل جدًا)
   depth = قد إيه تقدر توصل بيها (0 نموذج بسيط … 10 منتج كامل كبير)
   القيمتين تقدير تحريري للمقارنة البصرية، مش أرقام رسمية.
   ease/depth are editorial estimates for the visual map, not official figures.
   cat: builder | editor | agent | game | mobile | kids | auto
   ===================================================================== */

window.VC_TOOLS = [
  {
    id: "lovable", name: "Lovable", url: "https://lovable.dev", cat: "builder", color: "#FF6A3D",
    ease: 9, depth: 6.6, goals: ["web", "work"], who: ["zero", "pro", "some"],
    free: { ar: "مجاني: 5 رصيد يوميًا (حتى 30 في الشهر) · Pro من 25$", en: "Free: 5 credits/day (up to 30/month) · Pro from $25/mo" },
    desc: { ar: "توصف الموقع أو التطبيق فيبنيه بالكامل: واجهة، قاعدة بيانات، تسجيل دخول، ونشر. أحسن بداية لو مش بتعرف تبرمج.", en: "Describe a site or app and it builds the whole thing: UI, database, auth and hosting. The best start if you can't code." }
  },
  {
    id: "bolt", name: "Bolt.new", url: "https://bolt.new", cat: "builder", color: "#1F6FEB",
    ease: 7.8, depth: 6.2, goals: ["web", "game"], who: ["zero", "some"],
    free: { ar: "مجاني: 300 ألف توكن يوميًا (مليون في الشهر) · Pro من 25$", en: "Free: 300K tokens/day (1M/month) · Pro from $25/mo" },
    desc: { ar: "بيشغّل المشروع كله جوه المتصفح ويطلعه على رابط. سريع جدًا للنماذج الأولية وألعاب Three.js.", en: "Runs the whole stack in your browser and ships to a public URL. Very fast for prototypes and Three.js games." }
  },
  {
    id: "ai-studio", name: "Google AI Studio", url: "https://aistudio.google.com/apps", cat: "builder", color: "#1A73E8",
    ease: 8.4, depth: 7, goals: ["web", "mobile", "game", "work"], who: ["all"],
    free: { ar: "مجاني للتجربة · بيقبل الأوامر بالعربي", en: "Free to start · accepts Arabic prompts" },
    desc: { ar: "وضع Build بيعمل تطبيق ويب كامل أو تطبيق أندرويد حقيقي من وصف، مع معاينة فورية ونشر.", en: "Build mode makes a full-stack web app or a native Android app from a prompt, with live preview and deploy." }
  },
  {
    id: "replit", name: "Replit", url: "https://replit.com", cat: "builder", color: "#F26207",
    ease: 7, depth: 7.4, goals: ["web", "work", "mobile", "career"], who: ["zero", "some", "pro"],
    free: { ar: "وضع مجاني بحدود · Core بـ 20$ (18$ سنويًا) · Pro بـ 100$", en: "Limited Free Mode · Core $20/mo ($18 yearly) · Pro $100/mo" },
    desc: { ar: "بيئة كاملة في المتصفح: الوكيل بيبني، وفيها قاعدة بيانات واستضافة ونشر بضغطة.", en: "A full browser environment: the agent builds, with built-in database, hosting and one-click publish." }
  },
  {
    id: "v0", name: "v0 (Vercel)", url: "https://v0.app", cat: "builder", color: "#111111",
    ease: 6.4, depth: 5.2, goals: ["web"], who: ["some", "dev", "zero"],
    free: { ar: "مجاني بحد 7 رسايل في اليوم · Plus بـ 30$", en: "Free with a 7-message daily limit · Plus $30/mo" },
    desc: { ar: "ممتاز في تصميم واجهات احترافية بمكونات جاهزة، وتقدر تكمل بيها في محررك.", en: "Great at polished React UIs with ready components you can take into your editor." }
  },
  {
    id: "base44", name: "Base44", url: "https://base44.com", cat: "builder", color: "#7A5AF8",
    ease: 9.2, depth: 5.2, goals: ["work", "web"], who: ["zero", "pro"],
    free: { ar: "فيه خطة مجانية", en: "Free tier available" },
    desc: { ar: "مناسب لأدوات الشغل الداخلية: جداول، نماذج، لوحات متابعة بدون أي كود.", en: "Suited to internal work tools: tables, forms and dashboards without code." }
  },
  {
    id: "claude", name: "Claude (Artifacts)", url: "https://claude.ai", cat: "builder", color: "#D97757",
    ease: 9.6, depth: 4.1, goals: ["work", "kids", "game", "web"], who: ["all"],
    free: { ar: "مجاني للبداية", en: "Free to start" },
    desc: { ar: "اطلب أداة أو لعبة صغيرة في المحادثة وتشتغل قدامك على طول وتشاركها برابط. مثالي لأول تجربة.", en: "Ask for a small tool or game in chat; it runs right there and can be shared by link. Ideal first try." }
  },
  {
    id: "claude-code", name: "Claude Code", url: "https://claude.com/product/claude-code", cat: "agent", color: "#C15F3C",
    ease: 3.8, depth: 9.6, goals: ["career", "web", "auto", "game", "mobile"], who: ["some", "dev"],
    free: { ar: "ضمن اشتراك Claude Pro (20$ شهريًا، أو 17$ سنويًا)", en: "Included with Claude Pro ($20/mo, or $17/mo yearly)" },
    desc: { ar: "وكيل برمجة بيقرا مشروعك كله ويعدّل ويشغّل الأوامر. في الـ terminal أو VS Code أو تطبيق سطح المكتب أو الويب.", en: "A coding agent that reads your whole project, edits files and runs commands; in the terminal, VS Code, desktop or web." }
  },
  {
    id: "cursor", name: "Cursor", url: "https://cursor.com", cat: "editor", color: "#000000",
    ease: 4.6, depth: 8.7, goals: ["career", "web", "game"], who: ["some", "dev"],
    free: { ar: "خطة مجانية بحدود قليلة · Plus من 8$ · Premium بـ 30$", en: "Free plan (limited) · Plus from $8/mo · Premium $30/mo" },
    desc: { ar: "محرر كود مبني على VS Code والذكاء الاصطناعي جواه: وكيل بيعدّل كذا ملف ويشرح الكود.", en: "A VS Code-based editor with AI built in: an agent that edits many files and explains code." }
  },
  {
    id: "copilot", name: "GitHub Copilot", url: "https://github.com/features/copilot", cat: "editor", color: "#24292F",
    ease: 5.2, depth: 7.9, goals: ["career", "web"], who: ["some", "dev"],
    free: { ar: "خطة مجانية · Pro من 10$", en: "Free plan · Pro from $10/mo" },
    desc: { ar: "مساعد ووكيل داخل VS Code وGitHub. أرخص بداية للمبرمجين، ومستخدم في كورس مايكروسوفت.", en: "Assistant and agent inside VS Code and GitHub. The cheapest start for developers." }
  },
  {
    id: "gemini-cli", name: "Gemini CLI", url: "https://github.com/google-gemini/gemini-cli", cat: "agent", color: "#4285F4",
    ease: 2.6, depth: 6.8, goals: ["career", "auto"], who: ["dev"],
    free: { ar: "مفتوح المصدر وفيه استخدام مجاني", en: "Open source with free usage" },
    desc: { ar: "وكيل برمجة في الـ terminal من جوجل.", en: "Google's open-source coding agent for the terminal." }
  },
  {
    id: "codex", name: "OpenAI Codex", url: "https://openai.com/codex", cat: "agent", color: "#10A37F",
    ease: 2.2, depth: 8.9, goals: ["career", "web"], who: ["dev", "some"],
    free: { ar: "ضمن اشتراكات ChatGPT", en: "Included with ChatGPT plans" },
    desc: { ar: "وكيل OpenAI للبرمجة: تطبيق، terminal، وإضافة للمحررات.", en: "OpenAI's coding agent: app, terminal and editor extension." }
  },
  {
    id: "opencode", name: "OpenCode", url: "https://opencode.ai", cat: "agent", color: "#3B3B3B",
    ease: 3.4, depth: 8.0, goals: ["career", "web", "auto"], who: ["dev", "some"],
    free: { ar: "مفتوح المصدر ومجاني، بتدفع بس تكلفة الموديل (أو اشتراك OpenCode Go اختياري)", en: "Free and open source; you pay only for the model (optional OpenCode Go plan)" },
    desc: { ar: "وكيل برمجة مفتوح المصدر للـ terminal وسطح المكتب والمحررات. بيشتغل مع أكتر من 75 مزود موديلات منهم Claude وGPT وGemini والموديلات المحلية، وفيه وضع تخطيط قبل التنفيذ.", en: "Open-source coding agent for the terminal, desktop and IDEs. Works with 75+ model providers including Claude, GPT, Gemini and local models, with a plan-then-build mode." }
  },
  {
    id: "aider", name: "Aider", url: "https://aider.chat", cat: "agent", color: "#14B014",
    ease: 0.6, depth: 6.3, goals: ["career"], who: ["dev"],
    free: { ar: "مفتوح المصدر، بتدفع بس تكلفة الموديل", en: "Open source; you pay only for model tokens" },
    desc: { ar: "من أقدم وكلاء البرمجة المفتوحين في الـ terminal، بيشتغل مع Git مباشرة وبيعمل commit لكل تعديل.", en: "One of the longest-running open-source terminal agents; works directly with Git and commits each change." }
  },
  {
    id: "cline", name: "Cline", url: "https://github.com/cline/cline", cat: "editor", color: "#5B5BD6",
    ease: 1.2, depth: 7.4, goals: ["career"], who: ["dev"],
    free: { ar: "مفتوح المصدر، بتدفع بس تكلفة الموديل", en: "Open source; you pay only for model tokens" },
    desc: { ar: "إضافة وكيل مفتوحة المصدر لـ VS Code تشتغل مع أي موديل.", en: "Open-source agent extension for VS Code that works with any model." }
  },
  {
    id: "rosebud-tool", name: "Rosebud AI", url: "https://lab.rosebud.ai", cat: "game", color: "#E8457A",
    ease: 8.2, depth: 4.4, goals: ["game", "kids"], who: ["all"],
    free: { ar: "تبدأ مجانًا", en: "Free to start" },
    desc: { ar: "توصف اللعبة فتتلعب على طول: ثنائية وثلاثية الأبعاد وتعدد لاعبين، ومشاركة برابط.", en: "Describe a game and play it: 2D, 3D and multiplayer, shared by link." }
  },
  {
    id: "threejs-tool", name: "Three.js", url: "https://threejs.org", cat: "game", color: "#049EF4",
    ease: 0.8, depth: 9.4, goals: ["game"], who: ["some", "dev"],
    free: { ar: "مجاني ومفتوح المصدر", en: "Free, open source" },
    desc: { ar: "مكتبة الألعاب ثلاثية الأبعاد على الويب. قولها للذكاء الاصطناعي بالاسم.", en: "The 3D web library; name it in your prompt." }
  },
  {
    id: "rork", name: "Rork", url: "https://rork.com", cat: "mobile", color: "#0E9F6E",
    ease: 7.6, depth: 5.5, goals: ["mobile"], who: ["zero", "pro", "some"],
    free: { ar: "خطة مجانية بـ 35 رصيد", en: "Free plan with 35 credits" },
    desc: { ar: "تطبيقات iOS وأندرويد حقيقية من وصف، وتجربها على موبايلك بمسح QR.", en: "Real iOS and Android apps from a prompt; test on your phone via QR." }
  },
  {
    id: "a0", name: "a0.dev", url: "https://a0.dev", cat: "mobile", color: "#2D3748",
    ease: 6.7, depth: 6.3, goals: ["mobile"], who: ["zero", "some"],
    free: { ar: "مدفوع من 20$ شهريًا", en: "Paid from $20/mo" },
    desc: { ar: "تطبيقات React Native كاملة من وصف، مع نشر سهل على المتاجر.", en: "Complete React Native apps from a description, with smooth store publishing." }
  },
  {
    id: "app-inventor", name: "MIT App Inventor", url: "https://appinventor.mit.edu", cat: "kids", color: "#8BC34A",
    ease: 8.9, depth: 3.2, goals: ["kids", "mobile"], who: ["zero"],
    free: { ar: "مجاني تمامًا", en: "Completely free" },
    desc: { ar: "من MIT: تطبيقات أندرويد بالبلوكات، ومع Aptly ممكن تبدأ من جملة.", en: "From MIT: Android apps with blocks; with Aptly you can start from a sentence." }
  },
  {
    id: "n8n", name: "n8n", url: "https://n8n.io", cat: "auto", color: "#EA4B71",
    ease: 5.6, depth: 6.8, goals: ["auto", "work"], who: ["some", "pro", "dev"],
    free: { ar: "نسخة مفتوحة المصدر مجانية", en: "Free self-hosted community edition" },
    desc: { ar: "أتمتة الشغل المتكرر: ربط الإيميل والجداول والذكاء الاصطناعي في سير عمل.", en: "Automate repetitive work by wiring email, sheets and AI into workflows." }
  }
];
