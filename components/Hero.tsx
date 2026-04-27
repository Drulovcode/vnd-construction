import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Фоновое изображение - современные здания и архитектура */}
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
          alt="Modern construction buildings and architecture" 
          fill 
          priority 
          className="object-cover"
          quality={90}
          sizes="100vw"
        />
        
        {/* Dark Overlay для читабельности текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
              Profesionálne stavebné služby v Bratislave
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/95 sm:text-2xl drop-shadow-lg max-w-3xl mx-auto">
              Kvalita, spoľahlivosť a dodržiavanie termínov. <span className="tracking-wide font-semibold">VND Construction</span> <span className="whitespace-nowrap">s.&nbsp;r.&nbsp;o.</span> je vašim spoľahlivým partnerom pre všetky stavebné projekty.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
              <Button size="lg" asChild className="shadow-2xl hover:shadow-accent/50">
                <Link href="/kontakt">
                  Získať cenovú ponuku
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
