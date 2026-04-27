import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Peter Novák",
    location: "Bratislava",
    rating: 5,
    text: "VND Construction s. r. o. nám dokončili kompletnú rekonštrukciu domu. Boli profesionálni, dodržali termíny a práca bola naozaj kvalitná. Odporúčam!",
  },
  {
    name: "Mária Kováčová",
    location: "Bratislava",
    rating: 5,
    text: "Sme veľmi spokojní s prácou. Tím bol vždy zdvorilý, komunikácia bezproblémová a výsledok predčil naše očakávania. Ďakujeme!",
  },
  {
    name: "Ján Horváth",
    location: "Bratislava",
    rating: 5,
    text: "Stavba nášho nového domu prebiehala hladko a profesionálne. Všetko bolo dokončené včas a v najvyššej kvalite. Skvelá práca!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Čo hovoria naši klienti
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Spokojnosť našich klientov je naša priorita. Pozrite si, čo o nás hovoria.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:border-accent/20 transition-all">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{`"${testimonial.text}"`}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
