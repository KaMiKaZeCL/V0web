import Image from "next/image"
import Link from "next/link"
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap"
import GlossaryLink from "@/components/glossary-link"
import ProductCard from "@/components/product-card"
import { productHighlights } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      {/* Hero sobrio y comercial */}
      <section className="section">
        <Container fluid="xl">
          <Row className="align-items-center gy-4">
            <Col md={7} className="position-relative">
              <span className="badge badge-soft rounded-pill">Estrategia · Ingeniería · Operación</span>
              <h1 className="display-5 fw-semibold mt-3 text-gradient">
                Tecnología sobria para mover KPIs del negocio
              </h1>
              <p className="lead text-muted">
                Aceleramos iniciativas de alto impacto combinando <GlossaryLink termKey="sre">SRE</GlossaryLink>, arquitectura moderna y
                un enfoque <strong>AI‑first</strong>. Trabajamos con <GlossaryLink termKey="sla">SLAs</GlossaryLink> exigentes, <GlossaryLink termKey="kpi">KPIs</GlossaryLink> visibles y
                entregas iterativas con calidad y seguridad por diseño.
              </p>
              <ul className="text-muted mb-3">
                <li><strong>IA aplicada</strong>: <GlossaryLink termKey="rag">RAG</GlossaryLink> con evaluación y trazabilidad, agentes con herramientas y observabilidad.</li>
                <li><strong>Nube y Plataformas</strong>: IDP, <GlossaryLink termKey="finops">FinOps</GlossaryLink>, resiliencia y performance auditables.</li>
                <li><strong>Ciberseguridad</strong>: <GlossaryLink termKey="zero-trust">Zero Trust</GlossaryLink>, <GlossaryLink termKey="iam">IAM</GlossaryLink>/<GlossaryLink termKey="mfa">MFA</GlossaryLink>, cumplimiento y respuesta a incidentes.</li>
              </ul>
              <div className="d-flex flex-wrap gap-2">
                <Button as={Link} href="/store" className="btn-cta">Visitar Tienda</Button>
                <Button as={Link} href="/services" variant="outline-secondary">Explorar Servicios</Button>
              </div>
            </Col>
            <Col md={5}>
              <div className="ratio ratio-16x9 rounded-xl border overflow-hidden shadow-soft bg-grid">
                <Image
                  src={"/observabilidad-operaciones.png"}
                  alt="Centro de operación con observabilidad"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Propuesta de valor: técnico y comercial */}
      <section className="section section-light section-divider">
        <Container fluid="xl">
          <Row className="gy-4">
            <Col md={6}>
              <Badge bg="secondary" className="rounded-pill">Propuesta de valor</Badge>
              <h2 className="h2 fw-semibold mt-2">Resultados medibles, no promesas</h2>
              <p className="text-muted">
                Alineamos estrategia, arquitectura y operación continua. Definimos <GlossaryLink termKey="okr">OKRs</GlossaryLink> y <GlossaryLink termKey="kpi">KPIs</GlossaryLink>, acordamos
                <GlossaryLink termKey="sla"> SLAs</GlossaryLink> y ejecutamos con <GlossaryLink termKey="observability">observabilidad</GlossaryLink> end‑to‑end. Reducimos <GlossaryLink termKey="mttr">MTTR</GlossaryLink>, mejoramos
                lead time y elevamos la calidad sin sacrificar velocidad.
              </p>
              <ul className="mb-0">
                <li><strong>Gobierno y seguridad</strong> integrados: políticas, <GlossaryLink termKey="sast">SAST</GlossaryLink>/<GlossaryLink termKey="dast">DAST</GlossaryLink>, gestión de identidades y privacidad.</li>
                <li><strong>Arquitectura componible</strong>: APIs, eventos, <GlossaryLink termKey="ci-cd">CI/CD</GlossaryLink> y despliegues controlados (<GlossaryLink termKey="canary">Canary</GlossaryLink>, <GlossaryLink termKey="feature-flags">Feature Flags</GlossaryLink>).</li>
                <li><strong>Datos y ML</strong>: <GlossaryLink termKey="data-lake">Lagos de datos</GlossaryLink>, <GlossaryLink termKey="etl-elt">ELT/CDC</GlossaryLink>, <GlossaryLink termKey="mlops">MLOps</GlossaryLink> y BI auto‑servicio.</li>
              </ul>
            </Col>
            <Col md={6}>
              <Row className="g-3">
                <Col sm={6}>
                  <Card className="h-100 card-hover">
                    <Card.Body>
                      <Card.Title className="h6 mb-1">Operación confiable</Card.Title>
                      <Card.Subtitle className="text-muted small">Compromisos visibles</Card.Subtitle>
                      <Row className="mt-3 gy-2 small">
                        <Col xs={6}><div className="fw-semibold">99,95%</div><div className="text-muted">Uptime</div></Col>
                        <Col xs={6}><div className="fw-semibold">{'< 24h'}</div><div className="text-muted">Lead time</div></Col>
                        <Col xs={6}><div className="fw-semibold">{'< 60m'}</div><div className="text-muted"><GlossaryLink termKey="mttr">MTTR</GlossaryLink></div></Col>
                        <Col xs={6}><div className="fw-semibold">{'> 70'}</div><div className="text-muted">NPS</div></Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6}>
                  <Card className="h-100 card-hover">
                    <Card.Body>
                      <Card.Title className="h6 mb-1">Seguridad por diseño</Card.Title>
                      <Card.Subtitle className="text-muted small"><GlossaryLink termKey="zero-trust">Zero Trust</GlossaryLink>, <GlossaryLink termKey="iam">IAM</GlossaryLink> y hardening</Card.Subtitle>
                      <div className="small text-muted mt-2">
                        Segmentación, escaneo continuo y respuesta con runbooks, sin fricción para los equipos.
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tienda destacada (protagonista) */}
      <section className="section section-divider">
        <Container fluid="xl">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-2">
            <div>
              <h2 className="h2 fw-semibold">Tienda destacada</h2>
              <p className="text-muted mb-0">Hardware, software y plataformas listas para producción.</p>
            </div>
            <Button as={Link} href="/store" variant="outline-secondary">Ver todo →</Button>
          </div>
          <Row className="g-3 mt-1">
            {productHighlights.map((p) => (
              <Col key={p.id} sm={6} lg={4}>
                <Card className="h-100 card-hover">
                  <div className="ratio ratio-16x9">
                    <Image src={p.image || "/placeholder.svg"} alt={p.name} fill style={{ objectFit: "cover" }} />
                  </div>
                  <Card.Body>
                    <Card.Title className="h6 mb-0">{p.name}</Card.Title>
                    <Card.Subtitle className="text-muted small">{p.category}</Card.Subtitle>
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

      {/* CTA final sobrio (sin azules) */}
      <section className="section section-cta">
        <Container fluid="xl">
          <Row className="align-items-center gy-3">
            <Col md={8}>
              <h3 className="h4 fw-semibold mb-1">Llevemos tus KPIs a otro nivel</h3>
              <p className="text-muted mb-0">
                Conversemos de objetivos, <GlossaryLink termKey="sla">SLAs</GlossaryLink> y plazos. Diseñamos una ruta de valor a 90 días con resultados verificables.
              </p>
            </Col>
            <Col md={4} className="d-flex justify-content-md-end gap-2">
              <Button as={Link} href="/contact" className="btn-cta">Contactar</Button>
              <Button as={Link} href="/services" variant="outline-secondary">Ver metodología</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
