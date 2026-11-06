import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Gallery } from './components/Gallery.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingQuickContact } from './components/FloatingQuickContact.tsx';
import { BookingModal } from './components/BookingModal.tsx';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (service?: string) => {
    setPreselectedService(service);
    setIsBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setPreselectedService(serviceName);
    // Smooth scroll down to contact section
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0b0a] text-stone-100 flex flex-col font-sans selection:bg-[#c5a880] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About Us */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Services (7 Distinct Offerings) */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 4. Portfolio / Gallery with Lightbox */}
        <Gallery onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Contact Us & Booking Inquiry Form */}
        <ContactSection
          preselectedService={preselectedService}
          onClearPreselectedService={() => setPreselectedService(undefined)}
        />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating Quick Action Widget (WhatsApp & Call) */}
      <FloatingQuickContact />

      {/* Quick Booking Pop-up Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultService={preselectedService}
      />
    </div>
  );
}
