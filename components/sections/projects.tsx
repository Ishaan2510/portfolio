"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { CinemaSection } from "@/components/ui/cinema-section";
import { TechRegCover } from "@/components/project-visuals/techreg-cover";

function ProjectCover({ id }: { id: string }) {
  if (id === "cortex") {
    return (
      <Image
        src="/projects/cortex.png"
        alt="Cortex — Multi-Provider LLM Orchestration"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-top"
        priority
      />
    );
  }
  if (id === "pitlane") {
    return (
      <Image
        src="/projects/pitlane.png"
        alt="Pitlane Live — F1 Race Analytics"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-top"
      />
    );
  }
  if (id === "techreg") {
    return (
      <Image
        src="/projects/techreg.png"
        alt="TechReg Analyst — F1 Regulations Retrieval"
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover object-top"
      />
    );
  }
  return null;
}

export function Projects() {
  const [activeId, setActiveId] = useState<string>(projects[0].id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <CinemaSection id="projects" index="02" label="Selected work">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.05em] text-fg md:text-6xl"
      >
        <span className="editorial">Three</span> projects, each shipped end
        to end<span className="text-accent">.</span>
      </motion.h2>

      <div className="mt-20 hidden gap-x-16 md:mt-32 md:grid md:grid-cols-12">
        <ul
          className="md:col-span-6 lg:col-span-7"
          onMouseLeave={() => setActiveId(projects[0].id)}
        >
          {projects.map((p) => {
            const isActive = activeId === p.id;
            return (
              <li key={p.id}>
                <a
                  href={p.links.demo || p.links.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  onMouseEnter={() => setActiveId(p.id)}
                  className="group relative block border-b border-border py-7 md:py-9"
                >
                  <div className="flex items-baseline gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
                    <span className="tabular text-accent">/{p.index}</span>
                    <span>{p.year}</span>
                    <span className="ml-auto">{p.status}</span>
                  </div>
                  <h3
                    className={`mt-3 text-balance text-5xl font-medium leading-[0.95] tracking-tight transition-all duration-700 ease-out md:text-6xl lg:text-7xl ${
                      isActive
                        ? "translate-x-3 text-fg"
                        : "translate-x-0 text-fg-dim"
                    }`}
                  >
                    <span className={isActive ? "editorial" : ""}>
                      {p.name}
                    </span>
                    {isActive && <span className="text-accent">.</span>}
                  </h3>
                  <p
                    className={`mt-2 text-sm text-fg-muted transition-opacity duration-700 ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {p.subtitle}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="md:col-span-6 lg:col-span-5">
          <div className="sticky top-32">
            <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <ProjectCover id={active.id} />
                </motion.div>
              </AnimatePresence>
              <CornerMarks />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6"
              >
                <p className="text-sm leading-relaxed text-fg-muted lg:text-base">
                  {active.highlights[0]}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
                  {active.stack.slice(0, 8).map((t, i) => (
                    <span key={t} className="inline-flex items-center gap-2">
                      {i > 0 && <span className="text-border-bright">·</span>}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-6 font-mono text-xs uppercase tracking-[0.22em]">
                  {active.links.demo && (
                    <a
                      href={active.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="group/l inline-flex items-center gap-2 text-fg transition-colors hover:text-accent"
                    >
                      <span>Live demo</span>
                      <span aria-hidden className="transition-transform group-hover/l:translate-x-0.5">↗</span>
                    </a>
                  )}
                  {active.links.github && (
                    <a
                      href={active.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      className="group/l inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-fg"
                    >
                      <span>Source</span>
                      <span aria-hidden className="transition-transform group-hover/l:translate-x-0.5">↗</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-14 md:hidden">
        {projects.map((p) => (
          <div key={p.id} className="flex flex-col gap-4">
            <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface">
              <ProjectCover id={p.id} />
              <CornerMarks />
            </div>
            <div className="flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
              <span className="text-accent">/{p.index}</span>
              <span>{p.year}</span>
              <span className="ml-auto">{p.status}</span>
            </div>
            <h3 className="text-3xl font-medium leading-tight text-fg">
              <span className="editorial">{p.name}</span>
              <span className="text-accent">.</span>
            </h3>
            <p className="text-base leading-relaxed text-fg-muted">
              {p.highlights[0]}
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
              {p.stack.slice(0, 6).map((t, i) => (
                <span key={t} className="inline-flex items-center gap-2">
                  {i > 0 && <span className="text-border-bright">·</span>}
                  <span>{t}</span>
                </span>
              ))}
            </div>
            <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.22em]">
              {p.links.demo && (
                <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="text-fg">Live ↗</a>
              )}
              {p.links.github && (
                <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="text-fg-muted">Source ↗</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </CinemaSection>
  );
}

function CornerMarks() {
  const arm = "h-3 w-3 absolute border-fg-dim";
  return (
    <>
      <span className={`${arm} top-2 left-2 border-t border-l`} aria-hidden />
      <span className={`${arm} top-2 right-2 border-t border-r`} aria-hidden />
      <span className={`${arm} bottom-2 left-2 border-b border-l`} aria-hidden />
      <span className={`${arm} bottom-2 right-2 border-b border-r`} aria-hidden />
    </>
  );
}