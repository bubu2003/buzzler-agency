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

const allProjects = [
  {
    id: "bay-breeze",
    slug: "/work/bay-breeze-resort",
    badge: "Beachfront Luxury",
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
    badge: "Heritage Pilgrimage",
    serviceCategory: "branding",
    propertyCategory: "heritage",
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
    badge: "Eco-Tourism & Nature",
    serviceCategory: "influencer",
    propertyCategory: "eco",
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
              Portfolio & Case Studies
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] font-serif leading-[1.12] mb-6">
              Concept campaigns built for Puri hospitality.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Explore our documented case study roadmaps showing how Buzzler combines 4K drone cinematography, multi-lingual storytelling, and targeted ad funnels for coastal hotels.
            </p>

            {/* Ethics Transparency Pill */}
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-100/70 border border-amber-300/70 text-xs text-amber-950 font-medium">
              <Info className="w-4 h-4 text-amber-800 shrink-0" />
              <span>
                <strong>Client Ethics Policy:</strong> All projects below are comprehensive concept & pilot demonstrations. Verified live client case studies publish following active campaign completion.
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-stone-200">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {[
              { id: "all", label: "All Projects" },
              { id: "video", label: "Video Production" },
              { id: "branding", label: "Branding & Identity" },
              { id: "influencer", label: "Influencer Campaigns" },
              { id: "resort", label: "Beachfront Resorts" },
              { id: "heritage", label: "Heritage Havelis" },
              { id: "eco", label: "Eco-Tourism" },
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
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Header Slate */}
                <div className={`p-6 sm:p-8 bg-stone-900 text-white relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientTheme} opacity-80`} />
                  <div className="relative z-10 flex items-center justify-between text-xs mb-8">
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-amber-300 border border-white/10">
                      {project.badge}
                    </span>
                    <span className="text-stone-300 text-[11px] font-mono">
                      [CONCEPT DEMO]
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
                    <span className="text-[11px] uppercase font-bold tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md inline-block">
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
                      View Full Case Study
                    </span>
                    <Link
                      href={project.slug}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-colors"
                    >
                      <span>Read Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Founder Pilot Program Invitation Banner */}
          <div className="bg-[#141413] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Founder Pilot Cohort
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                Want your hotel to be our next documented case study?
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                We are onboarding our final pilot hotel partner in Puri. You receive comprehensive video production & ads setup at preferential introductory rates in exchange for documenting the booking results.
              </p>
            </div>

            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F59E0B] text-black text-xs sm:text-sm font-bold hover:bg-amber-400 transition-colors shrink-0 shadow-md"
            >
              <span>Apply for Pilot Program</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
