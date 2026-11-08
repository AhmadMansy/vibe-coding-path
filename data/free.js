/* =====================================================================
   استخدم الذكاء الاصطناعي ببلاش — Free AI models for OpenCode
   الحدود والأسعار بتتغير كل كام شهر. آخر مراجعة: نوفمبر 2026.
   Limits change often. Last reviewed: November 2026.
   privacy: "safe" = بيقولوا صراحة مش بيدربوا على بياناتك
            "warn" = ممكن يدربوا على بيانات الخطة المجانية
            "local" = البيانات مش بتخرج من جهازك
   ===================================================================== */

window.VC_FREE = {
  updated: { ar: "آخر مراجعة: نوفمبر 2026", en: "Last reviewed: November 2026" },

  providers: [
    {
      id: "zen", name: "OpenCode Zen (free models)", url: "https://opencode.ai/docs/zen", color: "#3B3B3B", order: 1, privacy: "warn",
      free: { ar: "موديلات مجانية جاهزة جوه OpenCode من غير حساب", en: "Free models built into OpenCode, no account needed" },
      catch: { ar: "القايمة بتتغير كل شهر تقريبًا، وبعض الموديلات المجانية بتستخدم بياناتك لتحسين الموديل.", en: "The lineup rotates monthly, and some free models may use your data to improve the model." },
      setup: { ar: "شغّل opencode واكتب /models واختار موديل مكتوب جنبه Free.", en: "Run opencode, type /models and pick one marked Free." }
    },
    {
      id: "gemini", name: "Google Gemini API", url: "https://aistudio.google.com/apikey", color: "#1A73E8", order: 2, privacy: "warn",
      free: { ar: "موديلات Gemini Flash مجانًا من غير بطاقة دفع", en: "Gemini Flash models free, no card needed" },
      catch: { ar: "الحدود مش ثابتة وبتختلف حسب الموديل، وبعض موديلات Flash ممكن تقف عند عشرات الطلبات في اليوم (شوف حدودك في AI Studio). موديلات Pro مدفوعة، وجوجل ممكن تدرّب على بيانات الخطة المجانية برّه أوروبا.", en: "Limits aren't fixed and vary by model; some Flash models may stop at tens of requests a day (check yours in AI Studio). Pro models are paid, and Google may train on free-tier data outside the EEA/UK/Switzerland." },
      setup: { ar: "خد المفتاح من Google AI Studio، وفي OpenCode اكتب /connect واختار Google.", en: "Get a key from Google AI Studio, then /connect in OpenCode and pick Google." }
    },
    {
      id: "groq", name: "Groq", url: "https://console.groq.com", color: "#F55036", order: 3, privacy: "safe",
      free: { ar: "حوالي 30 طلب في الدقيقة و1000 طلب في اليوم، وسريع جدًا", en: "About 30 requests/min and 1,000/day, very fast" },
      catch: { ar: "حد التوكنز في الدقيقة بيضايق مع الأوامر الطويلة اللي وكلاء البرمجة بيبعتوها.", en: "The per-minute token cap bites on the long prompts coding agents send." },
      setup: { ar: "اعمل مفتاح من console.groq.com، وبعدها /connect واختار Groq.", en: "Create a key at console.groq.com, then /connect and pick Groq." }
    },
    {
      id: "openrouter", name: "OpenRouter (:free)", url: "https://openrouter.ai/models?q=free", color: "#6467F2", order: 4, privacy: "warn",
      free: { ar: "موديلات كتير عليها :free من مكان واحد، 50 طلب في اليوم", en: "Many :free models from one key, 50 requests/day" },
      catch: { ar: "الحد اليومي بيوصل 1000 طلب لو شحنت 10$ مرة واحدة. شروط البيانات بتختلف حسب الموديل.", en: "The daily cap rises to 1,000 after a one-time $10 top-up. Data terms vary per model." },
      setup: { ar: "اعمل مفتاح من openrouter.ai، وبعدها /connect واختار OpenRouter، واختار موديل آخره :free.", en: "Create a key at openrouter.ai, /connect, pick OpenRouter, then a model ending in :free." }
    },
    {
      id: "more", name: "Mistral · Z.ai (GLM) · NVIDIA · Cloudflare", url: "https://www.developersdigest.tech/models/free-api", color: "#0B8F7A", order: 5, privacy: "warn",
      free: { ar: "خطط مجانية ثابتة لكن بحدود أقل", en: "Standing free tiers with smaller limits" },
      catch: { ar: "Z.ai وCloudflare بيقولوا إنهم مش بيدربوا على بياناتك، وMistral فيه زرار لإيقاف التدريب.", en: "Z.ai and Cloudflare say they don't train on API data; Mistral has an opt-out toggle." },
      setup: { ar: "كل واحد منهم موجود في قايمة /connect، أو تضيفه كمزود متوافق مع OpenAI.", en: "Each appears in /connect, or add it as an OpenAI-compatible provider." }
    },
    {
      id: "ollama", name: "Ollama / LM Studio (local)", url: "https://ollama.com", color: "#141832", order: 6, privacy: "local",
      free: { ar: "مجاني تمامًا ومن غير حدود، والكود مش بيخرج من جهازك", en: "Completely free and unlimited; code never leaves your machine" },
      catch: { ar: "محتاج كارت شاشة قوي، والموديلات الصغيرة أضعف في المشاريع الكبيرة.", en: "Needs a strong GPU, and small models struggle with big projects." },
      setup: { ar: "ثبّت Ollama وحمّل موديل برمجة، وفي OpenCode ضيف مزود متوافق مع OpenAI على http://localhost:11434/v1.", en: "Install Ollama, pull a coding model, then add an OpenAI-compatible provider at http://localhost:11434/v1." }
    }
  ],

  /* أوامر الإعداد — setup commands shown with copy buttons */
  steps: [
    { title: { ar: "ثبّت OpenCode", en: "Install OpenCode" }, cmd: "npm i -g opencode-ai@latest", note: { ar: "أو على ماك/لينكس: curl -fsSL https://opencode.ai/install | bash", en: "Or on macOS/Linux: curl -fsSL https://opencode.ai/install | bash" } },
    { title: { ar: "افتحه جوه فولدر مشروعك", en: "Open it inside your project folder" }, cmd: "cd my-project && opencode", note: { ar: "OpenCode بيشتغل على الفولدر اللي فتحته منه", en: "OpenCode works on the folder you start it from" } },
    { title: { ar: "اربط مزود مجاني", en: "Connect a free provider" }, cmd: "/connect", note: { ar: "اختار Google أو Groq أو OpenRouter والصق المفتاح", en: "Pick Google, Groq or OpenRouter and paste the key" } },
    { title: { ar: "اختار الموديل", en: "Choose the model" }, cmd: "/models", note: { ar: "لما مزود يوصل للحد اليومي، ارجع هنا وبدّل للي بعده", en: "When one provider hits its daily cap, come back and switch" } }
  ],

  /* الأمر اللي بيبقى مفيد مع OpenCode — tips */
  tips: [
    { ar: "استخدم وضع Plan (زرار Tab) عشان الموديل يخطط من غير ما يغيّر ملفات، وبعدين Build للتنفيذ.", en: "Use Plan mode (Tab) so the model plans without editing files, then switch to Build." },
    { ar: "الموديلات المجانية بتتلخبط في المشاريع الكبيرة: قسّم الشغل لخطوات صغيرة.", en: "Free models get lost in big projects: split work into small steps." },
    { ar: "لو عندك اشتراك Copilot مدفوع أو ChatGPT Plus، تقدر تسجل بيه جوه OpenCode من غير ما تدفع حاجة زيادة.", en: "If you already pay for Copilot or ChatGPT Plus, you can sign in with it inside OpenCode at no extra cost." },
    { ar: "متحطش كود سري أو بيانات عملاء مع مزود ممكن يدرّب على بياناتك. استخدم موديل محلي للحاجات دي.", en: "Keep secret code and client data away from providers that may train on it; use a local model for those." }
  ],

  sources: [
    { name: "OpenCode Zen docs", url: "https://opencode.ai/docs/zen" },
    { name: "Developers Digest: Free LLM API tiers (Oct 2026)", url: "https://www.developersdigest.tech/models/free-api" },
    { name: "BenchLM: Free LLM API tiers", url: "https://benchlm.ai/md/free-tier.md" },
    { name: "GitHub Changelog: Copilot supports OpenCode", url: "https://github.blog/changelog/2026-01-16-github-copilot-now-supports-opencode/" }
  ]
};
