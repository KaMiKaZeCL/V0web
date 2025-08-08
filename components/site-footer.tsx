import Link from "next/link"
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="footer-dark mt-5 pt-5">
      <Container fluid="xl">
        <Row className="g-4">
          <Col md={5} className="position-relative">
            <div className="d-flex align-items-center gap-2 mb-2">
              <Image src="/images/south-developers-logo.png" alt="South Developers Chile SpA" width={28} height={28} />
              <div className="fw-semibold">South Developers Chile SpA</div>
            </div>
            <p className="mb-3" style={{ maxWidth: 560 }}>
              Soluciones en IA, nube, ciberseguridad, IoT, drones y software a la medida. Operamos con SLAs exigentes y KPIs visibles para tu negocio.
            </p>
            <div className="d-flex gap-3">
              <OverlayTrigger placement="top" overlay={<Tooltip id="tip-ln">LinkedIn</Tooltip>}>
                <a href="https://www.linkedin.com/company/southdevelopers" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip id="tip-tw">X (Twitter)</Tooltip>}>
                <a href="https://twitter.com/southdevelopers" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <FontAwesomeIcon icon={faXTwitter} size="lg" />
                </a>
              </OverlayTrigger>
            </div>
            <Image src="/images/south-developers-logo.png" alt="" width={320} height={200} className="watermark d-none d-md-block" />
          </Col>
          <Col md={2}>
            <div className="fw-semibold">Empresa</div>
            <ul className="list-unstyled small mt-2 mb-0">
              <li><Link href="/about">Quiénes somos</Link></li>
              <li><Link href="/services">Servicios</Link></li>
              <li><Link href="/products">Productos</Link></li>
              <li><Link href="/store">Tienda</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <div className="fw-semibold">Legal</div>
            <ul className="list-unstyled small mt-2 mb-0">
              <li><Link href="#">Términos y condiciones</Link></li>
              <li><Link href="#">Política de privacidad</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <div className="fw-semibold">Contacto</div>
            <ul className="list-unstyled small mt-2 mb-0">
              <li>Santiago, Chile</li>
              <li><a href="mailto:contacto@southdevelopers.cl">contacto@southdevelopers.cl</a></li>
            </ul>
          </Col>
        </Row>
        <div className="footer-divider mt-4 pt-3 pb-4 small d-flex justify-content-between flex-wrap gap-2">
          <div>© {new Date().getFullYear()} South Developers Chile SpA</div>
          <div className="opacity-100">Tecnología con impacto medible y seguridad por diseño.</div>
        </div>
      </Container>
    </footer>
  )
}
