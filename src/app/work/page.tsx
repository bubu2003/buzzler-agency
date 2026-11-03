"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ArrowUpRight,
  MapPin,
  Building2,
  Film,
  CheckCircle2,
  Info,
  ArrowLeft,
  Filter,
} from "lucide-react";

interface ProjectItem {
  id: string;
  slug: string;
  badge: string;
  serviceCategory: string;
  propertyCategory: string;
  title: string;
  propertyType: string;
  location: string;
  summary: string;
  deliverables: string[];
  gradientTheme: string;
  isVerified?: boolean;
  instagramUrl?: string;
  instagramHandle?: string;
}

const allProjects: ProjectItem[] = [
  {
    id: "shreedham-township",
    slug: "/work/shreedham-township",
    badge: "✨ Verified Client Work",
    serviceCategory: "video",
    propertyCategory: "realestate",
    title: "Shreedham Township Puri",
    propertyType: "Premium Gated Plotted Township & Land",
    location: "Puri Coastal Corridor, Odisha",
    summary:
      "5 master vertical Instagram reels produced in Odia & Hindi, combining viral local hooks ('Rate sunile shock heijibe') with middle-class investment psychology and WhatsApp inquiry funnels.",
    deliverables: [
      "5x 4K Master Vertical Instagram Reels",
      "Multilingual Odia & Hindi Scriptwriting & Voiceovers",
      "High-Retention Storylines & Regret Angles",
      "Instagram Video Distribution & WhatsApp Lead Funnel",
    ],
    gradientTheme: "from-amber-600 via-stone-900 to-stone-950",
    isVerified: true,
    instagramUrl: "https://www.instagram.com/shreedhamtownship/?hl=en",
    instagramHandle: "@shreedhamtownship",
  },
  {
    id: "coastal-bean",
    slug: "/#work",
    badge: "Strategic Blueprint",
    serviceCategory: "video",
    propertyCategory: "cafe",
    title: "The Coastal Bean Cafe & Roastery",
    propertyType: "Artisanal Beachside Cafe & Roastery",
    location: "VIP Road / Sea Beach, Puri",
    summary:
      "High-contrast sizzling food reels, artisanal pour-over macro cinematography, and weekend footfall Meta ads driving packed dining tables.",
    deliverables: ["8x 4K Master Vertical Reels", "Local Foodie Creator Collabs", "Weekend Footfall Meta Ads", "WhatsApp Table Booking Hook"],
    gradientTheme: "from-orange-600 via-amber-600 to-stone-900",
  },
  {
    id: "ironpulse-fitness",
    slug: "/#work",
    badge: "Strategic Blueprint",
    serviceCategory: "ads",
    propertyCategory: "gym",
    title: "IronPulse Strength & CrossFit Club",
    propertyType: "5,000 sq.ft Strength & Conditioning Facility",
    location: "Grand Road / College Square, Puri",
    summary:
      "High-octane workout cinematography, member transformation stories, and a hyper-local Meta ad funnel delivering instant 3-day WhatsApp trial passes.",
    deliverables: ["6x High-Energy Vertical Reels", "Member Transformation Interviews", "Hyper-Local Meta Ad Campaign", "Instant Trial Pass Bot"],
    gradientTheme: "from-red-600 via-stone-800 to-stone-950",
  },
  {
    id: "heritage-academy",
    slug: "/#work",
    badge: "Strategic Blueprint",
    serviceCategory: "video",
    propertyCategory: "education",
    title: "Heritage International Academy & College",
    propertyType: "Senior Secondary & Junior College",
    location: "Puri-Bhubaneswar Highway Corridor",
    summary:
      "Campus drone flyovers, STEM lab showcases, and parent testimonial reels coupled with Google search ads driving 400+ admission inquiries.",
    deliverables: ["Master 4K Campus Drone Tour", "Google Search Admission Ads", "Multi-Lingual Parent Testimonials", "Direct Admissions Desk Hook"],
    gradientTheme: "from-blue-700 via-indigo-900 to-stone-950",
  },
  {
    id: "bay-breeze",
    slug: "/work/bay-breeze-resort",
    badge: "Hospitality Framework",
    serviceCategory: "video",
    propertyCategory: "resort",
    title: "Bay Breeze Grand Resort & Spa",
    propertyType: "54-Key Luxury Oceanfront Resort",
    location: "Marine Drive, Golden Beach, Puri",
    summary:
      "4K drone ocean flyovers and Kolkata-geofenced Meta booking ads designed to capture weekend family getaways and slash OTA commissions.",
    deliverables: ["6x 4K Master Reels", "Licensed Drone Ocean Passes", "Meta Booking Funnel", "WhatsApp Concierge Hook"],
    gradientTheme: "from-amber-600 via-orange-500 to-amber-900",
  },
  {
    id: "jagannath-haveli",
    slug: "/work/jagannath-heritage-haveli",
    badge: "Heritage Brand Framework",
    serviceCategory: "branding",
    propertyCategory: "resort",
    title: "Jagannath Heritage Haveli",
    propertyType: "Boutique 28-Room Heritage Stay",
    location: "Grand Road / Swargadwar, Puri",
    summary:
      "Comprehensive cultural brand identity, in-room pilgrim guidebooks, and multi-lingual reels (Odia, Bengali, Hindi) for family travelers.",
    deliverables: ["Brand Identity Suite", "In-Room Pilgrim Book", "4x Multi-Lingual Reels", "Family Suite Funnel"],
    gradientTheme: "from-stone-900 via-amber-800 to-stone-950",
  },
  {
    id: "chilika-retreat",
    slug: "/work/chilika-eco-retreat",
    badge: "Eco-Tourism Framework",
    serviceCategory: "influencer",
    propertyCategory: "resort",
    title: "Chilika Lagoon Eco-Retreat",
    propertyType: "18 Waterfront Cottages & Glamping",
    location: "Coastal Puri District, Satapada Road",
    summary:
      "Exclusive creator expedition yielding viral reels of Irrawaddy dolphins and migratory bird trails, backed by high-intent Google Search capture.",
    deliverables: ["4x Travel Creator Collabs", "Google Search Ads Setup", "Commercial Content Archive", "Direct Safari Bookings"],
    gradientTheme: "from-teal-800 via-emerald-700 to-stone-900",
  },
];

