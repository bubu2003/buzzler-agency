"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  CheckCircle2,
  Compass,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

export interface ReelItem {
  id: string;
  title: string;
  hook: string;
  language: string;
  videoSrc: string;
  aspectRatio: string;
  targetAudience: string;
  angle: string;
  viewsEstimate: string;
}

export const shreedhamReels: ReelItem[] = [
  {
    id: "reel-1",
    title: "Rate Sunile Shock Heijibe",
    hook: "“Rate sunile shock heijibe!” — Targeting Puri's rapid infrastructure growth with affordable smart plot investments.",
    language: "Odia",
    videoSrc: "/videos/shreedham/shreedham-rate-shock-odia.mp4",
    aspectRatio: "9/16",
    targetAudience: "Puri & Coastal Odisha Land Buyers",
    angle: "Native High-Impact Odia Hook & Price Transparency",
    viewsEstimate: "High Engagement Viral",
  },
  {
    id: "reel-2",
    title: "The 4 Dhams Heritage Value",
    hook: "“Among the 4 Dhams, Puri is one of the holiest places in India...” Connecting spiritual legacy with generational land ownership.",
    language: "Hindi + English",
    videoSrc: "/videos/shreedham/shreedham-puri-dhams.mp4",
    aspectRatio: "9/16",
    targetAudience: "NRI Odias & Pan-India Pilgrim Families",
    angle: "Spiritual Legacy & Long-term Generational Wealth",
    viewsEstimate: "High-Intent Buyers",
  },
  {
    id: "reel-3",
    title: "Salary Credited: Where Does It Go?",
    hook: "“Salary credited... For a moment, it feels like you've made it.” Shifting young salaried earners from lifestyle inflation to real land assets.",
    language: "Hindi",
    videoSrc: "/videos/shreedham/shreedham-salary-credited.mp4",
    aspectRatio: "9/16",
    targetAudience: "Corporate & IT Salaried Professionals (25-40)",
    angle: "Psychological Relatability & Smart Investment Habit",
    viewsEstimate: "Lead-Gen WhatsApp Driver",
  },
  {
    id: "reel-4",
    title: "Badmein Kyun Pachtana?",
    hook: "“The saddest part about real estate: people don't realise the value until prices skyrocket.” Urgency & corridor timing.",
    language: "Hindi",
    videoSrc: "/videos/shreedham/shreedham-pachtana-regret.mp4",
    aspectRatio: "9/16",
    targetAudience: "Indecisive Investors & First-Time Buyers",
    angle: "FOMO & Capital Appreciation Timing",
    viewsEstimate: "High Conversion",
  },
  {
    id: "reel-5",
    title: "I Should've Bought It Back Then",
    hook: "“Most investment regrets begin with that one sentence.” Why waiting for the 'perfect time' costs more than buying land today.",
    language: "English + Hindi",
    videoSrc: "/videos/shreedham/shreedham-investment-regrets.mp4",
    aspectRatio: "9/16",
    targetAudience: "Puri & Bhubaneswar Real Estate Evaluators",
    angle: "Historical Appreciation & Beat Inflation",
    viewsEstimate: "High Save & Share Rate",
  },
];

