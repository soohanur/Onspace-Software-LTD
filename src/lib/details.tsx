import {
  FiCpu,
  FiZap,
  FiDatabase,
  FiShield,
  FiRefreshCw,
  FiBarChart2,
  FiCode,
  FiLayers,
  FiGitBranch,
  FiServer,
  FiCheckCircle,
  FiUsers,
  FiShoppingCart,
  FiSearch,
  FiTrendingUp,
  FiCreditCard,
  FiGlobe,
  FiSmartphone,
  FiBell,
  FiWifi,
  FiPackage,
  FiSend,
  FiTarget,
  FiClipboard,
  FiMessageSquare,
  FiActivity,
  FiPieChart,
  FiLock,
} from "react-icons/fi";
import type { ServiceDetail, ProductDetail, BlogDetail } from "./types";

/* ---------------- Service detail pages ---------------- */
export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "ai-automation",
    tagline:
      "Agentic workflows, RAG pipelines and LLM integrations that remove manual work from your operations.",
    intro: [
      "Most teams lose hours every week to repetitive work: triaging tickets, copying data between tools, drafting the same documents again and again. We design AI automation systems that take that work off your plate while keeping a human in the loop where it matters.",
      "We build on production-grade foundations - evaluation suites, guardrails, observability - so the system you launch keeps working as your data and volume grow.",
    ],
    features: [
      {
        title: "Agentic workflows",
        description:
          "Multi-step agents that plan, call your internal tools and complete entire processes end to end.",
        icon: <FiCpu />,
      },
      {
        title: "RAG pipelines",
        description:
          "Retrieval-augmented generation over your documents, tickets and knowledge bases with grounded answers.",
        icon: <FiDatabase />,
      },
      {
        title: "LLM integrations",
        description:
          "OpenAI, Anthropic, Gemini or self-hosted models wired safely into the software you already use.",
        icon: <FiZap />,
      },
      {
        title: "Guardrails & evals",
        description:
          "Evaluation suites, output validation and fallback paths so automation never runs unchecked.",
        icon: <FiShield />,
      },
      {
        title: "Human-in-the-loop",
        description:
          "Approval steps and review queues for the decisions that still need a person.",
        icon: <FiUsers />,
      },
      {
        title: "Monitoring & cost control",
        description:
          "Dashboards for usage, latency, accuracy and spend - per workflow and per model.",
        icon: <FiBarChart2 />,
      },
    ],
    deliverables: [
      "Discovery & automation audit",
      "Architecture & model selection",
      "Production deployment",
      "Evaluation suite",
      "Team training",
      "Ongoing tuning",
    ],
  },
  {
    id: "software-development",
    tagline:
      "End-to-end custom platforms, internal tools and SaaS products engineered for scale and reliability.",
    intro: [
      "Off-the-shelf software bends your process to its shape. We build the opposite: platforms, internal tools and SaaS products designed around how your business actually works.",
      "From the first architecture diagram to the production deploy, one senior team owns the build - with weekly demos, honest estimates and code your own engineers will be glad to inherit.",
    ],
    features: [
      {
        title: "Custom platforms",
        description:
          "Multi-tenant SaaS, dashboards and customer portals built on modern, typed stacks.",
        icon: <FiCode />,
      },
      {
        title: "Internal tools",
        description:
          "Admin panels, ops consoles and back-office systems that replace the spreadsheet sprawl.",
        icon: <FiClipboard />,
      },
      {
        title: "API & integrations",
        description:
          "REST and GraphQL APIs, third-party integrations and event-driven services.",
        icon: <FiGitBranch />,
      },
      {
        title: "Scalable architecture",
        description:
          "Systems designed for 10x the load you have today - caching, queues, horizontal scale.",
        icon: <FiServer />,
      },
      {
        title: "Quality engineering",
        description:
          "Automated tests, CI/CD pipelines and code review baked into every sprint.",
        icon: <FiCheckCircle />,
      },
      {
        title: "Legacy modernisation",
        description:
          "Incremental rewrites that retire old systems without stopping the business.",
        icon: <FiRefreshCw />,
      },
    ],
    deliverables: [
      "Technical discovery",
      "Architecture design",
      "Sprint-based delivery",
      "Automated test suite",
      "CI/CD setup",
      "Documentation & handover",
    ],
  },
  {
    id: "web-ecommerce",
    tagline:
      "High-converting storefronts and marketing sites built on modern, fast, SEO-ready stacks.",
    intro: [
      "Your website is the first salesperson most customers ever meet. We build marketing sites and storefronts that load instantly, rank well and turn visitors into buyers.",
      "Whether it is a headless storefront, a content-driven marketing site or a full e-commerce replatform, we obsess over the metrics that matter: page speed, conversion rate and organic traffic.",
    ],
    features: [
      {
        title: "Headless commerce",
        description:
          "Storefronts on Next.js with Shopify, Medusa or custom backends - fast everywhere.",
        icon: <FiShoppingCart />,
      },
      {
        title: "SEO-ready builds",
        description:
          "Server rendering, structured data and Core Web Vitals scores in the green.",
        icon: <FiSearch />,
      },
      {
        title: "Conversion tooling",
        description:
          "A/B testing, analytics and funnel instrumentation wired in from day one.",
        icon: <FiTrendingUp />,
      },
      {
        title: "Payments & checkout",
        description:
          "Stripe, PayPal and local gateways with checkout flows tuned to reduce drop-off.",
        icon: <FiCreditCard />,
      },
      {
        title: "CMS & content",
        description:
          "Editor-friendly content workflows on Sanity, Strapi or your CMS of choice.",
        icon: <FiLayers />,
      },
      {
        title: "Global performance",
        description:
          "Edge rendering and CDN strategy so the site is fast on every continent.",
        icon: <FiGlobe />,
      },
    ],
    deliverables: [
      "UX & conversion audit",
      "Design system",
      "Storefront build",
      "Payment integration",
      "Analytics setup",
      "SEO foundation",
    ],
  },
  {
    id: "mobile-development",
    tagline:
      "Native and cross-platform mobile apps with a premium feel on iOS and Android.",
    intro: [
      "A mobile app lives or dies on feel: launch speed, scroll smoothness, the small details users cannot name but always notice. We build apps that feel native because, where it counts, they are.",
      "One codebase or two, Flutter or React Native or fully native Swift and Kotlin - we choose the stack by your product's needs, not our preferences, and ship through both app stores.",
    ],
    features: [
      {
        title: "Cross-platform apps",
        description:
          "Flutter and React Native builds that share code without sacrificing feel.",
        icon: <FiSmartphone />,
      },
      {
        title: "Native iOS & Android",
        description:
          "Swift and Kotlin when the product demands platform-level performance.",
        icon: <FiPackage />,
      },
      {
        title: "Offline-first sync",
        description:
          "Local-first data layers that keep the app useful with no signal.",
        icon: <FiWifi />,
      },
      {
        title: "Push & engagement",
        description:
          "Notifications, deep links and in-app messaging that bring users back.",
        icon: <FiBell />,
      },
      {
        title: "App store delivery",
        description:
          "Store listings, review compliance and staged rollouts handled for you.",
        icon: <FiSend />,
      },
      {
        title: "Crash & performance telemetry",
        description:
          "Monitoring that catches regressions before your users tweet about them.",
        icon: <FiActivity />,
      },
    ],
    deliverables: [
      "Product & platform strategy",
      "UI/UX design",
      "iOS & Android builds",
      "Backend & APIs",
      "App store launch",
      "Post-launch support",
    ],
  },
  {
    id: "custom-project",
    tagline:
      "Have something unique in mind? Tell us the problem and we will architect the solution.",
    intro: [
      "Not every project fits a category - and those are usually the interesting ones. Bring us the problem: a process that does not scale, an idea nobody has built yet, a system that three vendors already failed to deliver.",
      "We start with a short discovery sprint to de-risk the unknowns, then give you a clear plan, timeline and budget before any major commitment.",
    ],
    features: [
      {
        title: "Discovery sprint",
        description:
          "A focused 1-2 week engagement that turns a vague idea into a validated plan.",
        icon: <FiTarget />,
      },
      {
        title: "Rapid prototyping",
        description:
          "High-fidelity prototypes in days, so you can test with real users early.",
        icon: <FiZap />,
      },
      {
        title: "Architecture consulting",
        description:
          "Senior engineers who pressure-test your existing plans and systems.",
        icon: <FiServer />,
      },
      {
        title: "Data & analytics",
        description:
          "Pipelines, warehouses and dashboards that make your data usable.",
        icon: <FiPieChart />,
      },
      {
        title: "Security & compliance",
        description:
          "GDPR, SOC 2 and industry-specific requirements designed in, not bolted on.",
        icon: <FiLock />,
      },
      {
        title: "Dedicated team",
        description:
          "A stable, senior squad that works as an extension of your own team.",
        icon: <FiUsers />,
      },
    ],
    deliverables: [
      "Problem discovery",
      "Solution architecture",
      "Validated prototype",
      "Delivery roadmap",
      "Transparent pricing",
      "Senior delivery team",
    ],
  },
];

