"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { CinemaSection } from "@/components/ui/cinema-section";

const links = [
  { label: "Email", value: profile.email, href: profile.links.email, external: false },
  { label: "GitHub", value: "github.com/Ishaan2510", href: profile.links.github, external: true },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ishaan-goswami-io",
    href: profile.links.linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <CinemaSection
      id="contact"
      index="05"
      label="Contact"
      className="overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 grid-bg opacity-25" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg/80 to-bg" aria-hidden />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-balance text-[clamp(2.5rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.05em] text-fg">
          <span className="block">
            <span className="editorial">Let&apos;s</span> build
          </span>
          <span className="block text-fg-muted">
            something<span className="text-accent">.</span>
          </span>
        </h2>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">
          Currently interviewing for summer internships in backend, ML
          platform, and full-stack roles. Available {profile.status.detail.toLowerCase()}. The fastest
          way to reach me is email.
        </p>

        <motion.a
          href={profile.links.email}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          data-cursor="hover"
          className="group mt-12 inline-flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-fg-dim pb-3 transition-colors hover:border-accent md:mt-16"
        >
          <span className="editorial text-2xl tracking-tight text-fg transition-colors group-hover:text-accent md:text-4xl">
            {profile.email}
          </span>
          <Arrow />
        </motion.a>

        <ul className="mt-20 md:mt-24">
          {links.map((link, i) => (
            <li
              key={link.label}
              className={`border-border ${i === 0 ? "border-t" : ""} border-b`}
            >
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                data-cursor="hover"
                className="group flex items-center justify-between py-5 transition-colors hover:bg-surface/40 md:py-6"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim md:w-24">
                    {link.label}
                  </span>
                  <span className="text-base text-fg transition-colors group-hover:text-accent md:text-lg">
                    {link.value}
                  </span>
                </div>
                <Arrow />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 pt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim md:mt-28 md:flex-row md:items-center">
          <span>© 2026 Ishaan Goswami</span>
        </div>
      </motion.div>
    </CinemaSection>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="text-fg-dim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
      aria-hidden
    >
      <path
        d="M3 11L11 3M11 3H4M11 3V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}