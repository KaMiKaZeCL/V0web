import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Cpu, DrillIcon as Drone, Bot, ShieldHalf, Cloud, Network, Building2 } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import HeroVideo from "@/components/hero-video"
import { servicesCatalog, productHighlights, clients } from "@/lib/data"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="flex flex-col">
        <section className="relative overflow-hidden">
          <HeroVideo />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background pointer-events-none" />
          <div className="relative z-10 container max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white rounded-full">South Developers Chile SpA</Badge>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
                Soluciones tecnológicas integrales para un mundo hiperconectado
              </h1>
              <p className="mt-4 text-muted-foreground text-lg md:text-xl">
                Diseñamos, construimos y operamos plataformas, productos y servicios de clase mundial: desde IoT y drones de inspección, 
                hasta agentes de IA, ciberseguridad, nubes híbridas y software a la medida. Superior, radical y confiable.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button size="lg" className="h-11 px-6 bg-emerald-600 hover:bg-emerald-700">
                    Hablemos de tu proyecto <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="h-11 px-6">
                    Ver Servicios
                  </Button>
                </Link>
                <Link href="/store">
                  <Button size="lg" variant="ghost" className="h-11 px-6">
                    Tienda
                  </Button>
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> ISO/IEC 27001 Ready</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> SLAs Misión Crítica</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Cobertura LATAM/Global</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="container max-w-6xl mx-auto px-4 py-10 md:py-16">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold">Confían en nosotros</h2>
              <p className="text-muted-foreground">Empresas líderes y organizaciones visionarias</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {clients.map((c) => (
                <div key={c.name} className="flex items-center justify-center opacity-80 hover:opacity-100 transition">
                  <Image
                    src={c.logo || "/placeholder.svg"}
                    alt={c.name + " logo"}
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/40">
          <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Badge variant="secondary" className="rounded-full">Misión, Visión y Objetivos</Badge>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Excelencia, impacto y confianza</h2>
                <p className="mt-4 text-muted-foreground">
                  Nuestra misión es potenciar organizaciones con tecnología superior y diseño impecable. 
                  Nuestra visión: ser el partner estratégico más confiable de LATAM, liderando la evolución hacia plataformas 
                  autónomas, resilientes y sostenibles. Objetivos: entregar resultados medibles, acelerar innovación, y 
                  garantizar seguridad y continuidad de negocio de extremo a extremo.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" /> Time-to-Value acelerado con marcos ágiles y AI-first</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" /> Zero Trust, observabilidad total y cumplimiento</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" /> Innovación responsable y sostenible</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={"/placeholder.svg?height=400&width=600&query=equipo%20de%20ingenieria%20de%20software%20en%20sala%20moderna"}
                  alt="Equipo de ingeniería colaborando"
                  width={600}
                  height={400}
                  className="rounded-xl border bg-background object-cover"
                />
                <Image
                  src={"/placeholder.svg?height=400&width=600&query=centro%20de%20datos%20y%20nube%20hibrida%20infraestructura"}
                  alt="Infraestructura de nube y data center"
                  width={600}
                  height={400}
                  className="rounded-xl border bg-background object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="rounded-full bg-violet-600 hover:bg-violet-600">Servicios estrella</Badge>
              <div className="text-muted-foreground text-sm">Un universo de capacidades</div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Bot className="w-5 h-5 text-violet-600" /> Agentes de IA y Automatización</CardTitle>
                  <CardDescription>Agentes autónomos, copilotos y RPA inteligente</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Orquestación de agentes, integración con sistemas, guardrails, evaluación y observabilidad de LLMs.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Drone className="w-5 h-5 text-violet-600" /> Drones y Robótica</CardTitle>
                  <CardDescription>Inspección, seguridad, logística y monitoreo</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Flotas, rutas, visión computacional, gemelos digitales y cumplimiento normativo.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Cloud className="w-5 h-5 text-violet-600" /> Nube y Plataformas</CardTitle>
                  <CardDescription>Multi-cloud, híbrida, FinOps y SRE</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Arquitecturas elásticas, plataformas internas de desarrollo (IDP), seguridad y observabilidad 24/7.
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-6">
              {servicesCatalog.slice(0, 8).map((s) => (
                <Card key={s.name} className="hover:shadow transition">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      {s.icon}
                      {s.name}
                    </CardTitle>
                    <CardDescription>{s.subtitle}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/services">
                <Button variant="outline" className="rounded-full">
                  Ver catálogo completo de servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/40">
          <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h2 className="text-3xl font-semibold">Productos destacados</h2>
                <p className="text-muted-foreground">Hardware, plataformas y software listos para producción</p>
              </div>
              <Link href="/products">
                <Button variant="ghost" className="gap-2">Explorar productos <ArrowRight className="w-4 h-4" /></Button>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {productHighlights.map((p) => (
                <Card key={p.id} className="overflow-hidden hover:shadow-lg transition">
                  <CardContent className="p-0">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={p.name}
                      width={800}
                      height={500}
                      className="w-full aspect-[16/9] object-cover"
                    />
                  </CardContent>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-lg">{p.name}</CardTitle>
                      <Badge variant="secondary">{p.category}</Badge>
                    </div>
                    <CardDescription>{p.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/store">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Ir a la Tienda</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-3xl font-semibold">¿Quiénes somos?</h2>
                <p className="mt-4 text-muted-foreground">
                  Somos ingenieras e ingenieros, científicas de datos, arquitectos cloud, especialistas en ciberseguridad, 
                  pilotos de drones e investigadores en IA. Combinamos rigor técnico con diseño aplicado al negocio, para 
                  resultados superiores y confiables.
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="flex items-center gap-3"><Cpu className="w-5 h-5 text-emerald-600" /> +250 especialistas certificados</div>
                  <div className="flex items-center gap-3"><ShieldHalf className="w-5 h-5 text-emerald-600" /> Certificaciones de seguridad y compliance</div>
                  <div className="flex items-center gap-3"><Network className="w-5 h-5 text-emerald-600" /> Partners multi-nube y ecosistema global</div>
                  <div className="flex items-center gap-3"><Building2 className="w-5 h-5 text-emerald-600" /> Presencia en Chile y alcance internacional</div>
                </div>
                <div className="mt-6">
                  <Link href="/about">
                    <Button variant="outline">Conocer más</Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={"/placeholder.svg?height=360&width=540&query=laboratorio%20robotica%20y%20vision%20computacional"}
                  alt="Laboratorio de robótica y visión"
                  width={540}
                  height={360}
                  className="rounded-xl border object-cover"
                />
                <Image
                  src={"/placeholder.svg?height=360&width=540&query=equipo%20operaciones%20sre%20observabilidad%2024%2F7"}
                  alt="Equipo de operaciones SRE 24/7"
                  width={540}
                  height={360}
                  className="rounded-xl border object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/40">
          <div className="container max-w-6xl mx-auto px-4 py-12 md:py-20">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-3xl font-semibold">Inicia tu transformación hoy</h2>
              <p className="text-muted-foreground">Cuéntanos tu desafío y diseñamos una ruta a producción</p>
            </div>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">Contacto Comercial</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
