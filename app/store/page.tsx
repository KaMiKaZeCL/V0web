"use client"

import { Metadata } from "next"
import { useMemo, useState } from "react"
import ProductCard from "@/components/product-card"
import { storeProducts } from "@/lib/catalog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tienda",
  description: "Compra directa: hardware, software y plataformas South Developers.",
}

export default function StorePage() {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("Todos")

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(storeProducts.map(p => p.category)))], [])
  const items = useMemo(() => {
    const base = cat === "Todos" ? storeProducts : storeProducts.filter(p => p.category === cat)
    const s = q.trim().toLowerCase()
    if (!s) return base
    return base.filter(p => (p.name + " " + p.description).toLowerCase().includes(s))
  }, [q, cat])

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Tienda</h1>
          <p className="mt-2 max-w-prose text-stone-600">
            Hardware, software y plataformas listas. Logística y soporte en Chile.
          </p>
        </div>
        <div className="w-full max-w-sm">
          <Label htmlFor="search" className="sr-only">Buscar</Label>
          <Input
            id="search"
            placeholder="Buscar productos…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="rounded-md border-stone-300"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map(c => (
          <Button
            key={c}
            variant={cat === c ? "default" : "outline"}
            className={cat === c ? "rounded-md bg-stone-900 hover:bg-stone-800" : "rounded-md border-stone-300 text-stone-700"}
            onClick={() => setCat(c)}
          >
            {c}
          </Button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
