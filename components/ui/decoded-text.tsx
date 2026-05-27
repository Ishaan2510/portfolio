"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>/";

type DecodedTextProps = {
  text: string;
  /** Total decode duration in ms */
  duration?: number;
  /** Wait for the element to scroll into view before starting */
  startOnView?: boolean;
  /** Extra wait before decode kicks off (ms) */
  delay?: number;
  className?: string;
};

/**
 * Renders text that starts as scrambled glyphs and resolves to the real string,
 * character by character. The "gibberish → text" effect from the Sidewave site.
 *
 * Accessible: screen readers see the real text via aria-label; the visual scramble
 * is purely decorative for sighted users.
 */
export function DecodedText({
  text,
  duration = 1400,
  startOnView = true,
  delay = 0,
  className,
}: DecodedTextProps) {
  const [display, setDisplay] = useState(() =>
    Array.from(text)
      .map((c) => (c === " " ? " " : ""))
      .join("")
  );
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) return;
    if (startOnView && !isInView) return;

    const timeout = setTimeout(() => {
      setStarted(true);
      const chars = Array.from(text);
      const total = chars.length || 1;
      const startTime = performance.now();
      let raf: number;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Slightly more than 1.0 so trailing chars finish before time
        const resolved = Math.floor(progress * total * 1.25);

        const next = chars.map((c, i) => {
          if (c === " ") return " ";
          if (i < resolved) return c;
          // Random glyph for unresolved positions
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        });
        setDisplay(next.join(""));

        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
        }
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, duration, delay, startOnView, isInView, started]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}
