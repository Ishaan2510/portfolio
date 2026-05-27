"use client";

import { motion } from "framer-motion";
import { skillGroups, marqueeSkills } from "@/lib/data";
import { SectionMarker } from "@/components/ui/section-marker";
import { Marquee } from "@/components/ui/marquee";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-border py-28 md:py-40"
    >
      <div className="shell">
        <SectionMarker index="03" label="Stack" />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-3xl text-balance text-3xl font-medium leading-[1.05] tracking-tight text-fg md:mt-14 md:text-5xl"
        >
          <span className="editorial">Tools</span> I reach for
          <span className="text-accent">.</span>
        </motion.h2>
      </div>

      {/* Full-bleed marquee — slower in this revision */}
      <div className="mt-14 md:mt-20">
        <Marquee items={marqueeSkills} />
      </div>

      <div className="shell mt-20 md:mt-24">
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3 border-b border-border pb-3 font-mono text-[10px] uppercase tracking-ultra-wide">
                <span className="tabular text-accent">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-fg-muted">{group.label}</span>
              </div>
              <ul className="mt-5 flex flex-col gap-2 text-base text-fg-muted">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 transition-colors hover:text-fg"
                  >
                    <span className="block h-px w-3 bg-fg-dim" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
