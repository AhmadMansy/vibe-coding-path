/* مسار الفايب كودينج — app logic. Data lives in /data/*.js */
(function () {
  "use strict";

  const BASE = (window.VC_RESOURCES || []).slice();
  const TOOLS = window.VC_TOOLS || [];
  const C = window.VC_CONTENT || {};
  const FREE = window.VC_FREE || null;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (id, cls = "icon") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const store = {
    get(k, d) { try { const v = localStorage.getItem("vcp." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("vcp." + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ======================= i18n ======================= */
  const I18N = {
    ar: {
      brand: "مسار الفايب كودينج", "nav.idea": "الفكرة", "nav.wizard": "اعمل مسارك", "nav.library": "المكتبة", "nav.tools": "الأدوات", "nav.prompts": "حقيبة الأوامر", "nav.free": "ببلاش",
      "free.title": "استخدم الذكاء الاصطناعي ببلاش مع OpenCode", "free.lede": "OpenCode نفسه مجاني ومفتوح المصدر، والتكلفة الحقيقية هي الموديل. دي أحسن مصادر مجانية تربطها بيه، مترتبة بالترتيب اللي تنتقل بيه لما مصدر يوصل لحده اليومي.", "free.tipsT": "قبل ما تبدأ", "free.learnT": "اتعلم OpenCode: كورسات وفيديوهات", "free.open": "افتح", "free.pv.safe": "مش بيدرّب على بياناتك", "free.pv.warn": "ممكن يدرّب على بياناتك", "free.pv.local": "على جهازك", "free.src": "المصادر:", "free.term": "إعداد OpenCode في 4 خطوات",
      "hero.l1": "قول فكرتك بكلامك،", "hero.l2": "وشوفها بتتبني قدامك.",
      "hero.lede": "دليل بالعربي والإنجليزي لتعلم الـ vibe coding: كورسات وفيديوهات وأدوات ومستودعات، مترتبة في مسار على مقاسك. سواء عايز موقع لشغلك، لعبة لأولادك، أو برنامج لعيادتك.",
      "hero.cta": "اعمل مسارك في 4 أسئلة", "hero.cta2": "تصفّح المكتبة",
      "cnt.res": "مصدر", "cnt.ar": "مصدر عربي", "cnt.tools": "أداة", "cnt.free": "مجاني أو بخطة مجانية",
      "st.play": "تشغيل", "st.pause": "إيقاف", "st.replay": "إعادة", "st.step": "خطوة",
      "idea.title": "يعني إيه Vibe Coding؟",
      "idea.lede": "إنك توصف اللي عايزه بلغتك العادية، والذكاء الاصطناعي يكتب الكود، وأنت تجرّب وتعدّل لحد ما يبقى زي ما تخيلته. المصطلح أطلقه أندريه كارباثي في فبراير 2025، وبقى طريقة حقيقية لبناء البرامج.",
      "idea.limitsT": "بس خلي بالك من حدوده",
      "wiz.q4": "هتمشي ببلاش ولا معاك ميزانية؟", "wiz.bFree": "ببلاش", "wiz.bFreeH": "OpenCode + موديلات مجانية، ومصادر مجانية الأول", "wiz.bPaid": "معايا ميزانية", "wiz.bPaidH": "اشتراكات وأدوات مدفوعة مسموحة، والأحسن بيطلع الأول",
      "path.ocTitle": "OpenCode هو أساس مسارك المجاني", "path.ocBody": "أداة مفتوحة المصدر وببلاش، بتشتغل مع موديلات مجانية. جهّزها من قسم \"ببلاش\" وبعدين ابدأ المراحل.", "path.ocGo": "جهّز OpenCode ببلاش",
      "wiz.title": "اعمل مسارك", "wiz.lede": "4 أسئلة بس، وهنرتب لك المصادر والأدوات وأول مشروع وأول أمر تكتبه.",
      "wiz.q1": "عايز المصادر بأي لغة؟", "wiz.q2": "إيه خلفيتك؟", "wiz.q3": "عايز توصل لإيه؟", "wiz.go": "طلّع مساري", "wiz.note": "الاختيارات بتتحفظ على جهازك بس.",
      "wiz.prof": "مجالك إيه؟",
      "path.example": "مثال: غيّر الاختيارات فوق", "path.tools": "الأدوات المناسبة ليك", "path.project": "أول مشروع تبنيه", "path.timeline": "الخطة على أسابيع",
      "path.timeNote": "تقدير لساعتين أو تلاتة في الأسبوع. ناس كتير بتطلع أول نسخة في يوم واحد.",
      "path.main": "اختيارنا الأول", "path.alt": "بديل", "path.copy": "انسخ الأمر", "path.weeks": "أسابيع", "path.week": "أسبوع",
      "path.none": "مفيش مصدر مطابق هنا. جرّب تختار \"الاتنين\" في اللغة.", "path.fallback": "المصادر العربية قليلة في المرحلة دي، فضفنا أفضل المصادر الإنجليزية.",
      "lib.title": "المكتبة", "lib.search": "ابحث", "lib.goal": "الهدف", "lib.cost": "التكلفة", "lib.level": "المستوى", "lib.grid": "شبكة", "lib.list": "قائمة",
      "lib.lede": "كل المصادر في مكان واحد: كورسات، فيديوهات، أدلة رسمية، ومستودعات GitHub. الروابط اللي عليها علامة \"بحث\" بتفتح بحث يوتيوب محدّث بدل رابط ممكن يتغير.",
      "lib.ph": "ابحث: Claude Code، ألعاب، موبايل…", "lib.count": "{n} مصدر", "lib.more": "اعرض {n} كمان", "lib.empty": "مفيش نتائج. شيل فلتر أو جرّب كلمة تانية.",
      "lib.open": "افتح", "lib.search1": "بحث يوتيوب", "lib.all": "الكل",
      "lib.chartTypes": "المكتبة حسب النوع واللغة", "lib.chartGoals": "عدد المصادر لكل هدف",
      "f.ar": "عربي", "f.en": "English", "f.all": "كل اللغات",
      "cost.free": "مجاني", "cost.freemium": "مجاني + مدفوع", "cost.paid": "مدفوع",
      "lvl.start": "مبتدئ", "lvl.grow": "متوسط", "lvl.pro": "متقدم",
      "type.course": "كورس", "type.video": "فيديو", "type.playlist": "قائمة فيديوهات", "type.guide": "دليل", "type.repo": "مستودع GitHub", "type.path": "مسار", "type.community": "مجتمع ومسابقات", "type.tool-guide": "أداة + شرح",
      "tools.title": "خريطة الأدوات", "tools.lede": "كل أداة على الخريطة حسب سهولتها لغير المبرمج وقد إيه تقدر توصل بيها. دوس على أي نقطة.",
      "tools.disc": "المواقع على الخريطة تقدير تحريري للمقارنة، والأسعار من صفحات الأدوات ومراجعات 2026 وممكن تتغير.",
      "tools.x0": "محتاج خبرة برمجة", "tools.x1": "سهل لأي حد", "tools.y0": "نموذج بسيط", "tools.y1": "منتج كامل وكبير", "tools.pick": "دوس على أداة في الخريطة عشان تشوف تفاصيلها.",
      "cat.all": "الكل", "cat.builder": "بناء بالوصف", "cat.editor": "محررات", "cat.agent": "وكلاء برمجة", "cat.game": "ألعاب", "cat.mobile": "موبايل", "cat.kids": "أطفال", "cat.auto": "أتمتة",
      "kit.title": "حقيبة الأوامر", "kit.lede": "أوامر جاهزة تنسخها وتغيّر اللي بين القوسين. بتشتغل مع أي أداة: Lovable وClaude وAI Studio وCursor وغيرهم.",
      "kit.copy": "انسخ", "rules.title": "9 قواعد تحميك من الصداع",
      "foot.t1": "عن الدليل", "foot.p1": "المصادر متجمعة ومراجعة في نوفمبر 2026. الأسعار والخطط المجانية بتتغير كتير، فاتأكد من صفحة الأداة قبل ما تدفع. لو رابط وقف أو عندك مصدر حلو، قولنا من هنا:",
      "skip": "تخطّى للمحتوى الرئيسي", "theme.toDark": "الوضع الداكن", "theme.toLight": "الوضع الفاتح",
      "foot.suggest": "اقترح مصدر أو بلّغ عن رابط", "foot.repo": "الكود على GitHub (MIT)", "lib.report": "بلّغ عن مشكلة", "lib.reportT": "الرابط واقف أو المعلومة قديمة؟ بلّغنا",
      "hero.reviewed": "آخر مراجعة للمصادر والأسعار: نوفمبر 2026", "hero.how": "إزاي بنختار؟",
      "cur.title": "إزاي بنختار المصادر؟", "cur.lede": "الدليل ده مستقل ومفتوح المصدر. دي القواعد اللي بنمشي عليها.",
      "cur.in.t": "اللي بنضيفه", "cur.in.p": "كورسات وفيديوهات وأدلة رسمية بتعلّمك فعلًا، مجانية أو فيها نسخة مجانية. بنتأكد إن الرابط شغّال قبل ما نضيفه، وبنفضّل العربي لما تكون جودته كويسة، والجديد على القديم.",
      "cur.out.t": "اللي مش بنضيفه", "cur.out.p": "أي حاجة بتوعد بالغنى السريع، أو بتبيع كورس غالي من غير محتوى حقيقي، أو بتطلب بيانات دفع من غير داعي. أي مصدر مدفوع بنكتب عليه \"مدفوع\" بوضوح.",
      "cur.price.t": "مفيش رعاة، والأسعار بتتغير", "cur.price.p": "مفيش روابط عمولة ولا مقابل على ظهور أي أداة. أسعار الأدوات وحدود الخطط المجانية بتتغير كل كام شهر، فاتأكد من صفحة الأداة قبل ما تدفع، ولو لقيت حاجة قديمة بلّغنا.",
      "foot.t2": "مصادر الأرقام",
      "copied": "اتنسخ ✓", "copyFail": "مقدرتش أنسخ. حدد النص وانسخه يدوي.",
      "adm.open": "إدارة المحتوى", "adm.title": "إدارة المحتوى", "adm.close": "إغلاق",
      "adm.tRes": "المصادر", "adm.tAdd": "إضافة مصدر", "adm.tSet": "الإعدادات", "adm.tExp": "تصدير",
      "adm.live": "التعديلات بتتحفظ أونلاين وبتظهر لكل الزوار على طول.", "adm.nodb": "الحفظ الأونلاين مش متاح دلوقتي. افتح الموقع من claude.ai وأنت مسجل دخول كمالك.",
      "adm.edit": "تعديل", "adm.hide": "إخفاء", "adm.show": "إظهار", "adm.del": "حذف", "adm.base": "أساسي", "adm.custom": "مضاف", "adm.hidden": "مخفي", "adm.edited": "معدّل",
      "adm.save": "احفظ المصدر", "adm.saved": "اتحفظ ✓", "adm.deleted": "اتحذف", "adm.err": "حصلت مشكلة في الحفظ: ", "adm.new": "مصدر جديد", "adm.editing": "تعديل: ",
      "adm.reset": "رجّع الأصلي",
      "adm.f.id": "المعرّف (إنجليزي بدون مسافات)", "adm.f.url": "الرابط", "adm.f.tAr": "العنوان بالعربي", "adm.f.tEn": "العنوان بالإنجليزي", "adm.f.dAr": "الوصف بالعربي", "adm.f.dEn": "الوصف بالإنجليزي",
      "adm.f.type": "النوع", "adm.f.lang": "لغة المحتوى", "adm.f.cost": "التكلفة", "adm.f.level": "المستوى", "adm.f.stage": "المرحلة في المسار", "adm.f.prov": "الجهة أو القناة", "adm.f.dur": "المدة (اختياري)",
      "adm.f.goals": "الأهداف", "adm.f.who": "مناسب لـ", "adm.f.feat": "يظهر في المختارات",
      "adm.v.id": "المعرّف لازم يكون حروف إنجليزي وأرقام وشرطة بس.", "adm.v.dup": "المعرّف ده مستخدم قبل كده.", "adm.v.url": "الرابط لازم يبدأ بـ https://", "adm.v.title": "اكتب عنوان بلغة واحدة على الأقل.", "adm.v.goals": "اختار هدف واحد على الأقل.",
      "adm.s.accent": "لون الموقع", "adm.s.banner": "شريط إعلان أعلى الصفحة (اتركه فاضي لإخفائه)", "adm.s.view": "عرض المكتبة الافتراضي", "adm.s.save": "احفظ الإعدادات",
      "adm.exp": "ده كل المحتوى بعد تعديلاتك. انسخه وابعته لـ Claude أو حطه مكان ملف data/resources.js عشان يبقى جزء ثابت من الموقع.",
      "who.zero": "أول مرة", "who.some": "جرّب قبل كده", "who.dev": "مبرمج", "who.pro": "صاحب مهنة", "who.all": "الكل", "goal.all": "كل الأهداف",
      "stage.label": "المرحلة"
    },
    en: {
      brand: "Vibe Coding Path", "nav.idea": "The idea", "nav.wizard": "Build my path", "nav.library": "Library", "nav.tools": "Tools", "nav.prompts": "Prompt kit", "nav.free": "Free AI",
      "free.title": "Use AI for free with OpenCode", "free.lede": "OpenCode itself is free and open source; the real cost is the model. These are the best free sources to plug into it, in the order you fall back through when one hits its daily cap.", "free.tipsT": "Before you start", "free.learnT": "Learn OpenCode: courses and videos", "free.open": "Open", "free.pv.safe": "Doesn't train on your data", "free.pv.warn": "May train on your data", "free.pv.local": "On your machine", "free.src": "Sources:", "free.term": "Set up OpenCode in 4 steps",
      "hero.l1": "Say it in your own words.", "hero.l2": "Watch it get built.",
      "hero.lede": "An Arabic and English guide to learning vibe coding: courses, videos, tools and GitHub repos arranged into a path that fits you, whether you want a site for your business, a game for your kids or software for your clinic.",
      "hero.cta": "Build my path in 4 questions", "hero.cta2": "Browse the library",
      "cnt.res": "resources", "cnt.ar": "in Arabic", "cnt.tools": "tools", "cnt.free": "free or free tier",
      "st.play": "Play", "st.pause": "Pause", "st.replay": "Replay", "st.step": "step",
      "idea.title": "What is vibe coding?",
      "idea.lede": "You describe what you want in everyday language, AI writes the code, and you try it and refine until it matches what you imagined. Andrej Karpathy coined the term in February 2025, and it has become a real way to build software.",
      "idea.limitsT": "Know where it stops",
      "wiz.q4": "Free only, or do you have a budget?", "wiz.bFree": "Free only", "wiz.bFreeH": "OpenCode + free models, free resources first", "wiz.bPaid": "I have a budget", "wiz.bPaidH": "Paid plans and tools allowed; the best ones come first",
      "path.ocTitle": "OpenCode is the core of your free path", "path.ocBody": "Open source, free, and works with free models. Set it up from the Free AI section, then start the stages.", "path.ocGo": "Set up OpenCode for free",
      "wiz.title": "Build my path", "wiz.lede": "Four questions, then we line up resources, tools, a first project and your first prompt.",
      "wiz.q1": "Which language should resources be in?", "wiz.q2": "What's your background?", "wiz.q3": "What do you want to make?", "wiz.go": "Show my path", "wiz.note": "Your choices are saved on this device only.",
      "wiz.prof": "What's your field?",
      "path.example": "Example: change the answers above", "path.tools": "Tools that fit you", "path.project": "Your first project", "path.timeline": "Plan in weeks",
      "path.timeNote": "Estimated at 2–3 hours a week. Many people ship a first version in a day.",
      "path.main": "Top pick", "path.alt": "Alternative", "path.copy": "Copy prompt", "path.weeks": "weeks", "path.week": "week",
      "path.none": "Nothing matches here yet. Try choosing \"both\" for language.", "path.fallback": "Arabic resources are thin at this stage, so we added the best English ones.",
      "lib.title": "Library", "lib.search": "Search", "lib.goal": "Goal", "lib.cost": "Cost", "lib.level": "Level", "lib.grid": "Grid", "lib.list": "List",
      "lib.lede": "Every resource in one place: courses, videos, official guides and GitHub repositories. Links marked \"search\" open a fresh YouTube search instead of a link that could go stale.",
      "lib.ph": "Search: Claude Code, games, mobile…", "lib.count": "{n} resources", "lib.more": "Show {n} more", "lib.empty": "No results. Remove a filter or try another word.",
      "lib.open": "Open", "lib.search1": "YouTube search", "lib.all": "All",
      "lib.chartTypes": "Library by type and language", "lib.chartGoals": "Resources per goal",
      "f.ar": "Arabic", "f.en": "English", "f.all": "All languages",
      "cost.free": "Free", "cost.freemium": "Free + paid", "cost.paid": "Paid",
      "lvl.start": "Beginner", "lvl.grow": "Intermediate", "lvl.pro": "Advanced",
      "type.course": "Course", "type.video": "Video", "type.playlist": "Playlist", "type.guide": "Guide", "type.repo": "GitHub repo", "type.path": "Learning path", "type.community": "Community & jams", "type.tool-guide": "Tool + tutorial",
      "tools.title": "Tool map", "tools.lede": "Each tool plotted by how easy it is for non-coders and how far it can take you. Tap any point.",
      "tools.disc": "Positions are an editorial estimate for comparison; prices come from tool pages and 2026 reviews and change often.",
      "tools.x0": "Needs coding skills", "tools.x1": "Easy for anyone", "tools.y0": "Simple prototype", "tools.y1": "Full, large product", "tools.pick": "Tap a tool on the map to see details.",
      "cat.all": "All", "cat.builder": "Prompt-to-app", "cat.editor": "Editors", "cat.agent": "Coding agents", "cat.game": "Games", "cat.mobile": "Mobile", "cat.kids": "Kids", "cat.auto": "Automation",
      "kit.title": "Prompt kit", "kit.lede": "Copy a prompt and replace the parts in brackets. Works with any tool: Lovable, Claude, AI Studio, Cursor and more.",
      "kit.copy": "Copy", "rules.title": "9 rules that save you headaches",
      "foot.t1": "About this guide", "foot.p1": "Resources gathered and reviewed in November 2026. Prices and free tiers change often, so check the tool's page before paying. If a link breaks or you know a great resource, tell us here:",
      "skip": "Skip to main content", "theme.toDark": "Dark mode", "theme.toLight": "Light mode",
      "foot.suggest": "Suggest a resource or report a link", "foot.repo": "Source on GitHub (MIT)", "lib.report": "Report an issue", "lib.reportT": "Dead link or outdated info? Let us know",
      "hero.reviewed": "Resources and prices last reviewed: November 2026", "hero.how": "How we choose",
      "cur.title": "How we curate", "cur.lede": "This guide is independent and open source. These are the rules we follow.",
      "cur.in.t": "What we include", "cur.in.p": "Courses, videos and official guides that really teach, free or with a free tier. We check that a link works before adding it, prefer Arabic when its quality is good, and favour recent over old.",
      "cur.out.t": "What we leave out", "cur.out.p": "Anything promising quick riches, selling an expensive course with no real content, or asking for payment details without need. Paid resources are always clearly labelled \"Paid\".",
      "cur.price.t": "No sponsors, and prices change", "cur.price.p": "No affiliate links and no payment for a tool to appear. Tool prices and free-tier limits change every few months, so check the tool's own page before paying, and tell us if something is outdated.",
      "foot.t2": "Sources for the numbers",
      "copied": "Copied ✓", "copyFail": "Couldn't copy. Select the text and copy it manually.",
      "adm.open": "Manage content", "adm.title": "Manage content", "adm.close": "Close",
      "adm.tRes": "Resources", "adm.tAdd": "Add resource", "adm.tSet": "Settings", "adm.tExp": "Export",
      "adm.live": "Changes save online and show to every visitor right away.", "adm.nodb": "Online saving isn't available here. Open the site on claude.ai signed in as the owner.",
      "adm.edit": "Edit", "adm.hide": "Hide", "adm.show": "Show", "adm.del": "Delete", "adm.base": "Built-in", "adm.custom": "Added", "adm.hidden": "Hidden", "adm.edited": "Edited",
      "adm.save": "Save resource", "adm.saved": "Saved ✓", "adm.deleted": "Deleted", "adm.err": "Couldn't save: ", "adm.new": "New resource", "adm.editing": "Editing: ",
      "adm.reset": "Restore original",
      "adm.f.id": "ID (English, no spaces)", "adm.f.url": "Link", "adm.f.tAr": "Title in Arabic", "adm.f.tEn": "Title in English", "adm.f.dAr": "Description in Arabic", "adm.f.dEn": "Description in English",
      "adm.f.type": "Type", "adm.f.lang": "Content language", "adm.f.cost": "Cost", "adm.f.level": "Level", "adm.f.stage": "Stage in path", "adm.f.prov": "Provider or channel", "adm.f.dur": "Duration (optional)",
      "adm.f.goals": "Goals", "adm.f.who": "Suits", "adm.f.feat": "Show in highlights",
      "adm.v.id": "ID must use English letters, digits and dashes only.", "adm.v.dup": "That ID is already used.", "adm.v.url": "Link must start with https://", "adm.v.title": "Add a title in at least one language.", "adm.v.goals": "Pick at least one goal.",
      "adm.s.accent": "Site color", "adm.s.banner": "Announcement bar (leave empty to hide)", "adm.s.view": "Default library view", "adm.s.save": "Save settings",
      "adm.exp": "This is all content including your changes. Copy it and send it to Claude, or replace data/resources.js with it to make it permanent.",
      "who.zero": "Beginner", "who.some": "Tried coding", "who.dev": "Developer", "who.pro": "Professional", "who.all": "Everyone", "goal.all": "All goals",
      "stage.label": "Stage"
    }
  };

  let lang = store.get("lang", "ar");
  const t = (k, vars) => {
    let s = (I18N[lang] && I18N[lang][k]) || I18N.ar[k] || k;
    if (vars) Object.keys(vars).forEach((v) => { s = fill(s, v, vars[v]); });
    return s;
  };
  // replace every {key} literally (String.replace would treat "$&" etc. in the value as patterns)
  function fill(s, key, value) { return s.split("{" + key + "}").join(String(value)); }
  const L = (o) => (o == null ? "" : typeof o === "string" ? o : (o[lang] || o.ar || o.en || ""));

  function applyI18n() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "مسار الفايب كودينج" : "Vibe Coding Path";
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $("#q").placeholder = t("lib.ph");
    $("#lang-ar").setAttribute("aria-pressed", lang === "ar");
    $("#lang-en").setAttribute("aria-pressed", lang === "en");
    applyTheme();
  }

  /* ======================= theme (light / dark) ======================= */
  // No saved choice = follow the system. Clicking the button saves an explicit choice.
  const darkMQ = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function currentTheme() {
    const s = store.get("theme", null);
    return s === "light" || s === "dark" ? s : (darkMQ && darkMQ.matches ? "dark" : "light");
  }
  function applyTheme() {
    const th = currentTheme();
    document.documentElement.setAttribute("data-theme", th);
    const b = $("#theme-btn"); if (!b) return;
    const label = t(th === "dark" ? "theme.toLight" : "theme.toDark");   // the button shows the action it will do
    b.setAttribute("aria-label", label); b.title = label;
    $("#theme-ic").setAttribute("href", th === "dark" ? "#i-sun" : "#i-moon");
  }

  /* ======================= merged data (base + owner edits) ======================= */
  let custom = {};       // id -> doc from db
  let settings = {};
  let RES = BASE.slice();
  function mergeData() {
    const byId = new Map(BASE.map((r) => [r.id, Object.assign({ _base: true }, r)]));
    Object.keys(custom).forEach((id) => {
      const d = custom[id];
      const baseHas = byId.has(id);
      // a built-in resource that was only hidden: keep the live base data, just flag it
      if (baseHas && d._flag) { byId.set(id, Object.assign({}, byId.get(id), { _hidden: !!d._hidden, _flagOnly: true })); return; }
      byId.set(id, Object.assign({}, d, { _base: baseHas, _edited: baseHas, _custom: !baseHas }));
    });
    RES = Array.from(byId.values());
  }
  const visible = () => RES.filter((r) => !r._hidden);

  /* ======================= toast & copy ======================= */
  let toastTimer;
  function toast(msg) {
    const el = $("#toast"); el.textContent = msg; el.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); toast(t("copied")); }
    catch (e) {
      try {
        const ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select(); const ok = document.execCommand("copy"); ta.remove();
        toast(ok ? t("copied") : t("copyFail"));
      } catch (e2) { toast(t("copyFail")); }
    }
  }

  /* ======================= counts ======================= */
  function renderCounts() {
    const v = visible();
    const items = [
      [v.length, t("cnt.res")],
      [v.filter((r) => r.lang === "ar").length, t("cnt.ar")],
      [TOOLS.length, t("cnt.tools")],
      [Math.round(100 * v.filter((r) => r.cost !== "paid").length / Math.max(1, v.length)) + "%", t("cnt.free")]
    ];
    $("#counts").innerHTML = items.map(([n, l]) => `<div><b>${n}</b><span>${esc(l)}</span></div>`).join("");
  }

  /* ======================= STUDIO: live demo ======================= */
  const SCEN = [
    {
      id: "web", icon: "web", label: { ar: "موقع", en: "Website" },
      u1: { ar: "اعمل صفحة لمخبز أمي «بيت العجين»: فيها المنيو بالأسعار وزرار للطلب.", en: "Make a page for my mom's bakery, Dough House: a menu with prices and an order button." },
      a1: { ar: "تمام! هبني الصفحة على 4 خطوات:", en: "Sure! I'll build it in 4 steps:" },
      plan: { ar: ["الهيدر باسم المخبز", "قسم ترحيب", "المنيو بالأسعار", "زرار الطلب"], en: ["Header with the name", "Welcome section", "Menu with prices", "Order button"] },
      code: ['<span class="k">&lt;header&gt;</span>Dough House<span class="k">&lt;/header&gt;</span>', '<span class="k">&lt;section</span> class=<span class="s">"hero"</span><span class="k">&gt;</span>', '  <span class="c">&lt;!-- fresh bread daily --&gt;</span>', 'menu.map(item =&gt; <span class="k">&lt;Card</span> {...item} /&gt;)', '<span class="k">&lt;button&gt;</span>Order<span class="k">&lt;/button&gt;</span>'],
      u2: { ar: "خلي الألوان أدفى، وضيف زرار واتساب.", en: "Make the colors warmer and add a WhatsApp button." },
      a2: { ar: "حاضر: ألوان دافية وزرار واتساب جنب زرار الطلب.", en: "Done: warm colors and a WhatsApp button next to Order." },
      done: { ar: "اتنشرت ✓ bayt-elagin.app", en: "Published ✓ dough-house.app" },
      preview: () => `<div class="pv-web">
        <div class="nav-row" data-s="1"><span>${lang === "ar" ? "بيت العجين" : "Dough House"}</span><span style="font-weight:400;opacity:.6">${lang === "ar" ? "المنيو · تواصل" : "Menu · Contact"}</span></div>
        <div class="hero-b" data-s="2"><b>${lang === "ar" ? "عيش طازة كل يوم" : "Fresh bread every day"}</b><span style="opacity:.7">${lang === "ar" ? "من فرن البيت لباب بيتك" : "From our oven to your door"}</span></div>
        <div class="menu" data-s="3">
          <div class="item"><div class="bread"></div>${lang === "ar" ? "عيش فينو" : "Baguette"}<br><b>15</b></div>
          <div class="item"><div class="bread"></div>${lang === "ar" ? "كعك" : "Ka'ak"}<br><b>40</b></div>
          <div class="item"><div class="bread"></div>${lang === "ar" ? "بسبوسة" : "Basbousa"}<br><b>60</b></div>
        </div>
        <div class="order" data-s="4"><span>${lang === "ar" ? "اطلب دلوقتي" : "Order now"}</span><span class="wa">WhatsApp</span></div>
      </div>`
    },
    {
      id: "game", icon: "game", label: { ar: "لعبة", en: "Game" },
      u1: { ar: "اعمل لعبة صاروخ بيتفادى النيازك، والسرعة تزيد مع الوقت.", en: "Make a game where a rocket dodges meteors and speed increases over time." },
      a1: { ar: "يلا بينا! الخطة:", en: "Let's go! The plan:" },
      plan: { ar: ["فضاء ونجوم", "الصاروخ والتحكم", "النيازك والتصادم", "العداد والسرعة"], en: ["Space and stars", "Rocket and controls", "Meteors and collisions", "Score and speed"] },
      code: ['<span class="k">const</span> ship = { x: W/2, y: H-40 };', '<span class="k">function</span> spawnMeteor() { ... }', 'speed += <span class="s">0.002</span> * dt;', '<span class="k">if</span> (hit(ship, m)) gameOver();'],
      u2: { ar: "ضيف نجوم ذهبية يجمعها تزوّد النقط.", en: "Add golden stars to collect for bonus points." },
      a2: { ar: "ضفت نجوم ذهبية، كل واحدة بـ 10 نقط.", en: "Added golden stars worth 10 points each." },
      done: { ar: "اللعبة شغالة ✓ ابعت الرابط لصحابك", en: "Game is live ✓ share the link" },
      preview: () => `<div class="pv-game" data-s="1"><canvas id="game-cv" width="360" height="306"></canvas><div class="hud" data-s="4"><span id="g-score">0</span><span>★ <span id="g-stars">0</span></span></div></div>`
    },
    {
      id: "mobile", icon: "mobile", label: { ar: "موبايل", en: "Mobile" },
      u1: { ar: "تطبيق لتيتة يفكّرها بمواعيد الدوا ويعلّم اللي خدته.", en: "An app for grandma that reminds her of medicine times and ticks off what she took." },
      a1: { ar: "فكرة جميلة. هعمل:", en: "Lovely idea. I'll make:" },
      plan: { ar: ["شاشة رئيسية بالاسم", "قائمة الأدوية والمواعيد", "زرار علامة لكل جرعة", "حفظ اللي اتاخد"], en: ["Home screen", "Medicine list with times", "A tick for each dose", "Remember what was taken"] },
      code: ['<span class="k">export default function</span> Today() {', '  <span class="k">const</span> [doses, setDoses] = useStore();', '  <span class="k">return</span> doses.map(d =&gt; <span class="k">&lt;Pill</span> {...d} /&gt;);', '}'],
      u2: { ar: "كبّر الخط وضيف تنبيه قبل الميعاد.", en: "Make the text bigger and add a reminder before each dose." },
      a2: { ar: "كبرت الخط وضفت تنبيه قبلها بـ 10 دقايق.", en: "Bigger text, plus a reminder 10 minutes before." },
      done: { ar: "جاهز ✓ امسح الـ QR وجربه على موبايلك", en: "Ready ✓ scan the QR to try it on your phone" },
      preview: () => `<div class="pv-phone"><div class="screen"><div class="notch"></div>
        <div class="bell">🔔 ${lang === "ar" ? "كمان 10 دقايق: دوا الضغط" : "In 10 min: blood pressure pill"}</div>
        <div class="app-h" data-s="1">${lang === "ar" ? "أدوية النهارده يا تيتة" : "Today's medicine"}</div>
        <div class="pill" data-s="2"><i style="background:#FF8FB1"></i><span class="t"><b>${lang === "ar" ? "دوا الضغط" : "Blood pressure"}</b><small>9:00 ${lang === "ar" ? "ص" : "AM"}</small></span><span class="tick" data-tick>✓</span></div>
        <div class="pill" data-s="2"><i style="background:#8C96FF"></i><span class="t"><b>${lang === "ar" ? "فيتامين د" : "Vitamin D"}</b><small>2:00 ${lang === "ar" ? "م" : "PM"}</small></span><span class="tick" data-tick>✓</span></div>
        <div class="pill" data-s="3"><i style="background:#FFD43B"></i><span class="t"><b>${lang === "ar" ? "دوا السكر" : "Diabetes"}</b><small>9:00 ${lang === "ar" ? "م" : "PM"}</small></span><span class="tick">✓</span></div>
      </div></div>`
    },
    {
      id: "kids", icon: "kids", label: { ar: "لأولادي", en: "For my kids" },
      u1: { ar: "لعبة جدول الضرب لبنتي ملك (7 سنين)، ألوان مبهجة.", en: "A times-table game for my daughter (7), with bright colors." },
      a1: { ar: "هنخليها لعبة مش واجب:", en: "Let's make it play, not homework:" },
      plan: { ar: ["سؤال كبير وواضح", "3 إجابات ملونة", "تشجيع لما تصح", "نجوم تتجمع"], en: ["One big clear question", "Three colorful answers", "Cheers for right answers", "Stars to collect"] },
      code: ['<span class="k">const</span> a = rand(2, 9), b = rand(2, 9);', 'choices = shuffle([a*b, a*b+a, a*b-b]);', '<span class="k">if</span> (pick === a*b) stars++;'],
      u2: { ar: "لما تجاوب صح طيّر بالونات!", en: "Release balloons when she gets it right!" },
      a2: { ar: "اتعمل! بالونات ملونة مع كل إجابة صح 🎈", en: "Done! Colorful balloons with every right answer 🎈" },
      done: { ar: "ملك بتلعب ✓ ومن غير إعلانات", en: "She's playing ✓ and no ads" },
      preview: () => `<div class="pv-kids">
        <div class="q" data-s="1">3 × 4 = ${lang === "ar" ? "؟" : "?"}</div>
        <div class="opts" data-s="2"><span>15</span><span data-right>12</span><span>9</span></div>
        <div class="stars" data-s="4">★ ★ ★ ☆ ☆</div>
        ${["#FF4F81", "#2F3CF0", "#3DD6AE", "#FFB000", "#8E3FD6"].map((c, i) => `<i class="bal" style="background:${c};left:${8 + i * 19}%;animation-delay:${i * .45}s"></i>`).join("")}
      </div>`
    },
    {
      id: "work", icon: "work", label: { ar: "لشغلي", en: "For work" },
      u1: { ar: "نظام لمواعيد عيادتي: جدول المرضى والحالة، ورسم بعدد الكشوفات.", en: "A clinic schedule: patients, status, and a chart of visits." },
      a1: { ar: "تمام يا دكتور، هعمل:", en: "Sure, doctor. I'll make:" },
      plan: { ar: ["شريط علوي", "جدول المواعيد", "حالة كل كشف", "رسم الأسبوع"], en: ["Top bar", "Appointments table", "Status per visit", "Weekly chart"] },
      code: ['<span class="k">create table</span> visits (', '  patient text, time time, status text', ');', 'chart(visitsPerDay, { type: <span class="s">"bar"</span> })'],
      u2: { ar: "ضيف خانة بحث باسم المريض.", en: "Add a search box by patient name." },
      a2: { ar: "ضفت البحث، وبيلوّن النتيجة.", en: "Search added; it highlights matches." },
      done: { ar: "شغال ✓ والبيانات محفوظة", en: "Live ✓ and data is saved" },
      preview: () => `<div class="pv-work">
        <div class="wh" data-s="1"><span>${lang === "ar" ? "عيادة د. سارة" : "Dr. Sara's clinic"}</span><span style="font-weight:400;opacity:.7">${lang === "ar" ? "الأحد" : "Sunday"}</span></div>
        <div class="srch">🔍 ${lang === "ar" ? "منى" : "Mona"}</div>
        <table data-s="2"><thead><tr><th>${lang === "ar" ? "المريض" : "Patient"}</th><th>${lang === "ar" ? "الميعاد" : "Time"}</th><th data-s="3">${lang === "ar" ? "الحالة" : "Status"}</th></tr></thead>
          <tbody>
            <tr><td>${lang === "ar" ? "أحمد علي" : "Ahmed Ali"}</td><td>10:00</td><td data-s="3"><span class="st">${lang === "ar" ? "تم" : "Done"}</span></td></tr>
            <tr data-hit><td>${lang === "ar" ? "منى سمير" : "Mona Samir"}</td><td>10:30</td><td data-s="3"><span class="st w">${lang === "ar" ? "منتظر" : "Waiting"}</span></td></tr>
            <tr><td>${lang === "ar" ? "يوسف حسن" : "Youssef Hassan"}</td><td>11:15</td><td data-s="3"><span class="st w">${lang === "ar" ? "منتظر" : "Waiting"}</span></td></tr>
          </tbody></table>
        <div class="bars" data-s="4">${[40, 65, 50, 85, 70, 95].map((h) => `<i style="height:${h}%"></i>`).join("")}</div>
      </div>`
    }
  ];

  const studio = { idx: 0, token: 0, paused: false, stage: 0, v2: false, step: 0, total: 1, visible: true };
  function scenSteps(sc) {
    return [
      { k: "user", text: sc.u1 }, { k: "ai", text: sc.a1, plan: sc.plan }, { k: "code", lines: sc.code },
      { k: "build", s: 1 }, { k: "build", s: 2 }, { k: "build", s: 3 }, { k: "build", s: 4 },
      { k: "user", text: sc.u2 }, { k: "ai2", text: sc.a2 }, { k: "mod" }, { k: "done", text: sc.done }
    ];
  }
  function wait(ms, tok) {
    return new Promise((res, rej) => {
      let left = ms;
      const tick = () => {
        if (tok !== studio.token) return rej(new Error("cancel"));
        if (!studio.paused && studio.visible) left -= 50;
        if (left <= 0) return res();
        setTimeout(tick, 50);
      };
      setTimeout(tick, 50);
    });
  }
  function chatAdd(html, cls) {
    const chat = $("#chat");
    const d = document.createElement("div"); d.className = "msg " + cls; d.innerHTML = html; chat.appendChild(d);
    while (chat.children.length > 5) chat.removeChild(chat.firstChild);
    return d;
  }
  function setProgress() {
    $("#st-prog").style.width = Math.round(100 * studio.step / studio.total) + "%";
    $("#st-cap").textContent = L(SCEN[studio.idx].label) + " · " + studio.step + "/" + studio.total;
  }
  function buildStage(s) {
    studio.stage = s;
    $$("#preview [data-s]").forEach((el) => { if (+el.dataset.s <= s) el.classList.add("on"); });
    if (s >= 4) $("#preview").classList.remove("sketch");
    const plan = $("#chat .plan"); if (plan && plan.children[s - 1]) plan.children[s - 1].classList.add("done");
    const sc = SCEN[studio.idx];
    if (sc.id === "mobile" && s >= 4) $$("#preview [data-tick]").forEach((x) => x.classList.add("ok"));
    if (sc.id === "kids" && s >= 3) { const r = $("#preview [data-right]"); if (r) r.classList.add("right"); }
  }
  function applyMod() {
    studio.v2 = true; $("#preview").classList.add("v2");
    const sc = SCEN[studio.idx];
    if (sc.id === "work") { const h = $("#preview [data-hit]"); if (h) h.classList.add("hit"); }
  }
  async function runScenario(i, instant) {
    const tok = ++studio.token;
    studio.idx = i; studio.stage = 0; studio.v2 = false; studio.step = 0;
    const sc = SCEN[i]; const steps = scenSteps(sc); studio.total = steps.length;
    $$("#scen-tabs button").forEach((b, j) => b.setAttribute("aria-selected", j === i));
    $("#chat").innerHTML = "";
    const pv = $("#preview"); pv.className = "preview sketch"; pv.innerHTML = sc.preview();
    stopGame(); if (sc.id === "game") startGame();
    setProgress();
    const fast = instant || reduceMotion;
    try {
      for (const st of steps) {
        if (st.k === "user") {
          const txt = L(st.text);
          const m = chatAdd('<mark></mark><span class="caret"></span>', "user"); const mk = m.querySelector("mark");
          if (fast) mk.textContent = txt;
          else for (let c = 0; c < txt.length; c += 2) { mk.textContent = txt.slice(0, c + 2); await wait(34, tok); }
          m.querySelector(".caret").remove();
          if (!fast) await wait(450, tok);
        } else if (st.k === "ai" || st.k === "ai2") {
          const plan = st.plan ? `<ul class="plan">${L(st.plan).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : "";
          chatAdd(esc(L(st.text)) + plan, "ai");
          if (!fast) await wait(st.plan ? 1100 : 800, tok);
        } else if (st.k === "code") {
          const m = chatAdd("", "code");
          for (const line of st.lines) { m.innerHTML += (m.innerHTML ? "\n" : "") + line; if (!fast) await wait(260, tok); }
          if (!fast) await wait(300, tok);
        } else if (st.k === "build") {
          buildStage(st.s); if (!fast) await wait(750, tok);
        } else if (st.k === "mod") {
          applyMod(); if (!fast) await wait(900, tok);
        } else if (st.k === "done") {
          chatAdd(esc(L(st.text)), "done-msg");
        }
        studio.step++; setProgress();
      }
      if (fast) return;
      await wait(4200, tok);
      runScenario((i + 1) % SCEN.length);
    } catch (e) { /* cancelled */ }
  }
  function renderStudioTabs() {
    $("#scen-tabs").innerHTML = SCEN.map((s, i) => `<button type="button" role="tab" aria-selected="${i === studio.idx}" data-i="${i}">${icon(s.icon)}${esc(L(s.label))}</button>`).join("");
  }
  function setPlayIcon() {
    const b = $("#st-play");
    b.innerHTML = icon(studio.paused ? "play" : "pause");
    b.setAttribute("aria-label", studio.paused ? t("st.play") : t("st.pause"));
    $("#st-replay").setAttribute("aria-label", t("st.replay"));
  }
  function initStudio() {
    renderStudioTabs();
    $("#scen-tabs").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { studio.paused = false; setPlayIcon(); runScenario(+b.dataset.i); } });
    $("#st-play").addEventListener("click", () => { studio.paused = !studio.paused; setPlayIcon(); });
    $("#st-replay").addEventListener("click", () => { studio.paused = false; setPlayIcon(); runScenario(studio.idx); });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((ents) => { studio.visible = ents[0].isIntersecting; }, { threshold: .15 }).observe($("#studio"));
    }
    setPlayIcon();
    runScenario(0, reduceMotion);
  }

  /* --- the tiny self-playing game in the game demo --- */
  let game = null;
  function startGame() {
    const cv = $("#game-cv"); if (!cv) return;
    const ctx = cv.getContext("2d"); const W = cv.width, H = cv.height;
    const stars = Array.from({ length: 60 }, () => ({ x: Math.random() * W, y: Math.random() * H, z: Math.random() * 1.5 + .3 }));
    const g = { ship: { x: W / 2, y: H - 46 }, meteors: [], coins: [], score: 0, got: 0, speed: 1.2, t: 0, raf: 0 };
    game = g;
    function frame() {
      if (game !== g) return;
      const run = !studio.paused && studio.visible;
      const s = studio.stage;
      if (run) g.t++;
      ctx.fillStyle = "#0B0E24"; ctx.fillRect(0, 0, W, H);
      stars.forEach((st) => { if (run) { st.y += st.z * g.speed; if (st.y > H) { st.y = 0; st.x = Math.random() * W; } } ctx.fillStyle = `rgba(255,255,255,${.3 + st.z / 2.5})`; ctx.fillRect(st.x, st.y, st.z * 1.6, st.z * 1.6); });
      if (s >= 3 && run) {
        g.speed = Math.min(3.2, g.speed + .0016);
        if (g.t % 34 === 0) g.meteors.push({ x: 20 + Math.random() * (W - 40), y: -20, r: 10 + Math.random() * 12, v: g.speed * (1 + Math.random()) });
        if (studio.v2 && g.t % 55 === 0) g.coins.push({ x: 20 + Math.random() * (W - 40), y: -10, v: g.speed * 1.2 });
        g.score++;
      }
      if (s >= 3) {
        g.meteors.forEach((m) => { if (run) m.y += m.v; ctx.fillStyle = "#8A6A55"; ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, 7); ctx.fill(); ctx.fillStyle = "#6B4F3E"; ctx.beginPath(); ctx.arc(m.x - m.r / 3, m.y - m.r / 4, m.r / 3.2, 0, 7); ctx.fill(); });
        g.meteors = g.meteors.filter((m) => m.y < H + 30);
        g.coins.forEach((c) => {
          if (run) c.y += c.v;
          ctx.save(); ctx.translate(c.x, c.y); ctx.rotate(g.t / 20); ctx.fillStyle = "#FFD43B"; ctx.beginPath();
          for (let k = 0; k < 10; k++) { const rr = k % 2 ? 4 : 9; const a = k * Math.PI / 5; ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
          ctx.closePath(); ctx.fill(); ctx.restore();
          if (Math.abs(c.x - g.ship.x) < 18 && Math.abs(c.y - g.ship.y) < 20 && !c.got) { c.got = true; g.got++; g.score += 100; }
        });
        g.coins = g.coins.filter((c) => c.y < H + 20 && !c.got);
      }
      if (s >= 2) {
        // auto-pilot: steer away from the nearest threat, towards coins
        if (run && s >= 3) {
          let target = g.ship.x;
          const threats = g.meteors.filter((m) => m.y > g.ship.y - 150 && m.y < g.ship.y + 10);
          threats.forEach((m) => { const dx = g.ship.x - m.x; if (Math.abs(dx) < m.r + 26) target += (dx >= 0 ? 1 : -1) * 34; });
          if (!threats.length && g.coins.length) target = g.coins[0].x;
          target = Math.max(20, Math.min(W - 20, target));
          g.ship.x += (target - g.ship.x) * .09;
        }
        const x = g.ship.x, y = g.ship.y;
        ctx.fillStyle = "#FF6F98"; ctx.beginPath(); ctx.moveTo(x, y + 14 + Math.sin(g.t / 3) * 4); ctx.lineTo(x - 6, y + 10); ctx.lineTo(x + 6, y + 10); ctx.fill();
        ctx.fillStyle = "#EEF1F7"; ctx.beginPath(); ctx.moveTo(x, y - 18); ctx.quadraticCurveTo(x + 11, y - 2, x + 9, y + 11); ctx.lineTo(x - 9, y + 11); ctx.quadraticCurveTo(x - 11, y - 2, x, y - 18); ctx.fill();
        ctx.fillStyle = "#2F3CF0"; ctx.beginPath(); ctx.arc(x, y - 3, 4, 0, 7); ctx.fill();
      }
      const sc = $("#g-score"), stc = $("#g-stars");
      if (sc) sc.textContent = Math.floor(g.score / 6);
      if (stc) stc.textContent = g.got;
      g.raf = requestAnimationFrame(frame);
    }
    frame();
  }
  function stopGame() { if (game) cancelAnimationFrame(game.raf); game = null; }

  /* ======================= IDEA section ======================= */
  function renderIdea() {
    const nodes = lang === "ar"
      ? [["اوصف", "plan"], ["يبني", "code"], ["جرّب", "play"], ["عدّل", "brush"], ["انشر", "web"]]
      : [["Describe", "plan"], ["AI builds", "code"], ["Try it", "play"], ["Refine", "brush"], ["Ship", "web"]];
    const cx = 210, cy = 180, R = 125;
    const pts = nodes.map((n, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
    const sub = lang === "ar"
      ? ["بكلامك العادي", "الذكاء الاصطناعي", "كأنك المستخدم", "طلب واحد في المرة", "رابط تشاركه"]
      : ["in plain words", "the AI writes code", "like a real user", "one request at a time", "a link to share"];
    $("#loop").innerHTML = `<svg viewBox="-40 0 500 370" style="direction:ltr" role="img" aria-label="${esc(t("idea.title"))}">
      <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="var(--line)" stroke-width="10"/>
      <circle class="flow" cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="var(--accent)" stroke-width="3"/>
      <text x="${cx}" y="${cy - 6}" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)" font-family="var(--font-display)">Vibe</text>
      <text x="${cx}" y="${cy + 20}" text-anchor="middle" font-size="13" fill="var(--muted)">${lang === "ar" ? "دايرة بتتكرر" : "a loop you repeat"}</text>
      ${pts.map(([x, y], i) => `<g class="loop-node">
        <circle cx="${x}" cy="${y}" r="31" fill="${i === 0 ? "var(--hl)" : "var(--surface)"}" stroke="var(--ink)" stroke-width="2"/>
        <svg x="${x - 12}" y="${y - 20}" width="24" height="24" viewBox="0 0 24 24" style="color:${i === 0 ? "#141832" : "var(--accent)"}"><use href="#i-${nodes[i][1]}" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <text x="${x}" y="${y + 15}" text-anchor="middle" font-size="11.5" font-weight="700" fill="${i === 0 ? "#141832" : "var(--ink)"}">${esc(nodes[i][0])}</text>
        ${(() => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5, c = Math.cos(a), sn = Math.sin(a); const lx = x + c * 42, ly = y + sn * 46 + (Math.abs(c) > .5 ? 4 : (sn < 0 ? -2 : 12)); const anc = c > .5 ? "start" : c < -.5 ? "end" : "middle"; return `<text x="${lx}" y="${ly}" text-anchor="${anc}" font-size="11" fill="var(--muted)" font-family="var(--font-body)">${esc(sub[i])}</text>`; })()}
      </g>`).join("")}
    </svg>`;
    const old = lang === "ar"
      ? { h: "الطريقة القديمة", segs: [["تعلم لغة البرمجة", 5, "#8B91B5"], ["اكتب الكود", 3, "#6D739A"], ["صلّح الأخطاء", 2, "#555C7D"]], p: "شهور قبل أول برنامج حقيقي." }
      : { h: "The old way", segs: [["Learn a language", 5, "#8B91B5"], ["Write code", 3, "#6D739A"], ["Fix errors", 2, "#555C7D"]], p: "Months before your first real program." };
    const nw = lang === "ar"
      ? { h: "بالـ Vibe Coding", segs: [["اوصف", 1, "var(--accent)"], ["جرّب", 1, "#0F9F7C"], ["عدّل", 1, "#FF4F81"], ["انشر", 1, "#C99A00"], ["واتعلم وأنت بتبني", 6, "color-mix(in srgb, var(--accent) 35%, transparent)"]], p: "أول نسخة في نفس اليوم، والتعلم بيحصل وأنت بتبني." }
      : { h: "With vibe coding", segs: [["Describe", 1, "var(--accent)"], ["Try", 1, "#0F9F7C"], ["Refine", 1, "#FF4F81"], ["Ship", 1, "#C99A00"], ["learn while you build", 6, "color-mix(in srgb, var(--accent) 35%, transparent)"]], p: "A first version the same day; learning happens while you build." };
    const lane = (o, ic) => `<h3>${icon(ic)}${esc(o.h)}</h3><div class="track">${o.segs.map(([l, f, c]) => `<span style="flex:${f};background:${c}">${esc(l)}</span>`).join("")}</div><p>${esc(o.p)}</p>`;
    $("#lane-old").innerHTML = lane(old, "book");
    $("#lane-new").innerHTML = lane(nw, "spark");
    // Stack Overflow survey chart
    const so = C.stats && C.stats.soSurvey;
    if (so) {
      const w = 420, rowH = 40, x0 = 54, maxW = w - x0 - 60;
      const bars = so.points.map((p, i) => {
        const bw = maxW * p.value / 100; const y = 14 + i * (rowH + 10);
        const fill = i === so.points.length - 1 ? "var(--accent)" : "var(--line)";
        return lang === "ar"
          ? `<text x="${w - 4}" y="${y + 25}" text-anchor="end" font-size="13">${p.year}</text><rect x="${w - x0 - bw}" y="${y}" width="${bw}" height="${rowH - 6}" rx="6" fill="${fill}"/><text class="val" x="${w - x0 - bw - 8}" y="${y + 26}" text-anchor="end">${p.value}%</text>`
          : `<text x="4" y="${y + 25}" font-size="13">${p.year}</text><rect x="${x0}" y="${y}" width="${bw}" height="${rowH - 6}" rx="6" fill="${fill}"/><text class="val" x="${x0 + bw + 8}" y="${y + 26}">${p.value}%</text>`;
      }).join("");
      $("#so-chart").innerHTML = `<h3>${esc(L(so.label))}</h3><svg viewBox="0 0 ${w} ${14 + so.points.length * (rowH + 10)}" style="direction:ltr" role="img" aria-label="${esc(L(so.label))}">${bars}</svg><p class="src">${lang === "ar" ? "المصدر:" : "Source:"} <a href="${esc(so.source.url)}" target="_blank" rel="noopener">${esc(so.source.name)}</a></p>`;
    }
    const limits = lang === "ar"
      ? ["الكود اللي محدش راجعه ممكن يبقى فيه ثغرات، خصوصًا لو فيه بيانات ناس أو فلوس.", "المشاريع الكبيرة بتلخبط الذكاء الاصطناعي لو مفيش خطة وتنظيم.", "آخر 20% (التفاصيل والأخطاء الغريبة) ممكن ياخدوا وقت أكتر من أول 80%.", "لو هدفك تشتغل مبرمج، لازم تفهم الكود اللي بيتكتب مش بس توافق عليه."]
      : ["Unreviewed code can hide security holes, especially with personal data or payments.", "Big projects confuse the AI without a plan and structure.", "The last 20% (details and odd bugs) can take longer than the first 80%.", "If you want a coding career, you need to understand the code, not just accept it."];
    $("#limits-list").innerHTML = limits.map((l) => `<li>${esc(l)}</li>`).join("");
  }

  /* ======================= WIZARD & PATH ======================= */
  const W = Object.assign({ cl: "both", budget: "free", bg: "zero", goal: "web", prof: "clinic", chosen: false }, store.get("wiz", {}));
  function optBtn(group, id, ic, title, hint, pressed, compact) {
    return `<button type="button" class="opt${compact ? " compact" : ""}" data-g="${group}" data-v="${id}" aria-pressed="${pressed}">
      ${ic ? `<span class="ic">${icon(ic)}</span>` : ""}<b>${esc(title)}</b>${hint ? `<small>${esc(hint)}</small>` : ""}</button>`;
  }
  function renderWizard() {
    const langs = lang === "ar"
      ? [["ar", "lang", "عربي بس", "المتاح بالعربي، وهنكمّل بالإنجليزي لو ناقص"], ["en", "lang", "إنجليزي بس", "أكبر عدد من المصادر"], ["both", "lang", "الاتنين", "العربي الأول، والإنجليزي كمان"]]
      : [["ar", "lang", "Arabic only", "Arabic first; English fills gaps"], ["en", "lang", "English only", "The widest choice"], ["both", "lang", "Both", "Arabic first, English too"]];
    $("#w-lang").innerHTML = langs.map(([id, , ti, h]) => optBtn("cl", id, id === "ar" ? "book" : id === "en" ? "guide" : "community", ti, h, W.cl === id)).join("");
    $("#w-bg").innerHTML = C.backgrounds.map((b) => optBtn("bg", b.id, b.icon, L(b), L(b.hint), W.bg === b.id)).join("");
    $("#w-budget").innerHTML = [["free", "wiz.bFree", "wiz.bFreeH", "sprout"], ["paid", "wiz.bPaid", "wiz.bPaidH", "badge"]]
      .map(([id, ti, h, ic]) => optBtn("budget", id, ic, t(ti), t(h), W.budget === id)).join("");
    $("#w-goal").innerHTML = C.goals.map((g) => optBtn("goal", g.id, g.icon, L(g), L(g.hint), W.goal === g.id)).join("");
    const showProf = W.bg === "pro" || W.goal === "work";
    const pr = $("#w-prof"); pr.hidden = !showProf;
    pr.innerHTML = `<span style="color:var(--band-muted);align-self:center;margin-inline-end:.3rem">${esc(t("wiz.prof"))}</span>` +
      C.professions.map((p) => `<button type="button" class="toggle" data-g="prof" data-v="${p.id}" aria-pressed="${W.prof === p.id}">${esc(L(p))}</button>`).join("");
  }
  function onWizardClick(e) {
    const b = e.target.closest("[data-g]"); if (!b) return;
    W[b.dataset.g] = b.dataset.v; store.set("wiz", W); renderWizard();
  }

  const RELATED = { kids: ["game"], work: ["web", "auto"], auto: ["work"], mobile: ["web"], career: ["web"], game: ["kids"], web: ["work"] };
  function scoreRes(r, opts) {
    const g = opts.goal, bg = opts.bg;
    let s = 0;
    if (r.goals.includes(g)) s += 5;
    else if (r.goals.includes("all")) s += 3.6;
    else if ((RELATED[g] || []).some((x) => r.goals.includes(x))) s += 1;
    else return -99;
    if (r.who.includes(bg)) s += 3; else if (r.who.includes("all")) s += 1.6; else s -= 1.5;
    const lv = { zero: { start: 2, grow: -.5, pro: -4 }, pro: { start: 2, grow: 0, pro: -3 }, some: { start: 1, grow: 1.5, pro: -1 }, dev: { start: -.3, grow: 1.5, pro: 2 } }[bg] || {};
    s += lv[r.level] || 0;
    if (r.featured) s += 1;
    if (opts.cl === "both" && r.lang === lang) s += 1.2;
    if (opts.cl === "ar" && r.lang === "ar") s += 3;
    if (opts.budget === "free") {
      if (r.cost === "paid") s -= 8;            // free path: paid resources drop out
      else if (r.cost === "freemium") s -= .3;
      else s += 1.2;
      if ((r.tags || []).includes("opencode")) s += 3.5;   // OpenCode is the core of the free path
    } else {
      if (r.cost === "free") s += .4;
      if ((r.tags || []).includes("opencode")) s += .8;
    }
    return s;
  }
  function computePath(opts) {
    const pool = visible();
    const stages = C.stages.map((st) => {
      // "en" = English only; "ar" and "both" keep everything (for "ar", Arabic is moved to the front below)
      const cand = pool.filter((r) => +r.stage === st.n && (opts.cl !== "en" || r.lang === "en"));
      let scored = cand.map((r) => ({ r, s: scoreRes(r, opts) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s);
      let fallback = false;
      if (opts.cl === "ar") {
        const ar = scored.filter((x) => x.r.lang === "ar");
        if (ar.length < 2) fallback = true;
        scored = ar.concat(scored.filter((x) => x.r.lang !== "ar"));
      }
      const picked = []; const typeCount = {};
      for (const x of scored) {
        const tp = x.r.type; if ((typeCount[tp] || 0) >= 2) continue;
        if (opts.cl === "ar" && x.r.lang !== "ar" && picked.filter((p) => p.lang === "ar").length >= 3) break;
        picked.push(x.r); typeCount[tp] = (typeCount[tp] || 0) + 1;
        if (picked.length >= 4) break;
      }
      return { st, items: picked, fallback: fallback && picked.some((p) => p.lang !== "ar") };
    });
    return stages;
  }
  function toolById(id) { return TOOLS.find((x) => x.id === id); }
  function monogram(name) { return name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2); }
  // Arabic needs real dual/plural forms (أسبوعين، 3 أسابيع)
  function weekLabel(n) {
    if (lang === "ar") {
      if (n === 0.5) return "نص أسبوع";
      if (n === 1) return "أسبوع";
      if (n === 1.5) return "أسبوع ونص";
      if (n === 2) return "أسبوعين";
      return n + " أسابيع";
    }
    return (n < 1 ? "½" : n) + " " + (n > 1 ? t("path.weeks") : t("path.week"));
  }
  function renderPath() {
    const opts = W;
    const goal = C.goals.find((g) => g.id === opts.goal) || C.goals[0];
    const bg = C.backgrounds.find((b) => b.id === opts.bg) || C.backgrounds[0];
    $("#path-title").textContent = lang === "ar" ? `مسارك: ${L(goal)}` : `Your path: ${L(goal)}`;
    $("#path-sub").textContent = (lang === "ar" ? "الخلفية: " : "Background: ") + L(bg) + (opts.bg === "pro" || opts.goal === "work" ? " · " + L(C.professions.find((p) => p.id === opts.prof)) : "");
    $("#path-example").hidden = !!opts.chosen;
    // tools
    const isFree = opts.budget === "free";
    const pickSrc = isFree && C.toolPicksFree ? C.toolPicksFree : C.toolPicks;
    const picks = ((pickSrc[opts.goal] || {})[opts.bg] || []).map(toolById).filter(Boolean);
    const oc = $("#path-oc"); oc.hidden = !isFree;
    oc.innerHTML = isFree ? `<b>${esc(t("path.ocTitle"))}</b><span>${esc(t("path.ocBody"))}</span><a class="btn" href="#free">${esc(t("path.ocGo"))}</a>` : "";
    $("#path-tools").innerHTML = picks.map((tl, i) => `<a class="tpick" href="${esc(tl.url)}" target="_blank" rel="noopener">
      <span class="mono" style="background:${esc(tl.color)}">${esc(monogram(tl.name))}</span>
      <span><b>${esc(tl.name)}</b><small>${esc(L(tl.desc))}</small><small style="color:var(--mint)">${esc(L(tl.free))}</small></span>
      <span class="rank">${i === 0 ? esc(t("path.main")) : esc(t("path.alt"))}</span></a>`).join("");
    // project + prompt
    const key = opts.goal === "work" ? "work:" + opts.prof : opts.goal;
    const proj = C.projects[key] || C.projects[opts.goal];
    $("#path-project").textContent = L(proj);
    let prompt = L(C.starterPrompt);
    prompt = fill(prompt, "project", L(proj)); prompt = fill(prompt, "who", L(C.starterWho[opts.bg])); prompt = fill(prompt, "style", L(C.starterStyle[opts.goal]));
    $("#path-prompt").innerHTML = `<button class="copy" type="button" id="copy-prompt">${icon("copy")}${esc(t("path.copy"))}</button>${esc(prompt)}`;
    $("#copy-prompt").onclick = () => copyText(prompt);
    // timeline
    const weeks = C.weeks[opts.bg] || C.weeks.zero;
    const total = weeks.reduce((a, b) => a + b, 0);
    const w = 460, lab = 118, chartW = w - lab - 78, rowH = 34;
    const rtl = lang === "ar"; let acc = 0;
    const colors = ["var(--hl)", "var(--accent)", "var(--pop)", "var(--mint)"];
    const rows = C.stages.map((st, i) => {
      const x = acc / total * chartW, bw = Math.max(6, weeks[i] / total * chartW); acc += weeks[i];
      const y = 8 + i * (rowH + 8);
      const bx = rtl ? (w - lab - x - bw) : (lab + x);
      const lx = rtl ? w - 2 : 2;
      const wl = weekLabel(weeks[i]);
      return `<text x="${lx}" y="${y + 22}" text-anchor="${rtl ? "end" : "start"}" font-size="13" style="fill:var(--ink)">${st.n}. ${esc(L(st))}</text>
        <rect x="${bx}" y="${y}" width="${bw}" height="${rowH}" rx="8" fill="${colors[i]}"/>
        <text x="${rtl ? bx - 6 : bx + bw + 6}" y="${y + 22}" text-anchor="${rtl ? "end" : "start"}" font-size="12">${esc(wl)}</text>`;
    }).join("");
    const ticks = Array.from({ length: Math.floor(total) + 1 }, (_, k) => { const x = k / total * chartW; const gx = rtl ? w - lab - x : lab + x; return `<line x1="${gx}" x2="${gx}" y1="4" y2="${8 + 4 * (rowH + 8)}" stroke="var(--line)" stroke-dasharray="2 4"/>`; }).join("");
    $("#path-timeline").innerHTML = `<svg viewBox="0 0 ${w} ${12 + 4 * (rowH + 8)}" style="direction:ltr" role="img" aria-label="${esc(t("path.timeline"))}">${ticks}${rows}</svg>`;
    // stages
    const st = computePath(opts);
    $("#path-stages").innerHTML = st.map(({ st: s, items, fallback }) => `<div class="stage">
      <div class="stage-h"><span class="num">${s.n}</span><b>${esc(L(s))}</b><small>${esc(L(s.sub))}</small></div>
      ${fallback ? `<p class="empty-note">${esc(t("path.fallback"))}</p>` : ""}
      ${items.length ? items.map(miniCard).join("") : `<p class="empty-note">${esc(t("path.none"))}</p>`}
    </div>`).join("");
  }
  function isSearch(r) { return /results\?search_query=/.test(r.url); }
  function miniCard(r) {
    return `<a class="mini" href="${esc(r.url)}" target="_blank" rel="noopener">
      <span class="row"><span class="chip">${icon(r.type)}${esc(t("type." + r.type))}</span><span class="chip ${r.lang === "ar" ? "lang-ar" : "lang-en"}">${r.lang === "ar" ? "ع" : "EN"}</span>${isSearch(r) ? `<span class="chip search">${esc(t("lib.search1"))}</span>` : ""}</span>
      <b>${esc(L(r.title))}</b><small>${esc(r.provider || "")}${r.duration ? " · " + esc(r.duration) : ""}</small></a>`;
  }

  /* ======================= LIBRARY ======================= */
  const F = { q: "", lang: "all", type: "all", goal: "all", cost: "all", level: "all", view: store.get("view", null), limit: 18 };
  const TYPES = ["course", "video", "playlist", "guide", "repo", "path", "tool-guide", "community"];
  const ART = [["#2F3CF0", "#8C96FF"], ["#FF4F81", "#FFB3C7"], ["#0F9F7C", "#7FE3C6"], ["#C99A00", "#FFE07A"], ["#141832", "#555C7D"], ["#8E3FD6", "#D6B1FF"], ["#E5484D", "#FFB0A8"], ["#0B78C9", "#9AD3FF"]];
  function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); }
  function art(r) {
    const [a, b] = ART[hash(r.provider || r.id) % ART.length]; const h = hash(r.id);
    let shapes = "";
    if (r.type === "video" || r.type === "playlist") {
      shapes = `<circle cx="${60 + h % 120}" cy="46" r="${50 + h % 30}" fill="${b}" opacity=".55"/><circle cx="${230 + h % 60}" cy="${20 + h % 50}" r="26" fill="#fff" opacity=".18"/>` +
        (r.type === "playlist" ? `<rect x="196" y="58" width="80" height="6" rx="3" fill="#fff" opacity=".4"/><rect x="196" y="70" width="60" height="6" rx="3" fill="#fff" opacity=".3"/>` : "");
    } else if (r.type === "repo") {
      shapes = `<path d="M30 92 V30 M30 52 C30 40 70 40 70 28 M70 92 V60 C70 48 110 52 110 36" stroke="${b}" stroke-width="6" fill="none" opacity=".7"/><circle cx="70" cy="28" r="8" fill="#fff" opacity=".6"/><circle cx="110" cy="36" r="8" fill="#fff" opacity=".6"/><circle cx="30" cy="30" r="8" fill="#fff" opacity=".6"/>`;
    } else if (r.type === "course" || r.type === "path") {
      shapes = Array.from({ length: 5 }, (_, i) => `<rect x="${20 + i * 56}" y="${64 - i * 12 - (h % 7)}" width="44" height="${40 + i * 12}" rx="8" fill="${i % 2 ? b : "#fff"}" opacity="${i % 2 ? .6 : .16}"/>`).join("");
    } else if (r.type === "community") {
      shapes = Array.from({ length: 7 }, (_, i) => `<circle cx="${30 + i * 42}" cy="${40 + ((h >> i) % 30)}" r="${10 + (i * 7 + h) % 14}" fill="${i % 2 ? b : "#fff"}" opacity="${i % 2 ? .55 : .2}"/>`).join("");
    } else {
      shapes = Array.from({ length: 6 }, (_, i) => `<rect x="${24 + (i % 2) * 20}" y="${14 + i * 13}" width="${120 + ((h >> i) % 120)}" height="6" rx="3" fill="#fff" opacity=".22"/>`).join("") + `<circle cx="${250 - h % 40}" cy="46" r="34" fill="${b}" opacity=".5"/>`;
    }
    return `<svg class="art" viewBox="0 0 320 92" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="320" height="92" fill="${a}"/>${shapes}</svg>`;
  }
  const REPO = "https://github.com/ahmadmansy/vibe-coding-path";
  // opens a pre-filled GitHub issue for a resource (dead link, outdated info...)
  function reportUrl(r) {
    const body = `Resource: ${L(r.title)}\nID: ${r.id}\nURL: ${r.url}\n\nWhat's wrong? (dead link / outdated info / other)\n`;
    return `${REPO}/issues/new?title=${encodeURIComponent("Report: " + r.id)}&body=${encodeURIComponent(body)}`;
  }
  function card(r) {
    const lvl = { start: 1, grow: 2, pro: 3 }[r.level] || 1;
    const goals = r.goals.includes("all") ? [t("goal.all")] : r.goals.slice(0, 3).map((g) => L(C.goals.find((x) => x.id === g)));
    return `<article class="card">
      <div class="thumb">${art(r)}<span class="badge">${icon(r.type)}${esc(t("type." + r.type))}</span></div>
      <div class="body">
        <div class="tags"><span class="chip ${r.lang === "ar" ? "lang-ar" : "lang-en"}">${r.lang === "ar" ? "عربي" : "English"}</span><span class="chip ${r.cost === "paid" ? "paid" : "free"}">${esc(t("cost." + r.cost))}</span>${isSearch(r) ? `<span class="chip search">${icon("search")}${esc(t("lib.search1"))}</span>` : ""}${r.duration ? `<span class="chip">${esc(r.duration)}</span>` : ""}</div>
        <h3>${esc(L(r.title))}</h3>
        <span class="prov">${esc(r.provider || "")}</span>
        <p>${esc(L(r.desc))}</p>
        <div class="tags">${goals.map((g) => `<span class="chip">${esc(g)}</span>`).join("")}</div>
        <div class="open"><span class="lvl" title="${esc(t("lvl." + r.level))}" aria-label="${esc(t("lvl." + r.level))}">${[1, 2, 3].map((k) => `<i class="${k <= lvl ? "on" : ""}"></i>`).join("")}</span>
          <a class="report" href="${esc(reportUrl(r))}" target="_blank" rel="noopener" title="${esc(t("lib.reportT"))}">${icon("bug")}${esc(t("lib.report"))}</a>
          <a href="${esc(r.url)}" target="_blank" rel="noopener">${esc(t("lib.open"))} ${icon("ext")}</a></div>
      </div></article>`;
  }
  function renderLibFilters() {
    $("#f-lang").innerHTML = [["all", "f.all"], ["ar", "f.ar"], ["en", "f.en"]].map(([v, k]) => `<button class="toggle" type="button" data-f="lang" data-v="${v}" aria-pressed="${F.lang === v}">${esc(t(k))}</button>`).join("");
    const used = TYPES.filter((tp) => visible().some((r) => r.type === tp));
    $("#f-type").innerHTML = [`<button class="toggle" type="button" data-f="type" data-v="all" aria-pressed="${F.type === "all"}">${esc(t("lib.all"))}</button>`]
      .concat(used.map((tp) => `<button class="toggle" type="button" data-f="type" data-v="${tp}" aria-pressed="${F.type === tp}">${icon(tp)}${esc(t("type." + tp))}</button>`)).join("");
    $("#f-goal").innerHTML = `<option value="all">${esc(t("lib.all"))}</option>` + C.goals.map((g) => `<option value="${g.id}"${F.goal === g.id ? " selected" : ""}>${esc(L(g))}</option>`).join("");
    $("#f-cost").innerHTML = ["all", "free", "freemium", "paid"].map((c) => `<option value="${c}"${F.cost === c ? " selected" : ""}>${esc(c === "all" ? t("lib.all") : t("cost." + c))}</option>`).join("");
    $("#f-level").innerHTML = ["all", "start", "grow", "pro"].map((c) => `<option value="${c}"${F.level === c ? " selected" : ""}>${esc(c === "all" ? t("lib.all") : t("lvl." + c))}</option>`).join("");
  }
  function filtered() {
    const q = F.q.trim().toLowerCase();
    return visible().filter((r) => {
      if (F.lang !== "all" && r.lang !== F.lang) return false;
      if (F.type !== "all" && r.type !== F.type) return false;
      if (F.goal !== "all" && !(r.goals.includes(F.goal) || r.goals.includes("all"))) return false;
      if (F.cost !== "all" && r.cost !== F.cost) return false;
      if (F.level !== "all" && r.level !== F.level) return false;
      if (q) {
        const hay = [r.title.ar, r.title.en, r.desc.ar, r.desc.en, r.provider, r.type].join(" ").toLowerCase();
        if (!q.split(/\s+/).every((w) => hay.includes(w))) return false;
      }
      return true;
    }).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || (a.lang === lang ? -1 : 0) - (b.lang === lang ? -1 : 0) || (a.stage - b.stage));
  }
  function renderLib() {
    const list = filtered();
    const view = F.view || settings.defaultView || "grid";
    $("#cards").className = "cards" + (view === "list" ? " list" : "");
    $("#v-grid").setAttribute("aria-pressed", view === "grid"); $("#v-list").setAttribute("aria-pressed", view === "list");
    $("#lib-count").textContent = t("lib.count", { n: list.length });
    $("#cards").innerHTML = list.length ? list.slice(0, F.limit).map(card).join("") : `<p class="empty-note">${esc(t("lib.empty"))}</p>`;
    const more = $("#more"); const rest = list.length - F.limit;
    more.hidden = rest <= 0; if (rest > 0) more.textContent = t("lib.more", { n: rest });
  }
  function renderLibCharts() {
    const v = visible();
    const used = TYPES.filter((tp) => v.some((r) => r.type === tp));
    const rows = used.map((tp) => ({ tp, ar: v.filter((r) => r.type === tp && r.lang === "ar").length, en: v.filter((r) => r.type === tp && r.lang === "en").length }));
    const max = Math.max(...rows.map((r) => r.ar + r.en), 1);
    const w = 440, lab = 120, cw = w - lab - 40, rh = 22, rtl = lang === "ar";
    const svg = rows.map((r, i) => {
      const y = 6 + i * (rh + 8), wa = r.ar / max * cw, we = r.en / max * cw;
      const x0 = rtl ? w - lab : lab;
      const ra = rtl ? `<rect x="${x0 - wa}" y="${y}" width="${wa}" height="${rh}" fill="var(--accent)" rx="4"/><rect x="${x0 - wa - we}" y="${y}" width="${we}" height="${rh}" fill="var(--mint)" rx="4"/>`
        : `<rect x="${x0}" y="${y}" width="${wa}" height="${rh}" fill="var(--accent)" rx="4"/><rect x="${x0 + wa}" y="${y}" width="${we}" height="${rh}" fill="var(--mint)" rx="4"/>`;
      const tx = rtl ? x0 - wa - we - 6 : x0 + wa + we + 6;
      return `<text x="${rtl ? w - 2 : 2}" y="${y + 16}" text-anchor="${rtl ? "end" : "start"}" font-size="12.5" style="fill:var(--ink)">${esc(t("type." + r.tp))}</text>${ra}<text x="${tx}" y="${y + 16}" text-anchor="${rtl ? "end" : "start"}" font-size="12" style="fill:var(--ink);font-variant-numeric:tabular-nums">${r.ar + r.en}</text>`;
    }).join("");
    $("#chart-types").innerHTML = `<h3>${esc(t("lib.chartTypes"))}</h3><svg viewBox="0 0 ${w} ${10 + rows.length * (rh + 8)}" style="direction:ltr" role="img" aria-label="${esc(t("lib.chartTypes"))}">${svg}</svg>
      <div class="legend"><span><i style="background:var(--accent)"></i>${esc(t("f.ar"))} (${v.filter((r) => r.lang === "ar").length})</span><span><i style="background:var(--mint)"></i>${esc(t("f.en"))} (${v.filter((r) => r.lang === "en").length})</span></div>`;
    const grows = C.goals.map((g) => ({ g, n: v.filter((r) => r.goals.includes(g.id)).length, all: v.filter((r) => r.goals.includes("all")).length }));
    const gm = Math.max(...grows.map((x) => x.n + x.all), 1);
    const gsvg = grows.map((x, i) => {
      const y = 6 + i * (rh + 8), wn = x.n / gm * cw, wa = x.all / gm * cw, x0 = rtl ? w - lab : lab;
      const r1 = rtl ? `<rect x="${x0 - wn}" y="${y}" width="${wn}" height="${rh}" rx="4" fill="var(--pop)"/><rect x="${x0 - wn - wa}" y="${y}" width="${wa}" height="${rh}" rx="4" fill="var(--line)"/>`
        : `<rect x="${x0}" y="${y}" width="${wn}" height="${rh}" rx="4" fill="var(--pop)"/><rect x="${x0 + wn}" y="${y}" width="${wa}" height="${rh}" rx="4" fill="var(--line)"/>`;
      const tx = rtl ? x0 - wn - wa - 6 : x0 + wn + wa + 6;
      return `<text x="${rtl ? w - 2 : 2}" y="${y + 16}" text-anchor="${rtl ? "end" : "start"}" font-size="12.5" style="fill:var(--ink)">${esc(L(x.g))}</text>${r1}<text x="${tx}" y="${y + 16}" text-anchor="${rtl ? "end" : "start"}" font-size="12" style="fill:var(--ink)">${x.n}</text>`;
    }).join("");
    $("#chart-goals").innerHTML = `<h3>${esc(t("lib.chartGoals"))}</h3><svg viewBox="0 0 ${w} ${10 + grows.length * (rh + 8)}" style="direction:ltr" role="img" aria-label="${esc(t("lib.chartGoals"))}">${gsvg}</svg>
      <div class="legend"><span><i style="background:var(--pop)"></i>${lang === "ar" ? "مخصوص للهدف" : "Specific to the goal"}</span><span><i style="background:var(--line)"></i>${lang === "ar" ? "عام ينفع لكل الأهداف" : "General, fits every goal"} (${grows[0].all})</span></div>`;
  }
  function initLib() {
    $("#library").addEventListener("click", (e) => {
      const b = e.target.closest("[data-f]");
      if (b) { F[b.dataset.f] = b.dataset.v; F.limit = 18; renderLibFilters(); renderLib(); }
    });
    ["goal", "cost", "level"].forEach((k) => $("#f-" + k).addEventListener("change", (e) => { F[k] = e.target.value; F.limit = 18; renderLib(); }));
    let qt; $("#q").addEventListener("input", (e) => { clearTimeout(qt); qt = setTimeout(() => { F.q = e.target.value; F.limit = 18; renderLib(); }, 150); });
    $("#more").addEventListener("click", () => { F.limit += 24; renderLib(); });
    $("#v-grid").addEventListener("click", () => { F.view = "grid"; store.set("view", "grid"); renderLib(); });
    $("#v-list").addEventListener("click", () => { F.view = "list"; store.set("view", "list"); renderLib(); });
  }

  /* ======================= TOOLS ======================= */
  let toolCat = "all", toolSel = null;
  const CATS = ["all", "builder", "editor", "agent", "game", "mobile", "kids", "auto"];
  const CAT_COLORS = { builder: "var(--accent)", editor: "#555C7D", agent: "#141832", game: "var(--pop)", mobile: "var(--mint)", kids: "#C99A00", auto: "#8E3FD6" };
  function renderTools() {
    $("#t-cat").innerHTML = CATS.filter((c) => c === "all" || TOOLS.some((x) => x.cat === c)).map((c) => `<button class="toggle" type="button" data-cat="${c}" aria-pressed="${toolCat === c}">${c !== "all" ? `<i style="width:9px;height:9px;border-radius:50%;background:${CAT_COLORS[c]};display:inline-block"></i>` : ""}${esc(t("cat." + c))}</button>`).join("");
    const list = TOOLS.filter((x) => toolCat === "all" || x.cat === toolCat);
    $("#tool-list").innerHTML = list.map((x) => `<div class="trow"><span class="mono" style="background:${esc(x.color)}">${esc(monogram(x.name))}</span>
      <span class="nm"><a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.name)}</a><span class="free">${esc(L(x.free))}</span></span>
      <small>${esc(L(x.desc))}</small></div>`).join("");
    // scatter map
    const w = 560, h = 420, pad = 44;
    const X = (v) => pad + v / 10 * (w - pad * 2), Y = (v) => h - pad - v / 10 * (h - pad * 2);
    const grid = [0, 2.5, 5, 7.5, 10].map((v) => `<line x1="${X(v)}" x2="${X(v)}" y1="${Y(0)}" y2="${Y(10)}" stroke="var(--line)" stroke-dasharray="2 5"/><line x1="${X(0)}" x2="${X(10)}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)" stroke-dasharray="2 5"/>`).join("");
    const placed = [];
    const dots = TOOLS.map((x) => {
      const cx = X(x.ease), cy = Y(x.depth); const on = toolCat === "all" || x.cat === toolCat; const sel = toolSel === x.id;
      const lw = x.name.length * 6.6; let lx = cx + 11, ly = cy + 4, anchor = "start";
      if (cx + 11 + lw > w - 4) { lx = cx - 11; anchor = "end"; }
      const box = () => anchor === "start" ? [lx, ly - 11, lx + lw, ly + 3] : [lx - lw, ly - 11, lx, ly + 3];
      const hit = (b) => placed.some((p) => !(b[2] < p[0] || b[0] > p[2] || b[3] < p[1] || b[1] > p[3]));
      if (hit(box())) { ly = cy + 20; lx = cx; anchor = "middle"; }
      const bb = anchor === "middle" ? [lx - lw / 2, ly - 11, lx + lw / 2, ly + 3] : box();
      if (hit(bb)) { ly = cy - 12; }
      placed.push(anchor === "middle" ? [lx - lw / 2, ly - 11, lx + lw / 2, ly + 3] : box());
      return `<g opacity="${on ? 1 : .18}" data-tool="${x.id}" style="cursor:pointer" tabindex="0" role="button" aria-label="${esc(x.name)}">
        <circle class="dot" cx="${cx}" cy="${cy}" r="${sel ? 10 : 7}" fill="${CAT_COLORS[x.cat]}" stroke="var(--surface)" stroke-width="2.5"/>
        <text class="dot-label" x="${lx}" y="${ly}" text-anchor="${anchor}" style="direction:ltr">${esc(x.name)}</text></g>`;
    }).join("");
    $("#tool-map").innerHTML = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(t("tools.title"))}" style="direction:ltr">
      <rect x="${X(5)}" y="${Y(10)}" width="${X(10) - X(5)}" height="${Y(5) - Y(10)}" fill="color-mix(in srgb, var(--hl) 16%, transparent)" rx="10"/>
      ${grid}
      <text x="${X(0)}" y="${h - 12}" font-size="12">${esc(t("tools.x0"))}</text>
      <text x="${X(10)}" y="${h - 12}" font-size="12" text-anchor="end">${esc(t("tools.x1"))}</text>
      <text x="14" y="${Y(0)}" font-size="12" transform="rotate(-90 14 ${Y(0)})">${esc(t("tools.y0"))}</text>
      <text x="14" y="${Y(10)}" font-size="12" text-anchor="end" transform="rotate(-90 14 ${Y(10)})">${esc(t("tools.y1"))}</text>
      ${dots}</svg>`;
    const sel = toolById(toolSel);
    $("#tool-detail").innerHTML = sel ? `<b>${esc(sel.name)}</b> <span class="chip">${esc(t("cat." + sel.cat))}</span><p>${esc(L(sel.desc))}</p><p style="color:var(--mint)">${esc(L(sel.free))}</p><p><a href="${esc(sel.url)}" target="_blank" rel="noopener">${esc(sel.url.replace(/^https?:\/\//, ""))} ${icon("ext")}</a></p>` : `<p>${esc(t("tools.pick"))}</p>`;
  }
  function initTools() {
    // renderTools rebuilds the DOM, so put keyboard focus back on the element the user just used
    const refocus = (sel) => { const n = document.querySelector(sel); if (n) n.focus(); };
    $("#t-cat").addEventListener("click", (e) => { const b = e.target.closest("[data-cat]"); if (b) { toolCat = b.dataset.cat; renderTools(); refocus(`#t-cat [data-cat="${toolCat}"]`); } });
    const pick = (e) => { const g = e.target.closest("[data-tool]"); if (g) { toolSel = g.dataset.tool; renderTools(); refocus(`#tool-map [data-tool="${toolSel}"]`); } };
    $("#tool-map").addEventListener("click", pick);
    $("#tool-map").addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(e); } });
  }


  /* ======================= FREE AI ======================= */
  function renderFree() {
    if (!FREE) { const sec = $("#free"); if (sec) sec.hidden = true; return; }
    $("#free-updated").textContent = L(FREE.updated);
    $("#free-chain").innerHTML = FREE.providers.slice().sort((a, b) => a.order - b.order).map((p) => `<li class="prov">
      <div class="top-row"><span class="ord">${p.order}</span><h3><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.name)}</a></h3><span class="pv ${esc(p.privacy)}">${esc(t("free.pv." + p.privacy))}</span></div>
      <p class="gift">${esc(L(p.free))}</p><p class="catch">${esc(L(p.catch))}</p><p class="how">${esc(L(p.setup))}</p></li>`).join("");
    $("#free-steps").innerHTML = `<div class="bar"><i style="width:11px;height:11px;border-radius:50%;background:#FF5F57;display:block"></i><i style="width:11px;height:11px;border-radius:50%;background:#FEBC2E;display:block"></i><i style="width:11px;height:11px;border-radius:50%;background:#28C840;display:block"></i><span>${esc(t("free.term"))}</span></div>
      <ol>${FREE.steps.map((st, i) => `<li><b>${i + 1}. ${esc(L(st.title))}</b><div class="cmd"><code>${esc(st.cmd)}</code><button class="copy" type="button" data-cmd="${i}">${icon("copy")}${esc(t("kit.copy"))}</button></div><small>${esc(L(st.note))}</small></li>`).join("")}</ol>`;
    $("#free-tips").innerHTML = FREE.tips.map((x) => `<li>${esc(L(x))}</li>`).join("");
    const learn = visible().filter((r) => (r.tags || []).includes("opencode"))
      .sort((a, b) => (a.lang === lang ? -1 : 0) - (b.lang === lang ? -1 : 0) || (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.stage - b.stage);
    $("#free-learn").innerHTML = learn.map((r) => miniCard(r).replace("</small></a>", `</small><p>${esc(L(r.desc))}</p></a>`)).join("");
    $("#free-src").innerHTML = esc(t("free.src")) + " " + FREE.sources.map((x) => `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.name)}</a>`).join(" · ");
  }

  /* ======================= PROMPT KIT & RULES ======================= */
  function renderKit() {
    $("#kit").innerHTML = C.promptKit.map((k, i) => `<div class="kit-card"><h3>${icon(k.icon)}${esc(L(k.title))}</h3><span class="when">${esc(L(k.when))}</span><pre>${esc(L(k.text))}</pre><button class="copy" type="button" data-kit="${i}">${icon("copy")}${esc(t("kit.copy"))}</button></div>`).join("");
    const ics = ["sprout", "community", "step", "repo", "play", "shield", "book", "badge"];
    $("#rules").innerHTML = C.rules.map((r, i) => `<div class="rule"><span class="ic">${icon(ics[i % ics.length])}</span><b>${esc(L(r))}</b><p>${esc(L(r.d))}</p></div>`).join("");
    $("#foot-sources").innerHTML = [
      [C.stats.soSurvey.source.name, C.stats.soSurvey.source.url],
      ["Dupple: Best free vibe coding tools (Aug 2026)", "https://dupple.com/learn/best-free-vibe-coding-tools"],
      ["Dupple: Best vibe coding tools (Nov 2026)", "https://dupple.com/learn/best-vibe-coding-tools"],
      ["roadmap.sh: Vibe Coding", "https://roadmap.sh/vibe-coding"]
    ].map(([n, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)}</a></li>`).join("");
  }

  /* ======================= ADMIN (owner / editors) ======================= */
  let DB = null, USER = null, canEdit = false, admTab = "res", editing = null, admQ = "";
  const KEYS = { type: TYPES, lang: ["ar", "en"], cost: ["free", "freemium", "paid"], level: ["start", "grow", "pro"], stage: [1, 2, 3, 4] };
  function openDrawer(open) {
    const dr = $("#drawer");
    dr.classList.toggle("open", open); dr.setAttribute("aria-hidden", !open); $("#scrim").hidden = !open;
    dr.inert = !open;   // closed drawer must not be reachable by keyboard / screen readers
    if (open) { renderAdmin(); $("#adm-close").focus(); }
    else if (document.activeElement && dr.contains(document.activeElement)) $("#admin-fab").focus();
  }
  function renderAdmin() {
    const tabs = [["res", "adm.tRes"], ["add", "adm.tAdd"], ["set", "adm.tSet"], ["exp", "adm.tExp"]];
    $("#adm-tabs").innerHTML = tabs.map(([k, l]) => `<button class="toggle" type="button" data-tab="${k}" aria-pressed="${admTab === k}">${esc(t(l))}</button>`).join("");
    const body = $("#adm-body");
    const status = `<p class="status">${esc(DB ? t("adm.live") : t("adm.nodb"))}</p>`;
    if (admTab === "res") {
      body.innerHTML = status + `<div class="searchbox"><svg class="icon"><use href="#i-search"/></svg><input id="adm-q" type="search" value="${esc(admQ)}" aria-label="${esc(t("lib.search"))}"></div><div id="adm-rows">${admRows()}</div>`;
      const qi = $("#adm-q"); qi.addEventListener("input", () => { admQ = qi.value; $("#adm-rows").innerHTML = admRows(); });   // only the rows change, so focus and scroll stay
    } else if (admTab === "add") {
      body.innerHTML = status + resForm(editing);
    } else if (admTab === "set") {
      const acc = settings.accent || "indigo";
      body.innerHTML = status + `<form class="form" id="set-form">
        <fieldset><legend>${esc(t("adm.s.accent"))}</legend>${[["indigo", "#2F3CF0"], ["coral", "#E5484D"], ["teal", "#0B8F7A"], ["plum", "#8E3FD6"]].map(([k, c]) => `<label><input type="radio" name="accent" value="${k}"${acc === k ? " checked" : ""}><i style="width:14px;height:14px;border-radius:50%;background:${c};display:inline-block"></i>${k}</label>`).join("")}</fieldset>
        <label>${esc(t("adm.s.banner"))} (عربي)<input id="s-ban-ar" value="${esc((settings.banner || {}).ar || "")}"></label>
        <label>${esc(t("adm.s.banner"))} (English)<input id="s-ban-en" value="${esc((settings.banner || {}).en || "")}"></label>
        <fieldset><legend>${esc(t("adm.s.view"))}</legend>${["grid", "list"].map((v) => `<label><input type="radio" name="view" value="${v}"${(settings.defaultView || "grid") === v ? " checked" : ""}>${esc(t("lib." + v))}</label>`).join("")}</fieldset>
        <button class="btn" type="submit"${DB ? "" : " disabled"}>${esc(t("adm.s.save"))}</button></form>`;
      $("#set-form").addEventListener("submit", saveSettings);
    } else {
      const out = visible().map((r) => { const o = Object.assign({}, r); Object.keys(o).forEach((k) => { if (k[0] === "_") delete o[k]; }); return o; });
      const text = "window.VC_RESOURCES = " + JSON.stringify(out, null, 2) + ";\n";
      body.innerHTML = `<p class="status">${esc(t("adm.exp"))}</p><textarea class="export-area" readonly id="exp-ta">${esc(text)}</textarea><button class="btn" type="button" id="exp-copy">${icon("copy")}${esc(t("kit.copy"))}</button>`;
      $("#exp-copy").onclick = () => copyText(text);
    }
    if (admTab === "add") bindForm();
  }
  function admRows() {
      const q = admQ.toLowerCase();
      const rows = RES.filter((r) => !q || (L(r.title) + " " + r.id + " " + (r.provider || "")).toLowerCase().includes(q));
      return rows.map((r) => `<div class="arow${r._hidden ? " hidden-item" : ""}"><div><b>${esc(L(r.title))}</b><small>${esc(t("type." + r.type))} · ${r.lang === "ar" ? "عربي" : "English"} · ${esc(r._custom ? t("adm.custom") : r._edited ? t("adm.edited") : t("adm.base"))}${r._hidden ? " · " + esc(t("adm.hidden")) : ""}</small></div>
          <div class="acts"><button class="btn ghost small" type="button" data-act="edit" data-id="${esc(r.id)}" title="${esc(t("adm.edit"))}">${icon("edit")}</button>
          <button class="btn ghost small" type="button" data-act="${r._hidden ? "show" : "hide"}" data-id="${esc(r.id)}" title="${esc(r._hidden ? t("adm.show") : t("adm.hide"))}">${icon(r._hidden ? "eye" : "eyeoff")}</button>
          ${r._custom || r._edited ? `<button class="btn ghost small" type="button" data-act="del" data-id="${esc(r.id)}" title="${esc(r._custom ? t("adm.del") : t("adm.reset"))}">${icon(r._custom ? "trash" : "replay")}</button>` : ""}</div></div>`).join("");
  }
  function resForm(r) {
    const v = r || { type: "video", lang: "ar", cost: "free", level: "start", stage: 2, goals: [], who: [], title: {}, desc: {} };
    const sel = (name, opts, cur, lbl) => `<label>${esc(t(lbl))}<select name="${name}">${opts.map((o) => `<option value="${o}"${String(cur) === String(o) ? " selected" : ""}>${esc(name === "type" ? t("type." + o) : name === "cost" ? t("cost." + o) : name === "level" ? t("lvl." + o) : name === "lang" ? (o === "ar" ? "عربي" : "English") : name === "stage" ? o + " · " + L(C.stages[o - 1]) : o)}</option>`).join("")}</select></label>`;
    const checks = (name, opts, cur, lbl) => `<fieldset><legend>${esc(t(lbl))}</legend>${opts.map(([val, text]) => `<label><input type="checkbox" name="${name}" value="${val}"${(cur || []).includes(val) ? " checked" : ""}>${esc(text)}</label>`).join("")}</fieldset>`;
    return `<h3>${esc(r ? t("adm.editing") + L(r.title) : t("adm.new"))}</h3><form class="form" id="res-form" novalidate>
      <label>${esc(t("adm.f.id"))}<input name="id" value="${esc(v.id || "")}"${r ? " readonly" : ""} dir="ltr" required></label>
      <label>${esc(t("adm.f.url"))}<input name="url" type="url" value="${esc(v.url || "")}" dir="ltr" required></label>
      <div class="two"><label>${esc(t("adm.f.tAr"))}<input name="tAr" value="${esc(v.title.ar || "")}" dir="rtl"></label><label>${esc(t("adm.f.tEn"))}<input name="tEn" value="${esc(v.title.en || "")}" dir="ltr"></label></div>
      <label>${esc(t("adm.f.dAr"))}<textarea name="dAr" dir="rtl">${esc(v.desc.ar || "")}</textarea></label>
      <label>${esc(t("adm.f.dEn"))}<textarea name="dEn" dir="ltr">${esc(v.desc.en || "")}</textarea></label>
      <div class="two">${sel("type", KEYS.type, v.type, "adm.f.type")}${sel("lang", KEYS.lang, v.lang, "adm.f.lang")}</div>
      <div class="two">${sel("cost", KEYS.cost, v.cost, "adm.f.cost")}${sel("level", KEYS.level, v.level, "adm.f.level")}</div>
      ${sel("stage", KEYS.stage, v.stage, "adm.f.stage")}
      <div class="two"><label>${esc(t("adm.f.prov"))}<input name="provider" value="${esc(v.provider || "")}"></label><label>${esc(t("adm.f.dur"))}<input name="duration" value="${esc(v.duration || "")}"></label></div>
      ${checks("goals", [["all", t("goal.all")]].concat(C.goals.map((g) => [g.id, L(g)])), v.goals, "adm.f.goals")}
      ${checks("who", [["all", t("who.all")], ["zero", t("who.zero")], ["some", t("who.some")], ["dev", t("who.dev")], ["pro", t("who.pro")]], v.who, "adm.f.who")}
      <label style="display:flex;gap:.5rem;align-items:center"><input type="checkbox" name="featured"${v.featured ? " checked" : ""}>${esc(t("adm.f.feat"))}</label>
      <p class="err" id="form-err" role="alert"></p>
      <button class="btn" type="submit"${DB ? "" : " disabled"}>${esc(t("adm.save"))}</button></form>`;
  }
  function bindForm() {
    const f = $("#res-form"); if (!f) return;
    f.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(f); const err = $("#form-err"); err.textContent = "";
      const id = String(fd.get("id") || "").trim();
      const goals = fd.getAll("goals"), who = fd.getAll("who");
      if (!/^[A-Za-z0-9-]+$/.test(id)) { err.textContent = t("adm.v.id"); return; }
      if (!editing && RES.some((r) => r.id === id)) { err.textContent = t("adm.v.dup"); return; }
      const url = String(fd.get("url") || "").trim();
      if (!/^https?:\/\//.test(url)) { err.textContent = t("adm.v.url"); return; }
      const tAr = String(fd.get("tAr") || "").trim(), tEn = String(fd.get("tEn") || "").trim();
      if (!tAr && !tEn) { err.textContent = t("adm.v.title"); return; }
      if (!goals.length) { err.textContent = t("adm.v.goals"); return; }
      // start from the existing doc so fields the form doesn't expose (tags, ...) and the hidden state survive an edit
      const prev = {}; if (editing) Object.keys(editing).forEach((k) => { if (k[0] !== "_") prev[k] = editing[k]; });
      const doc = Object.assign(prev, {
        id, url, type: fd.get("type"), lang: fd.get("lang"), cost: fd.get("cost"), level: fd.get("level"), stage: +fd.get("stage"),
        goals, who: who.length ? who : ["all"], provider: String(fd.get("provider") || "").trim(), duration: String(fd.get("duration") || "").trim(),
        title: { ar: tAr || tEn, en: tEn || tAr }, desc: { ar: String(fd.get("dAr") || "").trim(), en: String(fd.get("dEn") || "").trim() },
        featured: !!fd.get("featured"), _hidden: !!(editing && editing._hidden), updatedAt: new Date().toISOString()
      });
      if (!doc.duration) delete doc.duration;
      try { await DB.collection("custom").doc(id).set(doc); toast(t("adm.saved")); editing = null; admTab = "res"; renderAdmin(); }
      catch (ex) { err.textContent = t("adm.err") + (ex && ex.message ? ex.message : ""); }
    });
  }
  async function adminAction(act, id) {
    const r = RES.find((x) => x.id === id); if (!r) return;
    if (act === "edit") { editing = r; admTab = "add"; renderAdmin(); return; }
    if (!DB) { toast(t("adm.nodb")); return; }
    try {
      const ref = DB.collection("custom").doc(id);
      if (act === "hide" || act === "show") {
        const clean = Object.assign({}, r); Object.keys(clean).forEach((k) => { if (k[0] === "_") delete clean[k]; });
        if (act === "show" && r._flagOnly) await ref.delete();                                   // was only hidden: drop the override
        else if (act === "hide" && r._base && !r._edited) await ref.set({ id, _flag: true, _hidden: true }); // hide a built-in without copying it
        else await ref.set(Object.assign(clean, { _hidden: act === "hide" }));                    // edited / custom: keep its data
      } else if (act === "del") { await ref.delete(); toast(t("adm.deleted")); }
    } catch (ex) { toast(t("adm.err") + (ex && ex.message ? ex.message : "")); }
  }
  async function saveSettings(e) {
    e.preventDefault();
    const f = e.target;
    const doc = { accent: (f.querySelector("[name=accent]:checked") || {}).value || "indigo", defaultView: (f.querySelector("[name=view]:checked") || {}).value || "grid", banner: { ar: $("#s-ban-ar").value.trim(), en: $("#s-ban-en").value.trim() } };
    try { await DB.doc("site/settings").set(doc); toast(t("adm.saved")); } catch (ex) { toast(t("adm.err") + (ex && ex.message ? ex.message : "")); }
  }
  function applySettings() {
    const acc = settings.accent && settings.accent !== "indigo" ? settings.accent : null;
    if (acc) document.documentElement.dataset.accent = acc; else delete document.documentElement.dataset.accent;
    const b = settings.banner ? L(settings.banner) : "";
    const ban = $("#banner"); ban.hidden = !b; ban.textContent = b;
  }
  function initAdmin() {
    $("#drawer").inert = true;
    $("#admin-fab").addEventListener("click", () => openDrawer(true));
    $("#adm-close").addEventListener("click", () => openDrawer(false));
    $("#scrim").addEventListener("click", () => openDrawer(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && $("#drawer").classList.contains("open")) openDrawer(false); });
    $("#adm-tabs").addEventListener("click", (e) => { const b = e.target.closest("[data-tab]"); if (b) { admTab = b.dataset.tab; if (admTab === "add") editing = null; renderAdmin(); } });
    $("#adm-body").addEventListener("click", (e) => { const b = e.target.closest("[data-act]"); if (b) adminAction(b.dataset.act, b.dataset.id); });
    if (!window.claude || typeof window.claude.use !== "function") return;
    Promise.all([window.claude.use("db").catch(() => null), window.claude.use("user").catch(() => null)]).then(async ([db, user]) => {
      DB = db; USER = user;
      try { canEdit = !!(user && (await user.canEdit())); } catch (e) { canEdit = false; }
      $("#admin-fab").hidden = !canEdit;
      if (!DB) return;
      try {
        DB.collection("custom").onSnapshot((snap) => {
          custom = {}; snap.docs.forEach((d) => { if (d.exists) custom[d.id] = d.data(); });
          refreshData();
        }, () => {});
        DB.doc("site/settings").onSnapshot((d) => { settings = d.exists ? d.data() : {}; applySettings(); renderLib(); }, () => {});
      } catch (e) { /* db unavailable for this viewer */ }
    });
  }
  // db snapshots can arrive in bursts (e.g. several edits): coalesce them into one re-render
  let refreshTimer;
  function refreshData() { clearTimeout(refreshTimer); refreshTimer = setTimeout(doRefresh, 150); }
  function doRefresh() {
    mergeData(); renderCounts(); renderLibFilters(); renderLib(); renderLibCharts(); renderPath(); renderFree();
    if ($("#drawer").classList.contains("open") && admTab === "res") {
      const rows = $("#adm-rows"); if (rows) rows.innerHTML = admRows(); else renderAdmin();   // keep the search box and scroll position
    }
  }

  /* ======================= boot ======================= */
  function renderAll() {
    applyI18n(); renderCounts(); renderStudioTabs(); setPlayIcon(); renderIdea(); renderWizard(); renderPath();
    renderLibFilters(); renderLib(); renderLibCharts(); renderTools(); renderFree(); renderKit(); applySettings();
    if ($("#drawer").classList.contains("open")) renderAdmin();
  }
  function setLang(l) {
    if (l === lang) return; lang = l; store.set("lang", l); renderAll(); runScenario(studio.idx, reduceMotion);
  }
  document.addEventListener("DOMContentLoaded", () => {
    mergeData();
    $("#theme-btn").addEventListener("click", () => { store.set("theme", currentTheme() === "dark" ? "light" : "dark"); applyTheme(); });
    if (darkMQ && darkMQ.addEventListener) darkMQ.addEventListener("change", () => { if (store.get("theme", null) == null) applyTheme(); });   // follow the OS until the user picks
    $("#lang-ar").addEventListener("click", () => setLang("ar"));
    $("#lang-en").addEventListener("click", () => setLang("en"));
    $("#wizard").addEventListener("click", onWizardClick);
    $("#w-go").addEventListener("click", () => { W.chosen = true; store.set("wiz", W); renderPath(); $("#path").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }); });
    $("#free").addEventListener("click", (e) => { const b = e.target.closest("[data-cmd]"); if (b && FREE) copyText(FREE.steps[+b.dataset.cmd].cmd); });
    $("#kit").addEventListener("click", (e) => { const b = e.target.closest("[data-kit]"); if (b) copyText(L(C.promptKit[+b.dataset.kit].text)); });
    initLib(); initTools(); initAdmin();
    renderAll(); initStudio();
  });
})();
