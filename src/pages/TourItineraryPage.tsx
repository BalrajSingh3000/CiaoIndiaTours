import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Star, CheckCircle, CreditCard } from 'phosphor-react';
import { tourCategories } from '@/data/tourData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/pageFooter';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import QuotationModal from '@/components/QuotationModal';
import ContactModal from '@/components/ContactModal';

const TourItineraryPage = () => {
  const { categoryId, tourId } = useParams<{ categoryId: string; tourId: string }>();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isQuotationModalOpen, setIsQuotationModalOpen] = useState(false);
  const category = tourCategories.find(c => c.id === categoryId);
  const tour = category?.subTours.find(t => t.id === tourId);

  if (!category || !tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
          </div>
          
          <div className="relative z-10 h-full flex items-end">
            <div className="container mx-auto px-6 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
                  {tour.title}
                </h1>
                
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center space-x-2 text-white">
                      <Clock size={20} />
                      <span className="font-light">{tour.duration}</span>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center space-x-2 text-white">
                      <CreditCard size={20} />
                      <span className="font-light">{tour.price}</span>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-center space-x-2 text-white">
                      <Star size={20} />
                      <span className="font-light">{tour.rating}/5 ({tour.reviewCount} reviews)</span>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-full neumorphic-btn text-primary-foreground hover:shadow-glow py-6 text-lg min-h-[60px]"
                    >
                      Enquire Now
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tour Highlights */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-light text-foreground mb-8 text-center">Tour Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {tour.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground font-light">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Detailed Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-light text-foreground mb-8 text-center">Detailed Itinerary</h2>
              
              <div className="space-y-8">
                {tour.itinerary.map((day, index) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="glass-card p-8 rounded-2xl border border-white/10"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-white font-medium">Day {day.day}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-foreground mb-2">{day.title}</h3>
                        <p className="text-muted-foreground font-light mb-4">{day.description}</p>
                        
                        {day.activities && day.activities.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-foreground font-medium mb-2">Activities:</h4>
                            <ul className="space-y-2">
                              {day.activities.map((activity, actIndex) => (
                                <li key={actIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground font-light">{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          {day.accommodation && (
                            <div>
                              <span className="text-primary font-medium">Accommodation: </span>
                              <span className="text-muted-foreground font-light">{day.accommodation}</span>
                            </div>
                          )}
                          {day.meals && (
                            <div>
                              <span className="text-primary font-medium">Meals: </span>
                              <span className="text-muted-foreground font-light">{day.meals}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Booking CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-center mt-16"
            >
              <div className="glass-card p-8 rounded-2xl border border-white/10 max-w-3xl mx-auto">
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  Ready to Book This Amazing Journey?
                </h3>
                <p className="text-muted-foreground font-light mb-6">
                  Contact our travel experts to customize this itinerary according to your preferences 
                  and get the best price guaranteed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="neumorphic-btn text-primary-foreground hover:shadow-glow px-8 py-3"
                  >
                    Book Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 px-12 py-5 text-lg"
                    onClick={() => setIsQuotationModalOpen(true)}
                  >
                    Get Custom Quote
                  </Button>
                  <QuotationModal 
                    isOpen={isQuotationModalOpen} 
                    onClose={() => setIsQuotationModalOpen(false)} 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      <Footer />
    </div>
  );
};

export default TourItineraryPage;