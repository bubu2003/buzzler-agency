import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyDetailView, { CaseStudyProps } from "@/components/CaseStudyDetailView";

export const metadata: Metadata = {
  title: "Bay Breeze Grand Resort & Spa Case Study | Buzzler Agency Puri",
  description:
    "How Buzzler designed a 4K drone video series and Meta booking funnel for a 54-key luxury beachfront resort on Marine Drive, Golden Beach, Puri.",
  keywords: [
    "Puri beach resort marketing",
    "Marine Drive hotel video case study",
    "hotel Meta ads case study Odisha",
    "direct booking funnel Puri hotel"
  ],
};

const caseStudyData: CaseStudyProps = {
  slug: "/work/bay-breeze-resort",
  title: "Bay Breeze Grand Resort & Spa — Marine Drive, Puri",
  propertyCategory: "54-Key Luxury Oceanfront Resort",
  location: "Marine Drive, Golden Beach, Puri",
  heroTag: "Video Production & Meta Ad Funnel",
  heroSummary:
    "Positioning a premier beachfront resort as the top weekend getaway choice for affluent travelers from Kolkata and Bhubaneswar through cinematic 4K drone reels and Click-to-WhatsApp direct reservation ads.",
  gradientTheme: "from-amber-600 via-orange-500 to-amber-900",
  statsSummary: [
    {
      label: "Campaign Focus",
      value: "Direct WhatsApp",
      note: "Bypassing 22% OTA commissions with instant front-desk reservations",
    },
    {
      label: "Target Regional Reach",
      value: "Kolkata & Odisha",
      note: "Salt Lake, New Town, South Kolkata, Ranchi & Bhubaneswar",
    },
    {
      label: "Deliverables Volume",
      value: "6x 4K Master Reels",
      note: "Ocean sunrise drone footage, master suite tours & candlelight dining",
    },
  ],
  theChallenge: {
    overview:
      "Despite its prime ocean-facing location on Marine Drive, Bay Breeze was paying over ₹3.5 Lakhs every month in OTA commissions. Its existing online media consisted of wide-angle photos that failed to capture the luxury feeling of waking up to the Bay of Bengal.",
    bulletPoints: [
      "Over 75% of reservations came through Booking.com and MakeMyTrip, eating into margins.",
      "Generic photo gallery failed to communicate the resort's private beach deck and ocean-view bathtubs.",
      "Kolkata travelers were booking competitor resorts simply because rivals had engaging vertical videos on Instagram.",
      "Low direct inquiry capture on WhatsApp despite strong phone traffic.",
    ],
  },
  theStrategy: {
    headline: "Video-First Emotion + Geofenced WhatsApp Booking Ads",
    narrative:
      "Buzzler deployed a two-pronged strategy: first, producing a series of 6 sensory, high-contrast 4K vertical reels showcasing the private balcony breeze, seafood dining, and infinity pool; second, deploying these video assets as Click-to-WhatsApp ads timed to long-weekend planning cycles in West Bengal.",
    keyTactics: [
      {
        title: "Golden Hour Ocean Cinematography",
        description:
          "Shot on-site at 6:00 AM using cinema cameras and licensed drone passes along the Puri coastline, capturing sweeping views of waves crashing near the resort deck.",
      },
      {
        title: "Kolkata Geofenced Meta Ad Funnel",
        description:
          "Targeted high-income families in South Kolkata, Salt Lake, and Ballygunge 3 weeks ahead of upcoming long weekends with bilingual Bengali & English ad copy.",
      },
      {
        title: "Click-to-WhatsApp Instant Concierge",
        description:
          "Replaced confusing multi-step forms with a direct WhatsApp button pre-filled with: 'Hi Bay Breeze, I'd like to check ocean suite availability for [Dates]'.",
      },
    ],
  },
  videoReelPreview: {
    title: "Sunrise Ocean Balcony to Candlelight Seafood Deck",
    specs: "4K HDR • 60fps • 9:16 Vertical",
    scenes: [
      {
        timestamp: "0:00 - 0:02",
        title: "Drone Ocean Approach",
        description: "Sweeping drone shot over Golden Beach waves revealing the resort's private sea deck.",
      },
      {
        timestamp: "0:02 - 0:05",
        title: "Balcony Curtains Breeze",
        description: "Slow-motion interior pan through billowing curtains to a steaming morning coffee on the balcony railing.",
      },
      {
        timestamp: "0:05 - 0:09",
        title: "Fresh Seafood Plating",
        description: "Chef searing fresh Bay of Bengal prawns on the seaside grill under warm fairy lights.",
      },
      {
        timestamp: "0:09 - 0:12",
        title: "Direct WhatsApp Booking Callout",
        description: "Clear on-screen graphic: 'Book Direct via WhatsApp — Complimentary Breakfast Included'.",
      },
    ],
  },
  deliverablesList: [
    "6x Master 4K Vertical Video Reels (Color-graded for Instagram & Ads)",
    "Licensed Drone Aerial 4K Footage Package of Marine Drive",
    "Bilingual (Bengali & English) Meta Ad Copy & Creative Suites",
    "Direct WhatsApp Click-to-Chat Funnel Configuration",
    "Room Category Photo Shoot for Suite Walkthroughs",
    "Bi-Weekly Lead Attribution & Inquiry Quality Tracking",
    "Social Media Publishing Schedule & Best-Time Algorithm Sync",
    "Front-Desk WhatsApp Fast-Response Scripting Guide",
  ],
  testimonialPlaceholder: {
    quote:
      "Before Buzzler, 80% of our guests came through OTAs where we lost 22% on every booking. Their 4K ocean reels transformed our Instagram into our number one direct booking channel. Kolkata travelers message us directly on WhatsApp now.",
    author: "General Manager",
    role: "Bay Breeze Grand Resort & Spa (Marine Drive, Puri)",
    isPilotPlaceholder: true,
  },
  relatedWork: [
    {
      title: "Jagannath Heritage Haveli",
      slug: "/work/jagannath-heritage-haveli",
      tag: "Heritage Identity & Pilgrim Storytelling",
      location: "Grand Road, Puri",
    },
    {
      title: "Chilika Lagoon Eco-Retreat",
      slug: "/work/chilika-eco-retreat",
      tag: "Creator Expedition & Search Ads",
      location: "Puri Coastal District",
    },
  ],
};

export default function BayBreezeCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141413] flex flex-col justify-between">
      <Navbar />
      <CaseStudyDetailView caseStudy={caseStudyData} />
      <Footer />
    </main>
  );
}
