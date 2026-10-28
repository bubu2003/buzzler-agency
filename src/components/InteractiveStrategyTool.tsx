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
} from "lucide-react";

export default function InteractiveStrategyTool() {
  const [propertyType, setPropertyType] = useState<"beach" | "heritage" | "homestay" | "business">("beach");
  const [primaryGoal, setPrimaryGoal] = useState<"direct" | "midweek" | "brand">("direct");
  const [roomTier, setRoomTier] = useState<"small" | "medium" | "large">("medium");

  // Dynamic blueprint computation
  const getStrategy = () => {
    switch (propertyType) {
      case "beach":
        return {
          title: "Beachfront Ocean Romance & Family Funnel",
          reelsCount: roomTier === "large" ? "8 Reels / Mo" : "5 Reels / Mo",
          contentFocus: "Sunrise ocean flyovers, candlelit seafood beach dining, sea-view balcony breakfast.",
          adAngles: "Geofenced to Kolkata (Salt Lake, New Town), Ranchi & Bhubaneswar. Target: High-income families & couples.",
          influencerPlan: "1 lifestyle couple travel creator per quarter with complete ad usage rights.",
          whatsappAngle: "Direct 'Check Sea-View Room Availability' Click-to-WhatsApp ad.",
        };
      case "heritage":
        return {
          title: "Sacred Temple Hospitality & Heritage Suites",
          reelsCount: roomTier === "large" ? "6 Reels / Mo" : "4 Reels / Mo",
          contentFocus: "Morning courtyard chants, authentic Chhappan Bhog / Mahaprasad dining, easy temple access.",
          adAngles: "Targeted to West Bengal, Bihar, UP, and coastal Odisha. High-intent Google Search for family pilgrimage stays.",
          influencerPlan: "Cultural & food vlogger collaboration highlighting authenticity & elderly parent comfort.",
          whatsappAngle: "Pre-arrival VIP Darshan assistance & family suite reservation concierge.",
        };
      case "homestay":
        return {
          title: "Charming Boutique Escape & Slow Travel",
          reelsCount: "4 Reels / Mo",
          contentFocus: "Quiet green garden spaces, local home-cooked seafood, pet-friendly coastal walks.",
          adAngles: "Interest targeting: Work-from-beach, digital nomads, couples looking for offbeat Puri & Chilika.",
          influencerPlan: "Solo travel & photography creators focusing on peaceful aesthetics.",
          whatsappAngle: "Direct personalized host greeting via WhatsApp.",
        };
      case "business":
        return {
          title: "Bhubaneswar-Puri Corporate & Event Funnel",
          reelsCount: "4 Reels / Mo",
          contentFocus: "Banquet spaces, high-speed Wi-Fi, conference amenities, group catering.",
          adAngles: "LinkedIn & Meta ads targeted to event planners & corporate heads in Odisha & West Bengal.",
          influencerPlan: "Business lifestyle coverage for corporate retreats.",
          whatsappAngle: "Corporate group discount quote calculator.",
        };
    }
  };

  const strategy = getStrategy();

  return (
    <section id="blueprint" className="py-24 bg-[#FAF7F2] border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sliders className="w-3.5 h-3.5 text-[#F59E0B]" />
            Tactile Strategy Tool
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
            Interactive Hotel Growth Blueprint
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Select your hotel profile below to instantly preview the optimal video volume, advertising geo-targets, and creator strategy recommended by Buzzler.
          </p>
        </div>

        {/* Tactile Control Panel & Live Strategy Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Clay-style selectors) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            {/* Step 1: Property Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "beach", label: "Beach Resort", emoji: "🏖️" },
                  { id: "heritage", label: "Heritage / Temple", emoji: "🛕" },
                  { id: "homestay", label: "Boutique / Villa", emoji: "🌿" },
                  { id: "business", label: "City & Business", emoji: "💼" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPropertyType(item.id as any)}
                    className={`p-3 rounded-2xl text-left border text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                      propertyType === item.id
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
                2. Primary Goal
              </label>
              <div className="space-y-1.5">
                {[
                  { id: "direct", label: "Reduce OTA Fees (Direct Bookings)" },
                  { id: "midweek", label: "Fill Mid-Week Vacancies" },
                  { id: "brand", label: "Elevate Brand & Nightly Rates" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPrimaryGoal(item.id as any)}
                    className={`w-full p-2.5 rounded-xl text-left border text-xs font-medium transition-all ${
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

            {/* Step 3: Room Inventory */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                3. Room Inventory
              </label>
              <div className="flex gap-2">
                {[
                  { id: "small", label: "Under 20 Rooms" },
                  { id: "medium", label: "20 - 50 Rooms" },
                  { id: "large", label: "50+ Rooms" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRoomTier(item.id as any)}
                    className={`flex-1 py-2 rounded-xl text-center border text-xs font-medium transition-all ${
                      roomTier === item.id
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
              Strategy computed locally for Puri, Odisha tourism metrics.
            </div>
          </div>

          {/* Strategy Blueprint Result Card */}
          <div className="lg:col-span-7 bg-[#141413] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
            {/* Ambient amber glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="text-[11px] uppercase font-bold tracking-wider text-amber-400 bg-amber-950/70 border border-amber-800/80 px-3 py-1 rounded-full">
                  Customized Blueprint
                </span>
                <span className="text-xs text-stone-400">
                  Target Market: Puri & Eastern India
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif text-[#FAF7F2]">
                  {strategy.title}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Blueprint tailored for {roomTier === "large" ? "large scale" : "boutique"} hospitality operations.
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
                    <Target className="w-3.5 h-3.5" /> Ad Channels & Geo-Audience
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {strategy.adAngles}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold mb-1">
                    <Users className="w-3.5 h-3.5" /> Influencer & Creator Blueprint
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {strategy.influencerPlan}
                  </p>
                </div>
              </div>

              {/* Blueprint CTA */}
              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-400 text-center sm:text-left">
                  Ready to deploy this exact roadmap for your hotel?
                </div>
                <Link
                  href={`#quote?blueprint=${propertyType}&rooms=${roomTier}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F59E0B] text-black text-xs font-bold hover:bg-amber-400 transition-colors shadow-md"
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
