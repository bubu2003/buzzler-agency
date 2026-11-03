"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { shreedhamReels } from "@/components/ReelsShowcase";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  MapPin,
  Sparkles,
  ExternalLink,
  Building2,
  TrendingUp,
  Target,
  MessageSquare,
  Compass,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function ShreedhamCaseStudyPage() {
  const [activeReelIdx, setActiveReelIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentReel = shreedhamReels[activeReelIdx];

  const handleSelectReel = (idx: number) => {
    setActiveReelIdx(idx);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#141413] flex flex-col justify-between">
      <Navbar />

      <article className="pt-32 pb-24 bg-dot-pattern">
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
            <span className="text-stone-900 font-bold">Shreedham Township Puri</span>
          </nav>

          {/* Hero Header */}
          <div className="max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-900 text-amber-300">
                ✨ Verified Client Work
              </span>
              <span className="text-xs font-semibold text-stone-600 bg-white border border-stone-200 px-3 py-1 rounded-full flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#F59E0B]" /> Puri Coastal Corridor, Odisha
              </span>
              <span className="text-xs font-semibold text-stone-600 bg-white border border-stone-200 px-3 py-1 rounded-full flex items-center gap-1">
                <Building2 className="w-3 h-3 text-stone-400" /> Plotted Township & Real Estate
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] font-serif leading-[1.12] mb-6">
              Shreedham Township: Engineering High-Converting Real Estate Reels in Odia & Hindi.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal mb-6">
              How Buzzler scripted, directed, and edited 5 master vertical Instagram reels for Shreedham Township in Puri—turning complex real estate value propositions into viral native Odia hooks and relatable salaried investment stories.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/shreedhamtownship/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold hover:opacity-95 transition-opacity shadow-sm"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow @shreedhamtownship on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/917873343141?text=Hi%20Buzzler,%20I%20saw%20your%20reels%20for%20Shreedham%20Township.%20Can%20we%20discuss%20a%20similar%20campaign?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-stone-800 text-xs font-bold border border-stone-300 hover:bg-stone-50 transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Key Metrics / Highlights Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Master Reels Produced", value: "5 Films", note: "4K HDR • 9:16 Vertical" },
              { label: "Target Audience", value: "Puri & BBSR", note: "Middle-class & NRI Odias" },
              { label: "Language Dynamic", value: "Odia + Hindi", note: "Native psychological hooks" },
              { label: "Lead Conversion Hook", value: "Click-to-WhatsApp", note: "Instant plot details" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs flex flex-col justify-between"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  {stat.label}
                </span>
                <span className="text-2xl sm:text-3xl font-bold font-serif text-[#141413]">
                  {stat.value}
                </span>
                <span className="text-xs text-amber-800 font-medium mt-1">
                  {stat.note}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive 5-Reel Cinema Stage */}
          <section className="mb-20">
            <div className="bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-800 text-white shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-800 gap-4 mb-8">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                    Interactive Reel Player
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif mt-2">
                    Watch the 5 Shreedham Township Reels
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 border border-stone-700 transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-amber-400" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
                    <span>{isMuted ? "Unmute Audio" : "Mute Audio"}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* 9:16 Video Player Card */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[320px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-stone-800 bg-black aspect-[9/16] group">
                    <video
                      ref={videoRef}
                      src={currentReel.videoSrc}
                      playsInline
                      loop
                      preload="metadata"
                      muted={isMuted}
                      className="absolute inset-0 w-full h-full object-cover"
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />

                    {/* Gradient shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

                    {/* Top overlay */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs z-10">
                      <span className="bg-black/60 px-2.5 py-1 rounded-full text-[11px] font-bold text-amber-300 border border-white/10">
                        {currentReel.language}
                      </span>
                      <span className="text-[11px] text-stone-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 font-mono">
                        Reel {activeReelIdx + 1}/5
                      </span>
                    </div>

                    {/* Play/Pause Button */}
                    <div
                      onClick={togglePlay}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                    >
                      {!isPlaying && (
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:scale-110 hover:bg-[#F59E0B] hover:text-black transition-all shadow-xl text-white">
                          <Play className="w-7 h-7 ml-1 fill-current" />
                        </div>
                      )}
                    </div>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-amber-400">@shreedhamtownship</span>
                        <span className="text-[10px] text-stone-300">{currentReel.angle}</span>
                      </div>
                      <p className="text-xs text-white/95 line-clamp-2 font-medium">
                        {currentReel.hook}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Playlist & Storylines */}
                <div className="lg:col-span-7 space-y-3">
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-400 block mb-1">
                    Select A Reel to Stream:
                  </span>

                  {shreedhamReels.map((reel, idx) => {
                    const isSelected = activeReelIdx === idx;
                    return (
                      <div
                        key={reel.id}
                        onClick={() => handleSelectReel(idx)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                          isSelected
                            ? "bg-stone-800 border-amber-400/80 shadow-md ring-1 ring-amber-400/30"
                            : "bg-stone-950/60 hover:bg-stone-800/80 border-stone-800"
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                            isSelected
                              ? "bg-amber-400 text-black"
                              : "bg-stone-800 text-stone-300"
                          }`}
                        >
                          {isSelected && isPlaying ? (
                            <Pause className="w-4 h-4 fill-current" />
                          ) : (
                            <Play className="w-4 h-4 ml-0.5 fill-current" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="text-sm font-bold text-white font-serif">
                              {reel.title}
                            </h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                              {reel.language}
                            </span>
                          </div>
                          <p className="text-xs text-stone-300 leading-relaxed line-clamp-2">
                            {reel.hook}
                          </p>
                          <div className="flex items-center gap-3 mt-1.5 text-[11px] text-stone-400">
                            <span className="text-amber-400 font-medium">Target: {reel.targetAudience}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Section: The Challenge */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
                  The Market Challenge
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mt-3 mb-4">
                  Why traditional real estate marketing fails in Puri
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Most township and plot developers in Odisha rely on boring site photos, confusing legal flyers, and billboards on highways. Prospective buyers simply drive past without understanding the long-term capital appreciation or emotional security of owning land in Puri.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {[
                  "Generic Real Estate Fatigue: Buyers are skeptical of empty plots without seeing transparent layout roadmaps and infrastructure progress.",
                  "Language & Trust Barriers: Generic English and Hindi corporate videos fail to build authentic trust with local Odia families and regional buyers.",
                  "The 'Someday' Procrastination: Middle-class salaried earners delay land investment until prices have already doubled, missing early-stage entry pricing.",
                  "Complex Conversion Journeys: Long lead forms create drop-offs; buyers want instant WhatsApp communication and transparent price quotes.",
                ].map((point, idx) => (
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
                  What Buzzler Engineered
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 font-serif mt-3 mb-4">
                  The 3-Pillar High-Retention Video Formula
                </h2>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Instead of filming empty patches of grass, we built high-retention video narratives rooted in Odia cultural identity, psychological urgency, and clear financial education.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-stone-100">
                {[
                  {
                    title: "The Native Odia Hook",
                    desc: "Starting with 'Rate sunile shock heijibe' immediately arrested scrolling thumbs in Odisha. It addressed the #1 concern (affordability) with pride and local dialect.",
                  },
                  {
                    title: "Salaried Earner Psychology",
                    desc: "Reels like 'Salary Credited' juxtaposed lifestyle inflation against generational wealth creation, nudging 25-40 year-old professionals to invest early.",
                  },
                  {
                    title: "Regret & Timing Angles",
                    desc: "Highlighting that 'Most investment regrets begin with: I should have bought it back then' established urgency around Puri's rapid infrastructure development.",
                  },
                ].map((tactic, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                    <span className="text-amber-600 font-mono font-bold text-xs block mb-1">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold font-serif text-stone-900 mb-2">
                      {tactic.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {tactic.desc}
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
                Assets created & delivered for Shreedham Township
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "5x 4K Master Vertical Instagram Reels (9:16)",
                "Bilingual Scriptwriting in Native Odia & Hindi",
                "High-Retention Visual Hooks & Subtitle Styling",
                "Drone & Ground Camera Shot Direction",
                "Instagram Publishing Architecture & Copywriting",
                "Radius-Targeted Audience Strategy for Puri & BBSR",
                "Direct WhatsApp Click-to-Chat Funnel Architecture",
                "Archived Raw Master Cut Package for Repurposing",
              ].map((item, idx) => (
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

          {/* Closing Action Block */}
          <section className="mb-20 bg-[#141413] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Grow Your Business in Odisha
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                Ready to create high-converting video content like this for your project?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Whether you run a real estate project, resort, restaurant, or fitness brand in Puri or Bhubaneswar—we script, film, and distribute videos that drive real customer inquiries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F59E0B] text-black text-xs sm:text-sm font-bold hover:bg-amber-400 transition-colors shadow-md"
              >
                <span>Request Video Strategy Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/917873343141?text=Hi%20Buzzler,%20I'd%20like%20to%20discuss%20video%20marketing%20like%20your%20Shreedham%20Township%20campaign."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold hover:bg-white/20 border border-white/20 transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
