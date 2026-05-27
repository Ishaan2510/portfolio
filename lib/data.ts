// Single source of truth for all portfolio content.
// Edit this file to update the site — no other files need to change for content.

export const profile = {
  name: "Ishaan Goswami",
  role: "Backend & Systems Engineer",
  location: "Ahmedabad, IN",
  email: "ishaangoswami735@gmail.com",
  phone: "+91 9265311083",
  links: {
    github: "https://github.com/Ishaan2510",
    linkedin: "https://www.linkedin.com/in/ishaan-goswami-io/",
    email: "mailto:ishaangoswami735@gmail.com",
    resume: "/Ishaan_Goswami_Resume.pdf",
  },
  // The one-line bio that lives under the hero
  tagline:
    "I build distributed backend systems, LLM orchestration platforms, and container-native deployments.",
  // The fuller paragraph for the About section
  about:
    "Third-year CS undergrad on a dual-degree track at PDEU and IIT Madras. I work where the request hits the server: REST API design, async pipelines, container orchestration, and the unglamorous bits that decide whether something stays up at 3am. Shipped a multi-provider LLM router on Kubernetes with GitOps reconciliation, an Azure-hosted F1 telemetry platform, and a vehicle parking system with race-condition-safe state transitions. Currently interviewing for summer internships and looking for teams that take backend craft seriously.",
  // For the live status line
  status: {
    label: "AVAILABLE",
    detail: "MAY 15 – JUL 31, 2026",
    state: "ok" as "ok" | "warn" | "accent",
  },
} as const;

// ──────────────────────────────────────────────────────────────────────────
// PROJECTS
// ──────────────────────────────────────────────────────────────────────────

export type Project = {
  id: string;
  index: string; // "01", "02"…
  name: string;
  subtitle: string;
  year: string;
  status: "LIVE" | "ARCHIVED" | "WIP";
  stack: string[];
  // Three bullets max, each ~30 words. These are your strongest signals.
  highlights: string[];
  links: {
    demo?: string;
    github?: string;
    case?: string;
  };
};

export const projects: Project[] = [
  {
    id: "cortex",
    index: "01",
    name: "Cortex",
    subtitle: "Multi-Provider LLM Orchestration Platform",
    year: "2026",
    status: "LIVE",
    stack: [
      "React",
      "Node.js",
      "Express",
      "Python",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "Argo CD",
      "GitHub Actions",
    ],
    highlights: [
      "Task-aware routing layer across 4 LLM providers (Groq, Cerebras, Gemini, OpenRouter) with rate-limit-aware automatic fallback and full attempted-chain persistence per task for observability.",
      "Stateless Python worker tier consuming via Redis BRPOP on Kubernetes; decoupled file processing (PyMuPDF up to 80K chars) from the synchronous API to keep backend latency bounded.",
      "Production GitOps pipeline across two repos with GitHub Actions, Docker Hub, Argo CD (auto-sync, prune, self-heal), plus an automated LLM regression eval in CI that fails builds on >5pp pass-rate drop.",
    ],
    links: {
      demo: "https://cortex-ai-task-platform.vercel.app/",
      github: "https://github.com/Ishaan2510/ai-task-platform",
    },
  },
  {
    id: "pitlane",
    index: "02",
    name: "Pitlane Live",
    subtitle: "F1 Race Analytics Platform",
    year: "2025",
    status: "LIVE",
    stack: [
      "Vue.js",
      "Flask",
      "FastF1",
      "PostgreSQL",
      "Nginx",
      "Gunicorn",
      "Azure VM",
      "Vercel",
    ],
    highlights: [
      "RESTful Flask backend serving telemetry across 23 F1 circuits to a Vue.js frontend with animated race replay; designed the API contract, data model, and deployment topology end-to-end.",
      "Configurable telemetry pipeline parsing raw positional streams with piecewise linear interpolation for sub-second trajectory reconstruction; decoupled polling layer extensible to future seasons.",
      "Deployed on Azure VM with Gunicorn and Nginx; separated telemetry ingestion and client-serving into independent concurrent processes so heavy ingest never starves API responsiveness.",
    ],
    links: {
      demo: "https://pitlane-live-three.vercel.app/",
      github: "https://github.com/Ishaan2510",
    },
  },
  {
    id: "techreg",
    index: "03",
    name: "TechReg Analyst",
    subtitle: "F1 Regulations Retrieval System",
    year: "2025",
    status: "LIVE",
    stack: [
      "Python",
      "LangChain",
      "FAISS",
      "Sentence-Transformers",
      "Groq API",
      "Streamlit",
      "PyMuPDF",
    ],
    highlights: [
      "Retrieval-augmented analyst over the FIA Formula One Technical Regulations: ingests the 200+ page rulebook, chunks by article semantics, and answers natural-language queries with cited source paragraphs.",
      "FAISS vector index over sentence-transformer embeddings with score-thresholded retrieval and a re-ranking pass; LLM responses constrained to retrieved context to keep hallucinations grounded in the regulation text.",
      "Python ingestion pipeline using PyMuPDF preserves article numbering and cross-references so citations point to exact regulation sections, not just nearby pages.",
    ],
    links: {
      demo: "https://f1-regulations-rag-system.streamlit.app/",
      github: "https://github.com/Ishaan2510/f1-regulations-rag-system",
    },
  },
];

