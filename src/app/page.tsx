import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustryShowcase from "@/components/IndustryShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturedWork from "@/components/FeaturedWork";
import WhyBuzzler from "@/components/WhyBuzzler";
import InteractiveStrategyTool from "@/components/InteractiveStrategyTool";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#141413]">
      <Navbar />
      <Hero />
      <IndustryShowcase />
      <ServicesGrid />
      <FeaturedWork />
      <WhyBuzzler />
      <InteractiveStrategyTool />
      <TestimonialsSection />
      <BlogPreview />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
