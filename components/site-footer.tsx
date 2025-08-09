import Link from "next/link"
import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"

export default function SiteFooter() {
  return (
    <footer className="footer-dark mt-5 pt-5">
      <Container fluid="xl">
        <Row className="g-4">
          <Col md={5} className="position-relative">
            <div className="d-flex align-items-center gap-2 mb-2">
              <Image src="/images/south-developers-logo.png" alt="South Developers" width={26} height={26} />
              <div className="fw-semibold">South Developers Chile SpA</div>
            </div>
            <p className="mb-3" style={{ maxWidth: 560 }}>
              Soluciones de ingeniería en IA, Nube, Ciberseguridad, IoT y software a medida. Operamos con SLAs exigentes y KPIs visibles.
            </p>
            <Image
              src="/images/south-developers-logo.png"
              alt=""
              width={280}
              height={180}
              className="watermark d-none d-md-block"
            />
          </Col>
          <Col md={3}>
            <div className="fw-semibold">Empresa</div>
            <ul className="list-unstyled small mt-2 mb-0">
              <li><Link href="/about">Quiénes somos</Link></li>
              <li><Link href="/services">Servicios</Link></li>
              <li><Link href="/products">Productos</Link></li>
              <li><Link href="/store">Tienda</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <div className="fw-semibold">Contacto</div>
            <ul className="list-unstyled small mt-2 mb-0">
              <li>Santiago, Chile</li>
              <li><a href="mailto:contacto@southdevelopers.cl">contacto@southdevelopers.cl</a></li>
            </ul>
          </Col>
        </Row>
        <div className="footer-divider mt-4 pt-3 pb-4 small d-flex justify-content-between flex-wrap gap-2">
          <div>© {new Date().getFullYear()} South Developers Chile SpA</div>
          <div className="opacity-100">Ejecución rigurosa, resultados medibles.</div>
        </div>
      </Container>
    </footer>
  )
}
