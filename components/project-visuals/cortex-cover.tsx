"use client";

/**
 * Cortex cover — atmospheric, not schematic.
 * Multiple soft gradient orbs (each LLM provider) drift inward toward a
 * bright convergence point representing the router. Painterly, not technical.
 */
export function CortexCover() {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-label="Cortex — task-aware LLM routing across four providers"
    >
      <defs>
        {/* Deep base */}
        <radialGradient id="cx-bg" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor="#16121c" />
          <stop offset="100%" stopColor="#08070b" />
        </radialGradient>

        {/* Provider orbs — each with its own emotional tone */}
        <radialGradient id="cx-groq" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff3d2e" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#ff3d2e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ff3d2e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cx-cerebras" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#7c4dff" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#7c4dff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cx-gemini" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#4dd4ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4dd4ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cx-openrouter" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffc857" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffc857" stopOpacity="0" />
        </radialGradient>

        {/* Bright convergence core */}
        <radialGradient id="cx-core" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="30%" stopColor="#ffe9e6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Subtle grain */}
        <filter id="cx-grain">
          <feTurbulence baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0"
          />
        </filter>
      </defs>

      {/* Base */}
      <rect width="800" height="600" fill="url(#cx-bg)" />

      {/* Orbs in motion — slow drift so the surface feels alive */}
      <g style={{ filter: "blur(1px)" }}>
        <circle cx="180" cy="160" r="200" fill="url(#cx-groq)">
          <animate
            attributeName="cx"
            values="180;200;180"
            dur="14s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="160;180;160"
            dur="11s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="620" cy="180" r="170" fill="url(#cx-cerebras)">
          <animate
            attributeName="cx"
            values="620;600;620"
            dur="16s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="180;200;180"
            dur="13s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="170" cy="440" r="180" fill="url(#cx-gemini)">
          <animate
            attributeName="cx"
            values="170;190;170"
            dur="13s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="640" cy="440" r="160" fill="url(#cx-openrouter)">
          <animate
            attributeName="cy"
            values="440;420;440"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* The convergence — a bright pulse at the center */}
      <circle cx="400" cy="300" r="120" fill="url(#cx-core)">
        <animate
          attributeName="r"
          values="110;135;110"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.85;1;0.85"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Hairline structure — barely visible directional lines */}
      <g stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none">
        <line x1="180" y1="160" x2="400" y2="300" />
        <line x1="620" y1="180" x2="400" y2="300" />
        <line x1="170" y1="440" x2="400" y2="300" />
        <line x1="640" y1="440" x2="400" y2="300" />
      </g>

      {/* Grain overlay */}
      <rect
        width="800"
        height="600"
        filter="url(#cx-grain)"
        opacity="0.6"
      />

      {/* Editorial caption */}
      <g
        fontFamily="ui-monospace, monospace"
        fontSize="10"
        letterSpacing="2"
      >
        <text x="32" y="40" fill="#a8a8a3">
          CORTEX / ROUTING
        </text>
        <text x="32" y="58" fill="#5a5a57">
          FOUR PROVIDERS · ONE INTENT
        </text>
        <text
          x="768"
          y="572"
          textAnchor="end"
          fill="#5a5a57"
        >
          01 — 2026
        </text>
      </g>
    </svg>
  );
}
