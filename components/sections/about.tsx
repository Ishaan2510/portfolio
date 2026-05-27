"use client";

import { motion } from "framer-motion";
import { profile, stats } from "@/lib/data";
import { CinemaSection } from "@/components/ui/cinema-section";
import { AnimatedNumber } from "@/components/ui/animated-number";

export function About() {
  return (
    <CinemaSection id="about" index="01" label="About">
      <div className="grid gap-x-10 gap-y-16 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          <h2 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight text-fg md:text-5xl">
            <span className="editorial">I work</span> where the request hits
            the server<span className="text-accent">.</span>
          </h2>
          <p className="mt-8 max-w-prose text-base leading-relaxed text-fg-muted md:mt-10 md:text-lg">
            {profile.about}
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 md:pt-2"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-baseline justify-between border-border py-5 ${
                i < stats.length - 1 ? "border-b" : ""
              }`}
            >
              <dt className="eyebrow">{stat.label}</dt>
              <dd className="text-3xl font-medium tracking-tight text-fg md:text-4xl">
                <AnimatedNumber
                  value={stat.value}
                  decimals={stat.decimals ?? 0}
                  suffix={stat.suffix}
                />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </CinemaSection>
  );
}