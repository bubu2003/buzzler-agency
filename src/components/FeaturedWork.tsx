"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Play,
  Pause,
  Film,
  MapPin,
  Compass,
  CheckCircle2,
  ExternalLink,
  Volume2,
  VolumeX,
} from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";

interface ProjectDemo {
  id: string;
  badge: string;
  industryTag: string;
  title: string;
  propertyType: string;
  location: string;
  servicesProvided: string[];
  conceptObjective: string;
  creativeExecution: string;
  sampleReelTitle: string;
  deliverablesList: string[];
  gradientTheme: string;
  isVerifiedClient?: boolean;
  videoSrc?: string;
  instagramUrl?: string;
  instagramHandle?: string;
}

const projects: ProjectDemo[] = [
  {
    id: "shreedham-township",
    badge: "Verified Client Project • Real Estate",
    industryTag: "Real Estate & Township",
    title: "Shreedham Township Puri",
    propertyType: "Premium Gated Plotted Township & Villa Land",
    location: "Puri Coastal Corridor, Odisha",
    isVerifiedClient: true,
    videoSrc: "/videos/shreedham/shreedham-rate-shock-odia.mp4",
    instagramUrl: "https://www.instagram.com/shreedhamtownship/?hl=en",
    instagramHandle: "@shreedhamtownship",
    servicesProvided: [
      "5x Master Vertical Reels",
      "Bilingual Scripting (Odia/Hindi)",
      "Attention-Grabbing Video Hooks",
      "WhatsApp Lead Inquiries",
    ],
    conceptObjective:
      "Create awareness and generate plot-related inquiries for Shreedham Township by highlighting its location near Puri, regional development context and potential as a long-term property investment.",
    creativeExecution:
      "The campaign uses a native Odia opening hook, relatable financial messaging and property-focused storytelling to introduce the project to audiences interested in real estate around Puri.",
    sampleReelTitle: "Rate Sunile Shock Heijibe: Puri Real Estate Smart Investment",
    deliverablesList: [
      "5 Vertical Instagram Reels in Odia and Hindi",
      "Odia Voiceover and Campaign Scriptwriting",
      "Location and Property-Focused Video Storytelling",
      "Click-to-WhatsApp Inquiry Campaign Integration",
    ],
    gradientTheme: "from-amber-600 via-stone-900 to-stone-950",
  },
  {
    id: "coastal-bean",
    badge: "Sample Campaign Concept • Cafe & Dining",
    industryTag: "Food & Dining",
    title: "The Coastal Bean Cafe & Roastery",
    propertyType: "Artisanal Beachside Cafe & Roastery",
    location: "VIP Road / Sea Beach, Puri",
    servicesProvided: ["4K Sizzling Food Reels", "Local Foodie Influencer Collabs", "Weekend Footfall Meta Ads"],
    conceptObjective:
      "Develop a marketing approach for a beachside cafe in Puri, using food photography, short-form videos and local advertising to increase awareness and encourage customer inquiries.",
    creativeExecution:
      "High-contrast, macro food cinematography featuring signature seafood platters, steaming artisanal pour-overs, and cheesy pizza pulls, paired with trending audio and weekend dining angles.",
    sampleReelTitle: "Fresh Catch to Pour-Over: The Ultimate Beach Cafe Experience",
    deliverablesList: [
      "8x 4K Master Vertical Food & Ambience Reels",
      "Curated local food influencer invite tastings in Puri & Bhubaneswar",
      "Radius-targeted Meta ads driving direct WhatsApp table bookings",
      "Google Business Profile optimization for local dining searches",
    ],
    gradientTheme: "from-orange-600 via-amber-600 to-stone-900",
  },
  {
    id: "ironpulse-fitness",
    badge: "Sample Campaign Concept • Gym & Fitness",
    industryTag: "Health & Fitness",
    title: "IronPulse Strength & CrossFit Club",
    propertyType: "Premium Strength & Conditioning Facility",
    location: "Grand Road / College Square, Puri",
    servicesProvided: ["Cinematic Workout Reels", "Transformation Interviews", "Free 3-Day Pass Meta Funnel"],
    conceptObjective:
      "Develop a fitness marketing strategy focused on showcasing gym facilities, training experiences and membership options to attract relevant local audiences in Puri.",
    creativeExecution:
      "High-energy workout cinematography featuring heavy compound lifts, conditioning drills, and authentic member transformation stories with a frictionless 'Claim Free 3-Day Pass on WhatsApp' CTA.",
    sampleReelTitle: "Heavy Metal & Hard Work: The IronPulse Transformation",
    deliverablesList: [
      "6x High-Energy Vertical Training Reels",
      "Cinematic Before/After Member Video Testimonials",
      "Hyper-Local Meta Ad Campaign Targeting 18-35 Demographics",
      "Automated WhatsApp Greeting for Instant Trial Pass Delivery",
    ],
    gradientTheme: "from-red-600 via-stone-800 to-stone-950",
  },
  {
    id: "heritage-academy",
    badge: "Sample Campaign Concept • Education",
    industryTag: "Education & Academics",
    title: "Heritage International Academy & College",
    propertyType: "Senior Secondary & Junior College",
    location: "Puri-Bhubaneswar Highway Corridor",
    servicesProvided: ["Campus Showcase Film", "Admissions Lead Funnel", "Parent Testimonial Series"],
    conceptObjective:
      "Create an institutional marketing strategy that showcases campus facilities, academic programmes and student experiences to support awareness and admission inquiries.",
    creativeExecution:
      "Inspiring campus films highlighting modern STEM labs, sports infrastructure, and library facilities, coupled with authentic interviews with teachers, achievers, and parents.",
    sampleReelTitle: "Where Curiosity Meets Excellence: Welcome to Heritage Academy",
    deliverablesList: [
      "Master 4K Campus Tour & Facility Showcase Film",
      "Google Search Ads targeting regional school and college admissions",
      "Multilingual Parent Testimonials (Odia, English & Hindi)",
      "WhatsApp & Direct Phone Inquiry Capture Funnel for Admissions Office",
    ],
    gradientTheme: "from-blue-700 via-indigo-900 to-stone-950",
  },
  {
    id: "bay-breeze",
    badge: "Sample Campaign Concept • Hospitality",
    industryTag: "Hospitality & Stays",
    title: "Bay Breeze Grand Resort & Spa",
    propertyType: "Luxury Oceanfront Beach Resort",
    location: "Marine Drive, Golden Beach, Puri",
    servicesProvided: ["Cinematic Aerial 4K", "Direct Booking Meta Funnel", "Regional Traveler Campaign"],
    conceptObjective:
      "Promote a hotel or resort through destination videos, property showcases and targeted advertising aimed at travelers considering stays in Puri.",
    creativeExecution:
      "A vertical video series capturing golden-hour coastal waves, chef's fresh seafood preparations, and luxury room amenities, paired with localized ad copy for regional travelers.",
    sampleReelTitle: "Golden Beach Sunrise to Candlelight Ocean Dining",
    deliverablesList: [
      "6x 4K Master Vertical Reels (Color-graded for Instagram)",
      "Aerial Coastal Ocean Footage Package",
      "Geotargeted Meta Ad Sets for Kolkata & Bhubaneswar Travelers",
      "Direct Click-to-WhatsApp Booking Inquiry Funnel",
    ],
    gradientTheme: "from-amber-600 via-orange-500 to-amber-900",
  },
];

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error("Video playback failed:", error);
        }
      }
    } else {
      setPreviewModalOpen(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="work" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Proof-of-Work Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              Client Work &amp; Campaign Concepts
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
              Creative Campaigns, Video Production &amp; Brand Strategies
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Explore our creative work and campaign concepts for businesses in
              Odisha. From video production for Shreedham Township in Puri to
              marketing strategies for hospitality, fitness, education and dining
              brands, see how we approach branding, content creation and digital
              advertising.
            </p>

            {/* Verified Work Pill */}
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-100/90 border border-amber-300 text-xs text-amber-950 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                <strong>Verified Production:</strong> Shreedham Township is an active client campaign in Puri. Check the live Instagram reels below or visit{" "}
                <a
                  href="https://www.instagram.com/shreedhamtownship/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-amber-900 hover:text-black"
                >
                  @shreedhamtownship
                </a>
                .
              </span>
            </div>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-black bg-amber-100/80 hover:bg-amber-200/80 px-4 py-2 rounded-full transition-colors shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-stone-200">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.pause();
                  videoRef.current.currentTime = 0;
                }
                setActiveProject(proj);
                setIsPlaying(false);
                setIsMuted(true);
                setPreviewModalOpen(false);
              }}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeProject.id === proj.id
                  ? "bg-[#141413] text-white shadow-sm"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {proj.isVerifiedClient && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              )}
              <span className="text-stone-400 mr-1 font-normal">[{proj.industryTag}]</span>
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Featured Project Showcase Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Reel Stage Preview */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-stone-900 text-white flex flex-col justify-between relative overflow-hidden min-h-[460px]">
              {/* If Video Source exists, embed playable video */}
              {activeProject.videoSrc ? (
                <>
                  <video
                    key={activeProject.id}
                    ref={videoRef}
                    src={activeProject.videoSrc}
                    playsInline
                    loop
                    preload="metadata"
                    muted={isMuted}
                    className="absolute inset-0 w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none" />
                </>
              ) : (
                <>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activeProject.gradientTheme} opacity-80 -z-10`}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)] -z-10" />
                </>
              )}

              {/* Top Meta info */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[11px] uppercase tracking-wider font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-amber-300">
                  {activeProject.badge}
                </span>

                {activeProject.videoSrc && (
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/10 transition-colors cursor-pointer"
                    aria-label="Sound Toggle"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-amber-300" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                )}

                <span className="text-xs text-stone-300 flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {activeProject.location.split(",")[0]}
                </span>
              </div>

              {/* Center Play / Action */}
              <div className="my-auto flex flex-col items-center text-center z-10 py-6">
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:scale-110 hover:bg-[#F59E0B] hover:text-black transition-all cursor-pointer shadow-xl text-white group"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 ml-1 fill-current" />
                  )}
                </button>
                <p className="mt-4 text-xs uppercase tracking-wider font-semibold text-stone-300">
                  {activeProject.isVerifiedClient ? "Tap to Play Active Reel" : "Video Strategy Blueprint"}
                </p>
                <h4 className="mt-1 text-base sm:text-lg font-bold text-white max-w-xs font-serif">
                  “{activeProject.sampleReelTitle}”
                </h4>

                {activeProject.instagramUrl && (
                  <a
                    href={activeProject.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/30 text-white text-[11px] font-semibold border border-white/20 transition-all"
                  >
                    <InstagramIcon className="w-3 h-3 text-pink-400" />
                    <span>Watch on {activeProject.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Bottom Visual Highlights */}
              <div className="space-y-2 bg-black/70 backdrop-blur-md p-4 rounded-2xl border border-white/10 z-10">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-semibold">Production Deliverable:</span>
                  <span className="text-stone-300">4K • 9:16 Vertical Reel</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeProject.servicesProvided.map((service, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-white/15 px-2 py-0.5 rounded text-stone-200 font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategic Details & Deliverables */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                    <Compass className="w-3.5 h-3.5 text-amber-600" />
                    <span>{activeProject.propertyType}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs text-stone-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    {activeProject.location}
                  </p>
                </div>

                {/* Concept Objective */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-1">
                    Strategic Objective
                  </span>
                  <p className="text-sm text-stone-800 leading-relaxed font-medium">
                    {activeProject.conceptObjective}
                  </p>
                </div>

                {/* Creative Execution */}
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-1.5">
                    Creative &amp; Video Approach
                  </span>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {activeProject.creativeExecution}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-stone-500 block mb-2.5">
                    Package Deliverables Breakdown:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProject.deliverablesList.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-stone-800 bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-8 mt-6 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {activeProject.isVerifiedClient ? (
                  <Link
                    href="/work/shreedham-township"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-black transition-colors"
                  >
                    <span>Read Shreedham Township Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-amber-700 transition-colors"
                  >
                    <span>Explore All Industry Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}

                <Link
                  href={`/contact?projectRef=${activeProject.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-colors shadow-sm"
                >
                  <span>Discuss a Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Video Preview Modal for non-video items */}
        {previewModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-modal-title"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="bg-stone-900 border border-stone-700 rounded-3xl max-w-md w-full p-6 text-white text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <Film className="w-6 h-6" />
              </div>
              <h4 id="preview-modal-title" className="text-lg font-bold font-serif text-white">
                {activeProject.title}
              </h4>
              <p className="text-xs text-stone-300">
                This campaign framework demonstrates our high-retention video formula crafted for Odisha businesses.
              </p>
              <div className="p-4 rounded-xl bg-black/60 border border-stone-800 text-left text-xs space-y-2">
                <div className="flex justify-between text-stone-400">
                  <span>Shot 1 (0:00 - 0:02):</span>
                  <span className="text-amber-400">High-Impact Visual Hook</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Shot 2 (0:02 - 0:05):</span>
                  <span className="text-amber-400">Facility / Product Sensory Detail</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Shot 3 (0:05 - 0:08):</span>
                  <span className="text-amber-400">Customer Emotion &amp; Experience</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Shot 4 (0:08 - 0:12):</span>
                  <span className="text-amber-400">Direct WhatsApp / Call CTA</span>
                </div>
              </div>
              <button
                onClick={() => setPreviewModalOpen(false)}
                className="w-full py-2.5 rounded-full bg-amber-500 text-black font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
