"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, motion } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  decimals?: number;
  suffix?: string;
};

export function AnimatedNumber({
  value,
  decimals = 0,
  suffix = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
  });
  const display = useTransform(spring, (v) =>
    v.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className="tabular">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
