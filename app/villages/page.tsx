import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TOTAL_SUB_VILLAGES, villages } from "@/lib/site"
import { Container, PageHero, SectionHeading } from "@/components/section"
import { FourVillagesCompass } from "@/components/four-villages"
import { Reveal, Stagger, StaggerItem } from "@/components/motion"
import { Mask } from "@/components/art"

export const metadata: Metadata = {
  title: "The Four Ancestral Villages of Nomeh",
  description: `Nomeh Unateze is founded upon four ancestral villages — Uhuafor Echichi Mkpuma Afor, Amigbo Alumangu, Ime-ama Mkpuma Onu and Amukabi NgeneAmaodu — with ${TOTAL_SUB_VILLAGES} recognized sub-villages and four village squares.`,
  alternates: { canonical: "/villages" },
}

export default function VillagesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Structure of Nomeh"
        title={
          <>
            The Four <span className="text-gold">Villages</span>
          </>
        }
        lead={`The traditional structure of Nomeh Unateze is founded upon four ancestral villages. Each has its own sub-villages and its own village square — together, ${TOTAL_SUB_VILLAGES} sub-villages and one people.`}
        art={<Mask className="h-56" />}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="lg:sticky lg:top-24">
            <FourVillagesCompass />
          </Reveal>
          <div className="space-y-6">
            {villages.map((v) => (
              <Reveal key={v.slug}>
                <article className="relative overflow-hidden rounded-3xl border bg-card p-6 sm:p-8">
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1.5" style={{ background: v.tone }} />
                  <div className="flex items-start gap-5">
                    <span aria-hidden className="font-heading text-6xl leading-none" style={{ color: v.tone }}>
                      {v.order}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{v.epithet}</p>
                      <h2 className="mt-1 text-2xl leading-tight font-semibold sm:text-3xl">
                        <Link href={`/villages/${v.slug}`} className="hover:text-primary">
                          {v.name}
                        </Link>
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {v.subVillages.length} sub-villages · Village square: <strong className="text-foreground">{v.square}</strong>
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Sub-villages of ${v.name}`}>
                    {v.subVillages.map((s) => (
                      <li key={s} className="rounded-full border bg-background px-3 py-1 text-sm">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/villages/${v.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Visit {v.shortName} <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Village Squares" title="Where each village gathers" />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {villages.map((v) => (
              <StaggerItem key={v.slug} className="rounded-3xl border bg-card p-6">
                <p className="text-sm text-muted-foreground">{v.shortName}</p>
                <p className="mt-2 font-heading text-2xl font-semibold" style={{ color: v.tone }}>
                  {v.square}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  )
}
