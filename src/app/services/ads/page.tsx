import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailView, { ServiceDetailProps } from "@/components/ServiceDetailView";
import { Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Meta & Google Ads for Hotels in Puri, Odisha | Buzzler Agency",
  description:
    "High-intent search ads and geo-targeted Instagram campaigns designed to capture travelers from Kolkata, Ranchi, and Bhubaneswar to generate direct hotel bookings.",
  keywords: [
    "Meta ads for hotels",
    "Google ads for hotels Puri",
    "hotel digital advertising Odisha",
    "direct booking WhatsApp ads Puri",
    "hotel marketing agency Puri"
  ],
};

const adsServiceData: ServiceDetailProps = {
  slug: "/services/ads",
  badge: "Paid Ads Management",
  h1Title: "Meta & Google Ads Engine for Puri Hotels & Resorts",
  subtitle: "High-intent search capture and regional social ads that slash 20-25% OTA commissions and drive direct booking inquiries.",
  heroBlurb:
    "Stop paying 20% to 25% of your nightly revenue to Booking.com and MakeMyTrip. We build targeted search and social advertising funnels that capture travelers at the exact moment they plan their Puri getaway, guiding them straight into direct WhatsApp and website reservations.",
  iconType: "ads",
  targetAudience: [
    {
      tag: "Direct Booking Focus",
      title: "Hotels Suffering High OTA Commissions",
      description:
        "Replace expensive third-party commission fees with direct guest relationships that re-book year after year.",
    },
    {
      tag: "Weekend Fillers",
      title: "Properties With Mid-Week & Off-Season Dips",
      description:
        "Targeted flash-staycation ads reaching corporate and IT professionals in Bhubaneswar and Cuttack for quick weekend getaways.",
    },
    {
      tag: "Seasonal Maximizers",
      title: "Peak Holiday Season Campaigns",
      description:
        "Capture early family bookings from West Bengal and Jharkhand 4 to 6 weeks before Durga Puja, Rath Yatra, and winter school vacations.",
    },
  ],
  theProblem: {
    painPoint: "OTAs take 20-25% commissions and hide guest contact data.",
    explanation:
      "When a guest books through an OTA, you surrender up to a quarter of your room rate, plus the guest belongs to the platform—not you. Meanwhile, generic ad agencies waste budget boosting Facebook posts to random people who will never visit Puri.",
    buzzlerSolution:
      "We run laser-targeted Google Search ads capturing high-intent terms like 'sea view resort Puri' and geo-fence Meta video ads to high-income postal codes in Kolkata, Ranchi, and Jamshedpur with direct Click-to-WhatsApp booking prompts.",
  },
  deliverables: [
    {
      category: "Google Search & Hotel Ads",
      items: [
        "High-intent keyword bidding ('best hotel near Golden Beach', 'luxury Puri resort')",
        "Negative keyword filtering to eliminate irrelevant and low-budget searches",
        "Google Hotel Ads & Free Booking Links setup and sync",
        "Call extension and location asset extensions tied to your Puri property",
        "Landing page click and call conversion tracking",
      ],
    },
    {
      category: "Meta (Instagram & Facebook) Funnels",
      items: [
        "Geo-fencing to high-income neighborhoods in South Kolkata, Salt Lake, Ranchi & Bhubaneswar",
        "Click-to-WhatsApp conversational ads with pre-filled room availability prompts",
        "Dynamic video retargeting for website visitors who didn't complete a booking",
        "Durga Puja, Rath Yatra, and long-weekend countdown campaign pushes",
        "Bi-weekly ROAS and direct booking lead volume reporting",
      ],
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Tracking & Conversion Setup",
      duration: "Days 1–4",
      description:
        "We install Meta Pixel, Google Tag Manager, Google Analytics 4, and WhatsApp click-tracking to verify every rupee spent.",
      output: "Verified Attribution & Tracking Infrastructure",
    },
    {
      step: "02",
      title: "Audience & Geo-Targeting Map",
      duration: "Days 5–7",
      description:
        "We build customized audience segments: Bengali long-weekend travelers, road-trip families from Jharkhand, and corporate retreat planners in Odisha.",
      output: "Target Audience Architecture",
    },
    {
      step: "03",
      title: "Creative & Copy Integration",
      duration: "Days 8–10",
      description:
        "We combine high-production video creative with localized copy in English, Bengali, and Hindi with clear room rate and balcony hooks.",
      output: "Ad Creative Suites (Feeds, Stories, Search Copy)",
    },
    {
      step: "04",
      title: "Launch & ROAS Optimization",
      duration: "Ongoing",
      description:
        "Daily bid management, keyword pruning, and budget reallocation to top-performing ad sets to maximize direct booking inquiries.",
      output: "Bi-Weekly ROI & Lead Quality Reports",
    },
  ],
  calculatorOptions: {
    label: "Explore Advertising Management Tiers",
    options: [
      {
        id: "local-search",
        title: "Puri Local Search Capture",
        metric: "Google Ads Only",
        detail: "Focuses strictly on high-intent searchers actively looking for hotels in Puri to capture immediate bookings.",
      },
      {
        id: "multi-channel",
        title: "Meta + Google Booking Engine",
        metric: "Google Search + Instagram Ads",
        detail: "Our standard performance package combining high-intent Google search with visual Instagram & WhatsApp booking funnels.",
      },
      {
        id: "peak-season",
        title: "Festival Blitz Campaign",
        metric: "High-Volume Multi-State Push",
        detail: "Aggressive 6-week campaign scaling into West Bengal, Jharkhand, Bihar, and Odisha ahead of Durga Puja or Rath Yatra.",
      },
    ],
  },
  faqs: [
    {
      question: "How do direct WhatsApp booking ads work?",
      answer:
        "When a prospective traveler in Kolkata clicks your ad on Instagram or Facebook, it immediately opens a WhatsApp conversation with your front desk with a pre-filled message: 'Hi, I'm interested in room rates for [Dates]'. This allows your team to close bookings instantly with personal care.",
    },
    {
      question: "What monthly ad spend budget do we need?",
      answer:
        "We typically recommend a starting ad budget of ₹15,000 to ₹35,000/month for boutique properties, scaling up during peak travel seasons. All ad spend is paid directly to Google and Meta, with 100% transparency.",
    },
    {
      question: "Can we track how many bookings came from your ads?",
      answer:
        "Yes. We track phone calls, Click-to-WhatsApp conversations, and direct website booking confirmations so you know exactly which campaigns generated revenue.",
    },
    {
      question: "Why target travelers from West Bengal and Jharkhand specifically?",
      answer:
        "Over 60% of leisure hotel stays in Puri are driven by West Bengal and neighboring eastern states. Target-timing ads before long weekends and festive holidays yields the highest return on investment.",
    },
    {
      question: "How quickly do campaigns go live?",
      answer:
        "Once tracking pixels and ad accounts are connected, your campaigns are typically live and generating inquiries within 5 to 7 business days.",
    },
  ],
  relatedServices: [
    {
      title: "Social Media Video",
      slug: "/services/video",
      blurb: "High-production 4K reels provide the high-converting visual creative your ads need to win.",
    },
    {
      title: "Influencer Marketing",
      slug: "/services/influencer-marketing",
      blurb: "Amplify creator reels as paid sponsored partnership ads for maximum credibility.",
    },
    {
      title: "Branding & Identity",
      slug: "/services/branding",
      blurb: "Upgrade your website and booking collateral to convert ad visitors at higher nightly rates.",
    },
  ],
};

export default function AdsServicePage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141413] flex flex-col justify-between">
      <Navbar />
      <ServiceDetailView service={adsServiceData} />
      <Footer />
    </main>
  );
}
