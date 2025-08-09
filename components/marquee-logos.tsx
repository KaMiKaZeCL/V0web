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
    <div className="marquee-wrap">
      <div className="marquee-fade-l" />
      <div className="marquee-fade-r" />
      <div className="marquee">
        {rows.map((c, i) => (
          <div key={`${c.name}-${i}`} className="d-flex align-items-center justify-content-center">
            <Image
              src={c.logo || "/placeholder.svg?height=70&width=140&query=logo-grayscale"}
              alt={`${c.name} logo`}
              width={140}
              height={70}
              className="logo-img"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
