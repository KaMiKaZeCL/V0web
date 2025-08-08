import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import GlossaryLink from "@/components/glossary-link"
import MediaGallery from "@/components/media-gallery"
import { servicesCatalog } from "@/lib/data"
import { Container, Row, Col, Card, Badge } from "react-bootstrap"

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
              operación <GlossaryLink termKey="sre">SRE</GlossaryLink>. Trabajamos con datos privados, compliance y seguridad por diseño.
            </p>

            <Row className="g-3 mt-1">
              {servicesCatalog.map((s) => (
                <Col key={s.name} sm={6} lg={4}>
                  <Card className="h-100 card-hover">
                    <Card.Body>
                      <Card.Title className="h6 d-flex align-items-center gap-2">{s.icon}{s.name}</Card.Title>
                      <Card.Subtitle className="text-muted small">{s.subtitle}</Card.Subtitle>
                      <ul className="small mt-2 mb-0">
                        {s.offers.map((o) => (<li key={o}>{o}</li>))}
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
                  { type: "video", src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", poster: "/idp-platform-demo.png", alt: "Demo de IDP" },
                  { type: "image", src: "/sre-observability-dashboard.png", alt: "Tablero de observabilidad SRE" },
                  { type: "video", src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", poster: "/llm-orchestration.png", alt: "Orquestación LLM" },
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
