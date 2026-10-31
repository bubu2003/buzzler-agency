"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Play,
  Sparkles,
  MapPin,
  TrendingUp,
  Eye,
  MessageSquare,
  CheckCircle2,
  Volume2,
  Compass,
  UtensilsCrossed,
  Dumbbell,
  GraduationCap,
  Building2,
  Store,
} from "lucide-react";

export const industryPresets = [
  {
    id: "cafe",
    icon: UtensilsCrossed,
    label: "Cafe & Restaurant",
    categoryBadge: "F&B • Nightlife • Dining",
    businessName: "The Coastal Bean & Grill",
    location: "VIP Road & Sea Beach, Puri",
    hook: "Sizzling seafood sizzler reels & weekend coastal live-music food vlog collabs",
    views: "240K+ food lover views",
    reach: "Puri, Cuttack & Bhubaneswar youth/families",
    reelsHighlight: "Steam rising from claypot biryani + golden coffee latte art",
    primaryMetric: "+45% Weekend Table Footfall",
    monthlyDeliverable: "8x Sizzling 4K Food Reels + Local Foodie Collabs",
    bgGradient: "radial-gradient(circle at 50% 30%, #f97316 0%, #1c1917 80%)",
  },
  {
    id: "gym",
    icon: Dumbbell,
    label: "Gym & Fitness Studio",
    categoryBadge: "Health • Strength • CrossFit",
    businessName: "IronPulse Strength Club",
    location: "Grand Road / College Square, Puri",
    hook: "High-octane member transformation stories & free 3-day WhatsApp workout pass ads",
    views: "165K+ local fitness views",
    reach: "18-35 age group in Puri & surrounding colleges",
    reelsHighlight: "Heavy barbell deadlifts + sweat-drenched cinematic athlete spotlights",
    primaryMetric: "140+ Trial WhatsApp Leads / Mo",
    monthlyDeliverable: "6x High-Energy Reels + Meta Membership Ad Funnel",
    bgGradient: "radial-gradient(circle at 50% 30%, #ef4444 0%, #1c1917 80%)",
  },
  {
    id: "hotel",
    icon: Building2,
    label: "Hotel & Resort",
    categoryBadge: "Hospitality • Tourism • Stays",
    businessName: "Bay Breeze Ocean Resort",
    location: "Marine Drive & Golden Beach, Puri",
    hook: "Sunrise sea-view balcony reels & direct WhatsApp booking funnels bypassing OTAs",
    views: "195K+ travelers reached",
    reach: "Kolkata, Ranchi, Jamshedpur & Bhubaneswar",
    reelsHighlight: "Drone ocean flyover + candle-lit beachfront dinner setup",
    primaryMetric: "-25% OTA Commission Loss",
    monthlyDeliverable: "4K Drone Balcony Tours + Kolkata Weekend Ad Funnel",
    bgGradient: "radial-gradient(circle at 50% 30%, #f59e0b 0%, #1c1917 80%)",
  },
  {
    id: "college",
    icon: GraduationCap,
    label: "School & College",
    categoryBadge: "Education • Academics • Campus",
    businessName: "Heritage International Academy",
    location: "Puri-Bhubaneswar Highway Corridor",
    hook: "Drone campus tour, smart-lab highlights, and high-trust admission season parent ads",
    views: "310K+ parent & student views",
    reach: "Coastal Odisha, Khordha, Puri & Cuttack districts",
    reelsHighlight: "Robotics lab innovations + sports complex aerial drone tour",
    primaryMetric: "380+ Verified Admission Inquiries",
    monthlyDeliverable: "Campus Showcase Film + Google Search Admission Ads",
    bgGradient: "radial-gradient(circle at 50% 30%, #3b82f6 0%, #1c1917 80%)",
  },
];

