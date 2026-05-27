import { cn } from "@/lib/utils";

// Editorial section marker — sentence case label, refined hairline divider
type SectionMarkerProps = {
  index: string;
  label: string;
  className?: string;
};

export function SectionMarker({ index, label, className }: SectionMarkerProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[10px] uppercase tracking-ultra-wide text-fg-dim",
        className
      )}
    >
      <span className="tabular text-accent">/{index}</span>
      <span className="h-[1px] w-8 bg-border-bright" aria-hidden />
      <span className="text-fg-muted">{label}</span>
    </div>
  );
}
