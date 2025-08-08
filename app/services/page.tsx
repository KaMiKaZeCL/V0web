import { Container, Row, Col, Card, Badge } from "react-bootstrap"
import GlossaryLink from "@/components/glossary-link"

export default function ServicesPage() {
  return (
    <section className="section">
      <Container fluid="xl">
        <Badge bg="secondary" className="rounded-pill">Servicios</Badge>
        <h1 className="h2 fw-semibold mt-2 text-gradient">Estrategia, entrega y operación con métricas</h1>
        <p className="text-muted">
          Acompañamos el ciclo completo: descubrimiento, arquitectura, implementación y operación continua. Trabajamos con <GlossaryLink termKey="okr">OKRs</GlossaryLink>,
          <GlossaryLink termKey="kpi"> KPIs</GlossaryLink> y <GlossaryLink termKey="sla">SLAs</GlossaryLink> explícitos, priorizando seguridad, performance y experiencia.
        </p>

        <Row className="g-3 mt-1">
          {[
            {
              t: "Agentes de IA",
              s: "RAG evaluado, orquestación y guardrails",
              points: [
                "Diseño de agentes multi‑paso con herramientas",
                "Evaluación sistemática, trazabilidad y feedback loops",
                "Observabilidad LLM y políticas de seguridad",
              ],
            },
            {
              t: "Nube y Plataformas",
              s: "IDP, FinOps y resiliencia",
              points: [
                "Arquitecturas híbridas y componibles",
                "Plataformas internas (IDP) con golden paths",
                "Observabilidad end‑to‑end y <strong>DR</strong> probado",
              ],
            },
            {
              t: "Ciberseguridad",
              s: "Zero Trust y respuesta",
              points: [
                "<GlossaryLink termKey='zero-trust'>Zero Trust</GlossaryLink>, segmentación y hardening",
                "<GlossaryLink termKey='iam'>IAM</GlossaryLink>/<GlossaryLink termKey='mfa'>MFA</GlossaryLink> y gestión de riesgos",
                "SOC, threat hunting y respuesta a incidentes",
              ],
            },
            {
              t: "IoT y Edge",
              s: "Telemetría, control y visión",
              points: [
                "Redes <GlossaryLink termKey='lorawan'>LoRa</GlossaryLink>/<GlossaryLink termKey='5g'>5G</GlossaryLink> y gateways seguros",
                "Edge AI y mantenimiento predictivo",
                "Integración SCADA/OT y cumplimiento",
              ],
            },
            {
              t: "Datos y Analítica",
              s: "Lagos de datos, ELT/CDC y BI",
              points: [
                "<GlossaryLink termKey='data-lake'>Data Lake</GlossaryLink> gobernado y catálogo",
                "Pipelines <GlossaryLink termKey='etl-elt'>ELT/CDC</GlossaryLink> y calidad de datos",
                "<GlossaryLink termKey='mlops'>MLOps</GlossaryLink> y BI de autoservicio",
              ],
            },
            {
              t: "Software a Medida",
              s: "Arquitectura moderna y CI/CD",
              points: [
                "APIs escalables y eventos",
                "Apps web/móviles con QA automatizado",
                "Entrega continua (<GlossaryLink termKey='ci-cd'>CI/CD</GlossaryLink>) y performance",
              ],
            },
          ].map((s) => (
            <Col key={s.t} sm={6} lg={4}>
              <Card className="h-100 card-hover">
                <Card.Body>
                  <Card.Title className="h6 mb-1">{s.t}</Card.Title>
                  <Card.Subtitle className="text-muted small">{s.s}</Card.Subtitle>
                  <ul className="small mt-2 mb-0">
                    {s.points.map((p, i) => (
                      <li key={i}>
                        {/* Permite HTML y GlossaryLink inline */}
                        <span dangerouslySetInnerHTML={{ __html: p.replace(/<strong>/g, '<b>').replace(/<\/strong>/g, '</b>') }} />
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
