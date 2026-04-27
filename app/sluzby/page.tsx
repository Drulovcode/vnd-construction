import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Služby | VND Construction s. r. o.",
  description: "Komplexné stavebné služby v Bratislave: rekonštrukcie, stavby domov, prestavby, fasádne práce a ďalšie. Získajte cenovú ponuku.",
  openGraph: {
    title: "Služby | VND Construction s. r. o.",
    description: "Komplexné stavebné služby v Bratislave: rekonštrukcie, stavby domov, prestavby, fasádne práce a ďalšie.",
  },
}

const services = [
  {
    title: "Rekonštrukcia interiérov",
    description: "Komplexné rekonštrukcie bytov a domov s dôrazom na moderný dizajn a funkčnosť. Od demolačných prác až po finálne dokončenie.",
    href: "/sluzby/rekonstrukcia-interierov",
  },
  {
    title: "Stavba rodinných domov",
    description: "Stavba rodinných domov na kľúč od projektu až po konečné dokončenie. Kompletná realizácia vášho snu o vlastnom dome.",
    href: "/sluzby/stavba-rodinnych-domov",
  },
  {
    title: "Prestavby a stavebné úpravy",
    description: "Prestavby, prístavby a úpravy existujúcich objektov podľa vašich potrieb. Rozšírenie obytného priestoru alebo zmena dispozície.",
    href: "/sluzby/prestavby-a-stavebne-upravy",
  },
  {
    title: "Fasádne práce",
    description: "Kompletné fasádne práce vrátane zateplenia, omietok a finálnych úprav. Zlepšenie energetickej účinnosti a vzhľadu vášho domu.",
    href: "/sluzby/fasadne-prace",
  },
  {
    title: "Výstavba bytových jednotiek",
    description: "Výstavba a rekonštrukcia bytových jednotiek v bytových domoch. Kompletná realizácia od hrubej stavby po dokončovacie práce.",
    href: "/sluzby/vystavba-bytovych-jednotiek",
  },
  {
    title: "Rekonštrukcia komerčných priestorov",
    description: "Rekonštrukcie kancelárií, obchodov a iných komerčných priestorov. Profesionálne riešenia pre vaše podnikanie.",
    href: "/sluzby/rekonstrukcia-komercnych-priestorov",
  },
]

export default function Sluzby() {
  return (
    <div className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Naše služby
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Poskytujeme komplexné stavebné služby pre domácnosti aj firmy v Bratislave a okolí. Každý projekt realizujeme s dôrazom na kvalitu a dodržiavanie termínov.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button asChild>
                    <Link href={service.href}>
                      Viac informácií
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Potrebujete inú službu?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Kontaktujte nás a my vám poskytneme cenovú ponuku aj na iné stavebné práce.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/kontakt">Kontaktovať nás</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
