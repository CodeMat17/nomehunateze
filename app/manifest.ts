import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nomeh Unateze — The Four Villages",
    short_name: "Nomeh",
    description: "Heritage of Nomeh Unateze, an Igbo community of four ancestral villages in Nkanu East, Enugu State.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1a20",
    theme_color: "#0f1a20",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  }
}
