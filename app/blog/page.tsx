import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatDate, sortedPosts } from "@/lib/posts"
import { Container, PageHero } from "@/components/section"
import { Stagger, StaggerItem } from "@/components/motion"
import { Okwa } from "@/components/art"

export const metadata: Metadata = {
  title: "Blog — News and Heritage Notes from Nomeh Unateze",
  description:
    "News, reflections and heritage notes from the four ancestral villages of Nomeh Unateze — Uhuafor, Amigbo, Ime-ama and Amukabi.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
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
        art={<Okwa className="h-40" />}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl border bg-card p-6 transition-colors hover:border-primary"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{post.tag}</p>
                  <h2 className="mt-4 text-2xl leading-tight font-semibold">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <time dateTime={post.date} className="text-muted-foreground">{formatDate(post.date)}</time>
                    <span className="inline-flex items-center gap-1 font-medium text-primary">
                      Read <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  )
}
