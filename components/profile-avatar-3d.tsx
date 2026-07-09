"use client"

import Image from "next/image"
import { useRef, useState } from "react"

export function ProfileAvatar3D() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    // rotateX follows vertical, rotateY follows horizontal
    setTilt({ rx: -py * 18, ry: px * 18 })
  }

  function handleLeave() {
    setTilt({ rx: 0, ry: 0 })
  }

  return (
    <div className="mx-auto mb-8 flex justify-center" style={{ perspective: "900px" }}>
      <div
        ref={wrapRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative animate-avatar-float"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.25s ease-out",
        }}
      >
        {/* Outer rotating gradient glow ring */}
        <div
          aria-hidden
          className="absolute -inset-3 animate-spin-slow rounded-full opacity-70 blur-md"
          style={{
            background:
              "conic-gradient(from 0deg, var(--neon-cyan), var(--neon-violet), var(--neon-blue), var(--neon-cyan))",
            transform: "translateZ(-40px)",
          }}
        />

        {/* Thin neon border ring */}
        <div
          aria-hidden
          className="absolute -inset-1 rounded-full"
          style={{
            background:
              "conic-gradient(from 180deg, color-mix(in oklab, var(--neon-cyan) 90%, transparent), color-mix(in oklab, var(--neon-violet) 90%, transparent), color-mix(in oklab, var(--neon-blue) 90%, transparent), color-mix(in oklab, var(--neon-cyan) 90%, transparent))",
            transform: "translateZ(10px)",
          }}
        />

        {/* Photo disc */}
        <div
          className="relative size-40 overflow-hidden rounded-full border border-background/40 shadow-[0_0_60px_-10px_var(--neon-blue)] sm:size-44"
          style={{ transform: "translateZ(30px)" }}
        >
          <Image
            src="/profil.png"
            alt="Foto profil Alfi Fadli"
            fill
            sizes="176px"
            className="scale-[2] object-cover object-[center_46%]"
            priority
          />
          {/* Tone overlay to blend red bg into theme */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-color"
            style={{
              background:
                "radial-gradient(70% 70% at 50% 40%, transparent 55%, color-mix(in oklab, var(--neon-blue) 85%, transparent) 100%)",
            }}
          />
          {/* Glossy highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(140deg, color-mix(in oklab, white 30%, transparent) 0%, transparent 42%)",
            }}
          />
        </div>

        {/* Floating holographic dots */}
        <span
          aria-hidden
          className="absolute -right-2 top-6 size-2 rounded-full bg-[color:var(--neon-cyan)] shadow-[0_0_12px_2px_var(--neon-cyan)]"
          style={{ transform: "translateZ(60px)" }}
        />
        <span
          aria-hidden
          className="absolute -left-1 bottom-8 size-1.5 rounded-full bg-[color:var(--neon-violet)] shadow-[0_0_12px_2px_var(--neon-violet)]"
          style={{ transform: "translateZ(50px)" }}
        />
      </div>
    </div>
  )
}
