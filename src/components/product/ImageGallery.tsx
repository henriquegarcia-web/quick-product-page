'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface Props {
  images: string[]
}

export default function ImageGallery({ images }: Props) {
  const [selected, setSelected] = useState(images[0])
  const [showZoom, setShowZoom] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSelected(images[0])
  }, [images])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomPosition({ x, y })
  }

  return (
    <div className="space-y-4">
      {/* Imagem principal com zoom-lens */}
      <div
        ref={containerRef}
        className="relative aspect-square w-full border border-zinc-300 rounded-lg overflow-hidden"
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={selected}
          alt="Imagem do produto"
          width={600}
          height={600}
          className="object-cover object-center w-full h-full"
        />

        {showZoom && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${selected})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '200%',
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }}
          />
        )}
      </div>

      {/* Miniaturas */}
      <div className="flex gap-2">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setSelected(img)}
            className={`border border-zinc-300 rounded-lg overflow-hidden hover:border-zinc-500 ${
              img === selected ? 'ring-2 ring-black' : ''
            }`}
          >
            <Image src={img} alt="" width={80} height={80} className="object-cover object-center" />
          </button>
        ))}
      </div>
    </div>
  )
}
