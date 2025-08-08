import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import LogoWall from "@/components/logo-wall"
import MediaGallery from "@/components/media-gallery"
import GlossaryLink from "@/components/glossary-link"
import { clients } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import { Container, Row, Col, Button, Card, Badge, OverlayTrigger, Tooltip } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShieldHalved, faGaugeHigh, faRobot, faCloud, faIndustry, faScrewdriverWrench, faBolt } from "@fortawesome/free-solid-svg-icons"

export default function Page() {
  return (
    <div>
      <SiteHeader />
      <main>
        {/* Hero: credible image + aurora, no fantasy background video */}
        <section className="section position-relative overflow-hidden">
          <div className="aurora" aria-hidden />
          <Container fluid="xl" style={{ position: "relative", zIndex: 1 }}>
            <Row className="align-items-center gy-4">
              <Col md={7} className="position-relative">
                <span className="badge badge-soft rounded-pill">Consultoría + Ingeniería + Operaciones</span>
                <h1 className="display-5 fw-semibold mt-3 text-gradient">Llevamos tus plataformas a producción con calidad y velocidad</h1>
                <p className="lead text-muted">
                  Agentes de IA, nubes híbridas, ciberseguridad, IoT y software a la medida. Métricas claras, SLAs exigentes y un enfoque AI‑first.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <Button as={Link} href="/contact" className="btn-cta">Cotiza con nosotros</Button>
                  <Button as={Link} href="/services" variant="outline-secondary">Explorar servicios</Button>
                </div>
                <div className="text-muted small mt-2 d-flex align-items-center gap-2">
                  <OverlayTrigger placement="top" overlay={<Tooltip id="tip-kpis">Indicadores clave para medir outcomes</Tooltip>}>
                    <span className="d-inline-flex align-items-center gap-1">
                      <FontAwesomeIcon icon={faGaugeHigh} className="text-primary" /> KPIs
                    </span>
                  </OverlayTrigger>
                  <span>y</span>
                  <OverlayTrigger placement="top" overlay={<Tooltip id="tip-slas">Compromisos explícitos de servicio</Tooltip>}>
                    <span className="d-inline-flex align-items-center gap-1">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-primary" /> SLAs
                    </span>
                  </OverlayTrigger>
                  <span>operativos.</span>
                </div>
                <Image src="/images/south-developers-logo.png" alt="" width={280} height={180} className="watermark d-none d-xl-block" />
              </Col>
              <Col md={5}>
                <div className="ratio ratio-16x9 rounded-xl border overflow-hidden shadow-soft bg-grid">
                  <Image src="/observabilidad-operaciones.png" alt="Centro de operaciones con observabilidad" fill style={{ objectFit: "cover" }} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Logo wall (bigger, crisp logos) */}
        <section className="section-sm section-divider">
          <Container fluid="xl">
            <p className="text-center text-muted small mb-3">Empresas y equipos que confían en abordajes modernos y medibles</p>
            <LogoWall items={clients as any} />
          </Container>
        </section>

        {/* Propuesta de valor */}
        <section className="section section-light section-divider">
          <Container fluid="xl">
            <Row className="gy-4">
              <Col md={6}>
                <Badge bg="secondary" className="rounded-pill">Propuesta de valor</Badge>
                <h2 className="h2 fw-semibold mt-2">Tecnología que impacta KPIs del negocio</h2>
                <p className="mt-2">
                  Combinamos estrategia, arquitectura y entrega continua para acelerar el time‑to‑value. Operamos con <GlossaryLink termKey="okr">OKRs</GlossaryLink> y <GlossaryLink termKey="kpi">KPIs</GlossaryLink> visibles y asumimos <GlossaryLink termKey="sla">SLAs</GlossaryLink> acordes a tu operación.
                </p>
                <ul className="mt-3 mb-0 list-unstyled">
                  <li className="icon-li"><FontAwesomeIcon icon={faRobot} className="text-primary icon" /> Enfoque AI‑first y plataformas componibles</li>
                  <li className="icon-li"><FontAwesomeIcon icon={faShieldHalved} className="text-primary icon" /> Seguridad por diseño y <GlossaryLink termKey="observability">observabilidad</GlossaryLink> end‑to‑end</li>
                  <li className="icon-li"><FontAwesomeIcon icon={faGaugeHigh} className="text-primary icon" /> Operación <GlossaryLink termKey="sre">SRE</GlossaryLink> con compromisos explícitos</li>
                </ul>
                <div className="d-flex gap-2 mt-3">
                  <Button as={Link} href="/contact" variant="primary">Cotiza con nosotros</Button>
                  <Button as={Link} href="/about" variant="outline-secondary">Quiénes somos</Button>
                </div>
              </Col>
              <Col md={6}>
                <Row className="g-3">
                  <Col sm={6}>
                    <Card className="h-100 card-hover">
                      <Card.Body>
                        <Card.Title className="h6 d-flex align-items-center gap-2 mb-1"><FontAwesomeIcon icon={faGaugeHigh} className="text-primary" /> KPIs operacionales</Card.Title>
                        <Card.Subtitle className="text-muted small">Compromisos visibles y auditables</Card.Subtitle>
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
                        <Card.Title className="h6 d-flex align-items-center gap-2 mb-1"><FontAwesomeIcon icon={faShieldHalved} className="text-primary" /> Seguridad y cumplimiento</Card.Title>
                        <Card.Subtitle className="text-muted small"><GlossaryLink termKey="zero-trust">Zero Trust</GlossaryLink>, <GlossaryLink termKey="iam">IAM</GlossaryLink> y hardening</Card.Subtitle>
                        <div className="small text-muted mt-2">
                          <GlossaryLink termKey="iam">Identidades</GlossaryLink>, <GlossaryLink termKey="mfa">MFA</GlossaryLink>, segmentación, escaneo continuo (<GlossaryLink termKey="sast">SAST</GlossaryLink>/<GlossaryLink termKey="dast">DAST</GlossaryLink>) y respuesta con runbooks.
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Servicios */}
        <section className="section section-divider">
          <Container fluid="xl">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
              <div>
                <h2 className="h2 fw-semibold">Servicios que se traducen en resultados</h2>
                <p className="text-muted mb-0">De la estrategia a la operación continua, con métricas claras.</p>
              </div>
              <Button as={Link} href="/services" variant="link">Ver catálogo completo →</Button>
            </div>
            <Row className="g-3 mt-1">
              {[
                { icon: faRobot, title: "Agentes de IA", points: ["RAG evaluado y trazable", "Orquestación con herramientas", "Guardrails y observabilidad LLM"], outcome: "Más autoservicio, menor tiempo de respuesta." },
                { icon: faCloud, title: "Nube y Plataformas", points: ["IDP y plataformas componibles", "FinOps y resiliencia", "SRE 24/7 y performance"], outcome: "Ejecución consistente y costos bajo control." },
                { icon: faIndustry, title: "IoT y Edge", points: ["5G/LoRaWAN y edge AI", "Telemetría y control", "Seguridad de dispositivos"], outcome: "Visibilidad y acción inmediata." },
                { icon: faScrewdriverWrench, title: "DevEx y Modernización", points: ["Golden paths y portales", "CI/CD con calidad y seguridad", "Arquitectura modular"], outcome: "Menor cycle time y menos incidentes." },
              ].map((s) => (
                <Col key={s.title} sm={6} lg={3}>
                  <Card className="h-100 card-hover">
                    <Card.Body>
                      <Card.Title className="h6 d-flex align-items-center gap-2"><FontAwesomeIcon icon={s.icon} className="text-primary" />{s.title}</Card.Title>
                      <Card.Subtitle className="text-muted small">De la estrategia a la operación</Card.Subtitle>
                      <ul className="small mt-2 mb-2">
                        {s.points.map((p) => (<li key={p}>{p}</li>))}
                      </ul>
                      <div className="small">{s.outcome}</div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Galería */}
        <section className="section section-divider">
          <Container fluid="xl">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
              <div>
                <h2 className="h2 fw-semibold">Ver para creer</h2>
                <p className="text-muted mb-0">Demos cortas y vistas reales de nuestras plataformas y operaciones.</p>
              </div>
              <Button as={Link} href="/products" variant="outline-secondary">Explorar productos</Button>
            </div>
            <MediaGallery
              items={[
                { type: "image", src: "/observabilidad-operaciones.png", alt: "Centro de operaciones con observabilidad" },
                { type: "video", src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", poster: "/industrial-drone-demonstration.png", alt: "Inspección con drones" },
                { type: "image", src: "/cloud-platform-architecture.png", alt: "Arquitectura de plataformas cloud" },
                { type: "image", src: "/engineering-sprint-review.png", alt: "Equipo de ingeniería en sprint review" },
                { type: "video", src: "https://media.w3.org/2010/05/bunny/trailer.mp4", poster: "/contact-center-ai-orchestration.png", alt: "Orquestación en contact center" },
              ]}
            />
          </Container>
        </section>

        {/* CTA final */}
        <section className="section" style={{ background: "linear-gradient(180deg, #0b1220 0%, #0e1726 100%)" }}>
          <Container fluid="xl" className="text-white">
            <Row className="align-items-center gy-3">
              <Col md={7}>
                <h2 className="h2 fw-semibold">Llevemos tus KPIs a otro nivel</h2>
                <p className="text-white-50 mb-0">
                  Conversemos de objetivos, <GlossaryLink termKey="sla">SLAs</GlossaryLink> y plazos. Prepararemos una ruta de valor a 90 días.
                </p>
              </Col>
              <Col md={5} className="d-flex justify-content-md-end gap-2">
                <Button as={Link} href="/contact" className="btn-cta">Cotiza con nosotros</Button>
                <Button as={Link} href="/services" variant="outline-light">Ver metodología</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
