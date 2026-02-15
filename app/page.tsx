import Hero from "@/components/Hero";
import VideoTour from "@/components/VideoTour";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollTracker from "@/components/ScrollTracker";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
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
  "schema:location": {
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

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <VideoTour />
      <Gallery />
      <Features />
      <Location />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
      <ScrollTracker />
    </main>
  );
}
