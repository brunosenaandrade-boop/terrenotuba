import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TrackingScripts from "@/components/TrackingScripts";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.terrenotubarao.com.br"),
  title: "Terreno Comercial 490m² em Tubarão/SC | 14m Testada - Vila Moema",
  description:
    "Terreno comercial 490m² (14m x 35m) na Vila Moema, Tubarão/SC. A 900m do Farol Shopping. R$ 3.265/m². Ideal para construtoras e investidores.",
  keywords: [
    "terreno comercial Tubarão",
    "terreno Vila Moema",
    "investimento imobiliário Tubarão",
    "terreno 490m²",
    "construtora Tubarão SC",
    "incorporação imobiliária",
    "terreno 14m testada",
    "zona comercial Tubarão",
  ],
  openGraph: {
    title: "Terreno Comercial 490m² | 14m Testada - Vila Moema, Tubarão/SC",
    description:
      "490m² em zona comercial premium. 14m de testada, a 900m do Farol Shopping, próximo à Av. Marcolino. R$ 3.265/m².",
    type: "website",
    locale: "pt_BR",
    url: "https://www.terrenotubarao.com.br",
    siteName: "Terreno Comercial Tubarão",
    images: [
      {
        url: "/images/fachada-principal.jpg",
        width: 1200,
        height: 630,
        alt: "Terreno comercial 490m² em Tubarão/SC - Vila Moema",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <TrackingScripts />
        <CookieConsent />
      </body>
    </html>
  );
}
