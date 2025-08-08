import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Image from "next/image"
import { LeaderCard } from "@/components/leader-card"
import { leaders } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <Badge variant="secondary" className="rounded-full">Quiénes somos</Badge>
            <h1 className="text-3xl md:text-4xl font-semibold mt-3">Equipo senior, mirada moderna</h1>
            <p className="mt-4 text-slate-600">
              Somos un equipo de ingeniería, datos, seguridad y operaciones con experiencia en industrias exigentes. Nos
              mueve llevar iniciativas a producción con calidad, seguridad y métricas claras.
            </p>
            <p className="mt-4 text-slate-600">
              Operamos con principios SRE, arquitectura modular y prácticas de Developer Experience que aceleran la
              entrega sin sacrificar confiabilidad. Respetamos la regulación y cuidamos tus datos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={"/placeholder.svg?height=360&width=540&query=equipo%20de%20ingenieria%20colaborando%20en%20sala%20moderna"}
              alt="Equipo de ingeniería colaborando"
              width={540}
              height={360}
              className="rounded-xl border object-cover"
            />
            <Image
              src={"/placeholder.svg?height=360&width=540&query=sala%20de%20control%20observabilidad%20y%20seguridad"}
              alt="Sala de control con observabilidad"
              width={540}
              height={360}
              className="rounded-xl border object-cover"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Liderazgo</h2>
          <p className="text-slate-600 mt-2">Personas que cuidan el delivery y la operación en cada práctica.</p>
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
