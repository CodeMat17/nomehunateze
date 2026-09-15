import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion"

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary", className)}>
      <span aria-hidden className="h-px w-8 bg-current" />
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
      <Tag className="mt-4 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">{title}</Tag>
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
      <div className="uli-texture absolute inset-0 opacity-[0.06]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.46_0.09_195/35%),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_auto] md:py-28">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <span aria-hidden className="h-px w-8 bg-current" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-5xl leading-[1] font-semibold tracking-tight sm:text-6xl md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-nzu/80">{lead}</p>
        </div>
        {art && <div className="hidden text-gold/80 md:block">{art}</div>}
      </div>
    </section>
  )
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-7xl px-4 sm:px-6", className)}>{children}</div>
}
