import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
            Operamos con OKRs, KPIs y SLAs. Desde el descubrimiento y la arquitectura, hasta la entrega continua y la
            operación SRE. Trabajamos con datos privados, compliance y seguridad por diseño.
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

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Compromisos medibles</CardTitle>
              <CardDescription>SLAs y KPIs visibles en reportes mensuales</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div>• Uptime objetivo por servicio y ambiente</div>
              <div>• Lead time de cambios y frecuencia de despliegues</div>
              <div>• MTTR e incidentes por severidad</div>
              <div>• Seguridad: hallazgos y tiempo de remediación</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Entrega continua</CardTitle>
              <CardDescription>Valor temprano y feedback continuo</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div>• Sprints cortos con demos en entornos reales</div>
              <div>• Canarios y feature flags para cambios seguros</div>
              <div>• Pruebas automatizadas y calidad integrada</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gobierno y seguridad</CardTitle>
              <CardDescription>Zero Trust y cumplimiento</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-2">
              <div>• IAM, MFA y segmentación</div>
              <div>• SAST/DAST y dependencias seguras</div>
              <div>• Runbooks y respuesta a incidentes</div>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
