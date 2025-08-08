import type { Metadata } from "next"
import "./globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { CartProvider } from "@/components/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "South Developers Chile SpA",
    template: "%s | South Developers Chile SpA",
  },
  description:
    "Plataformas y servicios en IA, Nube, Ciberseguridad, IoT y software a medida. Enfoque moderno, resultados medibles.",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "antialiased bg-white text-stone-900 selection:bg-stone-800 selection:text-white"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <CartProvider>
            <SiteHeader />
            <main className="min-h-screen">{children}</main>
            <SiteFooter />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
