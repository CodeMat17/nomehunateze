import type { Metadata } from "next"
import { Compass, Droplets, Mountain, Sprout, Trees } from "lucide-react"
import { neighbours } from "@/lib/site"
import { Container, PageHero, SectionHeading } from "@/components/section"
import { Reveal, Stagger, StaggerItem } from "@/components/motion"
import { Udu } from "@/components/art"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Our Land — The Nvuna River and Natural Heritage of Nomeh",
  description:
    "The land of Nomeh Unateze: the Nvuna River, streams, farmlands and level terrain of Nkanu East, bordered by Ugbawka, Mburubu, Oduma and Nenwe.",
  alternates: { canonical: "/our-land" },
}

const borders = [
  { dir: "North", name: "Ugbawka" },
  { dir: "East", name: "Mburubu" },
  { dir: "South", name: "Oduma" },
  { dir: "West", name: "Nenwe" },
]

export default function OurLandPage() {
  return (
    <>
      <PageHero
        eyebrow="Land & Natural Heritage"
        title={
          <>
            Our <span className="text-gold">Land</span>
          </>
        }
        lead="A predominantly level landscape, watered by the Nvuna River and its streams — land that has fed, sheltered and shaped the people of Nomeh for generations."
        art={<Udu className="h-56" />}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Our Neighbours"
            title="Where Nomeh stands"
            lead={`Nomeh Unateze shares its boundaries with ${neighbours.join(", ")} — communities bound to ours by land, movement and history.`}
          />
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute inset-[22%] grid place-items-center rounded-full bg-uli text-center text-nzu">
                <div>
                  <Compass className="mx-auto size-6 text-gold" aria-hidden />
                  <p className="mt-1 font-heading text-2xl">Nomeh</p>
                </div>
              </div>
              <ul>
                {borders.map((b) => (
                  <li
                    key={b.dir}
                    className={
                      {
                        North: "absolute top-0 left-1/2 -translate-x-1/2 text-center",
                        South: "absolute bottom-0 left-1/2 -translate-x-1/2 text-center",
                        East: "absolute top-1/2 right-0 -translate-y-1/2 text-right",
                        West: "absolute top-1/2 left-0 -translate-y-1/2",
                      }[b.dir]
                    }
                  >
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">{b.dir}</span>
                    <span className="font-heading text-xl font-semibold text-primary">{b.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-secondary/60 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Natural Heritage" title="Water, forest, farmland" />
          <Reveal className="mt-10">
            <Tabs defaultValue="water">
              <TabsList className="h-auto flex-wrap">
                <TabsTrigger value="water" className="min-h-11 px-4">Streams &amp; Rivers</TabsTrigger>
                <TabsTrigger value="farm" className="min-h-11 px-4">Farmlands</TabsTrigger>
                <TabsTrigger value="forest" className="min-h-11 px-4">Forests &amp; Features</TabsTrigger>
              </TabsList>
              <TabsContent value="water" className="mt-6">
                <Panel icon={<Droplets className="size-8 text-primary" aria-hidden />} title="The Nvuna River">
                  The Nvuna is the principal river of Nomeh, a source of drinking water and irrigation and of deposits of
                  building sand. Together with other streams and water bodies, it has shaped the life, work and
                  settlement of our people.
                </Panel>
              </TabsContent>
              <TabsContent value="farm" className="mt-6">
                <Panel icon={<Sprout className="size-8 text-primary" aria-hidden />} title="A farming people">
                  Agriculture is the traditional occupation of Nomeh. The level land supports farming through the year,
                  and the rhythms of planting and harvest are woven into our festivals and communal life.
                </Panel>
              </TabsContent>
              <TabsContent value="forest" className="mt-6">
                <Panel icon={<Trees className="size-8 text-primary" aria-hidden />} title="Forests, hills and sacred places">
                  The forests, streams and traditional sites of each village are being documented with elders — their
                  names, stories, significance and present condition — so that none is lost.
                </Panel>
              </TabsContent>
            </Tabs>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <Stagger className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Mountain, k: "Terrain", v: "Predominantly level" },
              { icon: Droplets, k: "Principal river", v: "Nvuna River" },
              { icon: Sprout, k: "Occupation", v: "Agriculture" },
            ].map(({ icon: Icon, k, v }) => (
              <StaggerItem key={k} className="rounded-3xl border bg-card p-6">
                <Icon className="size-6 text-primary" aria-hidden />
                <p className="mt-4 text-sm text-muted-foreground">{k}</p>
                <p className="font-heading text-2xl font-semibold">{v}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  )
}

function Panel({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border bg-card p-6 sm:flex-row sm:p-8">
      {icon}
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}
