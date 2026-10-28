"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Film,
  Play,
  MapPin,
  Sparkles,
  Info,
  Building2,
  Calendar,
  Layers,
  Send,
  ShieldAlert,
} from "lucide-react";

export interface CaseStudyProps {
  slug: string;
  title: string;
  propertyCategory: string;
  location: string;
  heroTag: string;
  heroSummary: string;
  gradientTheme: string;
  statsSummary: {
    label: string;
    value: string;
    note: string;
  }[];
  theChallenge: {
    overview: string;
    bulletPoints: string[];
  };
  theStrategy: {
    headline: string;
    narrative: string;
    keyTactics: { title: string; description: string }[];
  };
  videoReelPreview: {
    title: string;
    specs: string;
    scenes: { timestamp: string; title: string; description: string }[];
  };
  deliverablesList: string[];
  testimonialPlaceholder: {
    quote: string;
    author: string;
    role: string;
    isPilotPlaceholder: boolean;
  };
  relatedWork: {
    title: string;
    slug: string;
    tag: string;
    location: string;
  }[];
}

export default function CaseStudyDetailView({ caseStudy }: { caseStudy: CaseStudyProps }) {
  const [isPlayingReel, setIsPlayingReel] = useState(false);
  const [formData, setFormData] = useState({ name: "", hotelName: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <article className="pt-28 pb-20 overflow-hidden bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-medium">
          <Link href="/" className="hover:text-black transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>
          <span>/</span>
          <Link href="/work" className="hover:text-black transition-colors">
            Featured Work
          </Link>
          <span>/</span>
          <span className="text-stone-900 font-bold">{caseStudy.title}</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-900 text-amber-300">
              {caseStudy.heroTag}
            </span>
            <span className="text-xs font-semibold text-stone-600 bg-white border border-stone-200 px-3 py-1 rounded-full flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#F59E0B]" /> {caseStudy.location}
            </span>
            <span className="text-xs font-semibold text-stone-600 bg-white border border-stone-200 px-3 py-1 rounded-full flex items-center gap-1">
              <Building2 className="w-3 h-3 text-stone-400" /> {caseStudy.propertyCategory}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] font-serif leading-[1.12] mb-6">
            {caseStudy.title}
          </h1>

          <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-medium">
            {caseStudy.heroSummary}
          </p>

          {/* Ethics Transparency Pill */}
          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-100/70 border border-amber-300/70 text-xs text-amber-950">
            <Info className="w-4 h-4 text-amber-800 shrink-0" />
            <span>
              <strong>Concept Portfolio Case Study:</strong> Documenting the exact creative storyboard, camera movements, and ad targeting architecture developed by Buzzler Agency.
            </span>
          </div>
        </div>

        {/* Key Metrics / Target Objectives Strip (Clay-Style Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {caseStudy.statsSummary.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-stone-200 shadow-2xs hover:shadow-xs transition-all"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                {stat.label}
              </span>
              <div className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 text-[#141413] mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-stone-500 leading-snug">{stat.note}</p>
            </div>
          ))}
        </div>

        {/* Visual Simulated Video Slate & Creative Deck */}
        <div className="mb-20 bg-stone-900 rounded-3xl overflow-hidden shadow-xl border border-stone-800 text-white relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradientTheme} opacity-75 -z-10`} />
          <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left simulated vertical video frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-64 sm:w-72 h-[380px] rounded-3xl bg-black/80 backdrop-blur-md border-4 border-white/20 p-4 flex flex-col justify-between shadow-2xl relative">
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-amber-400 text-black px-2 py-0.5 rounded text-[10px] font-bold">
                    4K MASTER
                  </span>
                  <span className="text-[11px] text-stone-300 font-mono">
                    {caseStudy.videoReelPreview.specs}
                  </span>
                </div>

                <div
                  className="flex flex-col items-center justify-center my-auto cursor-pointer group"
                  onClick={() => setIsPlayingReel(!isPlayingReel)}
                >
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F59E0B] group-hover:text-black transition-all shadow-lg text-white">
                    <Play className="w-6 h-6 ml-0.5 fill-current" />
                  </div>
                  <span className="mt-3 text-xs font-semibold text-white/90">
                    {isPlayingReel ? "Simulating Storyboard..." : "Preview Storyboard Sequence"}
                  </span>
                </div>

                <div className="bg-black/60 p-3 rounded-2xl border border-white/10 text-xs">
                  <span className="text-amber-400 font-bold block mb-0.5">
                    {caseStudy.videoReelPreview.title}
                  </span>
                  <p className="text-[11px] text-stone-300">
                    Optimized for Instagram Reels & Meta Click-to-WhatsApp Ads
                  </p>
                </div>
              </div>
            </div>

            {/* Right Storyboard Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Production Shot List
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                Scene-by-scene creative execution
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                Engineered with high retention hooks in the first 2 seconds to stop travelers mid-scroll on Instagram and Meta ad feeds.
              </p>

              <div className="space-y-2.5">
                {caseStudy.videoReelPreview.scenes.map((scene, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-start gap-3"
                  >
                    <span className="text-xs font-mono font-bold text-amber-400 bg-black/60 px-2 py-1 rounded">
                      {scene.timestamp}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {scene.title}
                      </h4>
                      <p className="text-xs text-stone-300 mt-0.5 leading-relaxed">
                        {scene.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section: The Challenge */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
                The Situation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mt-3 mb-4">
                The core hospitality challenge
              </h2>
              <p className="text-sm text-stone-600 leading-relaxed">
                {caseStudy.theChallenge.overview}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {caseStudy.theChallenge.bulletPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-stone-200 flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                    !
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: The Creative Strategy */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
                What Buzzler Deployed
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 font-serif mt-3 mb-4">
                {caseStudy.theStrategy.headline}
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {caseStudy.theStrategy.narrative}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
              {caseStudy.theStrategy.keyTactics.map((tactic, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                  <span className="text-amber-600 font-mono font-bold text-xs block mb-1">
                    Tactic 0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold font-serif text-stone-900 mb-2">
                    {tactic.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {tactic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Checklist */}
        <section className="mb-20">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Full Package Deliverables
            </span>
            <h3 className="text-2xl font-bold font-serif text-stone-900 mt-1">
              Assets created & deployed for this project
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {caseStudy.deliverablesList.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-stone-200 flex items-start gap-2.5 text-xs text-stone-800 font-medium"
              >
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Placeholder Card */}
        <section className="mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-amber-300/80 relative">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-4">
              <Sparkles className="w-4 h-4 text-[#F59E0B]" />
              <span>Pilot Review Slot</span>
              <span className="text-[10px] bg-amber-200/80 text-amber-950 px-2 py-0.5 rounded-full font-mono">
                PRD Verified Format
              </span>
            </div>

            <blockquote className="text-lg sm:text-xl font-serif text-stone-900 italic mb-4 leading-relaxed">
              “{caseStudy.testimonialPlaceholder.quote}”
            </blockquote>

            <div className="flex items-center justify-between text-xs text-stone-600 pt-3 border-t border-stone-200">
              <div>
                <span className="font-bold text-stone-900 block">
                  {caseStudy.testimonialPlaceholder.author}
                </span>
                <span>{caseStudy.testimonialPlaceholder.role}</span>
              </div>
              <span className="italic text-[11px] text-stone-400">
                (Documented Pilot Showcase)
              </span>
            </div>
          </div>
        </section>

        {/* Closing Action Block */}
        <section className="mb-20 bg-[#141413] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              Transform Your Hotel
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
              Ready to create a campaign like this for your property?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              We visit your hotel in Puri, Konark, or Bhubaneswar to audit your photo & video touchpoints and design a tailored growth roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F59E0B] text-black text-xs sm:text-sm font-bold hover:bg-amber-400 transition-colors shadow-md"
            >
              <span>Request Strategy Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919437000000?text=Hi%20Buzzler,%20I'd%20like%20a%20campaign%20like%20your%20featured%20work%20for%20my%20hotel."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold hover:bg-white/20 border border-white/20 transition-colors"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="pt-8 border-t border-stone-200">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-500">
              More Featured Work
            </span>
            <Link href="/work" className="text-xs font-bold text-amber-800 hover:text-black transition-colors">
              View All Work →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {caseStudy.relatedWork.map((rel, idx) => (
              <Link
                key={idx}
                href={rel.slug}
                className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                    {rel.tag}
                  </span>
                  <h4 className="text-base font-bold text-stone-900 font-serif mt-2 group-hover:text-amber-800 transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-stone-400" /> {rel.location}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-amber-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
