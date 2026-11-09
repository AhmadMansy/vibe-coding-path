/* =====================================================================
   محتوى المسارات والأوامر — Path logic, prompts and tips
   كل النصوص هنا قابلة للتعديل.  Every text here is editable.
   ===================================================================== */

window.VC_CONTENT = {

  /* الأهداف — Goals shown in the wizard */
  goals: [
    { id: "web",    icon: "web",    ar: "موقع أو تطبيق ويب",      en: "A website or web app",        hint: { ar: "متجر، صفحة لشغلك، بورتفوليو، حجز مواعيد", en: "Store, business page, portfolio, bookings" } },
    { id: "game",   icon: "game",   ar: "لعبة",                    en: "A game",                      hint: { ar: "2D أو 3D تتلعب في المتصفح", en: "2D or 3D, playable in the browser" } },
    { id: "mobile", icon: "mobile", ar: "تطبيق موبايل",            en: "A mobile app",                hint: { ar: "أندرويد و iOS", en: "Android and iOS" } },
    { id: "work",   icon: "work",   ar: "برنامج لمهنتي أو شغلي",   en: "A tool for my job",           hint: { ar: "عيادة، مدرسة، محل، مكتب حسابات…", en: "Clinic, school, shop, office…" } },
    { id: "kids",   icon: "kids",   ar: "حاجة لأولادي أو للتعليم",  en: "Something for my kids / learning", hint: { ar: "لعبة تعليمية، اختبار، قصة تفاعلية", en: "Educational game, quiz, interactive story" } },
    { id: "auto",   icon: "auto",   ar: "أتمتة شغل متكرر",         en: "Automate repetitive work",    hint: { ar: "تقارير، إيميلات، جداول", en: "Reports, emails, spreadsheets" } },
    { id: "career", icon: "career", ar: "أشتغل في البرمجة",        en: "A career in software",        hint: { ar: "مطور مدعوم بالذكاء الاصطناعي", en: "Become an AI-augmented developer" } }
  ],

  /* الخلفية — Backgrounds */
  backgrounds: [
    { id: "zero", icon: "spark",  ar: "أول مرة خالص",                 en: "Total beginner",        hint: { ar: "عمري ما كتبت كود", en: "I've never written code" } },
    { id: "some", icon: "sprout", ar: "جربت برمجة قبل كده",           en: "I tried coding before", hint: { ar: "كورس أو اتنين، فاهم شوية", en: "A course or two, some basics" } },
    { id: "dev",  icon: "code",   ar: "مبرمج",                         en: "I'm a developer",       hint: { ar: "بشتغل أو بدرس برمجة", en: "I code for work or study" } },
    { id: "pro",  icon: "badge",  ar: "عندي مهنة ومحتاج برنامج ليها", en: "I have a profession",   hint: { ar: "دكتور، مدرس، محاسب، صاحب محل…", en: "Doctor, teacher, accountant, shop owner…" } }
  ],

  /* المهن — Professions (shown when background = pro or goal = work) */
  professions: [
    { id: "clinic",  ar: "طبيب / عيادة",          en: "Doctor / clinic" },
    { id: "teacher", ar: "مدرس / تعليم",           en: "Teacher / education" },
    { id: "shop",    ar: "محل / تجارة",            en: "Shop / retail" },
    { id: "account", ar: "محاسب / مالية",          en: "Accountant / finance" },
    { id: "law",     ar: "محامي / مكتب",           en: "Lawyer / office" },
    { id: "eng",     ar: "مهندس / مقاولات",        en: "Engineer / construction" },
    { id: "food",    ar: "مطعم / مطبخ بيتي",       en: "Restaurant / home kitchen" },
    { id: "other",   ar: "حاجة تانية",             en: "Something else" }
  ],

  /* مراحل المسار — The four stages of every path */
  stages: [
    { n: 1, ar: "افهم الفكرة",   en: "Get the idea",     sub: { ar: "إيه هو الـ vibe coding وإيه حدوده", en: "What vibe coding is and where it stops" } },
    { n: 2, ar: "ابنِ أول حاجة", en: "Build your first", sub: { ar: "أداة واحدة ومشروع صغير لحد ما يشتغل", en: "One tool, one small project, until it works" } },
    { n: 3, ar: "طوّر طريقتك",   en: "Level up",         sub: { ar: "أوامر أحسن، تنظيم، ومشاريع أكبر", en: "Better prompts, structure and bigger projects" } },
    { n: 4, ar: "انشر بأمان",    en: "Ship safely",      sub: { ar: "أمان، نشر، ومجتمع يساعدك", en: "Security, publishing and a community" } }
  ],

  /* عدد الأسابيع لكل مرحلة حسب الخلفية — weeks per stage by background (for the timeline chart) */
  weeks: {
    zero: [1, 2, 3, 2],
    some: [0.5, 1.5, 3, 2],
    dev:  [0.5, 1, 2, 1.5],
    pro:  [1, 2, 2, 2]
  },

  /* الأدوات المقترحة حسب الهدف والخلفية — recommended tools (ids from tools.js), first = main pick */
  toolPicks: {
    web:    { zero: ["lovable", "ai-studio", "claude"], some: ["lovable", "replit", "bolt"], dev: ["claude-code", "cursor", "v0"], pro: ["lovable", "base44", "ai-studio"] },
    game:   { zero: ["rosebud-tool", "claude", "ai-studio"], some: ["rosebud-tool", "bolt", "cursor"], dev: ["claude-code", "cursor", "threejs-tool"], pro: ["rosebud-tool", "claude", "bolt"] },
    mobile: { zero: ["rork", "ai-studio", "app-inventor"], some: ["rork", "a0", "replit"], dev: ["claude-code", "cursor", "rork"], pro: ["rork", "ai-studio", "a0"] },
    work:   { zero: ["claude", "base44", "lovable"], some: ["replit", "lovable", "base44"], dev: ["claude-code", "cursor", "replit"], pro: ["base44", "lovable", "claude"] },
    kids:   { zero: ["rosebud-tool", "claude", "app-inventor"], some: ["rosebud-tool", "claude", "ai-studio"], dev: ["claude-code", "rosebud-tool", "cursor"], pro: ["rosebud-tool", "claude", "app-inventor"] },
    auto:   { zero: ["claude", "n8n", "base44"], some: ["n8n", "claude", "replit"], dev: ["claude-code", "n8n", "opencode"], pro: ["claude", "n8n", "base44"] },
    career: { zero: ["replit", "copilot", "cursor"], some: ["cursor", "claude-code", "copilot"], dev: ["claude-code", "opencode", "cursor"], pro: ["replit", "cursor", "claude-code"] }
  },

  /* مسار "ببلاش" — free-budget picks. OpenCode is in every list (core of the free path) */
  toolPicksFree: {
    web:    { zero: ["ai-studio", "opencode", "claude"], some: ["opencode", "ai-studio", "replit"], dev: ["opencode", "gemini-cli", "cursor"], pro: ["ai-studio", "opencode", "claude"] },
    game:   { zero: ["rosebud-tool", "opencode", "claude"], some: ["opencode", "rosebud-tool", "ai-studio"], dev: ["opencode", "gemini-cli", "threejs-tool"], pro: ["rosebud-tool", "opencode", "claude"] },
    mobile: { zero: ["ai-studio", "opencode", "app-inventor"], some: ["opencode", "ai-studio", "app-inventor"], dev: ["opencode", "gemini-cli", "ai-studio"], pro: ["ai-studio", "opencode", "app-inventor"] },
    work:   { zero: ["claude", "opencode", "ai-studio"], some: ["opencode", "claude", "ai-studio"], dev: ["opencode", "gemini-cli", "claude"], pro: ["claude", "opencode", "ai-studio"] },
    kids:   { zero: ["rosebud-tool", "claude", "opencode"], some: ["rosebud-tool", "opencode", "claude"], dev: ["opencode", "rosebud-tool", "claude"], pro: ["rosebud-tool", "claude", "opencode"] },
    auto:   { zero: ["claude", "n8n", "opencode"], some: ["opencode", "n8n", "claude"], dev: ["opencode", "n8n", "gemini-cli"], pro: ["claude", "n8n", "opencode"] },
    career: { zero: ["opencode", "ai-studio", "claude"], some: ["opencode", "gemini-cli", "cursor"], dev: ["opencode", "gemini-cli", "aider"], pro: ["opencode", "ai-studio", "cursor"] }
  },

  /* أفكار أول مشروع — first-project ideas. key = goal or goal:profession */
  projects: {
    "web":          { ar: "صفحة لمشروعك فيها المنتجات وزرار واتساب للطلب", en: "A page for your business with products and a WhatsApp order button" },
    "game":         { ar: "لعبة صاروخ بيتفادى النيازك وبيجمع نجوم", en: "A rocket that dodges meteors and collects stars" },
    "mobile":       { ar: "تطبيق يفكّرك بمواعيد الدوا ويعلّم اللي اتاخد", en: "An app that reminds you of medicine times and ticks off doses" },
    "work":         { ar: "جدول بسيط لتسجيل العملاء والمواعيد مع بحث", en: "A simple client and appointment log with search" },
    "kids":         { ar: "لعبة جدول الضرب بنجوم وبالونات لما الإجابة تصح", en: "A times-table game with stars and balloons for right answers" },
    "auto":         { ar: "أداة تاخد ملف Excel وتطلع تقرير أسبوعي جاهز للإرسال", en: "A tool that turns a spreadsheet into a ready-to-send weekly report" },
    "career":       { ar: "تطبيق مهام كامل بتسجيل دخول وقاعدة بيانات ترفعه على GitHub", en: "A full to-do app with login and a database, pushed to GitHub" },
    "work:clinic":  { ar: "نظام حجز مواعيد للعيادة مع ملف لكل مريض وتذكير", en: "Clinic booking with a record per patient and reminders" },
    "work:teacher": { ar: "منصة صغيرة للاختبارات تصحح لوحدها وتطلع درجات الفصل", en: "A self-grading quiz app with class scores" },
    "work:shop":    { ar: "برنامج مخزن وفواتير للمحل مع تنبيه لما صنف يخلص", en: "Shop inventory and invoices with low-stock alerts" },
    "work:account": { ar: "لوحة متابعة مصروفات وإيرادات العملاء برسوم بيانية", en: "A client income/expense dashboard with charts" },
    "work:law":     { ar: "متابعة القضايا والجلسات والمواعيد النهائية", en: "Case, hearing and deadline tracker" },
    "work:eng":     { ar: "حاسبة كميات ومتابعة مراحل المشروع بالصور", en: "Quantity calculator and project-stage tracker with photos" },
    "work:food":    { ar: "منيو أونلاين وطلبات توصيل لمطبخك", en: "Online menu and delivery orders for your kitchen" },
    "work:other":   { ar: "أداة تختصر أكتر مهمة بتكررها كل يوم في شغلك", en: "A tool for the task you repeat most at work" }
  },

  /* قالب أول أمر — starter prompt template.
     {project} {who} {style} gets filled automatically */
  starterPrompt: {
    ar: "عايز أبني: {project}.\nالمستخدمين: {who}.\nأهم 3 حاجات لازم يعملها في النسخة الأولى:\n1) …\n2) …\n3) …\nالشكل: {style}، واجهة عربية من اليمين للشمال وتشتغل كويس على الموبايل.\nقبل ما تبدأ: اسألني أي أسئلة محتاج توضيحها، وبعدين اعرض خطة قصيرة، وابنِ أصغر نسخة تشتغل.",
    en: "I want to build: {project}.\nUsers: {who}.\nThe 3 things version one must do:\n1) …\n2) …\n3) …\nLook and feel: {style}, mobile-friendly.\nBefore you start, ask me any questions you need, then show a short plan and build the smallest version that works."
  },
  starterWho: {
    zero:  { ar: "أنا وعيلتي أو عدد صغير من الناس", en: "me, my family or a few people" },
    some:  { ar: "ناس عادية مش تقنية", en: "non-technical people" },
    dev:   { ar: "مستخدمين حقيقيين، ومحتاج كود نظيف ومنظم أقدر أطوره", en: "real users; I need clean, maintainable code" },
    pro:   { ar: "أنا وزمايلي أو عملائي في الشغل", en: "me, my colleagues or my clients" }
  },
  starterStyle: {
    web:    { ar: "بسيط وأنيق بألوان هادية", en: "simple and elegant, calm colors" },
    game:   { ar: "ألوان مبهجة وحركة ناعمة وأصوات بسيطة", en: "bright colors, smooth motion, simple sounds" },
    mobile: { ar: "خط كبير وأزرار واضحة", en: "large text and clear buttons" },
    work:   { ar: "عملي وواضح زي لوحة تحكم", en: "practical and clear, like a dashboard" },
    kids:   { ar: "ملون ومرح ومناسب لطفل 7 سنين", en: "colorful, playful, right for a 7-year-old" },
    auto:   { ar: "صفحة واحدة بسيطة", en: "a single simple page" },
    career: { ar: "تصميم احترافي ومنظم", en: "professional and well structured" }
  },

  /* حقيبة الأوامر — Prompt kit */
  promptKit: [
    {
      id: "prd", icon: "plan",
      title: { ar: "حوّل فكرتك لخطة", en: "Turn your idea into a plan" },
      when:  { ar: "قبل ما تفتح أي أداة بناء", en: "Before opening any builder" },
      text: {
        ar: "أنا عندي فكرة: [اكتب فكرتك في سطرين].\nاسألني 5 أسئلة عشان تفهمها كويس، وبعدها اكتب لي مستند متطلبات قصير فيه: مين المستخدم، المشكلة، أهم 3 مميزات للنسخة الأولى، الحاجات اللي مش هنعملها دلوقتي، وشكل الصفحات.",
        en: "I have an idea: [describe it in two lines].\nAsk me 5 questions to understand it, then write a short requirements doc: the user, the problem, the top 3 features for version one, what we will NOT build yet, and the screens."
      }
    },
    {
      id: "small", icon: "step",
      title: { ar: "خطوة واحدة في المرة", en: "One step at a time" },
      when:  { ar: "في كل مرة عايز تضيف حاجة", en: "Every time you add something" },
      text: {
        ar: "عايز أضيف: [الميزة].\nمتغيرش أي حاجة تانية شغالة. قبل التنفيذ قول لي هتعدل إيه بالظبط، وبعد ما تخلص قول لي أجرب إيه عشان أتأكد إنها شغالة.",
        en: "Add: [feature].\nDon't change anything else that works. Before coding, tell me exactly what you'll change; afterwards, tell me what to try to confirm it works."
      }
    },
    {
      id: "bug", icon: "bug",
      title: { ar: "فيه حاجة باظت", en: "Something broke" },
      when:  { ar: "لما تظهر رسالة خطأ أو حاجة مش شغالة", en: "When you see an error or a feature fails" },
      text: {
        ar: "لما بعمل [الخطوات بالظبط] المفروض يحصل [المتوقع] لكن اللي بيحصل [اللي بيحصل فعلًا].\nرسالة الخطأ: [الصقها هنا].\nابحث عن السبب الأول واشرحه لي ببساطة، وبعدين صلّحه بأقل تغيير ممكن.",
        en: "When I [exact steps], it should [expected] but instead [what happens].\nError message: [paste it].\nFind and explain the cause simply first, then fix it with the smallest possible change."
      }
    },
    {
      id: "look", icon: "brush",
      title: { ar: "خليه أحلى", en: "Make it look better" },
      when:  { ar: "لما يشتغل بس شكله عادي", en: "When it works but looks plain" },
      text: {
        ar: "حسّن الشكل من غير ما تغيّر أي وظيفة: [ألوان/خط/مسافات]. الإحساس اللي عايزه: [مثلاً: دافي ومريح زي مخبز]. خليه يشتغل كويس على الموبايل والكمبيوتر.",
        en: "Improve the look without changing any behavior: [colors/type/spacing]. The feeling I want: [e.g. warm and cozy like a bakery]. Make it work well on phone and desktop."
      }
    },
    {
      id: "explain", icon: "book",
      title: { ar: "اشرح لي كأني مبتدئ", en: "Explain it like I'm new" },
      when:  { ar: "عشان تتعلم من اللي اتبنى", en: "To learn from what was built" },
      text: {
        ar: "اشرح لي المشروع ده كأني عمري ما برمجت: الملفات الأساسية، كل واحد بيعمل إيه، والبيانات بتتحفظ فين. استخدم أمثلة من الحياة اليومية.",
        en: "Explain this project as if I've never coded: the main files, what each does, and where data is stored. Use everyday analogies."
      }
    },
    {
      id: "secure", icon: "shield",
      title: { ar: "مراجعة أمان قبل النشر", en: "Security check before launch" },
      when:  { ar: "قبل ما تبعت الرابط لناس حقيقية", en: "Before real people use it" },
      text: {
        ar: "راجع المشروع قبل النشر: هل فيه أي مفاتيح أو كلمات سر ظاهرة في الكود؟ هل كل مستخدم يقدر يشوف بياناته بس؟ هل المدخلات متأمنة؟ اعمل قائمة بالمشاكل مرتبة حسب الخطورة واقترح إصلاح لكل واحدة.",
        en: "Review before launch: any keys or passwords exposed in code? Can each user see only their own data? Are inputs validated? List issues by severity with a fix for each."
      }
    }
  ],

  /* القواعد الذهبية — Golden rules */
  rules: [
    { ar: "ابدأ صغير جدًا", en: "Start tiny", d: { ar: "أصغر نسخة تشتغل النهارده أحسن من مشروع كامل مبيخلصش.", en: "The smallest working version today beats a big project that never ships." } },
    { ar: "اوصف الناس قبل الأزرار", en: "Describe people before buttons", d: { ar: "قول مين هيستخدمه وعايز يوصل لإيه، والأداة تختار التفاصيل.", en: "Say who will use it and what they need; let the tool pick the details." } },
    { ar: "طلب واحد في المرة", en: "One request at a time", d: { ar: "كل تعديل لوحده، وجرّب بعده على طول.", en: "One change per prompt, then test it immediately." } },
    { ar: "احفظ نسخ", en: "Save versions", d: { ar: "استخدم نقاط الحفظ أو GitHub عشان ترجع لو حاجة باظت.", en: "Use checkpoints or GitHub so you can roll back." } },
    { ar: "جرّب كأنك المستخدم", en: "Test like a user", d: { ar: "دوس على كل زرار وجرّب على الموبايل قبل ما تقول خلصت.", en: "Click every button and try it on a phone before calling it done." } },
    { ar: "متلصقش كلمات سر", en: "Never paste secrets", d: { ar: "المفاتيح والباسوردات مكانها إعدادات الأداة، مش الشات ولا الكود.", en: "Keys and passwords belong in the tool's secrets settings, never in chat or code." } },
    { ar: "اسأل: ليه؟", en: "Ask: why?", d: { ar: "اطلب شرح لكل حاجة مهمة؛ كده بتتعلم وأنت بتبني.", en: "Ask for explanations as you go; you learn while you build." } },
    { ar: "اعرف إمتى تستعين بمبرمج", en: "Know when to call a pro", d: { ar: "فلوس، بيانات طبية، أو آلاف المستخدمين؟ خلي حد متخصص يراجع.", en: "Payments, medical data or thousands of users? Get an expert review." } },
    { ar: "مشروع واحد في المرة", en: "One project at a time", d: { ar: "خلّص الأول لحد ما ينزل لناس، وبعدين افتح اللي بعده. المشاريع الكتير المفتوحة بتنقص منها كلها وبتضيّع منك الحماس.", en: "Finish the first until it's live, then start the next. Many half-open projects drain your focus and none of them ship." } }
  ],

  /* إمتى متعتمدش على الـ vibe coding — "when not to vibe code" (after the prompt kit, before Easy-Vibe and "how we curate") */
  caution: {
    slow: [
      { ar: "الفلوس", en: "Money", d: { ar: "الدفع الإلكتروني والفواتير والحسابات. غلطة صغيرة بتتحول لخسارة حقيقية.", en: "Payments, invoices and accounting. A small bug becomes a real loss." } },
      { ar: "تسجيل الدخول والصلاحيات", en: "Login and permissions", d: { ar: "كود الأمان بيبان سليم وهو مخروق. الذكاء الاصطناعي بيكتب كود شغّال، مش بالضرورة آمن.", en: "Security code can look right and still be broken. AI writes code that works, not necessarily code that is safe." } },
      { ar: "بيانات الناس", en: "People's data", d: { ar: "ملفات المرضى وبيانات العملاء والهويات. لو اتسربت، المسؤولية عليك.", en: "Patient files, customer data, IDs. If it leaks, it's on you." } },
      { ar: "أي حاجة ممكن تأذي حد", en: "Anything that can hurt someone", d: { ar: "برامج طبية أو قانونية أو هندسية أو بتتحكم في أجهزة. مفيش مكان للتخمين.", en: "Medical, legal, engineering or hardware-control software. There is no room for guessing." } },
      { ar: "قواعد البيانات الحقيقية", en: "Real databases", d: { ar: "متسيبش الوكيل يشغّل أوامر على بيانات حقيقية من غير نسخة احتياطية ومن غير ما تقرا الأمر.", en: "Never let an agent run commands on live data without a backup and without reading the command first." } }
    ],
    habits: [
      { ar: "متوافقش على أمر مش فاهمه", en: "Don't approve commands you don't understand", d: { ar: "خصوصًا الحذف والتثبيت. اضبط الأداة تسألك قبل التنفيذ.", en: "Especially deletes and installs. Set the tool to ask before it runs anything." } },
      { ar: "متنشرش بعد تجربة واحدة", en: "Don't ship after one try", d: { ar: "جرّب على موبايل، وبأخطاء متعمّدة، ومع شخص تاني قبل ما حد يستخدمه.", en: "Try it on a phone, with deliberate mistakes, and with another person before anyone relies on it." } },
      { ar: "اتعلّم الكود اللي بيتكتب", en: "Learn the code that gets written", d: { ar: "لو بتتعلم للشغل، اطلب شرح كل جزء. اللي بيقبل أي حاجة بيفضل مبتدئ.", en: "If you're learning for a career, ask for every part to be explained. Accepting everything keeps you a beginner." } },
      { ar: "راجع المكتبات اللي بتتضاف", en: "Check the packages it adds", d: { ar: "اتأكد إنها معروفة وفيها ناس كتير بتستخدمها، ومش اسم مألّف.", en: "Make sure they're well known and widely used, not an invented name." } },
      { ar: "الذكاء الاصطناعي بيغلط بثقة", en: "AI is wrong with confidence", d: { ar: "لو قال \"تم\"، اتأكد بنفسك. التجربة أهم من الكلام.", en: "If it says \"done\", check for yourself. Testing beats claims." } }
    ]
  },

  /* إحصائيات حقيقية للرسم — real stats used in a chart (with sources) */
  stats: {
    soSurvey: {
      /* 2026 survey (published Oct 2026) measures AI use differently (no "or planning" figure), so 2026 isn't charted as a continuation. */
      label: { ar: "المطورين اللي بيستخدموا أو ناويين يستخدموا أدوات برمجة بالذكاء الاصطناعي", en: "Developers using or planning to use AI coding tools" },
      points: [ { year: "2024", value: 76 }, { year: "2025", value: 84 } ],
      source: { name: "Stack Overflow Developer Survey 2025", url: "https://survey.stackoverflow.co/2025/" }
    }
  }
};
