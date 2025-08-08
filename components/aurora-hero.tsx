"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

type AuroraHeroProps = {
  eyebrow?: string
  title?: string
  subtitle?: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
}

export default function AuroraHero({
  eyebrow = "South Developers Chile SpA",
  title = "Tecnología que mueve el negocio",
  subtitle = "Creamos plataformas, productos y operaciones que entregan resultados medibles. IA, nube, ciberseguridad, IoT y software a la medida con SLAs exigentes, KPIs claros y un enfoque AI‑first.",
  primaryCta = { href: "/contact", label: "Conversemos" },
  secondaryCta = { href: "/services", label: "Explorar servicios" },
}: AuroraHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Animated aurora background */}
      <div className="absolute inset-0">
        <div className="absolute -inset-[20%] bg-[conic-gradient(at_10%_10%,#10b981_10%,#a855f7_35%,#14b8a6_55%,#0ea5a4_75%,#10b981_100%)] opacity-[0.15] blur-3xl animate-[spin_40s_linear_infinite]" />
        <div className="absolute -inset-[30%] bg-[radial-gradient(60%_60%_at_50%_40%,#10b981_10%,transparent_60%)] opacity-30 blur-2xl" />
        <div className="absolute -inset-[35%] bg-[radial-gradient(50%_50%_at_60%_60%,#a855f7_10%,transparent_60%)] opacity-25 blur-3xl" />
        <div className="absolute inset-0 bg-grid-slate-100/40 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            {eyebrow}
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600">
            {subtitle}
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="h-11 px-6 bg-emerald-600 hover:bg-emerald-700">
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-6">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
          <div className="mt-6 text-sm text-slate-500">
            Operamos con KPIs y SLAs explícitos: uptime, seguridad, performance y experiencia.
          </div>
        </div>
      </div>
    </section>
  )
}
