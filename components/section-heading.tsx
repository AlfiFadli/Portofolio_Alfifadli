export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="section-heading mb-14 flex flex-col items-center text-center">
      <span className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--section-accent,var(--neon-cyan))]">
        {eyebrow}
      </span>
      <h2 className="font-orbitron text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[color:var(--section-accent,var(--neon-cyan))] to-transparent" />
    </div>
  )
}
