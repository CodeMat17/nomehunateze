export type Post = {
  slug: string
  title: string
  excerpt: string
  /** ISO date, e.g. "2026-09-15" */
  date: string
  author: string
  tag: string
  /** Paragraphs of body text */
  body: string[]
}

export const posts: Post[] = [
  {
    slug: "welcome-to-the-nomeh-blog",
    title: "Welcome to the Nomeh Unateze blog",
    excerpt: "News, reflections and heritage notes from the four ancestral villages and our people at home and abroad.",
    date: "2026-09-15",
    author: "Nomeh Heritage Team",
    tag: "Announcements",
    body: [
      "This blog is a new home for news, reflections and heritage notes from Nomeh Unateze — from Uhuafor, Amigbo, Ime-ama and Amukabi, and from our sons and daughters in the diaspora.",
      "Here we will share updates on community life, stories gathered from elders, and notes on the land, culture and history that bind our thirty-seven sub-villages together.",
      "Oral traditions shared here are kept distinct from verified historical records. If you would like to contribute a post, write to heritage@nomehunateze.com.",
    ],
  },
  {
    slug: "the-four-market-days",
    title: "Eke, Orie, Afọ and Nkwọ: the rhythm of the Igbo week",
    excerpt: "How the four market days shape trade, gatherings and memory in Nomeh.",
    date: "2026-09-10",
    author: "Nomeh Heritage Team",
    tag: "Culture",
    body: [
      "Like communities across Igboland, Nomeh keeps time by a four-day week: Eke, Orie, Afọ and Nkwọ. Eke is our principal market day.",
      "The market days are more than a calendar. They set the rhythm of trade, of meetings in the village squares, and of the ceremonies that mark the life of the community.",
      "We are gathering memories of how market days were observed in each of the four villages. Elders' recollections will be recorded and shared here as they are collected.",
    ],
  },
]

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}
