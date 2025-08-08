"use client"

import { useMemo, useState } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Container, Row, Col, Form, Badge, Card } from "react-bootstrap"
import Image from "next/image"
import { allProducts } from "@/lib/data"
import GlossaryLink from "@/components/glossary-link"

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
        <section className="py-5">
          <Container>
            <Badge bg="secondary" className="rounded-pill">Productos</Badge>
            <h1 className="h2 fw-semibold mt-2">Plataformas, hardware y software listos</h1>
            <p className="text-muted">Desde servidores y workstations, hasta laptops/notebooks, tablets, pantallas, impresoras, data center y partes y piezas. También plataformas de IA, nube y seguridad.</p>

            <Row className="g-2 align-items-stretch mb-3">
              <Col md={6}>
                <Form.Control placeholder="Buscar productos..." value={q} onChange={(e) => setQ(e.target.value)} />
              </Col>
              <Col md={6} className="d-flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`btn btn-sm ${category === c ? "btn-success" : "btn-outline-secondary"}`}
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
                  <Card className="h-100">
                    <div className="ratio ratio-16x9">
                      <Image src={p.image || "/placeholder.svg"} alt={p.name} fill style={{ objectFit: "cover" }} />
                    </div>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start">
                        <Card.Title className="h6 mb-0">{p.name}</Card.Title>
                        <Badge bg="secondary">{p.category}</Badge>
                      </div>
                      <Card.Text className="text-muted small mt-2">{p.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="mt-3 text-muted small">
              Nota: Integramos <GlossaryLink termKey="finops">FinOps</GlossaryLink> para optimizar costos de infraestructura y plataformas.
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
