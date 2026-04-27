"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const serviceTypes = [
  "Rekonštrukcia interiérov",
  "Stavba rodinných domov",
  "Prestavby a stavebné úpravy",
  "Fasádne práce",
  "Výstavba bytových jednotiek",
  "Rekonštrukcia komerčných priestorov",
  "Iné",
]

export default function ContactForm() {
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
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Kontaktujte nás
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Vyplňte formulár a my sa vám ozveme do 24 hodín s cenovou ponukou.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
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
              {isSubmitting ? "Odosielanie..." : "Odoslať požiadavku"}
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
    </section>
  )
}
