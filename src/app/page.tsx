"use client";

import { Background3D } from "@/components/marketer/Background3D";
import { Navbar } from "@/components/marketer/Navbar";
import { Hero } from "@/components/marketer/Hero";
import { IndustriesMarquee } from "@/components/marketer/IndustriesMarquee";
import { StoryScroll } from "@/components/marketer/StoryScroll";
import { Pillars } from "@/components/marketer/Pillars";
import { NumbersShowcase } from "@/components/marketer/NumbersShowcase";
import { Portfolio } from "@/components/marketer/Portfolio";
import { CaseStudies } from "@/components/marketer/CaseStudies";
import { CVSection } from "@/components/marketer/CVSection";
import { BookMeeting } from "@/components/marketer/BookMeeting";
import { Footer } from "@/components/marketer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Background3D />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <IndustriesMarquee />
        <StoryScroll />
        <Pillars />
        <NumbersShowcase />
        <Portfolio />
        <CaseStudies />
        <CVSection />
        <BookMeeting />
      </main>

      <Footer />
    </div>
  );
}
