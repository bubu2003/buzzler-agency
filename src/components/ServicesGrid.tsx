import Link from "next/link";
import {
  Video,
  Target,
  Users2,
  Palette,
  ArrowUpRight,
  Check,
  Sparkles,
  Layers,
} from "lucide-react";

const services = [
  {
    id: "video",
    icon: Video,
    tag: "Visual Storytelling",
    title: "Social Media Video & 4K Reels",
    subtitle: "Professional video production, promotional films and social media reels.",
    description:
      "Buzzler provides professional video production for businesses in Puri, Bhubaneswar and across Odisha. As a creative video production team, we create Instagram Reels, promotional videos, property walkthroughs and brand films that help businesses present their products, services and experiences through engaging visual content.",
    deliverables: [
      "Cafes & Dining: Sizzling dish macro-shots, mocktail pours & dining ambience",
      "Gyms & Fitness: High-energy workout cinematography & real transformation spotlights",
      "Schools & Colleges: Campus facility walkthroughs, laboratories & academic authority",
      "Real Estate & Hotels: Oceanfront views, property walkthroughs & lifestyle storytelling",
      "Music selection and sound design suited to each video",
    ],
    highlight: "Professional Video Production",
  },
  {
    id: "ads",
    icon: Target,
    tag: "Paid Acquisition",
    title: "Meta & Google Ads",
    subtitle: "Targeted Meta and Google advertising for local business growth.",
    description:
      "We manage Meta Ads on Instagram and Facebook, along with Google Ads campaigns for businesses in Puri, Bhubaneswar and across Odisha. From local lead generation and search campaigns to promotional advertising, we build campaigns around your business goals and track inquiries to understand campaign performance.",
    deliverables: [
      "Gyms: Direct WhatsApp trial pass lead capture funnels",
      "Colleges: High-intent student admission inquiry campaigns (Search + Social)",
      "Hotels: Geotargeted weekend staycation campaigns for neighboring cities",
      "Cafes & Retail: Radius-targeted weekend footfall and promotional ad sets",
      "Campaign inquiry and cost-per-lead reporting",
    ],
    highlight: "Targeted Local Advertising",
  },
  {
    id: "influencer",
    icon: Users2,
    tag: "Creator Collaborations",
    title: "Influencer Marketing",
    subtitle: "Regional influencer collaborations that build brand awareness.",
    description:
      "We help brands collaborate with regional content creators across Odisha and West Bengal. From food vloggers and fitness creators to lifestyle and travel influencers, we coordinate creator selection, campaign briefs, content publishing and performance reporting.",
    deliverables: [
      "Curated food vloggers for restaurant tasting events and review reels",
      "Local fitness creators testing and showcasing your gym facilities",
      "Travel creators documenting resort, hotel, and destination experiences",
      "Paid advertising usage rights, as agreed in campaign terms",
      "Campaign reach, engagement, and inquiry tracking reports",
    ],
    highlight: "Relevant Regional Creators",
  },
  {
    id: "branding",
    icon: Palette,
    tag: "Brand Identity",
    title: "Branding & Identity",
    subtitle: "Logo design, brand identity and consistent visual communication.",
    description:
      "We help businesses develop consistent brand identities through logo design, visual systems, typography, packaging and marketing materials. Our branding services help businesses communicate their identity clearly across digital platforms and physical customer touchpoints.",
    deliverables: [
      "Cafes & Restos: Print menus, digital QR menus & branded packaging",
      "Gyms: Brand marks, merchandise graphics & gym interior typography",
      "Schools & Colleges: Admission prospectuses, brochures & signage systems",
      "Hotels: Guest directories, digital key assets & property branding",
      "Social media brand style guide and design asset templates",
    ],
    highlight: "Consistent Visual Identity",
  },
];

export default function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 bg-white border-y border-stone-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/70 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#F59E0B]" />
              Four Core Services
            </div>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141413] font-serif"
            >
              Digital Marketing &amp; Creative Services in Odisha
            </h2>
          </div>
          <p className="text-stone-600 max-w-md text-sm sm:text-base leading-relaxed">
            Buzzler provides creative and digital marketing services to businesses
            in Puri, Bhubaneswar and across Odisha. Our work brings together video
            production, Meta and Google Ads, influencer marketing, and branding
            to help businesses build visibility and connect with relevant audiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#FAF7F2] rounded-3xl p-8 border border-stone-200 hover:border-amber-400/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Badge & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200/80 flex items-center justify-center text-stone-900 group-hover:bg-[#141413] group-hover:text-[#F59E0B] transition-all shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-700 shadow-2xs">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-stone-900 font-serif mb-2 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-stone-800 mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-stone-200/70">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-stone-400 block mb-2">
                      Cross-Industry Application:
                    </span>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA trigger */}
                <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center justify-between gap-2">
                  <Link
                    href={
                      service.id === "video"
                        ? "/services/video"
                        : service.id === "ads"
                        ? "/services/ads"
                        : service.id === "influencer"
                        ? "/services/influencer-marketing"
                        : "/services/branding"
                    }
                    className="inline-flex items-center gap-1 text-xs font-bold text-stone-900 hover:text-amber-700 transition-colors py-2 min-h-[40px]"
                  >
                    <span>View Service Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/contact?service=${service.id}`}
                    className="text-xs font-semibold text-amber-900 bg-amber-100/80 hover:bg-amber-200/80 px-3.5 py-2 min-h-[40px] flex items-center rounded-full transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Retainer Banner */}
        <div className="mt-12 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-200/70 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-900" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900">
                Need an integrated monthly marketing retainer?
              </p>
              <p className="text-xs text-stone-600">
                Combine regular video production, Meta and Google Ads management,
                and influencer collaborations through an integrated monthly
                marketing plan.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#141413] text-white text-xs font-bold hover:bg-black transition-colors"
          >
            Request Retainer Proposal
          </Link>
        </div>
      </div>
    </section>
  );
}
