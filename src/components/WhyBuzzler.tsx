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
      "Unlike remote agencies, our team is right here in Odisha. We understand student admission cycles, weekend dining surges from Bhubaneswar, festival footfall peaks, and coastal tourist behaviors.",
    points: [
      "Dedicated on-ground video production across Puri, Bhubaneswar & coastal Odisha",
      "In-depth knowledge of local consumer psychology and purchasing habits",
      "Campaign calendar timed precisely to regional festivals & seasonal demand",
    ],
  },
  {
    icon: Video,
    title: "Video-First Creative Craft",
    subtitle: "Emotional Visual Storytelling",
    description:
      "Modern audiences engage with dynamic vertical video. We produce cinematic 4K vertical reels, high-energy gym cinematics, campus showcase tours, and food sizzlers that generate immediate customer action.",
    points: [
      "High-definition camera setups, stabilized gimbals & aerial drone footage",
      "Sound design synchronized with trending audio algorithms",
      "Vertical video crafted specifically for Instagram Reels & YouTube Shorts",
    ],
  },
  {
    icon: Languages,
    title: "Multilingual Fluency",
    subtitle: "Odia • Bengali • Hindi • English",
    description:
      "Odisha's audience is multilingual and culturally nuanced. From local Odia youth and visiting Bengali tourists to pilgrims and corporate decision-makers, we write messaging that connects authentically.",
    points: [
      "Localized ad copy that sounds native and culturally resonant",
      "Creative concepts that respect local traditions while embracing modern trends",
      "Multilingual video voiceovers, subtitles, and social captions",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Honest, Measurable ROI",
    subtitle: "Real Inquiries & Leads, Not Bot Views",
    description:
      "We evaluate success by tangible business outcomes: verified phone calls, direct WhatsApp leads, table reservations, membership signups, and student enrollment inquiries.",
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
            Rooted in Odisha. Driven by verifiable business growth.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Generic digital agencies treat every business the same with cookie-cutter posts. Here is why ambitious cafes, gyms, colleges, real estate brands, and hotels across Puri and Odisha partner with Buzzler to scale.
          </p>
        </div>

        {/* 4 Pillars Grid */}
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
                Odisha Business Strategy
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                Ready to elevate your brand's presence?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Whether you are gearing up for weekend dining rushes, the college admission season, new gym fitness memberships, or tourist holiday surges, Buzzler builds the marketing engine that sets you apart.
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
