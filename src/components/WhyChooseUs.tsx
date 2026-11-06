import React from 'react';
import { Sparkles, Camera, ShieldCheck, Palette, Smile } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/photographyData.ts';

export const WhyChooseUs: React.FC = () => {
  const icons = [Smile, Palette, Camera, ShieldCheck];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#090807] relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>The Dhanas Distinction</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Why Discerning Couples Choose Dhanas Photography
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-4 font-light text-balance">
            A relentless commitment to visual poetry, emotional authenticity, and dependable professionalism on the most momentous day of your lives.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index % icons.length];
            const numStr = `0${index + 1}.`;

            return (
              <div
                key={index}
                className="group relative p-8 sm:p-10 rounded-2xl bg-[#121110] border border-stone-800 hover:border-[#c5a880]/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  {/* Editorial Index */}
                  <span className="font-serif text-2xl font-bold text-[#c5a880]/80">
                    {numStr}
                  </span>
                  <div className="p-3 rounded-lg bg-stone-900 border border-stone-800/80 text-[#dfba73] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#dfba73] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#c5a880]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

        {/* Photography Ethos Quote Banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-xl bg-stone-950/60 border border-stone-800/60">
          <p className="font-serif italic text-lg sm:text-xl text-stone-200">
            “Photography is the beauty of life captured. When words cannot express what occurred, our imagery speaks forever.”
          </p>
          <div className="mt-3 text-xs tracking-widest uppercase text-[#c5a880]">
            — Dhanas Photography Creative Team
          </div>
        </div>

      </div>
    </section>
  );
};
