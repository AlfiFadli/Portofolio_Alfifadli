"use client"

export function TechBadges() {
  const badges = [
    { key: "node", title: "Node.js", svg: (
      <svg viewBox="0 0 128 128" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3C873A" d="M64 4l52 30v60L64 124 12 94V34z"/>
        <text x="64" y="76" fontSize="28" textAnchor="middle" fill="white" fontFamily="Arial">Node</text>
      </svg>
    )},
    { key: "next", title: "Next.js", svg: (
      <svg viewBox="0 0 64 64" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="8" fill="#000" />
        <text x="32" y="40" fontSize="26" textAnchor="middle" fill="white" fontFamily="Arial">N</text>
      </svg>
    )},
    { key: "github", title: "GitHub", svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
        <path fill="#181717" d="M12 .5C5.73.5.92 5.31.92 11.6c0 4.7 3.04 8.67 7.26 10.07.53.1.72-.23.72-.51 0-.25-.01-.92-.01-1.8-2.95.64-3.57-1.28-3.57-1.28-.48-1.23-1.17-1.56-1.17-1.56-.96-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.95 1.62 2.5 1.15 3.11.88.1-.69.37-1.15.67-1.41-2.35-.27-4.82-1.18-4.82-5.26 0-1.16.41-2.1 1.08-2.84-.11-.27-.47-1.36.1-2.84 0 0 .87-.28 2.85 1.08a9.84 9.84 0 012.6-.35c.88 0 1.77.12 2.6.35 1.98-1.36 2.85-1.08 2.85-1.08.57 1.48.21 2.57.1 2.84.67.74 1.08 1.68 1.08 2.84 0 4.09-2.48 4.98-4.84 5.25.38.34.72 1 .72 2.02 0 1.46-.01 2.64-.01 3 0 .28.19.62.73.51 4.23-1.41 7.26-5.38 7.26-10.07C23.08 5.31 18.27.5 12 .5z"/>
      </svg>
    )},
    { key: "figma", title: "Figma", svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="3" y="3" width="6" height="6" rx="3" fill="#F24E1E" />
          <rect x="3" y="9" width="6" height="6" rx="3" fill="#A259FF" />
          <rect x="9" y="3" width="6" height="6" rx="3" fill="#FF7262" />
          <rect x="9" y="9" width="6" height="6" rx="3" fill="#1ABCFE" />
        </g>
      </svg>
    )},
    { key: "vscode", title: "VSCode", svg: (
      <svg viewBox="0 0 64 64" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="8" fill="#007ACC" />
        <path d="M20 16 L44 32 L20 48 V16 Z" fill="#fff" opacity="0.9" />
      </svg>
    )},
    { key: "flutter", title: "Flutter", svg: (
      <svg viewBox="0 0 24 24" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
        <path fill="#02569B" d="M3 12l9-9 4 4-9 9z" />
        <path fill="#42A5F5" d="M14 3l7 7-7 7-4-4 7-7z" />
      </svg>
    )},
    { key: "arduino", title: "Arduino", svg: (
      <svg viewBox="0 0 24 24" width="34" height="34" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="12" r="2.5" fill="#00979D" />
        <circle cx="18" cy="12" r="2.5" fill="#00979D" />
        <path d="M6 12h12" stroke="#00979D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )},
  ]

  const positions = [
    { top: "18%", left: "12%" },
    { top: "8%", right: "12%" },
    { top: "50%", left: "6%" },
    { bottom: "18%", left: "10%" },
    { bottom: "12%", right: "14%" },
    { top: "36%", right: "6%" },
    { bottom: "28%", left: "50%" },
  ]

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {badges.map((b, i) => (
        <div
          key={b.key}
          title={b.title}
          style={{ position: "absolute", ...(positions[i] || { top: "10%", left: "10%" }) }}
          className="flex items-center justify-center rounded-full bg-background/70 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm"
        >
          {b.svg}
        </div>
      ))}
    </div>
  )
}