/* ---------------- Product detail pages ---------------- */
export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    id: "vivasoft",
    tagline:
      "An AI operations suite that automates back-office workflows for growing teams.",
    intro: [
      "VivaSoft sits on top of the tools your team already uses and quietly takes over the repetitive work: routing requests, reconciling records, chasing approvals and keeping every system in sync.",
      "Teams typically automate their first workflow within a week and reclaim hundreds of hours a month within a quarter - without replacing a single existing system.",
    ],
    features: [
      {
        title: "Workflow automation",
        description:
          "Drag-and-drop builder for approval chains, routing rules and scheduled jobs.",
        icon: <FiRefreshCw />,
      },
      {
        title: "AI document handling",
        description:
          "Invoices, contracts and forms read, classified and filed automatically.",
        icon: <FiCpu />,
      },
      {
        title: "System sync",
        description:
          "Two-way connectors that keep your CRM, ERP and spreadsheets consistent.",
        icon: <FiGitBranch />,
      },
      {
        title: "Ops analytics",
        description:
          "Live dashboards showing throughput, bottlenecks and hours saved.",
        icon: <FiBarChart2 />,
      },
    ],
    highlights: [
      { value: "80%", label: "of back-office work automated" },
      { value: "1 week", label: "to first live workflow" },
      { value: "40+", label: "tool integrations" },
    ],
  },
  {
    id: "softzino",
    tagline:
      "Headless commerce engine with built-in analytics and conversion tooling.",
    intro: [
      "Softzino separates your storefront from your backend so you can ship a fast, fully-branded buying experience on any channel - web, mobile, marketplaces - from one source of truth.",
      "Conversion tooling is built in rather than bolted on: experiments, funnel analytics and checkout optimisation come standard with every store.",
    ],
    features: [
      {
        title: "Headless storefront API",
        description:
          "GraphQL commerce API powering web, mobile and marketplace channels.",
        icon: <FiShoppingCart />,
      },
      {
        title: "Built-in analytics",
        description:
          "Funnel, cohort and product analytics without stitching together five tools.",
        icon: <FiPieChart />,
      },
      {
        title: "A/B experiments",
        description:
          "Test pricing, layouts and copy with statistically sound experiments.",
        icon: <FiTrendingUp />,
      },
      {
        title: "Optimised checkout",
        description:
          "One-page checkout with local payment methods and saved carts.",
        icon: <FiCreditCard />,
      },
    ],
    highlights: [
      { value: "2x", label: "average conversion uplift" },
      { value: "<300ms", label: "median page response" },
      { value: "99.95%", label: "storefront uptime" },
    ],
  },
  {
    id: "scalo",
    tagline:
      "Scalable ledger and payments infrastructure for modern financial products.",
    intro: [
      "Scalo gives fintech builders a double-entry ledger, payment orchestration and reconciliation engine that is correct by construction - so you can launch financial products without building core infrastructure from scratch.",
      "Every transaction is immutable, auditable and traceable end to end, which keeps both your finance team and your regulator happy.",
    ],
    features: [
      {
        title: "Double-entry ledger",
        description:
          "Immutable, balanced-by-design ledger with multi-currency support.",
        icon: <FiDatabase />,
      },
      {
        title: "Payment orchestration",
        description:
          "Route payments across gateways with automatic retries and failover.",
        icon: <FiRefreshCw />,
      },
      {
        title: "Reconciliation engine",
        description:
          "Automated matching between ledger, bank statements and gateway reports.",
        icon: <FiCheckCircle />,
      },
      {
        title: "Audit & compliance",
        description:
          "Full audit trails, role-based access and exportable regulatory reports.",
        icon: <FiLock />,
      },
    ],
    highlights: [
      { value: "10k+", label: "transactions per second" },
      { value: "100%", label: "balanced ledger guarantee" },
      { value: "0", label: "manual reconciliation steps" },
    ],
  },
  {
    id: "brainstation",
    tagline:
      "Clinical decision support powered by domain-tuned language models.",
    intro: [
      "BrainStation puts a domain-tuned medical language model beside the clinician: summarising patient histories, surfacing relevant guidelines and drafting documentation - all inside the existing EHR workflow.",
      "Every suggestion is grounded in cited sources and logged for review, because in healthcare an unverifiable answer is worse than no answer.",
    ],
    features: [
      {
        title: "Clinical summarisation",
        description:
          "Patient histories condensed into accurate, source-linked briefings.",
        icon: <FiClipboard />,
      },
      {
        title: "Guideline retrieval",
        description:
          "Relevant protocols and literature surfaced at the point of care.",
        icon: <FiSearch />,
      },
      {
        title: "Documentation drafting",
        description:
          "Notes and discharge summaries drafted for clinician review and sign-off.",
        icon: <FiMessageSquare />,
      },
      {
        title: "Compliance by design",
        description:
          "HIPAA-aligned data handling with full audit logs on every interaction.",
        icon: <FiShield />,
      },
    ],
    highlights: [
      { value: "60%", label: "less time on documentation" },
      { value: "100%", label: "cited, reviewable outputs" },
      { value: "HIPAA", label: "aligned data handling" },
    ],
  },
];

