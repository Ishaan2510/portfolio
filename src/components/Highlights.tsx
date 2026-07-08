"use client";

export function Highlights() {
  return (
    <div className="relative mt-4 flex flex-col items-center justify-center px-6 py-12 text-center">
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600 mb-3">
        In the making
      </span>
      <p className="max-w-[420px] text-[15px] font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed">
        No trophies on the shelf yet.
      </p>
      <p className="max-w-[440px] text-[13px] text-zinc-500 dark:text-zinc-500 leading-relaxed mt-2">
        I haven&apos;t arrived — but I&apos;m on the road to building something that
        matters, one commit at a time. The best highlights are still ahead.
      </p>
    </div>
  );
}
