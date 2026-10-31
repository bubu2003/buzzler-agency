import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailView, { ServiceDetailProps } from "@/components/ServiceDetailView";
import { Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Meta & Google Ads Agency in Puri & Odisha | Buzzler Agency",
  description:
    "High-intent search capture and hyper-local Meta & Google advertising funnels driving paying customers, members, admissions, and direct bookings in Puri and Odisha.",
  keywords: [
    "Meta ads agency Puri",
    "Google ads agency Odisha",
    "Puri advertising agency",
    "local lead generation Puri",
    "Puri business marketing",
  ],
};

const adsServiceData: ServiceDetailProps = {
  slug: "/services/ads",
  badge: "Paid Ads Management",
  h1Title: "High-Intent Meta & Google Ads Engine in Puri & Odisha",
  subtitle:
    "Laser-targeted search capture and localized social funnels that drive paying table diners, gym trial signups, student admissions, and direct stays.",
  heroBlurb:
    "Stop wasting budget boosting random posts to audiences who will never buy. We engineer precision search and social advertising funnels that capture high-intent customers in Puri, Bhubaneswar, and Eastern India at the exact moment of decision, routing them straight into direct WhatsApp chats and qualified phone inquiries.",
  iconType: "ads",
  targetAudience: [
    {
      tag: "Cafes & Dining",
      title: "Restaurants & Beach Cafes",
      description:
        "Hyper-local 15km geo-fenced Instagram ads driving packed tables, live-event crowds, and direct WhatsApp reservations without aggregator commissions.",
    },
    {
      tag: "Gyms & Studios",
      title: "Fitness & Strength Studios",
      description:
        "Targeted lead capture funnels delivering instant 3-day trial passes to local fitness enthusiasts aged 18-38 via automated WhatsApp greetings.",
    },
    {
      tag: "Colleges & Schools",
      title: "Academic Campuses & Institutes",
      description:
        "High-intent Google Search and multi-lingual Meta ads capturing parents and prospective students ahead of competitive admission sessions.",
    },
    {
      tag: "Hotels & Stays",
      title: "Resorts & Heritage Stays",
      description:
        "Targeting affluent weekend travelers across Kolkata, Ranchi, and Bhubaneswar to bypass 20-25% OTA commissions with direct reservations.",
    },
  ],
  theProblem: {
    painPoint: "Boosting random posts wastes budget with zero measurable local return.",
    explanation:
      "Most businesses in Puri spend money blindly clicking 'Boost Post' on Instagram or letting distant agencies run broad, unsegmented campaigns. You get vanity likes from random users, but empty cash registers. Meanwhile, precision search and geo-fenced ads deliver verified local customers at predictable acquisition costs.",
    buzzlerSolution:
      "We run laser-targeted Google Search ads capturing active local searchers and geo-fence Meta video ads with frictionless Click-to-WhatsApp hooks that produce immediate, trackable inquiries and footfall.",
  },
  deliverables: [
    {
      category: "Google Search & High-Intent Ads",
      items: [
        "High-intent keyword bidding ('best cafe near Sea Beach', 'gym near Grand Road', 'admissions open Puri')",
        "Negative keyword filtering to eliminate irrelevant and wasteful clicks",
        "Google Maps & Local Service Extension optimization to capture neighborhood searches",
        "Call extension and location asset extensions tied to your business phone line",
        "Landing page click, call, and WhatsApp conversion tracking",
      ],
    },
    {
      category: "Meta (Instagram & Facebook) Funnels",
      items: [
        "Hyper-local radius fencing (5km–20km) around Puri, Cuttack, and Bhubaneswar",
        "Click-to-WhatsApp conversational ads with pre-filled inquiry prompts",
        "Dynamic video retargeting for users who watched your reels or visited your page",
        "Seasonal, festival, and weekend rush campaign scheduling",
        "Bi-weekly ROAS, cost-per-lead, and verified inquiry volume reporting",
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
        "We build customized audience segments: local diners and youth in Puri/Bhubaneswar, fitness seekers, parents, and regional travelers.",
      output: "Target Audience Architecture",
    },
    {
      step: "03",
      title: "Creative & Copy Integration",
      duration: "Days 8–10",
      description:
        "We combine high-production video creative with localized copy in Odia, English, Bengali, and Hindi with irresistible local hooks.",
      output: "Ad Creative Suites (Feeds, Stories, Search Copy)",
    },
    {
      step: "04",
      title: "Launch & ROAS Optimization",
      duration: "Ongoing",
      description:
        "Daily bid management, negative keyword pruning, and budget reallocation to top-performing ad sets to maximize customer acquisition.",
      output: "Bi-Weekly ROI & Lead Quality Reports",
    },
  ],
  calculatorOptions: {
    label: "Explore Advertising Management Tiers",
    options: [
      {
        id: "local-search",
        title: "Puri Local Search Capture",
        metric: "Google Search Ads",
        detail:
          "Focuses strictly on high-intent searchers actively looking for your specific services in Puri to capture immediate paying demand.",
      },
      {
        id: "multi-channel",
        title: "Meta + Google Growth Engine",
        metric: "Search + Video Ads",
        detail:
          "Our standard performance package combining high-intent Google search with visual Instagram & WhatsApp conversation funnels.",
      },
      {
        id: "peak-season",
        title: "High-Volume Scaling Push",
        metric: "Multi-Region Blitz",
        detail:
          "Aggressive multi-channel campaign scaling across Odisha, West Bengal, and Jharkhand for festival pushes, admission cycles, or summer drives.",
      },
    ],
  },
  faqs: [
    {
      question: "How do Click-to-WhatsApp ads work for local businesses?",
      answer:
        "When an interested person in Puri or Bhubaneswar clicks your ad on Instagram or Facebook, it immediately opens a WhatsApp conversation with your business with a pre-filled greeting: 'Hi, I'd like to book a table / claim a trial pass / inquire about admissions'. Your team closes inquiries immediately with personal care.",
    },
    {
      question: "What monthly ad spend budget do we need?",
      answer:
        "We typically recommend a starting ad budget of ₹15,000 to ₹35,000/month for single-location businesses, scaling up during peak customer seasons. All ad spend is paid directly to Google and Meta with 100% financial transparency.",
    },
    {
      question: "Can we track how many customers came from your ads?",
      answer:
        "Yes. We track phone calls, Click-to-WhatsApp chats, and website form fills so you know exactly which campaigns generated actual business inquiries.",
    },
    {
      question: "Why run ads locally in Puri and Bhubaneswar?",
      answer:
        "Consumers in coastal Odisha actively discover new brands on Instagram and compare options on Google. Local radius ads ensure 100% of your budget reaches people who can physically visit your venue or enroll in your institution.",
    },
    {
      question: "How quickly do campaigns go live?",
      answer:
        "Once tracking setup and ad copy are approved, your campaigns are typically live and generating inquiries within 5 to 7 business days.",
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
      blurb: "Upgrade your visual assets and physical customer collateral to convert traffic at higher margins.",
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
