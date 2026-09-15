import Link from "next/link"
import { villages, TOTAL_SUB_VILLAGES } from "@/lib/site"

/*
  The four ancestral villages as the four points of one circle — like the four
  market days that make one Igbo week. Each node links to its village page.
*/
const positions = [
  { x: 200, y: 58 },
  { x: 342, y: 200 },
  { x: 200, y: 342 },
  { x: 58, y: 200 },
]

export function FourVillagesCompass() {
  return (
    <figure className="relative mx-auto w-full max-w-[26rem]">
      <svg viewBox="0 0 400 400" className="w-full overflow-visible" role="img" aria-labelledby="compass-title">
        <title id="compass-title">{`Nomeh Unateze at the centre, joined to its four ancestral villages: ${villages.map((v) => v.name).join(", ")}`}</title>
        <g>
          <circle cx="200" cy="200" r="142" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="2 8" />
        </g>
        <circle cx="200" cy="200" r="96" fill="none" stroke="currentColor" strokeOpacity="0.15" />
        {positions.map((p, i) => (
          <line key={i} x1="200" y1="200" x2={p.x} y2={p.y} stroke={villages[i].tone} strokeWidth="1.5" strokeOpacity="0.7" />
        ))}
        <circle cx="200" cy="200" r="54" fill="var(--uli)" stroke="var(--gold)" strokeWidth="1.5" />
        <text x="200" y="196" textAnchor="middle" className="fill-nzu font-heading" fontSize="22">
          Nomeh
        </text>
        <text x="200" y="216" textAnchor="middle" fill="var(--gold)" fontSize="10" letterSpacing="3">
          UNATEZE
        </text>
        {positions.map((p, i) => (
          <g key={villages[i].slug}>
            <circle cx={p.x} cy={p.y} r="34" fill="var(--card)" stroke={villages[i].tone} strokeWidth="2.5" />
            <text x={p.x} y={p.y + 9} textAnchor="middle" fontSize="26" className="font-heading" fill={villages[i].tone}>
              {villages[i].order}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="sr-only">
        Four ancestral villages with {TOTAL_SUB_VILLAGES} sub-villages together form Nomeh Unateze.
      </figcaption>
      {/* Accessible, tappable labels overlaid on the diagram */}
      <ul className="mt-6 grid grid-cols-2 gap-3">
        {villages.map((v) => (
          <li key={v.slug}>
            <Link
              href={`/villages/${v.slug}`}
              className="group flex min-h-14 items-center gap-3 rounded-xl border bg-card/70 px-3 py-2 transition-colors hover:border-primary"
            >
              <span
                className="grid size-8 shrink-0 place-items-center rounded-full font-heading text-sm text-nzu"
                style={{ background: v.tone }}
                aria-hidden
              >
                {v.order}
              </span>
              <span className="text-sm font-medium leading-tight group-hover:text-primary">{v.shortName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </figure>
  )
}
