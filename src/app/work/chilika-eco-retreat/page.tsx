import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyDetailView, { CaseStudyProps } from "@/components/CaseStudyDetailView";

export const metadata: Metadata = {
  title: "Chilika Lagoon Eco-Retreat Case Study | Buzzler Agency Puri",
  description:
    "How Buzzler organized an influencer creator expedition and high-intent Google Search campaign for an 18-cottage coastal eco-resort in Puri District.",
  keywords: [
    "Chilika eco resort marketing",
    "eco tourism influencer marketing Odisha",
    "dolphin safari resort case study",
    "Puri experiential tourism advertising"
  ],
};

const caseStudyData: CaseStudyProps = {
  slug: "/work/chilika-eco-retreat",
  title: "Chilika Lagoon Eco-Retreat — Coastal Puri District",
  propertyCategory: "18 Waterfront Cottages & Glamping",
  location: "Coastal Puri District, Satapada Road",
  heroTag: "Travel Creator Expedition & Search Ads",
  heroSummary:
    "Establishing a remote coastal eco-retreat as the premier nature getaway for birdwatchers, couples, and nature seekers through vetted travel creators and high-intent Google Search advertising.",
  gradientTheme: "from-teal-800 via-emerald-700 to-stone-900",
  statsSummary: [
    {
      label: "Campaign Focus",
      value: "Creator Content",
      note: "4 verified travel creators with 100% commercial ad usage rights",
    },
    {
      label: "Search Capture",
      value: "Google Search",
      note: "Top ranking for 'Chilika luxury stay' & 'resort near dolphin safari'",
    },
    {
      label: "Visual Archive",
      value: "30+ High-Res Assets",
      note: "Sunrise boating, dolphin sightings, bonfire dinners & tent walkthroughs",
    },
  ],
  theChallenge: {
    overview:
      "Located 45 minutes south of Puri city center, the eco-retreat suffered from low awareness. While town hotels were crowded, travelers simply didn't know a peaceful waterfront sanctuary with Irrawaddy dolphins and migratory bird trails existed so close to Puri.",
    bulletPoints: [
      "Low spontaneous walk-in traffic due to location outside Puri town center.",
      "High seasonality—vacancies during mid-week and non-peak bird migration months.",
      "Generic OTA listings grouped the retreat with budget roadside dharamsalas.",
      "Lack of high-definition video showing the actual boat safari and sunset dining experience.",
    ],
  },
  theStrategy: {
    headline: "Vetted Creator Staycation + High-Intent Search Intent Funnel",
    narrative:
      "Buzzler curated an exclusive 3-day creator retreat with 4 verified travel and lifestyle storytellers from Kolkata and Bhubaneswar. We mapped out experiential dawn boat itineraries, captured rare Irrawaddy dolphin sightings, and converted the resulting viral reels into high-performing Meta ads and Google Search campaigns targeting weekend nature escapes.",
    keyTactics: [
      {
        title: "Curated Creator Itinerary",
        description:
          "Structured stay with mandatory shot lists: 6:00 AM private lagoon boating, sunset campfire fresh seafood grill, and slow-living cottage walk.",
      },
      {
        title: "Full Commercial Ad Rights",
        description:
          "Secured 100% ad amplification rights, allowing Buzzler to run the creators' viral video reels as sponsored Instagram partner ads across Kolkata and Ranchi.",
      },
      {
        title: "Google Search Intent Capture",
        description:
          "Built high-intent Google Search ad groups targeting couples and photographers searching for 'weekend getaways from Bhubaneswar' and 'Chilika luxury resort'.",
      },
    ],
  },
  videoReelPreview: {
    title: "Dolphins at Dawn: Escaping into Coastal Odisha",
    specs: "4K 60fps • Drone & Underwater • 9:16 Vertical",
    scenes: [
      {
        timestamp: "0:00 - 0:02",
        title: "Mist Over Chilika Lagoon",
        description: "Cinematic drone view of tranquil green waters with traditional wooden boats cutting through morning mist.",
      },
      {
        timestamp: "0:02 - 0:05",
        title: "Irrawaddy Dolphin Surface",
        description: "Crystal-clear slow-motion capture of a rare Irrawaddy dolphin surfacing 10 meters from the guest boat.",
      },
      {
        timestamp: "0:05 - 0:09",
        title: "Luxury Glamping Interior",
        description: "Creator opening canvas tent flaps to reveal teakwood four-poster bed and private lagoon sun deck.",
      },
      {
        timestamp: "0:09 - 0:12",
        title: "Weekend Safari Booking Callout",
        description: "On-screen callout: 'Private Boat Safari Included With Direct Bookings • Reserve via WhatsApp'.",
      },
    ],
  },
  deliverablesList: [
    "4x Verified Travel Creator Collaborations with Commercial Ad Rights",
    "Google Search Ad Campaign ('luxury resort near Chilika', 'Chilika staycation')",
    "Commercial Content Licensing Archive with 30+ High-Resolution Stills",
    "Curated Seasonal Migratory Bird Watching Digital Itinerary Guide",
    "Direct WhatsApp Booking Funnel with Pre-Arranged Boat Safari Package",
    "Instagram Reel Co-Author Publishing across 350K+ Travel Audience",
    "Comprehensive Post-Expedition Reach & Attribution Report",
    "Website Experience Landing Page Design Optimization",
  ],
  testimonialPlaceholder: {
    quote:
      "Being outside Puri city center was always our biggest challenge. Buzzler's creator campaign put Chilika on the map for Kolkata and Bhubaneswar couples. The video footage of dolphins and our luxury tents generated more inquiries in one month than we received all last monsoon.",
    author: "Founder & Lead Naturalist",
    role: "Chilika Lagoon Eco-Retreat (Puri Coastal Belt)",
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
      title: "Jagannath Heritage Haveli",
      slug: "/work/jagannath-heritage-haveli",
      tag: "Heritage Identity & Pilgrim Storytelling",
      location: "Grand Road, Puri",
    },
  ],
};

export default function ChilikaRetreatCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141413] flex flex-col justify-between">
      <Navbar />
      <CaseStudyDetailView caseStudy={caseStudyData} />
      <Footer />
    </main>
  );
}
