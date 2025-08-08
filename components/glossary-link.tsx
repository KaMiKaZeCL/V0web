"use client"

import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { glossary } from "@/lib/glossary"
import { cn } from "@/lib/utils"

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
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={href} className={cn("underline underline-offset-4 decoration-emerald-400 hover:text-emerald-700", className)}>
            {label}
          </Link>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-sm">
          <div className="font-medium">{entry.term}</div>
          <div className="text-muted-foreground mt-1">{entry.definition}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
