

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';
import { Link } from 'react-router-dom';
// Import festival images
import holiImg from '@/assets/holi-festival.jpg';
import diwaliImg from '@/assets/diwali-festival.jpg';
import ganeshImg from '@/assets/ganesh-festival.jpg';
import durgaPujaImg from '@/assets/durga-puja-festival.jpg';
import pushkarImg from '@/assets/pushkar-fair.jpg';
import karvaChauth from '@/assets/karva-chauth.jpg';
import navratriImg from '@/assets/navratri-festival.jpg';

interface Festival {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}

const festivals: Festival[] = [
  {
    id: '1',
    title: 'Holi - Festival of Colors',
    category: 'Spring Festival',
    description: 'Experience the vibrant celebration of colors, love, and the arrival of spring',
    date: 'March 2024',
    image: holiImg,
    slug: 'holi-festival'
  },
  {
    id: '2',
    title: 'Diwali - Festival of Lights',
    category: 'Religious Festival',
    description: 'Witness the grandest celebration of lights, prosperity, and spiritual enlightenment',
    date: 'November 2024',
    image: diwaliImg,
    slug: 'diwali-festival'
  },
  {
    id: '3',
    title: 'Ganesh Chaturthi',
    category: 'Religious Festival',
    description: 'Join the magnificent celebration honoring Lord Ganesha with elaborate processions',
    date: 'August 2024',
    image: ganeshImg,
    slug: 'ganesh-chaturthi'
  },
  {
    id: '4',
    title: 'Durga Puja',
    category: 'Cultural Festival',
    description: 'Experience the grandest Bengali festival celebrating Goddess Durga',
    date: 'October 2024',
    image: durgaPujaImg,
    slug: 'durga-puja'
  },
  {
    id: '5',
    title: 'Pushkar Fair',
    category: 'Cultural Festival',
    description: 'Discover the largest camel fair and cultural extravaganza in Rajasthan',
    date: 'November 2024',
    image: pushkarImg,
    slug: 'pushkar-fair'
  },
  {
    id: '6',
    title: 'Karva Chauth',
    category: 'Traditional Festival',
    description: 'Witness the beautiful festival of love and devotion between married couples',
    date: 'October 2024',
    image: karvaChauth,
    slug: 'karva-chauth'
  },
  {
    id: '7',
    title: 'Navratri',
    category: 'Dance Festival',
    description: 'Join the nine nights of dance, music, and devotion to Goddess Durga',
    date: 'September 2024',
    image: navratriImg,
    slug: 'navratri'
  }
];

const FestivalsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayDuration = 4000; // 4 seconds per slide
  const progressUpdateInterval = 50; // Update progress every 50ms

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPlaying, currentIndex]);

  const startAutoPlay = () => {
    setProgress(0);
    let currentProgress = 0;
    progressRef.current = setInterval(() => {
      currentProgress += (progressUpdateInterval / autoPlayDuration) * 100;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        nextSlide();
        currentProgress = 0;
      }
    }, progressUpdateInterval);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % festivals.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + festivals.length) % festivals.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + festivals.length) % festivals.length;
      cards.push({
        ...festivals[index],
        offset: i
      });
    }
    return cards;
  };

  return (
    <section id="festivals" className="py-24 px-6 bg-card/10">
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-6">
            The <span className="text-primary font-medium">Festivals</span> of India
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            India is a country of festivals, of dynamic culture and every Indian celebrates many festivals throughout the year. 
            Each festival is unique in its kind. Celebrating them while visiting the country is a great opportunity to explore 
            the diversity of Indian culture and heritage.
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[26rem] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center perspective-1000">
            {getVisibleCards().map((festival) => (
              <motion.div
                key={`${festival.id}-${festival.offset}`}
                className="absolute w-80 h-80 cursor-pointer"
                initial={false}
                animate={{
                  x: festival.offset * 200,
                  scale: festival.offset === 0 ? 1.1 : 0.8,
                  rotateY: festival.offset * -15,
                  z: festival.offset === 0 ? 200 : festival.offset === -1 || festival.offset === 1 ? 100 : 0,
                  filter: festival.offset === 0 ? 'blur(0px)' : 'blur(2px)',
                  zIndex: festival.offset === 0 ? 50 : festival.offset === -1 || festival.offset === 1 ? 40 : 30,
                  boxShadow: festival.offset === 0 ? '0 20px 40px rgba(0,0,0,0.3)' : '0 10px 20px rgba(0,0,0,0.2)',
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => {
                  if (festival.offset === 0) {
                    window.open(`/festivals/${festival.slug}`, '_blank');
                  } else {
                    goToSlide(festivals.findIndex(f => f.id === festival.id));
                  }
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card border border-white/20 group hover:border-primary/50 transition-all duration-300">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={festival.image}
                      alt={festival.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
                        {festival.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 leading-tight">
                      {festival.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed mb-3 line-clamp-2">
                      {festival.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-light">{festival.date}</span>
                      <Link
                        to={`/festivals/${festival.slug}`}
                        className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors group"
                      >
                        <span className="text-sm font-medium">Read more</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    {/* Progress Circle for Active Card */}
                    {festival.offset === 0 && (
                      <div className="absolute top-4 right-4">
                        <div className="relative w-8 h-8">
                          <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-white/20"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="transparent"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className="text-primary"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              fill="transparent"
                              strokeDasharray="100, 100"
                              strokeDashoffset={100 - progress}
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Left Arrow */}
          <div className="absolute left-25 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.01 }}
              className="p-3 glass-card hover:shadow-glow transition-all duration-10 rounded-full"
            >
              <ArrowRight size={20} className="text-muted-foreground rotate-180" />
            </motion.button>
          </div>

          {/* Right Arrow */}
          <div className="absolute right-1 top-1/2 -translate-y-1/2 z-10">
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.01 }}
              className="p-3 glass-card hover:shadow-glow transition-all duration-10 rounded-full"
            >
              <ArrowRight size={20} className="text-muted-foreground" />
            </motion.button>
          </div>

          {/* Navigation Dots */}
          <div className="absolute left-1/2 bottom-0.5 transform -translate-x-1/2 flex items-center ">
            <div className="flex space-x-2">
              {festivals.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalsCarousel;
