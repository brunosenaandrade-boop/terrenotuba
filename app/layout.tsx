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
