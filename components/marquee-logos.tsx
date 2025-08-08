"use client"

import Image from "next/image"
import { useMemo } from "react"

type Logo = { name: string; logo: string }

export default function MarqueeLogos({ items }: { items: Logo[] }) {
  const rows = useMemo(() => {
    const base = items.length ? items : [{ name: "Logo", logo: "/abstract-logo.png" }]
    return [...base, ...base, ...base]
  }, [items])

  return (
    <div className="position-relative w-100 overflow-hidden">
      <div className="position-absolute top-0 bottom-0 start-0" style={{ width: 80, background: "linear-gradient(to right, white, transparent)" }} />
      <div className="position-absolute top-0 bottom-0 end-0" style={{ width: 80, background: "linear-gradient(to left, white, transparent)" }} />
      <div className="d-flex gap-4 marquee">
        {rows.map((c, i) => (
          <div key={`${c.name}-${i}`} className="d-flex align-items-center justify-content-center opacity-75">
            <Image src={c.logo || "/placeholder.svg?height=70&width=140&query=logo"} alt={`${c.name} logo`} width={140} height={70} style={{ objectFit: "contain" }} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  )
}
