import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SITE_URL, villages } from "@/lib/site"
import { Container, Eyebrow } from "@/components/section"
import { Reveal, Stagger, StaggerItem } from "@/components/motion"
import { photos } from "@/lib/images"
import { EmergingPhoto } from "@/components/emerging-photo"

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <section className="relative isolate overflow-hidden bg-uli text-nzu">
        <EmergingPhoto photo={photos.landAerial} priority className="h-[46svh] max-h-[26rem] lg:w-[56%]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light"
          style={{ background: `radial-gradient(ellipse at 80% 30%, ${v.tone}, transparent 65%)` }}
          aria-hidden
        />
        <div className="noise pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden />
        <Container className="relative pt-8 pb-16 sm:pb-24 lg:py-24">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-nzu/75">
              <li><Link href="/" className="hover:text-gold">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/villages" className="hover:text-gold">Four Villages</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-nzu">{v.shortName}</li>
            </ol>
          </nav>
          <p className="text-bronze mt-[24svh] font-heading text-8xl leading-none font-medium italic sm:text-9xl lg:mt-10" aria-hidden>
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
