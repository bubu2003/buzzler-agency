import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailView, { ServiceDetailProps } from "@/components/ServiceDetailView";
import { Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospitality Influencer Marketing in Puri, Odisha | Buzzler Agency",
  description:
    "Curated travel, food, and lifestyle creators who deliver authentic hotel stay reviews, viral reels, and commercial ad licensing for Puri resorts.",
  keywords: [
    "influencer marketing for hotels Odisha",
    "travel influencers Puri",
    "hotel influencer marketing India",
    "resort staycation collaborations Puri",
    "hospitality creator campaigns Odisha"
  ],
};

const influencerServiceData: ServiceDetailProps = {
  slug: "/services/influencer-marketing",
  badge: "Influencer Marketing",
  h1Title: "Vetted Travel & Lifestyle Creator Campaigns for Puri Hotels",
  subtitle: "Hand-picked travel creators who produce authentic staycation vlogs, honest reviews, and commercial ad assets with real engagement.",
  heroBlurb:
    "Tired of unvetted influencers requesting free luxury stays while delivering zero bookings? Buzzler manages your creator partnerships end-to-end. We select verified travel storytellers from West Bengal and Odisha with genuine audiences, script structured experiential itineraries, and secure full commercial usage rights so you can run their viral videos as paid ads.",
  iconType: "influencer",
  targetAudience: [
    {
      tag: "Experience Showcase",
      title: "Resorts with Unique Amenities",
      description:
        "Infinity ocean pools, private cabanas, wellness spas, and curated seafood dining that creators naturally want to film and share.",
    },
    {
      tag: "Cultural Authority",
      title: "Heritage Hotels & Boutique Stays",
      description:
        "Creators who appreciate temple architecture, artisanal Odia textiles, and sacred Mahaprasad culinary traditions.",
    },
    {
      tag: "Nature & Eco-Tourism",
      title: "Coastal Retreats & Lagoon Camps",
      description:
        "Eco-travel vloggers and adventure photographers showcasing dolphin safaris, birdwatching trails, and pristine beach sunsets.",
    },
  ],
  theProblem: {
    painPoint: "90% of influencer barter stays produce zero direct hotel revenue.",
    explanation:
      "Hotels in Puri frequently host self-proclaimed creators who upload a couple of poorly lit stories with fake bot engagement, check out, and leave the hotel with zero business outcomes or usable assets.",
    buzzlerSolution:
      "We strictly vet creator demographics (demanding 60%+ audience concentration in Kolkata, Bhubaneswar, and Eastern India), enforce contractual shot lists, and secure whitelisting/licensing rights so their content fuels your direct booking ad campaigns for months.",
  },
  deliverables: [
    {
      category: "Creator Discovery & Contractual Vetting",
      items: [
        "Vetting creator audience authenticity (eliminating fake follower bots)",
        "Demographic matching targeting affluent families and millennial couples in West Bengal and Odisha",
        "Negotiation of commercial content rights, stay terms, and publishing schedules",
        "Comprehensive legal agreement protecting your property rules and brand standards",
        "Itinerary curation (welcome experience, dining highlight, sunrise shoot)",
      ],
    },
    {
      category: "Content Delivery & Commercial Licensing",
      items: [
        "High-retention 9:16 vertical reels featuring honest room tours and amenities",
        "Tagged Instagram co-author posts with direct booking link-in-bio inclusion",
        "Full commercial ad usage rights granted to Buzzler to run as Meta ads",
        "High-resolution photographic asset archive for your hotel website",
        "Post-campaign reach, engagement, and direct booking DM attribution analysis",
      ],
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Creator Selection & Roster",
      duration: "Days 1–5",
      description:
        "We identify 2 to 4 creators whose aesthetic and audience align precisely with your hotel's ideal guest profile.",
      output: "Vetted Creator Roster & Audience Analytics",
    },
    {
      step: "02",
      title: "Stay Itinerary & Briefing",
      duration: "Days 6–10",
      description:
        "We craft a detailed briefing document outlining mandatory shot angles, hotel amenities to feature, and key message points.",
      output: "Approved Itinerary & Mandatory Shot List",
    },
    {
      step: "03",
      title: "On-Site Stay & Content Capture",
      duration: "During Stay",
      description:
        "The creator visits your property, experiences your hospitality, and captures cinematic footage under our strategic brief.",
      output: "Raw Content Review & Approval",
    },
    {
      step: "04",
      title: "Publishing & Ad Whitelisting",
      duration: "Post-Stay",
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
        title: "Micro-Creator Staycation Push",
        metric: "1 Verified Travel Creator",
        detail: "Single weekend creator visit yielding 2 collaborative reels, 10+ stories, and high-res photo assets.",
      },
      {
        id: "creator-duo",
        title: "Blogger & Culinary Duo",
        metric: "2 Curated Creators (Travel + Food)",
        detail: "One creator highlights the resort rooms and ocean deck; the other showcases your restaurant and seafood specialties.",
      },
      {
        id: "seasonal-squad",
        title: "Festival Season Creator Expedition",
        metric: "3-4 Creators Ahead of Holiday Rush",
        detail: "Coordinated creator campaign 4 weeks before Rath Yatra or Durga Puja to create undeniable viral buzz in Kolkata and Bhubaneswar.",
      },
    ],
  },
  faqs: [
    {
      question: "Do we have to pay creators cash, or is it barter for a free room stay?",
      answer:
        "Top-tier travel creators with authentic, high-converting audiences usually require a modest production fee alongside complimentary room and board. Micro-creators may work on barter if the stay experience is premium. We negotiate the best possible arrangement based on expected return.",
    },
    {
      question: "Can we use their videos on our own social channels and paid ads?",
      answer:
        "Yes! Every contract Buzzler negotiates includes commercial advertising usage rights, so you can re-use their reels on your own Instagram feed, website, and Meta ad campaigns.",
    },
    {
      question: "How do you verify an influencer isn't using fake followers?",
      answer:
        "We analyze third-party audience data: follower location (ensuring majority are in West Bengal, Odisha, and neighboring states), engagement authenticity ratio, comment quality, and historical post performance.",
    },
    {
      question: "Can we review and approve their reels before they are posted?",
      answer:
        "Yes. Creators submit their draft reels for brand review prior to publication to ensure factual accuracy regarding your room rates, amenities, and policies.",
    },
    {
      question: "What if a creator posts a negative review?",
      answer:
        "Our structured itinerary and on-site briefing ensure expectations are aligned before they arrive. In the rare event of a service mishap, our on-site team resolves it immediately during their stay.",
    },
  ],
  relatedServices: [
    {
      title: "Social Media Video",
      slug: "/services/video",
      blurb: "Complement creator footage with our own 4K drone and cinema-grade property reels.",
    },
    {
      title: "Meta & Google Ads",
      slug: "/services/ads",
      blurb: "Turn viral influencer reels into high-converting paid ads targeting Kolkata travelers.",
    },
    {
      title: "Branding & Identity",
      slug: "/services/branding",
      blurb: "Ensure your guest touchpoints and photo corners match the influencer hype.",
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