export default function ReelsShowcase() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const activeReel = shreedhamReels[activeReelIndex];

  const handlePlayToggle = (index: number) => {
    if (activeReelIndex !== index) {
      // Pause previous
      const prevVideo = videoRefs.current[shreedhamReels[activeReelIndex].id];
      if (prevVideo) {
        prevVideo.pause();
      }
      setActiveReelIndex(index);
      setIsPlaying(true);
      const newVideo = videoRefs.current[shreedhamReels[index].id];
      if (newVideo) {
        newVideo.play().catch(() => {});
      }
    } else {
      const currentVideo = videoRefs.current[activeReel.id];
      if (currentVideo) {
        if (isPlaying) {
          currentVideo.pause();
          setIsPlaying(false);
        } else {
          currentVideo.play().catch(() => {});
          setIsPlaying(true);
        }
      }
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentVideo = videoRefs.current[activeReel.id];
    if (currentVideo) {
      currentVideo.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="proof-of-work" className="py-24 bg-[#FAF7F2] border-b border-stone-200 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              Verified Client Proof of Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
              Live Instagram Reels created for Shreedham Township, Puri.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Real social media video production engineered for on-ground sales. We scripted, shot, and edited 5 high-converting vertical reels in Odia and Hindi targeting plot buyers in Puri and Bhubaneswar.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/shreedhamtownship/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold hover:opacity-90 transition-all shadow-xs"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Visit @shreedhamtownship on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs text-stone-500 bg-white border border-stone-200 px-3 py-1.5 rounded-full font-medium">
                📍 Location: Puri Coastal Corridor, Odisha
              </span>
            </div>
          </div>

          <Link
            href="/work/shreedham-township"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-black bg-amber-100/80 hover:bg-amber-200/80 px-4 py-2.5 rounded-full transition-colors shrink-0"
          >
            <span>Read Full Shreedham Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Reel Player + Reel Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Interactive Smartphone Video Player (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] rounded-[36px] overflow-hidden shadow-2xl border-[6px] border-stone-900 bg-stone-950 text-white aspect-[9/16] group">
              {/* Actual Video Element */}
              <video
                ref={(el) => {
                  videoRefs.current[activeReel.id] = el;
                }}
                src={activeReel.videoSrc}
                playsInline
                preload="metadata"
                loop
                muted={isMuted}
                className="absolute inset-0 w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Gradient overlays for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

              {/* Top Bar with Audio & Language Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  {activeReel.language} • Reel 0{activeReelIndex + 1}
                </span>

                <button
                  onClick={handleMuteToggle}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white border border-white/10 transition-all cursor-pointer"
                  aria-label="Toggle Audio"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-300" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                </button>
              </div>

              {/* Center Play / Pause Floating Trigger */}
              <div
                onClick={() => handlePlayToggle(activeReelIndex)}
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
              >
                {!isPlaying && (
                  <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F59E0B] group-hover:text-black transition-all shadow-xl text-white">
                    <Play className="w-7 h-7 ml-1 fill-current" />
                  </div>
                )}
              </div>

              {/* Bottom Meta Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 space-y-2 text-left bg-black/75 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-amber-400">@shreedhamtownship</span>
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white font-medium">
                      Puri Real Estate
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-300 font-mono">
                    {activeReel.viewsEstimate}
                  </span>
                </div>

                <p className="text-xs text-white/95 font-medium line-clamp-3 leading-snug">
                  {activeReel.hook}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-300">
                  <span className="text-stone-300 font-medium">Angle: {activeReel.angle}</span>
                  <button
                    onClick={() => handlePlayToggle(activeReelIndex)}
                    className="text-amber-300 hover:text-white font-bold flex items-center gap-1 cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3 h-3" /> Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" /> Play Video
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reel Playlist / Selector Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-bold tracking-wider text-stone-500">
                Tap Any Reel to Play (5 Available)
              </span>
              <span className="text-xs font-medium text-stone-500">
                Production: 100% In-House by Buzzler
              </span>
            </div>

            {shreedhamReels.map((reel, idx) => {
              const isActive = activeReelIndex === idx;
              return (
                <div
                  key={reel.id}
                  onClick={() => handlePlayToggle(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? "bg-white border-amber-400 shadow-lg ring-2 ring-amber-400/20"
                      : "bg-white/80 hover:bg-white border-stone-200/80 hover:border-stone-300 hover:shadow-xs"
                  }`}
                >
                  {/* Number & Mini Play Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                      isActive
                        ? "bg-[#141413] text-[#F59E0B]"
                        : "bg-stone-100 text-stone-600 group-hover:bg-amber-100"
                    }`}
                  >
                    {isActive && isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    )}
                  </div>

                  {/* Reel Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-stone-900 font-serif">
                        {reel.title}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-200">
                        {reel.language}
                      </span>
                      <span className="text-[10px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                        {reel.targetAudience}
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                      {reel.hook}
                    </p>

                    <div className="flex items-center gap-3 mt-2 text-[11px] text-stone-500">
                      <span className="flex items-center gap-1 text-amber-700 font-semibold">
                        <TrendingUp className="w-3 h-3 text-[#F59E0B]" />
                        {reel.angle}
                      </span>
                      <span>•</span>
                      <span>{reel.viewsEstimate}</span>
                    </div>
                  </div>

                  {/* Active Indicator Arrow */}
                  <div className="shrink-0 self-center">
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "text-[#F59E0B] rotate-45" : "text-stone-300"
                      }`}
                    />
                  </div>
                </div>
              );
            })}

            {/* Campaign Summary Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                  Campaign Outcome
                </span>
                <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
                  5 Reels produced • Multilingual (Odia/Hindi) • WhatsApp lead capture funnel active.
                </p>
              </div>

              <a
                href="https://www.instagram.com/shreedhamtownship/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F59E0B] text-black text-xs font-bold hover:bg-amber-400 transition-colors shrink-0"
              >
                <span>Check Live Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
