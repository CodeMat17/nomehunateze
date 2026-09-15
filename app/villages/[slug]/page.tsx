import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SITE_URL, villages } from "@/lib/site"
import { Container, Eyebrow } from "@/components/section"
import { Reveal, Stagger, StaggerItem } from "@/components/motion"
import { UliSun } from "@/components/art"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const dynamicParams = false

export function generateStaticParams() {
  return villages.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata(props: PageProps<"/villages/[slug]">): Promise<Metadata> {
  const { slug } = await props.params
  const v = villages.find((x) => x.slug === slug)
  if (!v) return {}
  return {
    title: `${v.name} — One of the Four Villages of Nomeh`,
    description: `${v.summary} Sub-villages: ${v.subVillages.join(", ")}.`,
    alternates: { canonical: `/villages/${v.slug}` },
  }
}

export default async function VillagePage(props: PageProps<"/villages/[slug]">) {
  const { slug } = await props.params
  const index = villages.findIndex((x) => x.slug === slug)
  if (index < 0) notFound()
  const v = villages[index]
  const prev = villages[(index + 3) % 4]
  const next = villages[(index + 1) % 4]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: v.name,
    description: v.summary,
    url: `${SITE_URL}/villages/${v.slug}`,
    containedInPlace: { "@type": "Place", name: "Nomeh Unateze", url: SITE_URL },
    containsPlace: v.subVillages.map((name) => ({ "@type": "Place", name })),
  }

  const records = [
    ["History & founding lineage", "The history and ancestral lineage of this village are being gathered from elders and family records."],
    ["Traditional leadership", "Village heads, kindred leadership, chiefs and elders will be documented with community custodians."],
    ["Landmarks, streams & forests", "Sacred sites, streams, forests and farmlands of the village are being mapped."],
    ["Cultural practices", "Dances, masquerades, ceremonies and age-grade traditions particular to the village."],
    ["Notable people", "Sons and daughters who have shaped the village and Nomeh across generations."],
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <section className="relative overflow-hidden bg-uli text-nzu">
        <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(ellipse at 80% 30%, ${v.tone}, transparent 65%)` }} aria-hidden />
        <UliSun className="absolute -top-20 -right-32 w-[34rem] max-w-none text-gold/25" />
        <Container className="relative py-16 sm:py-24">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-nzu/75">
              <li><Link href="/" className="hover:text-gold">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/villages" className="hover:text-gold">Four Villages</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-nzu">{v.shortName}</li>
            </ol>
          </nav>
          <p className="mt-10 font-heading text-8xl leading-none text-gold/90 sm:text-9xl" aria-hidden>
            {v.order}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Ancestral village {v.order} of 4 · {v.epithet}
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl leading-[1] font-semibold tracking-tight sm:text-7xl">{v.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-nzu/80">{v.summary}</p>
          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-nzu/15 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-nzu/70">Sub-villages</dt>
              <dd className="font-heading text-4xl text-gold">{v.subVillages.length}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-nzu/70">Village square</dt>
              <dd className="font-heading text-3xl text-gold">{v.square}</dd>
            </div>
          </dl>
        </Container>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="subs">
        <Container>
          <Reveal>
            <Eyebrow>Sub-villages</Eyebrow>
            <h2 id="subs" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              The {v.subVillages.length} sub-villages of {v.shortName}
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {v.subVillages.map((s, i) => (
              <StaggerItem key={s} className="flex items-center gap-4 rounded-2xl border bg-card p-5">
                <span className="font-heading text-2xl" style={{ color: v.tone }} aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium">{s}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-secondary/60 py-20 sm:py-24" aria-labelledby="archive">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <Eyebrow>Village Archive</Eyebrow>
            <h2 id="archive" className="mt-4 text-4xl font-semibold tracking-tight">Help us write {v.shortName}&apos;s record</h2>
            <p className="mt-4 text-muted-foreground">
              These records are being built with elders and community custodians. Oral traditions are kept distinct
              from verified records.
            </p>
            <a
              href={`mailto:heritage@nomehunateze.com?subject=${encodeURIComponent(`Contribution: ${v.shortName}`)}`}
              className="mt-6 inline-flex min-h-11 items-center gap-2 font-medium text-primary hover:underline"
            >
              Contribute to this village <ArrowRight className="size-4" aria-hidden />
            </a>
          </Reveal>
          <Accordion className="rounded-3xl border bg-card px-6">
            {records.map(([title, text]) => (
              <AccordionItem key={title} value={title}>
                <AccordionTrigger className="min-h-14 items-center text-base">{title}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{text}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      <nav aria-label="Other villages" className="border-t">
        <Container className="grid grid-cols-2">
          <Link href={`/villages/${prev.slug}`} className="group flex min-h-24 flex-col justify-center gap-1 border-r py-6 pr-4">
            <span className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <ArrowLeft className="size-3" aria-hidden /> Previous
            </span>
            <span className="font-heading text-lg group-hover:text-primary sm:text-2xl">{prev.name}</span>
          </Link>
          <Link href={`/villages/${next.slug}`} className="group flex min-h-24 flex-col items-end justify-center gap-1 py-6 pl-4 text-right">
            <span className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Next <ArrowRight className="size-3" aria-hidden />
            </span>
            <span className="font-heading text-lg group-hover:text-primary sm:text-2xl">{next.name}</span>
          </Link>
        </Container>
      </nav>
    </>
  )
}
