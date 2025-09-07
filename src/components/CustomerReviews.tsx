import { motion } from "framer-motion";
import { Star, Quotes } from "phosphor-react";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomerReviews = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      id: 1,
      name: "Marco Rossi",
      country: "Italy",
      rating: 5,
      comment:
        "Incredible journey through the Golden Triangle! Ciao India Tours made everything seamless and authentic. Our guide was knowledgeable and the accommodations were perfect.",
      tour: "Golden Triangle Tour",
    },
    {
      id: 2,
      name: "Sophie Laurent",
      country: "France",
      rating: 5,
      comment:
        "The Kerala backwaters experience was magical. The houseboat was luxurious and the local cuisine was amazing. Best travel agency in India!",
      tour: "Kerala Backwaters",
    },
    {
      id: 3,
      name: "Hans Mueller",
      country: "Germany",
      rating: 5,
      comment:
        "Rajasthan tour exceeded all expectations. The palaces, forts, and desert safari were unforgettable. Professional service throughout.",
      tour: "Rajasthan Heritage Tour",
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      country: "Spain",
      rating: 5,
      comment:
        "Ladakh trip was life-changing! The monasteries, landscapes, and adventure activities were perfectly organized. Highly recommended!",
      tour: "Ladakh Adventure",
    },
    {
      id: 5,
      name: "James Smith",
      country: "UK",
      rating: 5,
      comment:
        "South India cultural tour was exceptional. The temples, traditions, and local experiences were authentic and well-planned.",
      tour: "South India Cultural Tour",
    },
    {
      id: 6,
      name: "Anna Kowalski",
      country: "Poland",
      rating: 5,
      comment:
        "Gujarat tour showed us the real India. From textiles to cuisine to festivals - everything was perfectly curated by the team.",
      tour: "Gujarat Cultural Tour",
    },
  ];

  // duplicate for seamless loop
  const loopReviews = [...reviews, ...reviews];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId = 0;
    let last = 0;
    let offset = 0;
    let oneSetWidth = 0;
    const speed = 40; // px/sec
    const pxPerMs = speed / 1000;

    const measure = () => {
      oneSetWidth = track.scrollWidth / 2;
    };
    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(track);

    const step = (t: number) => {
      if (!last) last = t;
      const dt = t - last;
      last = t;

      offset -= pxPerMs * dt;
      if (Math.abs(offset) >= oneSetWidth) {
        offset += oneSetWidth;
      }

      track.style.transform = `translate3d(${offset}px,0,0)`;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <section id="reviews" className="py-24 px-6 bg-card/20 overflow-hidden" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out-cubic">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-6">
            What Our <span className="text-primary font-medium">Travelers Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Real experiences from travelers who discovered India with us
          </p>
        </motion.div>

        {/* Marquee Row */}
        <div className="relative">
          {/* fade edges */}
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-card/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-card/20 to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="inline-flex space-x-6 will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {loopReviews.map((review, index) => (
                <motion.div
                  key={`${review.id}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card w-96 p-6 rounded-2xl relative flex-shrink-0"
                >
                  <Quotes
                    size={24}
                    className="text-primary/30 absolute top-4 right-4"
                  />

                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {review.country}
                      </p>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="text-primary fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    "{review.comment}"
                  </p>

                  <div className="text-xs text-primary font-medium">
                    {review.tour}
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

export default CustomerReviews;
