"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/data";
import { DecodedText } from "@/components/ui/decoded-text";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden pb-12 pt-32 md:pt-40"
    >
      {/* ── Atmospheric background ─────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.8, ease: "easeOut" }}
          className="absolute -right-[15vw] top-[8vh] h-[90vh] w-[90vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--orb-cool) 0%, var(--orb-cool) 25%, rgba(61,108,255,0) 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
          className="absolute -left-[10vw] bottom-[5vh] h-[60vh] w-[60vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--orb-deep) 0%, rgba(76,50,220,0) 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeOut", delay: 0.8 }}
          className="absolute left-[35vw] top-[35vh] h-[30vh] w-[30vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, var(--orb-warm) 0%, rgba(246,236,116,0) 70%)",
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

      {/* ── Top quote ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="shell relative max-w-md"
      >
      </motion.div>

      {/* ── Name + Portrait ───────────────────────────────────────────── */}
      {/*
        12-col grid: name takes 8 cols, portrait takes 4.
        The portrait sits inside an arched (vesica/oval) mask that echoes
        the Luke Baffait silhouette frame. Image is overflow-hidden so the
        Ken Burns-style slow zoom stays inside the arch.
      */}
      <div className="shell relative mt-auto grid grid-cols-1 items-end gap-x-10 gap-y-12 pt-20 md:grid-cols-12 md:gap-y-0 md:pt-28">
        {/* The name — left, 8 of 12 cols on desktop */}
        <h1 className="font-medium leading-[0.85] tracking-[-0.05em] text-fg md:col-span-8">
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.6,
              }}
              className="block text-[clamp(3.5rem,11vw,9.5rem)]"
            >
              Ishaan
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.18em]">
            <motion.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.8,
              }}
              className="editorial inline-block text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.85]"
              style={{
                background:
                  "linear-gradient(105deg, var(--fg) 0%, var(--fg) 25%, var(--accent) 55%, var(--accent-2) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Goswami
            </motion.span>
          </span>
        </h1>

        {/* Portrait — right, 4 of 12 cols on desktop */}
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
          className="relative mx-auto w-full max-w-[280px] md:col-span-4 md:mx-0 md:max-w-none"
        >
          {/* Decorative glow behind the arch */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 translate-y-6 scale-95 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, var(--accent-glow) 0%, transparent 70%)",
            }}
          />

          {/* The arched portrait frame.
              border-radius creates a vesica-like silhouette: rounded top
              and bottom, taller than wide. */}
          <div
            className="relative aspect-[3/4] w-full overflow-hidden"
            style={{
              borderRadius: "50% / 30%",
            }}
          >
            <Image
              src="/profile.png"
              alt="Portrait of Ishaan Goswami"
              fill
              priority
              sizes="(min-width: 768px) 30vw, 70vw"
              className="object-cover"
              style={{
                /* Slight saturation lift; subtle warmth */
                filter: "saturate(1.05) contrast(1.02)",
              }}
            />

            {/* Soft inner color wash so the photo reads as part of the
                hero palette, not a stuck-on portrait */}
            <div
              aria-hidden
              className="absolute inset-0 mix-blend-soft-light"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-glow) 0%, transparent 50%, var(--accent-2-glow) 100%)",
              }}
            />
          </div>

          {/* Caption — mono micro label, magazine-style */}
          <figcaption className="mt-4 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
            <span>Ahmedabad · 2026</span>
            <span className="tabular text-accent">/00</span>
          </figcaption>
        </motion.figure>
      </div>

      {/* ── Bottom strip ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="shell relative mt-16 flex flex-wrap items-end justify-between gap-y-4 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-muted md:mt-20"
      >
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fg"
          >
            GitHub
          </a>
          <span className="text-border-bright">/</span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-fg"
          >
            LinkedIn
          </a>
          <span className="text-border-bright">/</span>
          <a
            href={profile.links.email}
            className="transition-colors hover:text-fg"
          >
            Email
          </a>
        </div>

        <div className="flex items-center gap-5">
          <a href="#projects" className="transition-colors hover:text-fg">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-fg">
            Info
          </a>
          <a href="#contact" className="transition-colors hover:text-fg">
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}