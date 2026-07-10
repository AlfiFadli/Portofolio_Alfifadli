import { ArrowUpRight, Code2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const projects = [
  {
    title: "Website Kelurahan Desa Bedoyo",
    image: "/projects/kelurahan-bedoyo.png",
    url: "https://bedoyoberinovasi.my.id/",
    description:
      "Website ini merupakan personal portfolio berbasis React yang saya kembangkan untuk menampilkan kemampuan, pengalaman proyek, dan minat saya di bidang pengembangan web serta teknologi Intelligent System. Desain mengusung tema futuristik dengan dukungan animasi dan objek 3D agar memberikan kesan profesional dan modern. Website ini juga menerapkan konsep responsive design serta dark/light mode untuk meningkatkan kenyamanan pengguna.",
    tags: ["React", "Next.js", "Responsive"],
    accent: "var(--neon-green)",
  },
  {
    title: "Apotek Kampus Sehat Farma",
    image: "/projects/apotek-kampus-sehat-farma.png",
    url: "https://apotek-kampus-sehat-farma.vercel.app/",
    description:
      "Apotek Kampus Sehat Farma adalah aplikasi manajemen apotek berbasis web yang dirancang untuk mengelola data obat, stok, transaksi penjualan dan pembelian, supplier, serta laporan keuangan dengan sistem role Admin dan Kasir dalam antarmuka yang responsif dan modern.",
    tags: ["Next.js", "Tailwind", "Web App"],
    accent: "var(--neon-pink)",
  },
  {
    title: "Sistem Pemesanan Tiket Bioskop",
    image: "/projects/sistem-pemesanan-tiket.png",
    url: "http://localhost:8501",
    description:
      "Sistem Pemesanan Tiket Bioskop adalah aplikasi web untuk memilih film, menentukan jadwal tayang, mengatur jumlah tiket, melihat total harga otomatis, dan menyimpan riwayat pemesanan. Dibangun dengan HTML, CSS, dan JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "var(--neon-pink)",
  },
  {
    title: "Portfolio 3D Interaktif",
    description:
      "Website portfolio dengan scene 3D interaktif, animasi hologram, dan pengalaman visual futuristik berbasis React Three Fiber.",
    tags: ["React", "Three.js", "Tailwind"],
    accent: "var(--neon-violet)",
  },
  {
    title: "Weather Station IoT",
    description:
      "Stasiun cuaca berbasis sensor yang mengirim data suhu, kelembapan, dan tekanan udara ke dashboard web secara langsung.",
    tags: ["Arduino", "Sensor", "REST API"],
    accent: "var(--neon-blue)",
  },
  {
    title: "Task Manager App",
    description:
      "Aplikasi manajemen tugas dengan antarmuka bersih, dukungan drag-and-drop, dan sinkronisasi data secara real-time.",
    tags: ["React", "TypeScript", "MySQL"],
    accent: "var(--neon-cyan)",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-theme-projects relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Karya" title="Proyek Unggulan" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-3xl border border-[color:var(--section-accent)] bg-card/30 p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[color:var(--section-accent)]/40"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
              style={{ backgroundColor: project.accent }}
            />

            <div className="relative">
              {project.image && (
                <div className="mb-5">
                  <a href={project.url ?? '#'} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-2xl w-full max-h-48 object-cover"
                    />
                  </a>
                </div>
              )}
              <div className="mb-5 flex items-start justify-between gap-4">
                <h3 className="font-orbitron text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <div className="flex gap-2 text-muted-foreground">
                  <a
                    href="#"
                    aria-label={`Kode sumber ${project.title}`}
                    className="transition-colors hover:text-[color:var(--neon-cyan)]"
                  >
                    <Code2 className="size-5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`Lihat ${project.title}`}
                    className="transition-colors hover:text-[color:var(--neon-cyan)]"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                </div>
              </div>

              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {project.url && (
                <div className="mt-6">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[color:var(--neon-cyan)]/10 px-4 py-2 text-sm font-medium text-[color:var(--neon-cyan)] transition-colors hover:bg-[color:var(--neon-cyan)]/20"
                  >
                    Kunjungi Situs
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
