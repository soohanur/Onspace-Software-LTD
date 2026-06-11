import {
  FiCode,
  FiCpu,
  FiShoppingCart,
  FiSmartphone,
  FiSend,
  FiBox,
} from "react-icons/fi";
import { FaAws } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiVercel,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiGraphql,
  SiRedis,
  SiGo,
  SiSupabase,
  SiSqlite,
  SiFirebase,
  SiElasticsearch,
  SiReplicate,
  SiOllama,
  SiLangchain,
  SiHuggingface,
  SiGooglegemini,
  SiAnthropic,
  SiCrewai,
  SiVuedotjs,
  SiJavascript,
  SiSass,
  SiNestjs,
  SiDjango,
  SiFastapi,
  SiCloudflare,
  SiDigitalocean,
  SiNetlify,
  SiExpo,
  SiAndroid,
  SiApple,
  SiGithubactions,
  SiTerraform,
  SiJenkins,
  SiNginx,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiPosthog,
  SiGoogleanalytics,
} from "react-icons/si";
import type {
  Service,
  ProductCard,
  TechCategory,
  Review,
  BlogPost,
  TechItem,
} from "./types";

/* ---------------- Services (bento) ---------------- */
export const SERVICES: Service[] = [
  {
    id: "ai-automation",
    title: "AI Automation Systems",
    description:
      "Agentic workflows, RAG pipelines and LLM integrations that remove manual work from your operations.",
    icon: <FiCpu />,
    label: "Automate",
    span: "tall",
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "End-to-end custom platforms, internal tools and SaaS products engineered for scale and reliability.",
    icon: <FiCode />,
    label: "Build",
    span: "wide",
  },
  {
    id: "web-ecommerce",
    title: "Website & E-commerce",
    description:
      "High-converting storefronts and marketing sites built on modern, fast, SEO-ready stacks.",
    icon: <FiShoppingCart />,
    label: "Commerce",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps with a premium feel on iOS and Android.",
    icon: <FiSmartphone />,
    label: "Mobile",
  },
  {
    id: "custom-project",
    title: "Custom Project",
    description:
      "Have something unique in mind? Tell us the problem and we will architect the solution.",
    icon: <FiSend />,
    label: "Custom",
    cta: { label: "Submit Request", href: "/contact" },
  },
];

/* ---------------- Products & Solutions ---------------- */
export const PRODUCTS: ProductCard[] = [
  {
    id: "vivasoft",
    name: "VivaSoft",
    industry: "Operations",
    description:
      "An AI operations suite that automates back-office workflows for growing teams.",
    tags: ["AI", "Automation", "SaaS"],
  },
  {
    id: "softzino",
    name: "Softzino",
    industry: "E-commerce",
    description:
      "Headless commerce engine with built-in analytics and conversion tooling.",
    tags: ["Commerce", "Headless", "Analytics"],
  },
  {
    id: "scalo",
    name: "Scalo",
    industry: "Fintech",
    description:
      "Scalable ledger and payments infrastructure for modern financial products.",
    tags: ["Fintech", "Payments", "Infra"],
  },
  {
    id: "brainstation",
    name: "BrainStation",
    industry: "Healthcare",
    description:
      "Clinical decision support powered by domain-tuned language models.",
    tags: ["Healthcare", "LLM", "Compliance"],
  },
];

/* ---------------- Tech Stack (multi-tab) ---------------- */
const t = (name: string, icon: TechItem["icon"]): TechItem => ({ name, icon });

const ANALYTICS: TechItem[] = [
  t("Google Analytics", <SiGoogleanalytics />),
  t("PostHog", <SiPosthog />),
  t("Grafana", <SiGrafana />),
  t("Prometheus", <SiPrometheus />),
  t("Elasticsearch", <SiElasticsearch />),
];

const DEVOPS: TechItem[] = [
  t("Docker", <SiDocker />),
  t("Kubernetes", <SiKubernetes />),
  t("GitHub Actions", <SiGithubactions />),
  t("Terraform", <SiTerraform />),
  t("Jenkins", <SiJenkins />),
  t("Nginx", <SiNginx />),
  t("Ansible", <SiAnsible />),
];

const DATABASE: TechItem[] = [
  t("Supabase", <SiSupabase />),
  t("SQLite", <SiSqlite />),
  t("Redis", <SiRedis />),
  t("PostgreSQL", <SiPostgresql />),
  t("MySQL", <SiMysql />),
  t("MongoDB", <SiMongodb />),
  t("Firebase", <SiFirebase />),
  t("Elastic", <SiElasticsearch />),
];

const AI_ML: TechItem[] = [
  t("Replicate", <SiReplicate />),
  t("Pinecone", <FiBox />),
  t("PostgreSQL", <SiPostgresql />),
  t("OpenAI", <SiOpenai />),
  t("Ollama", <SiOllama />),
  t("LangChain", <SiLangchain />),
  t("Hugging Face", <SiHuggingface />),
  t("Gemini", <SiGooglegemini />),
  t("fal", <FiBox />),
  t("CrewAI", <SiCrewai />),
  t("Anthropic", <SiAnthropic />),
  t("TensorFlow", <SiTensorflow />),
  t("PyTorch", <SiPytorch />),
];

