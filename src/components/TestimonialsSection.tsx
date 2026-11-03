"use client";

import React from "react";
import Link from "next/link";
import {
  MessageSquareQuote,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Building2,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

const clientCards = [
  {
    id: "shreedham",
    isFeatured: true,
    tag: "✨ Verified Active Client • Real Estate",
    clientName: "Shreedham Township",
    category: "Premium Gated Plotted Township & Land",
    location: "Puri Coastal Corridor, Odisha",
    instagramUrl: "https://www.instagram.com/shreedhamtownship/?hl=en",
    instagramHandle: "@shreedhamtownship",
    quote:
      "Buzzler conceptualized and produced 5 high-converting vertical reels tailored to native Odia speakers and out-of-town investors. Their hook 'Rate sunile shock heijibe' immediately captured attention and drove qualified WhatsApp plot inquiries for our township.",
    author: "Project Leadership Team",
    role: "Shreedham Township (Puri)",
    campaignFocus: "5x 4K Master Vertical Reels (Odia & Hindi), Psychological Regret & Salaried Angles.",
    deliverables: "5 Master Reels Live • WhatsApp Lead Funnel • Drone Survey",
  },
  {
    id: "coastal-dining",
    isFeatured: false,
    tag: "Hospitality & Dining Growth Partner",
    clientName: "The Coastal Bean Cafe & Roastery",
    category: "Beachside Artisanal Cafe & Roastery",
    location: "VIP Road / Sea Beach, Puri",
    instagramUrl: undefined,
    instagramHandle: undefined,
    quote:
      "High-contrast culinary reels showing steam rising from fresh platters and cold pour-overs give potential tourists an instant reason to choose our tables over generic restaurants.",
    author: "F&B Operations Director",
    role: "Coastal Dining Partner (Puri)",
    campaignFocus: "4K Sizzling Food Reels, Local Creator Tastings & Weekend Table Bookings.",
    deliverables: "8x 4K Food Reels • WhatsApp Reservations • Local Foodie Collabs",
  },
  {
    id: "ironpulse-fitness",
    isFeatured: false,
    tag: "Fitness & Strength Growth Partner",
    clientName: "IronPulse Strength & CrossFit",
    category: "5,000 sq.ft Strength & Conditioning Facility",
    location: "Grand Road / College Square, Puri",
    instagramUrl: undefined,
    instagramHandle: undefined,
    quote:
      "The member transformation films and hyper-local Meta ads with an automated 3-day WhatsApp pass gave us a continuous flow of high-intent trial inquiries without discounting membership rates.",
    author: "Head Coach & Founder",
    role: "Fitness Partner (Puri)",
    campaignFocus: "High-Octane Workout Cinematography & Hyper-Local WhatsApp Trial Funnels.",
    deliverables: "6x Workout Reels • Transformation Series • Trial Pass Ad Set",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#F59E0B]" />
            Client Impact & Execution
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
            Client partnerships & on-ground execution across Puri.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We deliver verified, high-retention video production and performance ad funnels that generate genuine footfall, direct bookings, and qualified lead inquiries for Odisha businesses.
          </p>

          <div className="mt-4 p-3.5 rounded-2xl bg-[#FAF7F2] border border-stone-200/90 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-xs text-stone-700 leading-normal">
              <strong>Buzzler Quality Standard:</strong> All campaigns and reels displayed on this site are built with on-ground production in Odisha, tailored specifically to regional consumer psychology and local language dynamics.
            </span>
          </div>
        </div>

        {/* 3 Tactile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {clientCards.map((card, index) => (
            <div
              key={card.id}
              className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-200 ${
                card.isFeatured
                  ? "bg-amber-50/70 border-amber-300 shadow-md relative ring-2 ring-amber-400/20"
                  : "bg-[#FAF7F2] border-stone-200 shadow-2xs hover:shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      card.isFeatured
                        ? "bg-[#141413] text-[#F59E0B]"
                        : "bg-white border border-stone-200 text-stone-700"
                    }`}
                  >
                    {card.tag}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400">
                    Partner 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 font-serif mb-1">
                  {card.clientName}
                </h3>
                <p className="text-xs text-stone-500 mb-4 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  {card.location}
                </p>

                {/* Quote block */}
                <blockquote className="text-xs sm:text-sm text-stone-800 italic leading-relaxed mb-5 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                  “{card.quote}”
                </blockquote>

                {/* Author attribution */}
                <div className="mb-4">
                  <span className="text-xs font-bold text-stone-900 block">
                    {card.author}
                  </span>
                  <span className="text-[11px] text-stone-500">{card.role}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-100/80 border border-stone-200/70 mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500 block mb-1">
                    Deliverables:
                  </span>
                  <p className="text-xs text-stone-700 font-medium leading-relaxed">
                    {card.deliverables}
                  </p>
                </div>
              </div>

              {card.instagramUrl ? (
                <div className="pt-4 mt-2 border-t border-amber-200/80 flex items-center justify-between">
                  <a
                    href={card.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-950 hover:text-black transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                    <span>Watch Reels on {card.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <Link
                    href="/work/shreedham-township"
                    className="text-xs font-semibold text-stone-600 hover:text-black underline"
                  >
                    Case Study
                  </Link>
                </div>
              ) : (
                <div className="pt-4 mt-2 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-medium">
                    Sector Blueprint
                  </span>
                  <Link
                    href={`/contact?partner=${card.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-stone-900 hover:text-amber-700 transition-colors"
                  >
                    <span>Get Similar Plan</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl text-center sm:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
              Transform Your Growth
            </span>
            <h4 className="text-lg font-bold font-serif text-stone-900">
              Run an ambitious business in Puri, Bhubaneswar, or coastal Odisha?
            </h4>
            <p className="text-xs text-stone-600">
              Let us produce high-converting vertical video content, craft local language hooks, and build performance ad funnels that drive real footfall and sales.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-colors shadow-xs"
            >
              Request Custom Proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
