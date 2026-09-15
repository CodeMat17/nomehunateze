export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nomehunateze.com"
).replace(/\/$/, "")

export const SITE_NAME = "Nomeh Unateze"
export const SITE_TAGLINE = "One people. Four ancestral villages. Thirty-seven sub-villages."
export const SITE_DESCRIPTION =
  "Nomeh Unateze is an ancient Igbo community in Nkanu East LGA, Enugu State, Nigeria, founded upon four ancestral villages — Uhuafor, Amigbo, Ime-ama and Amukabi — and 37 recognized sub-villages. Discover its history, villages, land and heritage."

export type Village = {
  slug: string
  order: number
  name: string
  shortName: string
  epithet: string
  square: string
  subVillages: string[]
  /** CSS color token used for this village throughout the site */
  tone: string
  summary: string
}

export const villages: Village[] = [
  {
    slug: "uhuafor-echichi-mkpuma-afor",
    order: 1,
    name: "Uhuafor Echichi Mkpuma Afor",
    shortName: "Uhuafor",
    epithet: "The Eldest",
    square: "Obodo Ishiogo",
    tone: "var(--camwood)",
    summary:
      "Uhuafor Echichi Mkpuma Afor is honoured as the eldest of the four ancestral villages of Nomeh Unateze. Its people gather at Obodo Ishiogo, the village square.",
    subVillages: ["Igwesi Obodo", "Amanji", "UmuOchoene", "Umuenube", "UmuOjufuta"],
  },
  {
    slug: "amigbo-alumangu",
    order: 2,
    name: "Amigbo Alumangu",
    shortName: "Amigbo",
    epithet: "Second in Seniority",
    square: "Onu Anyi Amigbo",
    tone: "var(--ochre)",
    summary:
      "Amigbo Alumangu (also written Amaigbo) is the second in seniority of the four ancestral villages of Nomeh Unateze, after Uhuafor, with seven sub-villages whose people gather at Onu Anyi Amigbo.",
    subVillages: ["Obunegu", "Ogonogoegu", "Amegu", "Uhuorji", "Uhuru", "Umuekwosu", "Umunne"],
  },
  {
    slug: "ime-ama-mkpuma-onu",
    order: 3,
    name: "Ime-ama Mkpuma Onu",
    shortName: "Ime-ama",
    epithet: "Third in Seniority",
    square: "Onu Anyi Imeama",
    tone: "var(--forest)",
    summary:
      "Ime-ama Mkpuma Onu (also written Imeama Mkpumaonu) is the third in seniority of the four ancestral villages of Nomeh Unateze. With fourteen sub-villages it is the most extensive, and its square is Onu Anyi Imeama.",
    subVillages: [
      "Uhueke",
      "Uhu Akpalata",
      "Uhu Ikolo",
      "Umuchima",
      "Ishienu Uhueke",
      "Enuegu",
      "Aguobia",
      "Obeagu Imama",
      "Ebuno",
      "Uhuchoke",
      "Ogu",
      "Amakpu",
      "Akpatike",
      "Obeagu Bridge",
    ],
  },
  {
    slug: "amukabi-ngeneamaodu",
    order: 4,
    name: "Amukabi NgeneAmaodu",
    shortName: "Amukabi",
    epithet: "Fourth in Seniority",
    square: "Obodo Egbo",
    tone: "var(--indigo)",
    summary:
      "Amukabi NgeneAmaodu (also written Amukabi Ngeneama Odudu) is the fourth in seniority of the four ancestral villages of Nomeh Unateze, with eleven sub-villages whose people gather at Obodo Egbo.",
    subVillages: [
      "Onu Afor",
      "Umu Igwe",
      "Obodo Ufu Ogilishi",
      "Obodo Ufu Orji",
      "Obodo Iboke",
      "Onu Eke",
      "Amobele",
      "Nji Igbuduanyi",
      "Obodo Okeama",
      "Amukabi Enu",
      "Obeagu Amukabi",
    ],
  },
]

export const TOTAL_SUB_VILLAGES = villages.reduce((n, v) => n + v.subVillages.length, 0)

export const neighbours = ["Nenwe", "Oduma", "Mburubu", "Ugbawka"]

export const atAGlance: [string, string][] = [
  ["Location", "Nkanu East LGA, Enugu State, Nigeria"],
  ["People", "Nomeh Unateze"],
  ["Language", "Igbo"],
  ["Landscape", "Predominantly level terrain"],
  ["Traditional occupation", "Agriculture"],
  ["Principal river", "Nvuna River"],
  ["Neighbouring communities", "Nenwe, Oduma, Mburubu and Ugbawka"],
  ["Ancestral villages", "Four"],
  ["Recognized sub-villages", String(TOTAL_SUB_VILLAGES)],
]

export const marketDays = [
  { name: "Eke", note: "Principal market day" },
  { name: "Orie", note: "Second day of the week" },
  { name: "Afọ", note: "Third day of the week" },
  { name: "Nkwọ", note: "Fourth day of the week" },
]

export const nav = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/villages", label: "Four Villages" },
  { href: "/our-land", label: "Our Land" },
  { href: "/our-culture", label: "Our Culture" },
  { href: "/blog", label: "Blog" },
]
