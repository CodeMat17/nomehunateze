import type { MetadataRoute } from "next"
import { SITE_URL, villages } from "@/lib/site"
import { getPublishedPosts } from "@/lib/posts"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["", "/villages", "/our-story", "/our-land", "/our-culture", "/blog"]
  const posts = await getPublishedPosts()
  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : p === "/villages" ? 0.95 : 0.8,
    })),
    ...villages.map((v) => ({
      url: `${SITE_URL}/villages/${v.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.updated_at,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]
}
