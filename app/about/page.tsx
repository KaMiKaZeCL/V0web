import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Equipo senior, enfoque moderno y ejecución rigurosa.",
}

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Quiénes somos</h1>
      <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="prose prose-stone max-w-none">
          <p>
            Somos un equipo de ingeniería, seguridad y datos con experiencia en industrias exigentes.
            Llevamos iniciativas a producción con calidad, seguridad y métricas claras.
          </p>
          <p>
            Trabajamos con principios SRE, arquitectura moderna y una disciplina operativa que prioriza
            confiabilidad y velocidad sin artificios.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { alt: "Equipo", q: "equipo%20en%20sala%20sobria" },
            { alt: "Operación", q: "sala%20operaciones%20elegante" },
            { alt: "Arquitectura", q: "arquitectura%20moderna%20diagramas%20sobrios" },
            { alt: "Pruebas", q: "laboratorio%20hardware%20minimalista" },
          ].map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-md border border-stone-200 bg-stone-100">
              <Image
                src={`/placeholder.svg?height=560&width=840&query=${img.q}`}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
