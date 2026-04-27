import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const navigation = {
  hlavne: [
    { name: "Úvod", href: "/" },
    { name: "O nás", href: "/o-nas" },
    { name: "Služby", href: "/sluzby" },
  ],
  sluzby: [
    { name: "Rekonštrukcia interiérov", href: "/sluzby/rekonstrukcia-interierov" },
    { name: "Stavba rodinných domov", href: "/sluzby/stavba-rodinnych-domov" },
    { name: "Prestavby a stavebné úpravy", href: "/sluzby/prestavby-a-stavebne-upravy" },
    { name: "Fasádne práce", href: "/sluzby/fasadne-prace" },
  ],
  dalsie: [
    { name: "Fotogaléria", href: "/fotogaleria" },
    { name: "Referencie", href: "/referencie" },
    { name: "Kontakt", href: "/kontakt" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-2">
              <span className="tracking-wider">VND Construction</span>
              <span className="text-base font-normal text-primary-foreground/60 ml-1 whitespace-nowrap">s.&nbsp;r.&nbsp;o.</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Profesionálne stavebné služby v Bratislave a okolí. Kvalita, spoľahlivosť a dodržiavanie termínov.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Hlavné</h4>
            <ul className="space-y-3">
              {navigation.hlavne.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Služby</h4>
            <ul className="space-y-3">
              {navigation.sluzby.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Bratislava, Slovensko
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/60 flex-shrink-0" />
                <a href="tel:+421900000000" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  +421 900 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/60 flex-shrink-0" />
                <a href="mailto:info@vndconstruction.sk" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  info@vndconstruction.sk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <p>Pondelok - Piatok: 8:00 - 17:00</p>
                  <p>Sobota: 9:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <p className="text-center text-sm text-primary-foreground/60">
              &copy; {new Date().getFullYear()} <span className="tracking-wide">VND Construction</span> <span className="whitespace-nowrap">s.&nbsp;r.&nbsp;o.</span> Všetky práva vyhradené.
            </p>
            <span className="hidden sm:inline text-primary-foreground/40">|</span>
            <Link href="/ochrana-sukromia" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Ochrana súkromia
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
