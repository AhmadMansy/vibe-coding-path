/* =====================================================================
   مكتبة مصادر الـ Vibe Coding  —  Vibe Coding resource library
   ---------------------------------------------------------------------
   ده الملف اللي فيه كل المصادر. تقدر تضيف/تعدل/تمسح أي مصدر هنا.
   This file holds every resource. Add, edit or remove entries freely.

   شكل المصدر الواحد / One resource looks like:
   {
     id:       "unique-id",            // اسم فريد بالإنجليزي بدون مسافات
     type:     "course" | "video" | "playlist" | "guide" | "repo" | "path" | "community" | "tool-guide",
     lang:     "ar" | "en",            // لغة المحتوى نفسه
     cost:     "free" | "freemium" | "paid",
     level:    "start" | "grow" | "pro",   // مبتدئ / متوسط / متقدم
     stage:    1 | 2 | 3 | 4,          // 1 افهم الفكرة · 2 ابني أول حاجة · 3 طوّر شغلك · 4 انشر بأمان
     goals:    ["web","game","mobile","career","work","kids","auto"] أو ["all"],
     who:      ["zero","some","dev","pro"] أو ["all"],
               // zero = أول مرة · some = جرّب برمجة قبل كده · dev = مبرمج · pro = صاحب مهنة/مجال
     url:      "https://...",          // لو الرابط بحث يوتيوب، الموقع هيعرضه كـ "بحث"
     provider: "اسم الجهة / القناة",
     duration: "1h 34m" (اختياري),
     title:    { ar: "...", en: "..." },
     desc:     { ar: "...", en: "..." },
     featured: true (اختياري — يظهر في المختارات)
   }
   ===================================================================== */

