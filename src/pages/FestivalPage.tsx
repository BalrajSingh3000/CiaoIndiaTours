import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'phosphor-react';
import { festivalData } from '@/data/festivalData';
import Footer from '@/components/pageFooter';
import ContactModal from '@/components/ContactModal';  // Adjust the path according to your folder structure
import React, { useState } from 'react';


const FestivalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);
  const { slug } = useParams<{ slug: string }>();
  const festival = festivalData.find(f => f.slug === slug);

  if (!festival) {
    return <div>Festival not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={festival.image}
              alt={festival.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          
          <div className="relative z-10 h-full flex items-end">
            <div className="container mx-auto px-6 pb-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  {festival.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-light text-white mb-4">
                  {festival.title}
                </h1>
                <p className="text-xl text-white/90 font-light leading-relaxed">
                  {festival.description}
                </p>
                
                <div className="flex items-center space-x-6 mt-6 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Calendar size={20} />
                    <span>{festival.date}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-light text-foreground mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  {festival.content.overview}
                </p>
              </motion.div>

              {/* History */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-light text-foreground mb-6">History & Significance</h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  {festival.content.history}
                </p>
              </motion.div>

              {/* Celebrations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-light text-foreground mb-6">How It's Celebrated</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {festival.content.celebrations.map((celebration, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="glass-card p-6 rounded-xl border border-white/10"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground font-light">{celebration}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Best Places to Experience */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-light text-foreground mb-6">Best Places to Experience</h2>
                <div className="space-y-4">
                  {festival.content.locations.map((location, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="glass-card p-6 rounded-xl border border-white/10"
                    >
                      <div className="flex items-start space-x-3">
                        <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground font-light">{location}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-center"
              >
                <div className="glass-card p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-medium text-foreground mb-4">
                    Experience {festival.title} with Ciao India Tours
                  </h3>
                  <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
                    Join us for an authentic cultural experience during this magnificent festival. 
                    Our local experts will ensure you don't miss any of the spectacular celebrations.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="neumorphic-btn text-primary-foreground px-8 py-3 rounded-xl"
                    onClick={openContactModal}
                  >
                    Plan Your Festival Journey
                  </motion.button>
                  <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default FestivalPage;