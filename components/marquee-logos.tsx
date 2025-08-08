"use client"

import Image from "next/image"
import { useMemo } from "react"

type Logo = { name: string; logo: string }

export default function MarqueeLogos({ items }: { items: Logo[] }) {
  const rows = useMemo(() => {
    const base = items.length ? items : [{ name: "Logo", logo: "/abstract-logo.png" }]
    // Duplicate to create seamless loop
    return [...base, ...base, ...base]
  }, [items])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="flex animate-[marquee_30s_linear_infinite] gap-10 will-change-transform">
        {rows.map((c, i) => (
          <div key={`${c.name}-${i}`} className="shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition">
            <Image src={c.logo || "/placeholder.svg?height=70&width=140&query=logo"} alt={c.name + " logo"} width={140} height={70} className="object-contain" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  )
}
