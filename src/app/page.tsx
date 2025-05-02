import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import GallerySection from "@/components/sections/GallerySection";
import EventsSection from "@/components/sections/EventsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
