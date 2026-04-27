import { CheckCircle, Clock, Award, Shield } from "lucide-react"

const features = [
  {
    name: "15+ rokov skúseností",
    description: "Dlhodobá prax v stavebníctve s množstvom úspešne dokončených projektov.",
    icon: Award,
  },
  {
    name: "Dodržiavanie termínov",
    description: "Vaše projekty dokončíme včas, bez kompromisov v kvalite.",
    icon: Clock,
  },
  {
    name: "Kvalitné materiály",
    description: "Používame len overené materiály od renomovaných dodávateľov.",
    icon: CheckCircle,
  },
  {
    name: "Záruka na prácu",
    description: "Poskytujeme záruku na všetky vykonané práce a materiály.",
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Prečo si vybrať <span className="tracking-wide">VND Construction</span> <span className="whitespace-nowrap">s.&nbsp;r.&nbsp;o.</span>?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Sme profesionálny tím s bohatými skúsenosťami a dôrazom na kvalitu a spokojnosť klientov.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground group-hover:text-accent transition-colors">
                  <feature.icon className="h-6 w-6 flex-none text-accent" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
