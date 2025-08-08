"use client"

import { useMemo, useState } from "react"
import { Container, Row, Col, Form, Badge, Card, Button } from "react-bootstrap"
import Image from "next/image"
import GlossaryLink from "@/components/glossary-link"
import { allProducts } from "@/lib/data"
import Link from "next/link"

export default function ProductsPage() {
  const [q, setQ] = useState("")
  const [category, setCategory] = useState("Todos")

  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(allProducts.map((p) => p.category)))],
    []
  )

  const items = useMemo(() => {
    const base = category === "Todos" ? allProducts : allProducts.filter((p) => p.category === category)
    if (!q) return base
    const s = q.toLowerCase()
    return base.filter((p) => (p.name + " " + p.description).toLowerCase().includes(s))
  }, [q, category])

  return (
    <section className="section">
      <Container fluid="xl">
        <Badge bg="secondary" className="rounded-pill">Productos</Badge>
        <h1 className="h2 fw-semibold mt-2 text-gradient">Plataformas, hardware y software listos</h1>
        <p className="text-muted">
          Catálogo curado para producción: IA, IoT, nube, seguridad y equipos. Integramos <GlossaryLink termKey="finops">FinOps</GlossaryLink> para optimizar TCO.
        </p>

        <Row className="g-2 align-items-stretch mb-3">
          <Col md={6}>
            <Form.Control
              placeholder="Buscar productos…"
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
              <Card className="h-100 card-hover">
                <div className="ratio ratio-16x9">
                  <Image src={p.image || "/placeholder.svg"} alt={p.name} fill style={{ objectFit: "cover" }} />
                </div>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <Card.Title className="h6 mb-0">{p.name}</Card.Title>
                    <Badge bg="secondary">{p.category}</Badge>
                  </div>
                  <Card.Text className="text-muted small mt-2">{p.description}</Card.Text>
                  <div className="d-flex justify-content-end">
                    <Button as={Link} href="/store" size="sm" variant="outline-secondary">Comprar</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
