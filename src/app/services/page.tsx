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
  title: "Digital Marketing Services in Puri & Odisha | Buzzler Agency",
  description:
    "Explore Buzzler Agency's four core digital marketing services for cafes, gyms, colleges, schools, and hotels in Puri: Social Media Video, Meta & Google Ads, Influencer Marketing, and Branding.",
  keywords: [
    "digital marketing services Puri",
    "social media marketing agency Odisha",
    "cafe restaurant marketing Puri",
    "gym fitness advertising Puri",
    "school college marketing Odisha",
    "hotel digital marketing Puri",
    "video reels ads Puri",
  ],
};

const serviceHubList = [
  {
    slug: "/services/video",
    icon: Video,
    tag: "Core Visual Engine",
    title: "Social Media Video",
    subtitle: "4K Drone, Cinematic Reels & Vertical Business Content",
    description:
      "Captivate customers on Instagram & YouTube before they make their dining, fitness, admission, or travel decisions. We script, film on-site in Puri with cinema cameras and licensed drone pilots, and produce high-emotion vertical reels.",
    deliverables: [
      "4K vertical reels for Instagram & YouTube Shorts",
      "Licensed drone aerial footage along coastal & campus locations",
      "Product walkthroughs, facility tours & ambience showcases",
      "Culinary, workout & classroom action cinematography",
      "Trending commercial audio synchronization & localized subtitles",
    ],
  },
  {
    slug: "/services/ads",
    icon: Target,
    tag: "Direct Acquisition Engine",
    title: "Meta & Google Ads",
    subtitle: "High-Intent Search & Hyper-Local Geo-Targeting",
    description:
      "Turn search intent into paying customers and direct inquiries. We capture high-intent users searching for cafes, gyms, colleges, or hotels and run precision Meta & Google ad funnels across Puri, Bhubaneswar, and Eastern India.",
    deliverables: [
      "Google Search ads capturing high-intent local & regional queries",
      "Geo-targeted Instagram & Facebook video advertising campaigns",
      "Click-to-WhatsApp direct inquiry and booking conversation ads",
      "Timing calibrated to festival seasons, admission cycles & weekends",
      "Transparent conversion tracking & ROAS reporting",
    ],
  },
  {
    slug: "/services/influencer-marketing",
    icon: Users2,
    tag: "Social Proof & Reach",
    title: "Influencer Marketing",
    subtitle: "Vetted Local Creators & Experiential Vlogs",
    description:
      "No inflated follower counts or useless free barter deals. We curate verified food, fitness, education, and lifestyle creators from Odisha and West Bengal with genuine audiences, script structured experiential briefs, and secure commercial usage rights.",
    deliverables: [
      "Audience authenticity verification (eliminating fake follower bots)",
      "Structured experience and shoot briefs for creators",
      "Full commercial advertising usage rights for client ad campaigns",
      "Co-authored Instagram reels with direct link-in-bio & WhatsApp hooks",
      "Post-campaign reach & verified footfall attribution reporting",
    ],
  },
  {
    slug: "/services/branding",
    icon: Palette,
    tag: "Identity & Value",
    title: "Branding & Identity",
    subtitle: "Premium Visual Identity & Physical Customer Collateral",
    description:
      "Command higher pricing and build enduring local trust. From bespoke logos and signage to elegant menu designs, gym member welcome kits, college prospectus suites, and in-room hotel collateral, we create cohesive aesthetics.",
    deliverables: [
      "Brand strategy, logo system & typography color tokens",
      "Print & digital menus, brochures, and member onboarding kits",
      "Environmental signage & architectural photo direction",
      "Social media design templates & highlight cover suites",
      "Editable Canva & Figma templates for client staff",
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
              Digital marketing services engineered for Puri & Odisha brands.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Every service is calibrated specifically for the growth milestones, regional audience demographics, and footfall challenges of businesses across coastal Odisha.
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
                          href={`https://wa.me/917873343141?text=Hi%20Buzzler,%20I'm%20interested%20in%20${encodeURIComponent(
                            service.title
                          )}%20for%20my%20business%20in%20Puri.`}
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
                Integrated Growth Retainer
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                Want the full multi-channel engine?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Combine monthly Video + Meta Ads + Creator collaborations into one unified growth program for your business with guaranteed on-ground Puri service.
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
