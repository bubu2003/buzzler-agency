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
  ShieldCheck,
  Loader2,
  AlertCircle,
} from "lucide-react";

const servicesList = [
  "Social Media Video (4K Reels & Aerials)",
  "Meta & Google Ads Management",
  "Influencer & Creator Collaborations",
  "Branding & Visual Identity",
  "Full Monthly Growth Retainer",
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
    businessCategory: "Cafe / Restaurant / Bar",
    growthGoal: "Increase Weekend Footfall & Walk-Ins",
    services: ["Social Media Video (4K Reels & Aerials)"],
    budget: "₹35,000 – ₹75,000 / month (Growth)",
    message: "",
    hp: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleService = (srv: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter((s) => s !== srv)
        : [...prev.services, srv],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          message: formData.budget
            ? `[Budget: ${formData.budget}] ${formData.message}`.trim()
            : formData.message,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit request. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please reach us via WhatsApp directly.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappPrefilledUrl = `https://wa.me/917873343141?text=${encodeURIComponent(
    `Hi Buzzler Agency, I just submitted a proposal request on buzzler.co.in for ${formData.businessName || "my business"}. My contact number is ${formData.phone}.`
  )}`;

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
            {/* Left Fast Actions Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-700 tracking-wider uppercase block mb-1">
                    Direct Contact Channels
                  </span>
                  <h2 className="text-xl font-bold font-serif text-stone-900">
                    Prefer direct conversation?
                  </h2>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/917873343141?text=Hi%20Buzzler%20Agency,%20I'd%20like%20to%20discuss%20a%20marketing%20strategy%20for%20my%20business%20in%20Odisha."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 hover:border-emerald-500 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 fill-white" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                          Instant Response
                        </span>
                        <span className="text-sm font-bold text-emerald-950">
                          Chat on WhatsApp (+91 78733 43141)
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+917873343141"
                    className="flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-stone-400 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                          Phone Consultation
                        </span>
                        <span className="text-sm font-bold text-stone-900">
                          +91 78733 43141 (Mon–Sat, 9:30am–7pm)
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@buzzleragency.com"
                    className="flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-stone-400 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                          Email Inquiries
                        </span>
                        <span className="text-sm font-bold text-stone-900">
                          hello@buzzleragency.com
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-3 text-xs text-stone-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>
                      <strong>Service Area:</strong> Based in Puri, serving businesses in Bhubaneswar and across Odisha.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>
                      <strong>Consultations:</strong> Virtual strategy calls and on-site business visits by arrangement.
                    </span>
                  </div>
                </div>
              </div>

              {/* Integrity Pledge */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center gap-3 text-xs text-amber-950 font-medium">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
                <span>
                  <strong>Buzzler Promise:</strong> Your contact details will be used to respond to your inquiry. Our team will contact you about your request.
                </span>
              </div>
            </div>

            {/* Right Complete Quote Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold font-serif text-stone-900">
                    Quote Request Received!
                  </h2>
                  <p className="text-sm text-stone-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. The Buzzler team will review requirements for <strong>{formData.businessName || "your business"}</strong> and contact you via phone or WhatsApp at <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappPrefilledUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up Response on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          businessName: "",
                          phone: "",
                          email: "",
                          businessCategory: "Cafe / Restaurant / Bar",
                          growthGoal: "Increase Weekend Footfall & Walk-Ins",
                          services: ["Social Media Video (4K Reels & Aerials)"],
                          budget: "₹35,000 – ₹75,000 / month (Growth)",
                          message: "",
                          hp: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold hover:bg-stone-200 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="quote-hp">Do not fill this</label>
                    <input
                      id="quote-hp"
                      name="hp"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.hp}
                      onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold font-serif text-stone-900">
                      Business Growth Quote Request
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      Complete this quick form and we will calculate your recommended package scope.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="quote-name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Sambit Mohapatra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="quote-business"
                        className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5"
                      >
                        Business / Brand Name *
                      </label>
                      <input
                        id="quote-business"
                        name="businessName"
                        type="text"
                        required
                        placeholder="e.g. Bay Breeze Cafe & Kitchen"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5"
                      >
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5"
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        id="quote-email"
                        name="email"
                        type="email"
                        placeholder="owner@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>
                  </div>

                  {/* Business Category & Goal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="quote-category"
                        className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5"
                      >
                        Industry / Category
                      </label>
                      <select
                        id="quote-category"
                        name="businessCategory"
                        value={formData.businessCategory}
                        onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      >
                        <option>Cafe / Restaurant / Bar</option>
                        <option>Gym / Fitness / CrossFit Studio</option>
                        <option>Real Estate / Plotted Township</option>
                        <option>School / College / Institute</option>
                        <option>Hotel / Resort / Homestay</option>
                        <option>Healthcare Clinic / Salon / Spa</option>
                        <option>Retail Showroom / Fashion Brand</option>
                        <option>Other Local Business</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-goal"
                        className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5"
                      >
                        Primary Campaign Goal
                      </label>
                      <select
                        id="quote-goal"
                        name="growthGoal"
                        value={formData.growthGoal}
                        onChange={(e) => setFormData({ ...formData, growthGoal: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      >
                        <option>Increase Weekend Footfall & Walk-Ins</option>
                        <option>Lead Generation (Real Estate / Admissions / Memberships)</option>
                        <option>Direct WhatsApp Bookings / Orders</option>
                        <option>Elevate Brand Prestige & Reputation</option>
                        <option>Grand Opening / Re-launch Campaign</option>
                      </select>
                    </div>
                  </div>

                  {/* Services Multi-Select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                      Services of Interest (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((srv) => {
                        const isSelected = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            aria-pressed={isSelected}
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
                    <label
                      htmlFor="quote-budget"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5"
                    >
                      Estimated Monthly Budget
                    </label>
                    <select
                      id="quote-budget"
                      name="budget"
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
                    <label
                      htmlFor="quote-message"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5"
                    >
                      Specific Growth Goals or Deadlines (Optional)
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      rows={3}
                      placeholder="e.g. We want to pack weekend tables, drive student admissions, fill early morning gym slots, or launch our new location..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full bg-[#141413] text-[#FAF7F2] text-sm font-bold hover:bg-black transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 text-[#F59E0B] animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#F59E0B]" />
                        <span>Submit Proposal Request</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-stone-400 text-center">
                    Your contact details will be used to respond to your inquiry. Our team will contact you about your request.
                  </p>
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
