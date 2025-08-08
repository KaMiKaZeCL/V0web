"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Navbar, Container, Nav, Button, Offcanvas } from "react-bootstrap"
import { useState } from "react"
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
  const [show, setShow] = useState(false)

  return (
    <>
      <Navbar bg="light" expand="md" fixed="top" className="border-bottom">
        <Container>
          <Navbar.Brand as={Link} href="/" className="d-flex align-items-center gap-2">
            <span className="d-inline-block rounded" style={{ width: 32, height: 32, backgroundColor: "#0ea5a4" }} aria-hidden />
            South Developers
          </Navbar.Brand>
          <div className="ms-auto d-flex align-items-center gap-2 d-md-none">
            <Button variant="outline-secondary" onClick={openCart} aria-label="Abrir carrito">
              <ShoppingCart size={18} />
            </Button>
            <Navbar.Toggle aria-controls="primary-nav" onClick={() => setShow(true)} />
          </div>
          <Navbar.Collapse id="primary-nav" className="d-none d-md-flex">
            <Nav className="ms-3">
              {nav.map((item) => (
                <Nav.Link
                  as={Link}
                  href={item.href}
                  key={item.href}
                  active={pathname === item.href}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
            <div className="ms-auto d-flex align-items-center gap-2">
              <Button as={Link} href="/contact" variant="outline-secondary">Solicitar demo</Button>
              <Button variant="outline-secondary" onClick={openCart} aria-label="Abrir carrito">
                <ShoppingCart size={18} />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {nav.map((item) => (
              <Nav.Link
                as={Link}
                href={item.href}
                key={item.href}
                active={pathname === item.href}
                onClick={() => setShow(false)}
              >
                {item.label}
              </Nav.Link>
            ))}
            <hr />
            <Button as={Link} href="/contact" variant="primary" className="w-100">Solicitar demo</Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <CartSheet />
      <div style={{ height: 64 }} aria-hidden /> {/* spacer for fixed navbar */}
    </>
  )
}
