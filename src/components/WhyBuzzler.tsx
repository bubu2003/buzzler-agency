"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Video,
  Languages,
  ShieldCheck,
  TrendingDown,
  Sparkles,
  ArrowUpRight,
  SunMedium,
  CheckCircle,
} from "lucide-react";

const pillars = [
  {
    icon: MapPin,
    title: "We Live and Breathe Puri & Odisha",
    subtitle: "Local Market Mastery",
    description:
      "Unlike remote metro agencies, we are right here on the ground. We understand local student admission cycles, weekend dining surges from Bhubaneswar, festival footfall peaks, and holiday tourist behaviors.",
    points: [
      "On-site filming within 24-48 hours across Puri, Konark & Bhubaneswar",
      "In-depth knowledge of local consumer psychology and spending habits",
      "Campaign calendar timed precisely to regional festivals & holiday surges",
    ],
  },
  {
    icon: Video,
    title: "Video-First Creative Craft",
    subtitle: "Emotional Visual Storytelling",
    description:
      "People don't read dry brochures or boring static posters anymore. We produce cinematic 4K vertical reels, high-energy gym cinematics, drone campus tours, and food sizzlers that generate immediate customer action.",
    points: [
      "Dedicated cinema cameras, fast primes & licensed drone pilots",
      "Sound design synchronized with trending audio algorithms",
      "Vertical video crafted specifically for Instagram Reels & YouTube Shorts",
    ],
  },
  {
    icon: Languages,
    title: "Four-Language Fluency",
    subtitle: "Odia • Bengali • Hindi • English",
    description:
      "Odisha's audience is multi-lingual and culturally nuanced. From local Odia youth and visiting Bengali tourists to North Indian pilgrims and corporate leaders, we write messaging that connects authentically.",
    points: [
      "Localized ad copy that sounds native, not robotic machine translation",
      "Culturally sensitive creative honoring local traditions and youth trends",
      "Multi-lingual video voiceovers, subtitles, and social captions",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Honest, Measurable ROI",
    subtitle: "Real Leads & Footfall, Not Bot Views",
    description:
      "We judge our success by one metric: your bottom-line business growth. Verified phone calls, direct WhatsApp leads, table reservations, gym memberships, and student enrollment inquiries.",
    points: [
      "Transparent monthly reporting of ad spend and cost-per-lead",
      "Direct Click-to-WhatsApp conversion tracking",
      "Zero inflated bot followers, fake reviews, or vanity metrics",
    ],
  },
];

export default function WhyBuzzler() {
  return (
    <section id="why-buzzler" className="py-24 bg-white border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-900 border border-amber-300/60 text-xs font-semibold uppercase tracking-wider mb-4">
            <SunMedium className="w-3.5 h-3.5 text-[#F59E0B]" />
            The Buzzler Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
            Built in Puri. Driven by real business growth.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Generic digital agencies treat every business the same with cookie-cutter posts. Here is why ambitious cafes, gyms, colleges, and hotels in Puri and Odisha partner with Buzzler to scale.
          </p>
        </div>

        {/* 4 Pillars Grid (Clay-style tactile rounded cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-[#FAF7F2] rounded-3xl p-8 border border-stone-200 hover:border-stone-400/80 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-stone-900 shadow-2xs">
                      <Icon className="w-6 h-6 text-[#141413]" />
                    </div>
                    <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 font-serif mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-stone-200/80">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-stone-800 font-medium">
                        <CheckCircle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multi-Industry Callout Strip */}
        <div className="mt-16 bg-[#141413] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Puri & Odisha Business Insight
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                Is your brand ready to outshine local competitors?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Whether you're gearing up for weekend cafe rushes, the college admission season, summer gym fitness batches, or tourist holiday surges, Buzzler builds the engine that puts you ahead.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F59E0B] text-black text-sm font-bold hover:bg-amber-400 transition-all shrink-0 shadow-md cursor-pointer"
            >
              <span>Schedule A Free Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
