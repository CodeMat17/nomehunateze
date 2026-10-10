import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { SITE_URL } from "@/lib/site"
import { formatDate, getPublishedPost, getPublishedPosts } from "@/lib/posts"
import { Container, Eyebrow } from "@/components/section"
import { Reveal } from "@/components/motion"
import { RichText } from "@/components/rich-text"

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getPublishedPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params
  const post = await getPublishedPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Nomeh Unateze Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.published_at ?? undefined,
      modifiedTime: post.updated_at,
      ...(post.cover_image ? { images: [post.cover_image] } : {}),
    },
  }
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params
  const post = await getPublishedPost(slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { "@type": "Organization", name: post.author },
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.cover_image ? { image: post.cover_image } : {}),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }} />

      <article className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="size-4" aria-hidden /> All posts
          </Link>
          <Reveal className="mt-8">
            <Eyebrow>{post.tag}</Eyebrow>
            <h1 className="mt-5 text-4xl leading-[1.08] font-medium tracking-[-0.03em] sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-sm text-muted-foreground">
              {post.author}
              {post.published_at && (
                <>
                  {" · "}
                  <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                </>
              )}
            </p>
          </Reveal>
          {post.cover_image && (
            // eslint-disable-next-line @next/next/no-img-element -- uploaded images are pre-sized in the dashboard
            <img src={post.cover_image} alt="" className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover" />
          )}
          <div className="mt-10">
            <RichText doc={post.content} />
          </div>
        </Container>
      </article>
    </>
  )
}
