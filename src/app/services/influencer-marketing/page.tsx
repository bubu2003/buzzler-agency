import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailView, { ServiceDetailProps } from "@/components/ServiceDetailView";
import { Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Influencer Marketing & Creator Collaborations in Odisha | Buzzler Agency",
  description:
    "Curated food, fitness, education, and travel creators delivering authentic reviews, viral reels, and commercial ad licensing for brands in Puri and Odisha.",
  keywords: [
    "influencer marketing agency Odisha",
    "food influencers Puri",
    "fitness creators Bhubaneswar",
    "travel creators Puri",
    "creator marketing Odisha",
  ],
};

const influencerServiceData: ServiceDetailProps = {
  slug: "/services/influencer-marketing",
  badge: "Influencer Marketing",
  h1Title: "Vetted Creator Collaborations & Influencer Campaigns in Odisha",
  subtitle:
    "Hand-picked regional creators who produce authentic foodie reviews, workout spotlights, campus tours, and staycation vlogs with real local engagement.",
  heroBlurb:
    "Tired of unvetted influencers demanding free meals, free gym access, or free stays while delivering zero paying customers? Buzzler manages your creator partnerships end-to-end. We select verified storytellers from Odisha and West Bengal with genuine local audiences, script structured experiential briefs, and secure commercial ad usage rights so their viral reels fuel your ad campaigns for months.",
  iconType: "influencer",
  targetAudience: [
    {
      tag: "Food & Dining",
      title: "Cafes, Bakeries & Restaurants",
      description:
        "Local food bloggers and foodies from Puri, Cuttack, and Bhubaneswar for signature menu tastings, sizzling dish reviews, and weekend table rushes.",
    },
    {
      tag: "Health & Fitness",
      title: "Gyms, CrossFit & Wellness Studios",
      description:
        "Respected regional fitness athletes and strength coaches showcasing gym floor equipment, coaching quality, and authentic transformation journeys.",
    },
    {
      tag: "Education & Academics",
      title: "Schools, Colleges & Institutes",
      description:
        "Inspiring education vloggers, alumni, and student ambassadors touring modern campus facilities, STEM labs, and sports grounds.",
    },
    {
      tag: "Hospitality & Stays",
      title: "Beach Resorts & Boutique Stays",
      description:
        "Verified travel vloggers capturing sunrise balcony views, fresh seafood dining, and slow-travel weekend getaways.",
    },
  ],
  theProblem: {
    painPoint: "90% of free influencer barter deals produce zero actual paying customers.",
    explanation:
      "Businesses in Puri frequently host self-proclaimed creators who upload a couple of poorly lit stories to fake bot followers, leave with a free experience, and deliver zero new customers or reusable assets.",
    buzzlerSolution:
      "We strictly audit creator demographics (demanding 60%+ audience concentration in Odisha, West Bengal, and Eastern India), enforce contractual shot lists, and secure full commercial usage rights so their content fuels your paid ad campaigns.",
  },
  deliverables: [
    {
      category: "Creator Discovery & Contractual Vetting",
      items: [
        "Vetting creator audience authenticity (eliminating fake follower bots and engagement pods)",
        "Demographic matching targeting real local consumers in Puri, Bhubaneswar, and Eastern India",
        "Negotiation of commercial content rights, collaboration terms, and publishing schedules",
        "Comprehensive legal agreement protecting your brand standards and venue rules",
        "Experience brief curation (signature dish tasting, workout session, campus walkthrough, resort stay)",
      ],
    },
    {
      category: "Content Delivery & Commercial Licensing",
      items: [
        "High-retention 9:16 vertical reels featuring authentic reactions and product showcases",
        "Tagged Instagram co-author posts with direct WhatsApp / booking link-in-bio inclusion",
        "Full commercial ad usage rights granted to Buzzler to run as Meta ads",
        "High-resolution photographic asset archive for your website and social feed",
        "Post-campaign reach, verified comments, and direct message lead attribution analysis",
      ],
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Creator Selection & Roster",
      duration: "Days 1–5",
      description:
        "We identify 2 to 4 creators whose aesthetic, credibility, and follower demographics align precisely with your ideal customer profile.",
      output: "Vetted Creator Roster & Audience Analytics",
    },
    {
      step: "02",
      title: "Experience Brief & Shot List",
      duration: "Days 6–10",
      description:
        "We craft a detailed briefing document outlining mandatory shot angles, products or features to highlight, and clear promotional call-to-actions.",
      output: "Approved Brief & Mandatory Shot List",
    },
    {
      step: "03",
      title: "On-Site Shoot & Experience",
      duration: "Shoot Day",
      description:
        "The creator visits your venue, experiences your service, and captures engaging, genuine footage under our strategic supervision.",
      output: "Raw Content Review & Approval",
    },
    {
      step: "04",
      title: "Publishing & Ad Whitelisting",
      duration: "Post-Shoot",
      description:
        "Content goes live with strategic tagging. Top-performing reels are converted directly into targeted Meta advertising campaigns.",
      output: "Live Posts, Ad Amplification & Final ROI Report",
    },
  ],
  calculatorOptions: {
    label: "Explore Creator Collaboration Models",
    options: [
      {
        id: "solo-spotlight",
        title: "Single Creator Spotlight",
        metric: "1 Verified Creator",
        detail:
          "Single dedicated creator visit yielding 2 collaborative reels, 10+ stories, and high-res photo assets with full commercial rights.",
      },
      {
        id: "creator-duo",
        title: "Creator Duo Campaign",
        metric: "2 Curated Creators",
        detail:
          "Two creators with complementary audiences (e.g., foodie + lifestyle or fitness athlete + youth creator) for cross-pollinated reach.",
      },
      {
        id: "seasonal-squad",
        title: "Festival / Launch Creator Expedition",
        metric: "3-4 Creators Ahead of Key Season",
        detail:
          "Coordinated creator squad ahead of Rath Yatra, Durga Puja, college admissions, or gym New Year drives to create undeniable regional hype.",
      },
    ],
  },
  faqs: [
    {
      question: "Do we have to pay creators cash, or is it barter?",
      answer:
        "Top-tier creators with authentic, high-converting audiences usually require a modest production fee alongside complimentary product or service experience. Micro-creators may work on barter if the experience is premium. We negotiate the best arrangement for your ROI.",
    },
    {
      question: "Can we use their videos on our own social channels and paid ads?",
      answer:
        "Yes! Every contract Buzzler negotiates includes commercial advertising usage rights, so you can re-use their reels on your own Instagram feed, website, and Meta ad campaigns.",
    },
    {
      question: "How do you verify an influencer isn't using fake followers?",
      answer:
        "We analyze third-party audience data: follower geography (ensuring majority are in Odisha, West Bengal, and neighboring states), engagement authenticity ratio, comment quality, and past campaign performance.",
    },
    {
      question: "Can we review and approve their reels before they are posted?",
      answer:
        "Yes. Creators submit their draft reels for brand review prior to publication to ensure factual accuracy regarding your pricing, offerings, and policies.",
    },
    {
      question: "What if a creator posts an unaligned review?",
      answer:
        "Our structured experience brief and on-site guidance ensure expectations are fully aligned before they shoot, protecting your brand reputation.",
    },
  ],
  relatedServices: [
    {
      title: "Social Media Video",
      slug: "/services/video",
      blurb: "Complement creator footage with our own 4K drone and cinema-grade brand reels.",
    },
    {
      title: "Meta & Google Ads",
      slug: "/services/ads",
      blurb: "Turn viral influencer reels into high-converting paid ads targeting local customers.",
    },
    {
      title: "Branding & Identity",
      slug: "/services/branding",
      blurb: "Ensure your physical venue touchpoints and aesthetics match the influencer hype.",
    },
  ],
};

export default function InfluencerServicePage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141413] flex flex-col justify-between">
      <Navbar />
      <ServiceDetailView service={influencerServiceData} />
      <Footer />
    </main>
  );
}
