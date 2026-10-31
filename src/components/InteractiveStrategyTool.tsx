"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Sliders,
  ArrowRight,
  Video,
  Target,
  Users,
  Compass,
  CheckCircle2,
  Calendar,
  UtensilsCrossed,
  Dumbbell,
  Building2,
  GraduationCap,
  Store,
} from "lucide-react";

export default function InteractiveStrategyTool() {
  const [industryType, setIndustryType] = useState<"cafe" | "gym" | "hotel" | "college" | "retail">("cafe");
  const [primaryGoal, setPrimaryGoal] = useState<"footfall" | "leads" | "direct" | "brand">("footfall");
  const [businessScale, setBusinessScale] = useState<"starter" | "established" | "flagship">("established");

  // Dynamic blueprint computation across industries
  const getStrategy = () => {
    switch (industryType) {
      case "cafe":
        return {
          title: "Viral Culinary Footfall & Weekend Table Funnel",
          icon: UtensilsCrossed,
          reelsCount: businessScale === "flagship" ? "8-10 Reels / Mo" : "6 Reels / Mo",
          contentFocus: "Slow-motion food sizzles, cheese-pulls, cocktail pouring, chef specialties, and golden hour dining aesthetics.",
          adAngles: "Geofenced within 15km of Puri/Bhubaneswar targeting foodies, couples & college squads on Thursday-Saturday.",
          influencerPlan: "2 local food bloggers per month for menu tasting & viral reel audio synchronization.",
          whatsappAngle: "Direct 'Book a Table / View Menu' Click-to-WhatsApp ad funnel.",
        };
      case "gym":
        return {
          title: "High-Energy Member Acquisition & Transformation Funnel",
          icon: Dumbbell,
          reelsCount: businessScale === "flagship" ? "8 Reels / Mo" : "5 Reels / Mo",
          contentFocus: "Cinematic workout reels, trainer spotlights, member before/after transformations, and modern gym equipment tours.",
          adAngles: "Targeted to 18-35 age group in Puri and college campuses with 'Free 3-Day Workout Pass'.",
          influencerPlan: "Local fitness athletes & lifestyle creators documenting their training sessions.",
          whatsappAngle: "Instant 'Claim Free 3-Day Trial Pass' delivered directly to WhatsApp.",
        };
      case "hotel":
        return {
          title: "Beachfront Ocean Romance & Direct Booking Funnel",
          icon: Building2,
          reelsCount: businessScale === "flagship" ? "8 Reels / Mo" : "5 Reels / Mo",
          contentFocus: "Sunrise ocean flyovers, candlelit seafood beach dining, sea-view balcony breakfast & room tours.",
          adAngles: "Geofenced to Kolkata (Salt Lake, New Town), Ranchi & Bhubaneswar. Target: High-income families & couples.",
          influencerPlan: "1 lifestyle travel couple creator per quarter with complete commercial ad usage rights.",
          whatsappAngle: "Direct 'Check Sea-View Room Availability' Click-to-WhatsApp ad bypassing 25% OTA fees.",
        };
      case "college":
        return {
          title: "Campus Authority & High-Trust Admission Inflow",
          icon: GraduationCap,
          reelsCount: businessScale === "flagship" ? "8 Reels / Mo" : "4 Reels / Mo",
          contentFocus: "Drone campus tour, robotics/computer lab facilities, student project highlights, and faculty interviews.",
          adAngles: "High-intent Google Search ads ('best college in Odisha', 'CBSE school admission') + Meta parent targeting.",
          influencerPlan: "Notable alumni & academic voices sharing career success stories and campus experience.",
          whatsappAngle: "Direct 'Download Prospectus & Book Campus Visit' counselor WhatsApp connection.",
        };
      case "retail":
        return {
          title: "In-Store Footfall & Local Customer Review Funnel",
          icon: Store,
          reelsCount: businessScale === "flagship" ? "6 Reels / Mo" : "4 Reels / Mo",
          contentFocus: "New collection arrivals, bridal jewelry showcases, customer unboxings, and festive styling tips.",
          adAngles: "Local 10km radius ads targeting shoppers ahead of wedding season, Rath Yatra, Durga Puja, and festivals.",
          influencerPlan: "Regional fashion & lifestyle creators styling your products.",
          whatsappAngle: "Direct 'Check Price & Catalog via WhatsApp' chat link.",
        };
    }
  };

  const strategy = getStrategy();
  const StrategyIcon = strategy.icon;

  return (
    <section id="blueprint" className="py-24 bg-[#FAF7F2] border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sliders className="w-3.5 h-3.5 text-[#F59E0B]" />
            Tactile Growth Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
            Interactive Business Growth Blueprint
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Select your industry sector, growth goal, and business scale below to instantly preview the optimal video volume, advertising geo-targets, and creator strategy recommended by Buzzler.
          </p>
        </div>

        {/* Tactile Control Panel & Live Strategy Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Clay-style selectors) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            {/* Step 1: Industry Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                1. Select Your Business Sector
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "cafe", label: "Cafe / Restaurant", emoji: "☕" },
                  { id: "gym", label: "Gym / Fitness", emoji: "🏋️" },
                  { id: "hotel", label: "Hotel / Resort", emoji: "🏖️" },
                  { id: "college", label: "School / College", emoji: "🎓" },
                  { id: "retail", label: "Retail / Brand", emoji: "🛍️" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setIndustryType(item.id as any)}
                    className={`p-3 rounded-2xl text-left border text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      industryType === item.id
                        ? "border-[#141413] bg-[#141413] text-white shadow-xs"
                        : "border-stone-200 bg-[#FAF7F2] text-stone-700 hover:border-stone-400"
                    }`}
                  >
                    <span className="text-base">{item.emoji}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Primary Goal */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                2. Primary Growth Objective
              </label>
              <div className="space-y-1.5">
                {[
                  { id: "footfall", label: "Drive Walk-Ins & Table Footfall" },
                  { id: "leads", label: "Generate Qualified Leads (Members / Admissions)" },
                  { id: "direct", label: "Direct WhatsApp Inquiries (Cut Middlemen)" },
                  { id: "brand", label: "Elevate Brand Prestige & Premium Pricing" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPrimaryGoal(item.id as any)}
                    className={`w-full p-2.5 rounded-xl text-left border text-xs font-medium transition-all cursor-pointer ${
                      primaryGoal === item.id
                        ? "border-amber-500 bg-amber-50 text-amber-950 font-bold"
                        : "border-stone-200 hover:bg-stone-50 text-stone-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Business Scale */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                3. Business Scale
              </label>
              <div className="flex gap-2">
                {[
                  { id: "starter", label: "Boutique / Starter" },
                  { id: "established", label: "Established" },
                  { id: "flagship", label: "Flagship / Campus" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBusinessScale(item.id as any)}
                    className={`flex-1 py-2 rounded-xl text-center border text-xs font-medium transition-all cursor-pointer ${
                      businessScale === item.id
                        ? "bg-stone-900 text-white font-bold border-stone-900"
                        : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] text-stone-400 text-center">
              Strategy computed locally for Puri, Bhubaneswar & Odisha consumer trends.
            </div>
          </div>

          {/* Strategy Blueprint Result Card */}
          <div className="lg:col-span-7 bg-[#141413] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            {/* Ambient amber glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-400 bg-amber-950/70 border border-amber-800/80 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <StrategyIcon className="w-3.5 h-3.5" />
                  Customized Growth Blueprint
                </span>
                <span className="text-xs text-stone-400">
                  Target Market: Coastal Odisha
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif text-[#FAF7F2]">
                  {strategy.title}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Tailored execution roadmap for {businessScale} businesses in Puri & Odisha.
                </p>
              </div>

              {/* Dynamic Strategy Elements */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-bold mb-1">
                    <span className="flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5" /> Recommended Video Volume
                    </span>
                    <span className="bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">
                      {strategy.reelsCount}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {strategy.contentFocus}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold mb-1">
                    <Target className="w-3.5 h-3.5" /> Advertising Channels & Geotargeting
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {strategy.adAngles}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold mb-1">
                    <Users className="w-3.5 h-3.5" /> Creator & Influencer Strategy
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {strategy.influencerPlan}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/60">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-amber-300 block mb-1">
                    Conversion & Lead Hook:
                  </span>
                  <p className="text-xs text-stone-200">
                    {strategy.whatsappAngle}
                  </p>
                </div>
              </div>

              {/* Blueprint CTA */}
              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-400 text-center sm:text-left">
                  Ready to deploy this exact roadmap for your business?
                </div>
                <Link
                  href={`/contact?industry=${industryType}&goal=${primaryGoal}&scale=${businessScale}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F59E0B] text-black text-xs font-bold hover:bg-amber-400 transition-colors shadow-md cursor-pointer"
                >
                  <span>Apply This Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
