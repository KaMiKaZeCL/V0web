import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactForm from "@/components/contact-form"
import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"

export default function ContactPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <section className="section">
          <Container fluid="xl">
            <Row className="gy-4">
              <Col lg={6}>
                <h1 className="h2 fw-semibold text-gradient">Contacto</h1>
                <p className="text-muted">Cuéntanos sobre tus objetivos. Te responderemos dentro de 1 día hábil.</p>
                <ContactForm />
              </Col>
              <Col lg={6}>
                <Row className="g-3">
                  <Col xs={12}>
                    <div className="ratio ratio-16x9 rounded-xl border overflow-hidden shadow-soft">
                      <Image
                        src={"/placeholder.svg?height=360&width=720&query=equipo%20de%20ventas%20y%20exito%20del%20cliente%20en%20tecnologia"}
                        alt="Equipo comercial y de éxito del cliente"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="ratio ratio-16x9 rounded-xl border overflow-hidden shadow-soft">
                      <Image
                        src={"/placeholder.svg?height=360&width=720&query=mapa%20santiago%20de%20chile%20oficina%20corporativa"}
                        alt="Mapa de ubicación en Santiago"
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
      </main>
      <SiteFooter />
    </div>
  )
}
