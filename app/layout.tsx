import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VND Construction s. r. o. | Profesionálne stavebné služby v Bratislave",
  description: "VND Construction s. r. o. poskytuje kvalitné stavebné služby v Bratislave a okolí. Rekonštrukcie, stavby rodinných domov, prestavby a fasádne práce. Získajte bezplatnú cenovú ponuku.",
  keywords: "stavebné služby Bratislava, rekonštrukcia, stavba domov, prestavby, fasádne práce, VND Construction",
  authors: [{ name: "VND Construction s. r. o." }],
  openGraph: {
    title: "VND Construction s. r. o. | Profesionálne stavebné služby v Bratislave",
    description: "Kvalitné stavebné služby v Bratislave a okolí. Rekonštrukcie, stavby rodinných domov, prestavby a fasádne práce.",
    type: "website",
    locale: "sk_SK",
    siteName: "VND Construction",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vndconstruction.sk",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VND Construction s. r. o.",
              "@id": "https://vndconstruction.sk",
              "url": "https://vndconstruction.sk",
              "telephone": "+421900000000",
              "email": "info@vndconstruction.sk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bratislava",
                "addressLocality": "Bratislava",
                "addressCountry": "SK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.1486,
                "longitude": 17.1077
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "Bratislava"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
