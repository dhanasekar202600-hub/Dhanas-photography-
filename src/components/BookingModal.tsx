import React, { useState } from 'react';
import { X, Send, Calendar, CheckCircle2, MessageCircle, Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: defaultService || 'Wedding Photography & Videography',
    eventLocation: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync if defaultService changes
  React.useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, eventType: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    const existingInquiries = JSON.parse(localStorage.getItem('dhanas_inquiries') || '[]');
    existingInquiries.push({ ...formData, submittedAt: new Date().toISOString() });
    localStorage.setItem('dhanas_inquiries', JSON.stringify(existingInquiries));

    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi Dhanas Photography! I would like to inquire about booking my event:
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Event Date: ${formData.eventDate || 'TBD'}
• Event Type: ${formData.eventType}
• Location: ${formData.eventLocation || 'TBD'}
• Notes: ${formData.message || 'Looking forward to hearing from you!'}`;

    return `https://wa.me/91${BUSINESS_INFO.phone1}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full rounded-2xl bg-[#121110] border border-stone-800 p-6 sm:p-8 shadow-2xl text-stone-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white border border-stone-800 transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6 pr-8">
              <span className="text-[11px] uppercase tracking-widest text-[#dfba73] font-medium">
                Reserve Your Date
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Book a Shoot with Dhanas Photography
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm font-light mt-1">
                Enter your celebration details below and our team will get in touch immediately.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1">
                    Your Name <span className="text-[#c5a880]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1">
                    Phone / WhatsApp <span className="text-[#c5a880]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone number"
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1">
                    Event Date <span className="text-[#c5a880]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1">
                    Event Location / City
                  </label>
                  <input
                    type="text"
                    value={formData.eventLocation}
                    onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                    placeholder="City / Venue"
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1">
                  Service Type
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm focus:outline-none"
                >
                  <option value="Wedding Photography & Videography">Wedding Photography & Videography</option>
                  <option value="Wedding Photography">Wedding Photography</option>
                  <option value="Wedding Videography">Wedding Videography</option>
                  <option value="Pre-Wedding Shoots">Pre-Wedding Shoots</option>
                  <option value="Candid Photography">Candid Photography</option>
                  <option value="Traditional Photography">Traditional Photography</option>
                  <option value="Engagement Photography">Engagement Photography</option>
                  <option value="Couple Portraits">Couple Portraits</option>
                  <option value="Custom Multi-Day Wedding Package">Custom Multi-Day Wedding Package</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-300 font-medium mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Estimated guest count, specific requirements..."
                  className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#e5c98f] via-[#c5a880] to-[#dfba73] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Submit Booking Inquiry</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-6 text-center space-y-5 animate-in fade-in duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Inquiry Successfully Logged!
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
                Thank you, <strong className="text-[#e5c98f]">{formData.fullName}</strong>. We look forward to documenting your special day.
              </p>
            </div>

            <div className="pt-2 space-y-2.5 max-w-sm mx-auto">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Forward via WhatsApp Now</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
