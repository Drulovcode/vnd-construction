"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const serviceTypes = [
  "Rekonštrukcia interiérov",
  "Stavba rodinných domov",
  "Prestavby a stavebné úpravy",
  "Fasádne práce",
  "Výstavba bytových jednotiek",
  "Rekonštrukcia komerčných priestorov",
  "Iné",
]

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    company: "", // Honeypot field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.serviceType,
          message: formData.message,
          company: formData.company, // Honeypot
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setErrorMessage("")
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
          company: "",
        })
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.error || "Chyba pri odosielaní správy. Skúste to prosím znova.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Kontakt
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Kontaktujte nás ešte dnes a získajte bezplatnú konzultáciu a cenovú ponuku pre váš projekt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                Kontaktné informácie
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Adresa</h3>
                        <p className="text-gray-600">Bratislava, Slovensko</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Telefón</h3>
                        <a href="tel:+421900000000" className="text-gray-600 hover:text-primary transition-colors">
                          +421 900 000 000
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a href="mailto:info@vndconstruction.sk" className="text-gray-600 hover:text-primary transition-colors">
                          info@vndconstruction.sk
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Pracovné hodiny</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Pondelok - Piatok: 8:00 - 17:00</p>
                          <p>Sobota: 9:00 - 13:00</p>
                          <p>Nedeľa: Zatvorené</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                Odoslať správu
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Meno a priezvisko *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefón *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="serviceType">Typ služby *</Label>
                  <select
                    id="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    required
                    className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>
                      Vyberte typ služby
                    </option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Správa *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2"
                    rows={5}
                  />
                </div>
                {/* Honeypot field - hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <Label htmlFor="company">Spoločnosť</Label>
                  <Input
                    id="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Odosielanie..." : "Odoslať správu"}
                </Button>
                {submitStatus === "success" && (
                  <p className="text-sm text-green-600 mt-2 text-center">
                    Ďakujeme za vašu správu! Ozveme sa vám čoskoro.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-600 mt-2 text-center">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative h-96 w-full rounded-lg bg-gray-200 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Mapa bude tu zobrazená
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
