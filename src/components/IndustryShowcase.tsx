"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  UtensilsCrossed,
  Dumbbell,
  Building2,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Video,
  Target,
  ChevronRight,
  Store,
} from "lucide-react";

const industries = [
  {
    id: "cafe",
    icon: UtensilsCrossed,
    title: "Cafes & Restaurants",
    tagline: "Turn Mouthwatering Food Reels Into Consistent Weekend Table Bookings",
    badge: "F&B & Dining",
    painPoint:
      "Struggling with slow mid-week footfall and relying heavily on aggregator discounts that reduce your operating margins.",
    buzzlerEngine:
      "We produce high-contrast, sizzling 4K food shorts, collaborate with local food creators in Puri & Bhubaneswar, and run targeted weekend table-booking WhatsApp ads that drive genuine walk-ins.",
    deliverables: [
      "4K vertical reels of signature dishes, live mocktails & dining ambience",
      "Local food creator collaborations & trending Instagram audio styling",
      "Google Business Profile optimization for 'best cafe near me' & local food searches",
      "Weekend brunch & festive promotional ad campaigns",
    ],
    metricSample: "Consistent Weekend Table Bookings & Walk-In Demand",
    sampleClientType: "Beachfront Cafes, Multi-Cuisine Restaurants, Bakeries & Cloud Kitchens",
    ctaText: "Get Cafe Marketing Plan",
  },
  {
    id: "gym",
    icon: Dumbbell,
    title: "Gyms & Fitness Centers",
    tagline: "Attract Committed Members Through Transformation Storytelling",
    badge: "Health & Fitness",
    painPoint:
      "High member churn, slow afternoon batches, and competing against discount gyms without building distinct brand value.",
    buzzlerEngine:
      "We film intense, cinematic workout reels and authentic member transformation stories. Then we run hyper-local Meta ad funnels targeting local fitness seekers with a 'Free 3-Day Trial Pass' delivered straight to WhatsApp.",
    deliverables: [
      "High-energy workout cinematography featuring gym equipment & trainers",
      "Member transformation video interviews building real community proof",
      "Geo-targeted Meta ads offering instant WhatsApp 3-day workout passes",
      "Seasonal membership drives (New Year, Summer fitness, Student specials)",
    ],
    metricSample: "Steady Stream of Qualified Trial Pass & Membership Leads",
    sampleClientType: "Strength Gyms, CrossFit Boxes, Yoga Centers & MMA Studios",
    ctaText: "Get Gym Growth Plan",
  },
  {
    id: "hotel",
    icon: Building2,
    title: "Hotels & Resorts",
    tagline: "Increase Direct Traveler Bookings and Build Long-Term Loyalty",
    badge: "Hospitality & Tourism",
    painPoint:
      "Heavy commission payouts to booking portals and low brand recall among repeat visitors from neighboring states.",
    buzzlerEngine:
      "We produce cinematic 4K aerial beach views, room walkthroughs, and targeted social ad campaigns focused on travelers from Kolkata, Ranchi, and Bhubaneswar planning weekend trips to Puri.",
    deliverables: [
      "Cinematic aerial ocean flyovers and room walkthroughs",
      "Weekend getaway social ad campaigns targeting Kolkata & Bhubaneswar",
      "Direct Click-to-WhatsApp inquiry funnels for vacationers",
      "Multilingual copy and subtitles in Bengali, Odia, Hindi, and English",
    ],
    metricSample: "Direct WhatsApp & Website Booking Inquiries",
    sampleClientType: "Beachfront Resorts, Heritage Havelis, Homestays & Eco-Camps",
    ctaText: "Get Hotel Marketing Plan",
  },
  {
    id: "college",
    icon: GraduationCap,
    title: "Schools & Colleges",
    tagline: "Inspire Parent Confidence & Drive Qualified Student Admissions",
    badge: "Education & Academics",
    painPoint:
      "Fierce regional competition and parents being unaware of your modern academic infrastructure and student achievements.",
    buzzlerEngine:
      "We produce high-trust campus showcase films, student innovation spotlights, and targeted Google Search + Meta admission inquiry campaigns across Odisha during peak admission windows.",
    deliverables: [
      "Campus showcase films highlighting laboratories, libraries & sports facilities",
      "Parent & student testimonial video series building institutional trust",
      "Google Search ads on high-intent terms ('CBSE school Puri', 'College admissions Odisha')",
      "WhatsApp & direct phone inquiry capture for admissions desks",
    ],
    metricSample: "Qualified Parent Inquiries Across Admission Windows",
    sampleClientType: "K-12 CBSE Schools, Degree Colleges, Coaching Hubs & Skill Institutes",
    ctaText: "Get College Admission Plan",
  },
  {
    id: "retail",
    icon: Store,
    title: "Retail & Local Brands",
    tagline: "Bring High-Intent Walk-Ins Into Your Store, Showroom, or Clinic",
    badge: "Retail & Lifestyle",
    painPoint:
      "Losing customer attention to online platforms and needing strong local social proof to win footfall.",
    buzzlerEngine:
      "We showcase your collection, products, or professional expertise through relatable vertical video, running local radius-targeted ads that guide customers right to your store.",
    deliverables: [
      "Product showcase reels, customer trial videos & festive launch shoots",
      "Google Maps local optimization to capture nearby shoppers",
      "Local festival collection campaigns (Rath Yatra, Diwali, Wedding season)",
      "Customer review generation process for Google and Instagram",
    ],
    metricSample: "Higher Store Visits During Festive & Wedding Seasons",
    sampleClientType: "Fashion Boutiques, Jewelry Showrooms, Dental Clinics & Salons",
    ctaText: "Get Retail Marketing Plan",
  },
];

