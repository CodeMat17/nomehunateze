import { cn } from "@/lib/utils"
import type { Photo } from "@/lib/images"
import { Reveal } from "@/components/motion"
import { EmergingPhoto } from "@/components/emerging-photo"

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
      <Tag className="mt-5 text-4xl leading-[1.08] font-medium tracking-[-0.03em] sm:text-5xl">{title}</Tag>
      {lead && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{lead}</p>}
    </Reveal>
  )
}

export function PageHero({
  eyebrow,
  title,
  lead,
  photo,
  position,
}: {
  eyebrow: string
  title: React.ReactNode
  lead: React.ReactNode
  photo: Photo
  position?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-uli text-nzu">
      <EmergingPhoto photo={photo} priority position={position} className="h-[52svh] max-h-[30rem] lg:w-[58%]" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden />
      <div className="relative mx-auto flex min-h-[36rem] max-w-7xl flex-col justify-end px-4 pt-[34svh] pb-14 sm:px-6 lg:min-h-[40rem] lg:justify-center lg:py-28">
        <div className="max-w-2xl">
          <p className="rise flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.4em] text-gold">
            <span aria-hidden className="h-px w-10 bg-linear-to-r from-transparent to-gold" />
            {eyebrow}
          </p>
          <h1 className="rise mt-5 text-[clamp(2.9rem,11vw,5.5rem)] leading-[0.95] font-medium tracking-[-0.04em] [animation-delay:120ms]">
            {title}
          </h1>
          <p className="rise mt-6 max-w-xl text-base leading-relaxed text-nzu/80 [animation-delay:240ms] sm:text-lg">
            {lead}
          </p>
        </div>
      </div>
    </section>
  )
}

export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-7xl px-4 sm:px-6", className)}>{children}</div>
}
