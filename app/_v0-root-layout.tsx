import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart-provider"
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "South Developers Chile SpA",
  description: "Soluciones tecnológicas superiores para empresas exigentes.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <TooltipProvider delayDuration={150}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            <CartProvider>
              {children}
            </CartProvider>
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
