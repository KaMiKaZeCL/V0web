"use client"

import { useMemo, useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import ProductCard from "@/components/product-card"
import { allStoreProducts } from "@/lib/data"

export default function StorePage() {
  const [q, setQ] = useState("")
  const [category, setCategory] = useState("Todos")

  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(allStoreProducts.map((p) => p.category)))],
    []
  )
  const items = useMemo(() => {
    const base = category === "Todos" ? allStoreProducts : allStoreProducts.filter((p) => p.category === category)
    const s = q.toLowerCase()
    if (!s) return base
    return base.filter((p) => (p.name + " " + p.description).toLowerCase().includes(s))
  }, [q, category])

  return (
    <section className="section">
      <Container fluid="xl">
        <span className="badge badge-soft rounded-pill">Tienda</span>
        <h1 className="h2 fw-semibold mt-2 text-gradient">Compra directa</h1>
        <p className="text-muted">Hardware, software y licencias South Developers con soporte y logística en Chile.</p>

        <Row className="g-2 align-items-stretch mb-3">
          <Col md={6}>
            <Form.Control
              placeholder="Buscar en la tienda…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
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
      </Container>
    </section>
  )
}
