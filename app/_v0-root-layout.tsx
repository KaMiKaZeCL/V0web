import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css"
import "./brand.css"
import "@/lib/fa" // Font Awesome core CSS loaded once
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "South Developers Chile SpA",
  description: "Soluciones tecnológicas superiores para empresas exigentes.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Importing CSS through JS entry points is supported by Next.js, and global styles belong in the root layout. [^1] */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
