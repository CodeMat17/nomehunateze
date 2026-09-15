import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Droplets, MapPin, Sprout, Users } from "lucide-react"
import { atAGlance, marketDays, neighbours, TOTAL_SUB_VILLAGES, villages } from "@/lib/site"
import { Ikenga, Mask, Ogene, Okwa, Udu, UliBand } from "@/components/art"
import { FourVillagesCompass } from "@/components/four-villages"
import { Container, Eyebrow, SectionHeading } from "@/components/section"
import { Reveal, Stagger, StaggerItem } from "@/components/motion"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden bg-uli text-nzu">
        <div className="uli-texture absolute inset-0 opacity-[0.05]" aria-hidden />
        <div
          className="ember absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,oklch(0.46_0.09_195/45%),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 lg:grid-cols-2">
          <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            <span aria-hidden className="h-px w-10 bg-current" />
            Nkanu East · Enugu State
          </p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.8rem,10vw,7rem)] leading-[0.9]  font-black tracking-tight">
            Nomeh
            <span className="block text-gold">Unateze</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-nzu/85 sm:text-xl">
            One people. <strong className="font-semibold text-nzu">Four ancestral villages.</strong>{" "}
            {TOTAL_SUB_VILLAGES} sub-villages. The living story of an ancient Igbo community — from the journey out of
            Ogugu-Eze to the banks of the Nvuna River.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/villages"
              className={cn(
                buttonVariants(),
                "h-12 rounded-full bg-gold px-7 text-base text-uli hover:bg-nzu"
              )}
            >
              Explore the Four Villages <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/our-story"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-full border-nzu/30 bg-transparent px-7 text-base text-nzu hover:bg-nzu/10 hover:text-nzu dark:bg-transparent"
              )}
            >
              Read Our Story
            </Link>
          </div>


          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-nzu/15 pt-8">
            {[
              ["4", "Ancestral villages"],
              [String(TOTAL_SUB_VILLAGES), "Sub-villages"],
              ["1", "People"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-[0.2em] text-nzu/70">{label}</dt>
                <dd className="mt-1 font-heading text-4xl text-gold sm:text-5xl">{n}</dd>
              </div>
            ))}
          </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/hero-img-2.webp"
              alt="Nomeh Unateze"
              width={500}
              height={500}
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="h-auto w-full max-w-sm rounded-3xl shadow-2xl lg:max-w-md"
            />
          </div>
        </Container>
        <UliBand className="relative h-5 w-full text-gold/50" />
      </section>

      {/* ---------- The Four Villages ---------- */}
      <section id="four-villages" aria-labelledby="villages-title" className="py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>The Structure of Nomeh</Eyebrow>
              <h2 id="villages-title" className="mt-4 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">
                Founded upon <em className="text-primary">four</em> ancestral villages
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The traditional structure of Nomeh Unateze rests on four ancestral villages. Like the four market days
                that make one Igbo week, the four villages make one Nomeh. Together they hold {TOTAL_SUB_VILLAGES}{" "}
                recognized sub-villages, and each has its own village square.
              </p>
            </Reveal>
            <Stagger className="mt-10 space-y-3">
              {villages.map((v) => (
                <StaggerItem key={v.slug}>
                  <Link
                    href={`/villages/${v.slug}`}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-5"
                  >
                    <span aria-hidden className="absolute inset-y-0 left-0 w-1.5" style={{ background: v.tone }} />
                    <span
                      aria-hidden
                      className="font-heading text-4xl leading-none sm:text-5xl"
                      style={{ color: v.tone }}
                    >
                      {v.order}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-heading text-lg leading-tight font-semibold sm:text-xl">{v.name}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {v.subVillages.length} sub-villages · Square: {v.square}
                      </span>
                    </span>
                    <ArrowRight
                      className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                      aria-hidden
                    />
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.15}>
            <FourVillagesCompass />
          </Reveal>
        </Container>
      </section>

      {/* ---------- The journey ---------- */}
      <section aria-labelledby="journey-title" className="relative overflow-hidden bg-secondary/60 py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="relative">
            <Eyebrow>From Ogugu-Eze</Eyebrow>
            <h2 id="journey-title" className="mt-4 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">
              A journey of ancestry, settlement and identity
            </h2>
            <Ikenga className="mt-10 hidden h-64 text-primary/70 lg:block" />
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed">
            <Reveal>
              <p>
                The history of Nomeh Unateze begins with <strong>Ogugu-Eze</strong>, traditionally remembered as part
                of Ogwugwu in Agbaogugu, in present-day Awgu Local Government Area of Enugu State — the homeland from
                which our people began their journey.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-muted-foreground">
                The migration is remembered through ancestral names, family histories, movement through different
                places and the gradual establishment of new settlements. Historical and academic writings also connect
                Nomeh Unateze and Nara Unateze with Ogugu-Eze, supporting this element of our oral tradition.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="border-l-4 border-primary pl-6 font-heading text-2xl leading-snug">
                In time, settlement produced the distinctive organization of Nomeh — four ancestral villages and their{" "}
                {TOTAL_SUB_VILLAGES} recognized sub-villages.
              </blockquote>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/our-story"
                className="inline-flex min-h-11 items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
              >
                Read the full story <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- At a glance ---------- */}
      <section aria-labelledby="glance-title" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Nomeh at a Glance"
            title={<span id="glance-title">A community shaped by land, water and lineage</span>}
          />
          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {atAGlance.map(([k, v]) => (
              <StaggerItem key={k} className="bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{k}</p>
                <p className="mt-2 font-heading text-xl">{v}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---------- Land & water ---------- */}
      <section aria-labelledby="land-title" className="relative overflow-hidden bg-uli py-20 text-nzu sm:py-28">
        <div className="uli-texture absolute inset-0 opacity-[0.05]" aria-hidden />
        <Container className="relative grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <span aria-hidden className="h-px w-8 bg-current" />
              Land &amp; Natural Heritage
            </p>
            <h2 id="land-title" className="mt-4 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl">
              The Nvuna River and a level, fruitful land
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-nzu/80">
              Nomeh lies in a predominantly level landscape that has long supported settlement, farming and movement
              between neighbouring communities. The Nvuna River and other streams have shaped the life, work and
              settlement of our people.
            </p>
            <Link
              href="/our-land"
              className="mt-8 inline-flex min-h-11 items-center gap-2 font-medium text-gold underline-offset-4 hover:underline"
            >
              Explore our land <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Droplets, title: "Nvuna River", text: "Principal river — water for homes and farms." },
              { icon: Sprout, title: "Agriculture", text: "The traditional occupation of our people." },
              { icon: MapPin, title: "Nkanu East", text: "Enugu State, south-eastern Nigeria." },
              { icon: Users, title: "Neighbours", text: neighbours.join(" · ") },
            ].map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} className="rounded-2xl border border-nzu/10 bg-nzu/[0.04] p-6">
                <Icon className="size-6 text-gold" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-nzu/75">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---------- Rhythm of the week ---------- */}
      <section aria-labelledby="rhythm-title" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Izu — The Igbo Week"
            title={<span id="rhythm-title">Four days. Four villages. One rhythm.</span>}
            lead="Nomeh keeps the ancient four-day Igbo market week. Eke is the principal market day, drawing trade from Nomeh and beyond."
          />
          <Stagger className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {marketDays.map((d, i) => (
              <StaggerItem
                key={d.name}
                className="group relative overflow-hidden rounded-3xl border bg-card p-6 text-center"
              >
                <div className="mx-auto flex h-16 items-end justify-center gap-1.5" aria-hidden>
                  {[0, 1, 2, 3].map((b) => (
                    <span
                      key={b}
                      className={cn("beat w-2 rounded-full", b === i ? "h-16 bg-primary" : "h-10 bg-muted-foreground/40")}
                    />
                  ))}
                </div>
                <p className="mt-5 font-heading text-4xl font-semibold">{d.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d.note}</p>
                {i === 0 && <Badge className="mt-3">Market day</Badge>}
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ---------- Cultural heritage ---------- */}
      <section aria-labelledby="culture-title" className="bg-secondary/60 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Cultural Heritage"
            title={<span id="culture-title">The objects that carry our memory</span>}
            lead="Ancestral symbols of the Igbo world — the kola bowl that opens every gathering, the ogene that calls the people, the udu, the ikenga and the masked ancestors."
          />
          <Stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-5">
            {[
              { Art: Okwa, name: "Okwa Oji", text: "Kola is blessed and shared first." },
              { Art: Ogene, name: "Ogene", text: "The iron bell that calls and keeps time." },
              { Art: Udu, name: "Udu", text: "Clay pot of water — and of music." },
              { Art: Ikenga, name: "Ikenga", text: "The strength of the right hand." },
              { Art: Mask, name: "Mmanwu", text: "Ancestral spirits among the living." },
            ].map(({ Art, name, text }, i) => (
              <StaggerItem
                key={name}
                className={cn(
                  "group flex flex-col items-center rounded-3xl border bg-card p-6 text-center transition-shadow hover:shadow-xl",
                  i === 4 && "col-span-2 lg:col-span-1"
                )}
              >
                <Art className="h-24 w-auto text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105" />
                <h3 className="mt-5 text-xl font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10">
            <Link href="/our-culture" className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full px-6 text-base")}>
              Discover our culture <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Blog ---------- */}
      <section aria-labelledby="blog-cta" className="py-20 sm:py-28">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-primary-foreground sm:px-14">
            <div className="uli-texture absolute inset-0 opacity-[0.12]" aria-hidden />
            <div className="relative max-w-2xl">
              <h2 id="blog-cta" className="text-4xl leading-tight font-semibold sm:text-5xl">
                News and notes from home.
              </h2>
              <p className="mt-5 text-lg opacity-90">
                Community updates, stories from elders and reflections on life in Uhuafor, Amigbo, Ime-ama and
                Amukabi — for our people at home and abroad.
              </p>
              <Link
                href="/blog"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-background px-7 font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                Read the blog <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
