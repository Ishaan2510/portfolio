"use client";

/**
 * Pitlane Live cover — atmospheric F1 motion piece.
 * Soft red glow, flowing curves that suggest a circuit + motion trails,
 * fast-moving streaks. Painterly, not a diagrammatic track map.
 */
export function PitlaneCover() {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-label="Pitlane Live — F1 telemetry visualization"
    >
      <defs>
        <radialGradient id="pl-bg" cx="0.7" cy="0.3" r="0.9">
          <stop offset="0%" stopColor="#2a0d0a" />
          <stop offset="50%" stopColor="#140605" />
          <stop offset="100%" stopColor="#08070b" />
        </radialGradient>

        <radialGradient id="pl-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff3d2e" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ff3d2e" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ff3d2e" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="pl-trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff3d2e" stopOpacity="0" />
          <stop offset="60%" stopColor="#ff3d2e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="pl-curve" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff3d2e" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#ff3d2e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff3d2e" stopOpacity="0.05" />
        </linearGradient>

        <filter id="pl-grain">
          <feTurbulence baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0" />
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#pl-bg)" />

      {/* Background red glow — emotional weight upper right */}
      <ellipse
        cx="560"
        cy="200"
        rx="420"
        ry="280"
        fill="url(#pl-glow)"
        opacity="0.85"
      />

      {/* Flowing curve — abstract circuit suggestion */}
      <path
        d="M -50 380 C 150 200, 350 480, 500 320 S 750 200, 880 280"
        stroke="url(#pl-curve)"
        strokeWidth="80"
        fill="none"
        strokeLinecap="round"
        style={{ filter: "blur(8px)" }}
      />
      <path
        d="M -50 380 C 150 200, 350 480, 500 320 S 750 200, 880 280"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 12"
      />

      {/* Motion trail streaks — like camera-blur F1 photography */}
      <g opacity="0.85">
        <rect
          x="-100"
          y="240"
          width="300"
          height="2"
          fill="url(#pl-trail)"
        >
          <animate
            attributeName="x"
            values="-100;900"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="-100"
          y="350"
          width="200"
          height="1.5"
          fill="url(#pl-trail)"
          opacity="0.6"
        >
          <animate
            attributeName="x"
            values="-100;900"
            dur="4s"
            begin="0.8s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="-100"
          y="420"
          width="240"
          height="1.5"
          fill="url(#pl-trail)"
          opacity="0.5"
        >
          <animate
            attributeName="x"
            values="-100;900"
            dur="3.5s"
            begin="1.5s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      {/* The leader — a pulsing dot riding the curve */}
      <g>
        <circle cx="500" cy="320" r="6" fill="#ffffff">
          <animate
            attributeName="r"
            values="6;9;6"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="500"
          cy="320"
          r="6"
          fill="none"
          stroke="#ff3d2e"
          strokeWidth="1"
          opacity="0.6"
        >
          <animate
            attributeName="r"
            values="6;28;6"
            dur="1.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.8;0;0.8"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Grain */}
      <rect width="800" height="600" filter="url(#pl-grain)" opacity="0.7" />

      {/* Editorial caption */}
      <g
        fontFamily="ui-monospace, monospace"
        fontSize="10"
        letterSpacing="2"
      >
        <text x="32" y="40" fill="#a8a8a3">
          PITLANE LIVE / TELEMETRY
        </text>
        <text x="32" y="58" fill="#5a5a57">
          23 CIRCUITS · SUB-SECOND RESOLUTION
        </text>
        <text x="768" y="572" textAnchor="end" fill="#5a5a57">
          02 — 2025
        </text>
      </g>
    </svg>
  );
}
