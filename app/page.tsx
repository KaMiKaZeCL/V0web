import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, GaugeCircle, ShieldCheck, Zap, Bot, Cloud, Factory, Wrench, BarChart3 } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import AuroraHero from "@/components/aurora-hero"
import MarqueeLogos from "@/components/marquee-logos"
import { clients } from "@/lib/data"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="flex flex-col">
        {/* Hero diferenciador */}
        <AuroraHero
          eyebrow="Consultoría + Ingeniería + Operaciones"
          title="Diseñamos, construimos y operamos para producción"
          subtitle="Transformamos objetivos de negocio en plataformas y servicios confiables. Agentes de IA, nubes híbridas, ciberseguridad, IoT y software a la medida, con métricas claras, SLAs exigentes y foco en valor."
          primaryCta={{ href: "/contact", label: "Agenda una reunión" }}
          secondaryCta={{ href: "/services", label: "Ver cómo trabajamos" }}
        />

        {/* Logos en marquee */}
        <section className="border-t">
          <div className="container max-w-6xl mx-auto px-4 py-8 md:py-12">
            <div className="text-center space-y-2 mb-6">
              <p className="text-sm text-slate-500">Equipos que confían en abordajes modernos y medibles</p>
            </div>
            <MarqueeLogos items={clients as any} />
          </div>
        </section>

        {/* Propuesta de valor con foco en resultados */}
        <section className="border-t bg-slate-50">
          <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-6">
                <Badge variant="secondary" className="rounded-full">Propuesta de valor</Badge>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                  Tecnología que impacta KPIs del negocio
                </h2>
                <p className="mt-4 text-slate-600 text-lg">
                  Combinamos estrategia, arquitectura y entrega continua para acelerar el time‑to‑value. Operamos con
                  OKRs y KPIs visibles —desde uptime y seguridad, hasta lead time de cambios— y asumimos SLAs que
                  responden a la criticidad de tu operación.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" /> Enfoque AI‑first y plataformas componibles</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" /> Seguridad por diseño y observabilidad e2e</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" /> Operación SRE con compromisos explícitos</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href="/contact">Conversemos</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/about">Quiénes somos</Link>
                  </Button>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="border-emerald-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-lg"><GaugeCircle className="w-5 h-5 text-emerald-600" /> KPIs operacionales</CardTitle>
                      <CardDescription>Compromisos visibles y auditables</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-3 text-sm">
                      <div><div className="text-2xl font-semibold">99,95%</div><div className="text-slate-500">Uptime</div></div>
                      <div><div className="text-2xl font-semibold">{'< 24h'}</div><div className="text-slate-500">Lead time cambios</div></div>
                      <div><div className="text-2xl font-semibold">{'< 60m'}</div><div className="text-slate-500">MTTR</div></div>
                      <div><div className="text-2xl font-semibold">{'> 70'}</div><div className="text-slate-500">NPS</div></div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-lg"><ShieldCheck className="w-5 h-5 text-violet-600" /> Seguridad y cumplimiento</CardTitle>
                      <CardDescription>Zero Trust, IAM y hardening</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-slate-600">
                      Gestión de identidades, MFA, segmentación, escaneo continuo (SAST/DAST), política de parches y
                      respuesta a incidentes con runbooks. Alineados a ISO/IEC 27001 y NIST.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios → Resultados */}
        <section className="border-t">
          <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h2 className="text-3xl font-semibold">Servicios que se traducen en resultados</h2>
                <p className="text-slate-600">De la estrategia a la operación continua, con métricas claras.</p>
              </div>
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/services">Ver catálogo completo <ArrowIcon /></Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <ServiceCard
                icon={<Bot className="w-5 h-5 text-violet-600" />}
                title="Agentes de IA"
                points={[
                  "RAG evaluado y trazable",
                  "Orquestación con herramientas",
                  "Guardrails y observabilidad LLM",
                ]}
                outcome="Aumento de autoservicio y reducción de tiempos de respuesta."
              />
              <ServiceCard
                icon={<Cloud className="w-5 h-5 text-emerald-600" />}
                title="Nube y Plataformas"
                points={[
                  "IDP, plataformas componibles",
                  "FinOps y resiliencia",
                  "SRE 24/7 y performance",
                ]}
                outcome="Ejecución consistente y costos bajo control."
              />
              <ServiceCard
                icon={<Factory className="w-5 h-5 text-emerald-600" />}
                title="IoT y Edge"
                points={[
                  "Redes 5G/LoRa y edge AI",
                  "Telemetría y control en tiempo real",
                  "Seguridad de dispositivos",
                ]}
                outcome="Visibilidad y acción inmediata en terreno."
              />
              <ServiceCard
                icon={<Wrench className="w-5 h-5 text-violet-600" />}
                title="DevEx y Modernización"
                points={[
                  "Golden paths y portales de dev",
                  "CI/CD con calidad y seguridad",
                  "Arquitectura modular",
                ]}
                outcome="Cycle time menor y menos incidentes."
              />
            </div>
          </div>
        </section>

        {/* Metodología, SLA y gobierno */}
        <section className="border-t bg-slate-50">
          <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="text-center space-y-2">
              <Badge className="rounded-full bg-emerald-600 hover:bg-emerald-600 text-white">Cómo trabajamos</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold">Metodología clara, SLAs exigentes y KPIs visibles</h2>
              <p className="text-slate-600">Un marco que combina agilidad, gobierno y confiabilidad operacional.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <MethodCard
                icon={<BarChart3 className="w-5 h-5 text-emerald-600" />}
                title="Descubrimiento y OKRs"
                desc="Entendemos impacto, restricciones y casos de uso; definimos OKRs, KPIs y criterios de éxito."
                list={["Mapa de valor", "KPIs/SLAs iniciales", "Roadmap priorizado"]}
              />
              <MethodCard
                icon={<Zap className="w-5 h-5 text-violet-600" />}
                title="Entrega continua"
                desc="Sprints cortos, feedback semanal y demostraciones en entorno real desde temprano."
                list={["Trunk-based + CI/CD", "Pruebas automatizadas", "Versionado y canary"]}
              />
              <MethodCard
                icon={<ShieldCheck className="w-5 h-5 text-emerald-600" />}
                title="Operación SRE"
                desc="SLOs, observabilidad e incident response. Postmortems y mejora continua."
                list={["SLOs por servicio", "Runbooks y on-call", "Reportes mensuales de KPIs"]}
              />
            </div>
          </div>
        </section>

        {/* Casos reales */}
        <section className="border-t">
          <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h2 className="text-3xl font-semibold">Casos reales</h2>
                <p className="text-slate-600">Historias breves con impacto medible.</p>
              </div>
              <Button asChild variant="outline">
                <Link href="/contact">Solicitar referentes</Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <CaseCard
                image={"/digital-energy-operations-center.png"}
                title="Operación digital en energía"
                desc="SRE + observabilidad end‑to‑end para plataformas críticas."
                highlights={["-50% MTTR", "+99,95% uptime", "Alertas con bajo ruido"]}
              />
              <CaseCard
                image={"/contact-center-bots.png"}
                title="Autoservicio con IA en CX"
                desc="Bots multimodales y orquestación sobre datos privados."
                highlights={["-35% AHT", "+42% resolución 1er contacto", "CX medible con QA de conversaciones"]}
              />
              <CaseCard
                image={"/industrial-drone-inspection.png"}
                title="Inspección con drones"
                desc="Planificación de misiones y visión computacional en terreno."
                highlights={["+3x velocidad de inspección", "-60% incidentes", "Trazabilidad normativa"]}
              />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t bg-slate-900 text-white">
          <div className="container max-w-6xl mx-auto px-4 py-14 md:py-20">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h2 className="text-3xl md:text-4xl font-semibold">Llevemos tus KPIs a otro nivel</h2>
                <p className="mt-3 text-slate-300">
                  Conversemos de objetivos, SLAs y plazos. Prepararemos una ruta de valor a 90 días.
                </p>
              </div>
              <div className="md:col-span-2 flex gap-3 md:justify-end">
                <Button asChild size="lg" className="h-11 px-6 bg-emerald-600 hover:bg-emerald-500 text-slate-900">
                  <Link href="/contact">Agenda una reunión</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11 px-6 border-slate-700 text-white hover:bg-white/10">
                  <Link href="/services">Ver metodología</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServiceCard({
  icon,
  title,
  points,
  outcome,
}: {
  icon: React.ReactNode
  title: string
  points: string[]
  outcome: string
}) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">{icon}{title}</CardTitle>
        <CardDescription>De la estrategia a la operación</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        <ul className="list-disc pl-5 space-y-1">
          {points.map((p) => (<li key={p}>{p}</li>))}
        </ul>
        <div className="mt-3 text-slate-700"><strong>Resultado: </strong>{outcome}</div>
      </CardContent>
    </Card>
  )
}

function MethodCard({
  icon,
  title,
  desc,
  list,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  list: string[]
}) {
  return (
    <Card className="hover:shadow-md transition">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">{icon}{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        <ul className="list-disc pl-5 space-y-1">
          {list.map((it) => (<li key={it}>{it}</li>))}
        </ul>
      </CardContent>
    </Card>
  )
}

function CaseCard({
  image,
  title,
  desc,
  highlights,
}: {
  image: string
  title: string
  desc: string
  highlights: string[]
}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">
      <CardContent className="p-0">
        <Image
          src={image || "/placeholder.svg?height=450&width=800&query=caso%20de%20exito%20tecnologia"}
          alt={title}
          width={800}
          height={450}
          className="w-full aspect-[16/9] object-cover"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <div className="px-6 pb-6 text-sm text-slate-700 space-y-1">
        {highlights.map((h) => (<div key={h}>{h}</div>))}
      </div>
    </Card>
  )
}