// ──────────────────────────────────────────────────────────────────────────
// SKILLS
// ──────────────────────────────────────────────────────────────────────────

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C++"],
  },
  {
    label: "Backend & APIs",
    items: [
      "Node.js",
      "Express",
      "Flask",
      "Flask-RESTful",
      "REST",
      "JWT Auth",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    label: "Databases & Cache",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis", "Celery"],
  },
  {
    label: "Cloud / DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Argo CD",
      "GitHub Actions",
      "Azure",
      "Nginx",
      "Gunicorn",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "Postman", "Linux", "Jupyter"],
  },
];

// Flat marquee list — every skill ribbon you want scrolling
export const marqueeSkills = [
  "PYTHON",
  "TYPESCRIPT",
  "NODE.JS",
  "FLASK",
  "EXPRESS",
  "POSTGRESQL",
  "MONGODB",
  "REDIS",
  "CELERY",
  "DOCKER",
  "KUBERNETES",
  "ARGO CD",
  "GITHUB ACTIONS",
  "REACT",
  "NEXT.JS",
  "VUE.JS",
  "AZURE",
  "NGINX",
  "GUNICORN",
  "JWT",
  "REST API",
  "GITOPS",
];

// ──────────────────────────────────────────────────────────────────────────
// EDUCATION
// ──────────────────────────────────────────────────────────────────────────

export const education = [
  {
    institution: "Pandit Deendayal Energy University",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Ahmedabad, IN",
    period: "Jul 2023 — Aug 2027",
    detail: "CGPA 9.29 / 10.0",
  },
  {
    institution: "IIT Madras",
    degree: "B.S. in Data Science (Online)",
    location: "Chennai, IN",
    period: "Sep 2023 — Present",
    // CGPA intentionally omitted — IITM uses relative grading
    detail: "Dual-degree concurrent program",
  },
];

// ──────────────────────────────────────────────────────────────────────────
// STATS — for the kinetic number reveals
// ──────────────────────────────────────────────────────────────────────────

export const stats = [
  { value: 100, suffix: "+", label: "LEETCODE SOLVED" },
  { value: 11, suffix: "", label: "CODEFORCES CONTESTS" },
  { value: 9.29, suffix: "", label: "PDEU CGPA", decimals: 2 },
  { value: 2026, suffix: "", label: "GATE CSE QUALIFIED" },
];

// ──────────────────────────────────────────────────────────────────────────
// NAV
// ──────────────────────────────────────────────────────────────────────────

export const navSections = [
  { id: "hero", label: "Index", number: "00" },
  { id: "about", label: "About", number: "01" },
  { id: "projects", label: "Work", number: "02" },
  { id: "skills", label: "Stack", number: "03" },
  { id: "education", label: "Education", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];
