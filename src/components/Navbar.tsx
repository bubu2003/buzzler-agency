"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, ArrowUpRight, Sparkles, Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN", full: "English" },
  { code: "hi", label: "HI", full: "हिंदी" },
  { code: "or", label: "OR", full: "ଓଡ଼ିଆ" },
  { code: "bn", label: "BN", full: "বাংলা" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E7E2D8] shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#E2DBD0] bg-white shadow-xs group-hover:shadow-md transition-all duration-200">
              <Image
                src="/buzzler-logo.jpg"
                alt="Buzzler Agency Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-[#141413] font-serif">
                  Buzzler
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              </div>
              <span className="text-[11px] font-medium tracking-wide uppercase text-stone-500">
                Puri • Odisha
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-xs border border-[#E7E2D8] rounded-full px-4 py-1.5 shadow-2xs">
            <Link
              href="/work"
              className="text-sm font-medium text-stone-700 hover:text-black hover:bg-stone-100/70 px-3 py-1.5 rounded-full transition-colors"
            >
              Work
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-stone-700 hover:text-black hover:bg-stone-100/70 px-3 py-1.5 rounded-full transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-stone-700 hover:text-black hover:bg-stone-100/70 px-3 py-1.5 rounded-full transition-colors"
            >
              About
            </Link>
            <Link
              href="/#why-buzzler"
              className="text-sm font-medium text-stone-700 hover:text-black hover:bg-stone-100/70 px-3 py-1.5 rounded-full transition-colors"
            >
              Why Buzzler
            </Link>
            <Link
              href="/#blueprint"
              className="text-sm font-medium text-stone-700 hover:text-black hover:bg-stone-100/70 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
            >
              <span>Blueprint</span>
              <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                Tool
              </span>
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium text-stone-700 hover:text-black hover:bg-stone-100/70 px-3 py-1.5 rounded-full transition-colors"
            >
              Reviews
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher Pill (PRD F2 requirement) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-stone-700 bg-white border border-[#E7E2D8] rounded-full hover:bg-stone-50 transition-all cursor-pointer"
                aria-expanded={langMenuOpen}
                aria-label="Select language"
              >
                <Globe className="w-3.5 h-3.5 text-stone-500" />
                <span>{selectedLang.toUpperCase()}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-stone-200 py-1 z-50">
                  <div className="px-3 py-1 text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                    Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-amber-50/60 ${
                        selectedLang === lang.code
                          ? "font-bold text-amber-900 bg-amber-50/40"
                          : "text-stone-700"
                      }`}
                    >
                      <span>{lang.full}</span>
                      <span className="text-[10px] text-stone-400 uppercase font-mono">
                        {lang.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/919437000000?text=Hi%20Buzzler%20Agency,%20I'd%20like%20to%20discuss%20marketing%20for%20my%20hotel%20in%20Puri."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/60 rounded-full transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Let's Talk CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#141413] text-[#FAF7F2] text-sm font-semibold hover:bg-black transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#F59E0B]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#141413] text-white"
            >
              Let's Talk
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-stone-300 text-stone-700 hover:bg-white"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 rounded-lg"
            >
              Work
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 rounded-lg"
            >
              Services Hub
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 rounded-lg"
            >
              About Buzzler
            </Link>
            <Link
              href="/#why-buzzler"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 rounded-lg"
            >
              Why Buzzler
            </Link>
            <Link
              href="/#blueprint"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 rounded-lg flex items-center justify-between"
            >
              <span>Hotel Strategy Blueprint</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                TOOL
              </span>
            </Link>
            <Link
              href="/#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 rounded-lg"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100 rounded-lg"
            >
              Contact & Quote
            </Link>
          </nav>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <div className="flex items-center justify-between px-1 text-xs text-stone-600">
              <span className="font-medium">Language:</span>
              <div className="flex gap-1.5">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setSelectedLang(l.code)}
                    className={`px-2 py-1 text-xs rounded-md ${
                      selectedLang === l.code
                        ? "bg-stone-900 text-white font-bold"
                        : "bg-stone-200/70 text-stone-700"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/919437000000?text=Hi%20Buzzler%20Agency,%20I'd%20like%20to%20discuss%20marketing%20for%20my%20hotel%20in%20Puri."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-emerald-900 bg-emerald-100/80 rounded-xl"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
