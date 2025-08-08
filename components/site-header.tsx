"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Navbar, Container, Nav, Button, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useCart } from "./cart-provider"
import CartSheet from "./cart-sheet"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons"

const nav = [
  { href: "/about", label: "Quiénes somos" },
  { href: "/services", label: "Servicios" },
  { href: "/products", label: "Productos" },
  { href: "/store", label: "Tienda" },
  { href: "/contact", label: "Contacto" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const { openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <Navbar expand="lg" fixed="top" className={`navbar-blur ${scrolled ? "scrolled" : ""}`}>
        <Container fluid="xl">
          <Navbar.Brand as={Link} href="/" className="d-flex align-items-center gap-2">
            <Image src="/images/south-developers-logo.png" alt="South Developers Chile SpA" width={34} height={34} />
            <span className="fw-semibold">South Developers</span>
          </Navbar.Brand>

          {/* Desktop actions */}
          <div className="order-lg-3 d-none d-lg-flex align-items-center gap-2">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tip-quote">Cotiza con nosotros</Tooltip>}>
              <Button as={Link} href="/contact" variant="outline-secondary">Cotiza con nosotros</Button>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tip-cart">Abrir carrito</Tooltip>}>
              <Button variant="primary" onClick={openCart} aria-label="Abrir carrito" className="d-inline-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="d-none d-xl-inline">Carrito</span>
              </Button>
            </OverlayTrigger>
          </div>

          {/* Mobile toggles */}
          <div className="ms-auto order-lg-2 d-flex d-lg-none align-items-center gap-2">
            <OverlayTrigger placement="bottom" overlay={<Tooltip id="tip-cart-m">Carrito</Tooltip>}>
              <Button variant="outline-secondary" onClick={openCart} aria-label="Abrir carrito">
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
            </OverlayTrigger>
            <Navbar.Toggle aria-controls="primary-offcanvas" onClick={() => setShow(true)}>
              <span className="visually-hidden">Abrir menú</span>
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
          </div>

          {/* Desktop nav */}
          <Navbar.Collapse id="primary-nav" className="order-lg-1">
            <Nav className="ms-2">
              <Nav.Link as={Link} href="/" active={pathname === "/"} className="px-2">Inicio</Nav.Link>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas menu */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} href="/" active={pathname === "/"} onClick={() => setShow(false)} className="py-2">Inicio</Nav.Link>
            {nav.map((item) => (
              <Nav.Link
                as={Link}
                href={item.href}
                key={item.href}
                active={pathname === item.href}
                onClick={() => setShow(false)}
                className="py-2"
              >
                {item.label}
              </Nav.Link>
            ))}
            <hr />
            <Button as={Link} href="/contact" variant="primary" className="w-100" onClick={() => setShow(false)}>
              Cotiza con nosotros
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <CartSheet />
      <div style={{ height: 72 }} aria-hidden /> {/* spacer for fixed navbar */}
    </>
  )
}
