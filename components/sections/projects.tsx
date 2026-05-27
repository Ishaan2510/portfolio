"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionMarker } from "@/components/ui/section-marker";
import { ProjectEntry } from "@/components/ui/project-entry";
import { CortexCover } from "@/components/project-visuals/cortex-cover";
import { PitlaneCover } from "@/components/project-visuals/pitlane-cover";
import { VeParkCover } from "@/components/project-visuals/vepark-cover";

// Map project ids to their custom architectural illustrations.
// Swap any of these for <img src="/projects/cortex.jpg"/> when real screenshots arrive.
const covers: Record<string, React.ReactNode> = {
  cortex: <CortexCover />,
  pitlane: <PitlaneCover />,
  vepark: <VeParkCover />,
};

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-border py-28 md:py-40"
    >
      <div className="shell">
        <SectionMarker index="02" label="Selected work" />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-ultra-tight text-fg md:mt-14 md:text-6xl"
        >
          <span className="editorial">Three</span> projects in production
          <span className="text-fg-muted">.</span>{" "}
          <span className="editorial text-fg-muted">Each one</span> shipped end
          to end<span className="text-accent">.</span>
        </motion.h2>

        {/* Magazine spread — alternating image side */}
        <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-32">
          {projects.map((project, i) => (
            <ProjectEntry
              key={project.id}
              project={project}
              cover={covers[project.id]}
              reverse={i % 2 === 1}
            />
          ))}
        </div>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 flex items-center justify-center md:mt-32"
        >
          <a
            href="https://github.com/Ishaan2510"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border-b border-fg-dim pb-2 font-mono text-[11px] uppercase tracking-ultra-wide text-fg-muted transition-colors hover:border-accent hover:text-fg"
          >
            <span>See everything on GitHub</span>
            <span className="block h-px w-8 bg-fg-dim transition-all group-hover:w-12 group-hover:bg-accent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
