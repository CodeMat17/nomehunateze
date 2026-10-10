import Link from "next/link"
import Image from "next/image"
import { photos } from "@/lib/images"

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-uli px-4 py-20 text-center text-nzu">
      <div>
        <div className="relative mx-auto aspect-[2/3] w-36 overflow-hidden rounded-t-full ring-1 ring-gold/40 ring-offset-4 ring-offset-uli">
          <Image src={photos.mmanwu.src} alt={photos.mmanwu.alt} fill sizes="9rem" className="object-cover" />
        </div>
        <h1 className="mt-8 text-5xl font-semibold">This path is not in Nomeh</h1>
        <p className="mt-4 text-nzu/80">Even the masquerade returns home. Let us guide you back.</p>
        <Link href="/" className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-7 font-medium text-uli">
          Return home
        </Link>
      </div>
    </section>
  )
}
