"use client";

// Architectural illustration for Pitlane Live.
// Shows a stylized F1 track segment with telemetry data overlay and live position markers.
// References the actual product: race replay + telemetry pipeline.

export function PitlaneCover() {
  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-full w-full cover-hover"
      preserveAspectRatio="xMidYMid slice"
      aria-label="Pitlane Live: F1 telemetry pipeline with live position markers"
    >
      <defs>
        <linearGradient id="pl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#161116" />
          <stop offset="100%" stopColor="#0d0a0d" />
        </linearGradient>
        <radialGradient id="pl-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ff3d2e" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff3d2e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#pl-bg)" />

      {/* Subtle radial accent behind the track */}
      <ellipse cx="400" cy="250" rx="350" ry="180" fill="url(#pl-glow)" opacity="0.5" />

      {/* Stylized track silhouette — a simplified circuit shape */}
      <g transform="translate(80, 100)" fill="none" stroke="#2a2c33" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 60 200 C 60 100, 160 60, 280 60 L 480 60 C 580 60, 640 120, 640 180 L 640 220 C 640 280, 580 320, 480 320 L 380 320 L 320 260 L 200 260 C 120 260, 60 280, 60 200 Z" />
      </g>

      {/* Track inner line (lighter for depth) */}
      <g transform="translate(80, 100)" fill="none" stroke="#1c1d22" strokeWidth="2" strokeDasharray="6 6">
        <path d="M 60 200 C 60 100, 160 60, 280 60 L 480 60 C 580 60, 640 120, 640 180 L 640 220 C 640 280, 580 320, 480 320 L 380 320 L 320 260 L 200 260 C 120 260, 60 280, 60 200 Z" />
      </g>

      {/* Sector markers — small white blocks */}
      {[
        { cx: 200, cy: 160 },
        { cx: 560, cy: 160 },
        { cx: 400, cy: 420 },
      ].map((m, i) => (
        <g key={i} transform={`translate(${m.cx}, ${m.cy})`}>
          <rect x="-1" y="-12" width="2" height="24" fill="#a8a8a3" />
          <text
            x="6"
            y="-6"
            fontFamily="ui-monospace, monospace"
            fontSize="9"
            fill="#5a5a57"
            letterSpacing="2"
          >
            S{i + 1}
          </text>
        </g>
      ))}

      {/* Car positions — pulsing red dots on the track */}
      <g>
        {/* Leader */}
        <circle cx="500" cy="160" r="6" fill="#ff3d2e">
          <animate attributeName="r" values="6;8;6" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="160" r="12" fill="none" stroke="#ff3d2e" strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="6;18;6" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="1.5s" repeatCount="indefinite" />
        </circle>
        {/* Chaser */}
        <circle cx="420" cy="160" r="4" fill="#f5f5f4" />
        {/* Pack */}
        <circle cx="160" cy="180" r="3" fill="#a8a8a3" />
        <circle cx="200" cy="345" r="3" fill="#a8a8a3" />
        <circle cx="560" cy="380" r="3" fill="#a8a8a3" />
      </g>

      {/* Top-right telemetry readout — magazine caption style */}
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
          ARCH / 02
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
          TELEMETRY PIPELINE
        </text>
      </g>

      {/* Bottom telemetry strip */}
      <g transform="translate(60, 450)">
        <text
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          fill="#5a5a57"
          letterSpacing="2"
        >
          <tspan x="0" dy="0">23 CIRCUITS</tspan>
          <tspan x="120" dy="0" fill="#a8a8a3">·</tspan>
          <tspan x="140" dy="0">SUB-SECOND INTERPOLATION</tspan>
          <tspan x="360" dy="0" fill="#a8a8a3">·</tspan>
          <tspan x="380" dy="0">SSE LIVE FEED</tspan>
        </text>
      </g>
    </svg>
  );
}
