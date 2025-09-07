import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'neumorphic-btn text-primary-foreground hover:shadow-glow',
      secondary: 'glass-card hover:bg-card/90 text-foreground border-gradient',
      ghost: 'text-muted-foreground hover:text-primary hover:bg-muted/50',
      custom: 'bg-blue-600 hover:bg-blue-700 text-white',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-3 text-base rounded-xl',
      lg: 'px-8 py-4 text-lg rounded-xl',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10">
          {children}
        </span>
        
        {/* Animated background for primary variant */}
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;