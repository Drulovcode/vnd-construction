import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt | VND Construction",
  description: "Kontaktujte VND Construction s. r. o. v Bratislave. Telefón, email, adresa. Získajte bezplatnú konzultáciu a cenovú ponuku pre váš projekt.",
  openGraph: {
    title: "Kontakt | VND Construction",
    description: "Kontaktujte VND Construction s. r. o. v Bratislave. Telefón, email, adresa. Získajte bezplatnú konzultáciu.",
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
