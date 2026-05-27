"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { CinemaSection } from "@/components/ui/cinema-section";

export function Education() {
  return (
    <CinemaSection id="education" index="04" label="Education">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl text-balance text-3xl font-medium leading-[1.05] tracking-tight text-fg md:text-5xl"
      >
        <span className="editorial">On a</span> concurrent track
        <span className="text-accent">.</span>
      </motion.h2>

      <div className="mt-16 md:mt-24">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 1,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative grid gap-4 border-t border-border py-10 transition-colors hover:bg-surface/40 md:grid-cols-12 md:gap-8 md:py-12"
          >
            <span
              className="pointer-events-none absolute left-0 top-0 h-[1px] w-0 bg-accent transition-all duration-700 ease-out group-hover:w-16"
              aria-hidden
            />

            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] tabular text-fg-dim">
                {edu.period}
              </p>
            </div>

            <div className="md:col-span-6">
              <h3 className="text-2xl font-medium leading-tight tracking-tight text-fg md:text-3xl">
                <span className="editorial">{edu.institution}</span>
              </h3>
              <p className="mt-2 text-base text-fg-muted">{edu.degree}</p>
            </div>

            <div className="md:col-span-3 md:text-right">
              <p className="text-sm text-fg-muted">{edu.detail}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
                {edu.location}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border" aria-hidden />
      </div>
    </CinemaSection>
  );
}