export default function IndustryShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const activeIndustry = industries[activeTab];
  const Icon = activeIndustry.icon;

  return (
    <section id="industries" className="py-24 bg-[#FAF7F2] border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            Tailored Industry Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
            Custom creative marketing built for Odisha's key sectors.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Whether you run a cafe on VIP Road, a fitness club, an oceanfront resort, a plotted township, or an educational institution, Buzzler crafts creative reels and targeted ad funnels designed specifically for your local audience.
          </p>
        </div>

        {/* Industry Pill Selector */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-stone-200">
          {industries.map((ind, idx) => {
            const TabIcon = ind.icon;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer min-h-[42px] ${
                  activeTab === idx
                    ? "bg-[#141413] text-white shadow-sm"
                    : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                <TabIcon className="w-4 h-4 text-[#F59E0B]" />
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Strategic Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                    {activeIndustry.badge}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {activeIndustry.sampleClientType}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 leading-snug">
                  {activeIndustry.tagline}
                </h3>
              </div>

              {/* Pain Point vs Buzzler Engine */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 block mb-1">
                    The Business Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                    {activeIndustry.painPoint}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-950 block mb-1">
                    How Buzzler Drives Demand
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                    {activeIndustry.buzzlerEngine}
                  </p>
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-stone-400 block mb-2.5">
                  Package Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeIndustry.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-stone-800 bg-[#FAF7F2] p-2.5 rounded-xl font-medium border border-stone-200/60"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric Card & Action Trigger */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#141413] text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                  <div className="w-12 h-12 rounded-2xl bg-stone-800 border border-stone-700 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    TARGET OUTCOME
                  </span>
                </div>

                <div>
                  <span className="text-xs text-stone-400 uppercase tracking-wider block mb-1">
                    Focus Objective
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                    {activeIndustry.metricSample}
                  </h4>
                  <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                    Designed around customized shot lists, high-definition video production, and localized ad targeting in Puri, Bhubaneswar & coastal Odisha.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>On-ground production scheduled across Puri & Odisha</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Native Odia, Bengali, Hindi & English copy</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Full commercial ad usage rights included</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-stone-800">
                <Link
                  href={`/contact?industry=${activeIndustry.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#F59E0B] text-black text-xs sm:text-sm font-bold hover:bg-amber-400 transition-colors shadow-md"
                >
                  <span>{activeIndustry.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
