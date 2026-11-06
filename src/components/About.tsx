import React from 'react';
import { Camera, Heart, Sparkles, Film, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0c0b0a] relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
              <span>About Dhanas Photography</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] text-balance">
              Where True Emotions Turn Into Everlasting Heirlooms.
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              At <strong className="text-[#e5c98f] font-semibold">Dhanas Photography</strong>, we view every wedding not simply as a ceremonial schedule, but as a rich tapestry of authentic love, sacred heritage, and unrepeatable human emotions.
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Our signature philosophy blends unobtrusive documentary candid photography with timeless, fine-art editorial portraits. Whether it is the subtle tear in a father’s eye, the triumphant shower of fragrant marigolds during the muhurtham, or the whispered laughter between a newlywed couple at twilight—we capture the soul of your celebration without turning your special day into a rigid film set.
            </p>

            {/* Core Values Strip (Clean Unboxed Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-800/80">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-stone-900 border border-stone-800 shrink-0 text-[#c5a880]">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-200">Emotion-First Storytelling</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Capturing raw spontaneity and true sentiment as it unfolds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-stone-900 border border-stone-800 shrink-0 text-[#c5a880]">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-200">Cinematic Color Palette</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Bespoke warm champagne color grading tailored for wedding grandeur.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-stone-900 border border-stone-800 shrink-0 text-[#c5a880]">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-200">State-of-the-Art Gear</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Dual-card professional sensors ensuring zero loss of priceless moments.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-stone-900 border border-stone-800 shrink-0 text-[#c5a880]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-200">Tailored Client Care</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Dedicated collaboration from initial timeline planning to album delivery.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#e5c98f] hover:text-white transition-colors group cursor-pointer"
              >
                <span>Discuss Your Wedding Vision</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Frame Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl shadow-black/80 aspect-[4/5]">
                <img
                  src="/src/assets/images/service_candid_moment_1793965103727.jpg"
                  alt="Dhanas Photography Candid Wedding Moment"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[11px] tracking-widest uppercase text-[#dfba73] font-medium mb-1">
                    Candid Realism
                  </div>
                  <p className="text-sm text-stone-200 font-serif italic">
                    “Every smile carries a story, every glance holds a universe.”
                  </p>
                </div>
              </div>

              {/* Offset Accent Overlap Image */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-44 rounded-xl overflow-hidden border-2 border-stone-900 shadow-2xl shadow-black/90 aspect-[3/4]">
                <img
                  src="/src/assets/images/portfolio_prewedding_couple_1793965104268.jpg"
                  alt="Dhanas Photography Pre-wedding shoot"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Champagne Gold Border Edge */}
              <div className="absolute -inset-2 rounded-2xl border border-[#c5a880]/20 -z-10 pointer-events-none transform translate-x-2 translate-y-2" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
