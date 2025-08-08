"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import { useCart } from "./cart-context"
import CartSheet from "./cart-sheet"
import Image from "next/image"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/products", label: "Productos" },
  { href: "/store", label: "Tienda" },
  { href: "/about", label: "Quiénes somos" },
  { href: "/contact", label: "Contacto" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const { setOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header className={cn(
        "sticky top-0 z-50 w-full border-b border-stone-200/80 backdrop-blur",
        scrolled ? "bg-white/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]" : "bg-white/70"
      )}>
        {/* Top navigation rail (always visible, scrollable on mobile) */}
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-14 items-center justify-between gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/icon-192.png" width={24} height={24} alt="South Developers logo" className="rounded" />
              <span className="text-sm font-semibold tracking-tight">South Developers</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {NAV.map(item => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium text-stone-700 hover:text-stone-900 rounded-md transition-colors",
                      active && "text-stone-900 underline underline-offset-4 decoration-stone-400"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="h-9 rounded-md border-stone-300 text-stone-700 hover:bg-stone-100" onClick={() => setOpen(true)}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Carrito
              </Button>
            </div>
          </div>
          {/* Mobile scrolling nav */}
          <div className="md:hidden -mb-px overflow-x-auto pb-2">
            <div className="flex w-max gap-1">
              {NAV.map(item => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium rounded-md border border-stone-200 bg-white text-stone-700 hover:text-stone-900",
                      active && "border-stone-400 text-stone-900"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </header>
      <CartSheet />
    </>
  )
}
