"use client"

import { useMemo, useState } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Container, Row, Col, Form, Card } from "react-bootstrap"
import { glossary } from "@/lib/glossary"

function slugify(key: string) {
  return key.toLowerCase().replace(/\s+/g, "-")
}

export default function GlossaryPage() {
  const [q, setQ] = useState("")
  const entries = useMemo(() => {
    const list = Object.entries(glossary)
      .map(([key, val]) => ({ key, ...val }))
      .sort((a, b) => a.term.localeCompare(b.term, "es"))
    if (!q) return list
    const s = q.toLowerCase()
    return list.filter(e =>
      e.term.toLowerCase().includes(s) ||
      e.definition.toLowerCase().includes(s) ||
      (e.aka || []).some(a => a.toLowerCase().includes(s))
    )
  }, [q])

  return (
    <div>
      <SiteHeader />
      <main>
        <section className="py-5">
          <Container>
            <h1 className="h2 fw-semibold">Glosario técnico</h1>
            <p className="text-muted">Definiciones claras y modernas para que conversemos en el mismo idioma.</p>
            <Form.Control
              placeholder="Buscar (ej: SLA, SRE, RAG…)"
              className="my-3"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <Row className="g-3">
              {entries.map((e) => (
                <Col key={e.key} sm={6}>
                  <Card id={slugify(e.key)} className="h-100">
                    <Card.Body>
                      <Card.Title className="h6">{e.term}</Card.Title>
                      <Card.Text className="small mb-0">{e.definition}</Card.Text>
                      {e.aka && e.aka.length > 0 && (
                        <div className="small text-muted mt-2"><span className="fw-semibold">También conocido como:</span> {e.aka.join(", ")}</div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
