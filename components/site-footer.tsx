import Link from "next/link"
import { nav, villages, neighbours } from "@/lib/site"
import { UliBand } from "@/components/art"

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-uli text-nzu">
      <UliBand className="h-4 w-full text-gold/60" />
      <div className="uli-texture absolute inset-0 opacity-[0.03]" aria-hidden />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-heading text-4xl leading-none font-bold tracking-[-0.03em]">
            Nomeh <span className="text-bronze">Unateze</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-nzu/75">
            An ancient Igbo community in Nkanu East LGA, Enugu State, Nigeria — founded upon four
            ancestral villages and 37 recognized sub-villages. Bordered by {neighbours.join(", ")}.
          </p>
          <p className="mt-8 font-heading text-xl text-gold">“Igwe bụ ike” — unity is strength.</p>
        </div>
        <nav aria-label="The four villages">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">The Four Villages</p>
          <ul className="mt-4 space-y-1">
            {villages.map((v) => (
              <li key={v.slug}>
                <Link href={`/villages/${v.slug}`} className="inline-flex min-h-11 items-center text-sm text-nzu/85 hover:text-gold">
                  {v.order}. {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Explore</p>
          <ul className="mt-4 space-y-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-flex min-h-11 items-center text-sm text-nzu/85 hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="relative border-t border-nzu/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-nzu/70 sm:px-6">
          © {new Date().getFullYear()} Nomeh Unateze Heritage. The digital memory, cultural archive and living story of
          our people.
        </p>
      </div>
    </footer>
  )
}
