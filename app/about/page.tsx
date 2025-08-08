import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { LeaderCard } from "@/components/leader-card"
import Image from "next/image"
import { leaders } from "@/lib/data"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">Quiénes somos</h1>
            <p className="mt-4 text-muted-foreground">
              South Developers Chile SpA es una compañía de soluciones informáticas y tecnológicas con foco en resultados 
              medibles, diseño de plataformas resilientes y seguridad avanzada. Colaboramos con empresas e instituciones 
              para transformar desafíos complejos en ventajas competitivas sostenibles.
            </p>
            <p className="mt-4 text-muted-foreground">
              Nuestro modelo combina consultoría de alto impacto, ingeniería de software, operaciones SRE, ciberseguridad 
              y excelencia en experiencia de desarrolladores, con una cultura de aprendizaje continuo y trabajo en equipo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={"/placeholder.svg?height=360&width=540&query=oficinas%20corporativas%20tecnologicas%20en%20santiago%20de%20chile"}
              alt="Oficinas corporativas en Santiago de Chile"
              width={540}
              height={360}
              className="rounded-xl border object-cover"
            />
            <Image
              src={"/placeholder.svg?height=360&width=540&query=sala%20de%20control%20nube%20hibrida%20y%20ciberseguridad"}
              alt="Sala de control y ciberseguridad"
              width={540}
              height={360}
              className="rounded-xl border object-cover"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Liderazgo</h2>
          <p className="text-muted-foreground mt-2">Expertas y expertos que guían cada práctica</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {leaders.map((l) => (
              <LeaderCard key={l.name} leader={l} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
