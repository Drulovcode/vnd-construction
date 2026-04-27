import Hero from "@/components/Hero"
import Features from "@/components/Features"
import ServicesPreview from "@/components/ServicesPreview"
import Testimonials from "@/components/Testimonials"
import ContactForm from "@/components/ContactForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VND Construction s. r. o. | Profesionálne stavebné služby v Bratislave",
  description: "Kvalitné stavebné služby v Bratislave a okolí. Rekonštrukcie, stavby rodinných domov, prestavby a fasádne práce. Získajte bezplatnú cenovú ponuku.",
  openGraph: {
    title: "VND Construction s. r. o. | Profesionálne stavebné služby v Bratislave",
    description: "Kvalitné stavebné služby v Bratislave a okolí. Rekonštrukcie, stavby rodinných domov, prestavby a fasádne práce.",
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesPreview />
      <Testimonials />
      <ContactForm />
    </>
  )
}
