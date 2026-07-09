"use client"

import dynamic from "next/dynamic"
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TechBadges } from "@/components/tech-badges"

const PlanetScene = dynamic(
  () => import("@/components/planet-scene").then((m) => m.PlanetScene),
  { ssr: false },
)

export function HeroSection() {
  return (
    <section
      id="home"
      className="section-theme-home relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background"
    >
      {/* Radial ambient glow behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 45%, color-mix(in oklab, var(--neon-blue) 22%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* 3D planet scene fills the hero */}
      <div className="absolute inset-0" aria-hidden>
        <PlanetScene />
        {/* Decorative tech badges around the 3D design */}
        <TechBadges />
      </div>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="animate-fade-up mb-6 rounded-full border border-[color:var(--neon-cyan)]/40 bg-background/40 px-4 py-1.5 text-xs font-medium tracking-widest text-[color:var(--neon-cyan)] uppercase backdrop-blur-sm">
          Universitas Duta Bangsa Surakarta
        </span>

        <h1
          className="font-orbitron animate-fade-up text-5xl font-bold tracking-tight text-balance text-foreground sm:text-6xl md:text-7xl"
          style={{
            textShadow:
              "0 0 24px color-mix(in oklab, var(--neon-cyan) 55%, transparent)",
            animationDelay: "0.1s",
          }}
        >
          Alfi Fadli
        </h1>

        <p
          className="animate-fade-up mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Mahasiswa Teknik Informatika{" "}
          <span className="text-[color:var(--neon-cyan)]">|</span> Frontend
          Developer <span className="text-[color:var(--neon-cyan)]">|</span> Intelligent
          System
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.35s" }}
        >
          <Button
            size="lg"
            className="group gap-2 border border-[color:var(--neon-cyan)]/60 bg-[color:var(--neon-cyan)]/15 text-[color:var(--neon-cyan)] shadow-[0_0_24px_-6px_var(--neon-cyan)] backdrop-blur-sm hover:bg-[color:var(--neon-cyan)]/25"
          >
            <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
            Download CV
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-[color:var(--neon-violet)]/60 bg-background/30 text-foreground shadow-[0_0_24px_-8px_var(--neon-violet)] backdrop-blur-sm hover:bg-[color:var(--neon-violet)]/15"
          >
            <Mail className="size-4" />
            Hubungi Saya
          </Button>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  )
}
