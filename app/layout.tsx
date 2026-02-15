import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// TODO: Substitua pelos seus IDs reais
const META_PIXEL_ID = "SEU_PIXEL_ID";
const GA4_MEASUREMENT_ID = "SEU_GA4_ID";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terreno Comercial em Tubarão/SC - R$ 1.600.000 | Vila Moema 490m²",
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
    title: "Terreno 490m² Vila Moema - Tubarão/SC - R$ 1.600.000",
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
      <head>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_MEASUREMENT_ID}');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