/* ---------------- Blog article bodies ---------------- */
export const BLOG_DETAILS: BlogDetail[] = [
  {
    slug: "building-production-grade-ai-agents",
    sections: [
      {
        heading: "Demos are easy. Production is not.",
        paragraphs: [
          "Anyone can wire a language model to a few tools and record an impressive demo. The gap between that demo and a system you can trust with real customer data is where most agent projects die. The difference is rarely the model - it is everything around it.",
          "In production, an agent faces inputs nobody anticipated, tools that time out, and users who phrase the same request a hundred different ways. A production-grade agent is designed for that mess from day one.",
        ],
      },
      {
        heading: "Guardrails are an architecture, not a prompt",
        paragraphs: [
          "Telling a model to 'be careful' is not a guardrail. Real guardrails live outside the model: schema validation on every tool call, allow-lists for destructive actions, spending caps, and hard limits on iteration loops.",
          "The pattern we use on client work is simple: the agent proposes, deterministic code disposes. Any action with side effects passes through a validation layer the model cannot talk its way around. High-risk actions queue for human approval.",
        ],
      },
      {
        heading: "If you cannot measure it, you cannot ship it",
        paragraphs: [
          "Every agent we ship has an evaluation suite before it has users: a few hundred real-world test cases scored automatically on every change. When the suite is green, we deploy with confidence. When a new failure appears in production, it becomes a test case the same day.",
          "Start smaller than feels impressive. One workflow, fully instrumented and boringly reliable, earns the trust that funds the next five. That is how agents make it past the demo.",
        ],
      },
    ],
  },
  {
    slug: "idea-to-prototype-48-hours",
    sections: [
      {
        heading: "Why 48 hours?",
        paragraphs: [
          "Ideas decay. The longer an idea sits in a document, the more opinions pile on and the less anyone learns. A 48-hour prototype sprint forces every decision through one filter: does this help us test the core assumption with a real user?",
          "The output is not a product. It is a high-fidelity, clickable answer to the question 'should we build this at all?' - which is the cheapest possible time to hear a no.",
        ],
      },
      {
        heading: "How the two days run",
        paragraphs: [
          "Day one, morning: a structured discovery session that ends with one sentence - the riskiest assumption. Day one, afternoon: flows and wireframes for the single path that tests it. Nothing else gets designed.",
          "Day two: we build that path with production-quality components on a real stack, seeded with realistic data. By evening you have a prototype you can put in front of a customer, an investor or your board - not a slide deck pretending to be one.",
        ],
      },
      {
        heading: "What happens after",
        paragraphs: [
          "Because the prototype is built on the same stack we use for production work, nothing is thrown away. If the idea validates, the prototype becomes sprint zero of the real build. If it does not, you spent two days finding out instead of two quarters.",
          "Either outcome is a win. The only losing move is staying in the document.",
        ],
      },
    ],
  },
  {
    slug: "scaling-nextjs-enterprise-traffic",
    sections: [
      {
        heading: "Where Next.js apps actually slow down",
        paragraphs: [
          "Next.js gives you excellent defaults, but enterprise traffic finds the gaps: pages that render on every request because of one dynamic cookie read, API routes doing N+1 queries, and a single slow upstream service stalling whole pages.",
          "Before touching infrastructure, measure. In most engagements the first big win is not a new architecture - it is finding the three routes responsible for 80% of server load and fixing how they fetch data.",
        ],
      },
      {
        heading: "Cache at every layer you can",
        paragraphs: [
          "The fastest render is the one that never happens. Static generation for anything that can tolerate staleness, incremental revalidation for content that changes hourly, and edge caching in front of everything else.",
          "For truly dynamic pages, cache the expensive parts inside the page: memoised data fetches, Redis for hot reads, and request-level deduplication so ten components asking for the same user hit the database once.",
        ],
      },
      {
        heading: "Architecture patterns that hold up",
        paragraphs: [
          "Under sustained load, the patterns that survive are boring: queues between the web tier and slow work, read replicas for heavy queries, circuit breakers around flaky upstreams, and autoscaling tuned to real traffic curves rather than defaults.",
          "Page speed scores in the high 90s are a side effect of this discipline, not the goal. The goal is a p99 you can put in a contract.",
        ],
      },
    ],
  },
];
