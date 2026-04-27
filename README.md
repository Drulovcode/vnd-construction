# VND Construction s. r. o. - Stavebná spoločnosť

Moderný komerčný web pre stavebnú spoločnosť VND Construction s. r. o. v Bratislave.

## Technológie

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **shadcn/ui**

## Štruktúra projektu

```
├── app/                    # Next.js App Router stránky
│   ├── page.tsx           # Hlavná stránka (Úvod)
│   ├── o-nas/             # O nás
│   ├── sluzby/            # Služby (6 stránok)
│   ├── nasa-praca/        # Portfolio
│   ├── fotogaleria/       # Fotogaléria
│   ├── referencie/        # Referencie
│   └── kontakt/            # Kontakt
├── components/             # React komponenty
│   ├── ui/                # shadcn/ui komponenty
│   ├── Header.tsx         # Hlavička
│   ├── Footer.tsx         # Pätička
│   └── ...                # Ďalšie komponenty
└── lib/                   # Utility funkcie
```

## Inštalácia

```bash
npm install
```

## Spustenie vývojového servera

```bash
npm run dev
```

Otvorte [http://localhost:3000](http://localhost:3000) v prehliadači.

## Build pre produkciu

```bash
npm run build
npm start
```

## Funkcie

- ✅ Responzívny dizajn (mobile-first)
- ✅ SEO optimalizácia (meta tagy, OpenGraph, schema.org)
- ✅ Moderný UI s TailwindCSS a shadcn/ui
- ✅ Všetky texty v slovenčine
- ✅ Kontaktný formulár
- ✅ Fotogaléria s lightbox
- ✅ Portfolio projektov
- ✅ Referencie klientov

## Poznámky

- Obrázky v projekte sú placeholder. V produkcii nahraďte skutočnými obrázkami.
- Kontaktný formulár momentálne len loguje dáta do konzoly. Pre produkciu je potrebné pripojiť backend API.
- Mapa na stránke Kontakt je placeholder. Pre produkciu použite Google Maps alebo inú mapovú službu.
