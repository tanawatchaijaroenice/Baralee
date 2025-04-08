"use client"
import Banner from "@/components/landing/Banner";
import Footer from "@/components/landing/Footer";
import { Gallery } from "@/components/landing/Gallery";
import HeroSection from "@/components/landing/HeroSection";
import JourneySection from "@/components/landing/JourneySection";
import Navbar from "@/components/landing/Navbar";
import ServicesSection from "@/components/landing/ServicesSection";
import { useLenis } from "@/lib/useLenis";

export default function Home() {
  useLenis();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Banner />
      <HeroSection />
      <JourneySection />
      <Gallery />
      <div className=" w-full h-26 bg-[url(/images/gallery-4.png)] bg-no-repeat bg-cover bg-center opacity-50"> </div>
      <ServicesSection />
      <Footer />
    </main>
  );
}
