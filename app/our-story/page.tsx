import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TOTAL_SUB_VILLAGES } from "@/lib/site"
import { Container, Eyebrow, PageHero } from "@/components/section"
import { Reveal } from "@/components/motion"
import { Ikenga } from "@/components/art"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Our Story — From Ogugu-Eze to the Four Villages of Nomeh",
  description:
    "The history of Nomeh Unateze: the ancestral journey from Ogugu-Eze in Awgu, settlement in Nkanu East, and the formation of the four ancestral villages and 37 sub-villages.",
  alternates: { canonical: "/our-story" },
}

const timeline = [
  {
    era: "Ancestral homeland",
    title: "Ogugu-Eze",
    text: "Traditionally remembered as part of Ogwugwu in Agbaogugu, in present-day Awgu LGA — the homeland from which the journey began.",
    kind: "Oral tradition, supported by historical writings",
  },
  {
    era: "The journey",
    title: "Migration and movement",
    text: "Remembered through ancestral names, family histories and movement through different places before new settlements were established.",
    kind: "Oral tradition",
  },
  {
    era: "Settlement",
    title: "The beginning of a people",
    text: "Our forebears established themselves in their present territory. Families and kindreds grew, farmlands were cultivated and traditions preserved.",
    kind: "Oral tradition",
  },
  {
    era: "Formation",
    title: "Four ancestral villages",
    text: `Over generations the distinctive traditional organization of Nomeh took shape — four ancestral villages and ${TOTAL_SUB_VILLAGES} recognized sub-villages.`,
    kind: "Community record",
  },
  {
    era: "Today",
    title: "Nomeh at home and abroad",
    text: "A community shaped by ancestry, land, water, agriculture, tradition and the continuing bonds of its people at home and in the wider world.",
    kind: "Community record",
  },
]

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            From <span className="text-gold">Ogugu-Eze</span>
          </>
        }
        lead="The ancestral journey of Nomeh Unateze — a story of migration and settlement, and of how a people transformed a new homeland into a community with its own identity, institutions and traditions."
        art={<Ikenga className="h-64" />}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <Eyebrow>Nomeh Unateze at a Glance</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">An ancient Igbo community</h2>
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed">
            <Reveal>
              <p>
                Nomeh Unateze is an ancient Igbo community in Nkanu East Local Government Area of Enugu State, Nigeria.
                It lies in a predominantly level landscape and shares boundaries with Nenwe, Oduma, Mburubu and
                Ugbawka. Its geographical setting has historically supported settlement, farming and movement between
                neighbouring communities.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-muted-foreground">
                From its ancestral origins to its present-day communities, Nomeh has developed a distinctive social and
                traditional identity, preserved through its villages, lineages, customs, institutions and communal life.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-20 sm:py-24" aria-labelledby="timeline">
        <Container>
          <Reveal>
            <Eyebrow>Timeline</Eyebrow>
            <h2 id="timeline" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">The journey of Nomeh</h2>
          </Reveal>
          <ol className="relative mt-14 space-y-12 border-l-2 border-primary/30 pl-8 sm:ml-4 sm:pl-12">
            {timeline.map((t, i) => (
              <li key={t.title} className="relative">
                <span
                  aria-hidden
                  className="absolute top-1 -left-[2.6rem] grid size-5 place-items-center rounded-full border-2 border-primary bg-background sm:-left-[3.6rem]"
                >
                  <span className="size-2 rounded-full bg-primary" />
                </span>
                <Reveal delay={i * 0.03}>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{t.era}</p>
                  <h3 className="mt-2 text-3xl font-semibold">{t.title}</h3>
                  <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.text}</p>
                  <Badge variant="outline" className="mt-4">{t.kind}</Badge>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>A note on sources</Eyebrow>
            <p className="mt-5 text-lg leading-relaxed">
              The detailed genealogy and the different stages of the migration remain matters best preserved through
              community memory and further documentation. This history records Ogugu-Eze as the principal ancestral
              origin of Nomeh without forcing every detail of the journey into a single version where further evidence
              may yet emerge.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/villages" className="inline-flex min-h-11 items-center gap-2 font-medium text-primary hover:underline">
                Meet the four villages <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 font-medium text-primary hover:underline">
                Read the blog <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
