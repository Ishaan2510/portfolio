"use client";

import { useEffect, useState } from "react";
import { navSections } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
          }
        },
        // Slightly above center so we trigger as the section actually enters
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-end gap-1">
        {navSections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "group flex items-center gap-3 py-1.5 font-mono text-[10px] uppercase tracking-ultra-wide transition-colors",
                  isActive ? "text-fg" : "text-fg-dim hover:text-fg-muted"
                )}
              >
                <span
                  className={cn(
                    "tabular transition-all",
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                  )}
                >
                  {section.label}
                </span>
                <span className="tabular">{section.number}</span>
                <span
                  className={cn(
                    "block h-[1px] transition-all",
                    isActive
                      ? "w-8 bg-accent"
                      : "w-4 bg-border-bright group-hover:w-6 group-hover:bg-fg-dim"
                  )}
                  aria-hidden
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
