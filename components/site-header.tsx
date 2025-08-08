"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Container, Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useCart } from "./cart-provider"
import CartSheet from "./cart-sheet"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

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
      <header className={`site-header sticky-top ${scrolled ? "scrolled" : ""}`}>
        {/* Mobile top menu (scrollable) */}
        <div className="topbar d-flex d-md-none">
          <Container fluid="xl" className="d-flex align-items-center">
            <nav className="nav-top-scroll" role="navigation" aria-label="Menú principal">
              {nav.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`top-link ${active ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </Container>
        </div>

        {/* Main bar: desktop (brand + menu + actions) / mobile (brand + actions) */}
        <div className="brandbar">
          <Container fluid="xl" className="d-flex align-items-center gap-3">
            <Link href="/" className="brand d-inline-flex align-items-center gap-2 text-decoration-none">
              <Image src="/images/south-developers-logo.png" alt="South Developers Chile SpA" width={32} height={32} />
              <span className="brand-name">South Developers</span>
            </Link>

            {/* Desktop menu centered */}
            <nav className="d-none d-md-flex ms-2 me-auto align-items-center gap-1" role="navigation" aria-label="Menú principal">
              {nav.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-pill ${active ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Actions */}
            <div className="ms-auto d-flex align-items-center gap-2">
              <OverlayTrigger placement="bottom" overlay={<Tooltip id="tip-quote">Cotiza con nosotros</Tooltip>}>
                <Button as={Link} href="/contact" variant="outline-secondary" className="btn-outline-stone">
                  Cotiza con nosotros
                </Button>
              </OverlayTrigger>
              <OverlayTrigger placement="bottom" overlay={<Tooltip id="tip-cart">Abrir carrito</Tooltip>}>
                <Button variant="primary" onClick={openCart} aria-label="Abrir carrito" className="btn-cta d-inline-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="d-none d-sm-inline">Carrito</span>
                </Button>
              </OverlayTrigger>
            </div>
          </Container>
        </div>
      </header>

      {/* The cart panel (kept as offcanvas) */}
      <CartSheet />
    </>
  )
}
