import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailView, { ServiceDetailProps } from "@/components/ServiceDetailView";
import { Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Hotel Video Production & Reels in Puri, Odisha | Buzzler Agency",
  description:
    "High-production 4K vertical reels, licensed drone beach flyovers, and cinematic suite walkthroughs for hotels and resorts in Puri, Odisha.",
  keywords: [
    "hotel video production Puri",
    "hotel video marketing Odisha",
    "hotel reels and Instagram marketing Puri",
    "drone shoot for hotels Puri",
    "resort video marketing Puri"
  ],
};

const videoServiceData: ServiceDetailProps = {
  slug: "/services/video",
  badge: "Social Media Video",
  h1Title: "Hotel Video Marketing & 4K Reel Production in Puri",
  subtitle: "Cinematic drone footage, vertical social reels, and suite films that turn scrolling tourists into confirmed direct guests.",
  heroBlurb:
    "Modern travelers browse Instagram and YouTube Shorts before ever searching on Google or OTAs. We script, film on-site in Puri with cinema cameras and licensed drone pilots, and edit punchy vertical content designed to evoke emotion and drive direct bookings.",
  iconType: "video",
  targetAudience: [
    {
      tag: "Marine Drive & Golden Beach",
      title: "Beachfront Luxury Resorts",
      description:
        "Capture sunrise over the Bay of Bengal, private balcony ocean views, poolside cocktails, and candlelit seafood dinners on the sand.",
    },
    {
      tag: "Grand Road & Swargadwar",
      title: "Temple Stays & Heritage Haveli",
      description:
        "Storytelling highlighting serene courtyards, traditional Mahaprasad dining, authentic Odia hospitality, and VIP temple darshan assistance.",
    },
    {
      tag: "Chilika & Balukhand Coastal Belt",
      title: "Eco-Retreats & Boutique Villas",
      description:
        "Highlighting quiet slow-travel, dolphin boat excursions, lush nature walks, and restorative weekend getaways from IT hubs.",
    },
  ],
  theProblem: {
    painPoint: "Static hotel photos no longer sell rooms in 2026.",
    explanation:
      "Most hotels in Puri rely on outdated, wide-angle photos uploaded years ago to Google and MakeMyTrip. Travelers find them sterile and uninspiring. Meanwhile, properties using dynamic vertical video capture 5x more attention on Instagram and build immediate booking desire.",
    buzzlerSolution:
      "We produce high-contrast, color-graded 4K vertical reels featuring real movement, immersive audio design, and direct booking calls-to-action that stand out in Bengal and Odisha travelers' social feeds.",
  },
  deliverables: [
    {
      category: "Cinematography & On-Site Filming",
      items: [
        "On-location filming in Puri using 4K/60fps cinema-grade cameras",
        "Licensed drone aerial footage of oceanfront, beach access, and architecture",
        "Master suite walkthroughs, bathroom luxury amenities, and lighting angles",
        "Restaurant, live seafood grill, and breakfast buffet culinary coverage",
        "Staff hospitality moments and authentic guest check-in experience",
      ],
    },
    {
      category: "Post-Production & Social Optimization",
      items: [
        "9:16 vertical edits tailored for Instagram Reels & YouTube Shorts",
        "Trending, commercially licensed background audio and sound effects",
        "Dynamic on-screen subtitles and hook titles in English, Bengali, or Hindi",
        "Color grading matching warm coastal golden hour tones",
        "Direct Click-to-WhatsApp call-to-action endings on every video",
      ],
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Shot List & Storyboard",
      duration: "Days 1–3",
      description:
        "We visit your hotel, identify your strongest USPs (sea-view balcony, heritage courtyard, culinary specialty), and script targeted video hooks.",
      output: "Approved 6-Reel Storyboard & Filming Schedule",
    },
    {
      step: "02",
      title: "On-Site Production Shoot",
      duration: "Days 4–5",
      description:
        "Our Puri-based crew shoots dawn golden hour drone footage, room walkthroughs, and sunset dining with minimal disruption to your guests.",
      output: "Raw 4K Cinema & Aerial Footage Archive",
    },
    {
      step: "03",
      title: "Edit, Color & Sound",
      duration: "Days 6–9",
      description:
        "Video editing, speed ramping, sound design, color grading, and subtitle typography designed for maximum retention on Instagram.",
      output: "Ready-to-Publish Master Reel Files",
    },
    {
      step: "04",
      title: "Publishing & Ad Amplification",
      duration: "Day 10+",
      description:
        "We schedule reels during optimal engagement windows and hook top-performing creative directly into your Meta advertising campaigns.",
      output: "Published Content & Engagement Report",
    },
  ],
  calculatorOptions: {
    label: "Explore Video Production Models",
    options: [
      {
        id: "starter",
        title: "Seasonal Spotlight Package",
        metric: "4 Master 4K Reels",
        detail: "Ideal for boutique homestays or heritage properties wanting fresh social proof ahead of upcoming holiday weekends.",
      },
      {
        id: "growth",
        title: "Full Resort Growth Engine",
        metric: "8 Master Reels + Drone Coverage",
        detail: "Our most popular package for mid to large beachfront hotels on Marine Drive needing comprehensive room, dining, and drone coverage.",
      },
      {
        id: "annual",
        title: "Year-Round Content Retainer",
        metric: "6 Reels Every Month + Event Coverage",
        detail: "Continuous year-round production covering Rath Yatra, Durga Puja, winter holidays, and monsoon getaways.",
      },
    ],
  },
  faqs: [
    {
      question: "Will filming disturb our staying hotel guests?",
      answer:
        "Never. We schedule drone and exterior shoots at dawn (6:00 AM – 7:30 AM) when beaches and balconies are tranquil. Interior room and dining shoots are coordinated around guest check-outs and non-peak restaurant hours.",
    },
    {
      question: "Do you handle drone permissions and regulations in Puri?",
      answer:
        "Yes, our drone pilots operate in accordance with DGCA guidelines and local administrative protocols along the Puri coastline and Marine Drive zone.",
    },
    {
      question: "Can we use these videos for Meta and Google Ads?",
      answer:
        "Yes! You receive 100% unrestricted commercial usage rights. The reels are formatted specifically so you can run them as Instagram Feed, Story, and Reels ads.",
    },
    {
      question: "Can you provide subtitles in Bengali and Hindi?",
      answer:
        "Yes. We specialize in localized multi-lingual hooks (Bengali, Hindi, Odia, English) to capture travelers from Kolkata, Ranchi, and Bhubaneswar effectively.",
    },
    {
      question: "What is the typical turnaround time?",
      answer:
        "From the filming day to delivering the final color-graded reels typically takes 5 to 7 business days.",
    },
  ],
  relatedServices: [
    {
      title: "Meta & Google Ads",
      slug: "/services/ads",
      blurb: "Put your new video reels in front of thousands of high-intent travelers from Bengal and Jharkhand.",
    },
    {
      title: "Influencer Marketing",
      slug: "/services/influencer-marketing",
      blurb: "Pair your video production with vetted travel creators who document their stay in Puri.",
    },
    {
      title: "Branding & Identity",
      slug: "/services/branding",
      blurb: "Elevate your property's visual presence with bespoke guest collateral and signage.",
    },
  ],
};

export default function VideoServicePage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141413] flex flex-col justify-between">
      <Navbar />
      <ServiceDetailView service={videoServiceData} />
      <Footer />
    </main>
  );
}
