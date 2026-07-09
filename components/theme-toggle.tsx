"use client"

import { useEffect, useState } from "react"
import { Moon, SunMedium } from "lucide-react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = storedTheme === "dark" || (!storedTheme && prefersDark) ? "dark" : "light"

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    window.localStorage.setItem("theme", nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Ubah tema"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-[0_0_18px_-8px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:bg-background/95 hover:shadow-[0_0_24px_-8px_rgba(0,0,0,0.2)] dark:border-[color:var(--neon-cyan)]/30 dark:bg-background/40"
      title={theme === "dark" ? "Beralih ke tema terang" : "Beralih ke tema gelap"}
    >
      {theme === "dark" ? (
        <SunMedium className="size-5 text-[color:var(--neon-cyan)]" />
      ) : (
        <Moon className="size-5 text-[color:var(--neon-cyan)]" />
      )}
    </button>
  )
}
