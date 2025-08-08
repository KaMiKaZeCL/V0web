"use client"

import { useMemo, useState } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { glossary } from "@/lib/glossary"

function slugify(key: string) {
  return key.toLowerCase().replace(/\s+/g, "-")
}

export default function GlossaryPage() {
  const [q, setQ] = useState("")
  const entries = useMemo(() => {
    const list = Object.entries(glossary)
      .map(([key, val]) => ({ key, ...val }))
      .sort((a, b) => a.term.localeCompare(b.term, "es"))
    if (!q) return list
    const s = q.toLowerCase()
    return list.filter(e =>
      e.term.toLowerCase().includes(s) ||
      e.definition.toLowerCase().includes(s) ||
      (e.aka || []).some(a => a.toLowerCase().includes(s))
    )
  }, [q])

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="container max-w-5xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Glosario técnico</h1>
          <p className="text-slate-600 mt-2">
            Definiciones claras y modernas para que conversemos en el mismo idioma.
          </p>
          <div className="mt-4">
            <Input placeholder="Buscar (ej: SLA, SRE, RAG…)" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {entries.map((e) => (
            <Card key={e.key} id={slugify(e.key)} className="scroll-mt-24">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{e.term}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                <p>{e.definition}</p>
                {e.aka && e.aka.length > 0 && (
                  <p className="mt-2 text-slate-500"><span className="font-medium">También conocido como:</span> {e.aka.join(", ")}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
