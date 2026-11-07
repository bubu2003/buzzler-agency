import Link from "next/link";
import {
  MapPin,
  Video,
  Languages,
  ShieldCheck,
  ArrowUpRight,
  SunMedium,
  CheckCircle,
} from "lucide-react";

const pillars = [
  {
    icon: MapPin,
    title: "Understanding the Puri & Odisha Market",
    subtitle: "Local Market Understanding",
    description:
      "Effective marketing starts with understanding the audience. We consider regional preferences, tourism patterns, local events and seasonal demand when developing campaigns for businesses in Puri, Bhubaneswar and across Odisha.",
    points: [
      "On-ground video production across Puri, Bhubaneswar and coastal Odisha",
      "Campaign strategies informed by regional audiences and consumer preferences",
      "Content planning around relevant festivals, events and seasonal demand",
    ],
  },
  {
    icon: Video,
    title: "Creative Video Production & Storytelling",
    subtitle: "Emotional Visual Storytelling",
    description:
      "We create visual content that helps businesses showcase their products, services and experiences. From Instagram Reels and YouTube Shorts to campus films, property walkthroughs and promotional videos, our approach combines planning, filming and post-production.",
    points: [
      "Professional camera setups, stabilized gimbals and aerial footage where available",
      "Music selection, editing and sound design suited to each video",
      "Vertical video formats designed for Instagram Reels and YouTube Shorts",
    ],
  },
  {
    icon: Languages,
    title: "Multilingual Fluency",
    subtitle: "Odia • Bengali • Hindi • English",
    description:
      "We understand that audiences across Odisha and neighboring regions communicate in different languages. Our multilingual content approach helps businesses connect with local customers, regional visitors and wider audiences through relevant messaging.",
    points: [
      "Localized ad copy that sounds native and culturally resonant",
      "Creative concepts that respect local traditions while embracing modern trends",
      "Multilingual video voiceovers, subtitles, and social captions",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Transparent Marketing & Performance Tracking",
    subtitle: "Campaign Insights & Business Inquiries",
    description:
      "We focus on meaningful campaign indicators such as phone calls, WhatsApp inquiries, website visits and customer leads. Our reporting helps businesses understand how their advertising campaigns are performing and where improvements can be made.",
    points: [
      "Transparent reporting of advertising spend and campaign performance",
      "WhatsApp, phone call and inquiry tracking where technically supported",
      "A focus on genuine audience engagement rather than inflated vanity metrics",
    ],
  },
];

export default function WhyBuzzler() {
  return (
    <section id="why-buzzler" className="py-24 bg-white border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-900 border border-amber-300/60 text-xs font-semibold uppercase tracking-wider mb-4">
            <SunMedium className="w-3.5 h-3.5 text-[#F59E0B]" />
            The Buzzler Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif mb-4">
            A Creative Agency in Odisha Focused on Business Growth
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Buzzler helps businesses in Puri, Bhubaneswar and across Odisha
            strengthen their brands through creative campaigns, professional
            video production, social media marketing and performance advertising.
            Our approach combines regional market understanding with creative
            execution tailored to each business.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#FAF7F2] rounded-3xl p-8 border border-stone-200 hover:border-stone-400/80 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-stone-900 shadow-2xs">
                      <Icon className="w-6 h-6 text-[#141413]" />
                    </div>
                    <span className="text-xs font-bold text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 font-serif mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-stone-200/80">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-stone-800 font-medium">
                        <CheckCircle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Multi-Industry Callout Strip */}
        <div className="mt-16 bg-[#141413] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Odisha Business Strategy
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#FAF7F2]">
                Ready to Grow Your Business with Buzzler?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Whether you need promotional videos, stronger brand identity,
                influencer collaborations or targeted advertising, Buzzler can
                help you plan a marketing approach suited to your business goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F59E0B] text-black text-sm font-bold hover:bg-amber-400 transition-all shrink-0 shadow-md cursor-pointer"
            >
              <span>Discuss Your Marketing Goals</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
