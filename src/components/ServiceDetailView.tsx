"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  Sparkles,
  Layers,
  HelpCircle,
  Clock,
  Send,
  MapPin,
  ShieldCheck,
  Play,
  Video,
  Target,
  Users2,
  Palette,
} from "lucide-react";

export interface ServiceDetailProps {
  slug: string;
  badge: string;
  h1Title: string;
  subtitle: string;
  heroBlurb: string;
  iconType: "video" | "ads" | "influencer" | "branding";
  targetAudience: {
    title: string;
    description: string;
    tag: string;
  }[];
  theProblem: {
    painPoint: string;
    explanation: string;
    buzzlerSolution: string;
  };
  deliverables: {
    category: string;
    items: string[];
  }[];
  processSteps: {
    step: string;
    title: string;
    duration: string;
    description: string;
    output: string;
  }[];
  calculatorOptions?: {
    label: string;
    options: {
      id: string;
      title: string;
      metric: string;
      detail: string;
    }[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    slug: string;
    blurb: string;
  }[];
}

export default function ServiceDetailView({ service }: { service: ServiceDetailProps }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedCalcOption, setSelectedCalcOption] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    hotelName: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const iconMap = {
    video: Video,
    ads: Target,
    influencer: Users2,
    branding: Palette,
  };
  const Icon = iconMap[service.iconType] || Video;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Structured Data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.h1Title,
    provider: {
      "@type": "LocalBusiness",
      name: "Buzzler Agency",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Puri",
        addressRegion: "Odisha",
        addressCountry: "IN",
      },
      telephone: "+91-9437000000",
    },
    areaServed: {
      "@type": "City",
      name: "Puri",
    },
    description: service.heroBlurb,
  };

  return (
    <article className="pt-28 pb-20 overflow-hidden bg-dot-pattern">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-stone-500 font-medium">
          <Link href="/" className="hover:text-black transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-black transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-stone-900 font-bold">{service.badge}</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300/80 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Icon className="w-3.5 h-3.5 text-[#F59E0B]" />
            {service.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] font-serif leading-[1.12] mb-6">
            {service.h1Title}
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 font-medium mb-4 leading-relaxed">
            {service.subtitle}
          </p>

          <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed mb-8">
            {service.heroBlurb}
          </p>

          {/* Quick CTA row */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#service-quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141413] text-[#FAF7F2] text-sm font-semibold hover:bg-black transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Get Service Quote</span>
              <ArrowUpRight className="w-4 h-4 text-[#F59E0B]" />
            </Link>

            <a
              href={`https://wa.me/919437000000?text=Hi%20Buzzler,%20I'm%20inquiring%20about%20your%20${encodeURIComponent(
                service.h1Title
              )}%20for%20my%20hotel%20in%20Puri.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-sm font-semibold hover:bg-emerald-100 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Section 1: Who It's For */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
              Ideal Properties
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mt-3">
              Who this service is engineered for in Puri & Odisha
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.targetAudience.map((target, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-stone-200 shadow-2xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 inline-block mb-3">
                    {target.tag}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-stone-900 mb-2">
                    {target.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {target.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-amber-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Tailored Campaign Angle</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: The Core Problem vs Buzzler Solution */}
        <section className="mb-20">
          <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                  The Local Reality
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                  {service.theProblem.painPoint}
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {service.theProblem.explanation}
                </p>
              </div>

              <div className="lg:col-span-7 bg-stone-800/90 border border-stone-700/80 p-6 sm:p-8 rounded-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                  The Buzzler Solution
                </div>
                <p className="text-sm sm:text-base text-stone-100 font-medium leading-relaxed">
                  {service.theProblem.buzzlerSolution}
                </p>
                <div className="flex items-center gap-2 text-xs text-stone-400 pt-2 border-t border-stone-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>No generic copy • 100% created on-site for Puri travelers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What's Included (Deliverables Breakdown) */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
              Full Scope Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mt-3">
              What is included in every engagement
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              Transparent deliverables with no hidden production fees or ambiguous retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((group, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-stone-200 shadow-2xs hover:border-stone-400 transition-all"
              >
                <h3 className="text-lg font-bold font-serif text-stone-900 mb-4 pb-3 border-b border-stone-100">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 4-Step Production Process */}
        <section className="mb-20">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mt-3">
              Our 4-step execution framework
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
              Streamlined from initial walkthrough in Puri to final booking conversion tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-6 rounded-3xl border border-stone-200 hover:border-amber-400/80 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold font-mono text-amber-600">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-medium text-stone-500 bg-white px-2 py-0.5 rounded-full border border-stone-200 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {step.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-stone-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/80 text-[11px] text-stone-800 font-medium">
                  <span className="text-stone-400 uppercase font-bold block mb-0.5">Deliverable:</span>
                  {step.output}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Interactive Tactile Estimator */}
        {service.calculatorOptions && (
          <section className="mb-20">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-md">
              <div className="max-w-2xl mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
                  Interactive Package Selector
                </span>
                <h2 className="text-2xl font-bold font-serif text-stone-900 mt-3">
                  {service.calculatorOptions.label}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Click through the package scopes below to view recommended monthly delivery models.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {service.calculatorOptions.options.map((opt, idx) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedCalcOption(idx)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      selectedCalcOption === idx
                        ? "border-[#141413] bg-[#141413] text-white shadow-xs"
                        : "border-stone-200 bg-[#FAF7F2] text-stone-800 hover:border-stone-400"
                    }`}
                  >
                    <span className="text-xs font-bold block mb-1">{opt.title}</span>
                    <span
                      className={`text-xs font-mono font-semibold ${
                        selectedCalcOption === idx ? "text-amber-400" : "text-amber-800"
                      }`}
                    >
                      {opt.metric}
                    </span>
                  </button>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-950 block">
                    Recommended Application
                  </span>
                  <p className="text-xs sm:text-sm text-stone-800 font-medium mt-1">
                    {service.calculatorOptions.options[selectedCalcOption].detail}
                  </p>
                </div>
                <Link
                  href="#service-quote"
                  className="shrink-0 px-5 py-2.5 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-colors"
                >
                  Request Quote for this Tier
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Section 6: Frequently Asked Questions (Supports SEO FAQPage schema) */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
              Puri Hotelier FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mt-3">
              Frequently asked questions about this service
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Honest answers to common questions about on-site filming, ad budgets, and timelines in Odisha.
            </p>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-stone-900 hover:text-amber-800 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-amber-600" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Service Specific Quote Form */}
        <section id="service-quote" className="mb-20">
          <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-stone-300/80 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
                  Custom Quote Flow
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                  Get a quote for {service.badge}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  All Buzzler pricing is customized per property depending on your room inventory, seasonality, and campaign goals.
                </p>
                <div className="p-4 rounded-2xl bg-white border border-stone-200 text-xs text-stone-600 space-y-2">
                  <div className="flex items-center gap-2 text-stone-900 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>On-Site in Puri, Odisha</span>
                  </div>
                  <p>
                    We provide in-person discovery walkthroughs for businesses located across Marine Drive, Swargadwar, VIP Road, Grand Road, Konark, and Bhubaneswar.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200">
                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-serif text-stone-900">
                      Inquiry Received
                    </h3>
                    <p className="text-xs text-stone-600 max-w-sm mx-auto">
                      Thank you, <strong>{formData.name}</strong>. We will review <strong>{formData.hotelName || "your business"}</strong> and contact you regarding <strong>{service.badge}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-full bg-stone-900 text-white text-xs font-bold"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Priyabrata Patnaik"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                          Business / Brand Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. The Coastal Bean / IronPulse Gym"
                          value={formData.hotelName}
                          onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 94370 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                        Specific Notes or Questions
                      </label>
                      <textarea
                        rows={2}
                        placeholder={`Tell us about your business goals or timeline for ${service.badge}...`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-full bg-[#141413] text-[#FAF7F2] text-xs font-bold hover:bg-black transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Send In-Depth Quote Request</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Related Services Navigation */}
        <section className="pt-8 border-t border-stone-200">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-stone-400">
              Explore Complementary Services
            </span>
            <Link
              href="/services"
              className="text-xs font-bold text-amber-800 hover:text-black transition-colors"
            >
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.relatedServices.map((rel, idx) => (
              <Link
                key={idx}
                href={rel.slug}
                className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {rel.title}
                  </h4>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-xs text-stone-500 line-clamp-2">
                  {rel.blurb}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
