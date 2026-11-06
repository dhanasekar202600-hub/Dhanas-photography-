import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData.ts';

export const FloatingQuickContact: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Quick Contact Card */}
      {showOptions && (
        <div className="mb-3 w-72 rounded-2xl bg-[#121110]/95 backdrop-blur-md border border-[#c5a880]/40 p-4 shadow-2xl text-stone-200 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-stone-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#dfba73]">
              Quick Connect
            </span>
            <button
              onClick={() => setShowOptions(false)}
              className="p-1 rounded text-stone-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 space-y-2 text-xs">
            {/* WhatsApp 1 */}
            <a
              href={BUSINESS_INFO.whatsappUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/50 text-emerald-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {BUSINESS_INFO.phone1}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase">Chat →</span>
            </a>

            {/* WhatsApp 2 */}
            <a
              href={BUSINESS_INFO.whatsappUrl2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/50 text-emerald-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {BUSINESS_INFO.phone2}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase">Chat →</span>
            </a>

            {/* Direct Call 1 */}
            <a
              href={`tel:${BUSINESS_INFO.phone1}`}
              className="flex items-center justify-between p-2 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#dfba73]" />
                <span>Call {BUSINESS_INFO.phone1}</span>
              </div>
              <span className="text-[10px] text-stone-400 uppercase">Call</span>
            </a>

            {/* Direct Call 2 */}
            <a
              href={`tel:${BUSINESS_INFO.phone2}`}
              className="flex items-center justify-between p-2 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#dfba73]" />
                <span>Call {BUSINESS_INFO.phone2}</span>
              </div>
              <span className="text-[10px] text-stone-400 uppercase">Call</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-2">
        <a
          href={BUSINESS_INFO.whatsappUrl1}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-950/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Direct WhatsApp Message"
          title="Direct WhatsApp Message"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>

        <button
          onClick={() => setShowOptions(!showOptions)}
          className="p-3.5 rounded-full bg-gradient-to-r from-[#e5c98f] to-[#c5a880] text-black shadow-xl shadow-black/60 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Open Contact Options"
          title="Direct Call & Inquiries"
        >
          <Phone className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
