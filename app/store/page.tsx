"use client"

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useMemo, useState } from "react"
import { Container, Row, Col, Form, Button, OverlayTrigger, Tooltip } from "react-bootstrap"
import { allStoreProducts } from "@/lib/data"
import ProductCard from "@/components/product-card"
import { useCart } from "@/components/cart-provider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

export default function StorePage() {
  const [q, setQ] = useState("")
  const [category, setCategory] = useState("Todos")
  const { openCart } = useCart()

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(allStoreProducts.map(p => p.category)))], [])
  const items = useMemo(() => {
    const base = category === "Todos" ? allStoreProducts : allStoreProducts.filter(p => p.category === category)
    if (!q) return base
    return base.filter(p => (p.name + " " + p.description).toLowerCase().includes(q.toLowerCase()))
  }, [q, category])

  return (
    <div>
      <SiteHeader />
      <main>
        <section className="section">
          <Container fluid="xl">
            <span className="badge badge-soft rounded-pill">Tienda</span>
            <h1 className="h2 fw-semibold mt-2 text-gradient">Compra directa</h1>
            <p className="text-muted">Servidores, workstations, laptops/notebooks, tablets, pantallas, impresoras, data center, partes y piezas y más.</p>

            <Row className="g-2 align-items-stretch mb-3">
              <Col md={6}>
                <Form.Control placeholder="Buscar en la tienda..." value={q} onChange={(e) => setQ(e.target.value)} />
              </Col>
              <Col md={6} className="d-flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`badge ${category === c ? "badge-soft" : "text-bg-light border"} rounded-pill py-2 px-3`}
                    aria-pressed={category === c}
                  >
                    {c}
                  </button>
                ))}
              </Col>
            </Row>

            <Row className="g-3">
              {items.map((p) => (
                <Col key={p.id} sm={6} lg={4}>
                  <ProductCard product={p as any} />
                </Col>
              ))}
            </Row>

            <div className="d-flex justify-content-center mt-3">
              <OverlayTrigger placement="top" overlay={<Tooltip id="tip-view-cart">Ver carrito</Tooltip>}>
                <Button onClick={openCart} className="btn-cta px-4 d-inline-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Ver Carrito
                </Button>
              </OverlayTrigger>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
