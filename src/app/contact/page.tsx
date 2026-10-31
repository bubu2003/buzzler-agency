"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Send,
  Sparkles,
  Building2,
  ShieldCheck,
  Calendar,
} from "lucide-react";

const servicesList = [
  "Social Media Video (4K Reels & Drone)",
  "Meta & Google Ads Management",
  "Influencer & Creator Collaborations",
  "Brand Identity & Design Collateral",
  "Full-Growth Retainer (Unified Marketing)",
];

const budgetRanges = [
  "Exploring / Flexible",
  "₹15,000 – ₹35,000 / month (Starter)",
  "₹35,000 – ₹75,000 / month (Growth)",
  "₹75,000+ / month (Full Scale Retainer)",
];

export default function ContactQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    businessCategory: "Cafe / Restaurant / Dining",
    businessScale: "Established (High Footfall / 1-2 Outlets)",
    services: ["Social Media Video (4K Reels & Drone)"],
    budget: "₹35,000 – ₹75,000 / month (Growth)",
    targetSeason: "Immediate (This Month)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    if (formData.services.includes(srv)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== srv),
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, srv],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span className="text-stone-900 font-bold">Contact & Quote</span>
          </nav>

          {/* Page Heading */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              Start The Conversation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] font-serif leading-[1.12] mb-6">
              Get a customized growth marketing quote for your business.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Tell us about your brand in Puri, Bhubaneswar, or coastal Odisha. We will audit your current online footprint and prepare a tailor-made roadmap with transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact & Agency Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct WhatsApp Callout */}
              <a
                href="https://wa.me/919437000000?text=Hi%20Buzzler%20Agency,%20I'd%20like%20to%20request%20a%20marketing%20quote%20for%20my%20business%20in%20Puri."
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-3xl bg-emerald-50 border border-emerald-200/80 hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-6 h-6 fill-emerald-600 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded">
                      Fastest Direct Response
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 font-serif mt-0.5">
                      Chat on WhatsApp
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Connect directly with our founding team on WhatsApp: <strong>+91 94370 00000</strong>. Instant answers regarding shoot schedules and ad pricing.
                </p>
              </a>

              {/* Direct Phone Callout */}
              <a
                href="tel:+919437000000"
                className="block p-6 rounded-3xl bg-white border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                      Direct Telephone
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 font-serif mt-0.5">
                      +91 94370 00000
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-stone-600">
                  Monday to Saturday: 9:30 AM – 7:00 PM IST.
                </p>
              </a>

              {/* Office Location & Map Details */}
              <div className="p-6 rounded-3xl bg-white border border-stone-200 space-y-4">
                <div className="flex items-start gap-3 text-xs text-stone-700">
                  <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Puri Agency Office:</strong>
                    Marine Drive Road, Swargadwar, Puri, Odisha 752001
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-stone-700">
                  <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">On-Site Consultations:</strong>
                    We visit hotels across Marine Drive, VIP Road, Swargadwar, Konark Marine Drive, and Bhubaneswar for property walkthroughs.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-stone-700">
                  <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Email Address:</strong>
                    hello@buzzleragency.com
                  </div>
                </div>

                {/* Simulated Google Map Badge */}
                <div className="pt-2">
                  <div className="w-full h-36 rounded-2xl bg-stone-100 border border-stone-200 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                    <MapPin className="w-8 h-8 text-[#F59E0B] mb-1" />
                    <span className="text-xs font-bold text-stone-900 relative z-10">
                      Marine Drive • Puri, Odisha
                    </span>
                    <span className="text-[10px] text-stone-500 relative z-10">
                      Local Hospitality Studio & Drone Base
                    </span>
                  </div>
                </div>
              </div>

              {/* Integrity Pledge */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center gap-3 text-xs text-amber-950 font-medium">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
                <span>
                  <strong>Buzzler Promise:</strong> 100% confidential. No spam. You will speak directly with our senior hospitality marketing leads.
                </span>
              </div>
            </div>

            {/* Right Complete Quote Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold font-serif text-stone-900">
                    Quote Request Received!
                  </h2>
                  <p className="text-sm text-stone-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. The Buzzler team will review <strong>{formData.businessName || "your business"}</strong> and contact you via WhatsApp or phone at <strong>{formData.phone}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-bold hover:bg-black transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold font-serif text-stone-900">
                      Business Growth Quote Request
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Complete this quick form and we will calculate your recommended package scope.
                    </p>
                  </div>

                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sambit Mohapatra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                        Business / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. The Coastal Bean / IronPulse Gym"
                        value={formData.businessName}
                        onChange={(e) =>
                          setFormData({ ...formData, businessName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94370 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="director@business.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>

                  {/* Business Category & Scale */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                        Business Category
                      </label>
                      <select
                        value={formData.businessCategory}
                        onChange={(e) =>
                          setFormData({ ...formData, businessCategory: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      >
                        <option>Cafe / Restaurant / Bar / Dining</option>
                        <option>Gym / Fitness / CrossFit Club</option>
                        <option>School / College / Educational Institute</option>
                        <option>Hotel / Resort / Homestay</option>
                        <option>Clinic / Healthcare / Wellness / Salon</option>
                        <option>Retail Store / Local Brand / Showroom</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                        Business Scale / Footfall
                      </label>
                      <select
                        value={formData.businessScale}
                        onChange={(e) =>
                          setFormData({ ...formData, businessScale: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      >
                        <option>Boutique / Starter (Single Location)</option>
                        <option>Established (High Footfall / 1-2 Outlets)</option>
                        <option>Flagship / Large Campus / Multi-Branch</option>
                      </select>
                    </div>
                  </div>

                  {/* Multi-Service Select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                      Services Required (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((srv) => {
                        const isSelected = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#141413] text-[#F59E0B] border-[#141413]"
                                : "bg-[#FAF7F2] text-stone-700 border-stone-200 hover:border-stone-400"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Expectation */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Notes & Specific Goals */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Specific Growth Goals or Deadlines (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. We want to pack weekend tables, drive student admissions, fill early morning gym slots, or launch our new location..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-[#141413] text-[#FAF7F2] text-sm font-bold hover:bg-black transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#F59E0B]" />
                    <span>Submit Proposal Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
