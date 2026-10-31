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
    tagline: "Turn Mouthwatering Food Reels Into Packed Tables Every Weekend",
    badge: "F&B & Dining",
    painPoint:
      "Struggling with slow mid-week footfall and relying solely on Zomato/Swiggy discounts that eat your profits.",
    buzzlerEngine:
      "We produce high-contrast, sizzling 4K food shorts, host curated local food vlogger tastings in Puri & Bhubaneswar, and run weekend table-booking WhatsApp ads that drive genuine walk-ins.",
    deliverables: [
      "4K vertical reels of signature dishes, live mocktails & dining ambience",
      "Local food influencer invite nights & viral Instagram audio sync",
      "Google Business Profile optimization for 'best cafe near me' & 'seafood restaurant Puri'",
      "Weekend brunch & festive celebration promotional ad funnels",
    ],
    metricSample: "Average +40% Increase in Weekend Table Footfall",
    sampleClientType: "Beachfront Cafes, Multi-Cuisine Restaurants, Bakeries & Cloud Kitchens",
    ctaText: "Get Cafe Marketing Plan",
  },
  {
    id: "gym",
    icon: Dumbbell,
    title: "Gyms & Fitness Centers",
    tagline: "Fill Your Batches With High-Energy Member Transformation Storytelling",
    badge: "Health & Fitness",
    painPoint:
      "High member churn, empty afternoon batches, and competing against discount gyms offering cut-throat prices.",
    buzzlerEngine:
      "We film intense, cinematic workout reels and real member body transformations. Then we run hyper-local Meta ad funnels targeting college students and working professionals with a 'Free 3-Day Trial Pass' delivered straight to WhatsApp.",
    deliverables: [
      "High-octane workout cinematography featuring gym equipment & trainers",
      "Cinematic before/after member transformation video interviews",
      "Geo-targeted Meta ads offering instant WhatsApp 3-day workout passes",
      "Seasonal membership drives (New Year, Summer body, Student specials)",
    ],
    metricSample: "120 - 180 Qualified Membership Inquiries Per Month",
    sampleClientType: "Strength Gyms, CrossFit Boxes, Yoga Centers & MMA Studios",
    ctaText: "Get Gym Growth Plan",
  },
  {
    id: "hotel",
    icon: Building2,
    title: "Hotels & Resorts",
    tagline: "Cut OTA Commission Dependency & Secure Direct Traveler Bookings",
    badge: "Hospitality & Tourism",
    painPoint:
      "Paying 20-25% painful commissions to MakeMyTrip/Booking.com and suffering severe mid-week vacancy dips.",
    buzzlerEngine:
      "We deploy licensed 4K drone passes of the beach, room walkthroughs, and targeted social ad campaigns geofenced to Kolkata, Ranchi, and Bhubaneswar travelers before long weekends.",
    deliverables: [
      "Licensed drone ocean flyovers and presidential suite walkthroughs",
      "Kolkata & Bhubaneswar long-weekend staycation ad campaigns",
      "Direct Click-to-WhatsApp booking funnels bypassing OTA platforms",
      "Bilingual copy and voiceovers in Bengali, Odia, Hindi, and English",
    ],
    metricSample: "20-25% Reduction in OTA Commission Loss",
    sampleClientType: "Beachfront Resorts, Heritage Havelis, Homestays & Eco-Camps",
    ctaText: "Get Hotel Marketing Plan",
  },
  {
    id: "college",
    icon: GraduationCap,
    title: "Schools & Colleges",
    tagline: "Inspire Parent Confidence & Drive Verified Student Admissions",
    badge: "Education & Academics",
    painPoint:
      "Low admission turnout, fierce competition from metro institutes, and parents unaware of your campus infrastructure.",
    buzzlerEngine:
      "We produce high-trust campus documentary films, student innovation spotlights, and targeted Google Search + Meta admission lead generation campaigns across Odisha during peak admission windows.",
    deliverables: [
      "Cinematic drone campus tours, smart-classroom & laboratory films",
      "Parent & alumni testimonial video series building academic trust",
      "Google Search ads on high-intent terms ('best CBSE school Puri', 'B.Tech college Odisha')",
      "WhatsApp & automated phone lead capture for admission counsellors",
    ],
    metricSample: "300+ Verified Admission Inquiries Per Season",
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
      "Losing footfall to online e-commerce giants and lacking modern social proof in the local Puri-Bhubaneswar market.",
    buzzlerEngine:
      "We showcase your collection, bridal jewelry, or medical/dental expertise through relatable vertical video, running radius-targeted map ads that guide customers right to your door.",
    deliverables: [
      "Product showcase reels, customer trial videos & festive launch shoots",
      "Google Maps local 3-pack optimization to capture nearby shoppers",
      "Local festival collection campaigns (Rath Yatra, Diwali, Wedding season)",
      "Customer review generation system for Google and Instagram",
    ],
    metricSample: "+35% In-Store Footfall During Festive Campaigns",
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
            Tailored Industry Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
            One powerful agency. Built for every ambitious local brand.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Whether you run a buzzing cafe on VIP Road, a high-energy gym, a luxury beach resort, or a premier college, Buzzler creates the exact creative reels and ad funnels needed to dominate your market in Puri and Odisha.
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
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
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

        {/* Deep Tactile Showcase Card (Clay-Style Depth) */}
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
                    The Common Business Bottleneck
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                    {activeIndustry.painPoint}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-950 block mb-1">
                    How Buzzler Drives Measurable Growth
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
                    Target Impact
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                    {activeIndustry.metricSample}
                  </h4>
                  <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                    Based on customized shot lists, high-definition video production, and localized ad targeting in Puri, Bhubaneswar & coastal Odisha.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>On-ground production in Puri within 48 hours</span>
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
