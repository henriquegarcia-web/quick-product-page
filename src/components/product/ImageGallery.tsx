'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  images: string[]
}

export default function ImageGallery({ images }: Props) {
  const [selected, setSelected] = useState(images[0])

  useEffect(() => {
    setSelected(images[0])
  }, [images])

  return (
    <div className="space-y-4">
      <div className="aspect-square w-full border border-zinc-300 rounded-lg overflow-hidden">
        <Image
          src={selected}
          alt="Imagem do produto"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex gap-2">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setSelected(img)}
            className={`border border-zinc-300 rounded-lg overflow-hidden hover:border-zinc-500 ${img === selected ? 'ring-2 ring-black' : ''}`}
          >
            <Image src={img} alt="" width={80} height={80} className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
