import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailView, { ServiceDetailProps } from "@/components/ServiceDetailView";
import { Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospitality Branding & Identity in Puri, Odisha | Buzzler Agency",
  description:
    "Comprehensive hotel visual identity, logo design, in-room guest collateral, digital QR dining menus, and brand guidelines for Puri properties.",
  keywords: [
    "hotel branding Puri",
    "hospitality branding agency Odisha",
    "resort visual identity design",
    "hotel guest directory design Puri",
    "hotel logo design Odisha"
  ],
};

const brandingServiceData: ServiceDetailProps = {
  slug: "/services/branding",
  badge: "Branding & Identity",
  h1Title: "Hospitality Brand Identity & Guest Collateral for Puri Hotels",
  subtitle: "Elevate your property's perception, command higher nightly room rates, and build lasting guest loyalty with cohesive physical and digital design.",
  heroBlurb:
    "A great hotel isn't just a place to sleep—it's a feeling. From your logo and entrance signage to keycard holders, in-room stationery, and digital QR menus, Buzzler crafts cohesive, premium visual identities that justify higher RevPAR and transform first-time guests into lifelong brand advocates.",
  iconType: "branding",
  targetAudience: [
    {
      tag: "Rate Command",
      title: "Hotels Upgrading Nightly Rates",
      description:
        "Properties undergoing renovation or transitioning from budget to boutique that need premium visual branding to justify ₹6,000+ nightly rates.",
    },
    {
      tag: "Heritage Charm",
      title: "Puri Heritage & Temple Havelis",
      description:
        "Bespoke identities that celebrate centuries-old temple motifs, Pattachitra artistry, and sacred traditions without looking outdated.",
    },
    {
      tag: "New Openings",
      title: "New Hotel & Resort Launches",
      description:
        "Complete ground-up brand strategy, naming consultation, signage design, and launch marketing collateral before grand opening.",
    },
  ],
  theProblem: {
    painPoint: "Mismatched, generic branding drags down your property's perceived value.",
    explanation:
      "When a guest arrives at a ₹5,000/night resort only to find generic clip-art logos, photocopied room service menus, and inconsistent fonts, their perception drops instantly. They compare you to budget lodges and resist paying for dining or premium amenities.",
    buzzlerSolution:
      "We design an elegant, consistent aesthetic across every guest touchpoint—combining modern typography with subtle coastal and Odishan design motifs that look world-class in print and on screen.",
  },
  deliverables: [
    {
      category: "Brand Strategy & Visual Identity Suite",
      items: [
        "Primary logo, sub-mark, responsive monogram & favicon",
        "Curated brand color palette (HEX, RGB, CMYK for print)",
        "Typography hierarchy and pairing guidelines (English + regional scripts)",
        "Brand tone-of-voice and hospitality storytelling guide",
        "Exported vector file archive (AI, SVG, PDF, PNG, EPS)",
      ],
    },
    {
      category: "In-Room & Physical Guest Collateral",
      items: [
        "Keycard sleeves, welcome letterheads, and envelope suites",
        "In-room guest directory, Wi-Fi tent cards, and door hanger signs",
        "Restaurant, cafe, and pool bar menu design (print & digital QR code)",
        "Spa service menu and wellness treatment brochures",
        "Entrance facade signage, directional lobby boards, and uniform badges",
      ],
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Brand Discovery & Architecture",
      duration: "Days 1–5",
      description:
        "We research your property's history, architecture, guest demographic, and competitive landscape in Puri.",
      output: "Brand Strategy Document & Creative Moodboard",
    },
    {
      step: "02",
      title: "Logo & Visual Direction Concepts",
      duration: "Days 6–12",
      description:
        "We present 3 distinct visual directions with logo marks, typography pairings, color systems, and mockups in real hotel environments.",
      output: "3 Presentation Decks with Real-World Mockups",
    },
    {
      step: "03",
      title: "Refinement & Collateral Production",
      duration: "Days 13–20",
      description:
        "Once the core identity is chosen, we design the full suite of in-room collateral, dining menus, and digital assets.",
      output: "Print-Ready Vector Files & Menu Templates",
    },
    {
      step: "04",
      title: "Brand Book & Vendor Handover",
      duration: "Days 21–25",
      description:
        "We deliver your comprehensive Brand Guidelines Book and coordinate with local Puri printers to ensure flawless print output.",
      output: "Comprehensive Brand Guidelines & Production Files",
    },
  ],
  calculatorOptions: {
    label: "Explore Hospitality Branding Tiers",
    options: [
      {
        id: "collateral-refresh",
        title: "Guest Collateral & Menu Refresh",
        metric: "Print & QR Menus + Tent Cards",
        detail: "For established hotels with an existing logo that need sleek, modern in-room directories, QR menus, and door hangers.",
      },
      {
        id: "core-identity",
        title: "Full Hotel Identity Suite",
        metric: "Logo + Colors + Full Collateral",
        detail: "Complete ground-up brand system including logo mark, typography, color palette, keycards, stationery, and signage.",
      },
      {
        id: "luxury-repositioning",
        title: "Comprehensive Resort Rebrand",
        metric: "Complete Visual & Digital Architecture",
        detail: "Includes full visual identity, print collateral, website design tokens, Canva staff templates, and architectural signage direction.",
      },
    ],
  },
  faqs: [
    {
      question: "Do you supply the physical printed materials or just the designs?",
      answer:
        "We provide high-resolution, print-ready vector PDF files with precise bleed and color specifications (CMYK). We also coordinate directly with vetted commercial printers in Puri and Bhubaneswar for paper stock and finishing (matte lamination, gold foil, linen texture).",
    },
    {
      question: "Can our hotel staff easily update dining menus and prices?",
      answer:
        "Yes! We provide editable Canva and Figma templates so your food & beverage manager can quickly update room service menu items and prices without needing a graphic designer.",
    },
    {
      question: "Can you incorporate traditional Odishan artistic elements?",
      answer:
        "Absolutely. We frequently incorporate subtle, tasteful Odia cultural elements—such as coastal wave geometry, temple stone carvings, or classical script accents—in a refined, contemporary luxury aesthetic.",
    },
    {
      question: "Who owns the copyright to the final logo and designs?",
      answer:
        "You do. Upon project completion and final payment, 100% intellectual property rights and raw source files are transferred to your business.",
    },
    {
      question: "How long does a full hotel branding project take?",
      answer:
        "A typical brand identity and collateral suite takes approximately 3 to 4 weeks from discovery to final print-ready handover.",
    },
  ],
  relatedServices: [
    {
      title: "Social Media Video",
      slug: "/services/video",
      blurb: "Bring your new brand identity to life on Instagram and YouTube Shorts.",
    },
    {
      title: "Meta & Google Ads",
      slug: "/services/ads",
      blurb: "Promote your newly branded hotel rooms to high-value travelers in Bengal and Odisha.",
    },
    {
      title: "Influencer Marketing",
      slug: "/services/influencer-marketing",
      blurb: "Invite travel creators to review and showcase your elevated hospitality experience.",
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
