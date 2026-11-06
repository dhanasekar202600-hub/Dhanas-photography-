import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/photographyData.ts';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface GalleryProps {
  onOpenBooking: () => void;
}

type CategoryFilter = 'All' | 'Weddings' | 'Candid' | 'Pre-Wedding' | 'Traditional' | 'Couple Portraits';

export const Gallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Weddings',
    'Candid',
    'Pre-Wedding',
    'Traditional',
    'Couple Portraits',
  ];

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') setSelectedPhoto(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, filteredPhotos]);

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((item) => item.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex((item) => item.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0c0b0a] relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            Stories Framed In Eternity
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-4 font-light text-balance">
            Explore authentic moments, breathtaking emotions, sacred rituals, and royal couple celebrations captured by Dhanas Photography.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control complying with frontend-design) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#e5c98f] to-[#c5a880] text-black shadow-lg shadow-amber-950/30 font-semibold'
                  : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            // Give varied aspect ratio / presence for a dynamic editorial masonry feel
            const isTall = index % 3 === 0;
            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className={`group relative overflow-hidden rounded-xl border border-stone-800/90 hover:border-[#c5a880]/60 bg-stone-900 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isTall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] tracking-wider uppercase text-[#e5c98f] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded">
                      {photo.category}
                    </span>
                    <div className="p-2 rounded-full bg-black/60 text-white/80 group-hover:text-[#dfba73] group-hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#dfba73] transition-colors mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-2 font-light">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors z-20 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors z-20 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors z-20 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content Card */}
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden max-h-[68vh]">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption & Book Shoot action */}
              <div className="p-6 bg-[#0f0e0d] border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[11px] uppercase tracking-widest text-[#dfba73] font-medium">
                      {selectedPhoto.category}
                    </span>
                    {selectedPhoto.location && (
                      <>
                        <span className="text-stone-600">·</span>
                        <span className="text-[11px] text-stone-400">{selectedPhoto.location}</span>
                      </>
                    )}
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-light mt-1">
                    {selectedPhoto.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedPhoto(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#e5c98f] to-[#c5a880] rounded-md hover:brightness-110 active:scale-95 transition-all shadow-md shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Similar Shoot</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
