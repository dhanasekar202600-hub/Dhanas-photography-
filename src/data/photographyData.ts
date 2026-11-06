export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Candid' | 'Pre-Wedding' | 'Traditional' | 'Couple Portraits';
  image: string;
  location?: string;
  tag: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: 'Dhanas Photography',
  tagline: 'Capturing Your Beautiful Moments Forever',
  phone1: '9585268973',
  phone1Formatted: '+91 95852 68973',
  phone2: '9944504303',
  phone2Formatted: '+91 99445 04303',
  email: 'dhanasekarthar@gmail.com',
  instagramHandle: '@dhanas_photography_',
  instagramUrl: 'https://www.instagram.com/dhanas_photography_?srtk=bW1hMThrM3Z3MGRw&utm_source=qr',
  whatsappUrl1: 'https://wa.me/919585268973?text=Hi%20Dhanas%20Photography,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20shoot%20for%20my%20event.',
  whatsappUrl2: 'https://wa.me/919944504303?text=Hi%20Dhanas%20Photography,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20shoot%20for%20my%20event.',
  experienceNotice: 'Available for Destination Weddings & Celebrations Nationwide',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding-photography',
    title: 'Wedding Photography',
    category: 'Full Day & Multi-Day Celebrations',
    description: 'Comprehensive, high-definition visual storytelling of your grand day. From royal entrance to the final send-off, we preserve every detail with elegance and emotional warmth.',
    highlights: ['Full ceremony & reception coverage', 'Artisan color grading & high-res delivery', 'Master family & heirloom portraits'],
    image: '/src/assets/images/hero_wedding_couple_1793965102743.jpg',
  },
  {
    id: 'wedding-videography',
    title: 'Wedding Videography',
    category: 'Cinematic Films & 4K Teasers',
    description: 'Breathtaking cinema-grade wedding trailers, full-length heirloom documentary films, and emotional song edits synced to authentic speeches and traditional mantras.',
    highlights: ['Ultra HD 4K multi-camera filming', 'Drone aerial cinematography', 'Teaser reel & full cinematic film'],
    image: '/src/assets/images/service_cinematic_couple_1793965105713.jpg',
  },
  {
    id: 'pre-wedding-shoots',
    title: 'Pre-Wedding Shoots',
    category: 'Romantic & Conceptual Locations',
    description: 'Curated outdoor and palace photoshoots designed to celebrate your connection before the wedding whirlwind, capturing romantic chemistry in golden hour light.',
    highlights: ['Location scouting & styling guidance', 'Artistic editorial compositions', 'Save-the-Date video teasers'],
    image: '/src/assets/images/portfolio_prewedding_couple_1793965104268.jpg',
  },
  {
    id: 'candid-photography',
    title: 'Candid Photography',
    category: 'Unposed Genuine Moments',
    description: 'Unobtrusive documentary-style captures that catch unguarded laughter, heartfelt tears, stolen glances, and real celebration emotions as they naturally unfold.',
    highlights: ['Natural documentary approach', 'Fast prime lenses for low-light intimacy', 'Zero forced poses or interruptions'],
    image: '/src/assets/images/service_candid_moment_1793965103727.jpg',
  },
  {
    id: 'traditional-photography',
    title: 'Traditional Photography',
    category: 'Sacred Rituals & Heritage Customs',
    description: 'Reverent, meticulously framed documentation of sacred rituals—Muhurtham, Kanyadaan, Saptapadi, and garland exchanges—honoring cultural heritage and elders.',
    highlights: ['Complete ritual milestones documented', 'Flawless lighting for sacred fires & altars', 'Timeless heirloom framing for generations'],
    image: '/src/assets/images/service_traditional_rituals_1793965105150.jpg',
  },
  {
    id: 'engagement-photography',
    title: 'Engagement Photography',
    category: 'Ring Ceremony & Festive Intimacy',
    description: 'Celebrating the joyous commencement of your union with intimate ring exchange frames, celebratory family toasts, and vibrant couple portraits.',
    highlights: ['Ring & detail macro framing', 'Spontaneous family joy & greetings', 'Stylized couple milestone portraits'],
    image: '/src/assets/images/hero_wedding_couple_1793965102743.jpg',
  },
  {
    id: 'couple-portraits',
    title: 'Couple Portraits',
    category: 'Editorial Fine-Art Sessions',
    description: 'Sophisticated, magazine-grade couples sessions emphasizing gentle intimacy, dramatic architectural backdrops, and flattering golden ambient lighting.',
    highlights: ['Direction & gentle posing assistance', 'Dramatic evening architectural lighting', 'Fine-art retouching and heirloom finishes'],
    image: '/src/assets/images/service_cinematic_couple_1793965105713.jpg',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Royal Courtyard Vows',
    category: 'Weddings',
    image: '/src/assets/images/hero_wedding_couple_1793965102743.jpg',
    location: 'Palace Grounds',
    tag: 'Grand Wedding',
    description: 'A timeless union bathed in golden evening light beneath hand-crafted floral arches and warm candlelight.',
  },
  {
    id: 'gal-2',
    title: 'Shower of Golden Petals',
    category: 'Candid',
    image: '/src/assets/images/service_candid_moment_1793965103727.jpg',
    location: 'Ceremony Mandap',
    tag: 'Pure Joy',
    description: 'Pure, unrestrained laughter as friends and family shower fresh marigolds and rose petals over the radiant bride.',
  },
  {
    id: 'gal-3',
    title: 'Heritage Sunlit Embrace',
    category: 'Pre-Wedding',
    image: '/src/assets/images/portfolio_prewedding_couple_1793965104268.jpg',
    location: 'Historic Courtyard',
    tag: 'Pre-Wedding Romance',
    description: 'Gentle breeze and flowing silk amidst ancient carved sandstone pillars during golden hour.',
  },
  {
    id: 'gal-4',
    title: 'Sacred Akshata Ritual',
    category: 'Traditional',
    image: '/src/assets/images/service_traditional_rituals_1793965105150.jpg',
    location: 'Muhurtham Altar',
    tag: 'Sacred Traditions',
    description: 'Reverent offerings of sacred turmeric rice and holy garlands over the traditional brass diya lamp.',
  },
  {
    id: 'gal-5',
    title: 'Evening Royal Gala',
    category: 'Couple Portraits',
    image: '/src/assets/images/service_cinematic_couple_1793965105713.jpg',
    location: 'Palace Balcony',
    tag: 'Editorial Romance',
    description: 'A quiet, regal breath away from the grand celebration overlooking the illuminated palace gardens.',
  },
  {
    id: 'gal-6',
    title: 'Unscripted Laughter & Tears',
    category: 'Candid',
    image: '/src/assets/images/service_candid_moment_1793965103727.jpg',
    location: 'Family Courtyard',
    tag: 'Candid Emotion',
    description: 'Documentary storytelling capturing spontaneous expressions that words cannot describe.',
  },
  {
    id: 'gal-7',
    title: 'The Eternal Promise',
    category: 'Weddings',
    image: '/src/assets/images/hero_wedding_couple_1793965102743.jpg',
    location: 'Heritage Resort',
    tag: 'Vows & Garland Exchange',
    description: 'The profound moment of mutual trust and devotion as the couple shares their first steps together.',
  },
  {
    id: 'gal-8',
    title: 'Whispers at Sunset',
    category: 'Pre-Wedding',
    image: '/src/assets/images/portfolio_prewedding_couple_1793965104268.jpg',
    location: 'Marble Pavilion',
    tag: 'Golden Hour Pre-Wedding',
    description: 'Romantic conceptual frames set against classic arched architecture.',
  },
  {
    id: 'gal-9',
    title: 'Blessings of the Holy Fire',
    category: 'Traditional',
    image: '/src/assets/images/service_traditional_rituals_1793965105150.jpg',
    location: 'Sanctuary Mandap',
    tag: 'Vedic Ceremonies',
    description: 'Capturing the deep spiritual symbolism of sacred vows, holy fire, and elder blessings.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Artistic & Authentic Storytelling',
    description: 'We believe genuine smiles, quiet tears, and spontaneous dance moves are far more precious than forced poses. Our lens catches the soul of your wedding day.',
  },
  {
    title: 'Master Lighting & Rich Tonal Grading',
    description: 'Every frame is individually color-graded with warm, natural champagne tones that flatter Indian festive palettes, jewelry details, and varied lighting environments.',
  },
  {
    title: 'Cinema-Grade Gear & Redundant Backups',
    description: 'Equipped with dual-slot professional full-frame camera systems, fast cinema primes, and immediate on-site mirrored backups so your priceless memories are 100% secure.',
  },
  {
    title: 'Personalized & Responsive Service',
    description: 'From your initial consultation to final heirloom album delivery, we work closely with you. Direct access via phone and WhatsApp ensures smooth, stress-free planning.',
  },
];
