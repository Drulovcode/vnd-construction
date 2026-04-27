import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Stavba rodinných domov | VND Construction",
  description: "Stavba rodinných domov na kľúč v Bratislave a okolí. Od projektu až po konečné dokončenie. Kvalitné materiály, dodržiavanie termínov.",
  openGraph: {
    title: "Stavba rodinných domov | VND Construction",
    description: "Stavba rodinných domov na kľúč v Bratislave a okolí. Od projektu až po konečné dokončenie.",
  },
}

const benefits = [
  "Kompletná realizácia od projektu po kľúč",
  "Individuálne riešenia podľa vašich požiadaviek",
  "Použitie kvalitných materiálov a technológií",
  "Dodržiavanie termínov a rozpočtu",
  "Koordinácia všetkých stavebných prác",
  "Záruka na všetky vykonané práce",
]

const process = [
  {
    step: "1",
    title: "Konzultácia a projekt",
    description: "Zhodnotíme vaše požiadavky, navrhneme riešenie a pripravíme stavebný projekt.",
  },
  {
    step: "2",
    title: "Povolenia a dokumentácia",
    description: "Zabezpečíme všetky potrebné povolenia a stavebnú dokumentáciu.",
  },
  {
    step: "3",
    title: "Príprava pozemku",
    description: "Príprava staveniska, výkopové práce a základové konštrukcie.",
  },
  {
    step: "4",
    title: "Hrubá stavba",
    description: "Výstavba stien, strechy, okien a dverí - hrubá stavba domu.",
  },
  {
    step: "5",
    title: "Inštalácie a dokončenie",
    description: "Elektroinštalácie, vodovod, kúrenie, omietky, dlažby a finálne úpravy.",
  },
  {
    step: "6",
    title: "Kontrola a odovzdanie",
    description: "Finálna kontrola, kolaudácia a odovzdanie hotového domu.",
  },
]

const faq = [
  {
    question: "Ako dlho trvá stavba rodinného domu?",
    answer: "Čas stavby závisí od veľkosti a zložitosti projektu. Priemerná stavba rodinného domu trvá 8-12 mesiacov od začiatku výkopových prác po konečné dokončenie.",
  },
  {
    question: "Môžem si navrhnuť vlastný projekt?",
    answer: "Áno, môžete použiť vlastný projekt alebo sa nechať poradiť našimi architektmi. Pomôžeme vám vytvoriť ideálne riešenie pre vaše potreby.",
  },
  {
    question: "Poskytujete financovanie?",
    answer: "Nie, neposkytujeme priame financovanie, ale môžeme vás nasmerovať na spoľahlivé finančné inštitúcie, s ktorými spolupracujeme.",
  },
  {
    question: "Aká je záruka na stavbu?",
    answer: "Poskytujeme záruku na všetky vykonané práce podľa platných predpisov. Konkrétne podmienky záruky sú súčasťou zmluvy o dielo.",
  },
]

export default function StavbaRodinnychDomov() {
  return (
    <div className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Stavba rodinných domov
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Realizujeme stavby rodinných domov na kľúč od projektu až po konečné dokončenie. Váš dom vášho snu sa stane skutočnosťou.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Kompletná realizácia vášho domu
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Stavba rodinného domu je jedným z najdôležitejších rozhodnutí vo vašom živote. Preto sa snažíme, aby celý proces bol čo najhladší a najtransparentnejší.
              </p>
              <p>
                Zabezpečujeme kompletnú realizáciu - od prípravy projektu, cez získanie všetkých povolení, až po finálne dokončenie a kolaudáciu. Počas celej stavby vás pravidelne informujeme o pokroku a môžete sa kedykoľvek prísť pozrieť na stavbu.
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
              Proces stavby
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
              Pripravení začať stavbu vášho domu?
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
