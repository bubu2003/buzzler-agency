"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function MobileQuickBar() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
      <div className="bg-[#141413]/95 backdrop-blur-md p-2 rounded-full border border-stone-800 shadow-2xl flex items-center gap-2">
        <a
          href="tel:+919437000000"
          className="flex-1 py-2.5 px-3 rounded-full bg-stone-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-stone-700 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Call Us</span>
        </a>

        <a
          href="https://wa.me/919437000000?text=Hi%20Buzzler%20Agency,%20I'd%20like%20to%20discuss%20marketing%20for%20my%20hotel%20in%20Puri."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-emerald-500 active:scale-95 transition-all shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
