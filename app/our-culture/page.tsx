import type { Metadata } from "next"
import { Ikenga, Mask, Ogene, Okwa, Udu } from "@/components/art"
import { Container, PageHero, SectionHeading } from "@/components/section"
import { Reveal, Stagger, StaggerItem } from "@/components/motion"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Our Culture — Igbo Heritage of Nomeh Unateze",
  description:
    "The culture of Nomeh Unateze: kola, ogene and drum, udu, ikenga, mmanwu masquerades, the four-day Igbo market week and the heritage kept alive across the four villages.",
  alternates: { canonical: "/our-culture" },
}

const artifacts = [
  {
    Art: Okwa,
    name: "Okwa Oji — the kola bowl",
    text: "“Onye wetara oji wetara ndụ” — he who brings kola brings life. Every gathering in Igboland opens with the breaking and sharing of kola, offered first to the ancestors.",
  },
  {
    Art: Ogene,
    name: "Ogene — the iron bell",
    text: "The voice of the town crier and the backbone of Igbo music. Its two iron mouths speak high and low, keeping the rhythm that dancers and masquerades follow.",
  },
  {
    Art: Udu,
    name: "Udu — pot of water and song",
    text: "Shaped from clay, the udu stores water and doubles as a drum: a hand over its side-hole releases a deep, liquid tone.",
  },
  {
    Art: Ikenga,
    name: "Ikenga — the strength of the right hand",
    text: "A horned figure honouring personal achievement, industry and the power to shape one’s own destiny.",
  },
  {
    Art: Mask,
    name: "Mmanwu — the masquerade",
    text: "Ancestral spirits made visible, appearing at festivals and rites to bless, judge and entertain the living.",
  },
]

const preservation = [
  { item: "Oral histories of elders", status: "Urgent" },
  { item: "Traditional songs & dances", status: "At Risk" },
  { item: "Local expressions & proverbs", status: "At Risk" },
  { item: "Village sub-village structure", status: "Digitized" },
]

export default function OurCulturePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Culture"
        title={
          <>
            The <span className="text-gold">Rhythm</span> of Nomeh
          </>
        }
        lead="Kola and ogene, clay and iron, mask and song — the Igbo heritage carried by the four villages of Nomeh from generation to generation."
        art={<Ogene className="h-44" />}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Ancestral Artifacts" title="Objects that hold memory" />
          <div className="mt-14 space-y-6">
            {artifacts.map(({ Art, name, text }, i) => (
              <Reveal key={name}>
                <article
                  className={`grid items-center gap-8 rounded-3xl border bg-card p-6 sm:p-10 md:grid-cols-[14rem_1fr] ${i % 2 ? "md:grid-cols-[1fr_14rem]" : ""}`}
                >
                  <div className={`grid place-items-center rounded-2xl bg-secondary/70 p-8 ${i % 2 ? "md:order-2" : ""}`}>
                    <Art className="h-32 w-auto text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold">{name}</h2>
                    <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/60 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Heritage Preservation"
            title="What we must not lose"
            lead="Heritage that may be disappearing is tracked, recorded and protected with the help of the community."
          />
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2">
            {preservation.map((p) => (
              <StaggerItem key={p.item} className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border bg-card px-5">
                <span className="font-medium">{p.item}</span>
                <Badge variant={p.status === "Urgent" ? "destructive" : p.status === "At Risk" ? "secondary" : "default"}>
                  {p.status}
                </Badge>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  )
}
