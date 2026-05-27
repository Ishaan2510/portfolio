"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor — two layer: precise dot + lagging ring.
 * Hides native cursor on lg+ via body class. Touch devices opt out.
 *
 * To make an element grow the ring, add data-cursor="hover" to it
 * (links and buttons are auto-detected via :hover target inspection).
 */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Dot is near-instant; ring lags for the trail feel
  const dotX = useSpring(x, { damping: 50, stiffness: 1200, mass: 0.2 });
  const dotY = useSpring(y, { damping: 50, stiffness: 1200, mass: 0.2 });
  const ringX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 });

  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // assume touch until proven mouse

  useEffect(() => {
    // Detect mouse-capable. Touch devices skip the whole thing.
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;
    setIsTouch(false);
    document.body.classList.add("cursor-custom");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as Element | null;
      if (!target) return;
      const interactive = !!target.closest(
        "a, button, [role='button'], [data-cursor='hover']"
      );
      setIsPointer(interactive);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.body.classList.remove("cursor-custom");
    };
  }, [x, y, visible]);

  if (isTouch) return null;

  return (
    <>
      {/* Precise dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-fg mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />
      {/* Lagging ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] h-9 w-9 rounded-full border border-fg-muted mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? (isPointer ? 0.9 : 0.5) : 0,
          scale: isPointer ? 1.8 : 1,
          borderColor: isPointer ? "#ff3d2e" : "var(--fg-muted)",
        }}
        transition={{ scale: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      />
    </>
  );
}
