import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EventsSection from '@/components/sections/EventsSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Dev Skill ভাই ব্রাদার্স - .NET Developer Community',
  description: 'A vibrant .NET developer community built on brotherhood and shared growth. Join hands with fellow developers who are passionate about learning and growing together.',
  keywords: 'ASP.NET, C#, .NET, developer community, coding, programming, tech events, Bangladesh tech',
  openGraph: {
    title: 'Dev Skill ভাই ব্রাদার্স - .NET Developer Community',
    description: 'A vibrant .NET developer community built on brotherhood and shared growth.',
    images: ['/images/og-image.png'],
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Decorative gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--dotnet-purple)] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[var(--csharp-green)] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[var(--aspnet-blue)] opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
      
      {/* Footer pattern */}
      <div className="relative z-0 bg-gradient-to-r from-[var(--dotnet-purple)] via-[var(--aspnet-blue)] to-[var(--csharp-green)] h-2 w-full"></div>
    </main>
  );
}
