import Hero from "@/components/Hero";
import VideoTour from "@/components/VideoTour";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollTracker from "@/components/ScrollTracker";

export default function Home() {
  return (
    <main>
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
