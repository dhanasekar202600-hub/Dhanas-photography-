import React from 'react';
import { SERVICES, ServiceItem } from '../data/photographyData.ts';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#090807] relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Our Dedicated Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Artisanal Photography & Cinematic Videography
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-4 font-light text-balance">
            Tailored visual storytelling crafted to document every emotion, ritual, and celebration of your life with timeless sophistication.
          </p>
        </div>

        {/* 7 Services Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => {
            const isFeatured = index === 0 || index === 1; // Wedding Photography & Videography get prominent styling
            return (
              <div
                key={service.id}
                className={`group flex flex-col bg-[#121110] border border-stone-800/90 hover:border-[#c5a880]/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1 bg-gradient-to-b from-[#141210] to-[#100f0e]' : ''
                }`}
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/20" />
                  
                  {/* Category unboxed tag */}
                  <div className="absolute top-3 left-3 text-[11px] font-medium uppercase tracking-wider text-[#e5c98f] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded">
                    {service.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#dfba73] transition-colors mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>

                    {/* Highlights list */}
                    <ul className="space-y-2 mb-6 border-t border-stone-800/60 pt-4">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                          <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking Trigger for this Specific Service */}
                  <div className="pt-2 border-t border-stone-800/60">
                    <button
                      onClick={() => onSelectServiceForBooking(service.title)}
                      className="w-full py-2.5 px-4 text-xs font-semibold tracking-wider uppercase text-stone-200 hover:text-black bg-stone-900 hover:bg-[#c5a880] border border-stone-800 hover:border-[#c5a880] rounded transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Inquire for {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Package Consultation Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-stone-950 via-[#181512] to-stone-950 border border-[#c5a880]/30 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
            Planning a Multi-Day Wedding or Destination Celebration?
          </h3>
          <p className="text-stone-400 text-sm max-w-xl mx-auto mb-6 font-light">
            We customize bespoke photo & cinema bundles combining candid coverage, traditional rituals, drone cinematography, and heirloom albums tailored to your itinerary.
          </p>
          <button
            onClick={() => onSelectServiceForBooking('Custom Multi-Day Wedding Package')}
            className="px-6 py-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-black bg-gradient-to-r from-[#e5c98f] via-[#c5a880] to-[#dfba73] rounded-md hover:brightness-110 active:scale-95 transition-all shadow-md cursor-pointer"
          >
            Request Custom Package Quote
          </button>
        </div>

      </div>
    </section>
  );
};
