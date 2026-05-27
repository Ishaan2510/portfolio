"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProjectEntryProps = {
  project: Project;
  cover: ReactNode;
  // Even-indexed projects place image on the right, odd on the left.
  // This gives us the magazine spread feel.
  reverse?: boolean;
};

const statusStyles: Record<Project["status"], string> = {
  LIVE: "text-ok",
  ARCHIVED: "text-fg-dim",
  WIP: "text-warn",
};

export function ProjectEntry({ project, cover, reverse = false }: ProjectEntryProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="grid gap-x-10 gap-y-8 md:grid-cols-12 md:gap-y-12"
    >
      {/* Cover image — takes 7 of 12 columns; flips side based on reverse */}
      <a
        href={project.links.github || project.links.demo || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "cover-card group relative block overflow-hidden border border-border bg-surface md:col-span-7",
          reverse && "md:order-2"
        )}
        aria-label={`${project.name} — open project`}
      >
        {cover}
        {/* Top-right overlay caption */}
        <div className="absolute right-4 top-4 z-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-ultra-wide text-fg-muted backdrop-blur-sm">
          <span
            className={cn(
              "flex items-center gap-1.5",
              statusStyles[project.status]
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {project.status}
          </span>
        </div>
        {/* Hover hint */}
        <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-ultra-wide text-fg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span>View source</span>
          <span className="block h-px w-6 bg-fg" aria-hidden />
        </div>
      </a>

      {/* Content side — 5 of 12 columns */}
      <div
        className={cn(
          "flex flex-col justify-center md:col-span-5",
          reverse && "md:order-1"
        )}
      >
        {/* Meta strip */}
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-ultra-wide text-fg-dim">
          <span className="tabular text-accent">/{project.index}</span>
          <span className="h-[1px] w-6 bg-border-bright" aria-hidden />
          <span className="text-fg-muted">{project.subtitle}</span>
          <span className="ml-auto tabular text-fg-dim">{project.year}</span>
        </div>

        {/* Title — editorial italic feel */}
        <h3 className="mt-5 text-balance text-3xl font-medium leading-[1.05] tracking-tight text-fg md:text-5xl">
          <span className="editorial">{project.name}</span>
          <span className="text-accent">.</span>
        </h3>

        {/* Single-line lede — pulled from first highlight */}
        <p className="mt-5 text-base leading-relaxed text-fg-muted md:text-lg">
          {project.highlights[0]}
        </p>

        {/* Stack — compact line, no chips, less techie */}
        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-ultra-wide text-fg-dim">
          {project.stack.slice(0, 8).map((tech, i) => (
            <span key={tech} className="inline-flex items-center gap-2">
              {i > 0 && <span className="text-border-bright">·</span>}
              <span>{tech}</span>
            </span>
          ))}
        </div>

        {/* Links — minimal text links, not buttons */}
        {(project.links.demo || project.links.github) && (
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-ultra-wide">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-fg transition-colors hover:text-accent"
              >
                <span>Live demo</span>
                <Arrow />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg"
              >
                <span>Source</span>
                <Arrow />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function Arrow() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      aria-hidden
    >
      <path
        d="M2 9L9 2M9 2H3.5M9 2V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
