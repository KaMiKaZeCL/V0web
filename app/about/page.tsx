import Image from "next/image"
import { Container, Row, Col, Badge } from "react-bootstrap"
import GlossaryLink from "@/components/glossary-link"

export default function AboutPage() {
  return (
    <section className="section">
      <Container fluid="xl">
        <Badge bg="secondary" className="rounded-pill">Quiénes somos</Badge>
        <h1 className="h2 fw-semibold mt-2 text-gradient">Equipo senior, enfoque moderno y ejecución rigurosa</h1>
        <Row className="gy-4 align-items-start mt-1">
          <Col md={6}>
            <p className="text-muted">
              Somos un equipo de ingeniería, seguridad y datos con experiencia en industrias exigentes. Llevamos iniciativas a producción
              con calidad, seguridad y métricas claras. Trabajamos con principios <GlossaryLink termKey="sre">SRE</GlossaryLink>, arquitectura componible y prácticas
              de <GlossaryLink termKey="devex">DevEx</GlossaryLink> que aceleran la entrega sin comprometer confiabilidad.
            </p>
            <p className="text-muted">
              Respetamos regulación y privacidad. Diseñamos <GlossaryLink termKey="dr">DR</GlossaryLink> con <GlossaryLink termKey="slo">SLOs</GlossaryLink> realistas, definimos <GlossaryLink termKey="sli">SLIs</GlossaryLink> útiles
              y operamos con monitoreo, trazas y <GlossaryLink termKey="observability">observabilidad</GlossaryLink> en serio.
            </p>
          </Col>
          <Col md={6}>
            <Row className="g-3">
              <Col xs={6}>
                <div className="ratio ratio-3x2 rounded-xl border overflow-hidden shadow-soft">
                  <Image
                    src={"/placeholder.svg?height=360&width=540&query=equipo%20senior%20tecnologia%20sobria"}
                    alt="Equipo de ingeniería senior"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Col>
              <Col xs={6}>
                <div className="ratio ratio-3x2 rounded-xl border overflow-hidden shadow-soft">
                  <Image
                    src={"/placeholder.svg?height=360&width=540&query=centro%20operaciones%20sobrio"}
                    alt="Centro de operaciones"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
