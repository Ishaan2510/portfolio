import type { ComponentType } from "react";
import { Network, Search, Database, Server } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiFlask,
  SiVuedotjs,
  SiPostgresql,
  SiStreamlit,
  SiLangchain,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "react" | "node" | "ts" | "python" | "mongodb" | "redis" | "docker"
  | "kubernetes" | "ghactions" | "flask" | "vue" | "postgresql" | "streamlit"
  | "langchain" | "faiss" | "argocd" | "express" | "nginx";

export type TechItem = TechKey | { label: string; tooltip?: string };

export interface Project {
  slug: string;
  title: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  video: string;
  description: string;
  tech: TechItem[];
  github: string;
  live: string;
  starsText?: string;
  backgroundImage?: string;
  hasPin: boolean;
}

export const iconMap: Record<TechKey, TechIcon> = {
  react: SiReact,
  node: SiNodedotjs,
  ts: SiTypescript,
  python: SiPython,
  mongodb: SiMongodb,
  redis: SiRedis,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  ghactions: SiGithubactions,
  flask: SiFlask,
  vue: SiVuedotjs,
  postgresql: SiPostgresql,
  streamlit: SiStreamlit,
  langchain: SiLangchain,
  faiss: Search,
  argocd: Network,
  express: Server,
  nginx: Server,
};

export const techNames: Record<TechKey, string> = {
  react: "React",
  node: "Node.js",
  ts: "TypeScript",
  python: "Python",
  mongodb: "MongoDB",
  redis: "Redis",
  docker: "Docker",
  kubernetes: "Kubernetes",
  ghactions: "GitHub Actions",
  flask: "Flask",
  vue: "Vue.js",
  postgresql: "PostgreSQL",
  streamlit: "Streamlit",
  langchain: "LangChain",
  faiss: "FAISS",
  argocd: "Argo CD",
  express: "Express",
  nginx: "Nginx",
};

export const projectsData: Project[] = [
  {
    slug: "cortex",
    title: "Cortex",
    imageTitle: "LLM Orchestration Platform",
    src: "/projects/cortex.png",
    video: "",
    description:
      "Multi-provider LLM orchestration platform with task-aware routing across 4 providers, Redis BRPOP worker tier on Kubernetes, and a CI-gated regression eval suite.",
    tech: ["react", "node", "express", "python", "mongodb", "redis", "docker", "kubernetes", "argocd", "ghactions"],
    github: "https://github.com/Ishaan2510/ai-task-platform",
    live: "https://cortex-ai-task-platform.vercel.app/",
    hasPin: true,
  },
  {
    slug: "pitlane-live",
    title: "Pitlane Live",
    imageTitle: "F1 Race Analytics",
    src: "/projects/pitlane.png",
    video: "",
    description:
      "F1 race analytics platform with telemetry pipeline serving data across 23 circuits, animated race replay, SSE live feed, and a prediction scoring engine.",
    tech: ["vue", "flask", "python", "postgresql", "nginx"],
    github: "",
    live: "https://pitlane-live-three.vercel.app/",
    hasPin: false,
  },
  {
    slug: "techreg-analyst",
    title: "TechReg Analyst",
    imageTitle: "F1 Regulation RAG System",
    src: "/projects/techreg.png",
    video: "",
    description:
      "Two-stage RAG pipeline over 589 pages of FIA regulations with FAISS vector indexing, cross-encoder reranking, and citation-grounded answers at 80% Section Match@1.",
    tech: ["python", "langchain", "faiss", "streamlit"],
    github: "https://github.com/Ishaan2510/f1-regulations-rag-system",
    live: "https://f1-regulations-rag-system.streamlit.app/",
    hasPin: false,
  },
  {
    slug: "f1-predictor",
    title: "F1 Pit Stop Predictor",
    imageTitle: "ML Classification Pipeline",
    src: "/projects/predictor.png",
    video: "",
    description:
      "Supervised classification pipeline over 60+ F1 races with LightGBM, SHAP explainability, SMOTE class balancing, and ROC-AUC 87.4% deployed via Streamlit.",
    tech: ["python", "streamlit"],
    github: "",
    live: "https://f1-pitstop-predictor-ig.streamlit.app/",
    hasPin: false,
  },
];