"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

// Editorial reveal — slower, more deliberate than the racing version.
// Each line masks up over 1.2s with 80ms stagger.
const lineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const line = {
  hidden: { y: "105%" },
  show: {
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
  },
};
const fade = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden pb-12 pt-32 md:pt-40"
    >
      {/* Subtle grid background — much lower opacity than the previous version */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />

      {/* Editorial top strip */}
      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        className="shell relative flex items-center justify-between font-mono text-[10px] uppercase tracking-ultra-wide text-fg-dim"
      >
        <span className="flex items-center gap-3">
          <span className="text-accent">●</span>
          <span className="text-fg-muted">PORTFOLIO</span>
          <span className="hidden h-[1px] w-8 bg-border-bright md:block" aria-hidden />
          <span className="hidden md:inline tabular">VOL. 26 / ED. 02</span>
        </span>
        <span className="tabular text-fg-muted">2026</span>
      </motion.div>

      {/* The editorial headline — verbs in serif italic, nouns in sans */}
      <div className="shell relative mt-16 md:mt-24">
        <motion.h1
          variants={lineContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1200px] text-balance text-[clamp(2.75rem,8vw,7.5rem)] font-medium leading-[0.95] tracking-ultra-tight text-fg"
        >
          {/* Line 1 */}
          <span className="mask-line">
            <motion.span variants={line} className="block">
              I <span className="editorial text-fg-muted">design</span> and{" "}
              <span className="editorial text-fg-muted">build</span>
            </motion.span>
          </span>
          {/* Line 2 */}
          <span className="mask-line">
            <motion.span variants={line} className="block">
              backend systems that
            </motion.span>
          </span>
          {/* Line 3 */}
          <span className="mask-line">
            <motion.span variants={line} className="block">
              <span className="editorial text-fg-muted">don&apos;t</span> fall
              over<span className="text-accent">.</span>
            </motion.span>
          </span>
        </motion.h1>
      </div>

      {/* Bottom meta strip — three columns: signature, role, scroll cue */}
      <div className="shell relative mt-16 md:mt-24">
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          transition={{ delay: 1.4 }}
          className="grid gap-y-6 border-t border-border pt-8 md:grid-cols-12 md:gap-x-10"
        >
          {/* Signature — name + location, smaller and quieter */}
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-fg-dim">
              SIGNED
            </p>
            <p className="mt-2 text-2xl text-fg md:text-3xl">
              <span className="editorial">Ishaan Goswami</span>
              <span className="text-fg-dim">,</span>{" "}
              <span className="text-fg-muted">{profile.location}</span>
            </p>
          </div>

          {/* Role */}
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-fg-dim">
              ROLE
            </p>
            <p className="mt-2 text-base leading-relaxed text-fg-muted md:text-lg">
              Backend &amp; Systems Engineer.
              <br />
              Currently interviewing for summer 2026.
            </p>
          </div>

          {/* Scroll cue */}
          <div className="md:col-span-3 md:text-right">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-ultra-wide text-fg-muted transition-colors hover:text-fg"
            >
              <span>Continue reading</span>
              <motion.span
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                ↓
              </motion.span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
