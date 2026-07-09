import { GraduationCap, MapPin, Cpu, Code2, Globe, BookOpen, Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const facts = [
  { icon: GraduationCap, label: "Jurusan", value: "Teknik Informatika" },
  { icon: MapPin, label: "Kampus", value: "Univ. Duta Bangsa Surakarta" },
  { icon: Code2, label: "Fokus", value: ["Frontend Development", "Backend Development"] },
  { icon: Cpu, label: "Minat", value: "Intelligent System" },
  { icon: BookOpen, label: "Pembelajaran", value: ["AI & Automation", "Modern Web Tech"] },
  { icon: Briefcase, label: "Tujuan Karier", value: ["Fullstack Developer", "AI Engineer", "Software Engineer"] },
  { icon: Globe, label: "Bahasa", value: ["Indonesia", "English (Basic)"] },
  { icon: MapPin, label: "Alamat", value: "Tingkir Salatiga" },
]

export function AboutSection() {
  return (
    <section id="about" className="section-theme-about relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Perkenalan" title="Tentang Saya" />

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative">
          <div className="rounded-3xl border border-[color:var(--section-accent)]/20 bg-card/40 p-8 backdrop-blur-sm shadow-[0_0_72px_-32px_var(--section-accent)]">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              Halo! Saya <span className="font-medium text-foreground">Alfi Fadli</span>, mahasiswa Teknik Informatika di Universitas Duta Bangsa Surakarta yang memiliki minat besar dalam pengembangan frontend dan backend, serta eksplorasi teknologi <span className="text-[color:var(--neon-violet)]">Intelligent System</span>.
            </p>

            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Saya menikmati proses membangun aplikasi yang tidak hanya memiliki tampilan modern dan interaktif, tetapi juga didukung oleh sistem yang kuat, efisien, dan mampu memberikan solusi nyata. Ketertarikan saya terhadap teknologi mendorong saya untuk terus mempelajari berbagai hal baru, mulai dari pengembangan web, integrasi sistem, hingga penerapan konsep kecerdasan buatan dalam berbagai kebutuhan digital.
            </p>

            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Saya percaya bahwa teknologi akan terus berkembang, sehingga saya selalu berusaha meningkatkan kemampuan, mengeksplorasi tren terbaru, dan mengembangkan proyek yang inovatif serta berorientasi pada pengalaman pengguna. Dengan semangat belajar yang tinggi, saya ingin terus berkembang sebagai seorang developer yang mampu menggabungkan kreativitas, logika, dan teknologi untuk menciptakan solusi digital yang modern, profesional, dan futuristik.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="group rounded-2xl border border-border bg-card/30 p-5 backdrop-blur-sm transition-colors hover:border-[color:var(--neon-cyan)]/40"
            >
              <fact.icon className="mb-4 size-6 text-[color:var(--neon-cyan)]" />
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {Array.isArray(fact.value) ? (
                  fact.value.map((v, i) => (
                    <span key={i}>
                      {v}
                      {i < fact.value.length - 1 && <br />}
                    </span>
                  ))
                ) : (
                  fact.value
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
