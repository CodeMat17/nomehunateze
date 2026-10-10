import type { ReactNode } from "react"
import type { RichNode } from "@/lib/posts"

/**
 * Renders a Tiptap JSON document to React. Only the node and mark types the
 * dashboard editor produces are rendered; anything else is dropped, so no raw
 * HTML ever reaches the page.
 */
export function RichText({ doc }: { doc: RichNode }) {
  return <div className="space-y-6 text-lg leading-relaxed">{renderChildren(doc)}</div>
}

function renderChildren(node: RichNode): ReactNode {
  return node.content?.map((child, i) => renderNode(child, i))
}

function safeHref(href: unknown): string | null {
  if (typeof href !== "string") return null
  return /^(https?:|mailto:|\/|#)/i.test(href.trim()) ? href.trim() : null
}

function renderText(node: RichNode, key: number): ReactNode {
  let out: ReactNode = node.text
  for (const mark of node.marks ?? []) {
    switch (mark.type) {
      case "bold":
        out = <strong className="font-semibold">{out}</strong>
        break
      case "italic":
        out = <em>{out}</em>
        break
      case "underline":
        out = <u>{out}</u>
        break
      case "strike":
        out = <s>{out}</s>
        break
      case "link": {
        const href = safeHref(mark.attrs?.href)
        if (href) {
          const external = /^https?:/i.test(href)
          out = (
            <a
              href={href}
              className="font-medium text-primary underline underline-offset-4 hover:no-underline"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {out}
            </a>
          )
        }
        break
      }
    }
  }
  return <span key={key}>{out}</span>
}

function renderNode(node: RichNode, key: number): ReactNode {
  switch (node.type) {
    case "text":
      return renderText(node, key)
    case "hardBreak":
      return <br key={key} />
    case "paragraph":
      return <p key={key}>{renderChildren(node)}</p>
    case "heading":
      return node.attrs?.level === 3 ? (
        <h3 key={key} className="pt-2 text-2xl leading-tight font-semibold">
          {renderChildren(node)}
        </h3>
      ) : (
        <h2 key={key} className="pt-6 text-3xl leading-tight font-medium tracking-[-0.02em]">
          {renderChildren(node)}
        </h2>
      )
    case "bulletList":
      return (
        <ul key={key} className="list-disc space-y-2 pl-6 marker:text-primary">
          {renderChildren(node)}
        </ul>
      )
    case "orderedList":
      return (
        <ol key={key} start={Number(node.attrs?.start) || 1} className="list-decimal space-y-2 pl-6 marker:text-primary">
          {renderChildren(node)}
        </ol>
      )
    case "listItem":
      // List items wrap their text in paragraphs; keep them tight.
      return (
        <li key={key} className="[&>p+p]:mt-2">
          {renderChildren(node)}
        </li>
      )
    case "blockquote":
      return (
        <blockquote key={key} className="space-y-3 border-l-2 border-primary/50 pl-5 italic">
          {renderChildren(node)}
        </blockquote>
      )
    case "horizontalRule":
      return <hr key={key} className="my-10 border-border" />
    case "image": {
      const src = safeHref(node.attrs?.src)
      if (!src) return null
      const alt = typeof node.attrs?.alt === "string" ? node.attrs.alt : ""
      const width = Number(node.attrs?.width) || undefined
      const height = Number(node.attrs?.height) || undefined
      return (
        <figure key={key} className="py-2">
          {/* eslint-disable-next-line @next/next/no-img-element -- uploaded images are pre-sized in the editor */}
          <img src={src} alt={alt} width={width} height={height} loading="lazy" className="h-auto w-full rounded-2xl" />
          {typeof node.attrs?.title === "string" && node.attrs.title && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">{node.attrs.title}</figcaption>
          )}
        </figure>
      )
    }
    default:
      return null
  }
}
