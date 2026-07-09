import Image from "next/image"
import { Mail } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { ProfileAvatar3D } from "@/components/profile-avatar-3d"
import { Button } from "@/components/ui/button"

const socials = [
  {
    label: "Instagram",
    handle: "@alpfdl._",
    href: "https://instagram.com/alpfdl._",
    logo: "/logos/instagram.svg",
    invert: false,
  },
  {
    label: "TikTok",
    handle: "@alpfdl_",
    href: "https://tiktok.com/@alpfdl_",
    logo: "/logos/tiktok.svg",
    invert: false,
  },
  {
    label: "WhatsApp",
    handle: "+62 896-3299-0607",
    href: "https://wa.me/6289632990607",
    logo: "/logos/whatsapp.svg",
    invert: false,
  },
  {
    label: "GitHub",
    handle: "AlfiFadli",
    href: "https://github.com/AlfiFadli",
    logo: "/logos/github.svg",
    invert: true,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="section-theme-contact relative mx-auto max-w-4xl px-6 py-28">
      <SectionHeading eyebrow="Kontak" title="Mari Terhubung" />

      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--section-accent)]/20 bg-card/40 p-8 text-center backdrop-blur-sm shadow-[0_0_80px_-40px_var(--section-accent)] sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, color-mix(in oklab, var(--neon-cyan) 12%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="relative">
          <ProfileAvatar3D />
          <h3 className="mb-1 font-orbitron text-xl text-foreground">Alfi Fadli</h3>
          <p className="mb-6 text-sm text-[color:var(--neon-cyan)]/80">
            Frontend Developer &amp; Intelligent System
          </p>
          <p className="mx-auto max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Punya proyek menarik atau ingin berkolaborasi? Jangan ragu untuk
            menghubungi saya. Saya selalu terbuka untuk peluang dan diskusi baru.
          </p>

          <Button
            size="lg"
            className="group mt-8 gap-2 whitespace-nowrap border border-[color:var(--neon-cyan)]/60 bg-[color:var(--neon-cyan)]/15 text-[color:var(--neon-cyan)] shadow-[0_0_24px_-6px_var(--neon-cyan)] hover:bg-[color:var(--neon-cyan)]/25"
            asChild
          >
            <a href="mailto:alfifadli@example.com">
              <Mail className="size-4" />
              Kirim Email
            </a>
          </Button>

          <div className="mt-10">
            <p className="mb-5 font-orbitron text-xs uppercase tracking-[0.3em] text-[color:var(--neon-cyan)]/80">
              Media Sosial
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label}: ${social.handle}`}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-background/40 px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-[color:var(--neon-cyan)]/50 hover:bg-background/70 hover:shadow-[0_0_24px_-10px_var(--neon-cyan)]"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60">
                    <Image
                      src={social.logo || "/placeholder.svg"}
                      alt={`Logo ${social.label}`}
                      width={22}
                      height={22}
                      className={social.invert ? "invert" : ""}
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-foreground">
                      {social.label}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {social.handle}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>
          Dibuat dengan{" "}
          <span className="text-[color:var(--neon-cyan)]">Next.js</span> &{" "}
          <span className="text-[color:var(--neon-violet)]">Three.js</span> ·
          &copy; {new Date().getFullYear()} Alfi Fadli
        </p>
      </footer>
    </section>
  )
}
