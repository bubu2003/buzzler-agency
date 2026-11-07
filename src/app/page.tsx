import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReelsShowcase from "@/components/ReelsShowcase";
import IndustryShowcase from "@/components/IndustryShowcase";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturedWork from "@/components/FeaturedWork";
import WhyBuzzler from "@/components/WhyBuzzler";
import InteractiveStrategyTool from "@/components/InteractiveStrategyTool";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreview from "@/components/BlogPreview";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Creative Agency in Odisha | Buzzler",
  description:
    "Buzzler is a creative and digital marketing agency in Odisha offering video production, branding, social media marketing, influencer collaborations, and Meta & Google Ads.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Creative Agency in Odisha | Buzzler",
    description:
      "Creative campaigns, video production, branding and performance marketing for businesses across Puri, Bhubaneswar and Odisha.",
    url: "https://www.buzzler.co.in/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#141413]">
      <Navbar />
      <Hero />
      <ReelsShowcase />
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
