import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Prestavby a stavebné úpravy | VND Construction",
  description: "Prestavby, prístavby a stavebné úpravy v Bratislave. Rozšírenie obytného priestoru, zmena dispozície, prístavby. Získajte cenovú ponuku.",
  openGraph: {
    title: "Prestavby a stavebné úpravy | VND Construction",
    description: "Prestavby, prístavby a stavebné úpravy v Bratislave. Rozšírenie obytného priestoru, zmena dispozície.",
  },
}

const benefits = [
  "Rozšírenie obytného priestoru bez stavebného povolenia",
  "Zmena dispozície podľa vašich potrieb",
  "Prístavby a nadstavby",
  "Profesionálne riešenia pre každý projekt",
  "Koordinácia so stavebným úradom",
  "Záruka na všetky vykonané práce",
]

const process = [
  {
    step: "1",
    title: "Konzultácia a posúdenie",
    description: "Zhodnotíme vaše požiadavky a možnosti realizácie. Posúdime potrebu stavebného povolenia.",
  },
  {
    step: "2",
    title: "Projekt a povolenia",
    description: "Pripravíme projekt a zabezpečíme potrebné povolenia a súhlasy.",
  },
  {
    step: "3",
    title: "Demolačné práce",
    description: "Odstránenie starých konštrukcií a príprava priestoru.",
  },
  {
    step: "4",
    title: "Stavebné úpravy",
    description: "Výstavba nových stien, prerušenia, prístavby podľa projektu.",
  },
  {
    step: "5",
    title: "Inštalácie a dokončenie",
    description: "Elektroinštalácie, vodovod, omietky, dlažby a finálne úpravy.",
  },
  {
    step: "6",
    title: "Kontrola a odovzdanie",
    description: "Finálna kontrola kvality a odovzdanie hotového projektu.",
  },
]

const faq = [
  {
    question: "Potrebujem stavebné povolenie na prestavbu?",
    answer: "Záleží na rozsahu prác. Niektoré úpravy možno realizovať bez stavebného povolenia (napr. zmena dispozície v rámci existujúcich stien). Pri prístavbách a väčších úpravách je potrebné stavebné povolenie. Vždy vás informujeme o potrebných povoleniach.",
  },
  {
    question: "Ako dlho trvá prestavba?",
    answer: "Čas realizácie závisí od rozsahu prác. Menšie úpravy trvajú 2-4 týždne, väčšie prestavby 6-12 týždňov. Vždy vás informujeme o presných termínoch.",
  },
  {
    question: "Môžem bývať v dome počas prestavby?",
    answer: "Záleží na rozsahu prác. Pri menších úpravách je to možné, pri väčších prestavbách odporúčame dočasné ubytovanie. Vždy nájdeme najlepšie riešenie.",
  },
  {
    question: "Môžete pomôcť so získaním povolení?",
    answer: "Áno, zabezpečíme všetky potrebné povolenia a súhlasy. Máme skúsenosti s komunikáciou so stavebnými úradmi.",
  },
]

export default function PrestavbyAStavebneUpravy() {
  return (
    <div className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Prestavby a stavebné úpravy
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Prestavby, prístavby a úpravy existujúcich objektov podľa vašich potrieb. Rozšírenie obytného priestoru alebo zmena dispozície - všetko je možné.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Čo zahŕňajú prestavby a úpravy
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Prestavby a stavebné úpravy zahŕňajú širokú škálu prác - od zmien dispozície v rámci existujúcich stien, cez prerušenia a výstavbu nových stien, až po prístavby a nadstavby.
              </p>
              <p>
                Špecializujeme sa na rozšírenie obytného priestoru, zmeny dispozície bytov a domov, prístavby kuchýň, kúpeľní alebo spální, a mnoho ďalšieho. Každý projekt prispôsobujeme vašim potrebám a možnostiam objektu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Prečo si vybrať nás
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
              Ako prebieha prestavba
            </h2>
            <div className="space-y-8">
              {process.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
              Často kladené otázky
            </h2>
            <div className="space-y-8">
              {faq.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Pripravení začať váš projekt?
            </h2>
            <p className="mt-6 text-lg leading-8 text-accent-foreground/90">
              Kontaktujte nás ešte dnes a získajte bezplatnú konzultáciu a cenovú ponuku.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">
                  Získať cenovú ponuku
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
