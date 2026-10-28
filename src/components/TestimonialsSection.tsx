"use client";

import React from "react";
import Link from "next/link";
import { MessageSquareQuote, Sparkles, ShieldAlert, ArrowUpRight, Award, CheckCircle2 } from "lucide-react";

const pilotCards = [
  {
    id: "slot-1",
    tag: "Pilot Reserved • Marine Drive",
    category: "Beachfront Boutique Resort",
    location: "Marine Drive, Puri",
    campaignFocus: "High-season direct booking funnels & 4K sunset reel series.",
    status: "Active Production (Case study video filming Nov 2026)",
    disclaimer: "Official review & verified booking metrics will publish post-campaign.",
  },
  {
    id: "slot-2",
    tag: "Pilot Reserved • Temple Heritage",
    category: "Heritage Suites & Pilgrim Hospitality",
    location: "Grand Road, Puri",
    campaignFocus: "Multi-lingual family cultural content & direct reservation concierge.",
    status: "Creative Onboarding Phase",
    disclaimer: "Official review & verified booking metrics will publish post-campaign.",
  },
  {
    id: "slot-3",
    tag: "1 Final Pilot Slot Available",
    category: "Chilika / Coastal Homestay or Eco-Retreat",
    location: "Puri District Coastal Belt",
    campaignFocus: "Creator travel staycation & Google Search intent capture.",
    status: "Open for Application",
    disclaimer: "Partner with Buzzler at preferential introductory rates in exchange for a joint case study.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Ethics Transparency */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#F59E0B]" />
            Transparency First
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
            Pilot partner stories & review placeholders.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We refuse to display fabricated testimonials or fake Google star ratings. Below are our documented pilot slots. Verified case studies and hotelier video reviews will be published as active campaigns conclude.
          </p>

          <div className="mt-4 p-3.5 rounded-2xl bg-stone-100 border border-stone-200/80 flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span className="text-xs text-stone-600 leading-normal">
              <strong>Buzzler Policy:</strong> All reviews displayed on this website must be tied to verified hotel properties in Odisha with real founder attribution and verifiable booking outcomes.
            </span>
          </div>
        </div>

        {/* 3 Tactile Placeholder Cards (Clay-style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pilotCards.map((card, index) => (
            <div
              key={card.id}
              className={`p-7 rounded-3xl border flex flex-col justify-between transition-all duration-200 ${
                card.status === "Open for Application"
                  ? "bg-amber-50/70 border-amber-300 shadow-md relative"
                  : "bg-[#FAF7F2] border-stone-200 shadow-2xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      card.status === "Open for Application"
                        ? "bg-[#141413] text-[#F59E0B]"
                        : "bg-white border border-stone-200 text-stone-700"
                    }`}
                  >
                    {card.tag}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400">
                    Slot 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 font-serif mb-1">
                  {card.category}
                </h3>
                <p className="text-xs text-stone-500 mb-4">{card.location}</p>

                <div className="p-3.5 rounded-2xl bg-white border border-stone-200/70 mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block mb-1">
                    Campaign Scope:
                  </span>
                  <p className="text-xs text-stone-700 font-medium leading-relaxed">
                    {card.campaignFocus}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-amber-900 font-semibold mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Status: {card.status}</span>
                </div>

                <p className="text-[11px] text-stone-500 italic leading-snug">
                  {card.disclaimer}
                </p>
              </div>

              {card.status === "Open for Application" && (
                <div className="pt-6 mt-6 border-t border-amber-200">
                  <Link
                    href="#quote?subject=pilot-program"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-colors"
                  >
                    <span>Claim Final Pilot Slot</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Founder Pilot Callout */}
        <div className="mt-12 bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl text-center sm:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
              Founder Pilot Initiative
            </span>
            <h4 className="text-lg font-bold font-serif text-stone-900">
              Are you a Puri hotel owner looking to kickstart your video marketing?
            </h4>
            <p className="text-xs text-stone-600">
              Join our inaugural showcase cohort. We provide complete video creative direction at introductory rates in exchange for documenting the project results.
            </p>
          </div>
          <Link
            href="#quote"
            className="shrink-0 px-6 py-3 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-all shadow-xs"
          >
            Apply for Pilot Program
          </Link>
        </div>
      </div>
    </section>
  );
}
