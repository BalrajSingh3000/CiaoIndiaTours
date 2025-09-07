import React from 'react';
import { Phone, MapPin, WhatsappLogo } from 'phosphor-react';

const Footer = () => (
  <footer className="py-12 px-0 bg-background border-t border-white/10">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-foreground mb-4">Ciao India Tours</h3>
          <p className="text-muted-foreground font-light leading-relaxed mb-4">
            Your trusted partner for authentic luxury travel experiences in India and beyond. 
            Registered with the Government of India, we create tailor-made journeys that transform lives.
          </p>
          <p className="text-sm text-muted-foreground font-light mb-4">
            140 – Budhpur Delhi -110036 (INDIA)<br />
            Registered License no.: ROF/NORTH/151/2015<br />
            GSTIN – 07AAIFC2858C3ZK
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => window.dispatchEvent(new Event('openContactModal'))}
              className="p-2 text-muted-foreground hover:text-primary transition-colors glass-card hover:shadow-glow"
              title="Contact Us"
            >
              <Phone size={16} />
            </button>
            <a 
              href="https://maps.app.goo.gl/L6Ai7qRypktefgqU8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors glass-card hover:shadow-glow"
              title="Our Location"
            >
              <MapPin size={16} />
            </a>
            <a 
              href="https://wa.me/919971981381" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors glass-card hover:shadow-glow"
              title="WhatsApp"
            >
              <WhatsappLogo size={16} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
            {['About Us', 'Contact', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
              <a
                key={link}
                href={link === 'Terms & Conditions' ? '/terms' : link === 'Privacy Policy' ? '/privacy' : '#'}
                className="block text-muted-foreground hover:text-primary transition-colors font-light"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-4">Destinations</h4>
          <div className="space-y-2">
            {['Golden Triangle', 'Rajasthan', 'Kerala', 'Ladakh'].map((dest) => (
              <a
                key={dest}
                href="#tours"
                className="block text-muted-foreground hover:text-primary transition-colors font-light"
              >
                {dest}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-8 pt-8 text-center">
        <p className="text-muted-foreground font-light">
          © 2024 Ciao India Tours. All rights reserved. | Crafted with luxury in mind.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
