"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

type GalleryImage = {
  id: number
  src: string
  alt: string
}

export default function Fotogaleria() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  useEffect(() => {
    async function loadGalleryImages() {
      try {
        const response = await fetch("/api/gallery-images")
        if (!response.ok) return

        const data = (await response.json()) as { files: string[] }
        const galleryImages = data.files.map((src, index) => ({
          id: index + 1,
          src,
          alt: `Foto projektu ${index + 1}`,
        }))
        setImages(galleryImages)
      } catch {
        setImages([])
      }
    }

    loadGalleryImages()
  }, [])

  return (
    <div className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Fotogaléria
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Pozrite si fotografie z našich projektov. Každý obrázok hovorí o našej práci a kvalite.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <div className="relative aspect-video bg-gray-200">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
