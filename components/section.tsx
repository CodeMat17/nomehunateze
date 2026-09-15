import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion"

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-primary", className)}>
      <span aria-hidden className="h-px w-10 bg-linear-to-r from-transparent to-current" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
  as: Tag = "h2",
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: React.ReactNode
  className?: string
  as?: "h1" | "h2"
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Tag className="mt-5 text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl">{title}</Tag>
      {lead && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{lead}</p>}
    </Reveal>
  )
}

export function PageHero({
  eyebrow,
  title,
  lead,
  art,
}: {
  eyebrow: string
  title: React.ReactNode
  lead: React.ReactNode
  art?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-uli text-nzu">
      <div className="uli-texture absolute inset-0 opacity-[0.035]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.46_0.09_195/35%),transparent_60%),radial-gradient(ellipse_40%_40%_at_0%_100%,oklch(0.8_0.12_55/10%),transparent_70%)]" aria-hidden />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 md:grid-cols-[1fr_auto] md:py-32">
        <div className="max-w-3xl">
          <p className="flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-gold">
            <span aria-hidden className="h-px w-12 bg-linear-to-r from-transparent to-gold" />
            {eyebrow}
          </p>
          <h1 className="mt-6 text-5xl leading-none font-bold tracking-[-0.035em] sm:text-6xl md:text-7xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed font-light text-nzu/80">{lead}</p>
        </div>
        {art && <div className="hidden text-gold/80 md:block">{art}</div>}
      </div>
    </section>
  )
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-7xl px-4 sm:px-6", className)}>{children}</div>
}
