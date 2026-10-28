import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyDetailView, { CaseStudyProps } from "@/components/CaseStudyDetailView";

export const metadata: Metadata = {
  title: "Jagannath Heritage Haveli Case Study | Buzzler Agency Puri",
  description:
    "How Buzzler crafted a cultural brand identity and multi-lingual pilgrim hospitality video series for a boutique 28-room heritage stay near Grand Road, Puri.",
  keywords: [
    "Puri temple hotel marketing",
    "Jagannath temple stay branding",
    "cultural hospitality marketing Odisha",
    "Puri heritage haveli case study"
  ],
};

const caseStudyData: CaseStudyProps = {
  slug: "/work/jagannath-heritage-haveli",
  title: "Jagannath Heritage Haveli — Grand Road, Puri",
  propertyCategory: "Boutique 28-Room Heritage Stay",
  location: "Grand Road / Swargadwar, Puri",
  heroTag: "Brand Identity & Multi-Lingual Storytelling",
  heroSummary:
    "Transforming a traditional family pilgrimage property into an elevated cultural retreat that respects centuries-old sacred Puri traditions while attracting high-value family travelers from West Bengal, Bihar, and pan-India.",
  gradientTheme: "from-stone-900 via-amber-800 to-stone-950",
  statsSummary: [
    {
      label: "Language Coverage",
      value: "4 Languages",
      note: "Authentic scripts in Odia, Bengali, Hindi, and English",
    },
    {
      label: "Brand Modernization",
      value: "Full Identity",
      note: "Bespoke logo, guest directories, signage, and temple guide",
    },
    {
      label: "Target Guest Persona",
      value: "Multi-Gen Families",
      note: "Elderly comfort, VIP darshan assistance & Mahaprasad dining",
    },
  ],
  theChallenge: {
    overview:
      "Jagannath Heritage Haveli had rich architectural beauty and proximity to the temple, but was perceived as an ordinary pilgrimage lodge. Younger family decision-makers from Kolkata and Delhi were booking generic modern hotels because the Haveli lacked premium digital presence and clear in-room guidance for elderly travelers.",
    bulletPoints: [
      "Perceived as an austere budget dharamsala rather than a premium cultural heritage hotel.",
      "No consistent visual identity—in-room guest guides were faded photocopies.",
      "Missing out on affluent multi-generational families who value cleanliness, elderly assistance, and authentic temple experiences.",
      "Absence of video content illustrating the property's serene central courtyard and vegetarian culinary heritage.",
    ],
  },
  theStrategy: {
    headline: "Sacred Cultural Elegance + Multi-Lingual Family Funnel",
    narrative:
      "Buzzler rebuilt the property's entire visual presence around authentic Odishan heritage. We designed an elegant identity suite with refined temple-arch motifs, produced multi-lingual video documentaries celebrating morning courtyard prayers and Mahaprasad culinary traditions, and created in-room pilgrim guidebooks that delighted elderly family members.",
    keyTactics: [
      {
        title: "Cultural Visual Identity Suite",
        description:
          "Designed a refined logo mark inspired by traditional Kalingan stone carvings, accompanied by warm terracotta and gold brand colors that look world-class across signage and stationery.",
      },
      {
        title: "Multi-Lingual Heritage Video Series",
        description:
          "Produced 4 scripted cultural reels in Bengali, Hindi, and Odia highlighting family suite comfort, serene central courtyard tea sessions, and seamless temple access.",
      },
      {
        title: "Curated In-Room Pilgrim Guide",
        description:
          "Created a beautifully printed in-room book detailing daily temple rituals, festival calendars, dress codes, and front-desk VIP darshan assistance.",
      },
    ],
  },
  videoReelPreview: {
    title: "The Sacred Rhythm of Puri: A Morning at the Haveli",
    specs: "4K Cinema • 9:16 Vertical • Multi-Lingual Audio",
    scenes: [
      {
        timestamp: "0:00 - 0:02",
        title: "Courtyard Temple Chants",
        description: "Dawn sunlight filtering through ornate wooden courtyard jaali screens with gentle morning flute music.",
      },
      {
        timestamp: "0:02 - 0:06",
        title: "Traditional Brass Service",
        description: "Staff serving warm herbal tea in traditional kansa brass cups to an elderly couple seated in the garden.",
      },
      {
        timestamp: "0:06 - 0:09",
        title: "Mahaprasad Lunch Presentation",
        description: "Steaming traditional Odia vegetarian thali arranged on fresh plantain leaf runners.",
      },
      {
        timestamp: "0:09 - 0:12",
        title: "Family Darshan Concierge Callout",
        description: "Graphic showing: 'Seamless Temple Darshan for Seniors • Reserve Your Family Suite Direct'.",
      },
    ],
  },
  deliverablesList: [
    "Full Brand Identity Suite: Primary Logo, Sub-Mark, Typography & Color Tokens",
    "In-Room Pilgrim Guidebook: Temple Rituals, Maps, and Dress Etiquette",
    "4x Multi-Lingual Scripted Cultural Video Reels (Odia, Bengali, Hindi, English)",
    "Room Collateral Suite: Keycard Holders, Luggage Tags & Stationery",
    "Digital QR Restaurant Menu featuring Satvik & Traditional Dining",
    "Google Business Profile Optimization for 'Heritage Stay Near Temple'",
    "Family Suite Direct WhatsApp Reservation Funnel",
    "Entrance Facade Brass Signage & Architectural Direction",
  ],
  testimonialPlaceholder: {
    quote:
      "Buzzler understood our heritage when others only offered generic ads. Their branding gave our Haveli the dignity it deserved, and the multi-lingual video series helped families in Kolkata and Patna realize we provide five-star comfort with sacred values.",
    author: "Managing Director",
    role: "Jagannath Heritage Haveli (Grand Road, Puri)",
    isPilotPlaceholder: true,
  },
  relatedWork: [
    {
      title: "Bay Breeze Grand Resort & Spa",
      slug: "/work/bay-breeze-resort",
      tag: "Video Production & Meta Booking Funnel",
      location: "Marine Drive, Puri",
    },
    {
      title: "Chilika Lagoon Eco-Retreat",
      slug: "/work/chilika-eco-retreat",
      tag: "Creator Expedition & Search Ads",
      location: "Puri Coastal District",
    },
  ],
};

export default function JagannathHaveliCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141413] flex flex-col justify-between">
      <Navbar />
      <CaseStudyDetailView caseStudy={caseStudyData} />
      <Footer />
    </main>
  );
}
