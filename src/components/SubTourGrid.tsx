import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Clock, CreditCard, MapPin } from 'phosphor-react';
import { SubTour } from '@/data/tourData';
import Button from './Button';

interface SubTourGridProps {
  isOpen: boolean;
  onClose: () => void;
  tours: SubTour[];
  categoryTitle: string;
  onTourSelect: (tour: SubTour) => void;
}

const SubTourGrid = ({ isOpen, onClose, tours, categoryTitle, onTourSelect }: SubTourGridProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 z-50 overflow-y-auto"
          >
            <div className="glass-card rounded-2xl border border-white/20 min-h-full p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-semibold text-foreground mb-2">
                    {categoryTitle}
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Choose from our curated collection of {tours.length} premium tours
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Tours Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tours.map((tour, index) => (
                  <motion.div
                    key={tour.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl glass-card border border-white/10 hover:border-primary/30 transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Duration Badge */}
                      <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-primary-foreground px-2 py-1 rounded-lg text-xs font-medium">
                        {tour.duration}
                      </div>

                      {/* Rating */}
                      <div className="absolute top-3 right-3 glass-card px-2 py-1">
                        <div className="flex items-center space-x-1">
                          <Star size={12} className="text-primary fill-current" />
                          <span className="text-xs text-foreground">{tour.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                        {tour.title}
                      </h3>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xl font-semibold text-primary">
                          {tour.price}
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                          <Clock size={14} />
                          <span>{tour.reviewCount} reviews</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {tour.highlights.slice(0, 2).map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                              <span className="line-clamp-1">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-2">
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1"
                          onClick={() => onTourSelect(tour)}
                        >
                          <CreditCard size={14} className="mr-1" />
                          View Details
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="px-3"
                        >
                          <MapPin size={14} />
                        </Button>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
                      whileHover={{ 
                        opacity: 1,
                        boxShadow: '0 0 30px rgba(255, 193, 7, 0.3)' 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SubTourGrid;