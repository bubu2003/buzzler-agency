import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Video,
  Target,
  Users2,
  Palette,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowLeft,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services for Hotels in Puri, Odisha | Buzzler Agency",
  description:
    "Explore Buzzler Agency's four core digital marketing services for hotels and resorts in Puri: Social Media Video, Meta & Google Ads, Influencer Marketing, and Branding.",
  keywords: [
    "digital marketing services Puri",
    "hotel marketing agency Odisha",
    "Puri hospitality digital marketing",
    "hotel video reels ads Puri"
  ],
};

const serviceHubList = [
  {
    slug: "/services/video",
    icon: Video,
    tag: "Core Visual Engine",
    title: "Social Media Video",
    subtitle: "4K Drone, Cinematic Reels & Vertical Hotel Films",
    description:
      "Captivate travelers before they ever search an OTA. We script, film on-site in Puri with cinema cameras and licensed drone pilots, and produce high-emotion vertical reels formatted for Instagram and YouTube.",
    deliverables: [
      "4K vertical reels for Instagram & YouTube Shorts",
      "Licensed drone aerial footage along Golden Beach & Marine Drive",
      "Room category walkthroughs & presidential suite showcases",
      "Culinary, breakfast buffet & beachfront dining coverage",
      "Trending commercial audio synchronization & localized subtitles",
    ],
  },
  {
    slug: "/services/ads",
    icon: Target,
    tag: "Direct Booking Engine",
    title: "Meta & Google Ads",
    subtitle: "High-Intent Search & Regional Geo-Targeting",
    description:
      "Stop surrendering 20-25% of your revenue to Booking.com. We capture high-intent travelers searching 'best hotel in Puri' and retarget affluent families across Kolkata, Ranchi, and Bhubaneswar with direct WhatsApp booking funnels.",
    deliverables: [
      "Google Search & Hotel Ads capturing high-intent booking queries",
      "Geo-targeted Instagram & Facebook video advertising campaigns",
      "Click-to-WhatsApp direct reservation conversation ads",
      "Timing calibrated to Durga Puja, Rath Yatra & winter vacations",
      "Transparent conversion tracking & ROAS reporting",
    ],
  },
  {
    slug: "/services/influencer-marketing",
    icon: Users2,
    tag: "Social Proof & Reach",
    title: "Influencer Marketing",
    subtitle: "Vetted Travel Creators & Authentic Staycation Vlogs",
    description:
      "No inflated follower counts or useless free barter stays. We curate verified travel storytellers from West Bengal and Odisha with genuine audiences, script structured experiential itineraries, and secure commercial ad licensing.",
    deliverables: [
      "Audience authenticity verification (eliminating fake follower bots)",
      "Structured itinerary & stay experience briefs for creators",
      "Full commercial advertising usage rights for client ad campaigns",
      "Co-authored Instagram reels with direct booking link-in-bio",
      "Post-campaign reach & inquiry attribution reporting",
    ],
  },
  {
    slug: "/services/branding",
    icon: Palette,
    tag: "Identity & RevPAR",
    title: "Branding & Identity",
    subtitle: "Luxury Identity Suites & In-Room Guest Collateral",
    description:
      "Command higher nightly rates and build lasting loyalty. From bespoke logos and signage to elegant keycard sleeves, in-room guest directories, and digital QR menus, we create a cohesive, elevated aesthetic.",
    deliverables: [
      "Brand strategy, logo system & color typography tokens",
      "In-room collateral: keycard sleeves, stationery & welcome guides",
      "Restaurant, cafe & pool bar menu design (print & digital QR code)",
      "Entrance facade signage & architectural photo direction",
      "Editable Canva & Figma templates for hotel front-desk staff",
    ],
  },
];

export default function ServicesHubPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141413] flex flex-col justify-between">
      <Navbar />

      <section className="pt-32 pb-24 bg-dot-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-medium">
            <Link href="/" className="hover:text-black transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span>/</span>
            <span className="text-stone-900 font-bold">Services</span>
          </nav>

          {/* Hub Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 text-xs font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
              Four Specialized Pillars
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] font-serif leading-[1.12] mb-6">
              Digital marketing services built for hotels in Puri.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Every service is engineered specifically for the seasonal rhythms, regional guest demographics, and direct booking challenges of coastal Odisha hospitality.
            </p>
          </div>

          {/* Deep-Dive Grid */}
          <div className="space-y-8">
            {serviceHubList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-stone-200 flex items-center justify-center text-stone-900">
                          <Icon className="w-6 h-6 text-[#F59E0B]" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/60">
                          {service.tag}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-stone-700">
                        {service.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Link
                          href={service.slug}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-colors shadow-xs"
                        >
                          <span>Explore Deep-Dive Page</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                        </Link>
                        <a
                          href={`https://wa.me/919437000000?text=Hi%20Buzzler,%20I'm%20interested%20in%20${encodeURIComponent(
                            service.title
                          )}%20for%20my%20hotel%20in%20Puri.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-6 bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-stone-200/80">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-stone-500 block mb-3">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-2.5 text-xs text-stone-800 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Integrated Retainer Banner */}
          <div className="mt-16 bg-[#141413] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-2 max-w-2xl relative z-10">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Integrated Hospitality Retainer
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                Want the full multi-channel engine?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Combine monthly Video + Meta Ads + Influencer collaborations into one unified growth program for your property with guaranteed on-ground Puri service.
              </p>
            </div>
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F59E0B] text-black text-xs sm:text-sm font-bold hover:bg-amber-400 transition-colors shrink-0 shadow-md relative z-10"
            >
              <span>Request Full-Retainer Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
