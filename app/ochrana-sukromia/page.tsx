import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ochrana súkromia | VND Construction s. r. o.",
  description: "Zásady ochrany súkromia VND Construction s. r. o. Informácie o spracovaní osobných údajov, cookies a vašich právach.",
  openGraph: {
    title: "Ochrana súkromia | VND Construction s. r. o.",
    description: "Zásady ochrany súkromia VND Construction s. r. o. Informácie o spracovaní osobných údajov.",
  },
}

export default function OchranaSukromia() {
  return (
    <div className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Ochrana súkromia
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Posledná aktualizácia: {new Date().toLocaleDateString("sk-SK", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                  Správca osobných údajov
                </h2>
                <p className="text-gray-600">
                  Správcom osobných údajov je <span className="tracking-wide font-semibold">VND Construction</span> s. r. o., 
                  so sídlom v Bratislave, Slovensko.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                  Spracované osobné údaje
                </h2>
                <p className="text-gray-600 mb-4">
                  V rámci kontaktného formulára spracúvame nasledujúce osobné údaje:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Meno a priezvisko</strong> - na účely identifikácie a komunikácie</li>
                  <li><strong>Emailová adresa</strong> - na účely odpovede na vašu požiadavku</li>
                  <li><strong>Telefónne číslo</strong> - na účely telefonickej komunikácie</li>
                  <li><strong>Typ služby</strong> - informácia o záujme o našu službu</li>
                  <li><strong>Správa</strong> - obsah vašej požiadavky</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                  IP adresa
                </h2>
                <p className="text-gray-600 mb-4">
                  Z bezpečnostných dôvodov a na ochranu pred spamom zaznamenávame IP adresu pri odosielaní kontaktného formulára.
                </p>
                <p className="text-gray-600 mb-4">
                  IP adresy sú ukladané dočasne v pamäti servera maximálne na 60 minút a používajú sa výlučne na:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Ochranu pred spamom a automatizovanými útokmi</li>
                  <li>Zabezpečenie bezpečnosti webovej stránky</li>
                  <li>Ochranu pred zneužitím kontaktného formulára</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  <strong>IP adresy sa nepoužívajú na marketingové účely</strong> a nie sú poskytované tretím stranám.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                  Právny základ spracovania
                </h2>
                <p className="text-gray-600">
                  Spracovanie osobných údajov je založené na <strong>legitímnom záujme</strong> (článok 6 ods. 1 písm. f) GDPR) 
                  na účely odpovede na vašu požiadavku a zabezpečenia bezpečnosti našich služieb.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                  Doba uchovávania údajov
                </h2>
                <p className="text-gray-600 mb-4">
                  Osobné údaje z kontaktného formulára uchovávame po dobu potrebnú na vyriešenie vašej požiadavky, 
                  maximálne však 3 roky od posledného kontaktu.
                </p>
                <p className="text-gray-600">
                  IP adresy sú uchovávané dočasne v pamäti servera maximálne 60 minút a následne sa automaticky vymažú.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                  Vaše práva
                </h2>
                <p className="text-gray-600 mb-4">
                  V súlade s GDPR máte právo:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Na prístup k vašim osobným údajom</li>
                  <li>Na opravu nepresných údajov</li>
                  <li>Na vymazanie osobných údajov</li>
                  <li>Na obmedzenie spracovania</li>
                  <li>Na prenos údajov</li>
                  <li>Na namietku proti spracovaniu</li>
                  <li>Na podanie sťažnosti u Úradu na ochranu osobných údajov SR</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                  Kontakt
                </h2>
                <p className="text-gray-600 mb-4">
                  Pre uplatnenie vašich práv alebo akékoľvek otázky týkajúce sa spracovania osobných údajov nás kontaktujte:
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> info@vndconstruction.sk<br />
                  <strong>Telefón:</strong> +421 900 000 000
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                  Zmeny zásad ochrany súkromia
                </h2>
                <p className="text-gray-600">
                  Vyhradzujeme si právo kedykoľvek zmeniť tieto zásady ochrany súkromia. 
                  Aktuálna verzia je vždy dostupná na tejto stránke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
