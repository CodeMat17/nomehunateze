"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { nav } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex min-h-11 items-center gap-2.5", className)}>
      <Image src="/hero-img-2.webp" alt="" width={40} height={40} className="size-10 rounded-full object-cover ring-1 ring-gold/50 ring-offset-2 ring-offset-background" priority />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-2xl font-semibold tracking-tight">Nomeh</span>
        <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">Unateze</span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl backdrop-saturate-150 supports-backdrop-filter:bg-background/65">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative inline-flex min-h-11 items-center rounded-full px-3.5 text-[0.8rem] font-medium tracking-wide transition-colors hover:text-primary",
                      active ? "text-primary" : "text-foreground/80"
                    )}
                  >
                    {item.label}
                    {active && (
                      <span aria-hidden className="absolute bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-gold" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-lg" className="size-11 rounded-full lg:hidden" aria-label="Open menu" />
              }
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-uli p-0 text-nzu">
              <div className="uli-texture absolute inset-0 opacity-[0.07]" aria-hidden />
              <div className="relative flex h-full flex-col px-6 pt-16 pb-8">
                <SheetTitle className="mb-6 font-heading text-sm uppercase tracking-[0.3em] text-gold">
                  Explore Nomeh
                </SheetTitle>
                <nav aria-label="Mobile">
                  <ul className="flex flex-col">
                    {nav.map((item, i) => (
                      <li key={item.href} className="border-b border-nzu/10">
                        <SheetClose
                          render={
                            <Link
                              href={item.href}
                              aria-current={isActive(pathname, item.href) ? "page" : undefined}
                              className="flex min-h-14 items-baseline gap-4 font-heading text-2xl aria-[current=page]:text-gold"
                            />
                          }
                          nativeButton={false}
                        >
                          <span className="font-sans text-xs text-nzu/70">0{i + 1}</span>
                          {item.label}
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <p className="mt-auto text-sm text-nzu/70">
                  Nkanu East · Enugu State · Nigeria
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
