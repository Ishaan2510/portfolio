"use client";

import { useEffect, useState } from "react";
import { formatISTTime } from "@/lib/utils";
import { profile } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export function StatusBar() {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setTime(formatISTTime(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const dotColor =
    profile.status.state === "ok"
      ? "bg-ok"
      : profile.status.state === "warn"
        ? "bg-warn"
        : "bg-accent";

  return (
    <div className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="shell flex h-9 items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${dotColor} animate-pulse`} />
            <span className="text-fg-muted">Status</span>
            <span className="text-fg">{profile.status.label}</span>
          </span>
          <span className="hidden sm:inline text-border-bright">·</span>
          <span className="hidden sm:inline tabular">
            <span className="text-fg-muted">Window </span>
            {profile.status.detail}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline">
            <span className="text-fg-muted">Loc </span>
            {profile.location}
          </span>
          <span className="hidden md:inline text-border-bright">·</span>
          <span className="tabular">
            <span className="text-fg-muted">IST </span>
            <span className="text-fg">
              {mounted ? time : "--:--:--"}
            </span>
          </span>
          <span className="text-border-bright">·</span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}