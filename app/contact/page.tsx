"use client"

import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap"
import { useState, useTransition } from "react"
import { useToast } from "@/hooks/use-toast"

async function submitLead(formData: FormData) {
  "use server"
  const payload = Object.fromEntries(formData.entries())
  console.log("Nuevo lead:", payload)
  await new Promise((r) => setTimeout(r, 800))
  return { ok: true }
}

export default function ContactPage() {
  const [pending, startTransition] = useTransition()
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  return (
    <section className="section">
      <Container fluid="xl">
        <Badge bg="secondary" className="rounded-pill">Contacto</Badge>
        <h1 className="h2 fw-semibold mt-2 text-gradient">Conversemos objetivos y tiempos</h1>
        <Row className="gy-4 mt-1">
          <Col lg={7}>
            <Form
              action={(formData) =>
                startTransition(async () => {
                  const res = await submitLead(formData)
                  if (res.ok) {
                    toast({ title: "Enviado", description: "Gracias, te contactaremos pronto." })
                    setName(""); setEmail(""); setCompany(""); setMessage("")
                  } else {
                    toast({ title: "Error", description: "Intenta nuevamente", variant: "destructive" as any })
                  }
                })
              }
            >
              <Row className="g-3">
                <Col md={6}>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
                <Col md={6}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </Col>
                <Col md={6}>
                  <Form.Label>Empresa</Form.Label>
                  <Form.Control name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                </Col>
                <Col md={12}>
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" name="message" rows={6} required value={message} onChange={(e) => setMessage(e.target.value)} />
                </Col>
              </Row>
              <div className="mt-3">
                <Button type="submit" disabled={pending} className="btn-cta">
                  {pending ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={5}>
            <div className="p-3 rounded-xl border">
              <div className="fw-semibold">¿Por qué ahora?</div>
              <p className="text-muted mb-2 small">
                Reducimos tiempo a valor con entregas iterativas y <strong>SLAs</strong> exigentes. Integramos seguridad, costos y experiencia desde el inicio.
              </p>
              <ul className="small mb-0">
                <li>Ruta de valor a 90 días con hitos verificables</li>
                <li>Observabilidad y KPIs visibles para gestión</li>
                <li>Arquitectura con gobernanza y escalabilidad</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
