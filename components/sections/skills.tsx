"use client";

import { motion } from "framer-motion";
import { skillGroups, marqueeSkills } from "@/lib/data";
import { CinemaSection } from "@/components/ui/cinema-section";
import { Marquee } from "@/components/ui/marquee";

export function Skills() {
  return (
    <CinemaSection
      id="skills"
      index="03"
      label="Stack"
      className="overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-balance text-3xl font-medium leading-[1.05] tracking-tight text-fg md:text-5xl"
      >
        <span className="editorial">Tools</span> I reach for
        <span className="text-accent">.</span>
      </motion.h2>

      <div className="-mx-6 mt-14 md:-mx-14 md:mt-20 lg:-mx-20">
        <Marquee items={marqueeSkills} />
      </div>

      <div className="mt-20 grid gap-x-12 gap-y-12 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
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
            <div className="flex items-center gap-3 border-b border-border pb-3 font-mono text-[10px] uppercase tracking-[0.22em]">
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
    </CinemaSection>
  );
}