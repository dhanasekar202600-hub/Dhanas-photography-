import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, Mail, Menu, X, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData.ts';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Micro Info Ribbon for direct contact */}
      <div className="hidden lg:block bg-[#090807] border-b border-stone-800/80 text-[12px] text-stone-400 py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${BUSINESS_INFO.phone1}`}
              className="flex items-center gap-1.5 hover:text-[#dfba73] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{BUSINESS_INFO.phone1Formatted}</span>
            </a>
            <span className="text-stone-700">·</span>
            <a
              href={`tel:${BUSINESS_INFO.phone2}`}
              className="flex items-center gap-1.5 hover:text-[#dfba73] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{BUSINESS_INFO.phone2Formatted}</span>
            </a>
            <span className="text-stone-700">·</span>
            <a
              href={BUSINESS_INFO.whatsappUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400/90 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#dfba73] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{BUSINESS_INFO.instagramHandle}</span>
            </a>
            <span className="text-stone-700">·</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#dfba73] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Navigation complying with 3-Zone Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0b0a]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-stone-800/80 py-3.5'
            : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex flex-col group whitespace-nowrap shrink-0"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.22em] uppercase font-bold text-stone-100 group-hover:text-[#dfba73] transition-colors">
              Dhanas Photography
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#c5a880] font-sans -mt-0.5">
              Fine Art Weddings
            </span>
          </a>

          {/* Zone 2: 4–5 single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#dfba73] transition-colors tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[#dfba73] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#e5c98f] via-[#c5a880] to-[#dfba73] rounded-md hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-950/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Shoot</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0e0d0c] border-b border-stone-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-stone-300 hover:text-[#dfba73] transition-colors py-2 border-b border-stone-800/50"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#e5c98f] via-[#c5a880] to-[#dfba73] rounded-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Shoot</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <a
                  href={`tel:${BUSINESS_INFO.phone1}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-900 border border-stone-800 rounded-md text-stone-300 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-950/40 border border-emerald-800/40 rounded-md text-emerald-300"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
