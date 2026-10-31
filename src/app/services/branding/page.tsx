import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailView, { ServiceDetailProps } from "@/components/ServiceDetailView";
import { Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand Identity & Design Agency in Puri, Odisha | Buzzler Agency",
  description:
    "Comprehensive brand identity, logo systems, cafe menu design, gym member kits, college prospectuses, and customer collateral in Puri and Odisha.",
  keywords: [
    "branding agency Puri",
    "logo design Puri",
    "graphic design agency Odisha",
    "menu design Puri",
    "brand identity Odisha",
  ],
};

const brandingServiceData: ServiceDetailProps = {
  slug: "/services/branding",
  badge: "Branding & Identity",
  h1Title: "Brand Identity, Menu Design & Collateral in Puri & Odisha",
  subtitle:
    "Elevate your brand perception, command premium prices, and build enduring local loyalty with cohesive physical and digital design.",
  heroBlurb:
    "A great brand isn't just a logo—it's the complete customer experience. From your entrance signage and product packaging to printed cafe menus, gym member welcome kits, college prospectus suites, and digital assets, Buzzler crafts cohesive, elevated visual systems that separate your business from cheap competitors.",
  iconType: "branding",
  targetAudience: [
    {
      tag: "Food & Dining",
      title: "Cafes, Bakeries & Restrobars",
      description:
        "Bespoke brand marks, artisanal print & digital QR dining menus, cup packaging, coasters, and Instagrammable photo corners.",
    },
    {
      tag: "Health & Fitness",
      title: "Gyms, CrossFit & Athletic Clubs",
      description:
        "Bold athletic monograms, motivational wall environmental typography, member onboarding welcome folders, and branded gym merch.",
    },
    {
      tag: "Colleges & Schools",
      title: "Academic Campuses & Institutes",
      description:
        "Prestigious institutional crests, annual admissions prospectuses, student ID suites, directional campus signage, and certificates.",
    },
    {
      tag: "Hospitality & Stays",
      title: "Hotels, Resorts & Heritage Stays",
      description:
        "Luxury keycard sleeves, in-room guest directories, dining menus, and architectural facade signage that command higher room rates.",
    },
  ],
  theProblem: {
    painPoint: "Mismatched, generic branding drags down your perceived business value.",
    explanation:
      "When a customer visits your venue only to find generic clip-art logos, photocopied menus, or inconsistent fonts, their perception drops instantly. They compare you to low-cost alternatives and resist paying premium rates.",
    buzzlerSolution:
      "We design an elegant, consistent aesthetic across every customer touchpoint—combining modern typography with subtle coastal and Odishan design motifs that look world-class in print and on screen.",
  },
  deliverables: [
    {
      category: "Brand Strategy & Visual Identity Suite",
      items: [
        "Primary logo, sub-mark, responsive monogram & favicon system",
        "Curated brand color palette (HEX, RGB, CMYK for commercial print)",
        "Typography hierarchy and pairing guidelines (English + regional scripts)",
        "Brand tone-of-voice and local market storytelling guide",
        "Exported vector file archive (AI, SVG, PDF, PNG, EPS)",
      ],
    },
    {
      category: "Physical Collateral & Customer Touchpoints",
      items: [
        "Cafe & restaurant dining menus (print & digital QR code mobile view)",
        "Gym & fitness member onboarding folders and loyalty cards",
        "School & college admission prospectuses, brochures, and letterheads",
        "Hotel keycard sleeves, guest directories, and room service menus",
        "Entrance facade signage, architectural directional boards, and uniform badges",
      ],
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Brand Discovery & Architecture",
      duration: "Days 1–5",
      description:
        "We research your business history, customer demographic, target price points, and competitive landscape in Puri and Bhubaneswar.",
      output: "Brand Strategy Document & Creative Moodboard",
    },
    {
      step: "02",
      title: "Logo & Visual Direction Concepts",
      duration: "Days 6–12",
      description:
        "We present 3 distinct visual directions with logo marks, typography pairings, color systems, and mockups in real customer environments.",
      output: "3 Presentation Decks with Real-World Mockups",
    },
    {
      step: "03",
      title: "Refinement & Collateral Production",
      duration: "Days 13–20",
      description:
        "Once the core identity is chosen, we design the full suite of customer collateral, menus, prospectuses, or in-room assets.",
      output: "Print-Ready Vector Files & Digital Asset Templates",
    },
    {
      step: "04",
      title: "Brand Book & Vendor Handover",
      duration: "Days 21–25",
      description:
        "We deliver your comprehensive Brand Guidelines Book and coordinate with local commercial printers to ensure flawless print output.",
      output: "Comprehensive Brand Guidelines & Production Files",
    },
  ],
  calculatorOptions: {
    label: "Explore Brand Design Tiers",
    options: [
      {
        id: "collateral-refresh",
        title: "Collateral & Menu Refresh",
        metric: "Print & QR Menus / Flyers",
        detail:
          "For established businesses with an existing logo that need sleek, modern printed menus, brochures, or promotional collateral.",
      },
      {
        id: "core-identity",
        title: "Full Business Identity Suite",
        metric: "Logo + Colors + Full Collateral",
        detail:
          "Complete ground-up brand system including logo mark, typography, color palette, packaging/menus, stationery, and social templates.",
      },
      {
        id: "luxury-repositioning",
        title: "Comprehensive Brand Architecture",
        metric: "Full Visual & Physical Identity",
        detail:
          "Includes full visual identity, print collateral, website design tokens, Canva staff templates, and architectural signage direction.",
      },
    ],
  },
  faqs: [
    {
      question: "Do you supply the physical printed materials or just the designs?",
      answer:
        "We provide high-resolution, print-ready vector PDF files with precise bleed and color specifications (CMYK). We also coordinate directly with vetted commercial printers in Puri and Bhubaneswar for paper stock and finishing (matte lamination, gold foil, textured cardstock).",
    },
    {
      question: "Can our staff easily update menus, prices, or schedules?",
      answer:
        "Yes! We provide editable Canva and Figma templates so your staff can quickly update menu items, gym batch timings, or event schedules without needing a graphic designer.",
    },
    {
      question: "Can you incorporate traditional Odishan artistic elements?",
      answer:
        "Absolutely. We frequently incorporate subtle, tasteful Odia cultural elements—such as coastal wave geometry, temple stone motifs, or classical script accents—in a refined, contemporary luxury aesthetic.",
    },
    {
      question: "Who owns the copyright to the final logo and designs?",
      answer:
        "You do. Upon project completion and final payment, 100% intellectual property rights and raw source files are transferred to your business.",
    },
    {
      question: "How long does a full branding project take?",
      answer:
        "A typical brand identity and collateral suite takes approximately 3 to 4 weeks from discovery to final print-ready handover.",
    },
  ],
  relatedServices: [
    {
      title: "Social Media Video",
      slug: "/services/video",
      blurb: "Bring your new brand identity to life with 4K reels on Instagram and YouTube Shorts.",
    },
    {
      title: "Meta & Google Ads",
      slug: "/services/ads",
      blurb: "Promote your newly branded business to high-value customers across Odisha and neighboring states.",
    },
    {
      title: "Influencer Marketing",
      slug: "/services/influencer-marketing",
      blurb: "Invite verified creators to showcase your newly elevated venue and branded products.",
    },
  ],
};

export default function BrandingServicePage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141413] flex flex-col justify-between">
      <Navbar />
      <ServiceDetailView service={brandingServiceData} />
      <Footer />
    </main>
  );
}
