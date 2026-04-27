import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Target, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "O nás | VND Construction s. r. o.",
  description: "Zoznámte sa s VND Construction s. r. o. - profesionálnou stavebnou firmou v Bratislave s 15+ rokmi skúseností. Naša história, hodnoty a tím.",
  openGraph: {
    title: "O nás | VND Construction s. r. o.",
    description: "Zoznámte sa s VND Construction s. r. o. - profesionálnou stavebnou firmou v Bratislave s 15+ rokmi skúseností.",
  },
}

const values = [
  {
    title: "Kvalita",
    description: "Používame len najkvalitnejšie materiály a dodržiavame najvyššie štandardy v stavebníctve.",
    icon: Award,
  },
  {
    title: "Spoľahlivosť",
    description: "Dodržiavame termíny a sľuby. Naši klienti sa môžu na nás spoľahnúť.",
    icon: Target,
  },
  {
    title: "Lokalita",
    description: "Sme domáci v Bratislave a okolí. Poznáme miestne podmienky a požiadavky.",
    icon: MapPin,
  },
  {
    title: "Tím",
    description: "Našu prácu vykonávajú skúsení remeselníci a odborníci v svojom odbore.",
    icon: Users,
  },
]

export default function ONas() {
  return (
    <div className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              O nás
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              <span className="tracking-wide font-semibold">VND Construction</span> s. r. o. je profesionálna stavebná spoločnosť pôsobiaca v Bratislave a okolí. S našimi 15+ rokmi skúseností sme sa stali spoľahlivým partnerom pre domácnosti aj firmy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Naša história
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                VND Construction bola založená s cieľom poskytovať kvalitné a spoľahlivé stavebné služby v Bratislave a okolí. Od začiatku sme sa zamerali na komplexné riešenia pre naše klienty - od projektovania až po finálne dokončenie.
              </p>
              <p>
                Počas rokov sme úspešne dokončili stovky projektov rôznej veľkosti. Naša práca zahŕňa rekonštrukcie bytov a domov, stavby rodinných domov na kľúč, prestavby, fasádne práce a mnoho ďalšieho.
              </p>
              <p>
                Dnes sme známi svojou profesionalitou, dodržiavaním termínov a vysokou kvalitou práce. Naši klienti oceňujú naše individuálne prístupy a schopnosť realizovať aj najnáročnejšie projekty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Naše hodnoty
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Tieto hodnoty nás vedú v každom projekte a v každom dni našej práce.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <value.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Oblasť pôsobenia
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Pôsobíme predovšetkým v <strong>Bratislave a okolí</strong>. Naše služby poskytujeme v celom Bratislavskom kraji, vrátane okolitých obcí a miest.
              </p>
              <p>
                Ak máte projekt v tejto oblasti, neváhajte nás kontaktovať. Radi sa stretneme na mieste a poskytneme vám bezplatnú konzultáciu a cenovú ponuku.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
