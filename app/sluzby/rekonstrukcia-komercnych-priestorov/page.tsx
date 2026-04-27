import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Rekonštrukcia komerčných priestorov | VND Construction",
  description: "Rekonštrukcie kancelárií, obchodov a iných komerčných priestorov v Bratislave. Profesionálne riešenia pre vaše podnikanie.",
  openGraph: {
    title: "Rekonštrukcia komerčných priestorov | VND Construction",
    description: "Rekonštrukcie kancelárií, obchodov a iných komerčných priestorov v Bratislave.",
  },
}

const benefits = [
  "Riešenia šité na mieru vašej firme",
  "Minimálne prerušenie prevádzky",
  "Profesionálny vzhľad a funkčnosť",
  "Koordinácia so všetkými dodávateľmi",
  "Dodržiavanie termínov a rozpočtu",
  "Záruka na všetky vykonané práce",
]

const process = [
  {
    step: "1",
    title: "Konzultácia a projekt",
    description: "Zhodnotíme vaše požiadavky a pripravíme projekt rekonštrukcie komerčného priestoru.",
  },
  {
    step: "2",
    title: "Plánovanie a koordinácia",
    description: "Naplánujeme časový harmonogram s minimálnym vplyvom na vašu prevádzku.",
  },
  {
    step: "3",
    title: "Demolačné a stavebné práce",
    description: "Odstránenie starých prvkov a realizácia stavebných úprav podľa projektu.",
  },
  {
    step: "4",
    title: "Inštalácie",
    description: "Elektroinštalácie, vodovod, kanalizácia, kúrenie, klimatizácia a ostatné inštalácie.",
  },
  {
    step: "5",
    title: "Dokončovacie práce",
    description: "Omietky, dlažby, obklady, maľovanie, osvetlenie a finálne úpravy.",
  },
  {
    step: "6",
    title: "Kontrola a odovzdanie",
    description: "Finálna kontrola kvality a odovzdanie hotového komerčného priestoru.",
  },
]

const faq = [
  {
    question: "Ako dlho trvá rekonštrukcia komerčného priestoru?",
    answer: "Čas realizácie závisí od rozsahu prác. Menšie úpravy trvajú 2-4 týždne, kompletná rekonštrukcia 6-12 týždňov. Vždy vás informujeme o presných termínoch.",
  },
  {
    question: "Môžem pokračovať v prevádzke počas rekonštrukcie?",
    answer: "Záleží na rozsahu prác. Pri menších úpravách je to možné, pri komplexných rekonštrukciách odporúčame dočasné prerušenie prevádzky. Vždy nájdeme najlepšie riešenie.",
  },
  {
    question: "Môžete pracovať počas víkendov alebo večer?",
    answer: "Áno, môžeme prispôsobiť pracovný čas vašim potrebám. Pracujeme aj počas víkendov alebo večer, ak je to potrebné.",
  },
  {
    question: "Poskytujete záruku na prácu?",
    answer: "Áno, poskytujeme záruku na všetky vykonané práce a použité materiály. Konkrétne podmienky záruky sú súčasťou zmluvy.",
  },
]

export default function RekonstrukciaKomercnychPriestorov() {
  return (
    <div className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Rekonštrukcia komerčných priestorov
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Rekonštrukcie kancelárií, obchodov a iných komerčných priestorov. Profesionálne riešenia pre vaše podnikanie s minimálnym vplyvom na prevádzku.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Čo zahŕňa rekonštrukcia komerčných priestorov
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Naša rekonštrukcia komerčných priestorov zahŕňa kompletnú transformáciu vášho podnikateľského priestoru. Začíname demolačnými prácami, pokračujeme stavebnými úpravami a inštaláciami, a končíme dokončovacími prácami.
              </p>
              <p>
                Špecializujeme sa na rekonštrukcie kancelárií, obchodov, reštaurácií, kaviarne a iných komerčných priestorov. Každý projekt prispôsobujeme vašim potrebám a požiadavkám, pričom minimalizujeme vplyv na vašu prevádzku.
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
              Ako prebieha rekonštrukcia
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
