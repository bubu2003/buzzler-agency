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
  UtensilsCrossed,
  Dumbbell,
  GraduationCap,
  Building2,
} from "lucide-react";

const services = [
  {
    id: "video",
    icon: Video,
    tag: "Visual Storytelling Engine",
    title: "Social Media Video & 4K Reels",
    subtitle: "High-production vertical reels & drone films that stop the scroll.",
    description:
      "Customers buy what they feel on Instagram. We script, film on-site in Puri and Bhubaneswar with cinema cameras and licensed drones, and edit high-retention vertical reels that turn viewers into paying patrons.",
    deliverables: [
      "Cafes & Restos: Sizzling dish macro-shots, cocktail pouring & live ambience",
      "Gyms: High-octane workout cinematography & real body transformations",
      "Colleges: Drone campus flyovers, robotics labs & faculty authority spotlight",
      "Hotels: Balcony ocean views, sunset beach dining & suite walkthroughs",
      "Dynamic sound design synchronized with trending audio algorithms",
    ],
    highlight: "Cinema 4K & Drone Coverage",
  },
  {
    id: "ads",
    icon: Target,
    tag: "Direct Revenue & Leads",
    title: "Meta & Google Ads",
    subtitle: "High-intent search capture & hyper-local social conversion funnels.",
    description:
      "Stop wasting budget boosting random posts. We capture high-intent Google searchers and retarget local demographics across Puri, Bhubaneswar, Cuttack, and Bengal travelers with direct Click-to-WhatsApp and lead generation ads.",
    deliverables: [
      "Gyms: 'Claim Free 3-Day Trial Pass' direct WhatsApp lead capture",
      "Colleges: High-intent student admission inquiries (Google Search + Meta)",
      "Hotels: Geotargeted Kolkata/Ranchi long-weekend direct room booking funnels",
      "Cafes: Thursday-Saturday radius ads driving weekend table reservations",
      "Transparent monthly ROAS and verified cost-per-lead reporting",
    ],
    highlight: "Hyper-Local Lead Funnels",
  },
  {
    id: "influencer",
    icon: Users2,
    tag: "Social Proof & Reach",
    title: "Influencer Collaborations",
    subtitle: "Vetted creators who bring genuine footfall, not fake bot engagement.",
    description:
      "No inflated follower counts or useless barter deals. We curate verified regional creators from Odisha and West Bengal—foodies, fitness athletes, educators, and travel vloggers—with complete commercial ad usage rights.",
    deliverables: [
      "Curated food vloggers for cafe tasting events and viral review reels",
      "Local fitness creators and athletes testing your gym facilities",
      "Verified travel storytellers documenting resort and homestay stays",
      "Full commercial advertising rights granted for paid ad amplification",
      "Post-campaign reach, engagement, and direct DM attribution reports",
    ],
    highlight: "Vetted Creator Roster",
  },
  {
    id: "branding",
    icon: Palette,
    tag: "Visual Identity & Print",
    title: "Branding & Identity",
    subtitle: "End-to-end creative design that commands premium prices.",
    description:
      "From bespoke logos and visual design tokens to physical print collateral and digital assets. We build a cohesive, memorable brand identity that separates you from cheap local competitors.",
    deliverables: [
      "Cafes & Restos: Premium print menus, digital QR menus & packaging design",
      "Gyms: Brand marks, merchandise/apparel design & wall typography graphics",
      "Schools & Colleges: Annual admission prospectuses, brochures & signage",
      "Hotels: In-room guest directories, keycard sleeves & entrance facades",
      "Social media Canva/Figma asset library customized for your staff",
    ],
    highlight: "Premium Market Positioning",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white border-y border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
              Four High-Impact Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif">
              Everything your business needs to command attention.
            </h2>
          </div>
          <p className="text-stone-600 max-w-md text-sm sm:text-base leading-relaxed">
            We don't offer generic templates or disconnected services. Every campaign is built specifically around the buyer habits, demographics, and competitive landscape in Puri and Odisha.
          </p>
        </div>

        {/* Services Grid (Clay-style tactile card cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
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
                      Cross-Industry Application:
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
                    href={`/contact?service=${service.id}`}
                    className="text-xs font-semibold text-amber-800 bg-amber-100/70 hover:bg-amber-200/80 px-2.5 py-1 rounded-full transition-colors"
                  >
                    Inquire Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Multi-Channel Retainer Banner */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-200/70 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-900" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900">
                Need an all-in-one monthly creative & ads growth engine?
              </p>
              <p className="text-xs text-stone-600">
                We combine regular video shoots + targeted Meta/Google ads + local creator visits into one integrated retainer for businesses across Puri and Odisha.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-colors"
          >
            Request Retainer Proposal
          </Link>
        </div>
      </div>
    </section>
  );
}
