"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

function handleLogoClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  pathname: string
) {
  if (pathname === "/") {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Úvod", href: "/" },
    { name: "O nás", href: "/o-nas" },
    { name: "Služby", href: "/sluzby" },
    { name: "Fotogaléria", href: "/fotogaleria" },
    { name: "Referencie", href: "/referencie" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Hlavná navigácia">
        <Link
          href="/"
          className="flex lg:flex-1 items-center gap-4 group lg:mr-10"
          onClick={(e) => handleLogoClick(e, pathname)}
        >
          <span className="hidden lg:block text-lg whitespace-nowrap">
            <span className="tracking-wider font-semibold text-primary">VND Construction</span>
            <span className="ml-1.5 text-xs font-normal text-muted-foreground/80 whitespace-nowrap">s.&nbsp;r.&nbsp;o.</span>
          </span>
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Otvoriť menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-accent transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-200"></span>
            </Link>
          ))}
        </div>
        <div className="hidden xl:flex xl:flex-1 xl:justify-end">
          <Button asChild>
            <Link href="/kontakt">Získať cenovú ponuku</Link>
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-6 pb-6 pt-2">
            <div className="mb-4 pb-4 border-b border-border">
              <Link
                href="/"
                className="flex items-center"
                onClick={(e) => {
                  handleLogoClick(e, pathname)
                  setMobileMenuOpen(false)
                }}
              >
                <span className="text-base whitespace-nowrap">
                  <span className="tracking-wider font-semibold text-primary">VND Construction</span>
                  <span className="ml-1.5 text-xs font-normal text-muted-foreground/80 whitespace-nowrap">s.&nbsp;r.&nbsp;o.</span>
                </span>
              </Link>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link href="/kontakt">Získať cenovú ponuku</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
