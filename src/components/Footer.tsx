"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141413] text-stone-300 pt-20 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-stone-700 bg-white">
                <Image
                  src="/buzzler-logo.jpg"
                  alt="Buzzler Agency Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  Buzzler
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                  Digital Marketing • Puri, Odisha
                </span>
              </div>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              The creative digital marketing agency dedicated to hotels, beach resorts, and hospitality brands across Puri, Konark, and coastal Odisha.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span>Marine Drive Road, Swargadwar, Puri, Odisha 752001</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/919437000000?text=Hi%20Buzzler..."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-stone-900 hover:bg-emerald-950 text-emerald-400 border border-stone-800 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+919437000000"
                className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 transition-colors"
                title="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@buzzleragency.com"
                className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Our Services
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/video" className="hover:text-white transition-colors">
                  Social Media Video (4K Drone & Reels)
                </Link>
              </li>
              <li>
                <Link href="/services/ads" className="hover:text-white transition-colors">
                  Meta & Google Ads Management
                </Link>
              </li>
              <li>
                <Link href="/services/influencer-marketing" className="hover:text-white transition-colors">
                  Travel Influencer Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="hover:text-white transition-colors">
                  Branding & In-Room Collateral
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                  All Services Hub →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Explore
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#work" className="hover:text-white transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="#why-buzzler" className="hover:text-white transition-colors">
                  Why Buzzler
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors">
                  Pilot Reviews
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-white transition-colors">
                  Puri Tourism Insights
                </Link>
              </li>
              <li>
                <Link href="#quote" className="hover:text-white transition-colors">
                  Get A Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Multilingual & Local */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Languages & Markets
            </span>
            <p className="text-xs text-stone-400">
              Content and ad campaigns available in four regional languages for guest reach:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-stone-200">
                English (Default)
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-stone-200">
                বাংলা (Bengali)
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-stone-200">
                ଓଡ଼ିଆ (Odia)
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-stone-900 border border-stone-800 text-stone-200">
                हिंदी (Hindi)
              </span>
            </div>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800 text-[11px] text-stone-400">
                <span className="text-amber-400 font-bold block mb-0.5">Local Hospitality Promise</span>
                100% transparent pricing by custom quote. No unverified claims or fake results.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Buzzler Agency. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#quote" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#quote" className="hover:text-stone-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#quote" className="hover:text-stone-300 transition-colors">
              Client Ethics Charter
            </Link>
          </div>
          <p className="flex items-center gap-1 text-[11px]">
            Crafted for Puri's coastal hoteliers <Heart className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
