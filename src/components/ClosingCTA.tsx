"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Send,
  Sparkles,
} from "lucide-react";

const availableServices = [
  "Social Media Video (Reels/Drone)",
  "Meta & Google Ads",
  "Influencer Marketing",
  "Branding & Identity",
  "Full Season Retainer",
];

export default function ClosingCTA() {
  const [formData, setFormData] = useState({
    name: "",
    hotelName: "",
    phone: "",
    email: "",
    services: ["Social Media Video (Reels/Drone)"],
    propertyType: "Beach Resort",
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
    <section id="quote" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-xs font-semibold uppercase tracking-wider text-amber-950 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                Start The Conversation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif leading-[1.12]">
                Ready to make your hotel the buzz of Puri?
              </h2>
              <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                Whether you need a single viral drone reel campaign before Rath Yatra or a complete direct booking engine, we're ready to tailor a strategy for your property.
              </p>
            </div>

            {/* Quick Connect Cards */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919437000000?text=Hi%20Buzzler%20Agency,%20I'd%20like%20to%20request%20a%20marketing%20quote%20for%20my%20hotel%20in%20Puri."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-500 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5 fill-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                      Fastest Response
                    </span>
                    <span className="text-sm font-bold text-stone-900">
                      Chat on WhatsApp (+91 94370 00000)
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="tel:+919437000000"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <span className="text-sm font-bold text-stone-900">
                      +91 94370 00000 (Mon–Sat, 9:30am–7pm)
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Local Office Details */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3 text-xs text-stone-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  <strong>Office Location:</strong> Marine Drive Road, Near Swargadwar, Puri, Odisha 752001
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  <strong>On-Site Consultations:</strong> We visit your hotel in Puri, Konark, or Bhubaneswar for in-person walkthroughs.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  <strong>Email Inquiries:</strong> hello@buzzleragency.com
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">
                  Quote Request Received!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. The Buzzler team will review <strong>{formData.hotelName || "your property"}</strong> and contact you via WhatsApp / Phone at <strong>{formData.phone}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-bold hover:bg-black"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-stone-900">
                    Request A Custom Proposal
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Fill out the quick details below and we will prepare a tailored marketing scope.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Mohanty"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Hotel / Resort Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Golden Sands Beach Resort"
                      value={formData.hotelName}
                      onChange={(e) =>
                        setFormData({ ...formData, hotelName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="manager@hotel.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Services Multi-Select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                    Services You Are Interested In (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((service) => {
                      const selected = formData.services.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                            selected
                              ? "bg-[#141413] text-[#F59E0B] border-[#141413]"
                              : "bg-[#FAF7F2] text-stone-700 border-stone-200 hover:border-stone-400"
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Property Type & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Property Category
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) =>
                        setFormData({ ...formData, propertyType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]"
                    >
                      <option>Beachfront Ocean Resort</option>
                      <option>Temple Heritage Stay</option>
                      <option>Boutique Homestay / Villa</option>
                      <option>Budget / Pilgrim Hotel</option>
                      <option>Restaurant / Cafe in Puri</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Target Timeframe
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B]">
                      <option>Immediate (Within 2 weeks)</option>
                      <option>Before Upcoming Holiday Season</option>
                      <option>Rath Yatra / Long Weekend Window</option>
                      <option>Exploring / General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                    Specific Goals or Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your room capacity, current booking challenges, or questions..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#141413] text-[#FAF7F2] text-sm font-bold hover:bg-black transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4 text-[#F59E0B]" />
                  <span>Send Quote Request</span>
                </button>

                <p className="text-[11px] text-stone-400 text-center">
                  100% confidential. No spam. You will hear directly from our founding team in Puri.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
