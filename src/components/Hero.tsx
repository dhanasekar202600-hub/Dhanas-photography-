import React from 'react';
import { Calendar, ChevronDown, Phone, MessageCircle, Instagram, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-Screen Luxury Wedding Photography Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_wedding_couple_1793965102743.jpg"
          alt="Dhanas Photography - Luxury Wedding Couple"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
          referrerPolicy="no-referrer"
        />

        {/* Sophisticated Multi-Layer Scrim for Flawless Readability & Warm Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/65 to-black/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0c0b0a]/30 to-[#0c0b0a]/80" />
      </div>

      {/* Main Typographic Hierarchy & CTAs */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-20">
        {/* Subtle Editorial Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/60 backdrop-blur-md border border-[#c5a880]/30 text-xs sm:text-sm text-[#e5c98f] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
          <span className="tracking-[0.2em] uppercase font-medium">Fine-Art Wedding Storytelling</span>
        </div>

        {/* Grand Brand Name */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 sm:mb-6 text-balance">
          Dhanas Photography
        </h1>

        {/* Professional Tagline */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#e5c98f] font-normal mb-6 tracking-wide text-balance max-w-3xl mx-auto">
          “{BUSINESS_INFO.tagline}”
        </p>

        {/* Editorial Subtitle / Value Description */}
        <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light text-balance">
          Preserving raw emotional beauty, unposed laughter, sacred traditions, and royal celebrations across India through high-definition cinematic photography and videography.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-black bg-gradient-to-r from-[#e5c98f] via-[#c5a880] to-[#dfba73] rounded-md hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-950/40 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Date</span>
          </button>

          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-stone-200 bg-black/40 hover:bg-stone-900/80 backdrop-blur-md border border-stone-700/80 hover:border-[#c5a880] rounded-md transition-all flex items-center justify-center gap-2 text-center"
          >
            <span>View Portfolio</span>
          </a>
        </div>

        {/* Direct Connect Quick Strip */}
        <div className="pt-4 border-t border-stone-800/80 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <span className="text-stone-500 uppercase tracking-wider text-[11px]">Direct Reach:</span>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phone1}`}
            className="flex items-center gap-1.5 hover:text-[#dfba73] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{BUSINESS_INFO.phone1Formatted}</span>
          </a>

          <span className="text-stone-700 hidden sm:inline">·</span>

          <a
            href={BUSINESS_INFO.whatsappUrl1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Connect</span>
          </a>

          <span className="text-stone-700 hidden sm:inline">·</span>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#dfba73] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{BUSINESS_INFO.instagramHandle}</span>
          </a>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-stone-400 hover:text-[#dfba73] transition-colors flex flex-col items-center gap-1 text-[11px] tracking-widest uppercase opacity-75 hover:opacity-100"
      >
        <span>Discover</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
