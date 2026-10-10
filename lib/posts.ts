import { postsData } from "./posts-data"

/** A rich-text editor (Tiptap / ProseMirror) JSON node. */
export type RichNode = {
  type: string
  attrs?: Record<string, unknown>
  marks?: { type: string; attrs?: Record<string, unknown> }[]
  content?: RichNode[]
  text?: string
}

export type Post = {
  slug: string
  title: string
  excerpt: string
  tag: string
  author: string
  cover_image: string | null
  content: RichNode
  /** ISO timestamp */
  published_at: string
  /** ISO timestamp */
  updated_at: string
}

// Async on purpose: these become CMS queries later without changing the pages.

/** Published posts, newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
  return [...postsData].sort((a, b) => b.published_at.localeCompare(a.published_at))
}

export async function getPublishedPost(slug: string): Promise<Post | null> {
  return postsData.find((p) => p.slug === slug) ?? null
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Lagos",
  })
}
