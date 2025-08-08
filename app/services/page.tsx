import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Servicios",
  description: "Estrategia, entrega y operación. Seguridad por diseño y métricas visibles.",
}

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Servicios</h1>
      <p className="mt-2 max-w-prose text-stone-600">
        Operamos con KPIs y SLAs explícitos. Desde descubrimiento y arquitectura, hasta CI/CD y SRE 24/7.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Agentes de IA", points: ["RAG evaluado", "Orquestación y herramientas", "Observabilidad y guardrails"] },
          { title: "Nube & Plataformas", points: ["IDP y plataformas componibles", "FinOps y resiliencia", "Observabilidad end‑to‑end"] },
          { title: "Ciberseguridad", points: ["Zero Trust", "SOC y respuesta a incidentes", "Cumplimiento y hardening"] },
          { title: "IoT & Edge", points: ["5G/LoRa", "Edge AI", "Telemetría y control"] },
          { title: "Datos & Analítica", points: ["Data Lake", "ELT/CDC", "MLOps y BI"] },
          { title: "Software a Medida", points: ["Arquitectura moderna", "CI/CD", "Calidad y performance"] },
        ].map(s => (
          <div key={s.title} className="rounded-md border border-stone-200 p-5">
            <div className="text-base font-semibold">{s.title}</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-stone-600">
              {s.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/contact" className="text-sm font-medium text-stone-900 underline underline-offset-4">
          Conversemos →
        </Link>
      </div>
    </section>
  )
}
