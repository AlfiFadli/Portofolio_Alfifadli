import { SectionHeading } from "@/components/section-heading"

const skillGroups = [
  {
    title: "Frontend Development",
    accent: "var(--neon-cyan)",
    status: "Aktif",
    desc: "Membangun antarmuka modern, interaktif, dan responsif dengan fokus pada pengalaman pengguna.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="18" rx="3" fill="currentColor" style={{ color: 'var(--neon-cyan)' }} />
        <path d="M7 9h10M7 12h10M7 15h6" stroke="#001" strokeWidth="0.6" opacity="0.12" />
      </svg>
    ),
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Framer Motion",
      "Responsive UI",
    ],
  },
  {
    title: "Backend Development",
    accent: "var(--neon-green)",
    status: "Berkembang",
    desc: "Mengembangkan layanan backend dan integrasi API untuk mendukung aplikasi web yang efisien.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor" style={{ color: 'var(--neon-green)' }} />
        <rect x="6" y="9" width="4" height="2" fill="#fff" opacity="0.12" />
        <rect x="14" y="9" width="4" height="2" fill="#fff" opacity="0.12" />
      </svg>
    ),
    skills: ["Laravel", "PHP Native", "Node.js", "Express.js", "REST API", "Authentication", "CRUD System", "JSON"],
  },
  {
    title: "Database & Cloud",
    accent: "var(--neon-blue)",
    status: "Eksplorasi",
    desc: "Mempelajari pengelolaan data, desain basis data, dan layanan cloud modern.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="7" rx="7" ry="2" fill="currentColor" style={{ color: 'var(--neon-blue)' }} />
        <path d="M5 7v6c0 1.1 3.13 2 7 2s7-.9 7-2V7" fill="currentColor" style={{ color: 'var(--neon-blue)' }} opacity="0.95" />
      </svg>
    ),
    skills: ["MySQL", "Supabase", "Firebase", "Database Design", "SQL Query", "Data Modeling", "Backup & Restore"],
  },
  {
    title: "Intelligent System & Automation",
    accent: "var(--neon-violet)",
    status: "Fokus",
    desc: "Tertarik pada penerapan kecerdasan buatan dan sistem otomatis untuk menyelesaikan permasalahan nyata.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="currentColor" style={{ color: 'var(--neon-violet)' }} />
        <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </svg>
    ),
    skills: ["Face Recognition", "OpenCV", "LBPH", "Computer Vision", "Automation System", "Intelligent System", "Pattern Recognition"],
  },
  {
    title: "IoT & Embedded",
    accent: "var(--neon-orange)",
    status: "Praktik",
    desc: "Membangun prototipe perangkat terhubung dan sistem monitoring berbasis mikrokontroler.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="10" rx="2" fill="currentColor" style={{ color: 'var(--neon-orange)' }} />
        <circle cx="8" cy="12" r="1" fill="#fff" opacity="0.12" />
      </svg>
    ),
    skills: ["ESP32", "ESP8266", "Arduino", "MQTT", "Blynk", "Sensor Integration", "C / C++"],
  },
  {
    title: "Tools & Workflow",
    accent: "var(--neon-cyan)",
    status: "Produktif",
    desc: "Menggunakan tools modern untuk pengembangan, desain antarmuka, pengujian API, dan kolaborasi proyek.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--neon-cyan)' }} />
      </svg>
    ),
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Linux", "Docker", "Vite"],
  },
]

const currentlyLearning = ["Docker", "Prisma ORM", "Redis", "gRPC", "Three.js", "React Native"]

export function SkillsSection() {
  return (
    <section id="skills" className="section-theme-skills relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Kemampuan" title="Skills & Teknologi" />

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <div
            key={group.title}
            className="rounded-2xl border border-[color:var(--section-accent)]/20 bg-card/30 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
            style={{ boxShadow: `0 0 60px -30px var(--section-accent)` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="size-9 flex items-center justify-center rounded-md bg-background/30 p-1" style={{ color: 'inherit' }}>
                  {group.icon ?? (
                    <span className="inline-block h-2.5 w-2.5 rounded" style={{ backgroundColor: group.accent }} />
                  )}
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold text-foreground">{group.title}</h4>
                  <p className="text-sm text-muted-foreground">{group.desc}</p>
                </div>
              </div>

              <div className="ml-4 shrink-0">
                <span className="inline-block whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium text-foreground" style={{ backgroundColor: `color-mix(in oklab, ${group.accent} 8%, transparent)` }}>
                  {group.status}
                </span>
              </div>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Currently Learning */}
      <div className="mt-12 rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-sm animate-pulse-glow">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-foreground">Currently Learning</h4>
            <p className="mt-1 text-sm text-muted-foreground">Teknologi yang sedang saya pelajari untuk memperluas kemampuan pengembangan aplikasi modern.</p>
          </div>
          <span className="inline-flex items-center rounded-full bg-[color:var(--neon-cyan)]/10 px-3 py-1 text-xs font-medium text-[color:var(--neon-cyan)]">Always Growing</span>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {currentlyLearning.map((t, i) => (
            <li
              key={t}
              className={`inline-flex rounded-full border px-3 py-1 text-xs text-[color:var(--section-accent)] bg-[color:var(--section-accent)]/10 border-[color:var(--section-accent)] neon-tag animate-walk`}
              style={{ animationDelay: `${i * 160}ms` }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
