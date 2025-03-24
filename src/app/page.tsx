import Banner from "@/components/landing/Banner";
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
    </main>
  );
}
