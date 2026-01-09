import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imóvel Comercial em Tubarão/SC - R$ 1.500.000",
  description:
    "Oportunidade única! Terreno comercial em avenida principal de Tubarão/SC. Ponto comercial consolidado com loja na frente e casa nos fundos. 300-500m² de terreno.",
  keywords: [
    "imóvel comercial",
    "terreno",
    "Tubarão",
    "Santa Catarina",
    "investimento",
    "loja",
    "ponto comercial",
  ],
  openGraph: {
    title: "Imóvel Comercial em Tubarão/SC - R$ 1.500.000",
    description:
      "Terreno comercial em avenida principal. Ponto consolidado com loja e casa.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/fachada-principal.jpg",
        width: 1200,
        height: 630,
        alt: "Imóvel Comercial em Tubarão/SC",
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
