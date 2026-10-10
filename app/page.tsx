import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Droplets, MapPin, Sprout, Users } from "lucide-react"
import { atAGlance, marketDays, neighbours, TOTAL_SUB_VILLAGES, villages } from "@/lib/site"
import { photos } from "@/lib/images"
import { EmergingPhoto } from "@/components/emerging-photo"
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
        <EmergingPhoto photo={photos.heroDancers} priority position="58% 25%" />
        <div className="noise pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden />
        <div
          className="ember pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_50%_at_0%_100%,oklch(0.8_0.12_55/14%),transparent_70%)]"
          aria-hidden
        />

        <Container className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-end pt-[46svh] pb-12 sm:pb-16 lg:h-[calc(100svh-4.5rem)] lg:min-h-128 lg:justify-center lg:py-10">
          <div className="max-w-2xl">
            <p className="rise flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.4em] text-gold">
              <span aria-hidden className="h-px w-10 bg-linear-to-r from-transparent to-gold" />
              Nkanu East · Enugu State
            </p>

            <h1 className="rise mt-5 text-[clamp(3.4rem,15vw,8rem)] leading-[0.88] lg:text-[clamp(3.5rem,14svh,8rem)] font-medium tracking-[-0.045em] [animation-delay:120ms]">
              Nomeh
              <span className="text-bronze block pb-3 italic">Unateze</span>
            </h1>

            <p className="rise mt-6 max-w-lg text-base leading-relaxed text-nzu/80 [animation-delay:240ms] sm:text-lg lg:text-xl">
              One people. <strong className="font-semibold text-nzu">Four ancestral villages.</strong>{" "}
              {TOTAL_SUB_VILLAGES} sub-villages. The living story of an ancient Igbo community — from the journey out of
              Ogugu-Eze to the banks of the Nvuna River.
            </p>

            <div className="rise mt-9 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
              <Link
                href="/villages"
                className={cn(
                  buttonVariants(),
                  "group relative h-13 overflow-hidden rounded-full bg-linear-to-r from-[oklch(0.76_0.12_55)] to-[oklch(0.88_0.09_72)] px-8 text-sm font-semibold tracking-wide text-uli shadow-[0_10px_40px_-10px_oklch(0.8_0.12_55/60%)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_oklch(0.8_0.12_55/75%)]"
                )}
              >
                Explore the Four Villages
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                href="/our-story"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-13 rounded-full border-nzu/25 bg-nzu/[0.04] px-8 text-sm font-semibold tracking-wide text-nzu backdrop-blur-md hover:border-gold/60 hover:bg-nzu/[0.08] hover:text-nzu dark:bg-nzu/[0.04]"
                )}
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </Container>

        <div className="rise absolute right-6 bottom-8 hidden max-w-xs items-center gap-3 rounded-2xl border border-nzu/15 bg-uli/40 px-4 py-3 text-xs text-nzu/80 shadow-luxe backdrop-blur-xl [animation-delay:900ms] lg:flex xl:right-10">
          <span aria-hidden className="relative flex size-2.5 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold/60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
          </span>
          <span>
            <span className="block font-heading text-sm text-nzu italic">Drum, ọja and ogene</span>
            The music that gathers the people
          </span>
        </div>
      </section>

      {/* ---------- The Four Villages ---------- */}
      <section id="four-villages" aria-labelledby="villages-title" className="py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>The Structure of Nomeh</Eyebrow>
              <h2 id="villages-title" className="mt-5 text-4xl leading-[1.08] font-medium tracking-[-0.03em] sm:text-5xl">
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
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border bg-card p-4 transition-all card-luxe sm:p-5"
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
            <figure>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-luxe lg:aspect-square">
                <Image
                  src={photos.villageAerial.src}
                  alt={photos.villageAerial.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-uli/50 to-transparent to-50%" aria-hidden />
              </div>
              <figcaption className="mt-3 text-xs text-muted-foreground">
                Homesteads among oil palms in Achi, Enugu State, seen from above. Photograph: Ifeanyichukwu, CC BY 4.0.
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* ---------- The journey ---------- */}
      <section aria-labelledby="journey-title" className="relative overflow-hidden bg-secondary/60 py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="relative">
            <Eyebrow>From Ogugu-Eze</Eyebrow>
            <h2 id="journey-title" className="mt-5 text-4xl leading-[1.08] font-medium tracking-[-0.03em] sm:text-5xl">
              A journey of ancestry, settlement and identity
            </h2>
            <figure className="mt-10">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-luxe">
                <Image
                  src={photos.basdenMarket.src}
                  alt={photos.basdenMarket.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover sepia-[0.35]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-uli/50 to-transparent to-50%" aria-hidden />
              </div>
              <figcaption className="mt-3 text-xs text-muted-foreground">
                An Igbo market in the early twentieth century. Photograph: G. T. Basden.
              </figcaption>
            </figure>
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
      <section aria-labelledby="land-title" className="relative isolate overflow-hidden bg-uli py-20 text-nzu sm:py-28">
        <Image
          src={photos.landAerial.src}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-45"
        />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-b from-uli via-uli/80 to-uli/95 lg:bg-linear-to-r lg:from-uli lg:via-uli/85 lg:to-uli/60"
          aria-hidden
        />
        <Container className="relative grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <span aria-hidden className="h-px w-8 bg-current" />
              Land &amp; Natural Heritage
            </p>
            <h2 id="land-title" className="mt-5 text-4xl leading-[1.08] font-medium tracking-[-0.03em] sm:text-5xl">
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
              <StaggerItem key={title} className="rounded-2xl border border-nzu/15 bg-uli/40 p-6 backdrop-blur-md">
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
                className="card-luxe group relative overflow-hidden rounded-3xl border bg-card p-6 text-center"
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
          <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {[
              { photo: photos.kola, name: "Okwa Oji", text: "Kola is blessed and shared first." },
              { photo: photos.ogene, name: "Ogene", text: "The iron bell that calls and keeps time." },
              { photo: photos.udu, name: "Udu", text: "Clay pot of water — and of music." },
              { photo: photos.ikenga, name: "Ikenga", text: "The strength of the right hand." },
              { photo: photos.mmanwu, name: "Mmanwu", text: "Ancestral spirits among the living." },
            ].map(({ photo, name, text }, i) => (
              <StaggerItem
                key={name}
                className={cn(
                  "group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl bg-uli p-4 text-nzu card-luxe sm:p-5",
                  i === 4 && "col-span-2 aspect-[16/10] lg:col-span-1 lg:aspect-[3/4]"
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 50vw"
                  className="-z-10 object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-uli via-uli/40 via-45% to-transparent" aria-hidden />
                <h3 className="font-heading text-xl font-medium sm:text-2xl">{name}</h3>
                <p className="mt-1 text-xs leading-snug text-nzu/75 sm:text-sm">{text}</p>
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
          <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-uli px-6 py-16 text-nzu shadow-luxe sm:rounded-[2.5rem] sm:px-14 sm:py-20">
            <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[62%]">
              <Image
                src={photos.redCapChiefs.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover opacity-50 lg:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-uli via-uli/70 to-uli/30 lg:bg-linear-to-r lg:from-uli lg:via-uli/60 lg:to-transparent" aria-hidden />
            </div>
            <div className="relative max-w-xl">
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
