import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { SITE_URL } from "@/lib/site"
import { formatDate, posts } from "@/lib/posts"
import { Container, Eyebrow } from "@/components/section"
import { Reveal } from "@/components/motion"

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} — Nomeh Unateze Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  }
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    url: `${SITE_URL}/blog/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <article className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="size-4" aria-hidden /> All posts
          </Link>
          <Reveal className="mt-8">
            <Eyebrow>{post.tag}</Eyebrow>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-sm text-muted-foreground">
              {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
          </Reveal>
          <div className="mt-10 space-y-6 text-lg leading-relaxed">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>
    </>
  )
}
