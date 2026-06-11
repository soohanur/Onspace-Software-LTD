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

/* ---------------- Reviews (clients from the countries we work with) ---------------- */
export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Rahim Uddin",
    handle: "@rahim_uddin",
    country: "Bangladesh",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    body: "Onspace built our AI automation platform weeks ahead of schedule. Clean architecture, genuinely scalable.",
  },
  {
    id: "r2",
    name: "Sarah Mitchell",
    handle: "@sarahmitch",
    country: "United Kingdom",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    body: "Everything about working with them is next level - the process, the communication, the delivery.",
  },
  {
    id: "r3",
    name: "David Chen",
    handle: "@dchen_io",
    country: "United States",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    body: "From prototype to production in record time. The 48 hour demo sold our whole leadership team.",
  },
  {
    id: "r4",
    name: "Nusrat Jahan",
    handle: "@nusratbuilds",
    country: "Bangladesh",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    body: "A rare engineering partner from Dhaka to the world. They sweat details most agencies skip entirely.",
  },
  {
    id: "r5",
    name: "Lukas Weber",
    handle: "@lukasweber",
    country: "Germany",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    body: "Just discovered what a properly engineered Next.js stack feels like. Fast, clean and SEO ready.",
  },
  {
    id: "r6",
    name: "Aisha Al Mansoori",
    handle: "@aisha_am",
    country: "UAE",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    body: "They understood our compliance needs immediately and built around them. Really impressed.",
  },
  {
    id: "r7",
    name: "Wei Lin Tan",
    handle: "@weilintan",
    country: "Singapore",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    body: "The AI workflow they shipped removed 80% of our manual ops. Incredibly well designed systems.",
  },
  {
    id: "r8",
    name: "Emily Turner",
    handle: "@emturner",
    country: "Australia",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    body: "Premium quality, on-time delivery, and a product our users actually love. Could not ask for more.",
  },
  {
    id: "r9",
    name: "Marc Dubois",
    handle: "@marcdubois",
    country: "Canada",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    body: "Our mobile app feels world-class now. Clear communication at every single step of the build.",
  },
  {
    id: "r10",
    name: "Sanne de Vries",
    handle: "@sannedv",
    country: "Netherlands",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    body: "Sleek, minimal and super reliable work. Clean UI, easy handover, perfect for modern teams.",
  },
  {
    id: "r11",
    name: "Amirul Hakim",
    handle: "@amirulhakim",
    country: "Malaysia",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    body: "Onspace is emerging as the agency to watch this year. The e-commerce build doubled our conversion.",
  },
  {
    id: "r12",
    name: "Mahmudul Hasan",
    handle: "@mahmud_dev",
    country: "Bangladesh",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    body: "Scalable architecture, on-time delivery, zero drama. Best engineering partner we have worked with.",
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
