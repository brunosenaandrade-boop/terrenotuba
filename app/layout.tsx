import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terreno Comercial em Tubarão/SC - R$ 1.550.000 | Vila Moema 490m²",
  description:
    "Oportunidade única! Terreno 490m² na Vila Moema em Tubarão/SC. Rua Profª Eugênia dos Reis Perito, 36. Ponto comercial com loja e casa. 14m x 35m.",
  keywords: [
    "imóvel comercial",
    "terreno",
    "Tubarão",
    "Santa Catarina",
    "Vila Moema",
    "investimento",
    "loja",
    "ponto comercial",
  ],
  openGraph: {
    title: "Terreno 490m² Vila Moema - Tubarão/SC - R$ 1.550.000",
    description:
      "Terreno comercial 490m² (14x35m) na Rua Profª Eugênia dos Reis Perito, 36. Loja e casa.",
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
