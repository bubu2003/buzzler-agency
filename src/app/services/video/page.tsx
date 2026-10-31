import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailView, { ServiceDetailProps } from "@/components/ServiceDetailView";
import { Video } from "lucide-react";

export const metadata: Metadata = {
  title: "4K Video Production & Reels in Puri, Odisha | Buzzler Agency",
  description:
    "High-production 4K vertical reels, licensed drone cinematography, and cinematic brand films for cafes, gyms, colleges, and hotels in Puri, Odisha.",
  keywords: [
    "video production Puri",
    "reels agency Puri",
    "commercial video shoot Odisha",
    "drone shoot Puri",
    "social media video marketing Puri",
  ],
};

const videoServiceData: ServiceDetailProps = {
  slug: "/services/video",
  badge: "Social Media Video",
  h1Title: "4K Video Marketing & Reel Production in Puri & Odisha",
  subtitle:
    "Cinematic drone footage, vertical social reels, and brand films that turn scrolling viewers into paying customers, members, and patrons.",
  heroBlurb:
    "Modern consumers in Puri and Bhubaneswar browse Instagram and YouTube Shorts before deciding where to dine, which gym to join, which college to trust, or where to vacation. We script, film on-site with cinema cameras and licensed drone pilots, and produce high-retention vertical reels engineered to evoke emotion and drive immediate action.",
  iconType: "video",
  targetAudience: [
    {
      tag: "Cafes & Dining",
      title: "Restaurants, Cafes & Food Hotspots",
      description:
        "Sizzling seafood platters, artisan pour-overs, live chef kitchen action, and buzzing weekend dining atmospheres that drive packed table queues.",
    },
    {
      tag: "Gyms & Fitness",
      title: "Strength & Fitness Studios",
      description:
        "High-octane workout cinematography, heavy deadlifts, certified trainer spotlights, and emotional member transformation stories.",
    },
    {
      tag: "Colleges & Schools",
      title: "Academic Campuses & Institutes",
      description:
        "Inspiring campus drone flyovers, modern STEM lab tours, sporting facility showcases, and authentic student & parent testimonials.",
    },
    {
      tag: "Hotels & Stays",
      title: "Beach Resorts & Heritage Havelis",
      description:
        "Balcony sunrise ocean flyovers, tranquil courtyard dining, and luxury suite tours that drive direct WhatsApp reservations.",
    },
  ],
  theProblem: {
    painPoint: "Static photos and dry flyers no longer capture customer attention in 2026.",
    explanation:
      "Most local businesses in Puri rely on outdated photos, boring posters, or shaky phone snapshots. Prospective customers scroll right past without feeling any emotion. Meanwhile, local brands using cinematic vertical video capture 5x more attention on Instagram and build immediate brand trust.",
    buzzlerSolution:
      "We produce high-contrast, color-graded 4K vertical reels featuring crisp audio design, rhythmic editing, and direct-response Click-to-WhatsApp hooks that make your brand stand out across Odisha.",
  },
  deliverables: [
    {
      category: "Cinematography & On-Site Filming",
      items: [
        "On-location filming in Puri & Bhubaneswar using 4K/60fps cinema-grade cameras",
        "Licensed drone aerial footage of coastal landscapes, facades, and campus grounds",
        "Macro detail cinematography (sizzling dishes, workout lifts, lab equipment, suite views)",
        "Authentic customer, member, student, or guest experience walkthroughs",
        "Professional lighting setup and wireless directional audio recording",
      ],
    },
    {
      category: "Post-Production & Social Optimization",
      items: [
        "9:16 vertical edits tailored specifically for Instagram Reels & YouTube Shorts",
        "Trending, commercially licensed background audio and dynamic sound effects",
        "Punchy on-screen subtitles and hook titles in Odia, English, Bengali, or Hindi",
        "Color grading matching warm, premium coastal aesthetic tones",
        "Direct Click-to-WhatsApp call-to-action endings on every video",
      ],
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Shot List & Creative Brief",
      duration: "Days 1–3",
      description:
        "We audit your brand, identify your strongest USPs (signature dish, gym floor equipment, modern labs, ocean views), and script targeted video hooks.",
      output: "Approved 6-Reel Storyboard & Filming Schedule",
    },
    {
      step: "02",
      title: "On-Site Production Shoot",
      duration: "Days 4–5",
      description:
        "Our Puri-based crew shoots golden hour drone footage, detail macro shots, and customer interactions with minimal disruption to your daily operations.",
      output: "Raw 4K Cinema & Aerial Footage Archive",
    },
    {
      step: "03",
      title: "Edit, Color & Sound",
      duration: "Days 6–9",
      description:
        "High-retention editing, speed ramping, sound design, color grading, and localized subtitle typography optimized for the Instagram algorithm.",
      output: "Ready-to-Publish Master Reel Files",
    },
    {
      step: "04",
      title: "Publishing & Ad Amplification",
      duration: "Day 10+",
      description:
        "We schedule reels during peak local engagement windows and plug top-performing creative directly into Meta advertising campaigns.",
      output: "Published Content & Engagement Report",
    },
  ],
  calculatorOptions: {
    label: "Explore Video Production Models",
    options: [
      {
        id: "starter",
        title: "Starter Spotlight Package",
        metric: "4 Master 4K Reels",
        detail:
          "Ideal for cafes, boutique gyms, or newly opened local outlets wanting fresh social proof and immediate footfall.",
      },
      {
        id: "growth",
        title: "Full Brand Growth Engine",
        metric: "8 Master Reels + Drone Coverage",
        detail:
          "Our most popular package for established restaurants, fitness centers, resorts, or campuses needing comprehensive visual dominance.",
      },
      {
        id: "annual",
        title: "Year-Round Creative Retainer",
        metric: "6 Reels Every Month + Event Coverage",
        detail:
          "Continuous year-round production covering festival rushes, admission seasons, summer membership drives, and new product launches.",
      },
    ],
  },
  faqs: [
    {
      question: "Will filming disrupt our customers or daily operations?",
      answer:
        "Never. For cafes and restaurants, we film during prep hours or non-peak times. For gyms, we film during dedicated creator windows. Drone exterior shoots happen during early morning golden hours (6:00 AM – 7:30 AM).",
    },
    {
      question: "Do you handle drone permissions and regulations in Puri?",
      answer:
        "Yes, our drone pilots operate in accordance with DGCA guidelines and local administrative protocols along the Puri coastline, campus zones, and urban corridors.",
    },
    {
      question: "Can we use these videos for Meta and Google Ads?",
      answer:
        "Yes! You receive 100% unrestricted commercial usage rights. The reels are formatted specifically so you can run them as Instagram Feed, Story, and Reels ads.",
    },
    {
      question: "Can you provide subtitles in Odia, Bengali, Hindi, and English?",
      answer:
        "Yes. We specialize in localized multi-lingual captions and hooks to capture local residents in Odisha as well as regional tourists from West Bengal and Jharkhand.",
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
      blurb: "Put your new video reels in front of thousands of high-intent local customers and regional tourists.",
    },
    {
      title: "Influencer Marketing",
      slug: "/services/influencer-marketing",
      blurb: "Pair your video production with vetted food, fitness, and lifestyle creators in Odisha.",
    },
    {
      title: "Branding & Identity",
      slug: "/services/branding",
      blurb: "Elevate your business's visual presence with cohesive physical and digital design assets.",
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
