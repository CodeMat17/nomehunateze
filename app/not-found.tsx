import Link from "next/link"
import { Mask } from "@/components/art"

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-uli px-4 py-20 text-center text-nzu">
      <div>
        <Mask className="mx-auto h-32 text-gold" />
        <h1 className="mt-8 text-5xl font-semibold">This path is not in Nomeh</h1>
        <p className="mt-4 text-nzu/80">Even the masquerade returns home. Let us guide you back.</p>
        <Link href="/" className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-7 font-medium text-uli">
          Return home
        </Link>
      </div>
    </section>
  )
}
