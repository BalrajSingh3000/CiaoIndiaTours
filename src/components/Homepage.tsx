import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Phone, 
  MapPin, 
  Users, 
  Calendar,
  Heart,
  Star,
  CaretDown,
  CaretUp,
  UserCircle,
  ClipboardText,
  Airplane,
  WhatsappLogo
} from 'phosphor-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import VideoBackground from './VideoBackground';
import Button from './Button';
import TourCard from './TourCard';
import ExpertiseSection from './ExpertiseSection';
import ContactModal from './ContactModal';
import QuotationModal from './QuotationModal';
import SubTourGrid from './SubTourGrid';
import FestivalsCarousel from './FestivalsCarousel';
import CustomerReviews from './CustomerReviews';
import PremiumGallery from './PremiumGallery';
import SEOHead from './SEOHead';
import { tourCategories } from '@/data/tourData';

// Import all assets
import advisorImg from '@/assets/advisor.jpg';
import planningImg from '@/assets/planning.jpg';
import enjoyImg from '@/assets/enjoy.webp';
import goldenTriangleImg from '@/assets/golden-triangle.jpg';
import rajasthanImg from '@/assets/rajasthan.jpg';
import southIndiaImg from '@/assets/south-india.jpg';
import ladakhImg from '@/assets/ladakh.jpg';
import gujaratImg from '@/assets/gujarat.jpg';
import lakshadweepImg from '@/assets/lakshadweep.jpg';
import orissaImg from '@/assets/orissa.jpg';
import incredibleIndiaImg from '@/assets/incredible-india.jpg';
import bhutanImg from '@/assets/bhutan.jpg';
import nepalImg from '@/assets/nepal.jpg';
import thailandImg from '@/assets/thailand.jpg';
import omanImg from '@/assets/oman.jpg';
import amitImg from '@/assets/amit.jpg';
import nitishImg from '@/assets/nitish.jpeg';
import janiceImg from '@/assets/Janice.jpg';
import Footer from '@/components/pageFooter';

