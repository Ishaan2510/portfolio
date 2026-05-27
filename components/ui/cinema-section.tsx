"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type CinemaSectionProps = {
  id: string;
  index: string;
  label: string;
  className?: string;
  children: React.ReactNode;
};

export function CinemaSection({
  id,
  index,
  label,
  className,
  children,
}: CinemaSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 30%"],
  });

  const indexScale = useTransform(scrollYProgress, [0, 1], [1.35, 1]);
  const indexOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.4, 1]);
  const indexY = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const lineScale = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative border-t border-border py-28 md:py-40",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-0 h-px origin-left bg-accent"
        style={{ scaleX: lineScale }}
      />

      <div className="shell">
        <motion.div
          style={{
            scale: indexScale,
            opacity: indexOpacity,
            y: indexY,
          }}
          className="flex items-baseline gap-4 md:gap-6"
        >
          <span
            className="tabular text-accent"
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            /{index}
          </span>
          <span className="eyebrow text-fg-muted">{label}</span>
        </motion.div>

        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}