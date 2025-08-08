"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { ShoppingCart } from 'lucide-react'
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
      <Navbar expand="md" fixed="top" className={`navbar-blur ${scrolled ? "scrolled" : ""}`}>
        <Container fluid="xl">
          <Navbar.Brand as={Link} href="/" className="d-flex align-items-center gap-2">
            <span className="d-inline-block rounded-circle" style={{ width: 30, height: 30, background: "linear-gradient(135deg, var(--sd-primary), var(--sd-accent))" }} aria-hidden />
            <span className="fw-semibold">South Developers</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="primary-nav" />
          <Navbar.Collapse id="primary-nav">
            <Nav className="ms-2">
              {nav.map((item) => (
                <Nav.Link
                  as={Link}
                  href={item.href}
                  key={item.href}
                  active={pathname === item.href}
                  className="px-2"
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
            <div className="ms-auto d-flex align-items-center gap-2">
              <Button as={Link} href="/contact" variant="outline-secondary" className="d-none d-md-inline-flex">
                Solicitar demo
              </Button>
              <Button variant="primary" onClick={openCart} aria-label="Abrir carrito" className="d-inline-flex align-items-center gap-1">
                <ShoppingCart size={18} />
                <span className="d-none d-sm-inline">Carrito</span>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CartSheet />
      <div style={{ height: 72 }} aria-hidden /> {/* spacer for fixed navbar */}
    </>
  )
}
