import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "border-bright": "var(--border-bright)",
        fg: "var(--fg)",
        "fg-muted": "var(--fg-muted)",
        "fg-dim": "var(--fg-dim)",
        accent: "var(--accent)",
        "accent-glow": "var(--accent-glow)",
        data: "var(--data)",
        ok: "var(--ok)",
        warn: "var(--warn)",
      },
      fontFamily: {
        // Body + system text
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        // Engineer signature — labels, code, timestamps
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        // Editorial italic — hero verbs, section emphasis, big magazine-style moments
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        "ultra-tight": "-0.05em",
        "ultra-wide": "0.22em",
      },
      animation: {
        "marquee": "marquee 60s linear infinite",
        "marquee-reverse": "marquee-reverse 60s linear infinite",
        "blink": "blink 1.4s steps(2, end) infinite",
        "fade-in": "fade-in 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
