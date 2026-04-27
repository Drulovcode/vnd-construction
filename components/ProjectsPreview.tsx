import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Rekonštrukcia rodinného domu",
    location: "Bratislava - Dúbravka",
    description: "Kompletná rekonštrukcia rodinného domu s moderným interiérom.",
    image: "/images/project-1.jpg",
  },
  {
    title: "Stavba nového domu",
    location: "Bratislava - Rača",
    description: "Stavba rodinného domu na kľúč s dizajnovým exteriérom.",
    image: "/images/project-2.jpg",
  },
  {
    title: "Rekonštrukcia bytu",
    location: "Bratislava - Staré Mesto",
    description: "Kompletná rekonštrukcia 3-izbového bytu v historickom centre.",
    image: "/images/project-3.jpg",
  },
]

export default function ProjectsPreview() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Naša práca
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Pozrite si niektoré z našich úspešne dokončených projektov.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:border-accent/20 transition-all group">
              <div className="relative h-64 w-full bg-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-300">
                  Obrázok projektu
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
                <p className="mt-4 text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild className="group">
            <Link href="/nasa-praca">
              Zobraziť všetky projekty
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
