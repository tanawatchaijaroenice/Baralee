"use client"
import Banner from "@/components/landing/Banner";
import Footer from "@/components/landing/Footer";
import { Gallery } from "@/components/landing/Gallery";
import HeroSection from "@/components/landing/HeroSection";
import JourneySection from "@/components/landing/JourneySection";
import Navbar from "@/components/landing/Navbar";
import ServicesSection from "@/components/landing/ServicesSection";
import { useLenis } from "@/lib/useLenis";
import { useEffect } from "react";
import useStore from '@/lib/store'

export default function Home() {
  useLenis();

  const setIsDesktop = useStore((state) => state.setIsDesktop)

  useEffect(() => {
    const autoResize = () => {
      if (typeof window !== 'undefined') {
        const windowWidth = window.innerWidth
        setIsDesktop(windowWidth >= 1024)
      }
    }

    window.addEventListener('resize', autoResize)
    autoResize() // ตรวจสอบขนาดหน้าจอทันทีเมื่อโหลด

    return () => window.removeEventListener('resize', autoResize)
  }, [setIsDesktop])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Banner />
      <HeroSection />
      <JourneySection />
      <Gallery />
      <ServicesSection />
      <Footer />
    </main>
  );
}
