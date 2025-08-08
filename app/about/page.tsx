import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Image from "next/image"
import { LeaderCard } from "@/components/leader-card"
import { leaders } from "@/lib/data"
import MediaGallery from "@/components/media-gallery"
import GlossaryLink from "@/components/glossary-link"
import { Container, Row, Col, Badge } from "react-bootstrap"

export default function AboutPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <section className="py-5">
          <Container>
            <Row className="gy-4 align-items-start">
              <Col md={6}>
                <Badge bg="secondary" className="rounded-pill">Quiénes somos</Badge>
                <h1 className="h2 fw-semibold mt-2">Equipo senior, mirada moderna</h1>
                <p className="text-muted">
                  Somos un equipo de ingeniería, datos, seguridad y operaciones con experiencia en industrias exigentes. Nos mueve llevar iniciativas a producción con calidad, seguridad y métricas claras.
                </p>
                <p className="text-muted">
                  Operamos con principios <GlossaryLink termKey="sre">SRE</GlossaryLink>, arquitectura modular y prácticas de <GlossaryLink termKey="devex">DevEx</GlossaryLink> que aceleran la entrega sin sacrificar confiabilidad. Respetamos la regulación y cuidamos tus datos.
                </p>
              </Col>
              <Col md={6}>
                <Row className="g-3">
                  <Col xs={6}>
                    <div className="ratio ratio-3x2 rounded border overflow-hidden">
                      <Image
                        src={"/placeholder.svg?height=360&width=540&query=equipo%20de%20ingenieria%20colaborando%20en%20sala%20moderna"}
                        alt="Equipo de ingeniería colaborando"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="ratio ratio-3x2 rounded border overflow-hidden">
                      <Image
                        src={"/placeholder.svg?height=360&width=540&query=sala%20de%20control%20observabilidad%20y%20seguridad"}
                        alt="Sala de control con observabilidad"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <div className="mt-4">
              <h2 className="h4 fw-semibold">Nuestra cultura en acción</h2>
              <p className="text-muted">Momentos reales de trabajo y demos técnicas.</p>
              <MediaGallery
                items={[
                  { type: "video", src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", poster: "/arquitectura-workshop.png", alt: "Workshop de arquitectura" },
                  { type: "image", src: "/placeholder.svg?height=600&width=900", alt: "Whiteboard de plataformas" },
                  { type: "image", src: "/placeholder.svg?height=600&width=900", alt: "Revisión de seguridad Zero Trust" },
                ]}
              />
            </div>

            <div className="mt-4">
              <h2 className="h4 fw-semibold">Liderazgo</h2>
              <Row className="g-3 mt-1">
                {leaders.map((l) => (
                  <Col key={l.name} sm={6} lg={4}>
                    <LeaderCard leader={l} />
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
