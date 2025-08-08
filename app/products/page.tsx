"use client"

import { useMemo, useState } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { allProducts } from "@/lib/data"
import GlossaryLink from "@/components/glossary-link"

export default function ProductsPage() {
  const [q, setQ] = useState("")
  const [category, setCategory] = useState("Todos")

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(allProducts.map(p => p.category)))], [])
  const items = useMemo(() => {
    const base = category === "Todos" ? allProducts : allProducts.filter(p => p.category === category)
    if (!q) return base
    return base.filter(p => (p.name + " " + p.description).toLowerCase().includes(q.toLowerCase()))
  }, [q, category])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-6">
          <Badge variant="secondary" className="rounded-full">Productos</Badge>
          <h1 className="text-3xl md:text-4xl font-semibold mt-3">Plataformas, hardware y software listos</h1>
          <p className="text-slate-600 mt-2">Desde <strong>servidores</strong> y <strong>workstations</strong>, hasta <strong>laptops/notebooks</strong>, <strong>tablets</strong>, <strong>pantallas</strong>, <strong>impresoras</strong>, <strong>data center</strong> y <strong>partes y piezas</strong>. También plataformas de IA, nube y seguridad.</p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-3 mb-6">
          <Input placeholder="Buscar productos..." value={q} onChange={(e) => setQ(e.target.value)} />
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-full border text-sm ${category === c ? "bg-emerald-600 text-white border-emerald-600" : "hover:bg-muted"}`}
                aria-pressed={category === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
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

        <div className="mt-10 text-sm text-slate-600">
          Nota: Integramos <GlossaryLink termKey="finops">FinOps</GlossaryLink> para optimizar costos de infraestructura y plataformas.
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
