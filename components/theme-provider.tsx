"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </LazyMotion>
    </NextThemesProvider>
  )
}
