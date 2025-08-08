"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Button, OverlayTrigger, Tooltip, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { useCart } from "./cart-provider"
import CartSheet from "./cart-sheet"

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/products", label: "Productos" },
  { href: "/store", label: "Tienda" },
  { href: "/about", label: "Quiénes somos" },
  { href: "/contact", label: "Contacto" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const { openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header className={`navbar-blur sticky-top ${scrolled ? "scrolled" : ""}`}>
        <Container fluid="xl" className="d-flex align-items-center" style={{ height: 56 }}>
          <Link href="/" className="d-inline-flex align-items-center gap-2 text-decoration-none">
            <Image src="/images/south-developers-logo.png" alt="South Developers" width={28} height={28} />
            <span className="fw-semibold text-dark">South Developers</span>
          </Link>

          {/* Desktop menu */}
          <nav className="d-none d-md-flex ms-3 me-auto align-items-center">
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link-plain ${pathname === item.href ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Actions (no CTA infantil) */}
          <OverlayTrigger placement="bottom" overlay={<Tooltip id="tip-cart">Abrir carrito</Tooltip>}>
            <Button
              variant="outline-secondary"
              className="px-3 rounded"
              onClick={openCart}
              aria-label="Abrir carrito"
            >
              <FontAwesomeIcon icon={faCartShopping} /> <span className="d-none d-sm-inline ms-2">Carrito</span>
            </Button>
          </OverlayTrigger>
        </Container>

        {/* Mobile horizontal nav (siempre visible, sin hamburguesa) */}
        <div className="d-md-none border-top">
          <div className="container-fluid px-3 py-2 overflow-auto" style={{ whiteSpace: "nowrap" }}>
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`me-2 px-3 py-1 rounded-pill ${pathname === item.href ? "chip chip-active" : "chip"}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </header>

      <CartSheet />
      <div style={{ height: 0 }} aria-hidden />
    </>
  )
}
