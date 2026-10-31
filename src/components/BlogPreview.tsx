"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";

const articles = [
  {
    category: "Cafe & Restaurant Marketing",
    title: "The Weekend Rush: How Coastal Cafes & Restaurants Pack Tables with 4K Food Reels",
    excerpt:
      "How artisanal beach eateries bypass heavy food delivery aggregator commissions using high-contrast food sizzlers and Click-to-WhatsApp table reservations.",
    readTime: "5 min read",
    date: "October 2026",
    tag: "Dining Footfall",
  },
  {
    category: "Fitness & Gym Growth",
    title: "Gym Membership Funnels: Turning Seasonal Resolutions into Loyal Annual Members",
    excerpt:
      "Why high-octane workout cinematography paired with automated 3-day trial pass WhatsApp bots consistently outperforms generic gym flyers.",
    readTime: "6 min read",
    date: "October 2026",
    tag: "Member Acquisition",
  },
  {
    category: "Institutes & Stays",
    title: "Campus Drone Films & Local SEO: How Regional Odisha Brands Dominate High-Intent Search",
    excerpt:
      "Capturing parents, students, and travelers at the exact moment they search Google Maps and evaluating competitors across coastal Odisha.",
    readTime: "7 min read",
    date: "October 2026",
    tag: "Search & Inquiries",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#F59E0B]" />
              Local Growth Insights
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif">
              Field notes & marketing playbooks for Puri & Odisha brands.
            </h2>
          </div>
          <Link
            href="#quote"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-900 hover:text-amber-700 transition-colors"
          >
            <span>Subscribe for Local Growth Updates</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Articles Grid (Clay-style tactile content cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((post, idx) => (
            <article
              key={idx}
              className="bg-[#FAF7F2] p-6 sm:p-7 rounded-3xl border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-700">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-stone-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 font-serif mb-3 group-hover:text-amber-800 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-semibold">
                <span className="text-stone-400 font-mono text-[11px]">
                  {post.date}
                </span>
                <span className="text-stone-900 group-hover:text-amber-700 flex items-center gap-1 transition-colors">
                  <span>Read Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
