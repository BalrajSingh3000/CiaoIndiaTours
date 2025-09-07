import { motion } from 'framer-motion';
import { Camera, MapPin, Heart } from 'phosphor-react';
import { useEffect, useRef } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

// Import gallery images
import tajMahalImg from '@/assets/taj-mahal-sunrise.jpg';
import rajasthaniPalaceImg from '@/assets/rajasthani-palace.jpg';
import keralaBackwatersImg from '@/assets/kerala-backwaters.jpg';
import ladakhMonasteryImg from '@/assets/ladakh-monastery.jpg';
import goldenTriangleImg from '@/assets/golden-triangle.jpg';
import southIndiaImg from '@/assets/south-india.jpg';
import rajasthanImg from '@/assets/rajasthan.jpg';
import ladakhImg from '@/assets/ladakh.jpg';
import gujaratImg from '@/assets/gujarat.jpg';
import lakshadweepImg from '@/assets/lakshadweep.jpg';
import orissaImg from '@/assets/orissa.jpg';
import incredibleIndiaImg from '@/assets/incredible-india.jpg';

//New Photos for gallery
import andamanImg from '@/assets/andaman.webp';
import banglasahebImg from '@/assets/Banglasaheb.webp';
import birlamandirImg from '@/assets/Birlamandir-1.webp';
import camelsImg from '@/assets/camels-2.webp';
import clientInLocalImg from '@/assets/client-inlocal-1.png';
import clientWithMonkImg from '@/assets/client-with-monk.webp';
import goldenTriangleSmallImg from '@/assets/Golden-triangle-India.webp';
import gujaratSmallImg from '@/assets/Gujarat.webp';
import hawamahalImg from '@/assets/Hawamahal-1.png';
import holiImg2 from '@/assets/holi-539x303-1.webp';
import lakshadweepSmallImg from '@/assets/Lakshadweep-1.webp';
import patrickImg from '@/assets/patrick-2.webp';
import redfortImg from '@/assets/redfort-1.webp';
import tajmahalSmallImg from '@/assets/tajmahal-1.webp';
import tajmahalAgraImg from '@/assets/tajmahal-agra-1.png';
import tourGuideImg from '@/assets/Tour-guide-539x303-1.webp';
import vacationLakshadweepImg from '@/assets/Vacation-in-Lakshadweep-1.webp';
import varanasiImg from '@/assets/Varanasi-2-300x202.webp';

const PremiumGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    // { id: 1, src: tajMahalImg, title: 'Taj Mahal at Sunrise', location: 'Agra, Uttar Pradesh', description: 'A symbol of eternal love bathed in golden morning light', category: 'Monument' },
    // { id: 2, src: rajasthaniPalaceImg, title: 'Royal Rajasthani Palace', location: 'Jaipur, Rajasthan', description: 'Magnificent architecture showcasing royal grandeur', category: 'Heritage' },
    // { id: 3, src: keralaBackwatersImg, title: 'Kerala Backwaters', location: 'Alleppey, Kerala', description: 'Serene waterways through lush tropical landscapes', category: 'Nature' },
    // { id: 4, src: ladakhMonasteryImg, title: 'Ancient Monastery', location: 'Leh, Ladakh', description: 'Spiritual sanctuary in the high Himalayas', category: 'Spiritual' },
    // { id: 5, src: goldenTriangleImg, title: 'Golden Triangle', location: 'Delhi-Agra-Jaipur', description: "India's most iconic travel circuit", category: 'Circuit' },
    // { id: 6, src: southIndiaImg, title: 'South Indian Temple', location: 'Tamil Nadu', description: 'Intricate Dravidian architecture and vibrant traditions', category: 'Temple' },
    // { id: 7, src: rajasthanImg, title: 'Desert Fortress', location: 'Jodhpur, Rajasthan', description: 'Blue city crowned by magnificent fort', category: 'Fort' },
    // { id: 8, src: ladakhImg, title: 'Ladakh Landscape', location: 'Ladakh', description: 'Dramatic mountain vistas and pristine valleys', category: 'Landscape' },
    // { id: 9, src: gujaratImg, title: 'Gujarat Heritage', location: 'Gujarat', description: 'Rich cultural tapestry and architectural marvels', category: 'Culture' },
    // { id: 10, src: lakshadweepImg, title: 'Lakshadweep Islands', location: 'Lakshadweep', description: 'Pristine coral islands and turquoise waters', category: 'Beach' },
    // { id: 11, src: orissaImg, title: 'Orissa Temples', location: 'Bhubaneswar, Orissa', description: 'Ancient temple city with stunning architecture', category: 'Temple' },
    // { id: 12, src: incredibleIndiaImg, title: 'Incredible India', location: 'Various Locations', description: 'Diverse landscapes and rich cultural heritage', category: 'Panoramic' },
    // New Photos
    { id: 13, src: andamanImg, title: 'Andaman Islands', location: 'Andaman', description: 'Tropical paradise with crystal-clear waters', category: 'Beach' },
  { id: 14, src: banglasahebImg, title: 'Banglasaheb Temple', location: 'Location Unknown', description: 'Historical and cultural landmark', category: 'Heritage' },
  { id: 15, src: birlamandirImg, title: 'Birla Mandir', location: 'Varanasi', description: 'Majestic temple with spiritual ambiance', category: 'Temple' },
  { id: 16, src: camelsImg, title: 'Camel Safari', location: 'Rajasthan', description: 'Experience the desert on camelback', category: 'Adventure' },
  { id: 17, src: clientInLocalImg, title: 'Client Experience', location: 'In Locality', description: 'Impressions from travelers', category: 'Experience' },
  { id: 18, src: clientWithMonkImg, title: 'Travel with Monk', location: 'Spiritual Places', description: 'Spiritual journeys and encounters', category: 'Spiritual' },
  { id: 19, src: goldenTriangleSmallImg, title: 'Golden Triangle Mini', location: 'Delhi-Agra-Jaipur', description: 'Compact iconic travel route', category: 'Circuit' },
  { id: 20, src: gujaratSmallImg, title: 'Gujarat Heritage Spot', location: 'Gujarat', description: 'Highlight of cultural richness', category: 'Culture' },
  { id: 21, src: hawamahalImg, title: 'Hawa Mahal', location: 'Jaipur, Rajasthan', description: 'The palace of winds', category: 'Heritage' },
  { id: 22, src: holiImg2, title: 'Holi Festival', location: 'Various', description: 'Festival of colors celebration', category: 'Festival' },
  { id: 23, src: lakshadweepSmallImg, title: 'Lakshadweep Islands', location: 'Lakshadweep', description: 'Tropical island beauty', category: 'Beach' },
  { id: 24, src: patrickImg, title: 'Traveler Patrick', location: 'Various', description: 'Traveler experiences and testimonials', category: 'Experience' },
  { id: 25, src: redfortImg, title: 'Red Fort', location: 'Delhi', description: 'Historic fort and symbol of India', category: 'Heritage' },
  { id: 26, src: tajmahalSmallImg, title: 'Taj Mahal', location: 'Agra, Uttar Pradesh', description: 'Iconic monument of love', category: 'Monument' },
  { id: 27, src: tajmahalAgraImg, title: 'Taj Mahal at Agra', location: 'Agra', description: 'The majestic Taj Mahal', category: 'Monument' },
  { id: 28, src: tourGuideImg, title: 'Tour Guide', location: 'Various', description: 'Expert local guides at your service', category: 'Service' },
  { id: 29, src: vacationLakshadweepImg, title: 'Vacation in Lakshadweep', location: 'Lakshadweep', description: 'Leisure and relaxation in paradise', category: 'Beach' },
  { id: 30, src: varanasiImg, title: 'Varanasi', location: 'Varanasi, Uttar Pradesh', description: 'Spiritual city on the Ganges', category: 'Spiritual' },
  ];

  // Duplicate items to create a seamless loop (2x is enough; 3x if you want extra buffer)
  const loopImages = [...galleryImages, ...galleryImages];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId = 0;
    let last = 0;
    let offset = 0; // negative offset as we move left
    let oneSetWidth = 0;
    const speedPxPerSec = 80; // adjust: 30–60 gives a luxury glide
    const speedPxPerMs = speedPxPerSec / 1000;

    // Measure width of a single set (half of the track content)
    const measure = () => {
      // total width holds two sets
      const total = track.scrollWidth;
      oneSetWidth = total / 2;
    };

    measure();

    // Re-measure when layout changes
    const ro = new ResizeObserver(() => measure());
    ro.observe(track);

    // Also re-measure after images load (if any were not cached)
    const imgs = Array.from(track.querySelectorAll('img'));
    let pending = imgs.length;
    if (pending > 0) {
      imgs.forEach((img) => {
        if (img.complete) {
          pending -= 1;
        } else {
          img.addEventListener('load', () => {
            pending -= 1;
            if (pending === 0) measure();
          });
          img.addEventListener('error', () => {
            pending -= 1;
            if (pending === 0) measure();
          });
        }
      });
    }

    // Respect reduced motion
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const step = (t: number) => {
      if (!last) last = t;
      const dt = t - last; // ms since last frame
      last = t;

      if (!prefersReduced && oneSetWidth > 0) {
        offset -= speedPxPerMs * dt;
        // When we've scrolled one set width, wrap seamlessly
        if (Math.abs(offset) >= oneSetWidth) {
          offset += oneSetWidth;
        }
        track.style.transform = `translate3d(${offset}px,0,0)`;
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <section id="gallery" className="py-24 px-6 relative overflow-hidden" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out-cubic">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-6">
            The <span className="text-primary font-medium">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Discover the breathtaking beauty of India through our curated collection of destinations
          </p>
        </motion.div>

        {/* Infinite Marquee Row */}
        <div className="relative" ref={containerRef}>
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div
            className="overflow-hidden py-4"
            // no horizontal scrollbar, animation is via transform
          >
            <div
              ref={trackRef}
              className="inline-flex space-x-6 will-change-transform"
              style={{ transform: 'translate3d(0,0,0)' }}
            >
              {loopImages.map((image, index) => (
                <motion.div
                  key={`marquee-${image.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl flex-shrink-0"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="w-80 h-96 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      draggable={false}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center space-x-2 text-primary mb-2">
                      <MapPin size={16} />
                      <span className="text-sm font-medium">{image.location}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{image.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded-full">
                        {image.category}
                      </span>
                      <Heart
                        size={16}
                        className="text-white/60 hover:text-primary cursor-pointer transition-colors"
                      />
                    </div>
                  </div>

                  {/* Camera Icon (glass chip) */}
                  <div className="absolute top-4 right-4 backdrop-blur-md bg-black/30 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera size={20} className="text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumGallery;
