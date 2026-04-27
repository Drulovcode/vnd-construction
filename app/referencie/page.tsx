import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Referencie | VND Construction",
  description: "Čo hovoria naši klienti o našej práci. Pozrite si referencie a recenzie od spokojných zákazníkov v Bratislave.",
  openGraph: {
    title: "Referencie | VND Construction",
    description: "Čo hovoria naši klienti o našej práci. Pozrite si referencie a recenzie od spokojných zákazníkov.",
  },
}

const testimonials = [
  {
    name: "Peter Novák",
    location: "Bratislava - Dúbravka",
    project: "Rekonštrukcia rodinného domu",
    rating: 5,
    text: "VND Construction s. r. o. nám dokončili kompletnú rekonštrukciu domu. Boli profesionálni, dodržali termíny a práca bola naozaj kvalitná. Komunikácia bola bezproblémová a vždy sme vedeli, čo sa deje. Odporúčam!",
    date: "Január 2024",
  },
  {
    name: "Mária Kováčová",
    location: "Bratislava - Staré Mesto",
    project: "Rekonštrukcia bytu",
    rating: 5,
    text: "Sme veľmi spokojní s prácou. Tím bol vždy zdvorilý, komunikácia bezproblémová a výsledok predčil naše očakávania. Rekonštrukcia bytu prebehla hladko a všetko bolo dokončené včas. Ďakujeme!",
    date: "December 2023",
  },
  {
    name: "Ján Horváth",
    location: "Bratislava - Rača",
    project: "Stavba rodinného domu",
    rating: 5,
    text: "Stavba nášho nového domu prebiehala hladko a profesionálne. Všetko bolo dokončené včas a v najvyššej kvalite. Tím bol vždy k dispozícii a riešil všetky naše požiadavky. Skvelá práca!",
    date: "November 2023",
  },
  {
    name: "Eva Szabóová",
    location: "Bratislava - Petržalka",
    project: "Zateplenie a fasádne práce",
    rating: 5,
    text: "Zateplenie nášho domu prebehlo profesionálne a včas. Práca bola kvalitná a výsledok je skvelý. Energetická účinnosť sa výrazne zlepšila. Odporúčam VND Construction všetkým.",
    date: "Október 2023",
  },
  {
    name: "Tomáš Polák",
    location: "Bratislava - Ružinov",
    project: "Prestavba bytu",
    rating: 5,
    text: "Prestavba nášho bytu bola realizovaná profesionálne a včas. Tím bol zdvorilý a vždy ochotný pomôcť. Výsledok je presne taký, aký sme chceli. Ďakujeme za skvelú prácu!",
    date: "September 2023",
  },
  {
    name: "Zuzana Nováková",
    location: "Bratislava - Nové Mesto",
    project: "Rekonštrukcia kancelárií",
    rating: 5,
    text: "Rekonštrukcia našich kancelárskych priestorov prebehla bez problémov. Tím minimalizoval vplyv na našu prevádzku a všetko bolo dokončené včas. Profesionálny prístup a kvalitná práca.",
    date: "August 2023",
  },
]

export default function Referencie() {
  return (
    <div className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Referencie
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Spokojnosť našich klientov je naša priorita. Pozrite si, čo o nás hovoria naši zákazníci.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{`"${testimonial.text}"`}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-sm text-gray-500 mt-1">{testimonial.project}</p>
                    <p className="text-xs text-gray-400 mt-2">{testimonial.date}</p>
                  </div>
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
              Ste spokojní s našou prácou?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Ak ste naším klientom a chcete sa podeliť o svoje skúsenosti, budeme radi za vašu referenciu.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
