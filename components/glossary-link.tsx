"use client"

import Link from "next/link"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { glossary } from "@/lib/glossary"

function slugify(key: string) {
  return key.toLowerCase().replace(/\s+/g, "-")
}

export default function GlossaryLink({
  termKey,
  children,
  className,
}: {
  termKey: keyof typeof glossary
  children?: React.ReactNode
  className?: string
}) {
  const entry = glossary[termKey]
  const label = children ?? entry?.term ?? String(termKey)
  const href = `/glossary#${slugify(termKey)}`
  if (!entry) return <span className={className}>{label}</span>

  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id={`gloss-${termKey}`}>
          <div className="fw-semibold small">{entry.term}</div>
          <div className="small">{entry.definition}</div>
        </Tooltip>
      }
    >
      <Link href={href} className={className ? className : "text-decoration-underline"}>
        {label}
      </Link>
    </OverlayTrigger>
  )
}
