import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  className?: string;
};

export function Marquee({ items, reverse = false, className }: MarqueeProps) {
  // Duplicate items so the marquee loops seamlessly with translateX(-50%)
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border bg-surface",
        className
      )}
      aria-label="Skills"
    >
      {/* Soft edge fade to avoid hard cuts on the sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent" />

      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-6 px-6 py-5 font-mono text-sm uppercase tracking-ultra-wide text-fg-muted"
          >
            <span>{item}</span>
            <span className="text-accent">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
