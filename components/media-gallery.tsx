"use client"

import Image from "next/image"
import { useState } from "react"
import { Modal, Row, Col } from "react-bootstrap"
import { Play } from 'lucide-react'

type MediaItem =
  | { type: "image"; src: string; alt: string; width?: number; height?: number }
  | { type: "video"; src: string; poster?: string; alt: string }

export default function MediaGallery({ items = [] as MediaItem[] }) {
  const [open, setOpen] = useState(false)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  return (
    <>
      <Row className="g-3">
        {items.map((it, i) => {
          if (it.type === "image") {
            return (
              <Col key={i} sm={6} lg={4}>
                <div className="rounded border overflow-hidden">
                  <div className="ratio ratio-16x9">
                    <Image
                      src={it.src || "/placeholder.svg"}
                      alt={it.alt}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </Col>
            )
          }
          return (
            <Col key={i} sm={6} lg={4}>
              <button
                className="position-relative w-100 rounded border overflow-hidden ratio ratio-16x9"
                onClick={() => { setVideoSrc(it.src); setOpen(true) }}
                aria-label={`Reproducir video: ${it.alt}`}
              >
                <video
                  src={it.src}
                  muted
                  playsInline
                  loop
                  poster={it.poster}
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{ objectFit: "cover", opacity: 0.9 }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.2)" }} />
                <Play className="position-absolute top-50 start-50 translate-middle text-white" size={32} />
              </button>
            </Col>
          )
        })}
      </Row>

      <Modal show={open} onHide={() => setOpen(false)} size="lg" centered>
        <Modal.Body className="p-0">
          {videoSrc && (
            <video
              src={videoSrc}
              autoPlay
              controls
              playsInline
              className="w-100 h-100"
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}
