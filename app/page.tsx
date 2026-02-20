import Hero from "@/components/Hero";
import VideoTour from "@/components/VideoTour";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollTracker from "@/components/ScrollTracker";
import FAQ from "@/components/FAQ";

const faqItems = [
  {
    question: "Qual o tamanho do terreno?",
    answer:
      "O terreno possui 490m² de área total, com 14 metros de testada (frente) e 35 metros de profundidade.",
  },
  {
    question: "Onde fica o terreno?",
    answer:
      "Na Rua Profª Eugênia dos Reis Perito, 36 — bairro Vila Moema, Tubarão/SC. A apenas 900 metros do Farol Shopping e próximo à Av. Marcolino Martins Cabral.",
  },
  {
    question: "Pode construir prédio ou edifício comercial?",
    answer:
      "Sim. O terreno está em zona comercial, o que permite a construção de lojas, clínicas, escritórios, edifício misto ou galpão comercial.",
  },
  {
    question: "Qual o valor do terreno e o preço por m²?",
    answer:
      "O valor é R$ 1.600.000,00, o que equivale a R$ 3.265 por metro quadrado — abaixo da média da região para terrenos em zona comercial premium.",
  },
  {
    question: "O terreno gera renda atualmente?",
    answer:
      "Sim. Existe uma estrutura comercial já em funcionamento no local, gerando renda imediata enquanto o comprador planeja o desenvolvimento do terreno.",
  },
  {
    question: "Como posso agendar uma visita?",
    answer:
      "Você pode entrar em contato pelo WhatsApp (48) 3192-0163. Respondemos em minutos.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Terreno Comercial 490m² - Vila Moema, Tubarão/SC",
  description:
    "Terreno comercial de 490m² com 14m de testada em zona comercial premium. A 900m do Farol Shopping, próximo à Av. Marcolino Martins Cabral.",
  url: "https://www.terrenotubarao.com.br",
  image: "https://www.terrenotubarao.com.br/images/fachada-principal.jpg",
  category: "Terreno à venda",
  offers: {
    "@type": "Offer",
    price: 1600000,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Tipo", value: "Terreno comercial" },
    { "@type": "PropertyValue", name: "Área total", value: "490m²" },
    { "@type": "PropertyValue", name: "Testada", value: "14m" },
    { "@type": "PropertyValue", name: "Profundidade", value: "35m" },
    { "@type": "PropertyValue", name: "Preço por m²", value: "R$ 3.265" },
    { "@type": "PropertyValue", name: "Zoneamento", value: "Zona comercial" },
  ],
  location: {
    "@type": "Place",
    name: "Vila Moema, Tubarão/SC",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Profª Eugênia dos Reis Perito, 36",
      addressLocality: "Tubarão",
      addressRegion: "SC",
      postalCode: "88705-370",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -28.4718138,
      longitude: -49.0148571,
    },
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://www.terrenotubarao.com.br",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Hero />
      <VideoTour />
      <Gallery />
      <Features />
      <Location />
      <FAQ items={faqItems} />
      <Footer />
      <WhatsAppFloat />
      <ScrollTracker />
    </main>
  );
}
