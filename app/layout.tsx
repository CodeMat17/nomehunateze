import type { Metadata, Viewport } from "next"
import { Comfortaa } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollProgress } from "@/components/motion"
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, villages, neighbours, TOTAL_SUB_VILLAGES } from "@/lib/site"

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nomeh Unateze — The Community of Four Ancestral Villages",
    template: "%s · Nomeh Unateze",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Nomeh",
    "Nomeh Unateze",
    "Nomeh four villages",
    "four ancestral villages of Nomeh",
    "Uhuafor",
    "Amigbo Alumangu",
    "Ime-ama Mkpuma Onu",
    "Amukabi",
    "Nkanu East",
    "Enugu State",
    "Igbo community",
    "Unateze",
    "Nvuna River",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: SITE_NAME,
    title: "Nomeh Unateze — One People, Four Ancestral Villages",
    description: SITE_DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomeh Unateze — One People, Four Ancestral Villages",
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  category: "heritage",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1a20" },
  ],
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Place",
      "@id": `${SITE_URL}/#place`,
      name: "Nomeh Unateze",
      alternateName: ["Nomeh", "Nomeh Unateze Community"],
      description: `Nomeh Unateze is an Igbo community in Nkanu East LGA, Enugu State, Nigeria, made up of four ancestral villages and ${TOTAL_SUB_VILLAGES} sub-villages.`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nomeh",
        addressRegion: "Enugu State",
        addressCountry: "NG",
      },
      containedInPlace: { "@type": "AdministrativeArea", name: "Nkanu East Local Government Area" },
      containsPlace: villages.map((v) => ({
        "@type": "Place",
        name: v.name,
        url: `${SITE_URL}/villages/${v.slug}`,
      })),
      additionalProperty: [
        { "@type": "PropertyValue", name: "Ancestral villages", value: 4 },
        { "@type": "PropertyValue", name: "Recognized sub-villages", value: TOTAL_SUB_VILLAGES },
        { "@type": "PropertyValue", name: "Neighbouring communities", value: neighbours.join(", ") },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en",
      about: { "@id": `${SITE_URL}/#place` },
    },
  ],
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${comfortaa.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[70] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>
          <ScrollProgress />
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}
