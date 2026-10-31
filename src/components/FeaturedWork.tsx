"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Play,
  Film,
  MapPin,
  Compass,
  CheckCircle2,
  ExternalLink,
  Layers,
  Info,
  UtensilsCrossed,
  Dumbbell,
  GraduationCap,
  Building2,
} from "lucide-react";

interface ProjectDemo {
  id: string;
  badge: string;
  industryTag: string;
  title: string;
  propertyType: string;
  location: string;
  servicesProvided: string[];
  conceptObjective: string;
  creativeExecution: string;
  sampleReelTitle: string;
  deliverablesList: string[];
  gradientTheme: string;
}

const projects: ProjectDemo[] = [
  {
    id: "coastal-bean",
    badge: "Concept Demo • Cafe & Restaurant",
    industryTag: "Food & Dining",
    title: "The Coastal Bean Cafe & Roastery",
    propertyType: "Artisanal Beachside Cafe & Roastery",
    location: "VIP Road / Sea Beach, Puri",
    servicesProvided: ["4K Sizzling Food Reels", "Local Foodie Influencer Collabs", "Weekend Footfall Meta Ads"],
    conceptObjective:
      "Transform an artisanal beachside cafe into the #1 youth and tourist hotspot in Puri, driving packed weekend table queues and consistent weekday laptop-work diners.",
    creativeExecution:
      "High-contrast, macro food cinematography featuring sizzling seafood platters, steaming artisanal pour-overs, and cheesy pizza pulls, paired with trending audio and weekend date-night angles.",
    sampleReelTitle: "Fresh Catch to Pour-Over: The Ultimate Beach Cafe Experience",
    deliverablesList: [
      "8x 4K Master Vertical Food & Ambience Reels",
      "Invited 3 Local Food Influencers from Puri & Bhubaneswar",
      "Radius-Fenced Meta Ads Driving WhatsApp Table Bookings",
      "Google Business Profile Optimization for 'Best Cafe in Puri'",
    ],
    gradientTheme: "from-orange-600 via-amber-600 to-stone-900",
  },
  {
    id: "ironpulse-fitness",
    badge: "Concept Demo • Gym & Fitness",
    industryTag: "Health & Fitness",
    title: "IronPulse Strength & CrossFit Club",
    propertyType: "Premium 5,000 sq.ft Strength & Conditioning Facility",
    location: "Grand Road / College Square, Puri",
    servicesProvided: ["Cinematic Workout Reels", "Transformation Interviews", "Free 3-Day Pass Meta Funnel"],
    conceptObjective:
      "Position IronPulse as the most elite training facility in Puri, filling early morning and evening batches with serious fitness enthusiasts and college youth.",
    creativeExecution:
      "High-octane workout cinematography featuring heavy deadlifts, kettlebell swings, and emotional member transformation stories with a frictionless 'Claim Free 3-Day Pass on WhatsApp' CTA.",
    sampleReelTitle: "Heavy Metal & Hard Work: The IronPulse Transformation",
    deliverablesList: [
      "6x High-Energy Vertical Training Reels",
      "Cinematic Before/After Member Video Testimonials",
      "Hyper-Local Meta Ad Campaign Targeting 18-35 Age Group",
      "Automated WhatsApp Greeting for Instant Trial Pass Delivery",
    ],
    gradientTheme: "from-red-600 via-stone-800 to-stone-950",
  },
  {
    id: "heritage-academy",
    badge: "Concept Demo • School & College",
    industryTag: "Education & Academics",
    title: "Heritage International Academy & College",
    propertyType: "CBSE Affiliated Senior Secondary & Junior College",
    location: "Puri-Bhubaneswar Highway Corridor",
    servicesProvided: ["Campus Drone Film", "Admissions Lead Funnel", "Parent Testimonial Series"],
    conceptObjective:
      "Establish the institution as the premier choice for holistic academic excellence in coastal Odisha, driving over 400 verified parent admission inquiries ahead of the new academic session.",
    creativeExecution:
      "Inspiring campus drone flyovers showing modern STEM labs, sports complexes, and arts studios, coupled with authentic interviews with teachers, top rankers, and proud parents.",
    sampleReelTitle: "Where Curiosity Meets Excellence: Welcome to Heritage Academy",
    deliverablesList: [
      "Master 4K Campus Drone Tour & Facility Showcase Film",
      "Google Search Ads targeting 'Best CBSE School near Puri & Bhubaneswar'",
      "Multi-Lingual Parent Testimonials (Odia, English & Hindi)",
      "WhatsApp & Direct Calling Lead Capture Funnel for Admissions Office",
    ],
    gradientTheme: "from-blue-700 via-indigo-900 to-stone-950",
  },
  {
    id: "bay-breeze",
    badge: "Concept Demo • Hotel & Resort",
    industryTag: "Hospitality & Stays",
    title: "Bay Breeze Grand Resort & Spa",
    propertyType: "54-Key Luxury Oceanfront Beach Resort",
    location: "Marine Drive, Golden Beach, Puri",
    servicesProvided: ["Cinematic Drone 4K", "Direct Booking Meta Funnel", "Kolkata Weekend Angle"],
    conceptObjective:
      "Position the resort as the premier weekend getaway destination for affluent Kolkata and Bhubaneswar travelers looking for private ocean-view balconies and sunset beach dining.",
    creativeExecution:
      "A 6-part vertical video series capturing golden hour waves, chef's fresh seafood catch, and luxury bathroom amenities, paired with localized Bengali & English ad copy.",
    sampleReelTitle: "Golden Beach Sunrise to Candlelight Ocean Dining",
    deliverablesList: [
      "6x 4K Master Vertical Reels (Color-graded for Instagram)",
      "Drone Aerial Ocean Permitted Footage Package",
      "Kolkata & Ranchi Geo-Fenced Meta Direct WhatsApp Ad Sets",
      "22% Commission Reduction Strategy Bypassing OTAs",
    ],
    gradientTheme: "from-amber-600 via-orange-500 to-amber-900",
  },
];

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);

  return (
    <section id="work" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Honest Disclosure */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              Multi-Industry Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
              Concept campaigns engineered for real business growth.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              To maintain 100% integrity, the case studies below are comprehensive concept & pilot demonstrations illustrating our creative direction, shot lists, and campaign setups across cafes, gyms, colleges, and hotels.
            </p>

            {/* Transparent Notice Pill */}
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-100/70 border border-amber-300/60 text-xs text-amber-950 font-medium">
              <Info className="w-4 h-4 text-amber-800 shrink-0" />
              <span>
                <strong>Transparency Note:</strong> As per Buzzler's ethics policy, client names and statistics are not fabricated. Live client case studies will publish following their scheduled campaign run.
              </span>
            </div>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-black bg-amber-100/80 hover:bg-amber-200/80 px-4 py-2 rounded-full transition-colors shrink-0"
          >
            <span>View All Work & Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-stone-200">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeProject.id === proj.id
                  ? "bg-[#141413] text-white shadow-sm"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              <span className="text-stone-400 mr-1.5 font-normal">[{proj.industryTag}]</span>
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Featured Project Showcase Card (Clay-style tactile depth) */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Reel Stage Preview */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-stone-900 text-white flex flex-col justify-between relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${activeProject.gradientTheme} opacity-80 -z-10`}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)] -z-10" />

              {/* Top Meta info */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[11px] uppercase tracking-wider font-bold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-amber-300">
                  {activeProject.badge}
                </span>
                <span className="text-xs text-stone-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {activeProject.location.split(",")[0]}
                </span>
              </div>

              {/* Center Simulated Video Slate */}
              <div className="my-12 flex flex-col items-center text-center z-10">
                <div
                  onClick={() => setPreviewModalOpen(true)}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:scale-110 hover:bg-[#F59E0B] hover:text-black transition-all cursor-pointer shadow-xl text-white group"
                >
                  <Play className="w-7 h-7 ml-1 fill-current" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-wider font-semibold text-stone-300">
                  Concept Reel Storyboard
                </p>
                <h4 className="mt-1 text-base sm:text-lg font-bold text-white max-w-xs font-serif">
                  “{activeProject.sampleReelTitle}”
                </h4>
              </div>

              {/* Bottom Visual Highlights */}
              <div className="space-y-2 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 z-10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-semibold">Production Specs:</span>
                  <span className="text-stone-300">4K HDR • 9:16 Vertical</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeProject.servicesProvided.map((service, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-white/15 px-2 py-0.5 rounded text-stone-200 font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategic Details & Deliverables */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                    <Compass className="w-3.5 h-3.5 text-amber-600" />
                    <span>{activeProject.propertyType}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs text-stone-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    {activeProject.location}
                  </p>
                </div>

                {/* Concept Objective */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-1">
                    Strategic Objective
                  </span>
                  <p className="text-sm text-stone-800 leading-relaxed font-medium">
                    {activeProject.conceptObjective}
                  </p>
                </div>

                {/* Creative Execution */}
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-1.5">
                    Creative & Video Approach
                  </span>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {activeProject.creativeExecution}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-2.5">
                    Package Deliverables Breakdown:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.deliverablesList.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-stone-800 bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-8 mt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-amber-700 transition-colors"
                >
                  <span>Explore All Case Studies</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={`/contact?projectRef=${activeProject.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-colors shadow-sm"
                >
                  <span>Build A Campaign Like This</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Video Preview Modal (Interactive affordance) */}
        {previewModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-stone-900 border border-stone-700 rounded-3xl max-w-md w-full p-6 text-white text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <Film className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold font-serif text-white">
                {activeProject.title}
              </h4>
              <p className="text-xs text-stone-300">
                This storyboard demonstrates our multi-stage camera movements designed to hold viewer retention on Instagram.
              </p>
              <div className="p-4 rounded-xl bg-black/60 border border-stone-800 text-left text-xs space-y-2">
                <div className="flex justify-between text-stone-400">
                  <span>Shot 1 (0:00 - 0:02):</span>
                  <span className="text-amber-400">High-Impact Visual Hook</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Shot 2 (0:02 - 0:05):</span>
                  <span className="text-amber-400">Facility / Product Sensory Detail</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Shot 3 (0:05 - 0:08):</span>
                  <span className="text-amber-400">Customer Emotion & Experience</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Shot 4 (0:08 - 0:12):</span>
                  <span className="text-amber-400">Direct WhatsApp / Call CTA</span>
                </div>
              </div>
              <button
                onClick={() => setPreviewModalOpen(false)}
                className="w-full py-2.5 rounded-full bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
