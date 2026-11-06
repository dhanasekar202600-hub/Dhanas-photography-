import React from 'react';
import { Phone, MessageCircle, Instagram, Mail, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080706] border-t border-stone-800 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block group">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase font-bold text-white group-hover:text-[#dfba73] transition-colors">
                Dhanas Photography
              </span>
              <p className="text-xs tracking-[0.25em] uppercase text-[#c5a880] mt-0.5">
                Fine Art Weddings & Cinematography
              </p>
            </a>

            <p className="font-serif italic text-base text-stone-300 max-w-sm">
              “{BUSINESS_INFO.tagline}”
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md font-light">
              Specializing in luxury wedding celebrations, emotional candid storytelling, cinematic wedding films, pre-wedding destination shoots, and timeless couple portraits.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-pink-400 hover:border-pink-500/50 transition-all"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone1}`}
                className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-[#dfba73] hover:border-[#c5a880]/50 transition-all"
                aria-label="Call Dhanas Photography"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-[#dfba73] hover:border-[#c5a880]/50 transition-all"
                aria-label="Email Dhanas Photography"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dfba73]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Dhanas</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Wedding Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Curated Portfolio</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Check Availability & Pricing</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dfba73]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300 font-light">
              <div>
                <span className="text-stone-500 block text-[11px] uppercase tracking-wider">Phone 1:</span>
                <a href={`tel:${BUSINESS_INFO.phone1}`} className="hover:text-[#dfba73] font-medium transition-colors">
                  {BUSINESS_INFO.phone1Formatted}
                </a>
              </div>
              <div>
                <span className="text-stone-500 block text-[11px] uppercase tracking-wider">Phone 2:</span>
                <a href={`tel:${BUSINESS_INFO.phone2}`} className="hover:text-[#dfba73] font-medium transition-colors">
                  {BUSINESS_INFO.phone2Formatted}
                </a>
              </div>
              <div>
                <span className="text-stone-500 block text-[11px] uppercase tracking-wider">Instagram:</span>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>
              <div>
                <span className="text-stone-500 block text-[11px] uppercase tracking-wider">Email:</span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#dfba73] transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Dhanas Photography. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Fine-Art Wedding Storytelling</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:border-stone-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
