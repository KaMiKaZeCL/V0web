"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import { useCart } from "./cart-context"
import CartSheet from "./cart-sheet"
import Image from "next/image"
import { cn } from "@/lib/utils"

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios", mega: true },
  { href: "/products", label: "Productos" },
  { href: "/store", label: "Tienda" },
  { href: "/about", label: "Quiénes somos" },
  { href: "/contact", label: "Contacto" },
]

const MEGA = [
  {
    title: "Agentes de IA",
    desc: "RAG evaluado, orquestación y guardrails.",
    links: [
      { label: "Diseño de agentes", href: "/services" },
      { label: "RAG con trazabilidad", href: "/services" },
      { label: "Observabilidad LLM", href: "/services" },
    ],
  },
  {
    title: "Nube & SRE",
    desc: "Plataformas, FinOps y operación confiable.",
    links: [
      { label: "IDP / Plataformas", href: "/services" },
      { label: "FinOps & Resiliencia", href: "/services" },
      { label: "SRE 24/7", href: "/services" },
    ],
  },
  {
    title: "IoT & Edge",
    desc: "Telemetría, control y visión en sitio.",
    links: [
      { label: "5G / LoRa / Edge", href: "/services" },
      { label: "Visión computacional", href: "/services" },
      { label: "Seguridad de dispositivos", href: "/services" },
    ],
  },
  {
    title: "Ciberseguridad",
    desc: "Zero Trust, SOC y respuesta.",
    links: [
      { label: "IAM / MFA", href: "/services" },
      { label: "SOC & Respuesta", href: "/services" },
      { label: "Cumplimiento & Hardening", href: "/services" },
    ],
  },
  {
    title: "Datos & Analítica",
    desc: "Data Lake, ELT/CDC, MLOps y BI.",
    links: [
      { label: "Lagos de datos", href: "/services" },
      { label: "Pipelines ELT/CDC", href: "/services" },
      { label: "MLOps / BI", href: "/services" },
    ],
  },
  {
    title: "Software a Medida",
    desc: "Arquitectura moderna y CI/CD.",
    links: [
      { label: "APIs y SaaS", href: "/services" },
      { label: "Apps web/móviles", href: "/services" },
      { label: "QA & Performance", href: "/services" },
    ],
  },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const { setOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaAreaRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4)
      setMegaOpen(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-stone-200/80 backdrop-blur",
          scrolled ? "bg-white/90 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]" : "bg-white/70"
        )}
      >
        <div
          className="mx-auto max-w-7xl px-4"
          ref={megaAreaRef}
          onMouseLeave={() => setMegaOpen(false)}
        >
          <div className="flex h-14 items-center justify-between gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/icon-192.png" width={24} height={24} alt="South Developers logo" className="rounded" />
              <span className="text-sm font-semibold tracking-tight">South Developers</span>
            </Link>

            {/* Desktop nav with mega on Servicios */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV.map(item => {
                const active = pathname === item.href
                const isMega = Boolean(item.mega)
                return (
                  <div
                    key={item.href}
                    onMouseEnter={() => isMega && setMegaOpen(true)}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-1.5 text-sm font-medium text-stone-700 hover:text-stone-900 rounded-md transition-colors",
                        active && "text-stone-900 underline underline-offset-4 decoration-stone-400"
                      )}
                      aria-haspopup={isMega ? "true" : undefined}
                      aria-expanded={isMega ? megaOpen : undefined}
                    >
                      {item.label}
                    </Link>
                  </div>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="h-9 rounded-md border-stone-300 text-stone-700 hover:bg-stone-100"
                onClick={() => setOpen(true)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Carrito
              </Button>
            </div>
          </div>

          {/* Mobile scrolling nav (no mega) */}
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

          {/* Mega menu panel (desktop only) */}
          <div
            className={cn(
              "pointer-events-none hidden md:block",
              megaOpen ? "pointer-events-auto" : ""
            )}
          >
            {megaOpen && (
              <div className="relative">
                <div className="fixed inset-x-0 top-14 z-40 border-b border-stone-200 bg-white/95 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.22)] backdrop-blur">
                  <div
                    className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 lg:grid-cols-3 xl:grid-cols-6"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    {MEGA.map((col) => (
                      <div key={col.title} className="min-w-0">
                        <div className="text-sm font-semibold text-stone-900">{col.title}</div>
                        <div className="mt-1 text-xs text-stone-600">{col.desc}</div>
                        <ul className="mt-3 space-y-1">
                          {col.links.map((l) => (
                            <li key={l.label}>
                              <Link
                                href={l.href}
                                className="block rounded-md px-2 py-1 text-sm text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                                onClick={() => setMegaOpen(false)}
                              >
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <CartSheet />
    </>
  )
}
