import { motion } from 'framer-motion';
import { Star, Clock, MapPin, CreditCard } from 'phosphor-react';
import Button from './Button';

interface TourCardProps {
  title: string;
  subtitle: string;
  price?: string;
  duration?: string;
  rating: number;
  reviewCount: number;
  image: string;
  tours?: number;
  index: number;
  onToursClick?: () => void;
  onExploreClick?: () => void;
  onRatingClick?: () => void;
}

const TourCard = ({ 
  title, 
  subtitle, 
  price, 
  duration, 
  rating, 
  reviewCount, 
  image, 
  tours,
  index,
  onToursClick,
  onExploreClick,
  onRatingClick
}: TourCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl glass-card p-0 cursor-pointer"
      onClick={onToursClick}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        
        {/* Rating badge */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRatingClick?.();
          }}
          className="absolute top-4 right-4 glass-card px-3 py-1.5 hover:bg-primary/20 transition-colors cursor-pointer"
        >
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-primary fill-current" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
        </button>

        {/* Tours count badge */}
        {tours && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToursClick?.();
            }}
            className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-primary transition-colors"
          >
            {tours} Tours
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground font-light text-sm leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Details */}
        <div className="flex items-center justify-between mb-4">
          {duration && (
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock size={16} />
              <span className="text-sm font-light">{duration}</span>
            </div>
          )}
          
          {price && (
            <div className="text-right">
              <div className="text-xl font-semibold text-primary">{price}</div>
              <div className="text-xs text-muted-foreground">per person</div>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex space-x-3">
          <Button 
            variant="primary" 
            size="sm" 
            className="flex-1 group/btn"
            onClick={(e) => {
              e.stopPropagation();
              onExploreClick?.();
            }}
          >
            <CreditCard size={16} className="mr-2" />
            {tours ? 'Explore More' : 'Book Journey'}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="px-3"
          >
            <MapPin size={16} />
          </Button>
        </div>

        {/* Premium reviews section */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileHover={{ opacity: 1, height: 'auto' }}
          className="mt-4 pt-4 border-t border-white/10 overflow-hidden"
        >
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>"Exceptional experience with local expertise"</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="text-primary fill-current" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        whileHover={{ 
          opacity: 1,
          boxShadow: '0 0 30px rgba(255, 193, 7, 0.3)' 
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default TourCard;