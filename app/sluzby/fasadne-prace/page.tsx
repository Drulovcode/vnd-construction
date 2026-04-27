import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Fasádne práce | VND Construction",
  description: "Kompletné fasádne práce v Bratislave: zateplenie, omietky, finálne úpravy. Zlepšenie energetickej účinnosti a vzhľadu vášho domu.",
  openGraph: {
    title: "Fasádne práce | VND Construction",
    description: "Kompletné fasádne práce v Bratislave: zateplenie, omietky, finálne úpravy.",
  },
}

const benefits = [
  "Zlepšenie energetickej účinnosti domu",
  "Moderný a atraktívny vzhľad",
  "Použitie kvalitných izolačných materiálov",
  "Dlhodobá životnosť a odolnosť",
  "Profesionálne omietky a finálne úpravy",
  "Záruka na všetky vykonané práce",
]

const process = [
  {
    step: "1",
    title: "Konzultácia a posúdenie",
    description: "Zhodnotíme stav existujúcej fasády a navrhneme optimálne riešenie.",
  },
  {
    step: "2",
    title: "Príprava a lešenie",
    description: "Príprava povrchu fasády a montáž lešenia pre bezpečnú prácu.",
  },
  {
    step: "3",
    title: "Zateplenie",
    description: "Montáž izolačných materiálov (EPS, minerálna vlna) podľa projektu.",
  },
  {
    step: "4",
    title: "Armovanie a základná omietka",
    description: "Aplikácia armovacej siete a základnej omietky na zateplenie.",
  },
  {
    step: "5",
    title: "Finálna omietka a úpravy",
    description: "Aplikácia finálnej omietky, maľovanie a finálne úpravy.",
  },
  {
    step: "6",
    title: "Kontrola a odovzdanie",
    description: "Finálna kontrola kvality a odovzdanie hotovej fasády.",
  },
]

const faq = [
  {
    question: "Ako dlho trvá realizácia fasádnych prác?",
    answer: "Čas realizácie závisí od veľkosti objektu a zložitosti prác. Priemerná fasáda rodinného domu trvá 3-6 týždňov. Vždy vás informujeme o presných termínoch.",
  },
  {
    question: "Aké materiály používate na zateplenie?",
    answer: "Používame kvalitné izolačné materiály - EPS (polystyrén) alebo minerálnu vlnu od renomovaných výrobcov. Výber materiálu závisí od konkrétnych požiadaviek projektu.",
  },
  {
    question: "Je možné získať dotáciu na zateplenie?",
    answer: "Áno, na zateplenie je možné získať dotáciu z programu Nová zelená úsporám. Pomôžeme vám s podaním žiadosti o dotáciu.",
  },
  {
    question: "Poskytujete záruku na fasádne práce?",
    answer: "Áno, poskytujeme záruku na všetky vykonané práce a použité materiály. Konkrétne podmienky záruky sú súčasťou zmluvy.",
  },
]

export default function FasadnePrace() {
  return (
    <div className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Fasádne práce
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Kompletné fasádne práce vrátane zateplenia, omietok a finálnych úprav. Zlepšenie energetickej účinnosti a vzhľadu vášho domu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Čo zahŕňajú fasádne práce
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Naše fasádne práce zahŕňajú kompletnú realizáciu zateplenia a omietok. Začíname prípravou povrchu a montážou lešenia, pokračujeme montážou izolačných materiálov, aplikáciou armovacej siete a omietok, a končíme finálnymi úpravami a maľovaním.
              </p>
              <p>
                Špecializujeme sa na zateplenie rodinných domov a bytových domov pomocou EPS alebo minerálnej vlny. Používame len kvalitné materiály od renomovaných výrobcov a dodržiavame všetky technické normy.
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
              Ako prebiehajú fasádne práce
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
