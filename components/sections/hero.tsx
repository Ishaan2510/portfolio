"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { DecodedText } from "@/components/ui/decoded-text";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden pb-12 pt-32 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.8, ease: "easeOut" }}
          className="absolute -right-[15vw] top-[8vh] h-[90vh] w-[90vh] rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, var(--orb-cool) 0%, var(--orb-cool) 25%, rgba(61,108,255,0) 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
          className="absolute -left-[10vw] bottom-[5vh] h-[60vh] w-[60vh] rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, var(--orb-deep) 0%, rgba(76,50,220,0) 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeOut", delay: 0.8 }}
          className="absolute left-[35vw] top-[35vh] h-[30vh] w-[30vh] rounded-full"
          style={{
            background: "radial-gradient(circle at 50% 50%, var(--orb-warm) 0%, rgba(246,236,116,0) 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="shell relative max-w-md"
      >
      </motion.div>

      <div className="shell relative mt-auto pt-20 md:pt-28">
        <h1 className="font-medium leading-[0.85] tracking-[-0.05em] text-fg">
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="block text-[clamp(3.5rem,13vw,11.5rem)]"
            >
              Ishaan
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.18em]">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              className="editorial inline-block text-[clamp(3.5rem,13vw,11.5rem)] leading-[0.85]"
              style={{
                background: "linear-gradient(105deg, var(--fg) 0%, var(--fg) 25%, var(--accent) 55%, var(--accent-2) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Goswami
            </motion.span>
          </span>
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="shell relative mt-16 flex flex-wrap items-end justify-between gap-y-4 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted md:mt-20"
      >
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">GitHub</a>
          <span className="text-border-bright">/</span>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">LinkedIn</a>
          <span className="text-border-bright">/</span>
          <a href={profile.links.email} className="transition-colors hover:text-fg">Email</a>
        </div>

        <div className="flex items-center gap-5">
          <a href="#projects" className="transition-colors hover:text-fg">Work</a>
          <a href="#about" className="transition-colors hover:text-fg">Info</a>
          <a href="#contact" className="transition-colors hover:text-fg">Contact</a>
        </div>
      </motion.div>
    </section>
  );
}