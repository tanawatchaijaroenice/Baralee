import Banner from "@/components/landing/Banner";
import { Gallery } from "@/components/landing/Gallery";
import HeroSection from "@/components/landing/HeroSection";
import JourneySection from "@/components/landing/JourneySection";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Banner />
      <HeroSection />
      <JourneySection />
      <Gallery />
    </main>
  );
}