export default function WorkHubPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredProjects =
    selectedFilter === "all"
      ? allProjects
      : allProjects.filter(
          (p) => p.serviceCategory === selectedFilter || p.propertyCategory === selectedFilter
        );

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141413] flex flex-col justify-between">
      <Navbar />

      <section className="pt-32 pb-24 bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-medium">
            <Link href="/" className="hover:text-black transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">Featured Work</span>
          </nav>

          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              Proven Work & Industry Blueprints
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] font-serif leading-[1.12] mb-6">
              Client work & growth campaigns engineered for Odisha brands.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Explore our live client deliverables—including 5 master vertical reels produced for Shreedham Township, Puri—alongside specialized growth playbooks crafted for local hospitality, dining, and fitness businesses.
            </p>

            {/* Production Notice Pill */}
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-100/80 border border-amber-300 text-xs text-amber-950 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                <strong>Verified Production:</strong> Shreedham Township is an active client campaign in Puri with 5 live multilingual Instagram Reels.
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-stone-200">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {[
              { id: "all", label: "All Work" },
              { id: "realestate", label: "Real Estate & Land" },
              { id: "cafe", label: "Cafes & Dining" },
              { id: "gym", label: "Gyms & Fitness" },
              { id: "education", label: "Schools & Colleges" },
              { id: "resort", label: "Hotels & Resorts" },
              { id: "video", label: "Video & Reels" },
              { id: "ads", label: "Meta & Google Ads" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? "bg-[#141413] text-white shadow-xs"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid (Clay-style tactile cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                  project.isVerified
                    ? "border-amber-400 ring-2 ring-amber-400/20"
                    : "border-stone-200 hover:border-amber-400"
                }`}
              >
                {/* Visual Header Slate */}
                <div className={`p-6 sm:p-8 bg-stone-900 text-white relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientTheme} opacity-80`} />
                  <div className="relative z-10 flex items-center justify-between text-xs mb-8">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-300 border border-white/10">
                      {project.badge}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                        project.isVerified
                          ? "bg-amber-400 text-black font-bold"
                          : "text-stone-300 bg-black/40"
                      }`}
                    >
                      {project.isVerified ? "✨ LIVE CLIENT" : "STRATEGY PLAYBOOK"}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-stone-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div className="space-y-4">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md inline-block font-semibold">
                      {project.propertyType}
                    </span>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-stone-100">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block mb-1">
                        Key Deliverables:
                      </span>
                      {project.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-500">
                      {project.isVerified ? "View 5 Live Reels & Case Study" : "View Strategy Blueprint"}
                    </span>
                    <Link
                      href={project.slug}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-stone-100 group-hover:bg-[#141413] group-hover:text-white text-xs font-bold transition-all"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
