import Image from "next/image"
import type { Photo } from "@/lib/images"
import { cn } from "@/lib/utils"

/*
  A photograph that emerges from a deep uli veil. On phones the veil rises from
  the bottom so text can sit over it; from lg up it sweeps in from the left and
  thins to nothing. A frosted layer and feathered top, bottom and right edges
  keep the photo's sides slightly covered, seated in the page rather than pasted on.
  Must sit inside a `relative bg-uli` section.
*/
export function EmergingPhoto({
  photo,
  priority,
  position = "center",
  className,
}: {
  photo: Photo
  priority?: boolean
  position?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-[64svh] max-h-[42rem] overflow-hidden",
        "lg:inset-y-0 lg:right-0 lg:left-auto lg:h-auto lg:max-h-none lg:w-[64%]",
        className
      )}
    >
      <div className="emerge absolute inset-0">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 64vw, 100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      {/* Marry the photo to the palette */}
      <div className="absolute inset-0 bg-[oklch(0.21_0.03_220/18%)] mix-blend-multiply" aria-hidden />
      {/* Thin frosted layer */}
      <div className="veil-blur absolute inset-0 backdrop-blur-[6px]" aria-hidden />
      {/* The veil */}
      <div
        className="absolute inset-0 bg-linear-to-t from-uli from-8% via-uli/70 via-38% to-transparent to-75% lg:bg-linear-to-r lg:from-uli lg:from-0% lg:via-uli/70 lg:via-28% lg:to-transparent lg:to-72%"
        aria-hidden
      />
      {/* Feathered edges */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--uli),transparent_20%)] lg:bg-[linear-gradient(to_bottom,var(--uli),transparent_16%,transparent_78%,var(--uli)),linear-gradient(to_left,oklch(0.21_0.03_220/60%),transparent_12%)]"
        aria-hidden
      />
    </div>
  )
}
