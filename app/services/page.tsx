import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GlossaryLink from "@/components/glossary-link"
import MediaGallery from "@/components/media-gallery"
import { servicesCatalog } from "@/lib/data"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <Badge variant="secondary" className="rounded-full">Metodología y Servicios</Badge>
          <h1 className="text-3xl md:text-4xl font-semibold mt-3">Estrategia, delivery y operación con métricas</h1>
          <p className="text-slate-600 mt-2">
            Operamos con <GlossaryLink termKey="okr">OKRs</GlossaryLink>, <GlossaryLink termKey="kpi">KPIs</GlossaryLink> y <GlossaryLink termKey="sla">SLAs</GlossaryLink>. Desde el descubrimiento y la arquitectura, hasta la entrega continua y la
            operación <GlossaryLink termKey="sre">SRE</GlossaryLink>. Trabajamos con datos privados, compliance y seguridad por diseño.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesCatalog.map((s) => (
            <Card key={s.name} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">{s.icon}{s.name}</CardTitle>
                <CardDescription>{s.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                <ul className="list-disc pl-5 space-y-1">
                  {s.offers.map((o) => (<li key={o}>{o}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Demostraciones</h2>
          <p className="text-slate-600 mt-2">Videos e imágenes de nuestras plataformas en acción.</p>
          <div className="mt-4">
            <MediaGallery
              items={[
                { type: "video", src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", poster: "/idp-platform-demo.png", alt: "Demo de IDP" },
                { type: "image", src: "/sre-observability-dashboard.png", alt: "Tablero de observabilidad SRE" },
                { type: "video", src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", poster: "/llm-orchestration.png", alt: "Orquestación LLM" },
              ]}
            />
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Compromisos medibles</CardTitle>
              <CardDescription>SLAs y KPIs visibles en reportes mensuales</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div>• Disponibilidad y <GlossaryLink termKey="slo">SLO</GlossaryLink> por servicio</div>
              <div>• Lead time, frecuencia de despliegues y <GlossaryLink termKey="mttr">MTTR</GlossaryLink></div>
              <div>• Seguridad: <GlossaryLink termKey="sast">SAST</GlossaryLink>/<GlossaryLink termKey="dast">DAST</GlossaryLink> y remediación</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Entrega continua</CardTitle>
              <CardDescription>Valor temprano y feedback continuo</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div>• Sprints cortos con demos en entornos reales</div>
              <div>• Canarios y <GlossaryLink termKey="feature-flags">feature flags</GlossaryLink> para cambios seguros</div>
              <div>• Pruebas automatizadas y calidad integrada</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gobierno y seguridad</CardTitle>
              <CardDescription><GlossaryLink termKey="zero-trust">Zero Trust</GlossaryLink> y cumplimiento</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div>• <GlossaryLink termKey="iam">IAM</GlossaryLink>, <GlossaryLink termKey="mfa">MFA</GlossaryLink> y segmentación</div>
              <div>• Observabilidad end‑to‑end</div>
              <div>• Runbooks y respuesta a incidentes</div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
