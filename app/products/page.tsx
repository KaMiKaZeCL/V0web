"use client"

import { useMemo, useState } from "react"
import ProductCard from "@/components/product-card"
import type { ProductWithSpecs } from "@/lib/catalog"
import { storeProducts } from "@/lib/catalog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ProductsPage() {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("Todos")

  const categories = useMemo(
    () => ["Todos", ...Array.from(new Set(storeProducts.map((p) => p.category)))],
    []
  )

  const items = useMemo(() => {
    const base = cat === "Todos" ? storeProducts : storeProducts.filter((p) => p.category === cat)
    const s = q.trim().toLowerCase()
    if (!s) return base
    return base.filter((p) => (p.name + " " + p.description).toLowerCase().includes(s))
  }, [q, cat])

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Productos</h1>
          <p className="mt-2 max-w-prose text-stone-600">
            Plataformas, hardware y software listos para producción.
          </p>
        </div>
        <div className="w-full max-w-sm">
          <Input
            placeholder="Buscar productos…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="rounded-md border-stone-300"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <Button
            key={c}
            variant={cat === c ? "default" : "outline"}
            className={cn(
              "rounded-md",
              cat === c ? "bg-stone-900 hover:bg-stone-800" : "border-stone-300 text-stone-700"
            )}
            onClick={() => setCat(c)}
          >
            {c}
          </Button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p: ProductWithSpecs) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
