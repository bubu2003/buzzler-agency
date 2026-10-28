"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Video,
  Target,
  Users2,
  Palette,
  ArrowUpRight,
  Check,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: "video",
    icon: Video,
    tag: "Primary Growth Driver",
    title: "Social Media Video",
    subtitle: "High-production reels & hotel films that drive emotional direct bookings.",
    description:
      "Modern travelers book hotels they've seen and felt on Instagram. We script, shoot in 4K with drone coverage on-site in Puri, and edit cinematic vertical reels designed to capture travelers from Bengal, Jharkhand, and Odisha.",
    deliverables: [
      "4K vertical reels for Instagram & YouTube Shorts",
      "Drone ocean & property flyovers (licensed piloting)",
      "Room category & presidential suite walkthroughs",
      "Authentic dining, breakfast & seafood showcase",
      "Audio curation & trending sound synchronization",
    ],
    highlight: "Video-First Hospitality",
  },
  {
    id: "ads",
    icon: Target,
    tag: "Direct Bookings",
    title: "Meta & Google Ads",
    subtitle: "High-intent paid search & geo-targeted social campaigns.",
    description:
      "Stop paying 20-25% OTA commissions. We capture high-intent travelers searching 'best luxury hotel near Puri beach' and retarget high-income families in Kolkata, Ranchi, and Bhubaneswar prior to long weekends.",
    deliverables: [
      "Google Search ads on high-intent Puri hotel keywords",
      "Meta (Instagram & Facebook) visual booking campaigns",
      "Direct Click-to-WhatsApp conversation ads",
      "Geotargeting timed to school holidays & Durga Puja",
      "Transparent conversion tracking & ROAS reporting",
    ],
    highlight: "Commission Reduction",
  },
  {
    id: "influencer",
    icon: Users2,
    tag: "Social Proof",
    title: "Influencer Marketing",
    subtitle: "Vetted travel & lifestyle creators who deliver authentic reach.",
    description:
      "No inflated follower counts or low-engagement barter deals. We curate verified travel creators who visit Puri, film honest experiential itineraries, and deliver viral reels with complete commercial usage rights.",
    deliverables: [
      "Hand-picked travel creators from Odisha & West Bengal",
      "Structured itinerary & stay experience briefs",
      "Full ad usage rights for client performance marketing",
      "Story mentions, tagged reels & Google Review integration",
      "Post-campaign reach & inquiry attribution report",
    ],
    highlight: "Vetted Creator Roster",
  },
  {
    id: "branding",
    icon: Palette,
    tag: "Identity & Print",
    title: "Branding & Identity",
    subtitle: "End-to-end luxury identity that makes your property unforgettable.",
    description:
      "From bespoke logo suites and visual guidelines to elegant in-room guest collateral and digital QR menus. We build a cohesive brand identity that commands higher RevPAR and nightly room rates.",
    deliverables: [
      "Brand strategy, logo system & color typography tokens",
      "Room collateral: keycard sleeves, stationery & welcome guides",
      "Digital QR restaurant & spa menu design",
      "Property signage & architectural photo direction",
      "Social media Canva/Figma asset library for your staff",
    ],
    highlight: "Premium RevPAR Elevation",
  },
];

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 bg-white border-y border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
              Four Specialized Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif">
              Everything your hotel needs to dominate online.
            </h2>
          </div>
          <p className="text-stone-600 max-w-md text-sm sm:text-base leading-relaxed">
            We don't offer generic templates or disconnected services. Every campaign is built specifically around the seasonal rhythms and traveler preferences of Puri, Odisha.
          </p>
        </div>

        {/* Services Grid (Clay-style tactile card cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#FAF7F2] rounded-3xl p-8 border border-stone-200 hover:border-amber-400/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Badge & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200/80 flex items-center justify-center text-stone-900 group-hover:bg-[#141413] group-hover:text-[#F59E0B] transition-all shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 font-serif mb-2 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-stone-800 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-stone-200/70">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-stone-400 block mb-2">
                      Included in Service:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA trigger */}
                <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center justify-between gap-2">
                  <Link
                    href={
                      service.id === "video"
                        ? "/services/video"
                        : service.id === "ads"
                        ? "/services/ads"
                        : service.id === "influencer"
                        ? "/services/influencer-marketing"
                        : "/services/branding"
                    }
                    className="inline-flex items-center gap-1 text-xs font-bold text-stone-900 hover:text-amber-700 transition-colors"
                  >
                    <span>View Deep-Dive & Process</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`#quote?service=${service.id}`}
                    className="text-xs font-semibold text-amber-800 bg-amber-100/70 hover:bg-amber-200/80 px-2.5 py-1 rounded-full transition-colors"
                  >
                    Inquire Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Service Note Banner */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-200/70 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-900" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900">
                Need a full multi-channel retainer for peak season?
              </p>
              <p className="text-xs text-stone-600">
                We combine Video + Meta Ads + Influencer visits into one integrated monthly growth engine for Puri hoteliers.
              </p>
            </div>
          </div>
          <Link
            href="#quote"
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-colors"
          >
            Request Custom Package Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