const Homepage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQuotationModalOpen, setIsQuotationModalOpen] = useState(false);
  const [selectedTourCategory, setSelectedTourCategory] = useState<string | null>(null);
  const [isSubTourGridOpen, setIsSubTourGridOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

    // Listen for contact modal events from VideoBackground
    const handleOpenContactModal = () => {
      setIsContactModalOpen(true);
    };

    window.addEventListener('openContactModal', handleOpenContactModal);
    return () => {
      window.removeEventListener('openContactModal', handleOpenContactModal);
    };
  }, []);


  const howItWorksData = [
    {
      icon: UserCircle,
      title: "Connect with Advisor",
      description: "Speak with our expert travel consultants who understand India intimately",
      image: advisorImg,
    },
    {
      icon: ClipboardText,
      title: "Choose Your Trip",
      description: "Create your perfect itinerary with our 100% tailor-made travel planning",
      image: planningImg,
    },
    {
      icon: Heart,
      title: "Enjoy the Best Trip",
      description: "Experience the journey of a lifetime with our premium local expertise",
      image: enjoyImg,
    },
  ];

  const faqData = [
    {
      question: "What makes Ciao India Tours different from other India travel agencies?",
      answer: "Ciao India Tours is a local Indian travel agency registered with the Government of India, offering 100% tailor-made luxury trips without intermediaries. Our professionals speak multiple foreign languages and provide 24/7 support with guaranteed best prices for India tour packages."
    },
    {
      question: "How quickly can I receive a Ciao India Tours travel quote?",
      answer: "We guarantee to provide detailed travel quotes within 24 hours of your inquiry. Our expert team works around the clock to ensure quick response times and accurate pricing for your dream India tour with Ciao India Tours."
    },
    {
      question: "Do you offer completely customized India tour itineraries?",
      answer: "Absolutely! Every trip with Ciao India Tours is 100% tailor-made according to your preferences, budget, and interests. We don't believe in one-size-fits-all packages and create unique luxury travel experiences for each traveler across India."
    },
    {
      question: "What languages do your Ciao India Tours travel experts speak?",
      answer: "Our multilingual team at Ciao India Tours speaks several foreign languages including Italian, Spanish, French, German, Russian, and Portuguese, in addition to English and local Indian languages for seamless communication."
    },
    {
      question: "Is it safe to travel with Ciao India Tours in India?",
      answer: "Safety is our top priority at Ciao India Tours. We ensure safe journeys with vetted accommodations, reliable transportation, expert local guides, and 24/7 support throughout your India tour. We are a government-registered agency with proper licensing and insurance."
    },
    {
      question: "What are the most popular Ciao India Tours packages?",
      answer: "Our most popular India tour packages include the Golden Triangle tour (Delhi, Agra, Jaipur), Rajasthan heritage tours, Kerala backwaters tours, Ladakh adventure tours, and South India cultural tours. All packages are customizable to your preferences."
    },
    {
      question: "Do you provide local guides for Ciao India Tours?",
      answer: "Yes! Ciao India Tours provides expert local guides who are knowledgeable about India's history, culture, and hidden gems. Our guides speak multiple languages and ensure you have an authentic and enriching travel experience."
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead />
      {/* Hero Section with Video Background */}
      <main>
        <section id="home" className="relative" aria-label="Ciao India Tours - Premium India Travel Experiences">
        <VideoBackground>
          <div className="min-h-screen flex items-center justify-center px-0">
            <div className="text-center max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-foreground mb-6 text-shadow-luxury">
                  Experience
                  <span className="block bg-gradient-primary bg-clip-text text-transparent font-medium">
                    Incredible India
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                  Discover the magic of India with <strong>Ciao India Tours</strong> - premium, tailor-made luxury travel experiences crafted by expert local guides
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="px-12 py-4 text-lg"
                  onClick={() => setIsQuotationModalOpen(true)}
                >
                  Let's Plan Your Best Journey
                </Button>
              </motion.div>
            </div>
          </div>
        </VideoBackground>
      </section>

        {/* Our Expertise Section */}
        <ExpertiseSection onAskQuote={() => setIsQuotationModalOpen(true)}
          onContactExpert={() => setIsContactModalOpen(true)}/>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 px-0 bg-card/20" aria-label="How Ciao India Tours Works">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            style={{ y: y2 }}
            data-aos="fade-up"
            className="text-center mb-16 mt-24"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-6">
              How <span className="text-primary font-medium">Ciao India Tours</span> Works
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksData.map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="h-64 rounded-2xl overflow-hidden mb-6 glass-card">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      style={{ willChange: "transform" }}
                      className="glass-card p-4 rounded-xl"
                    >
                      <item.icon size={32} className="text-primary" />
                    </motion.div>
                  </div>

                  {/* <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass-card p-4 rounded-xl"
                  >
                    <item.icon size={32} className="text-primary" />
                  </motion.div> */}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Tours Section */}
        <section id="tours" className="py-24 px-0" aria-label="Ciao India Tours Packages">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-6">
              Our <span className="text-primary font-medium">India Tour Packages</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Explore our curated collection of premium <strong>Ciao India Tours</strong> experiences across India and beyond - from Golden Triangle to Kerala backwaters
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tourCategories.map((tour, index) => (
              <TourCard
                key={tour.id}
                title={tour.title}
                subtitle={tour.subtitle}
                price={tour.price}
                duration={tour.duration}
                rating={tour.rating}
                reviewCount={tour.reviewCount}
                image={tour.image}
                tours={tour.tours}
                index={index}
                onToursClick={() => {
                  setSelectedTourCategory(tour.id);
                  setIsSubTourGridOpen(true);
                }}
                onExploreClick={() => {
                  setSelectedTourCategory(tour.id);
                  setIsSubTourGridOpen(true);
                }}
                onRatingClick={() => {
                  document.getElementById('reviews')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              />
            ))}
          </div>
        </div>
      </section>

        {/* Festivals Section */}
        <FestivalsCarousel />

        {/* Customer Reviews Section */}
        <CustomerReviews />

        {/* Premium Gallery Section */}
        <PremiumGallery />

        {/* About Us Section */}
        <section id="about" className="py-20 relative" aria-label="About Ciao India Tours">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-6">
              About <span className="text-primary font-medium">Ciao India Tours</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-8">
            {/* Left Column - What do we do */}
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-medium text-luxury mb-6">
                  What do we do
                </h3>
                <div className="space-y-6 text-foreground/80 font-light leading-relaxed">
                  <p>
                  Travel is more than sightseeing—it's embarking on new adventures, gaining fresh perspectives, and deeply engaging with cultures to understand and empathize rather than just observe. If you seek to redefine your travel experience with <strong>Ciao India Tours</strong>, we are here for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Style of Travel */}
            <div data-aos="fade-left" data-aos-delay="400">
              <div className="glass-card p-8 h-full">
                <h3 className="text-2xl font-medium text-luxury mb-6">
                  Style of Travel
                </h3>
                <div className="space-y-6 text-foreground/80 font-light leading-relaxed">
                  <p>
                  Thanks to technology, the world feels smaller, but travel remains essential alongside career and family life. When planning your trip, we start by asking, "What is your travel style?"—reflecting our philosophy of embracing a new way of living through travel.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-medium text-luxury mb-8 text-center">
                OUR TEAM
              </h3>
              <p className="text-foreground/80 font-light leading-relaxed mb-8 text-center">
              <strong>Ciao India Tours</strong> has a passionate team of multilingual professionals fluent in English, Italian, Spanish, French, German, and more. We are dedicated to providing excellent, innovative, and unforgettable luxury travel experiences across India for our clients.</p>
              
              {/* Team Members */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div 
                  data-aos="fade-up" 
                  data-aos-delay="200"
                  className="text-center group"
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-200">
                    <img 
                      src={amitImg} 
                      alt="Amit Kumar" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Amit Kumar</h4>
                  <p className="text-muted-foreground">Travel Agent</p>
                </div>

                <div 
                  data-aos="fade-up" 
                  data-aos-delay="200"
                  className="text-center group"
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-200">
                    <img 
                      src={nitishImg} 
                      alt="Nitish Kumar" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Nitish Kumar</h4>
                  <p className="text-muted-foreground">Travel Agent</p>
                </div>

                <div 
                  data-aos="fade-up" 
                  data-aos-delay="200"
                  className="text-center group"
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-200">
                    <img 
                      src={janiceImg} 
                      alt="Janice Valdez" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Janice Valdez</h4>
                  <p className="text-muted-foreground">Travel Agent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-6" aria-label="Ciao India Tours Frequently Asked Questions">
        <div className="max-w-4xl mx-auto">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-6">
              <span className="text-primary font-medium">Ciao India Tours</span> FAQ
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/10 transition-colors duration-300"
                >
                  <h3 className="text-lg font-medium text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CaretDown size={20} className="text-primary" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeFAQ === index ? 'auto' : 0,
                    opacity: activeFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Contact Modal */}
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />

        {/* Quotation Modal */}
        <QuotationModal 
          isOpen={isQuotationModalOpen} 
          onClose={() => setIsQuotationModalOpen(false)} 
        />

        {/* Sub Tour Grid */}
        {selectedTourCategory && (
          <SubTourGrid 
            isOpen={isSubTourGridOpen}
            onClose={() => setIsSubTourGridOpen(false)}
            tours={tourCategories.find(cat => cat.id === selectedTourCategory)?.subTours || []}
            categoryTitle={tourCategories.find(cat => cat.id === selectedTourCategory)?.title || ''}
            onTourSelect={(tour) => {
              window.open(`/tours/${selectedTourCategory}/${tour.id}`, '_blank');
            }}
          />
        )}
        <Footer  />
      </main>
    </div>
  );
};

export default Homepage;