import Link from "next/link"
import Image from "next/image"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { featuredProducts } from "@/lib/catalog"

export default function HomePage() {
  return (
    <>
      {/* Hero: editorial, nítido, sin colores chillones */}
      <section className="border-b border-stone-200/80 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs text-stone-600">
              Enfoque moderno · Resultados medibles
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Tecnología sobria. Impacto real en tus KPIs.
            </h1>
            <p className="mt-4 max-w-prose text-stone-600">
              IA, Nube, Ciberseguridad, IoT y software a medida. Diseñamos, entregamos y operamos con métricas claras y compromisos serios.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-md bg-stone-900 hover:bg-stone-800">
                <Link href="/store">Visitar Tienda</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-md border-stone-300">
                <Link href="/services">Ver Servicios</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/sobrio-operaciones.png", alt: "Operación confiable" },
                { src: "/engineering-team-in-action.png", alt: "Equipo en acción" },
                { src: "/placeholder.svg?height=560&width=840", alt: "Arquitectura moderna" },
                { src: "/placeholder.svg?height=560&width=840", alt: "Hardware industrial" },
              ].map((img, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-md border border-stone-200 bg-stone-100">
                  <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destacado de Tienda (reemplaza "Ver para creer") */}
      <section className="border-b border-stone-200/80 bg-stone-50/60">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Tienda destacada</h2>
              <p className="mt-1 text-sm text-stone-600">Productos listos para producción. Elegidos por su calidad y confiabilidad.</p>
            </div>
            <Button asChild variant="ghost" className="rounded-md text-stone-800 hover:bg-stone-100">
              <Link href="/store">Ver todo →</Link>
            </Button>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Servicios en breve */}
      <section className="border-b border-stone-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Servicios</h2>
          <p className="mt-1 text-sm text-stone-600">
            De la estrategia a la operación continua. Seguridad por diseño y métricas de negocio visibles.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Agentes de IA", desc: "RAG evaluado, orquestación y guardrails." },
              { title: "Nube & SRE", desc: "Plataformas, FinOps y operación confiable." },
              { title: "IoT & Edge", desc: "Telemetría, control y visión en sitio." },
              { title: "Software a Medida", desc: "Arquitectura moderna, CI/CD y calidad." },
            ].map(s => (
              <div key={s.title} className="rounded-md border border-stone-200 p-4">
                <div className="text-sm font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-stone-600">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild variant="outline" className="rounded-md border-stone-300">
              <Link href="/services">Explorar servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA final elegante (claro, sin azul) */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold tracking-tight">Llevemos tus KPIs a otro nivel</h3>
              <p className="mt-1 text-sm text-stone-600">
                Conversemos objetivos y compromisos claros. Trazamos una ruta de valor a 90 días.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Button asChild className="rounded-md bg-stone-900 hover:bg-stone-800">
                <Link href="/contact">Contactar</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-md border-stone-300">
                <Link href="/products">Ver productos</Link>
              </Button>
            </div>
          </div>
          <Separator className="mt-8" />
          <div className="mt-3 text-xs text-stone-500">Sin artificios: diseño sobrio, ejecución rigurosa.</div>
        </div>
      </section>
    </>
  )
}