export default function Hero() {
  const [activePreset, setActivePreset] = useState(industryPresets[0]);
  const [isPlayingReel, setIsPlayingReel] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-dot-pattern">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-amber-200/30 via-orange-100/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-400/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow badge with pixel bee detail */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/[0.04] border border-stone-300/80 mb-6 shadow-2xs hover:bg-stone-900/[0.07] transition-all">
            <span className="flex h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-800">
              Creative Growth Agency for Puri & Odisha Brands
            </span>
            <span className="text-stone-300">|</span>
            <span className="text-xs font-medium text-stone-600 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#F59E0B]" /> Puri, Odisha
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#141413] leading-[1.08] mb-6 font-serif">
            Make your brand the{" "}
            <span className="relative inline-block text-stone-900">
              buzz of Puri.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#F59E0B] opacity-80"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 9.5C65.5 3 185.5 2 297.5 7.5"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Concise supporting copy highlighting versatility */}
          <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mb-8 leading-relaxed font-normal">
            Video-first creative content, high-converting Meta & Google ads, and authentic local storytelling crafted for **cafes, restaurants, gyms, hotels, schools & colleges** across Puri and Odisha.
          </p>

          {/* Dual CTAs + WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#141413] text-[#FAF7F2] text-base font-semibold hover:bg-black transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-[#F59E0B]" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-stone-800 border border-stone-300 text-base font-semibold hover:bg-stone-50 transition-all shadow-2xs hover:-translate-y-0.5"
            >
              <span>Explore Our Work</span>
            </Link>

            <a
              href="https://wa.me/919437000000?text=Hi%20Buzzler,%20I'd%20like%20to%20know%20how%20you%20can%20help%20my%20business%20in%20Puri."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-sm font-semibold hover:bg-emerald-100 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Direct WhatsApp</span>
            </a>
          </div>

          {/* Credibility mini-strip */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-stone-500 font-medium pb-2 border-b border-stone-200/80">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
              Video-First Creative Direction
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
              On-Ground in Puri & Bhubaneswar
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
              Multi-Lingual (Odia • Bengali • Hindi • English)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
              Measurable Leads & Walk-In Traffic
            </span>
          </div>
        </div>

        {/* Hero Interactive Clay-Style Multi-Industry Simulator */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-stone-300/80 p-4 sm:p-6 shadow-xl relative overflow-hidden">
            {/* Top Bar of the Interactive Mockup with 4 Industry Switchers */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-stone-300" />
                <div className="w-3 h-3 rounded-full bg-stone-300" />
                <div className="w-3 h-3 rounded-full bg-stone-300" />
                <span className="ml-2 text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold">
                  Buzzler Reel & Growth Simulator
                </span>
              </div>

              {/* Industry selector buttons */}
              <div className="flex flex-wrap gap-1.5">
                {industryPresets.map((preset) => {
                  const Icon = preset.icon;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setActivePreset(preset)}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                        activePreset.id === preset.id
                          ? "bg-[#141413] text-white shadow-xs"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>{preset.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inner Interactive Showcase Grid */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Vertical Dynamic Reel Simulator */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 h-[390px] sm:w-72 sm:h-[430px] rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-900 bg-stone-900 text-white flex flex-col justify-between p-4 group">
                  {/* Background simulated gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-800 -z-10" />

                  {/* Video ambient glow */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700 -z-20"
                    style={{ backgroundImage: activePreset.bgGradient }}
                  />

                  {/* Reel Top Bar */}
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[11px] text-amber-300 border border-white/10">
                      <Sparkles className="w-3 h-3 text-[#F59E0B]" />
                      Buzzler 4K Reel
                    </span>
                    <button
                      onClick={() => setIsPlayingReel(!isPlayingReel)}
                      className="p-1 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white transition-colors cursor-pointer"
                      aria-label="Sound toggle"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Reel Center Action */}
                  <div
                    className="flex flex-col items-center justify-center my-auto cursor-pointer"
                    onClick={() => setIsPlayingReel(!isPlayingReel)}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F59E0B] group-hover:text-black transition-all shadow-lg text-white">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </div>
                    <span className="mt-3 text-xs font-semibold text-white/90 drop-shadow-sm">
                      {isPlayingReel ? "Playing Reel Preview..." : "Tap to Preview Creative Reel"}
                    </span>
                  </div>

                  {/* Reel Bottom Meta Overlay */}
                  <div className="space-y-2 text-left bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-400">@buzzler.odisha</span>
                      <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white">
                        {activePreset.categoryBadge}
                      </span>
                    </div>
                    <p className="text-xs text-white/90 font-medium line-clamp-2">
                      {activePreset.reelsHighlight}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-stone-300 pt-1 border-t border-white/10">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3 text-amber-400" />
                        {activePreset.views}
                      </span>
                      <span className="text-amber-300 font-semibold text-[10px]">
                        {activePreset.primaryMetric}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Strategic Growth Dashboard */}
              <div className="lg:col-span-7 text-left space-y-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-full">
                    <Compass className="w-3.5 h-3.5 text-amber-700" />
                    Strategy Profile: {activePreset.label}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                    How Buzzler attracts customers to {activePreset.businessName}
                  </h3>
                  <p className="text-sm text-stone-600">
                    Customized creative angles and local ad geotargeting tailored to the buyer journey in Puri, Bhubaneswar & coastal Odisha.
                  </p>
                </div>

                {/* Strategy Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-stone-500">
                      Content Hook Angle
                    </span>
                    <p className="text-sm font-semibold text-stone-900 mt-1">
                      {activePreset.hook}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-stone-500">
                      Ad Geotargeting & Audience
                    </span>
                    <p className="text-sm font-semibold text-stone-900 mt-1">
                      {activePreset.reach}
                    </p>
                  </div>
                </div>

                {/* Campaign Deliverables Checklist */}
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                  <span className="text-xs font-bold text-amber-950 uppercase tracking-wider block">
                    What Buzzler Deploys For {activePreset.label}s:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-800 font-medium">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{activePreset.monthlyDeliverable}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Meta & Google Local Ad Campaigns</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Local Influencer Collaborations</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Direct WhatsApp / Call Lead Tracking</span>
                    </div>
                  </div>
                </div>

                {/* Action button inside mockup */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    No lock-in contracts • Tailored quote per sector
                  </span>
                  <Link
                    href={`/contact?industry=${activePreset.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-[#141413] text-white hover:bg-black transition-colors"
                  >
                    <span>Request {activePreset.label} Strategy</span>
                    <ArrowUpRight className="w-3 h-3 text-[#F59E0B]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
