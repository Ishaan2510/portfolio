"use client";

// Architectural illustration for Cortex.
// Shows the task-aware routing layer: input → router → provider chain with fallback.
// Designed to feel like an editorial systems diagram, not a generic graphic.

export function CortexCover() {
  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-full w-full cover-hover"
      preserveAspectRatio="xMidYMid slice"
      aria-label="Cortex architecture: task-aware LLM routing across four providers"
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="cortex-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1b22" />
          <stop offset="100%" stopColor="#0e0f13" />
        </linearGradient>
        <linearGradient id="cortex-pulse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff3d2e" stopOpacity="0" />
          <stop offset="50%" stopColor="#ff3d2e" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ff3d2e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#cortex-bg)" />

      {/* Subtle grid */}
      <g stroke="#1c1d22" strokeWidth="1" opacity="0.6">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 80} y1="0" x2={i * 80} y2="500" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 80} x2="800" y2={i * 80} />
        ))}
      </g>

      {/* Input node — left */}
      <g transform="translate(60, 230)">
        <rect width="140" height="40" rx="2" fill="#16171b" stroke="#2a2c33" />
        <text
          x="70"
          y="25"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
          fill="#a8a8a3"
          letterSpacing="2"
        >
          INPUT / TASK
        </text>
      </g>

      {/* Router node — center, slightly emphasized */}
      <g transform="translate(330, 215)">
        <rect width="140" height="70" rx="2" fill="#16171b" stroke="#ff3d2e" strokeWidth="1" />
        <text
          x="70"
          y="30"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="11"
          fill="#ff3d2e"
          letterSpacing="2"
        >
          ROUTER
        </text>
        <text
          x="70"
          y="50"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="9"
          fill="#5a5a57"
          letterSpacing="1.5"
        >
          /task-aware
        </text>
      </g>

      {/* Provider nodes — right column, stacked */}
      {[
        { label: "GROQ", y: 90, primary: true },
        { label: "CEREBRAS", y: 175, primary: false },
        { label: "GEMINI", y: 260, primary: false },
        { label: "OPENROUTER", y: 345, primary: false },
      ].map((p) => (
        <g key={p.label} transform={`translate(600, ${p.y})`}>
          <rect
            width="140"
            height="40"
            rx="2"
            fill="#16171b"
            stroke={p.primary ? "#f5f5f4" : "#2a2c33"}
          />
          <text
            x="70"
            y="25"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
            fontSize="11"
            fill={p.primary ? "#f5f5f4" : "#a8a8a3"}
            letterSpacing="2"
          >
            {p.label}
          </text>
          {/* Status dot */}
          <circle
            cx="125"
            cy="20"
            r="2"
            fill={p.primary ? "#4ade80" : "#5a5a57"}
          />
        </g>
      ))}

      {/* Connection lines: input → router */}
      <line x1="200" y1="250" x2="330" y2="250" stroke="#2a2c33" strokeWidth="1" />

      {/* Connection lines: router → providers */}
      {[110, 195, 280, 365].map((y, i) => (
        <path
          key={i}
          d={`M 470 250 L 535 250 L 535 ${y} L 600 ${y}`}
          stroke={i === 0 ? "#ff3d2e" : "#2a2c33"}
          strokeWidth="1"
          fill="none"
          strokeDasharray={i === 0 ? "0" : "3 3"}
          opacity={i === 0 ? 0.9 : 0.5}
        />
      ))}

      {/* Animated pulse along the primary path */}
      <rect x="470" y="249.5" width="65" height="1" fill="url(#cortex-pulse)">
        <animate
          attributeName="x"
          values="200;540"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Top-right caption */}
      <g>
        <text
          x="740"
          y="40"
          textAnchor="end"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          fill="#5a5a57"
          letterSpacing="2"
        >
          ARCH / 01
        </text>
        <text
          x="740"
          y="58"
          textAnchor="end"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          fill="#a8a8a3"
          letterSpacing="2"
        >
          MULTI-PROVIDER ROUTING
        </text>
      </g>

      {/* Bottom-left caption */}
      <g>
        <text
          x="60"
          y="460"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          fill="#5a5a57"
          letterSpacing="2"
        >
          FALLBACK CHAIN · RATE-LIMIT-AWARE
        </text>
      </g>
    </svg>
  );
}
