import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fotogaléria | VND Construction",
  description: "Pozrite si fotografie z našich projektov v Bratislave. Rekonštrukcie, stavby domov, prestavby a ďalšie. Kvalitná práca, spokojní klienti.",
  openGraph: {
    title: "Fotogaléria | VND Construction",
    description: "Pozrite si fotografie z našich projektov v Bratislave. Rekonštrukcie, stavby domov, prestavby a ďalšie.",
  },
}

export default function FotogaleriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
