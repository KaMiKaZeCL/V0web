"use client"

import { useMemo, useState } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Container, Row, Col, Form, Badge } from "react-bootstrap"
import Image from "next/image"
import { allProducts, featuredProducts } from "@/lib/data"
import GlossaryLink from "@/components/glossary-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags } from "@fortawesome/free-solid-svg-icons"
import ProductCard from "@/components/product-card"

export const metadata = {
  title: "Productos",
  description: "Plataformas y soluciones listas para producción.",
}

export default function ProductsPage() {
  const [q, setQ] = useState("")
  const [category, setCategory] = useState("Todos")

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(allProducts.map(p => p.category)))], [])
  const items = useMemo(() => {
    const base = category === "Todos" ? allProducts : allProducts.filter(p => p.category === category)
    if (!q) return base
    return base.filter(p => (p.name + " " + p.description).toLowerCase().includes(q.toLowerCase()))
  }, [q, category])

  return (
    <div>
      <SiteHeader />
      <main>
        <section className="section">
          <Container fluid="xl">
            <Badge bg="secondary" className="rounded-pill">Productos</Badge>
            <h1 className="h2 fw-semibold mt-2 text-gradient">Plataformas, hardware y software listos</h1>
            <p className="text-muted">Catálogo con opciones listas para producción: IA, IoT, nube, seguridad y equipos.</p>

            <Row className="g-2 align-items-stretch mb-3">
              <Col md={6}>
                <Form.Control placeholder="Buscar productos..." value={q} onChange={(e) => setQ(e.target.value)} />
              </Col>
              <Col md={6} className="d-flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`badge ${category === c ? "badge-soft" : "text-bg-light border"} rounded-pill py-2 px-3 d-inline-flex align-items-center gap-2`}
                    aria-pressed={category === c}
                  >
                    <FontAwesomeIcon icon={faTags} className={category === c ? "text-primary" : "text-secondary"} />
                    {c}
                  </button>
                ))}
              </Col>
            </Row>

            <Row className="g-3">
              {items.map((p) => (
                <Col key={p.id} sm={6} lg={4}>
                  <ProductCard product={p} />
                </Col>
              ))}
            </Row>

            <div className="mt-3 text-muted small">
              Integramos <GlossaryLink termKey="finops">FinOps</GlossaryLink> para optimizar costos de infraestructura y plataformas.
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
