"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

const images = [
  "/images/7dc321a0-bccd-4151-8691-e8db2c93b2bd.jpg",
  "/images/8c80b27d-2cef-4ffe-a499-969cb88f5333.jpg",
  "/images/88e2cc9a-5e6c-4c4e-8632-3446d18e517b.jpg",
  "/images/9126820c-c770-4bc8-a0b0-6ebb7073868c.jpg",
  "/images/a1b9f777-c2f2-4963-8bdc-1ee88fe86194.jpg",
  "/images/a4d77600-2ddd-4028-8249-6793213e0f45.jpg",
  "/images/b84493bd-6375-4ace-86b1-dd8039b3b540.jpg",
  "/images/db7477e7-8339-4942-8833-4bc5a9cacc69.jpg",
  "/images/e959d265-1b07-4da8-9fcd-c05b5e63cc54.jpg",
  "/images/e9ed8770-3951-47fc-bb5d-f83032620b95.jpg",
  "/images/f5e8daae-2e6d-48ac-aae2-00254a876e39.jpg",
]

export default function Fotogaleria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
            {images.map((src, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Foto projektu ${index + 1}`}
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
                src={selectedImage}
                alt="Gallery image"
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
