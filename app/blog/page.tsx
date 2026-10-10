import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatDate, getPublishedPosts } from "@/lib/posts"
import { Container, PageHero } from "@/components/section"
import { Stagger, StaggerItem } from "@/components/motion"
import { photos } from "@/lib/images"

export const metadata: Metadata = {
  title: "Blog — News and Heritage Notes from Nomeh Unateze",
  description:
    "News, reflections and heritage notes from the four ancestral villages of Nomeh Unateze — Uhuafor, Amigbo, Ime-ama and Amukabi.",
  alternates: { canonical: "/blog" },
}


export default async function BlogPage() {
  const posts = await getPublishedPosts()

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            News &amp; <span className="text-gold">notes</span> from home
          </>
        }
        lead="Community updates, stories from elders and reflections on the land, culture and history of Nomeh Unateze."
        photo={photos.igboFamily}
        position="50% 30%"
      />

      <section className="py-20 sm:py-24">
        <Container>
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No posts yet. Check back soon.</p>
          ) : (
            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition-colors hover:border-primary"
                  >
                    {post.cover_image && (
                      // eslint-disable-next-line @next/next/no-img-element -- uploaded images are pre-sized in the dashboard
                      <img src={post.cover_image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{post.tag}</p>
                      <h2 className="mt-4 text-2xl leading-tight font-semibold">{post.title}</h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                      <div className="mt-6 flex items-center justify-between text-sm">
                        {post.published_at && (
                          <time dateTime={post.published_at} className="text-muted-foreground">
                            {formatDate(post.published_at)}
                          </time>
                        )}
                        <span className="ml-auto inline-flex items-center gap-1 font-medium text-primary">
                          Read <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </Container>
      </section>
    </>
  )
}
