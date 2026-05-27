"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // Spring-damp the progress so it feels organic, not jittery
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-9 left-0 right-0 z-50 h-[2px] origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
