"use client";

export function TechRegCover() {
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-label="TechReg — F1 Regulations RAG: query vector matching retrieved chunks"
    >
      <defs>
        <radialGradient id="tr-bg" cx="0.5" cy="0.5" r="0.8">
          <stop offset="0%" stopColor="#101a36" />
          <stop offset="100%" stopColor="#070b1a" />
        </radialGradient>
        <radialGradient id="tr-pulse" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#3d6cff" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#3d6cff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3d6cff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tr-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3d6cff" stopOpacity="0" />
          <stop offset="50%" stopColor="#3d6cff" stopOpacity="1" />
          <stop offset="100%" stopColor="#f6ec74" stopOpacity="0.9" />
        </linearGradient>
        <filter id="tr-grain">
          <feTurbulence baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" />
        </filter>
      </defs>

      <rect width="800" height="600" fill="url(#tr-bg)" />

      <g transform="translate(60, 100)" opacity="0.85">
        {Array.from({ length: 14 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => {
            const i = row * 10 + col;
            const isMatch = [12, 13, 23, 34, 45, 56, 67, 78, 89, 100].includes(i);
            return (
              <rect
                key={i}
                x={col * 16}
                y={row * 24}
                width="11"
                height="2"
                fill={isMatch ? "#f6ec74" : "#2a3556"}
                opacity={isMatch ? 1 : 0.6}
              >
                {isMatch && (
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="3s"
                    begin={`${(i * 0.05) % 1.5}s`}
                    repeatCount="indefinite"
                  />
                )}
              </rect>
            );
          })
        )}
      </g>

      <g>
        <line x1="240" y1="300" x2="560" y2="300" stroke="url(#tr-line)" strokeWidth="1.5" />
        <circle cx="240" cy="300" r="12" fill="url(#tr-pulse)">
          <animate attributeName="cx" values="240;560;560" keyTimes="0;0.7;1" dur="4s" repeatCount="indefinite" />
          <animate attributeName="r" values="12;20;0" keyTimes="0;0.7;1" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>

      <g transform="translate(560, 140)">
        {[
          { y: 0, w: 180, opacity: 1 },
          { y: 12, w: 150, opacity: 0.7 },
          { y: 24, w: 170, opacity: 0.6 },
          { y: 60, w: 175, opacity: 1 },
          { y: 72, w: 130, opacity: 0.7 },
          { y: 84, w: 160, opacity: 0.6 },
          { y: 120, w: 160, opacity: 1 },
          { y: 132, w: 145, opacity: 0.7 },
          { y: 144, w: 175, opacity: 0.6 },
          { y: 180, w: 180, opacity: 1 },
          { y: 192, w: 155, opacity: 0.7 },
          { y: 204, w: 165, opacity: 0.6 },
          { y: 240, w: 170, opacity: 1 },
          { y: 252, w: 140, opacity: 0.7 },
          { y: 264, w: 160, opacity: 0.6 },
        ].map((chunk, i) => (
          <rect
            key={i}
            x="0"
            y={chunk.y}
            width={chunk.w}
            height="2"
            fill={chunk.opacity === 1 ? "#3d6cff" : "#9aa3bd"}
            opacity={chunk.opacity}
          >
            <animate
              attributeName="opacity"
              values={`0;${chunk.opacity};${chunk.opacity}`}
              keyTimes="0;0.5;1"
              dur="4s"
              begin={`${0.8 + i * 0.05}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>

      <g stroke="#f6ec74" strokeWidth="1" fill="none" opacity="0.7">
        <path d="M 555 138 L 555 162" />
        <path d="M 555 138 L 561 138" />
        <path d="M 555 162 L 561 162" />
        <path d="M 555 198 L 555 222" />
        <path d="M 555 198 L 561 198" />
        <path d="M 555 222 L 561 222" />
        <path d="M 555 318 L 555 342" />
        <path d="M 555 318 L 561 318" />
        <path d="M 555 342 L 561 342" />
      </g>

      <rect width="800" height="600" filter="url(#tr-grain)" opacity="0.6" />

      <g fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="2">
        <text x="32" y="40" fill="#9aa3bd">TECHREG / RETRIEVAL</text>
        <text x="32" y="58" fill="#565f7d">200+ PAGES · CITED CHUNKS</text>
        <text x="768" y="572" textAnchor="end" fill="#565f7d">03 — 2025</text>
      </g>
    </svg>
  );
}