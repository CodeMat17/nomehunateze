/*
  Hand-built SVG renderings of Igbo artifacts. Pure markup, no images —
  so they're crisp at every size, theme-aware via currentColor, and cost nothing to load.
*/

type ArtProps = { className?: string; title?: string }

function Svg({
  className,
  title,
  viewBox,
  children,
}: ArtProps & { viewBox: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {children}
    </svg>
  )
}

/** Ikenga — horned shrine figure of the right hand, achievement and personal strength. */
export function Ikenga(props: ArtProps) {
  return (
    <Svg viewBox="0 0 120 200" {...props}>
      <path d="M36 58C20 40 16 18 30 6c4 16 14 26 22 34M84 58c16-18 20-40 6-52-4 16-14 26-22 34" />
      <path d="M40 60h40v8H40z" />
      <ellipse cx="60" cy="86" rx="20" ry="18" />
      <path d="M50 82h6M64 82h6M54 96h12" />
      <path d="M46 104l-8 36h44l-8-36" />
      <path d="M38 140c-10 4-14 14-10 22M82 140c10 4 14 14 10 22" />
      <path d="M44 118h32M42 128h36" strokeDasharray="2 4" />
      <path d="M34 162h52v12H34zM28 174h64v14H28z" />
      <path d="M60 120v18" />
    </Svg>
  )
}

/** Ogene — the iron gong-bell whose voice calls the people and keeps the rhythm. */
export function Ogene(props: ArtProps) {
  return (
    <Svg viewBox="0 0 200 140" {...props}>
      <path d="M100 18c-30 0-50 30-54 80h34c2-40 10-60 20-60" />
      <path d="M100 18c30 0 50 30 54 80h-34c-2-40-10-60-20-60" />
      <path d="M46 98c0 8 16 12 34 0M120 98c18 12 34 8 34 0" />
      <path d="M100 18V6M92 6h16" />
      <path d="M62 60c6-2 12-2 18 0M120 60c6-2 12-2 18 0" strokeDasharray="1 5" />
      <path d="M36 128l30-20" strokeWidth={3} />
      <circle cx="30" cy="132" r="4" />
    </Svg>
  )
}

/** Udu — clay water pot, also played as a drum. */
export function Udu(props: ArtProps) {
  return (
    <Svg viewBox="0 0 160 180" {...props}>
      <path d="M62 14h36M66 14c0 12-4 20-10 26-26 14-40 40-40 68 0 40 28 62 64 62s64-22 64-62c0-28-14-54-40-68-6-6-10-14-10-26" />
      <ellipse cx="118" cy="92" rx="10" ry="12" />
      <path d="M26 96c20 8 88 8 108 0" />
      <path d="M22 120c24 10 92 10 116 0" strokeDasharray="3 6" />
      <path d="M40 72l10 10 10-10 10 10 10-10 10 10 10-10 10 10" />
    </Svg>
  )
}

/** Okwa Oji — carved kola-nut bowl; the kola is first to be blessed and shared. */
export function Okwa(props: ArtProps) {
  return (
    <Svg viewBox="0 0 200 120" {...props}>
      <path d="M20 44h160c0 30-36 48-80 48S20 74 20 44z" />
      <path d="M20 44c0-4 36-8 80-8s80 4 80 8" />
      <path d="M80 92l-8 18h56l-8-18" />
      <path d="M44 58l8 10 8-10 8 10 8-10 8 10 8-10 8 10 8-10 8 10 8-10 8 10 8-10" />
      <ellipse cx="86" cy="36" rx="10" ry="7" />
      <ellipse cx="108" cy="34" rx="10" ry="7" />
      <path d="M160 32c10-12 26-12 30-4-10 0-18 4-30 4z" />
    </Svg>
  )
}

/** Mmanwu — the masked ancestral spirit face. */
export function Mask(props: ArtProps) {
  return (
    <Svg viewBox="0 0 140 190" {...props}>
      <path d="M70 12C34 12 20 48 22 92c2 50 22 86 48 86s46-36 48-86c2-44-12-80-48-80z" />
      <path d="M40 72c8-6 18-6 24 0M76 72c6-6 16-6 24 0" />
      <path d="M44 80c6 4 14 4 20 0M76 80c6 4 14 4 20 0" />
      <path d="M70 84v34M62 118h16" />
      <path d="M54 142c10 6 22 6 32 0" />
      <path d="M40 40c20-10 40-10 60 0M34 54c24-10 48-10 72 0" strokeDasharray="2 5" />
      <path d="M22 92l-14 6M118 92l14 6" />
    </Svg>
  )
}

/** A repeating uli band used as a section divider. */
export function UliBand({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 24" preserveAspectRatio="none" className={className} aria-hidden>
      <defs>
        <pattern id="uli-band" width="48" height="24" patternUnits="userSpaceOnUse">
          <path
            d="M0 12c8-10 16-10 24 0s16 10 24 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle cx="24" cy="12" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="480" height="24" fill="url(#uli-band)" />
    </svg>
  )
}

/** Large uli sun — spirals and rays drawn in on load (hero). */
export function UliSun({ className }: { className?: string }) {
  const rays = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2
    const r1 = 120
    const r2 = i % 2 ? 150 : 175
    return `M${200 + Math.cos(a) * r1} ${200 + Math.sin(a) * r1}L${200 + Math.cos(a) * r2} ${200 + Math.sin(a) * r2}`
  })
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden
    >
      <g className="uli-draw" strokeWidth="1.2">
        <circle cx="200" cy="200" r="190" pathLength={1} />
        <circle cx="200" cy="200" r="110" pathLength={1} />
        <path
          pathLength={1}
          d="M200 200m0-10a10 10 0 1 1-10 10a20 20 0 1 1 20 20a30 30 0 1 1-30-30a40 40 0 1 1 40 40a50 50 0 1 1-50-50a60 60 0 1 1 60 60"
        />
        {rays.map((d) => (
          <path key={d} d={d} pathLength={1} />
        ))}
      </g>
    </svg>
  )
}
