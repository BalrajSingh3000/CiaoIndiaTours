// src/components/ExpertiseSection.tsx
import React from 'react';
import { Shield, Clock, Globe, Star, Users, Medal } from 'phosphor-react';
import Button from './Button'; // Make sure the path matches your Button component

interface ExpertiseSectionProps {
  onAskQuote: () => void;
  onContactExpert: () => void;
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  onAskQuote,
  onContactExpert,
}) => {
  const guarantees = [
    {
      icon: <Star size={24} />,
      title: 'Best price in the industry',
      description: 'Competitive rates with no hidden costs'
    },
    {
      icon: <Globe size={24} />,
      title: '100% tailor-made trip',
      description: 'Every journey crafted to your preferences'
    },
    {
      icon: <Shield size={24} />,
      title: 'Safe journey',
      description: 'Your safety is our top priority'
    },
    {
      icon: <Medal size={24} />,
      title: 'Excellent service',
      description: 'Exceptional experiences guaranteed'
    },
    {
      icon: <Clock size={24} />,
      title: 'Quotes within 24 hours',
      description: 'Quick response, faster planning'
    }
  ];

  const languages = ['Italian', 'Spanish', 'French', 'German', 'Russian', 'Portuguese'];

  return (
    <section id="expertise" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-foreground mb-6">
              Our <span className="text-primary font-medium">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
        </div>
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - About Us */}
          <div data-aos="fade-right" data-aos-delay="200">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-medium text-luxury mb-6">
                Why Choose Ciao India Tours?
              </h3>
              <div className="space-y-6 text-foreground/80 font-light leading-relaxed" data-aos="fade-in" data-aos-delay="200" data-aos-easing="ease-in-out-cubic"> 
                <p>
                  Ciao India Tours is among the best travel agencies in India. We are a reliable 
                  local tour operator, registered with the Government of India. You can create your 
                  100% tailor-made trip with us.
                </p>
                <p>
                  Being a local agency in India, our prices are without intermediaries. Hence book 
                  with us to save on your trip. We are the guarantee of excellent service and 
                  reasonable price.
                </p>
                <p>
                  Our professionals have helped countless travelers realize their dream of traveling 
                  to India. Our travel experts speak several foreign languages including:
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {languages.map((lang, index) => (
                    <span
                      key={lang}
                      className="glass px-3 py-1 rounded-full text-sm text-primary font-medium"
                      data-aos="fade-up"
                      data-aos-delay={50 + (index * 100)}
                      data-aos-easing="ease-in-out-cubic"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-white/10 mt-6">
                  <p className="text-luxury font-medium" data-aos="fade-up"
                    data-aos-delay="150" data-aos-easing="ease-in-out-cubic">
                    Write to us to receive your personalized quote within 24 hours.
                  </p>
                  <p className="text-sm mt-2 text-foreground/60" data-aos="fade-up"
                    data-aos-delay="200" data-aos-easing="ease-in-out-cubic">
                    Available 24/7 for your convenience
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Guarantees */}
          <div data-aos="fade-left" data-aos-delay="400" data-aos-easing="ease-in-out-cubic">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-medium text-luxury mb-8">
                The Guarantee of Ciao India Tours
              </h3>
              <div className="grid gap-6">
                {guarantees.map((guarantee, index) => (
                  <div
                    key={guarantee.title}
                    className="flex items-start space-x-4 group"
                    data-aos="fade-left"
                    data-aos-delay={50 + (index * 100)}
                  >
                    <div className="glass p-3 rounded-xl text-primary group-hover:scale-110 transition-smooth">
                      {guarantee.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-2">
                        {guarantee.title}
                      </h4>
                      <p className="text-foreground/70 text-sm font-light">
                        {guarantee.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/*Buttons */}
              <div className="flex items-center space-x-4 pt-6 ml-4" data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out-cubic">
                  <Button 
                    variant="primary" 
                    size="md"
                    onClick={onAskQuote}
                  >
                    Ask for a Quote
                  </Button>
                  <Button 
                    variant="custom" 
                    size="md"
                    onClick={onContactExpert}
                  >
                    Connect with Expert
                  </Button>
                </div>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="glass-card p-7" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out-cubic">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-luxury">1000+</div>
              <div className="text-foreground/70 text-sm font-light">Happy Travelers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-luxury">50+</div>
              <div className="text-foreground/70 text-sm font-light">Destinations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-luxury">10+</div>
              <div className="text-foreground/70 text-sm font-light">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-luxury">24/7</div>
              <div className="text-foreground/70 text-sm font-light">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
