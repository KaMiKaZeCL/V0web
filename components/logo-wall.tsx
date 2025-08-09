"use client"

import Image from "next/image"

type Logo = { name: string; logo: string }

export default function LogoWall({ items = [] as Logo[] }) {
  const list = items.length ? items : [{ name: "South Developers", logo: "/images/south-developers-logo.png" }]
  return (
    <div className="logo-wall">
      {list.map((c, i) => (
        <div key={`${c.name}-${i}`} className="logo-cell">
          <Image
            src={c.logo || "/placeholder.svg?height=100&width=220&query=logo"}
            alt={`${c.name} logo`}
            width={220}
            height={80}
            style={{ objectFit: "contain", maxWidth: "88%", height: "64px" }}
          />
        </div>
      ))}
    </div>
  )
}
