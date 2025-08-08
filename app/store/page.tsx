"use client"

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { allStoreProducts } from "@/lib/data"
import ProductCard from "@/components/product-card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"

export default function StorePage() {
  const [q, setQ] = useState("")
  const [category, setCategory] = useState("Todos")
  const { openCart } = useCart()

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(allStoreProducts.map(p => p.category)))], [])
  const items = useMemo(() => {
    const base = category === "Todos" ? allStoreProducts : allStoreProducts.filter(p => p.category === category)
    if (!q) return base
    return base.filter(p => (p.name + " " + p.description).toLowerCase().includes(q.toLowerCase()))
  }, [q, category])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-6">
          <Badge variant="secondary" className="rounded-full">Tienda</Badge>
          <h1 className="text-3xl md:text-4xl font-semibold mt-3">Compra directa</h1>
          <p className="text-slate-600 mt-2">Servidores, workstations, laptops/notebooks, tablets, pantallas, impresoras, data center, partes y piezas, y más.</p>
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-3 mb-6">
          <Input placeholder="Buscar en la tienda..." value={q} onChange={(e) => setQ(e.target.value)} />
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
            <ProductCard key={p.id} product={p as any} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={openCart}
            className="px-6 h-11 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Ver Carrito
          </button>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
