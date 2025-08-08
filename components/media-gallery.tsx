"use client"

import Image from "next/image"
import { Play } from 'lucide-react'
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

type MediaItem =
  | { type: "image"; src: string; alt: string; width?: number; height?: number }
  | { type: "video"; src: string; poster?: string; alt: string }

export default function MediaGallery({ items = [] as MediaItem[] }) {
  const [open, setOpen] = useState(false)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it, i) => {
          if (it.type === "image") {
            return (
              <div key={i} className="relative overflow-hidden rounded-xl border">
                <Image
                  src={it.src || "/placeholder.svg"}
                  alt={it.alt}
                  width={it.width || 900}
                  height={it.height || 600}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          }
          return (
            <button
              key={i}
              className="group relative overflow-hidden rounded-xl border aspect-video"
              onClick={() => { setVideoSrc(it.src); setOpen(true) }}
              aria-label={`Reproducir video: ${it.alt}`}
            >
              <video
                src={it.src}
                muted
                playsInline
                loop
                poster={it.poster}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
              <Play className="absolute inset-0 m-auto w-10 h-10 text-white drop-shadow" />
            </button>
          )
        })}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 max-w-4xl">
          {videoSrc && (
            <video
              src={videoSrc}
              autoPlay
              controls
              playsInline
              className="w-full h-full"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
