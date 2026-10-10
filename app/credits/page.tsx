import type { Metadata } from "next"
import Image from "next/image"
import { photos } from "@/lib/images"
import { Container, SectionHeading } from "@/components/section"

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Credits and licences for the photography used on the Nomeh Unateze heritage website.",
  alternates: { canonical: "/credits" },
}

export default function CreditsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Photo Credits"
          title="With thanks to the photographers"
          lead="The photographs on this site are shared under free licences on Wikimedia Commons. Photos from the community of Nomeh itself will replace them as our archive grows."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.values(photos).map((p) => (
            <li key={p.src} className="flex gap-4 rounded-2xl border bg-card p-3">
              <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                <Image src={p.src} alt="" fill sizes="5rem" className="object-cover" />
              </div>
              <div className="min-w-0 text-sm">
                <p className="line-clamp-2 font-medium">{p.alt}</p>
                <p className="mt-1 text-muted-foreground">
                  {p.credit} ·{" "}
                  <a href={p.source} className="text-primary underline-offset-4 hover:underline" rel="noopener">
                    {p.license}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