const CLOUD: TechItem[] = [
  t("AWS", <FaAws />),
  t("Google Cloud", <SiGooglecloud />),
  t("Vercel", <SiVercel />),
  t("Cloudflare", <SiCloudflare />),
  t("DigitalOcean", <SiDigitalocean />),
  t("Netlify", <SiNetlify />),
];

const MOBILE: TechItem[] = [
  t("Flutter", <SiFlutter />),
  t("Swift", <SiSwift />),
  t("Kotlin", <SiKotlin />),
  t("React Native", <SiReact />),
  t("Expo", <SiExpo />),
  t("Android", <SiAndroid />),
  t("Apple", <SiApple />),
];

const BACKEND: TechItem[] = [
  t("Node.js", <SiNodedotjs />),
  t("Python", <SiPython />),
  t("Go", <SiGo />),
  t("NestJS", <SiNestjs />),
  t("Django", <SiDjango />),
  t("FastAPI", <SiFastapi />),
  t("GraphQL", <SiGraphql />),
];

const FRONTEND: TechItem[] = [
  t("React", <SiReact />),
  t("Next.js", <SiNextdotjs />),
  t("TypeScript", <SiTypescript />),
  t("JavaScript", <SiJavascript />),
  t("Tailwind CSS", <SiTailwindcss />),
  t("Vue", <SiVuedotjs />),
  t("Sass", <SiSass />),
  t("GraphQL", <SiGraphql />),
];

// "All" - every unique tech across the categories
const ALL: TechItem[] = Array.from(
  new Map(
    [
      ...FRONTEND,
      ...BACKEND,
      ...AI_ML,
      ...DATABASE,
      ...DEVOPS,
      ...CLOUD,
      ...MOBILE,
      ...ANALYTICS,
    ].map((item) => [item.name, item])
  ).values()
);

export const TECH_CATEGORIES: TechCategory[] = [
  { id: "all", label: "All", items: ALL },
  { id: "backend", label: "Backend", items: BACKEND },
  { id: "frontend", label: "Frontend", items: FRONTEND },
  { id: "mobile", label: "Mobile", items: MOBILE },
  { id: "ai", label: "AI", items: AI_ML },
  { id: "database", label: "Database", items: DATABASE },
  { id: "devops", label: "DevOps", items: DEVOPS },
  { id: "analytics", label: "Analytics", items: ANALYTICS },
  { id: "cloud", label: "Cloud", items: CLOUD },
];

/* ---------------- Trusted-by logos (LogoLoop nodes) ---------------- */
export const TRUSTED_LOGOS = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <FaAws />, title: "AWS" },
  { node: <SiGooglecloud />, title: "Google Cloud" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiVercel />, title: "Vercel" },
  { node: <SiOpenai />, title: "OpenAI" },
];

/* ---------------- Reviews ---------------- */
export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Sarah Mitchell",
    role: "CTO",
    company: "Northwind Labs",
    avatar: "SM",
    rating: 5,
    body: "Onspace shipped our AI automation platform weeks ahead of schedule. The architecture is clean and genuinely scalable.",
  },
  {
    id: "r2",
    name: "David Chen",
    role: "Founder",
    company: "Loop Commerce",
    avatar: "DC",
    rating: 5,
    body: "From prototype to production in record time. Communication was crystal clear at every single step.",
  },
  {
    id: "r3",
    name: "Aisha Rahman",
    role: "Head of Product",
    company: "FinServe",
    avatar: "AR",
    rating: 5,
    body: "Their team understood our compliance needs immediately and built around them. A rare engineering partner.",
  },
  {
    id: "r4",
    name: "Marco Rossi",
    role: "VP Engineering",
    company: "Helix",
    avatar: "MR",
    rating: 5,
    body: "The high-fidelity prototype they delivered in 48 hours sold our whole leadership team on the project.",
  },
  {
    id: "r5",
    name: "Emily Turner",
    role: "CEO",
    company: "Brightpath",
    avatar: "ET",
    rating: 5,
    body: "Premium quality, on-time delivery, and a product our users actually love. Could not ask for more.",
  },
  {
    id: "r6",
    name: "Kenji Watanabe",
    role: "Director",
    company: "Atlas Mobile",
    avatar: "KW",
    rating: 5,
    body: "Our mobile app feels world-class. Onspace sweats the details most agencies skip entirely.",
  },
];

/* ---------------- Blogs ---------------- */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Building Production-Grade AI Agents in 2026",
    excerpt:
      "A practical look at agentic architectures, guardrails and evaluation strategies for real workloads.",
    category: "AI Automation",
    date: "Jun 02, 2026",
    readTime: "8 min read",
  },
  {
    id: "b2",
    title: "From Idea to High-Fidelity Prototype in 48 Hours",
    excerpt:
      "How we compress discovery and design into a tight, validated build sprint for our clients.",
    category: "Process",
    date: "May 21, 2026",
    readTime: "6 min read",
  },
  {
    id: "b3",
    title: "Scaling Next.js for Enterprise Traffic",
    excerpt:
      "Caching, edge rendering and architecture patterns that keep large apps fast under load.",
    category: "Engineering",
    date: "May 09, 2026",
    readTime: "10 min read",
  },
];
