import {
  FiCode,
  FiCpu,
  FiShoppingCart,
  FiSmartphone,
  FiSend,
  FiBox,
  FiBriefcase,
  FiUsers,
  FiPackage,
  FiNavigation,
  FiTruck,
  FiTool,
  FiMessageSquare,
  FiCalendar,
  FiBookOpen,
  FiCoffee,
  FiHome,
  FiGrid,
  FiTag,
  FiLayers,
  FiActivity,
  FiPlusSquare,
  FiVideo,
  FiCreditCard,
  FiDollarSign,
  FiPieChart,
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
  ReadymadeCategory,
} from "./types";

/* ---------------- Services (bento) ---------------- */
export const SERVICES: Service[] = [
  {
    id: "ai-automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    title: "AI Automation Systems",
    description:
      "Agentic workflows, RAG pipelines and LLM integrations that remove manual work from your operations.",
    icon: <FiCpu />,
    label: "Automate",
    span: "tall",
  },
  {
    id: "software-development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80",
    title: "Software Development",
    description:
      "End-to-end custom platforms, internal tools and SaaS products engineered for scale and reliability.",
    icon: <FiCode />,
    label: "Build",
    span: "wide",
  },
  {
    id: "web-ecommerce",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80",
    title: "Website & E-commerce",
    description:
      "High-converting storefronts and marketing sites built on modern, fast, SEO-ready stacks.",
    icon: <FiShoppingCart />,
    label: "Commerce",
  },
  {
    id: "mobile-development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps with a premium feel on iOS and Android.",
    icon: <FiSmartphone />,
    label: "Mobile",
  },
  {
    id: "custom-project",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80",
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
const t = (
  name: string,
  icon: TechItem["icon"],
  color?: string
): TechItem => ({
  name,
  icon: color ? <span style={{ color }}>{icon}</span> : icon,
});

const ANALYTICS: TechItem[] = [
  t("Google Analytics", <SiGoogleanalytics />, "#E37400"),
  t("PostHog", <SiPosthog />, "#1D4AFF"),
  t("Grafana", <SiGrafana />, "#F46800"),
  t("Prometheus", <SiPrometheus />, "#E6522C"),
  t("Elasticsearch", <SiElasticsearch />, "#005571"),
];

const DEVOPS: TechItem[] = [
  t("Docker", <SiDocker />, "#2496ED"),
  t("Kubernetes", <SiKubernetes />, "#326CE5"),
  t("GitHub Actions", <SiGithubactions />, "#2088FF"),
  t("Terraform", <SiTerraform />, "#844FBA"),
  t("Jenkins", <SiJenkins />, "#D24939"),
  t("Nginx", <SiNginx />, "#009639"),
  t("Ansible", <SiAnsible />, "#EE0000"),
];

const DATABASE: TechItem[] = [
  t("Supabase", <SiSupabase />, "#3FCF8E"),
  t("SQLite", <SiSqlite />, "#003B57"),
  t("Redis", <SiRedis />, "#FF4438"),
  t("PostgreSQL", <SiPostgresql />, "#4169E1"),
  t("MySQL", <SiMysql />, "#4479A1"),
  t("MongoDB", <SiMongodb />, "#47A248"),
  t("Firebase", <SiFirebase />, "#DD2C00"),
  t("Elastic", <SiElasticsearch />, "#005571"),
];

const AI_ML: TechItem[] = [
  t("Replicate", <SiReplicate />, "#000000"),
  t("Pinecone", <FiBox />, "#334155"),
  t("PostgreSQL", <SiPostgresql />, "#4169E1"),
  t("OpenAI", <SiOpenai />, "#412991"),
  t("Ollama", <SiOllama />, "#000000"),
  t("LangChain", <SiLangchain />, "#1C3C3C"),
  t("Hugging Face", <SiHuggingface />, "#FFD21E"),
  t("Gemini", <SiGooglegemini />, "#8E75B2"),
  t("fal", <FiBox />, "#334155"),
  t("CrewAI", <SiCrewai />, "#FF5A50"),
  t("Anthropic", <SiAnthropic />, "#191919"),
  t("TensorFlow", <SiTensorflow />, "#FF6F00"),
  t("PyTorch", <SiPytorch />, "#EE4C2C"),
];

const CLOUD: TechItem[] = [
  t("AWS", <FaAws />, "#FF9900"),
  t("Google Cloud", <SiGooglecloud />, "#4285F4"),
  t("Vercel", <SiVercel />, "#000000"),
  t("Cloudflare", <SiCloudflare />, "#F38020"),
  t("DigitalOcean", <SiDigitalocean />, "#0080FF"),
  t("Netlify", <SiNetlify />, "#00C7B7"),
];

const MOBILE: TechItem[] = [
  t("Flutter", <SiFlutter />, "#02569B"),
  t("Swift", <SiSwift />, "#F05138"),
  t("Kotlin", <SiKotlin />, "#7F52FF"),
  t("React Native", <SiReact />, "#61DAFB"),
  t("Expo", <SiExpo />, "#000020"),
  t("Android", <SiAndroid />, "#3DDC84"),
  t("Apple", <SiApple />, "#000000"),
];

const BACKEND: TechItem[] = [
  t("Node.js", <SiNodedotjs />, "#5FA04E"),
  t("Python", <SiPython />, "#3776AB"),
  t("Go", <SiGo />, "#00ADD8"),
  t("NestJS", <SiNestjs />, "#E0234E"),
  t("Django", <SiDjango />, "#092E20"),
  t("FastAPI", <SiFastapi />, "#009688"),
  t("GraphQL", <SiGraphql />, "#E10098"),
];

const FRONTEND: TechItem[] = [
  t("React", <SiReact />, "#61DAFB"),
  t("Next.js", <SiNextdotjs />, "#000000"),
  t("TypeScript", <SiTypescript />, "#3178C6"),
  t("JavaScript", <SiJavascript />, "#F7DF1E"),
  t("Tailwind CSS", <SiTailwindcss />, "#06B6D4"),
  t("Vue", <SiVuedotjs />, "#4FC08D"),
  t("Sass", <SiSass />, "#CC6699"),
  t("GraphQL", <SiGraphql />, "#E10098"),
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
    handle: "Rahim Uddin",
    country: "Bangladesh",
    avatar: "https://ui-avatars.com/api/?name=Rahim+Uddin&background=50abe7&color=fff",
    body: "We came to them with a half-finished product and a hard deadline. They rebuilt the backend, cleaned up months of technical debt, and still shipped two weeks early. Did not expect that level of ownership from an outside team.",
    source: "clutch",
  },
  {
    id: "r2",
    name: "Sarah Mitchell",
    handle: "Sarah Mitchell",
    country: "United Kingdom",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    body: "Brilliant team. Communication was clear from day one.",
    source: "google",
  },
  {
    id: "r3",
    name: "David Chen",
    handle: "David Chen",
    country: "United States",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    body: "What impressed me most was how quickly they understood our domain. The 48 hour prototype was good enough to show our board, and the final product needed almost no rework.",
    source: "upwork",
  },
  {
    id: "r4",
    name: "Nusrat Jahan",
    handle: "Nusrat Jahan",
    country: "Bangladesh",
    avatar: "https://ui-avatars.com/api/?name=Nusrat+Jahan&background=6cbde9&color=fff",
    body: "Second project with Onspace and they keep raising the bar. On budget, on time, zero drama.",
    source: "fiverr",
  },
  {
    id: "r5",
    name: "Lukas Weber",
    handle: "Lukas Weber",
    country: "Germany",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    body: "Solid engineering. Our page speed scores went from 54 to 97 after the rebuild and organic traffic followed within a month. They also documented everything properly, which our internal team appreciated a lot.",
    source: "clutch",
  },
  {
    id: "r6",
    name: "Aisha Al Mansoori",
    handle: "Aisha Al Mansoori",
    country: "UAE",
    avatar: "https://ui-avatars.com/api/?name=Aisha+Al+Mansoori&background=3a96d8&color=fff",
    body: "They understood our compliance requirements without us having to explain twice. Rare.",
    source: "linkedin",
  },
  {
    id: "r7",
    name: "Wei Lin Tan",
    handle: "Wei Lin Tan",
    country: "Singapore",
    avatar: "https://ui-avatars.com/api/?name=Wei+Lin+Tan&background=50abe7&color=fff",
    body: "The automation they built handles around 80% of our back office work now. Honest about trade-offs, never oversold anything, and stuck around after launch to tune things. Would happily recommend them to anyone who asks.",
    source: "clutch",
  },
  {
    id: "r8",
    name: "Emily Turner",
    handle: "Emily Turner",
    country: "Australia",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    body: "Five stars. Our users love the new app.",
    source: "google",
  },
  {
    id: "r9",
    name: "Marc Dubois",
    handle: "Marc Dubois",
    country: "Canada",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    body: "Weekly demos, honest estimates, and a team that actually pushes back when something is a bad idea. That is what you want from a dev partner.",
    source: "upwork",
  },
  {
    id: "r10",
    name: "Sanne de Vries",
    handle: "Sanne de Vries",
    country: "Netherlands",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    body: "Clean code, clean handover. No surprises after launch.",
    source: "linkedin",
  },
  {
    id: "r11",
    name: "Amirul Hakim",
    handle: "Amirul Hakim",
    country: "Malaysia",
    avatar: "https://ui-avatars.com/api/?name=Amirul+Hakim&background=6cbde9&color=fff",
    body: "Our store conversion roughly doubled after the rebuild. They kept testing and tweaking even after the contract ended because one metric bothered them. That tells you everything about how this team works.",
    source: "fiverr",
  },
  {
    id: "r12",
    name: "Mahmudul Hasan",
    handle: "Mahmudul Hasan",
    country: "Bangladesh",
    avatar: "https://ui-avatars.com/api/?name=Mahmudul+Hasan&background=3a96d8&color=fff",
    body: "Best engineering partner we have worked with from Dhaka. Fast, transparent and very easy to work with.",
    source: "google",
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

/* ---------------- Readymade software solutions (tabbed) ---------------- */
export const READYMADE_CATEGORIES: ReadymadeCategory[] = [
  {
    id: "business",
    label: "Business",
    items: [
      { name: "ERP", description: "Business ERP Solution / Product / Shop / Company Management", icon: <FiBriefcase /> },
      { name: "HR Manager", description: "Human Resource Management System HR Software (HRMS)", icon: <FiUsers /> },
      { name: "Wholesale", description: "Inventory Control and Inventory Management System", icon: <FiPackage /> },
      { name: "Flight Booking", description: "Flight Booking Software", icon: <FiNavigation /> },
      { name: "VMS", description: "Vehicle Management System", icon: <FiTruck /> },
      { name: "GMS", description: "Garage Management Software", icon: <FiTool /> },
      { name: "Innue", description: "Business Live Chat Software", icon: <FiMessageSquare /> },
      { name: "Bus365", description: "Bus Reservation System", icon: <FiCalendar /> },
      { name: "Edutask", description: "Online Course Selling Marketplace", icon: <FiBookOpen /> },
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    items: [
      { name: "RestroPOS", description: "Restaurant POS and Kitchen Order Management", icon: <FiCoffee /> },
      { name: "StayBook", description: "Hotel Booking and Property Management System", icon: <FiHome /> },
      { name: "QR Menu", description: "Contactless QR Menu and Table Ordering", icon: <FiGrid /> },
    ],
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    items: [
      { name: "ShopKit", description: "Single Vendor E-commerce Storefront", icon: <FiShoppingCart /> },
      { name: "MarketX", description: "Multi-vendor Marketplace Platform", icon: <FiLayers /> },
      { name: "RetailPOS", description: "Omnichannel Retail POS System", icon: <FiTag /> },
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    items: [
      { name: "ClinicCare", description: "Clinic and Hospital Management System", icon: <FiActivity /> },
      { name: "PharmaSys", description: "Pharmacy Inventory and Billing Software", icon: <FiPlusSquare /> },
      { name: "TeleMed", description: "Telemedicine and Video Consultation Platform", icon: <FiVideo /> },
    ],
  },
  {
    id: "fintech",
    label: "Fintech",
    items: [
      { name: "PayFlow", description: "Payment Gateway Integration Suite", icon: <FiCreditCard /> },
      { name: "LedgerPro", description: "Accounting and Double-entry Ledger System", icon: <FiDollarSign /> },
      { name: "MicroFin", description: "Microfinance and Loan Management Software", icon: <FiPieChart /> },
    ],
  },
];