window.VC_RESOURCES = [

  /* ---------------- مسارات وكورسات — Courses & paths (EN) ---------------- */
  {
    id: "build-with-andrew", type: "course", lang: "en", cost: "freemium", level: "start", stage: 2,
    goals: ["web", "game", "mobile", "work", "kids", "auto"], who: ["zero", "pro", "some"], featured: true,
    url: "https://www.deeplearning.ai/courses/build-with-andrew",
    provider: "DeepLearning.AI · Andrew Ng", duration: "~1h",
    title: { ar: "Build with Andrew — أسهل بداية على الإطلاق", en: "Build with Andrew" },
    desc: {
      ar: "كورس أندرو إنج لأي حد عمره ما كتب كود: توصف فكرتك بالكلام والذكاء الاصطناعي يحولها لتطبيق ويب شغال في أقل من 30 دقيقة. مجاني للمشاهدة، والشهادة مدفوعة.",
      en: "Andrew Ng's most beginner-friendly course: describe an idea in words and let AI turn it into a working web app in under 30 minutes. No coding or AI background needed; free to audit."
    }
  },
  {
    id: "vibe-101-replit", type: "course", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["web", "career", "work"], who: ["zero", "some", "pro"], featured: true,
    url: "https://www.deeplearning.ai/short-courses/vibe-coding-101-with-replit/",
    provider: "DeepLearning.AI × Replit", duration: "1h 34m",
    title: { ar: "Vibe Coding 101 مع Replit", en: "Vibe Coding 101 with Replit" },
    desc: {
      ar: "7 دروس فيديو تبني فيهم تطبيقين حقيقيين (محلل أداء مواقع وتطبيق تصويت) باستخدام وكيل برمجة، وتتعلم إزاي تصلّح الأخطاء معاه وتنشر.",
      en: "Seven video lessons where you build and deploy two apps (a website performance analyzer and a voting app) with a coding agent, and learn a repeatable process."
    }
  },
  {
    id: "dlai-spec-driven", type: "course", lang: "en", cost: "freemium", level: "grow", stage: 3,
    goals: ["career", "web", "work"], who: ["some", "dev"],
    url: "https://www.deeplearning.ai/short-courses/spec-driven-development-with-coding-agents/",
    provider: "DeepLearning.AI × JetBrains", duration: "1h 16m",
    title: { ar: "التطوير بالمواصفات مع وكلاء البرمجة", en: "Spec-Driven Development with Coding Agents" },
    desc: {
      ar: "الخطوة اللي بعد الـ vibe coding: تكتب ملف مواصفات واضح والوكيل ينفّذه. بيقلل إن الذكاء الاصطناعي يبني حاجة غير اللي طلبتها في المشاريع الكبيرة.",
      en: "The next step after vibe coding: write a clear markdown spec and let your coding agent implement it, so bigger projects stay on target. 15 short lessons."
    }
  },
  {
    id: "easy-vibe", type: "path", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["web", "game", "mobile", "career", "auto"], who: ["zero", "some", "dev", "pro"],
    url: "https://datawhalechina.github.io/easy-vibe/ar-sa/",
    provider: "Datawhale · Easy-Vibe (GitHub)",
    title: { ar: "Easy-Vibe — كورس Vibe Coding كامل بالعربي", en: "Easy-Vibe: open-source Vibe Coding course" },
    desc: {
      ar: "كورس مفتوح المصدر على 3 مراحل: من أول لعبة وأنت مبتدئ، لتطبيقات Full Stack بقاعدة بيانات ودفع، لحد Claude Code والـ Agents. فيه نسخة عربي (بعض صفحات المرحلة التانية لسه بالصيني).",
      en: "Open-source course in 3 stages: a first game for beginners, full-stack apps with a database and payments, then Claude Code and agents. Available in 10 languages including Arabic."
    }
  },
  {
    id: "claude-academy", type: "path", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["all"], who: ["all"],
    url: "https://academy.claude.com",
    provider: "Anthropic · Claude Academy",
    title: { ar: "Claude Academy — كورسات مجانية بشهادات", en: "Claude Academy (free courses)" },
    desc: {
      ar: "منصة Anthropic الرسمية المجانية: كورسات من أول استخدام Claude لحد Claude Code وMCP، وكل كورس بشهادة تقدر تحطها على LinkedIn.",
      en: "Anthropic's official free training hub: courses from Claude basics up to Claude Code, MCP and the API, each with a completion certificate."
    }
  },
  {
    id: "claude-code-in-action", type: "course", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web", "auto"], who: ["some", "dev"],
    url: "https://anthropic.skilljar.com/claude-code-in-action",
    provider: "Anthropic Academy", duration: "~1h",
    title: { ar: "Claude Code in Action", en: "Claude Code in Action" },
    desc: {
      ar: "كورس Anthropic نفسها عن Claude Code: السياق، وضع التخطيط، الأوامر المخصصة، MCP والربط مع GitHub. محتاج شوية خبرة بالـ terminal.",
      en: "Anthropic's own course on Claude Code: context, plan mode, custom commands, MCP and GitHub. Assumes some command-line familiarity."
    }
  },
  {
    id: "datacamp-claude-code", type: "course", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web"], who: ["some", "dev"],
    url: "https://www.datacamp.com/courses/claude-code-in-action",
    provider: "DataCamp", duration: "3h",
    title: { ar: "Claude Code in Action — نسخة تفاعلية", en: "Claude Code in Action (interactive)" },
    desc: {
      ar: "نسخة تفاعلية مجانية فيها 15 فيديو و46 تمرين على CLAUDE.md ووضع التخطيط والـ hooks.",
      en: "A free interactive version with 15 videos and 46 exercises covering CLAUDE.md, plan mode, MCP and hooks."
    }
  },
  {
    id: "coursera-scrimba", type: "path", lang: "en", cost: "freemium", level: "start", stage: 2,
    goals: ["web", "career"], who: ["some", "dev", "zero"],
    url: "https://www.coursera.org/specializations/vibe-coding",
    provider: "Coursera · Scrimba",
    title: { ar: "تخصص Vibe Coding Essentials", en: "Vibe Coding Essentials Specialization" },
    desc: {
      ar: "سلسلة كورسات قصيرة من Scrimba: Cursor ثم GitHub Copilot ثم Claude Code ثم MCP. مناسبة لو عايز شهادة ومسار منظم.",
      en: "A short multi-course series by Scrimba: Cursor, GitHub Copilot, Claude Code and MCP, with a shareable certificate."
    }
  },
  {
    id: "coursera-fundamentals", type: "course", lang: "en", cost: "freemium", level: "start", stage: 2,
    goals: ["work", "kids", "web"], who: ["zero", "pro"],
    url: "https://www.coursera.org/learn/vibe-coding-fundamentals",
    provider: "Coursera · University of Colorado",
    title: { ar: "أساسيات الـ Vibe Coding — جامعة كولورادو", en: "Vibe Coding Fundamentals (CU)" },
    desc: {
      ar: "كورس جامعي للمبتدئين: إزاي تستخدم أدوات الـ vibe coding عشان تبني تطبيقات للشغل أو للتعليم أو للتسلية.",
      en: "University course for newcomers: use vibe coding tools to build apps for business, education and fun."
    }
  },
  {
    id: "coursera-noncoders", type: "course", lang: "en", cost: "freemium", level: "start", stage: 1,
    goals: ["all"], who: ["zero", "pro"],
    url: "https://www.coursera.org/learn/non-coders-guide-to-vibe-coding",
    provider: "Coursera",
    title: { ar: "دليل غير المبرمجين للـ Vibe Coding", en: "Non-Coder's Guide to Vibe Coding" },
    desc: {
      ar: "6 وحدات قصيرة بتشرح الفكرة من الصفر وتديك أول مهمة عملية بسيطة.",
      en: "Six short modules that explain the idea from zero and start you on a first hands-on task."
    }
  },
  {
    id: "coursera-pm", type: "course", lang: "en", cost: "freemium", level: "start", stage: 2,
    goals: ["work", "web"], who: ["pro", "zero"],
    url: "https://www.coursera.org/learn/vibe-coding-ai-powered-app-development-for-product-managers",
    provider: "Coursera · University of Maryland",
    title: { ar: "Vibe Coding لمديري المنتجات", en: "Vibe Coding for Product Managers" },
    desc: {
      ar: "لأصحاب الأفكار والمديرين: إزاي تبني تطبيق حقيقي بالكلام مع الذكاء الاصطناعي بدل ما تستنى فريق برمجة.",
      en: "For product people: build real apps by talking to AI instead of waiting on an engineering team."
    }
  },
  {
    id: "ms-learn-vibe", type: "course", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["web", "work", "kids", "career"], who: ["zero", "some", "pro"],
    url: "https://learn.microsoft.com/en-us/training/modules/introduction-vibe-coding",
    provider: "Microsoft Learn × GitHub",
    title: { ar: "مقدمة في الـ Vibe Coding — مايكروسوفت", en: "Introduction to vibe coding (Microsoft Learn)" },
    desc: {
      ar: "وحدة مجانية: مراحل الـ vibe coding، كتابة مستند متطلبات ورسومات تخطيطية، وبناء نموذج أولي بـ GitHub Copilot (الخطة المجانية تكفي). موجهة لأصحاب الأعمال والمعلمين والطلاب.",
      en: "Free module: the vibe coding process, generating requirements and wireframes, and building a prototype with GitHub Copilot (free plan works). Aimed at business owners, educators and students."
    }
  },
  {
    id: "cursor-learn", type: "course", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web", "game"], who: ["some", "dev"],
    url: "https://cursor.com/learn",
    provider: "Cursor",
    title: { ar: "Cursor Learn — افهم الموديلات بتشتغل إزاي", en: "Cursor Learn" },
    desc: {
      ar: "كورس Cursor الرسمي المجاني: إزاي موديلات الذكاء الاصطناعي بتفكر، وحدودها، وإزاي تراجع وتختبر الكود اللي بتطلعه. بدون تسجيل.",
      en: "Cursor's free official course: how AI models work, their limits, and how to review and test what they produce. No sign-up needed."
    }
  },
  {
    id: "udemy-security", type: "course", lang: "en", cost: "paid", level: "grow", stage: 4,
    goals: ["career", "web", "work"], who: ["some", "dev"],
    url: "https://www.udemy.com/course/the-vibe-coding-security-and-risk-course/",
    provider: "Udemy", duration: "2h 49m",
    title: { ar: "أمان الـ Vibe Coding ومخاطره", en: "Vibe Coding Security & Risk" },
    desc: {
      ar: "قبل ما تنشر تطبيق فيه بيانات ناس: المخاطر الأمنية للكود المولّد وإزاي تحمي نفسك بقواعد ومراجعات.",
      en: "Before you ship an app with real users' data: the security pitfalls of AI-generated code and the controls that reduce them."
    }
  },
  {
    id: "roadmap-vibe", type: "path", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["all"], featured: true,
    url: "https://roadmap.sh/vibe-coding",
    provider: "roadmap.sh",
    title: { ar: "خريطة طريق الـ Vibe Coding", en: "Vibe Coding Roadmap" },
    desc: {
      ar: "خريطة بصرية خطوة بخطوة: الأساسيات، الأدوات، كتابة الأوامر، إدارة السياق، الجودة، الأمان، والنشر.",
      en: "A visual step-by-step map: foundations, tools, prompting, context management, quality, risks and shipping."
    }
  },
  {
    id: "roadmap-claude-code", type: "path", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web", "auto"], who: ["some", "dev"],
    url: "https://roadmap.sh/claude-code",
    provider: "roadmap.sh",
    title: { ar: "خريطة طريق Claude Code", en: "Claude Code Roadmap" },
    desc: {
      ar: "مسار منظم لاستخدام Claude Code في شغل برمجة حقيقي: الأوامر، التصحيح، إعادة الهيكلة، وسير عمل الوكلاء.",
      en: "A structured path for using Claude Code in real workflows: prompting, debugging, refactoring and agent-style work."
    }
  },
  {
    id: "roadmap-best-practices", type: "guide", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["all"], who: ["some", "dev"],
    url: "https://roadmap.sh/vibe-coding/best-practices",
    provider: "roadmap.sh",
    title: { ar: "أفضل ممارسات الـ Vibe Coding", en: "Vibe Coding Best Practices" },
    desc: {
      ar: "قائمة عملية: خلّي ملف السياق صغير ومحدّث، خطط قبل ما تبني، راجع كل نتيجة، ووفّر قوالب للأوامر المتكررة.",
      en: "A practical checklist: keep context files lean, plan before building, review every output, and reuse your best prompts."
    }
  },
  {
    id: "roadmap-best-tools", type: "guide", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["all"],
    url: "https://roadmap.sh/vibe-coding/best-tools",
    provider: "roadmap.sh",
    title: { ar: "أفضل أدوات الـ Vibe Coding", en: "The Best Vibe Coding Tools" },
    desc: {
      ar: "مقارنة لعشر أدوات: Claude Code وGemini CLI وCodex وCursor وLovable وBolt وv0 وCopilot وReplit، ولمين تنفع كل واحدة.",
      en: "Ten tools compared: Claude Code, Gemini CLI, Codex, Cursor, Lovable, Bolt, v0, Copilot, Replit and who each suits."
    }
  },

  /* ---------------- أدلة رسمية — Official guides ---------------- */
  {
    id: "replit-docs-101", type: "guide", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["web", "work", "mobile"], who: ["zero", "pro", "some"],
    url: "https://docs.replit.com/tutorials/vibe-coding-101",
    provider: "Replit Docs",
    title: { ar: "Vibe coding 101 — من الفكرة لتطبيق منشور", en: "Vibe coding 101: idea to published app" },
    desc: {
      ar: "دليل Replit الرسمي: العقلية، المبادئ الخمسة، وإزاي تنتقل من وصف الفكرة لرابط منشور تبعته لأي حد.",
      en: "Replit's official walkthrough of the mindset and five principles, from describing an idea to a public URL."
    }
  },
  {
    id: "replit-how-to", type: "guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["web", "work", "mobile"], who: ["zero", "pro", "some"],
    url: "https://docs.replit.com/tutorials/how-to-vibe-code",
    provider: "Replit Docs",
    title: { ar: "إزاي تعمل vibe coding بفعالية", en: "How to vibe code effectively" },
    desc: {
      ar: "المهارات الخمس اللي بتخليك توجّه الوكيل صح في الوقت الصح، من أول طلب لحد التصحيح.",
      en: "The five skills that help you guide an agent at the right moment, from first prompt to debugging."
    }
  },
  {
    id: "lovable-prompting", type: "guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["web", "work"], who: ["zero", "pro", "some"], featured: true,
    url: "https://docs.lovable.dev/prompting/prompting-one",
    provider: "Lovable Docs",
    title: { ar: "أفضل طرق كتابة الأوامر في Lovable", en: "Lovable prompting best practices" },
    desc: {
      ar: "إزاي تكتب طلب واضح ومحدد، تخلي الأداة تسألك أسئلة توضيحية، وتقول لها إيه اللي تغيّره وإيه اللي متلمسوش.",
      en: "Write structured, scoped prompts, have the AI ask clarifying questions, and say what to change and what to leave alone."
    }
  },
  {
    id: "lovable-library", type: "guide", lang: "en", cost: "free", level: "start", stage: 3,
    goals: ["web", "work"], who: ["zero", "pro", "some"],
    url: "https://docs.lovable.dev/prompting/prompting-library",
    provider: "Lovable Docs",
    title: { ar: "مكتبة أوامر جاهزة", en: "Lovable prompt library" },
    desc: {
      ar: "أوامر جاهزة لأشهر المهام: تسجيل الدخول، مساعد ذكي، إصلاح خطأ، مراجعة أمان، ونشر.",
      en: "Ready-made prompts for common features: auth, an AI assistant, bug reproduction, a security review and publishing."
    }
  },
  {
    id: "lovable-beginner", type: "guide", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["web", "work"], who: ["zero", "pro"],
    url: "https://docs.lovable.dev/tips-tricks/best-practice",
    provider: "Lovable Docs",
    title: { ar: "مش عارف بعمل إيه… بس عارف عايز أبني إيه", en: "\"I have no clue what I'm doing\" guide" },
    desc: {
      ar: "دليل Lovable للناس اللي معندهاش أي خلفية تقنية بس عندها فكرة واضحة.",
      en: "Lovable's guide for people with no technical background who know exactly what they want to build."
    }
  },
  {
    id: "ai-studio-build", type: "guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["web", "mobile", "game", "work"], who: ["all"], featured: true,
    url: "https://aistudio.google.com/docs/aistudio-build-mode",
    provider: "Google AI Studio",
    title: { ar: "ابني تطبيقات في Google AI Studio", en: "Build apps in Google AI Studio" },
    desc: {
      ar: "وضع Build في AI Studio بيعمل تطبيقات ويب كاملة أو تطبيقات أندرويد حقيقية من وصف بالكلام، مع معاينة فورية ونشر. بيقبل الأوامر بالعربي.",
      en: "AI Studio's Build mode creates full-stack web apps or native Android apps from a prompt, with live preview, GitHub sync and deployment."
    }
  },
  {
    id: "anthropic-best-practices", type: "guide", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web", "auto"], who: ["some", "dev"],
    url: "https://code.claude.com/docs/en/best-practices",
    provider: "Anthropic Engineering",
    title: { ar: "أفضل ممارسات Claude Code", en: "Claude Code best practices" },
    desc: {
      ar: "من الفريق اللي عمل الأداة: وضع التخطيط، ملف CLAUDE.md، تقسيم الشغل لخطوات، والاختبار.",
      en: "From the team that builds it: plan mode, CLAUDE.md, breaking work into steps, and testing."
    }
  },
  {
    id: "willison-patterns", type: "guide", lang: "en", cost: "free", level: "pro", stage: 3,
    goals: ["career"], who: ["dev"],
    url: "https://simonwillison.net/guides/agentic-engineering-patterns/how-coding-agents-work/",
    provider: "Simon Willison",
    title: { ar: "أنماط الهندسة بالوكلاء", en: "Agentic Engineering Patterns" },
    desc: {
      ar: "دليل حي ومحدّث من مطور معروف: الوكلاء بيشتغلوا إزاي، وإزاي تستخدمهم عشان تطلع كود أحسن مش أسوأ.",
      en: "A living guide on how coding agents work and how professionals use them to ship better code, not worse."
    }
  },
  {
    id: "hostinger-basics", type: "guide", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["web", "work"], who: ["zero", "pro"],
    url: "https://www.hostinger.com/tutorials/learning-lab/ai-development/lessons/vibe-coding-basics-full-guide-for-beginners/",
    provider: "Hostinger Learning Lab",
    title: { ar: "أساسيات الـ Vibe Coding للمبتدئين", en: "Vibe coding basics for beginners" },
    desc: {
      ar: "دليل مكتوب: إزاي تكتب مستند متطلبات (PRD)، تكتب أوامر كويسة، أساسيات التصميم، التصحيح، والأمان.",
      en: "Written guide: writing a PRD, prompting well, UI basics, debugging and the security essentials."
    }
  },
  {
    id: "datacamp-guide", type: "guide", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["zero", "some"],
    url: "https://www.datacamp.com/blog/vibe-coding-guide-for-beginners",
    provider: "DataCamp",
    title: { ar: "دليل كامل للمبتدئين", en: "A complete vibe coding guide for beginners" },
    desc: {
      ar: "إمتى تستخدم الذكاء الاصطناعي، أشهر أخطاء المبتدئين، والاختبار والأمان.",
      en: "When to use AI, common beginner mistakes, testing practices and ethical/security considerations."
    }
  },
  {
    id: "marily-aistudio", type: "guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["work", "web"], who: ["pro", "zero"],
    url: "https://marily.substack.com/p/the-complete-guide-to-building-with",
    provider: "Marily Nika",
    title: { ar: "الدليل الكامل للبناء بـ Google AI Studio", en: "The complete guide to building with Google AI Studio" },
    desc: {
      ar: "شرح خطوة بخطوة مع أمثلة لأدوات شغل حقيقية: مدير مهام بالصوت ولوحة متابعة منافسين.",
      en: "Step-by-step tutorial with work-tool examples: a voice task manager and a competitive dashboard."
    }
  },
  {
    id: "owasp-top10", type: "guide", lang: "en", cost: "free", level: "grow", stage: 4,
    goals: ["career", "web", "work", "mobile"], who: ["some", "dev"],
    url: "https://top10.owasp.org/",
    provider: "OWASP",
    title: { ar: "OWASP Top 10 — أشهر الثغرات", en: "OWASP Top 10" },
    desc: {
      ar: "القاموس الأمني اللي لازم تعرفه قبل ما تنشر تطبيق فيه حسابات أو بيانات.",
      en: "The security vocabulary to know before you ship anything with accounts or data."
    }
  },

  /* ---------------- فيديوهات — Videos (EN) ---------------- */
  {
    id: "karpathy-software-3", type: "video", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["all"], featured: true,
    url: "https://www.youtube.com/watch?v=LCEmiRjPEtQ",
    provider: "Y Combinator · Andrej Karpathy", duration: "39m",
    title: { ar: "كارباثي: البرمجيات بتتغير (تاني)", en: "Andrej Karpathy: Software Is Changing (Again)" },
    desc: {
      ar: "المحاضرة اللي شرح فيها صاحب مصطلح vibe coding فكرة Software 3.0: إنك بقيت تبرمج الكمبيوتر بالإنجليزي.",
      en: "The keynote from the person who coined vibe coding, on Software 3.0: programming computers in plain English."
    }
  },
  {
    id: "replit-yt-101", type: "video", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["web", "work"], who: ["zero", "some", "pro"],
    url: "https://www.youtube.com/watch?v=5OWurmg41tI",
    provider: "Replit · Matt Palmer", duration: "4m",
    title: { ar: "يعني إيه Vibe Coding؟ (شرح سريع)", en: "What is Vibe Coding? (quick intro)" },
    desc: {
      ar: "مقدمة من 4 دقايق من Replit: تعريف الـ vibe coding، وإزاي وكلاء الذكاء الاصطناعي بيكتبوا الكود من وصفك. بداية سريعة قبل ما تختار أداة.",
      en: "A 4-minute intro from Replit: what vibe coding is and how AI agents write code from your description. A fast start before you pick a tool."
    }
  },
  {
    id: "fcc-vibe-n8n", type: "video", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["auto", "career", "work"], who: ["some", "dev"],
    url: "https://www.youtube.com/watch?v=qDtVzumlb8M",
    provider: "freeCodeCamp", duration: "~2h",
    title: { ar: "Vibe Coding + n8n لبناء أتمتة حقيقية", en: "Combine Vibe Coding & n8n to Build Real AI Apps" },
    desc: {
      ar: "كورس مجاني: عقلية الـ vibe coding وربطها بمبادئ هندسة البرمجيات، وبعدين أتمتة شغل حقيقي بـ n8n.",
      en: "Free course linking the vibe coding mindset to engineering principles, then building production automations with n8n."
    }
  },
  {
    id: "fcc-claude-code", type: "video", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["web", "career"], who: ["some", "zero"],
    url: "https://www.freecodecamp.org/news/claude-code-full-course/",
    provider: "freeCodeCamp", duration: "1.5h",
    title: { ar: "كورس Claude Code كامل من الصفر", en: "Claude Code full course (beginner)" },
    desc: {
      ar: "من مبتدئ تمامًا لحد ما تبني تطبيق وتنشره وتديره على GitHub.",
      en: "From absolute beginner to building, managing on GitHub and deploying apps."
    }
  },
  {
    id: "fcc-claude-essentials", type: "video", lang: "en", cost: "free", level: "pro", stage: 3,
    goals: ["career", "auto"], who: ["dev"],
    url: "https://www.freecodecamp.org/news/claude-code-essentials-exampro/",
    provider: "freeCodeCamp · ExamPro", duration: "12h",
    title: { ar: "Claude Code Essentials — 12 ساعة", en: "Claude Code Essentials (12 hours)" },
    desc: {
      ar: "كورس ضخم للمحترفين: hooks وMCP والوكلاء الفرعيين والربط مع GitHub Actions والمتصفح.",
      en: "A massive deep dive: hooks, MCP, sub-agents, GitHub Actions and browser integrations."
    }
  },
  {
    id: "yt-techwithtim", type: "video", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["web", "career"], who: ["zero", "some"],
    url: "https://www.youtube.com/results?search_query=Tech+With+Tim+Ultimate+Vibe+Coding+Guide+for+Beginners",
    provider: "Tech With Tim", duration: "~24m",
    title: { ar: "الدليل الشامل للـ Vibe Coding للمبتدئين", en: "Ultimate Vibe Coding Guide for Beginners" },
    desc: {
      ar: "من أشهر فيديوهات البداية بالإنجليزي (أكتر من نص مليون مشاهدة). الرابط بيفتح بحث يوتيوب.",
      en: "One of the most-watched beginner walkthroughs (500k+ views). Link opens a YouTube search."
    }
  },
  {
    id: "yt-techwithlucy", type: "video", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["zero"],
    url: "https://www.youtube.com/results?search_query=Tech+With+Lucy+How+to+Vibe+Code+in+2026",
    provider: "Tech With Lucy", duration: "~9m",
    title: { ar: "إزاي تعمل Vibe Code في 2026", en: "How to Vibe Code in 2026 (Full Beginners Tutorial)" },
    desc: {
      ar: "فيديو قصير وبسيط للي لسه بيبدأ خالص. الرابط بيفتح بحث يوتيوب.",
      en: "A short, gentle tutorial for absolute beginners. Link opens a YouTube search."
    }
  },
  {
    id: "yt-saraev", type: "video", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["web", "career"], who: ["some", "dev"],
    url: "https://www.youtube.com/results?search_query=Nick+Saraev+vibe+coding+full+course",
    provider: "Nick Saraev", duration: "~6h",
    title: { ar: "كورس Vibe Coding كامل (6 ساعات)", en: "Vibe Coding Full Course (6 hours)" },
    desc: {
      ar: "كورس طويل لبناء تطبيقات ويب كاملة بوكلاء مثل Antigravity وClaude Code. الرابط بيفتح بحث يوتيوب.",
      en: "A long course on building full-stack web apps with agents like Antigravity and Claude Code. Link opens a YouTube search."
    }
  },
  {
    id: "yt-yc-lightcone", type: "video", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["career", "work"], who: ["all"],
    url: "https://www.youtube.com/results?search_query=Lightcone+Vibe+Coding+Is+The+Future+Y+Combinator",
    provider: "Y Combinator · Lightcone",
    title: { ar: "الـ Vibe Coding هو المستقبل — بودكاست YC", en: "Vibe Coding Is The Future (YC Lightcone)" },
    desc: {
      ar: "نقاش مستثمري Y Combinator عن تأثير الـ vibe coding على الشركات الناشئة وسوق الشغل. الرابط بيفتح بحث يوتيوب.",
      en: "Y Combinator partners on what vibe coding means for startups and hiring. Link opens a YouTube search."
    }
  },
  {
    id: "yt-riley", type: "video", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["web", "mobile"], who: ["zero", "pro"],
    url: "https://www.youtube.com/results?search_query=Riley+Brown+vibe+coding",
    provider: "Riley Brown",
    title: { ar: "قناة Riley Brown — Vibe Coding لغير المبرمجين", en: "Riley Brown: vibe coding for non-coders" },
    desc: {
      ar: "فيديوهات كتير عن بناء تطبيقات ويب وموبايل بدون خلفية برمجية. الرابط بيفتح بحث يوتيوب.",
      en: "Many videos on building web and mobile apps without a coding background. Link opens a YouTube search."
    }
  },
  {
    id: "yt-avthar", type: "video", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web", "auto"], who: ["some", "dev"],
    url: "https://www.youtube.com/results?search_query=AI+with+Avthar+Claude+Code",
    provider: "AI with Avthar",
    title: { ar: "شروحات Claude Code العملية", en: "Practical Claude Code tutorials" },
    desc: {
      ar: "من أكتر القنوات المرجعية لـ Claude Code، ومنها طرق استخدامه بدون terminal. الرابط بيفتح بحث يوتيوب.",
      en: "A go-to channel for Claude Code, including ways to use it without a terminal. Link opens a YouTube search."
    }
  },

  /* ---------------- ألعاب — Games ---------------- */
  {
    id: "enzed-guide", type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["game"], who: ["some", "dev"], featured: true,
    url: "https://github.com/EnzeD/vibe-coding",
    provider: "GitHub · Nicolas Zullo",
    title: { ar: "الدليل الشامل لـ Vibe Coding الألعاب", en: "Ultimate Guide to Vibe Coding (games)" },
    desc: {
      ar: "طريقة مجربة لبناء ألعاب كبيرة: مستند تصميم اللعبة، اختيار التقنيات، ملفات ذاكرة للمشروع، وتنفيذ خطوة خطوة مع اختبار. صاحبها بنى بيها ألعاب ثلاثية الأبعاد.",
      en: "A proven method for bigger games: a game design doc, tech stack, a memory-bank of markdown files, and step-by-step implementation with tests."
    }
  },
  {
    id: "rosebud", type: "tool-guide", lang: "en", cost: "freemium", level: "start", stage: 2,
    goals: ["game", "kids"], who: ["zero", "pro", "some"], featured: true,
    url: "https://rosebud.ai/vibe-coding-tool",
    provider: "Rosebud AI",
    title: { ar: "Rosebud AI — اعمل لعبة بالوصف", en: "Rosebud AI: describe a game, play it" },
    desc: {
      ar: "منصة في المتصفح بتحوّل وصفك للعبة ثنائية أو ثلاثية الأبعاد تتلعب على طول وتتشارك برابط. مفيش تثبيت.",
      en: "Browser platform that turns a description into a playable 2D/3D game (Three.js) with one-click sharing. No installs."
    }
  },
  {
    id: "cinevva-games", type: "guide", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["game"], who: ["zero", "some"],
    url: "https://app.cinevva.com/guides/vibe-coding-games",
    provider: "Cinevva",
    title: { ar: "Vibe Coding الألعاب: تبدأ منين", en: "Vibe Coding Games: how to start" },
    desc: {
      ar: "ليه الألعاب مناسبة جدًا للـ vibe coding، أنواع الأدوات، والفخاخ اللي تتجنبها.",
      en: "Why games suit vibe coding, the two kinds of tools, and the pitfalls to dodge."
    }
  },
  {
    id: "vibe-jam", type: "community", lang: "en", cost: "free", level: "grow", stage: 4,
    goals: ["game"], who: ["all"],
    url: "https://vibejam.com/",
    provider: "Pieter Levels (@levelsio)",
    title: { ar: "Vibe Jam — مسابقة ألعاب بالذكاء الاصطناعي", en: "Vibe Coding Game Jam" },
    desc: {
      ar: "مسابقة سنوية بجوايز نقدية، 90% على الأقل من كود اللعبة لازم يكون من الذكاء الاصطناعي. نسخة 2026 قفلت التسجيل في مايو، فاتفرج على الألعاب المشاركة للإلهام وراقب النسخة الجاية.",
      en: "Annual jam with cash prizes where at least 90% of the code must be AI-written. The 2026 edition closed in May; browse the entries for inspiration and watch for the next one."
    }
  },
  {
    id: "threejs", type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["game"], who: ["some", "dev"],
    url: "https://github.com/mrdoob/three.js",
    provider: "GitHub · three.js",
    title: { ar: "Three.js — محرك ألعاب الويب ثلاثية الأبعاد", en: "Three.js" },
    desc: {
      ar: "المكتبة اللي معظم ألعاب الـ vibe coding ثلاثية الأبعاد على الويب مبنية بيها. قول للذكاء الاصطناعي: استخدم Three.js.",
      en: "The library behind most vibe-coded 3D browser games. Tell your AI: use Three.js."
    }
  },
  {
    id: "phaser", type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["game", "kids"], who: ["some", "dev"],
    url: "https://github.com/phaserjs/phaser",
    provider: "GitHub · Phaser",
    title: { ar: "Phaser — ألعاب ثنائية الأبعاد", en: "Phaser (2D games)" },
    desc: {
      ar: "محرك مجاني لألعاب 2D في المتصفح، ممتاز للألعاب البسيطة والتعليمية.",
      en: "Free engine for 2D browser games, great for simple and educational games."
    }
  },

  /* ---------------- موبايل — Mobile ---------------- */
  {
    id: "rork-tutorial", type: "tool-guide", lang: "en", cost: "freemium", level: "start", stage: 2,
    goals: ["mobile"], who: ["zero", "pro", "some"], featured: true,
    url: "https://www.nocode.mba/articles/rork-tutorial-app",
    provider: "No-Code MBA · Rork",
    title: { ar: "Rork — تطبيقات موبايل حقيقية بالوصف", en: "Rork tutorial: native mobile apps" },
    desc: {
      ar: "Rork بيعمل تطبيقات iOS وأندرويد حقيقية (React Native) وتجربها على موبايلك بمسح QR. الدليل بيشرح كمان النشر على المتاجر (حساب أبل 99$ في السنة).",
      en: "Rork builds real iOS/Android apps (React Native/Expo) you test by scanning a QR code. Covers store publishing too (Apple charges $99/year)."
    }
  },
  {
    id: "a0-vs-rork", type: "guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["mobile"], who: ["zero", "pro", "some"],
    url: "https://vp0.com/blogs/a0-dev-vs-rork",
    provider: "VP0",
    title: { ar: "a0.dev ولا Rork؟", en: "a0.dev vs Rork" },
    desc: {
      ar: "مقارنة بين أشهر أداتين لتطبيقات الموبايل بالوصف: السعر، جودة الكود، والنشر على المتاجر.",
      en: "The two leading prompt-to-mobile-app builders compared on price, code and store publishing."
    }
  },
  {
    id: "aptly", type: "tool-guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["mobile", "kids"], who: ["zero", "pro"],
    url: "https://appinventor.mit.edu/blogs/hal/2022/03/21/Aptly",
    provider: "MIT App Inventor",
    title: { ar: "MIT Aptly — تطبيق موبايل من جملة", en: "MIT Aptly: apps from a sentence" },
    desc: {
      ar: "من MIT: اكتب وصف التطبيق، فيتحول لبلوكات App Inventor تقدر تشوفها وتعدلها. ممتاز للأطفال والمدارس.",
      en: "From MIT: describe an app and get App Inventor blocks you can see and edit. Great for kids and classrooms."
    }
  },

  /* ---------------- أطفال وعائلة — Kids & family ---------------- */
  {
    id: "rosebud-kids", type: "guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["kids", "game"], who: ["all"], featured: true,
    url: "https://lab.rosebud.ai/learn-ai-gamedev-with-your-kids",
    provider: "Rosebud AI",
    title: { ar: "اعمل لعبة مع أولادك", en: "Make a game with your kids" },
    desc: {
      ar: "خطوات لأولياء الأمور غير التقنيين: حوّلوا وقت الشاشة لوقت عيلة واعملوا أول لعبة سوا في 10 دقايق.",
      en: "For non-technical parents: turn screen time into family time and make your first game together in 10 minutes."
    }
  },
  {
    id: "rosebud-kids-steps", type: "guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["kids"], who: ["all"],
    url: "https://lab.rosebud.ai/blog/how-kids-can-create-games-and-games-with-ai-using-rosebud-ai-a-fun-way-to-learn-computational-thinking-ai-and-creativity",
    provider: "Rosebud AI Blog",
    title: { ar: "خطوة بخطوة: الأطفال يعملوا ألعاب", en: "Step by step: kids create games with AI" },
    desc: {
      ar: "أمثلة أوامر جاهزة للأطفال من 7-8 سنين، وإزاي التعديلات بتعلّمهم التفكير الحسابي.",
      en: "Ready prompts for kids aged 7–8+, and how each change teaches computational thinking."
    }
  },
  {
    id: "summer-kids", type: "guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["kids", "game"], who: ["all"],
    url: "https://www.summerengine.com/blog/make-a-game-with-ai-for-kids",
    provider: "Summer Engine",
    title: { ar: "دليل الأهل والمعلمين: لعبة بالذكاء الاصطناعي", en: "Make a game with AI for kids (parent guide)" },
    desc: {
      ar: "إيه اللي يقرره الطفل وإيه اللي يعمله الذكاء الاصطناعي، وإزاي تخلي التجربة آمنة وتخلص.",
      en: "What the kid decides vs what the AI handles, and how to keep it safe and finishable."
    }
  },
  {
    id: "maven-parents", type: "course", lang: "en", cost: "paid", level: "start", stage: 2,
    goals: ["kids"], who: ["all"],
    url: "https://maven.com/vibecode/vibe-code-together-co-creation-learning-via-play-bootcamp-for-parents-kids",
    provider: "Maven",
    title: { ar: "ورشة: Vibe coding مع طفلك", en: "Vibe-coding with your child (workshop)" },
    desc: {
      ar: "ورشة جماعية 8 أيام للأهل والأطفال: كتابة أوامر وبناء تطبيق صغير سوا.",
      en: "8-day cohort for parents and kids: learn prompting and build a tiny app together."
    }
  },

  /* ---------------- مستودعات — GitHub repositories ---------------- */
  {
    id: "awesome-calegario", type: "repo", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["all"], featured: true,
    url: "https://github.com/filipecalegario/awesome-vibe-coding",
    provider: "GitHub · Filipe Calegario",
    title: { ar: "awesome-vibe-coding — أكبر قائمة أدوات", en: "awesome-vibe-coding" },
    desc: {
      ar: "قائمة مرجعية فيها أكتر من 100 أداة مقسمة حسب طريقة الشغل: أدوات المتصفح، المحررات، أدوات الـ terminal.",
      en: "The reference list: 100+ tools organized by how you work, from browser builders to editors and CLIs."
    }
  },
  {
    id: "awesome-aifordev", type: "repo", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["all"],
    url: "https://github.com/ai-for-developers/awesome-vibe-coding",
    provider: "GitHub · ai-for-developers",
    title: { ar: "awesome-vibe-coding (ai-for-developers)", en: "awesome-vibe-coding (ai-for-developers)" },
    desc: {
      ar: "قائمة تانية مختارة بعناية للمحررات والإضافات والأدوات.",
      en: "Another hand-picked list of AI-first editors, extensions and tools."
    }
  },
  {
    id: "awesome-0xwelt", type: "repo", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["all"],
    url: "https://github.com/0xWelt/Awesome-Vibe-Coding",
    provider: "GitHub · 0xWelt",
    title: { ar: "Awesome-Vibe-Coding (بموقع تفاعلي)", en: "Awesome-Vibe-Coding (with website)" },
    desc: {
      ar: "قائمة منظمة كخريطة للمنظومة كلها: الأدوات، الامتدادات، المجتمعات، ومصادر التعلم، ولها موقع.",
      en: "Maps the whole ecosystem (harnesses, extensions, communities, learning) with a companion website."
    }
  },
  {
    id: "rohit-guide", type: "repo", lang: "en", cost: "free", level: "start", stage: 3,
    goals: ["all"], who: ["some", "dev"],
    url: "https://github.com/analyticalrohit/awesome-vibe-coding-guide",
    provider: "GitHub · analyticalrohit",
    title: { ar: "دليل نصائح الـ Vibe Coding", en: "awesome-vibe-coding-guide" },
    desc: {
      ar: "نصائح عملية تقلل الأخطاء وتخلي شغلك مع الذكاء الاصطناعي أسرع وتحت سيطرتك.",
      en: "Best practices and tips for faster, more controlled AI-assisted development."
    }
  },
  {
    id: "khazp-template", type: "repo", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["web", "work", "career"], who: ["zero", "some", "pro"], featured: true,
    url: "https://github.com/KhazP/vibe-coding-prompt-template",
    provider: "GitHub · KhazP",
    title: { ar: "قالب سير العمل: من الفكرة لمنتج في ساعات", en: "Vibe-Coding Workflow (prompt templates)" },
    desc: {
      ar: "5 خطوات بأوامر جاهزة: بحث، مستند متطلبات، تصميم تقني، تعليمات للوكيل، ثم البناء. مناسب جدًا للمبتدئين.",
      en: "Five steps with copy-paste prompts: research, PRD, tech design, agent config, then build. Beginner-friendly."
    }
  },
  {
    id: "context-eng", type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web", "auto"], who: ["some", "dev"],
    url: "https://github.com/coleam00/context-engineering-intro",
    provider: "GitHub · Cole Medin",
    title: { ar: "هندسة السياق — قالب عملي", en: "Context Engineering template" },
    desc: {
      ar: "إزاي تدي وكيل البرمجة كل السياق اللي محتاجه: قواعد، أمثلة، ومستند متطلبات للتنفيذ.",
      en: "Give your coding agent all the context it needs: rules, examples and implementation blueprints (PRPs)."
    }
  },
  {
    id: "spec-kit", type: "repo", lang: "en", cost: "free", level: "pro", stage: 3,
    goals: ["career"], who: ["dev"],
    url: "https://github.com/github/spec-kit",
    provider: "GitHub",
    title: { ar: "Spec Kit من GitHub", en: "GitHub Spec Kit" },
    desc: {
      ar: "أداة GitHub الرسمية للتطوير بالمواصفات، بتشتغل مع Copilot وClaude Code وGemini CLI.",
      en: "GitHub's official toolkit for spec-driven development; works with Copilot, Claude Code and Gemini CLI."
    }
  },
  {
    id: "awesome-claude-code", type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "auto"], who: ["dev", "some"],
    url: "https://github.com/hesreallyhim/awesome-claude-code",
    provider: "GitHub · hesreallyhim",
    title: { ar: "awesome-claude-code", en: "awesome-claude-code" },
    desc: {
      ar: "أشهر قائمة لمهارات وأوامر وإضافات Claude Code.",
      en: "The canonical curated list of Claude Code skills, hooks, commands and plugins."
    }
  },
  {
    id: "cc-best-practice", type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career"], who: ["some", "dev"],
    url: "https://github.com/shanraisshan/claude-code-best-practice",
    provider: "GitHub · shanraisshan",
    title: { ar: "من الـ vibe coding للهندسة بالوكلاء", en: "claude-code-best-practice" },
    desc: {
      ar: "ممارسات وأنماط جاهزة للانتقال من التجريب لشغل احترافي.",
      en: "Patterns and practices for moving from vibe coding to agentic engineering."
    }
  },
  {
    id: "awesome-cursorrules", type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web"], who: ["some", "dev"],
    url: "https://github.com/PatrickJS/awesome-cursorrules",
    provider: "GitHub · PatrickJS",
    title: { ar: "قواعد جاهزة لـ Cursor", en: "awesome-cursorrules" },
    desc: {
      ar: "مجموعة ضخمة من ملفات القواعد اللي بتخلي الذكاء الاصطناعي يلتزم بأسلوب مشروعك.",
      en: "A huge collection of rule files that keep the AI aligned with your project's style."
    }
  },
  {
    id: "awesome-copilot", type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web"], who: ["some", "dev"],
    url: "https://github.com/github/awesome-copilot",
    provider: "GitHub",
    title: { ar: "awesome-copilot", en: "awesome-copilot" },
    desc: {
      ar: "تعليمات ووكلاء ومهارات جاهزة لـ GitHub Copilot من مجتمع GitHub.",
      en: "Community-curated Copilot instructions, agents and skills from GitHub."
    }
  },
  {
    id: "anthropic-skills", type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["auto", "career", "work"], who: ["some", "dev"],
    url: "https://github.com/anthropics/skills",
    provider: "GitHub · Anthropic",
    title: { ar: "مهارات Claude الرسمية (Agent Skills)", en: "Anthropic Agent Skills" },
    desc: {
      ar: "أمثلة رسمية لـ \"مهارات\" تعلّم Claude يعمل مهمة معينة بنفس الطريقة كل مرة.",
      en: "Official examples of skills that teach Claude to do a task the same way every time."
    }
  },
  {
    id: "opencode-repo", tags: ["opencode"], type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web", "auto"], who: ["some", "dev"], featured: true,
    url: "https://github.com/anomalyco/opencode",
    provider: "GitHub · Anomaly (SST)",
    title: { ar: "OpenCode — وكيل برمجة مفتوح المصدر", en: "OpenCode: the open-source coding agent" },
    desc: {
      ar: "بديل مفتوح المصدر لـ Claude Code من أشهر مشاريع 2026 على GitHub. بيشتغل في الـ terminal وسطح المكتب والمحررات مع أي موديل تختاره، حتى الموديلات المحلية.",
      en: "An open-source alternative to Claude Code and one of 2026's most-starred projects. Runs in the terminal, desktop and IDEs with any model, including local ones."
    }
  },
  {
    id: "opencode-guide", tags: ["opencode"], type: "guide", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web"], who: ["some", "dev"],
    url: "https://www.datacamp.com/blog/what-is-opencode",
    provider: "DataCamp",
    title: { ar: "يعني إيه OpenCode؟ وإزاي يختلف عن Claude Code وCursor", en: "What is OpenCode? (vs Claude Code, Cursor, Cline)" },
    desc: {
      ar: "شرح طريقة الشغل، اختيار الموديلات، والفرق بينه وبين Claude Code وCursor وCline.",
      en: "Its workflow, model options, architecture and how it differs from Claude Code, Cursor and Cline."
    }
  },
  {
    id: "opencode-docs", tags: ["opencode"], type: "guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["career", "web", "auto"], who: ["some", "dev"],
    url: "https://opencode.ai/docs",
    provider: "OpenCode",
    title: { ar: "توثيق OpenCode الرسمي", en: "OpenCode official docs" },
    desc: {
      ar: "المرجع الأساسي: التثبيت، ربط المزودين بـ /connect، الإعدادات، والأوامر.",
      en: "The main reference: install, connecting providers with /connect, config and commands."
    }
  },
  {
    id: "opencode-yt-ondrej", tags: ["opencode"], type: "video", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["career", "web", "game"], who: ["some", "dev", "zero"], featured: true,
    url: "https://www.youtube.com/results?search_query=David+Ondrej+OpenCode",
    provider: "David Ondrej", duration: "~1h",
    title: { ar: "شرح OpenCode كامل وبناء لعبة 3D بيه", en: "Full OpenCode tutorial (builds a 3D game)" },
    desc: {
      ar: "ساعة كاملة: الفرق بينه وبين Claude Code، وضعي Plan وBuild، وربط اشتراكاتك، وبناء لعبة ثلاثية الأبعاد من الصفر. الرابط بيفتح بحث يوتيوب.",
      en: "An hour on how it differs from Claude Code, Plan vs Build modes, using your subscriptions, and building a 3D game. Opens a YouTube search."
    }
  },
  {
    id: "opencode-yt-free", tags: ["opencode"], type: "video", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["career", "web", "auto"], who: ["some", "dev", "zero"],
    url: "https://www.youtube.com/results?search_query=OpenCode+free+models+setup+tutorial",
    provider: "YouTube",
    title: { ar: "إعداد OpenCode بموديلات مجانية", en: "Setting up OpenCode with free models" },
    desc: {
      ar: "فيديوهات قصيرة بتشرح ربط OpenCode بموديلات مجانية (Zen وGemini وOpenRouter وOllama). الرابط بيفتح بحث يوتيوب بأحدث النتائج.",
      en: "Short videos on connecting OpenCode to free models (Zen, Gemini, OpenRouter, Ollama). Opens a fresh YouTube search."
    }
  },
  {
    id: "opencode-yt-desktop", tags: ["opencode"], type: "video", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["career", "web"], who: ["zero", "some"],
    url: "https://www.youtube.com/results?search_query=OpenCode+Desktop+app+tutorial",
    provider: "YouTube",
    title: { ar: "OpenCode Desktop — من غير terminal", en: "OpenCode Desktop (no terminal)" },
    desc: {
      ar: "لو الـ terminal مخوّفك: فيه تطبيق سطح مكتب لويندوز وماك ولينكس. الرابط بيفتح بحث يوتيوب.",
      en: "If the terminal scares you, there's a desktop app for Windows, macOS and Linux. Opens a YouTube search."
    }
  },
  {
    id: "opencode-learn", tags: ["opencode"], type: "course", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["career", "web", "auto"], who: ["some", "zero", "dev"],
    url: "https://learnopencode.com/en/",
    provider: "Learn OpenCode",
    title: { ar: "Learn OpenCode — دروس خطوة بخطوة", en: "Learn OpenCode (step-by-step lessons)" },
    desc: {
      ar: "دروس مجانية بقوايم تحقق: التثبيت، ربط كل مزود (منها Copilot)، وأساسيات الواجهة.",
      en: "Free lessons with checklists: install, connecting each provider (Copilot included) and the basics."
    }
  },
  {
    id: "opencode-school", tags: ["opencode"], type: "course", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["career", "web"], who: ["some", "zero"],
    url: "https://opencode.school/lessons/models/",
    provider: "OpenCode School",
    title: { ar: "OpenCode School — دروس عن الموديلات", en: "OpenCode School" },
    desc: {
      ar: "دروس قصيرة عن الموديلات المجانية في Zen وإزاي تختار وتبدّل بينها.",
      en: "Short lessons on Zen's free models and how to choose and switch between them."
    }
  },
  {
    id: "opencode-educative", tags: ["opencode"], type: "course", lang: "en", cost: "paid", level: "grow", stage: 3,
    goals: ["career"], who: ["some", "dev"],
    url: "https://www.educative.io/courses/learn-opencode",
    provider: "Educative",
    title: { ar: "Learn OpenCode — كورس تفاعلي", en: "Learn OpenCode (interactive course)" },
    desc: {
      ar: "كورس نصي تفاعلي: إزاي OpenCode بيقرا المشروع كله، والإشارة للملفات وتشغيل الأوامر، لحد سير العمل المتقدم.",
      en: "Interactive text course: how OpenCode reads your whole repo, referencing files, running commands, and advanced workflows."
    }
  },
  {
    id: "opencode-free-guide", tags: ["opencode"], type: "guide", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["career", "web", "auto"], who: ["some", "zero", "dev"],
    url: "https://pub.towardsai.net/how-to-use-opencode-for-free-the-complete-beginners-guide-c7ebe7f43de3",
    provider: "Towards AI",
    title: { ar: "إزاي تستخدم OpenCode ببلاش", en: "How to use OpenCode for free" },
    desc: {
      ar: "3 طرق من غير ما تدفع: موديلات Zen المجانية، الخطط المجانية للمزودين، والموديلات المحلية بـ Ollama.",
      en: "Three zero-cost routes: Zen's free models, providers' free tiers, and local models via Ollama."
    }
  },
  {
    id: "opencode-yt-nagdy", tags: ["opencode"], type: "video", lang: "ar", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["zero", "some", "dev", "pro"], featured: true, duration: "16m",
    url: "https://www.youtube.com/watch?v=BstWOHHj5bA",
    provider: "أحمد نجدي",
    title: { ar: "إيه هو OpenCode؟ شرح عملي + OpenCode Go و Zen", en: "What is OpenCode? Practical intro + OpenCode Go and Zen (Arabic)" },
    desc: {
      ar: "أحسن نقطة بداية بالعربي: يعني إيه OpenCode، وإزاي تستخدمه، وخطتي Go وZen ومتى تحتاج كل واحدة.",
      en: "The best Arabic starting point: what OpenCode is, how to use it, and what the Go and Zen plans are for."
    }
  },
  {
    id: "opencode-yt-feqh", tags: ["opencode"], type: "video", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["career", "web", "auto", "work"], who: ["zero", "some", "dev"], featured: true, duration: "~90m",
    url: "https://www.youtube.com/watch?v=O5eIAZWoDu8",
    provider: "فقه البرمجة",
    title: { ar: "تعلم بناء المشاريع في أوبن كود في 90 دقيقة", en: "Build projects in OpenCode in 90 minutes (Arabic)" },
    desc: {
      ar: "كورس عربي مركّز: تبني مشاريع كاملة خطوة بخطوة بـ OpenCode من أول التثبيت.",
      en: "A focused Arabic course: build complete projects step by step with OpenCode, starting from install."
    }
  },
  {
    id: "opencode-yt-naman", tags: ["opencode"], type: "video", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["career", "web", "auto"], who: ["zero", "some", "dev"], duration: "1h",
    url: "https://www.youtube.com/watch?v=hR8yktJ0prI",
    provider: "Vibe Coding with Naman",
    title: { ar: "OpenCode — كورس كامل للمبتدئين (2026)", en: "OpenCode Full Course for Beginners (2026)" },
    desc: {
      ar: "كورس إنجليزي كامل من الصفر للمبتدئين: التثبيت، الموديلات، وبناء مشاريع.",
      en: "A complete beginner course in English: install, models, and building projects."
    }
  },
  {
    id: "opencode-yt-desktop-20", tags: ["opencode"], type: "video", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["career", "web", "work", "auto"], who: ["zero", "some", "pro"], duration: "~20m",
    url: "https://www.youtube.com/watch?v=npjJyQnLM6U",
    provider: "Thanh-y David Nguyen",
    title: { ar: "OpenCode Desktop — 80% من الأساسيات في 20 دقيقة", en: "Learn 80% of OpenCode Desktop in 20 Minutes" },
    desc: {
      ar: "شرح للمبتدئين على تطبيق سطح المكتب، من غير terminal. أسرع طريق لأول مشروع.",
      en: "A beginner tutorial on the desktop app, no terminal needed. The quickest route to a first project."
    }
  },
  {
    id: "opencode-yt-erictech", tags: ["opencode"], type: "video", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web", "auto"], who: ["some", "dev"], duration: "23m",
    url: "https://www.youtube.com/watch?v=0xKE1UHpSfk",
    provider: "Eric Tech",
    title: { ar: "OpenCode: موديلات مجانية وSkills وMCPs", en: "OpenCode Full Tutorial: Free Models, Skills & MCPs" },
    desc: {
      ar: "الخطوة اللي بعد الأساسيات: موديلات مجانية، وملف AGENTS.md، ومهارات وأدوات MCP. من أكتر شروحات OpenCode مشاهدة (حوالي 200 ألف).",
      en: "The step after the basics: free models, AGENTS.md, skills and MCP tools. One of the most-watched OpenCode tutorials (~200K views)."
    }
  },
  {
    id: "yt-metics-vibe-guide", type: "video", lang: "en", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["zero", "some", "pro"], duration: "34m", featured: true,
    url: "https://www.youtube.com/watch?v=-VuZmoc-Sq8",
    provider: "Metics Media",
    title: { ar: "الدليل الشامل للمبتدئين في Vibe Coding", en: "The Ultimate Beginner's Guide to Vibe Coding" },
    desc: {
      ar: "من أكتر الشروحات مشاهدة للمبتدئين (أكتر من 700 ألف)، ونزل في أبريل 2026. مقدمة سريعة قبل ما تختار أداة.",
      en: "One of the most-watched beginner explainers (700K+ views), published April 2026. A fast intro before you pick a tool."
    }
  },
  {
    id: "yt-naman-vibe-full", type: "video", lang: "en", cost: "free", level: "start", stage: 2,
    goals: ["web", "work", "career"], who: ["zero", "some", "pro"], duration: "2h 20m",
    url: "https://www.youtube.com/watch?v=RKOXmCK4Khw",
    provider: "Vibe Coding with Naman",
    title: { ar: "كورس Vibe Coding كامل للمبتدئين", en: "Vibe Coding Full Course for Beginners" },
    desc: {
      ar: "ساعتين ونص تقريبًا: تبني مشاريع بأدوات زي Replit وCursor وLovable. مناسب لو عايز كورس طويل في مكان واحد.",
      en: "About 2h20m building projects with tools such as Replit, Cursor and Lovable. Good if you want one long, complete course."
    }
  },
  {
    id: "opencode-docs-agents", tags: ["opencode"], type: "guide", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web", "auto"], who: ["some", "dev"],
    url: "https://opencode.ai/docs/agents/",
    provider: "OpenCode",
    title: { ar: "الوكلاء في OpenCode: Plan وBuild ووكلاء مخصصين", en: "OpenCode agents: Plan, Build and custom agents" },
    desc: {
      ar: "إزاي تخطط قبل التنفيذ وتعمل وكلاء متخصصين، وده اللي بيطوّر شغلك لمشاريع أكبر.",
      en: "How to plan before building and define specialised agents, which scales your work to bigger projects."
    }
  },
  {
    id: "opencode-docs-rules", tags: ["opencode"], type: "guide", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web", "auto", "work"], who: ["some", "dev"],
    url: "https://docs.opencode.ai/docs/rules/",
    provider: "OpenCode",
    title: { ar: "ملف AGENTS.md: علّم OpenCode قواعد مشروعك", en: "Rules and AGENTS.md: teach OpenCode your project" },
    desc: {
      ar: "اكتب قواعد مشروعك مرة واحدة والوكيل يلتزم بيها في كل جلسة.",
      en: "Write your project's rules once and the agent follows them in every session."
    }
  },
  {
    id: "opencode-docs-permissions", tags: ["opencode"], type: "guide", lang: "en", cost: "free", level: "grow", stage: 4,
    goals: ["all"], who: ["some", "dev", "pro"],
    url: "https://opencode.ai/docs/permissions/",
    provider: "OpenCode",
    title: { ar: "الصلاحيات: اتحكم في اللي يقدر الوكيل يعمله", en: "Permissions: control what the agent may do" },
    desc: {
      ar: "اطلب موافقتك قبل الأوامر الخطرة وتعديل الملفات، وده أهم حاجة للأمان وانت بتشتغل مع وكيل.",
      en: "Require approval before risky commands and file edits. Essential for staying safe while an agent works."
    }
  },
  {
    id: "opencode-docs-github", tags: ["opencode"], type: "guide", lang: "en", cost: "free", level: "pro", stage: 4,
    goals: ["career", "web", "auto"], who: ["dev", "some"],
    url: "https://docs.opencode.ai/docs/github/",
    provider: "OpenCode",
    title: { ar: "OpenCode مع GitHub: مراجعة ونشر تلقائي", en: "OpenCode on GitHub: automated review and shipping" },
    desc: {
      ar: "شغّل OpenCode داخل issues وpull requests عشان يراجع ويصلّح قبل ما تنشر.",
      en: "Run OpenCode inside issues and pull requests to review and fix before you ship."
    }
  },
  {
    id: "etallem-vibe-course", type: "video", lang: "ar", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["zero", "some", "pro"], featured: true,
    url: "https://www.youtube.com/watch?v=wMb5mYvksiM",
    provider: "اتعلم ببساطة",
    title: { ar: "كورس Vibe Coding بالعربي", en: "Vibe Coding course (Arabic)" },
    desc: {
      ar: "كورس عربي من الصفر يشرح فكرة الـ vibe coding وإزاي تبدأ تبني بيه.",
      en: "An Arabic course from zero explaining vibe coding and how to start building with it."
    }
  },
  {
    id: "etallem-claude-playlist", type: "playlist", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["all"], who: ["zero", "some", "pro"],
    url: "https://www.youtube.com/playlist?list=PL8DDsWuvM_EU8_SW9iNfv_Nj12VZUA4jM",
    provider: "اتعلم ببساطة",
    title: { ar: "تعلم Claude من الصفر", en: "Learn Claude from scratch (Arabic playlist)" },
    desc: {
      ar: "قائمة عربية تتعلم فيها Claude خطوة بخطوة. مناسبة لو لسه مبتدئ وعايز تبدأ بأداة جاهزة.",
      en: "An Arabic playlist teaching Claude step by step; good if you are new and want a ready-made tool first."
    }
  },
  {
    id: "nour-homsi-vibe", type: "video", lang: "ar", cost: "free", level: "grow", stage: 1,
    goals: ["web", "career", "work", "auto"], who: ["some", "dev", "pro"],
    url: "https://www.youtube.com/watch?v=dnkG2WdHLSU",
    provider: "Nour Homsi",
    title: { ar: "انسى البرمجة التقليدية: منهج Vibe Coding لبناء أنظمة حقيقية", en: "Beyond traditional coding: a Vibe Coding method for real systems (Arabic)" },
    desc: {
      ar: "منهج عملي لبناء أنظمة حقيقية بالـ vibe coding، مش مجرد تجارب صغيرة.",
      en: "A practical method for building real systems with vibe coding, not just small experiments."
    }
  },
  {
    id: "vibe-kanban", type: "repo", lang: "en", cost: "free", level: "pro", stage: 3,
    goals: ["career"], who: ["dev"],
    url: "https://github.com/BloopAI/vibe-kanban",
    provider: "GitHub · BloopAI",
    title: { ar: "Vibe Kanban — إدارة كذا وكيل", en: "Vibe Kanban" },
    desc: {
      ar: "لوحة لتنظيم شغل كذا وكيل برمجة (Claude Code وGemini CLI) في نفس الوقت.",
      en: "A board to orchestrate several coding agents (Claude Code, Gemini CLI) in parallel."
    }
  },
  {
    id: "dlai-sdd-files", type: "repo", lang: "en", cost: "free", level: "grow", stage: 3,
    goals: ["career"], who: ["some", "dev"],
    url: "https://github.com/https-deeplearning-ai/sc-spec-driven-development-files",
    provider: "GitHub · DeepLearning.AI",
    title: { ar: "ملفات كورس التطوير بالمواصفات", en: "Spec-Driven Development course files" },
    desc: {
      ar: "الكود المصاحب لكورس DeepLearning.AI، كل فيديو له حالة المشروع الكاملة.",
      en: "Companion code for the DeepLearning.AI course; each video folder has the full project state."
    }
  },

  /* =============== مصادر عربية — Arabic resources =============== */
  {
    id: "ar-seo-equation", type: "playlist", lang: "ar", cost: "free", level: "grow", stage: 2,
    goals: ["web", "career"], who: ["some", "zero", "dev"], featured: true,
    url: "https://www.youtube.com/playlist?list=PLTqMCL6K1Pb1Uf5r4KxrqLZMEk3VEqKHf",
    provider: "SEO Equation (يوتيوب)", duration: "9 فيديوهات",
    title: { ar: "كورس الفايب كودينج — Vibe Coding MasterClass", en: "Vibe Coding MasterClass (Arabic playlist)" },
    desc: {
      ar: "كورس عملي بالعامية المصرية من الصفر لتطبيقات ويب كاملة: 6 مهارات أساسية، تجهيز الفكرة بـ ChatGPT/Claude، بناء الواجهات وربطها بالـ API، قواعد البيانات والنشر.",
      en: "Practical Arabic (Egyptian) course: six core skills, shaping the idea with ChatGPT/Claude, building UIs, connecting APIs, databases and deployment."
    }
  },
  {
    id: "ar-seo-lesson1", type: "video", lang: "ar", cost: "free", level: "start", stage: 1,
    goals: ["web", "career", "work"], who: ["zero", "some"],
    url: "https://www.youtube.com/watch?v=AqiXFGQn3Zk",
    provider: "SEO Equation",
    title: { ar: "فايب كودينج: الدرس الأول — 6 مهارات", en: "Vibe coding lesson 1: six skills (Arabic)" },
    desc: {
      ar: "المهارات الست اللي محتاجها عشان تحترف البرمجة بالذكاء الاصطناعي، وأهمها عقلية صاحب المشروع.",
      en: "The six skills you need, starting with a business mindset (Arabic)."
    }
  },
  {
    id: "ar-seo-lesson3", type: "video", lang: "ar", cost: "free", level: "grow", stage: 2,
    goals: ["web", "career"], who: ["some", "zero"],
    url: "https://www.youtube.com/watch?v=tPb5zaNTmtY",
    provider: "SEO Equation",
    title: { ar: "فايب كودينج: الدرس الثالث — من الفكرة للبناء", en: "Vibe coding lesson 3 (Arabic)" },
    desc: {
      ar: "الانتقال من صياغة الفكرة مع ChatGPT وClaude لمرحلة بناء المنتج فعليًا.",
      en: "Moving from shaping the idea with ChatGPT/Claude to actually building the product."
    }
  },
  {
    id: "ar-seo-lesson5", type: "video", lang: "ar", cost: "free", level: "grow", stage: 3,
    goals: ["web", "career"], who: ["some", "dev"],
    url: "https://www.youtube.com/watch?v=VvcZgOIzWrs",
    provider: "SEO Equation",
    title: { ar: "فايب كودينج: الدرس الخامس — ربط الواجهة بالـ API", en: "Vibe coding lesson 5: UI ↔ API (Arabic)" },
    desc: {
      ar: "ربط الواجهة الأمامية بالواجهات البرمجية اللي اتعملت في الدروس اللي فاتت.",
      en: "Connecting the front end to the APIs built in earlier lessons."
    }
  },
  {
    id: "ar-future", type: "video", lang: "ar", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["zero", "pro"],
    url: "https://www.youtube.com/watch?v=_7B67fuXN6o",
    provider: "يوتيوب",
    title: { ar: "الفايب كودينج هو المستقبل", en: "Vibe coding is the future (Arabic)" },
    desc: {
      ar: "فيديو تعريفي بالعامية المصرية: هل انتهى عصر كتابة الكود حرفيًا؟",
      en: "Egyptian-Arabic intro: is hand-writing code over?"
    }
  },
  {
    id: "ar-power", type: "video", lang: "ar", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["zero", "pro"],
    url: "https://www.youtube.com/watch?v=tnO17_YVuyQ",
    provider: "يوتيوب",
    title: { ar: "قوة الفايب كودنج", en: "The power of vibe coding (Arabic)" },
    desc: {
      ar: "كل حاجة عن الفكرة: إزاي الذكاء الاصطناعي بيكتب الكود بدالك، بالعامية المصرية.",
      en: "Everything about the idea in Egyptian Arabic: how AI writes the code for you."
    }
  },
  {
    id: "ar-khalifa", type: "video", lang: "ar", cost: "free", level: "start", stage: 1,
    goals: ["career", "work"], who: ["all"],
    url: "https://www.youtube.com/watch?v=2O76fUq7dxY",
    provider: "د. إيهاب خليفة · مركز المستقبل",
    title: { ar: "الفايب كودينج وتأثيره على وظائفنا", en: "Vibe coding and our jobs (Arabic talk)" },
    desc: {
      ar: "قراءة في تأثير الذكاء الاصطناعي والـ vibe coding على الوظائف والتعليم.",
      en: "An Arabic talk on what AI and vibe coding mean for jobs and education."
    }
  },
  {
    id: "ar-hamza", type: "video", lang: "ar", cost: "free", level: "start", stage: 1,
    goals: ["career"], who: ["some", "dev"],
    url: "https://www.youtube.com/results?search_query=%D8%AD%D9%85%D8%B2%D8%A9+%D8%B3%D8%A7%D9%84%D9%85+vibe+coding",
    provider: "حمزة سالم",
    title: { ar: "شو يعني Vibe Coding؟ (تحذير للمبتدئين)", en: "What is vibe coding? A warning (Arabic)" },
    desc: {
      ar: "رأي مهم لو هدفك تشتغل مبرمج: افهم المنطق الأول واستخدم الأدوات للتسريع. الرابط بيفتح بحث يوتيوب.",
      en: "Important if you want a coding career: learn the logic first, then use AI to speed up. Opens a YouTube search."
    }
  },
  {
    id: "ar-sarhan", type: "video", lang: "ar", cost: "free", level: "start", stage: 1,
    goals: ["web", "work"], who: ["zero", "pro"],
    url: "https://www.youtube.com/results?search_query=%D8%B9%D9%85%D8%A7%D8%AF+%D8%B3%D8%B1%D8%AD%D8%A7%D9%86+%D9%81%D8%A7%D9%8A%D8%A8+%D9%83%D9%88%D8%AF%D9%8A%D9%86%D8%AC",
    provider: "عماد سرحان",
    title: { ar: "البرمجة الوصفية (فايب كودينج) — شرح عملي", en: "Descriptive programming explained (Arabic)" },
    desc: {
      ar: "شرح عربي لبناء تطبيق بالذكاء الاصطناعي بدون كود. الرابط بيفتح بحث يوتيوب.",
      en: "Arabic walkthrough of building an app with AI and no code. Opens a YouTube search."
    }
  },
  {
    id: "ar-m3aarf", type: "course", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["web", "career"], who: ["some"],
    url: "https://www.m3aarf.com/lesson/611844-video",
    provider: "معارف · يوسف أحمد", duration: "5 دروس",
    title: { ar: "أدوات الذكاء الاصطناعي من الصفر — درس Cursor", en: "AI tools from scratch: Cursor lesson (Arabic)" },
    desc: {
      ar: "دورة عربية مجانية بشهادة، وفيها درس كامل لتعلم Cursor والـ vibe coding من الصفر.",
      en: "Free Arabic course with a certificate, including a full Cursor vibe coding lesson."
    }
  },
  {
    id: "ar-coddy-prompts", type: "course", lang: "ar", cost: "free", level: "start", stage: 1,
    goals: ["all"], who: ["all"], featured: true,
    url: "https://coddy.tech/landing/ar/prompts",
    provider: "Coddy",
    title: { ar: "تعلّم هندسة الأوامر — دورة تفاعلية بالعربي", en: "Prompt engineering (interactive, Arabic UI)" },
    desc: {
      ar: "23 درس تفاعلي تكتب فيهم أوامر حقيقية وتختبرها، مع شهادة مجانية. أساس مهم قبل أي vibe coding.",
      en: "23 interactive lessons where you write and test real prompts, with a free certificate."
    }
  },
  {
    id: "ar-udemy-claude", type: "course", lang: "ar", cost: "paid", level: "start", stage: 2,
    goals: ["work", "auto", "web"], who: ["zero", "pro", "some"],
    url: "https://www.udemy.com/course/claude-ai-masterclass-in-arabic/",
    provider: "Udemy",
    title: { ar: "ماستركلاس Claude AI بالعربي", en: "Claude AI Masterclass (Arabic)" },
    desc: {
      ar: "Claude من البداية: المشاريع، Artifacts، المهارات، Claude Desktop، وبداية Claude Code لتعديل موقع جاهز.",
      en: "Claude from the start: projects, artifacts, skills, the desktop app, and getting started with Claude Code."
    }
  },
  {
    id: "ar-udemy-3d", type: "course", lang: "ar", cost: "paid", level: "grow", stage: 3,
    goals: ["web"], who: ["some", "dev"],
    url: "https://www.udemy.com/course/claudecodefable5/",
    provider: "Udemy",
    title: { ar: "مواقع ثلاثية الأبعاد بـ Claude Code | بالعربي", en: "3D websites with Claude Code (Arabic)" },
    desc: {
      ar: "بناء مواقع بتصميمات مبهرة وتأثيرات ثلاثية الأبعاد باستخدام Claude Code.",
      en: "Building striking 3D-effect websites with Claude Code."
    }
  },
  {
    id: "ar-vibecoding-ps", type: "course", lang: "ar", cost: "paid", level: "start", stage: 2,
    goals: ["web", "career"], who: ["zero", "some"],
    url: "https://vibecoding.ps/",
    provider: "أكاديمية فايب كودنج",
    title: { ar: "دورة Vibe Coding الشاملة (8 أسابيع)", en: "Vibe Coding Academy (Arabic, 8 weeks)" },
    desc: {
      ar: "دورة عربية مع مدربين: بناء متجر إلكتروني ونظام مالي ونظام مهام بالذكاء الاصطناعي.",
      en: "Instructor-led Arabic course building an online store, a finance system and a task manager."
    }
  },
  {
    id: "ar-quill", type: "community", lang: "ar", cost: "paid", level: "start", stage: 2,
    goals: ["web", "mobile"], who: ["zero", "pro"],
    url: "https://x.com/Quill_Edu/status/2014408837348917611",
    provider: "كويل · م. سعود الغامدي",
    title: { ar: "دورة كويل: ابنِ تطبيقك بالذكاء الاصطناعي", en: "Quill: build your app with AI (Arabic)" },
    desc: {
      ar: "دورة مباشرة باللهجة الخليجية لبناء موقع أو تطبيق في أقل من ساعة. تابع الحساب لمواعيد الدفعات الجاية.",
      en: "Live Arabic (Gulf) course on building a site or app in under an hour. Follow for future cohorts."
    }
  },
  {
    id: "ar-nxcode-cc", type: "guide", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["web", "career"], who: ["some", "dev"],
    url: "https://www.nxcode.io/ar/resources/news/claude-code-tutorial-beginners-guide-2026",
    provider: "NxCode",
    title: { ar: "شرح Claude Code للمبتدئين (مقال)", en: "Claude Code for beginners (Arabic article)" },
    desc: {
      ar: "دليل مكتوب بالعربي: التثبيت، أول جلسة، ملف CLAUDE.md، ووضع التخطيط.",
      en: "Arabic guide: install, first session, CLAUDE.md and plan mode."
    }
  },
  {
    id: "ar-myclaw-cc", type: "guide", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["web", "career"], who: ["some", "dev"],
    url: "https://myclaw.ai/ar/blog/claude-code-for-beginners",
    provider: "MyClaw",
    title: { ar: "Claude Code للمبتدئين: خطوة بخطوة", en: "Claude Code step by step (Arabic)" },
    desc: {
      ar: "أي خطة تحتاجها، وإزاي تثبّت Claude Code وتبدأ أول جلسة على ويندوز أو ماك.",
      en: "Which plan you need and how to install and start on Windows or macOS."
    }
  },
  {
    id: "ar-lovable-cursor", type: "guide", lang: "ar", cost: "free", level: "start", stage: 1,
    goals: ["web", "work"], who: ["zero", "pro", "some"],
    url: "https://omidsaffari.com/ar/blog/lovable-vs-cursor-ar",
    provider: "Omid Saffari",
    title: { ar: "Lovable أم Cursor في 2026؟", en: "Lovable or Cursor? (Arabic)" },
    desc: {
      ar: "مقارنة عربية واضحة: Lovable للي بيبدأ من فكرة، وCursor للي عنده كود محتاج يتطور ويتصان.",
      en: "Clear Arabic comparison: Lovable to start from an idea, Cursor to maintain real code."
    }
  },
  {
    id: "ar-agentic", type: "guide", lang: "ar", cost: "free", level: "grow", stage: 3,
    goals: ["career"], who: ["some", "dev"],
    url: "https://www.unite.ai/ar/vibe-coding-vs-agentic-engineering-ai-software-development/",
    provider: "Unite.AI",
    title: { ar: "من الـ Vibe Coding للهندسة بالوكلاء", en: "Vibe coding vs agentic engineering (Arabic)" },
    desc: {
      ar: "مقال رأي: ليه الشغل الاحترافي بقى اسمه هندسة بالوكلاء، وإيه الفرق في المسؤولية.",
      en: "Opinion piece on why professional work is now called agentic engineering, and what changes in responsibility."
    }
  },
  {
    id: "ar-yt-claude-code", type: "video", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["web", "career", "auto"], who: ["some", "dev"],
    url: "https://www.youtube.com/results?search_query=%D8%AA%D8%B9%D9%84%D9%85+Claude+Code+%D9%85%D9%86+%D8%A7%D9%84%D8%B5%D9%81%D8%B1+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A",
    provider: "بحث يوتيوب",
    title: { ar: "شروحات Claude Code بالعربي", en: "Claude Code tutorials in Arabic (search)" },
    desc: {
      ar: "فيه كذا كورس عربي منتشر زي \"الكورس الشامل لـ Claude Code\" و\"تعلم Claude Code من الصفر بالعربي\". الرابط بيفتح بحث يوتيوب بأحدث النتائج.",
      en: "Several Arabic courses exist (e.g. full Claude Code courses from zero). Opens a fresh YouTube search."
    }
  },
  {
    id: "ar-yt-aistudio", type: "video", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["web", "mobile", "work"], who: ["zero", "pro"],
    url: "https://www.youtube.com/results?search_query=Google+AI+Studio+%D8%A8%D9%86%D8%A7%D8%A1+%D8%AA%D8%B7%D8%A8%D9%8A%D9%82+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A",
    provider: "بحث يوتيوب",
    title: { ar: "Google AI Studio بالعربي: تطبيق في دقايق", en: "Google AI Studio in Arabic (search)" },
    desc: {
      ar: "شروحات عربية لبناء تطبيقات ويب وأندرويد مجانًا بـ AI Studio وأوامر بالعربي. الرابط بيفتح بحث يوتيوب.",
      en: "Arabic walkthroughs of free web/Android apps with AI Studio and Arabic prompts. Opens a YouTube search."
    }
  },
  {
    id: "ar-yt-lovable", type: "video", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["web", "work"], who: ["zero", "pro"],
    url: "https://www.youtube.com/results?search_query=Lovable+%D8%B4%D8%B1%D8%AD+%D8%B9%D8%B1%D8%A8%D9%8A",
    provider: "بحث يوتيوب",
    title: { ar: "شرح Lovable بالعربي", en: "Lovable tutorials in Arabic (search)" },
    desc: {
      ar: "أسرع طريقة لموقع حقيقي من غير كود. الرابط بيفتح بحث يوتيوب بالعربي.",
      en: "The fastest route to a real website without code. Opens an Arabic YouTube search."
    }
  },
  {
    id: "ar-yt-rork", type: "video", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["mobile"], who: ["zero", "pro", "some"],
    url: "https://www.youtube.com/results?search_query=Rork+%D8%AA%D8%B7%D8%A8%D9%8A%D9%82+%D9%85%D9%88%D8%A8%D8%A7%D9%8A%D9%84+%D8%A8%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1+%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A",
    provider: "بحث يوتيوب",
    title: { ar: "تطبيق موبايل بالذكاء الاصطناعي (Rork) بالعربي", en: "Mobile apps with Rork in Arabic (search)" },
    desc: {
      ar: "شروحات عربية لبناء تطبيق iOS وأندرويد بدون كود وتجربته على موبايلك. الرابط بيفتح بحث يوتيوب.",
      en: "Arabic tutorials on building iOS/Android apps without code. Opens a YouTube search."
    }
  },
  {
    id: "ar-yt-games", type: "video", lang: "ar", cost: "free", level: "start", stage: 2,
    goals: ["game", "kids"], who: ["all"],
    url: "https://www.youtube.com/results?search_query=%D8%B5%D9%86%D8%B9+%D9%84%D8%B9%D8%A8%D8%A9+%D8%A8%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1+%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A+%D8%A8%D8%AF%D9%88%D9%86+%D8%A8%D8%B1%D9%85%D8%AC%D8%A9",
    provider: "بحث يوتيوب",
    title: { ar: "صنع لعبة بالذكاء الاصطناعي بدون برمجة", en: "Making games with AI, no code (Arabic search)" },
    desc: {
      ar: "شروحات عربية لألعاب ثنائية وثلاثية الأبعاد بالوصف. الرابط بيفتح بحث يوتيوب.",
      en: "Arabic tutorials for prompt-made 2D/3D games. Opens a YouTube search."
    }
  },
  {
    id: "ar-yt-cursor", type: "video", lang: "ar", cost: "free", level: "grow", stage: 3,
    goals: ["career", "web"], who: ["some", "dev"],
    url: "https://www.youtube.com/results?search_query=%D8%B4%D8%B1%D8%AD+Cursor+AI+%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A",
    provider: "بحث يوتيوب",
    title: { ar: "شرح Cursor بالعربي", en: "Cursor tutorials in Arabic (search)" },
    desc: {
      ar: "للي عنده خلفية برمجة وعايز يسرّع شغله بمحرر ذكي. الرابط بيفتح بحث يوتيوب.",
      en: "For people with some coding background who want an AI editor. Opens a YouTube search."
    }
  }
];
