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
                <div className="media-tile ratio ratio-16x9">
                  <div className="inner">
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
                className="media-tile ratio ratio-16x9"
                onClick={() => { setVideoSrc(it.src); setOpen(true) }}
                aria-label={`Reproducir video: ${it.alt}`}
              >
                <div className="inner">
                  <video
                    src={it.src}
                    muted
                    playsInline
                    loop
                    poster={it.poster}
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{ objectFit: "cover", opacity: 0.92 }}
                  />
                </div>
                <div className="media-overlay" />
                <span className="play-btn">
                  <Play size={20} />
                </span>
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
