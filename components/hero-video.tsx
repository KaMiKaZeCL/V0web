"use client"

import { useEffect, useRef, useState } from "react"

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onCanPlay = () => setCanPlay(true)
    v.addEventListener("canplay", onCanPlay)
    return () => v.removeEventListener("canplay", onCanPlay)
  }, [])

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] bg-white">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        poster="/futuristic-tech-landscape-4k.png"
      >
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
        <source src="https://media.w3.org/2010/05/bunny/trailer.mp4" type="video/mp4" />
      </video>
      {!canPlay && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/30 via-white/50 to-white/70" />
      )}
    </div>
  )
}
