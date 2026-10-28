"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  MapPin,
  ArrowUpRight,
  Heart,
  CheckCircle2,
  Users2,
  Video,
  Award,
  ShieldCheck,
  ArrowLeft,
  Compass,
} from "lucide-react";

export default function AboutPage() {
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
            <span className="text-stone-900 font-bold">About Us</span>
          </nav>

          {/* Hero Story */}
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-[#F59E0B]" />
              The Buzzler Story
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] font-serif leading-[1.12] mb-6">
              Born in Puri. Dedicated exclusively to coastal hospitality.
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-medium">
              We started Buzzler because we saw remarkable hotels along Golden Beach, Swargadwar, and Marine Drive surrender 25% of their revenues to distant OTA platforms simply because they lacked modern video and targeted local storytelling.
            </p>
          </div>

          {/* Narrative & Values Grid (Clay-style tactile layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-stone-700 leading-relaxed">
              <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4 shadow-2xs">
                <h2 className="text-2xl font-bold font-serif text-stone-900">
                  Why generic metro agencies fail in Puri
                </h2>
                <p>
                  Most digital marketing agencies are located in Delhi, Mumbai, or Bangalore. They don’t know that Kolkata families plan their Puri vacations during specific long-weekend windows. They don't know the exact sunrise golden-hour angles over Golden Beach. And they definitely don’t know how to shoot respectful cultural stories around Lord Jagannath temple traditions.
                </p>
                <p>
                  Buzzler was founded on the ground in Puri. We are on site within minutes. When the sea breeze is perfect at 6:00 AM, our drone is in the air. When an unexpected holiday surge occurs, our Meta ads are already running in West Bengal and Jharkhand.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-stone-200 space-y-4 shadow-2xs">
                <h2 className="text-2xl font-bold font-serif text-stone-900">
                  Our Hospitality Philosophy: Video-First, Direct Bookings
                </h2>
                <p>
                  We don’t believe in vanity metrics. A million views mean nothing if your front desk phone doesn’t ring. Every video reel we shoot, every Google ad keyword we target, and every influencer collaboration we curate has one single objective: <strong>putting direct revenue in your hotel bank account with zero OTA commission.</strong>
                </p>
              </div>
            </div>

            {/* Right Brand Card with Bee Logo & Ethics Pledge */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-stone-900 text-white relative overflow-hidden shadow-xl">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/20 mb-6 bg-white relative">
                  <Image
                    src="/buzzler-logo.jpg"
                    alt="Buzzler Agency Bee Mark"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/80 inline-block mb-3">
                  The Buzzler Symbol
                </span>
                <h3 className="text-2xl font-bold font-serif text-white mb-2">
                  The Bee & Pixel Wings
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                  Like bees in a hive, we create a buzz that spreads. The geometric pixel wings represent our precision digital performance, while the warm amber core stands for genuine Odishan hospitality and warmth.
                </p>

                <div className="pt-4 border-t border-stone-800 space-y-2 text-xs text-stone-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                    <span>Based physically on Marine Drive, Puri</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                    <span>Fluent in Odia, Bengali, Hindi & English</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                    <span>Zero fabricated statistics policy</span>
                  </div>
                </div>
              </div>

              {/* Founder Openness Card */}
              <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Meet us in person in Puri</span>
                </div>
                <p className="text-stone-700 leading-relaxed">
                  We believe in building face-to-face trust. We invite hoteliers to meet us at our Marine Drive base or invite our team for a property walkthrough and complimentary video audit.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 font-bold text-amber-900 hover:text-black"
                  >
                    <span>Schedule an on-site property visit →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Pillars of How We Operate */}
          <div className="mb-20">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
                Guiding Principles
              </span>
              <h2 className="text-3xl font-bold font-serif text-stone-900 mt-2">
                The 4 commitments we make to every hotel partner
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "Radical Transparency",
                  desc: "We never invent fake statistics or bot views. All monthly reporting reflects verified phone calls and direct WhatsApp chats.",
                },
                {
                  num: "02",
                  title: "Video-First Craft",
                  desc: "We own cinema-grade cameras and licensed drones. We never rely on generic stock footage or phone snapshots.",
                },
                {
                  num: "03",
                  title: "Regional Nuance",
                  desc: "We write ad copy in Bengali, Odia, Hindi, and English to speak natively to travelers from Kolkata, Ranchi, and Bhubaneswar.",
                },
                {
                  num: "04",
                  title: "OTA Independence",
                  desc: "Every campaign is geared toward moving guest bookings to direct channels, preserving your 20-25% hard-earned margin.",
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-stone-200 shadow-2xs hover:border-amber-400 transition-all flex flex-col justify-between"
                >
                  <span className="text-2xl font-bold font-mono text-amber-600 mb-4 block">
                    {val.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-stone-900 mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Team Banner */}
          <div className="bg-[#141413] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Puri Hospitality Partners
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                Ready to make your property the buzz of Puri?
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Connect directly with our team to talk through your hotel’s upcoming season goals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F59E0B] text-black text-xs sm:text-sm font-bold hover:bg-amber-400 transition-colors shadow-md"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919437000000?text=Hi%20Buzzler,%20I'd%20like%20to%20learn%20more%20about%20working%20together."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold hover:bg-white/20 border border-white/20 transition-colors"
              >
                <span>WhatsApp Founders</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
