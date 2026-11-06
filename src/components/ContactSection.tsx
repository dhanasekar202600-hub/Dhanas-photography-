import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, Mail, Calendar, Send, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/photographyData.ts';

interface ContactSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onClearPreselectedService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: preselectedService || 'Wedding Photography & Videography',
    eventLocation: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // Sync when preselectedService changes from parent
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, eventType: preselectedService }));
    }
  }, [preselectedService]);

  const eventTypes = [
    'Wedding Photography & Videography',
    'Wedding Photography',
    'Wedding Videography',
    'Pre-Wedding Shoots',
    'Candid Photography',
    'Traditional Photography',
    'Engagement Photography',
    'Couple Portraits',
    'Custom Multi-Day Wedding Package',
    'Other Celebration',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    // Save locally
    const existingInquiries = JSON.parse(localStorage.getItem('dhanas_inquiries') || '[]');
    existingInquiries.push({ ...formData, submittedAt: new Date().toISOString() });
    localStorage.setItem('dhanas_inquiries', JSON.stringify(existingInquiries));

    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      eventDate: '',
      eventType: 'Wedding Photography & Videography',
      eventLocation: '',
      message: '',
    });
    if (onClearPreselectedService) onClearPreselectedService();
  };

  // Generate pre-formatted WhatsApp text
  const generateWhatsAppMessage = (phoneTarget: string) => {
    const data = submittedData || formData;
    const text = `Hi Dhanas Photography! I would like to inquire about booking my event:
• Name: ${data.fullName || 'Client'}
• Phone: ${data.phone || 'Not specified'}
• Event Date: ${data.eventDate || 'To be decided'}
• Event Type: ${data.eventType}
• Location: ${data.eventLocation || 'TBD'}
• Message: ${data.message || 'Looking forward to hearing from you!'}`;

    return `https://wa.me/91${phoneTarget}?text=${encodeURIComponent(text)}`;
  };

  // Generate mailto link
  const generateEmailLink = () => {
    const data = submittedData || formData;
    const subject = `Booking Inquiry: ${data.eventType} - ${data.fullName || 'New Client'}`;
    const body = `Hello Dhanas Photography Team,

I would like to inquire about booking a shoot:

Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}
Event Date: ${data.eventDate}
Event Type: ${data.eventType}
Location: ${data.eventLocation}

Details / Message:
${data.message}

Thank you!`;

    return `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0c0b0a] relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Let's Create Timeless Art Together
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-4 font-light text-balance">
            Dates for wedding seasons fill up swiftly. Reach out via direct call, WhatsApp, or submit your event vision below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#121110] border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-light">
                Available for phone consultations, WhatsApp discussions, and in-person meetings.
              </p>

              {/* Phone 1 Contact Card */}
              <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-stone-800 text-[#c5a880]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-stone-400">Primary Contact</div>
                      <div className="text-base font-semibold text-white tracking-wide">{BUSINESS_INFO.phone1Formatted}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phone1}`}
                    className="py-2 px-3 text-xs font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 rounded text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#dfba73]" />
                    <span>Direct Call</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-xs font-medium text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/50 rounded text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Phone 2 Contact Card */}
              <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded bg-stone-800 text-[#c5a880]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-stone-400">Secondary Contact</div>
                      <div className="text-base font-semibold text-white tracking-wide">{BUSINESS_INFO.phone2Formatted}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phone2}`}
                    className="py-2 px-3 text-xs font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 rounded text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#dfba73]" />
                    <span>Direct Call</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-xs font-medium text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/50 rounded text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-gradient-to-r from-stone-900 via-stone-900 to-[#1e141a] border border-stone-800 hover:border-pink-500/50 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-pink-950/50 text-pink-400 border border-pink-900/40 group-hover:scale-105 transition-transform">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-stone-400">Instagram Gallery</div>
                    <div className="text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                      {BUSINESS_INFO.instagramHandle}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-pink-400 font-medium group-hover:underline">Visit Profile →</span>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="group p-4 rounded-xl bg-stone-900/80 border border-stone-800 hover:border-[#c5a880]/50 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-stone-800 text-[#c5a880] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] uppercase tracking-wider text-stone-400">Official Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-[#dfba73] transition-colors">
                      {BUSINESS_INFO.email}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-[#c5a880] font-medium group-hover:underline shrink-0 ml-2">Email →</span>
              </a>

            </div>

            {/* Quick Note Card */}
            <div className="p-5 rounded-xl bg-stone-950 border border-stone-800/80 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
              <div className="text-xs text-stone-400 leading-relaxed">
                <strong className="text-stone-200">Prompt Response Time:</strong> We reply to all WhatsApp and phone inquiries within 1–2 hours during business hours.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121110] border border-stone-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
              
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                      Check Date Availability & Pricing
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm font-light">
                      Fill out your event details below to receive a personalized quote and confirmation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                          Your Full Name <span className="text-[#c5a880]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Priya Sharma"
                          className="w-full px-4 py-3 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm placeholder-stone-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                          Phone / WhatsApp Number <span className="text-[#c5a880]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm placeholder-stone-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email & Event Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm placeholder-stone-600 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                          Event Date <span className="text-[#c5a880]">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full px-4 py-3 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm placeholder-stone-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Event Type & City/Venue */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                          Service / Event Type
                        </label>
                        <select
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="w-full px-4 py-3 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm focus:outline-none transition-colors"
                        >
                          {eventTypes.map((type) => (
                            <option key={type} value={type} className="bg-stone-950 text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                          Event Location / City
                        </label>
                        <input
                          type="text"
                          value={formData.eventLocation}
                          onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                          placeholder="e.g. Coimbatore / Chennai / Bangalore"
                          className="w-full px-4 py-3 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm placeholder-stone-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message / Vision */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                        Tell Us About Your Event & Vision
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share any special preferences, number of functions, timeline, or specific traditions..."
                        className="w-full px-4 py-3 bg-stone-900 border border-stone-800 focus:border-[#c5a880] rounded-lg text-white text-sm placeholder-stone-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Actions */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-black bg-gradient-to-r from-[#e5c98f] via-[#c5a880] to-[#dfba73] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-950/40 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Booking Inquiry</span>
                      </button>
                    </div>

                    {/* Fast WhatsApp alternative */}
                    <div className="pt-3 text-center">
                      <span className="text-xs text-stone-500">Need immediate answers? </span>
                      <a
                        href={generateWhatsAppMessage(BUSINESS_INFO.phone1)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#dfba73] hover:underline font-medium"
                      >
                        Chat directly on WhatsApp with Dhanas
                      </a>
                    </div>
                  </form>
                </>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                      Inquiry Received!
                    </h3>
                    <p className="text-stone-300 text-sm max-w-md mx-auto">
                      Thank you, <strong className="text-[#e5c98f]">{submittedData?.fullName}</strong>. The Dhanas Photography team will review your date (<strong className="text-white">{submittedData?.eventDate}</strong>) and connect with you shortly.
                    </p>
                  </div>

                  {/* Immediate forward options */}
                  <div className="p-5 rounded-xl bg-stone-900/90 border border-stone-800 max-w-md mx-auto space-y-3 text-left">
                    <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold text-center mb-1">
                      Fast-Track Your Booking Now
                    </div>

                    <a
                      href={generateWhatsAppMessage(BUSINESS_INFO.phone1)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Details via WhatsApp (9585268973)</span>
                    </a>

                    <a
                      href={generateWhatsAppMessage(BUSINESS_INFO.phone2)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-800/60 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to Alternate WhatsApp (9944504303)</span>
                    </a>

                    <a
                      href={generateEmailLink()}
                      className="w-full py-2.5 px-4 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors text-center"
                    >
                      <Mail className="w-4 h-4 text-[#c5a880]" />
                      <span>Send via Email</span>
                    </a>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="text-xs text-stone-400 hover:text-white underline transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
