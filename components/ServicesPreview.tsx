import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Rekonštrukcia interiérov",
    description: "Komplexné rekonštrukcie bytov a domov s dôrazom na moderný dizajn a funkčnosť.",
    href: "/sluzby/rekonstrukcia-interierov",
  },
  {
    title: "Stavba rodinných domov",
    description: "Stavba rodinných domov na kľúč od projektu až po konečné dokončenie.",
    href: "/sluzby/stavba-rodinnych-domov",
  },
  {
    title: "Prestavby a stavebné úpravy",
    description: "Prestavby, prístavby a úpravy existujúcich objektov podľa vašich potrieb.",
    href: "/sluzby/prestavby-a-stavebne-upravy",
  },
  {
    title: "Fasádne práce",
    description: "Kompletné fasádne práce vrátane zateplenia, omietok a finálnych úprav.",
    href: "/sluzby/fasadne-prace",
  },
  {
    title: "Výstavba bytových jednotiek",
    description: "Výstavba a rekonštrukcia bytových jednotiek v bytových domoch.",
    href: "/sluzby/vystavba-bytovych-jednotiek",
  },
  {
    title: "Rekonštrukcia komerčných priestorov",
    description: "Rekonštrukcie kancelárií, obchodov a iných komerčných priestorov.",
    href: "/sluzby/rekonstrukcia-komercnych-priestorov",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Naše služby
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Poskytujeme komplexné stavebné služby pre domácnosti aj firmy v Bratislave a okolí.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col hover:border-accent/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button variant="outline" asChild className="w-full group">
                  <Link href={service.href}>
                    Viac informácií
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/sluzby">Všetky služby</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
