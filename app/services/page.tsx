import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import GlossaryLink from "@/components/glossary-link"
import MediaGallery from "@/components/media-gallery"
import { servicesCatalog } from "@/lib/data"
import { Container, Row, Col, Card, Badge, OverlayTrigger, Tooltip } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRobot, faCloud, faIndustry, faShieldHalved, faGears, faBolt, faChartLine } from "@fortawesome/free-solid-svg-icons"

export default function ServicesPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <section className="section position-relative">
          <div className="aurora" aria-hidden />
          <Container fluid="xl">
            <Badge bg="secondary" className="rounded-pill">Metodología y Servicios</Badge>
            <h1 className="h2 fw-semibold mt-2 text-gradient">Estrategia, delivery y operación con métricas</h1>
            <p className="text-muted">
              Operamos con <GlossaryLink termKey="okr">OKRs</GlossaryLink>, <GlossaryLink termKey="kpi">KPIs</GlossaryLink> y <GlossaryLink termKey="sla">SLAs</GlossaryLink>. Desde el descubrimiento y la arquitectura, hasta la entrega continua y la
              operación <GlossaryLink termKey="sre">SRE</GlossaryLink>. Seguridad por diseño y datos privados protegidos.
            </p>

            <Row className="g-3 mt-1">
              {servicesCatalog.map((s) => (
                <Col key={s.name} sm={6} lg={4}>
                  <Card className="h-100 card-hover">
                    <Card.Body>
                      <Card.Title className="h6 d-flex align-items-center gap-2">
                        {/* Use FA icons broadly by mapping categories visually */}
                        <FontAwesomeIcon icon={
                          s.name.includes("IA") ? faRobot :
                          s.name.includes("Nube") ? faCloud :
                          s.name.includes("IoT") ? faIndustry :
                          s.name.includes("Ciber") ? faShieldHalved :
                          s.name.includes("Desarrollo") ? faGears :
                          faChartLine
                        } className="text-primary" />
                        {s.name}
                      </Card.Title>
                      <Card.Subtitle className="text-muted small">{s.subtitle}</Card.Subtitle>
                      <ul className="small mt-2 mb-0">
                        {s.offers.map((o) => (
                          <li key={o}>
                            <OverlayTrigger placement="top" overlay={<Tooltip id={`tip-${o}`}>{o}</Tooltip>}>
                              <span>{o}</span>
                            </OverlayTrigger>
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="mt-5">
              <h2 className="h4 fw-semibold">Demostraciones</h2>
              <p className="text-muted">Videos e imágenes de nuestras plataformas en acción.</p>
              <MediaGallery
                items={[
                  { type: "image", src: "/idp-platform-demo.png", alt: "Demo de IDP" },
                  { type: "image", src: "/sre-observability-dashboard.png", alt: "Tablero de observabilidad SRE" },
                  { type: "image", src: "/llm-orchestration.png", alt: "Orquestación LLM" },
                ]}
              />
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
