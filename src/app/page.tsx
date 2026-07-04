import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyUs from "@/components/home/WhyUs";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectsTeaser from "@/components/home/ProjectsTeaser";

export const metadata: Metadata = {
  title: "Billiekia Concept | Bureau d'Études & Ingénierie au Tchad",
  description:
    "Billiekia Concept est un cabinet de bureau d'études basé à N'Djamena, au Tchad, spécialisé en ingénierie des infrastructures, agriculture, environnement, aménagement territorial, hydraulique et assainissement. Études techniques, conception APS/APD, supervision travaux, EIES. Quality · Performance · Excellency.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <WhyUs />
      <ProcessSection />
      <ProjectsTeaser />
    </>
  );
}
