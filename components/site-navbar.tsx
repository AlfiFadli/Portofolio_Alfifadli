"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--neon-cyan)]/15 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-orbitron text-lg font-bold tracking-widest text-foreground"
        >
          AF<span className="text-[color:var(--neon-cyan)]">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-[color:var(--neon-cyan)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <a
            href="#contact"
            className="rounded-full border border-[color:var(--neon-cyan)]/50 bg-[color:var(--neon-cyan)]/10 px-4 py-1.5 text-sm font-medium text-[color:var(--neon-cyan)] shadow-[0_0_20px_-8px_var(--neon-cyan)] backdrop-blur-sm transition-colors hover:bg-[color:var(--neon-cyan)]/20"
          >
            Let&apos;s Talk
          </a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-[color:var(--neon-cyan)]/50 bg-[color:var(--neon-cyan)]/10 px-4 py-1.5 text-sm font-medium text-[color:var(--neon-cyan)] shadow-[0_0_20px_-8px_var(--neon-cyan)] backdrop-blur-sm transition-colors hover:bg-[color:var(--neon-cyan)]/20"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>
    </header>
  )
}
