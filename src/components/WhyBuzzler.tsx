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
    title: "We Live and Breathe Puri",
    subtitle: "Local Hospitality Nuance",
    description:
      "Unlike remote metro agencies, we are on the ground in Puri. We understand the distinct guest behaviors during Rath Yatra, Durga Puja week, Kolkata winter vacations, and spontaneous weekend drives from Bhubaneswar.",
    points: [
      "On-site filming without expensive travel overheads",
      "Knowledge of Golden Beach, Marine Drive & Swargadwar traffic",
      "Seasonal campaign timing aligned with Odisha tourism calendar",
    ],
  },
  {
    icon: Video,
    title: "Video-First Creative Craft",
    subtitle: "Emotional Visual Storytelling",
    description:
      "Travelers do not book hotels from dull static photo galleries anymore. We produce cinematic 4K vertical reels, ocean drone shots, and authentic guest experience shorts that create an immediate desire to visit.",
    points: [
      "Dedicated cinema cameras and licensed drone pilots",
      "Sound design synchronized with trending audio algorithms",
      "Short-form content formatted for Instagram Reels and YouTube Shorts",
    ],
  },
  {
    icon: Languages,
    title: "Four-Language Fluency",
    subtitle: "English • Bengali • Hindi • Odia",
    description:
      "Puri's guest demographic is diverse. Bengali families seeking sea breeze, North Indian pilgrims visiting Lord Jagannath, and local Odia staycationers each respond to different cultural nuances.",
    points: [
      "Localized ad copy that feels authentic, not machine-translated",
      "Culturally sensitive storytelling honoring temple heritage",
      "Multi-lingual video voiceovers and social captions",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Honest, Measurable ROI",
    subtitle: "Zero Vanity Metrics",
    description:
      "We focus on real business outcomes: direct Click-to-WhatsApp booking conversations, phone calls, and direct website bookings that reduce your painful 20-25% OTA commissions.",
    points: [
      "Transparent monthly ad spend and direct inquiry tracking",
      "Direct phone and WhatsApp lead capture optimization",
      "No inflated follower bots or fake vanity metrics",
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
            Built from Puri, designed specifically for hoteliers.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Generic digital marketing agencies don't understand the hospitality season in Odisha. Here is why Puri hotel owners partner with Buzzler to turn empty rooms into booked weekends.
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

        {/* Local Hospitality Comparison Strip */}
        <div className="mt-16 bg-[#141413] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Puri Seasonality Insight
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                Are your ads ready before the peak booking window?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Travelers from Kolkata book 3 to 5 weeks in advance of Durga Puja and winter breaks. Buzzler ensures your reels and Google Search campaigns are humming well before competitors scramble.
              </p>
            </div>
            <Link
              href="#quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F59E0B] text-black text-sm font-bold hover:bg-amber-400 transition-all shrink-0 shadow-md"
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
