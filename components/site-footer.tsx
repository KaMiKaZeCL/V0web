import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"

export default function SiteFooter() {
  return (
    <footer className="border-top mt-5">
      <Container className="py-4">
        <Row className="g-4">
          <Col md={4}>
            <div className="fw-semibold">South Developers Chile SpA</div>
            <p className="text-muted small mb-0">
              Soluciones superiores en tecnología, IA, nube, ciberseguridad, IoT, drones y software a la medida.
            </p>
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
          <Col md={3}>
            <div className="fw-semibold">Legal</div>
            <ul className="list-unstyled small mt-2 mb-0">
              <li><Link href="#">Términos y condiciones</Link></li>
              <li><Link href="#">Política de privacidad</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <div className="fw-semibold">Contacto</div>
            <ul className="list-unstyled small mt-2 mb-0">
              <li>Santiago, Chile</li>
              <li><a href="mailto:contacto@southdevelopers.cl">contacto@southdevelopers.cl</a></li>
            </ul>
          </Col>
        </Row>
        <div className="mt-3 text-muted small">
          © {new Date().getFullYear()} South Developers Chile SpA. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  )
}
