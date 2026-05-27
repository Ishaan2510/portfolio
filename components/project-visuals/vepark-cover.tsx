"use client";

// Architectural illustration for VePark.
// Shows the parking lot grid model with state indicators —
// occupied, available, reserved — referencing the actual schema.

export function VeParkCover() {
  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-full w-full cover-hover"
      preserveAspectRatio="xMidYMid slice"
      aria-label="VePark: parking lot grid showing concurrent reservation state"
    >
      <defs>
        <linearGradient id="vp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#13141a" />
          <stop offset="100%" stopColor="#0b0c10" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#vp-bg)" />

      {/* Top label */}
      <g>
        <text
          x="60"
          y="50"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          fill="#5a5a57"
          letterSpacing="2"
        >
          LOT / A-WING
        </text>
        <text
          x="60"
          y="50"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          letterSpacing="2"
        >
          <tspan x="120" fill="#a8a8a3">·</tspan>
          <tspan x="140" fill="#a8a8a3">CAPACITY 48</tspan>
          <tspan x="240" fill="#a8a8a3">·</tspan>
          <tspan x="260" fill="#a8a8a3">LIVE STATE</tspan>
        </text>
      </g>

      {/* Top-right caption */}
      <g>
        <text
          x="740"
          y="50"
          textAnchor="end"
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          fill="#5a5a57"
          letterSpacing="2"
        >
          ARCH / 03
        </text>
      </g>

      {/* Parking grid — 8 columns × 6 rows */}
      <g transform="translate(80, 110)">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => {
            const i = row * 8 + col;
            // Deterministic state map for visual rhythm
            const state =
              i % 7 === 0
                ? "reserved"
                : i % 5 === 1
                  ? "occupied"
                  : i % 3 === 0
                    ? "available"
                    : "available";
            const fills = {
              occupied: "#ff3d2e",
              reserved: "#fbbf24",
              available: "#1c1d22",
            };
            const strokes = {
              occupied: "#ff3d2e",
              reserved: "#fbbf24",
              available: "#2a2c33",
            };
            return (
              <g key={i} transform={`translate(${col * 80}, ${row * 45})`}>
                <rect
                  width="64"
                  height="32"
                  fill={fills[state as keyof typeof fills]}
                  fillOpacity={state === "available" ? 1 : 0.15}
                  stroke={strokes[state as keyof typeof strokes]}
                  strokeWidth="1"
                />
                <text
                  x="6"
                  y="13"
                  fontFamily="ui-monospace, monospace"
                  fontSize="8"
                  fill={state === "available" ? "#5a5a57" : strokes[state as keyof typeof strokes]}
                  letterSpacing="1"
                >
                  A{String(i + 1).padStart(2, "0")}
                </text>
                {state === "occupied" && (
                  <circle cx="56" cy="8" r="2" fill="#ff3d2e">
                    <animate
                      attributeName="opacity"
                      values="1;0.3;1"
                      dur="2s"
                      begin={`${(i * 0.1) % 2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })
        )}
      </g>

      {/* Legend */}
      <g transform="translate(80, 430)">
        {[
          { label: "AVAILABLE", color: "#1c1d22", stroke: "#2a2c33" },
          { label: "OCCUPIED", color: "#ff3d2e", stroke: "#ff3d2e" },
          { label: "RESERVED", color: "#fbbf24", stroke: "#fbbf24" },
        ].map((item, i) => (
          <g key={item.label} transform={`translate(${i * 180}, 0)`}>
            <rect
              width="14"
              height="10"
              fill={item.color}
              fillOpacity={item.color === "#1c1d22" ? 1 : 0.15}
              stroke={item.stroke}
              strokeWidth="1"
            />
            <text
              x="22"
              y="9"
              fontFamily="ui-monospace, monospace"
              fontSize="10"
              fill="#a8a8a3"
              letterSpacing="2"
            >
              {item.label}
            </text>
          </g>
        ))}
      </g>

      {/* SELECT FOR UPDATE indicator — a small inset showing the race-condition guard */}
      <g transform="translate(540, 430)">
        <text
          fontFamily="ui-monospace, monospace"
          fontSize="9"
          fill="#5a5a57"
          letterSpacing="2"
        >
          GUARD: SELECT FOR UPDATE
        </text>
      </g>
    </svg>
  );
}
