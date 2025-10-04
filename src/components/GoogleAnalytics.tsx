import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Configuration
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = function() {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: 'Ciao India Tours',
      page_location: window.location.href,
      send_page_view: true,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title || 'Ciao India Tours',
      page_location: url,
      send_page_view: true,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track tour interactions
export const trackTourView = (tourName: string, tourCategory: string) => {
  trackEvent('view_tour', 'Tours', `${tourCategory} - ${tourName}`);
};

export const trackTourInquiry = (tourName: string, tourCategory: string) => {
  trackEvent('tour_inquiry', 'Tours', `${tourCategory} - ${tourName}`);
};

export const trackQuoteRequest = (source: string) => {
  trackEvent('quote_request', 'Lead Generation', source);
};

export const trackContactForm = (formType: string) => {
  trackEvent('contact_form', 'Lead Generation', formType);
};

// Track festival interactions
export const trackFestivalView = (festivalName: string) => {
  trackEvent('view_festival', 'Festivals', festivalName);
};

// Track FAQ interactions
export const trackFAQView = (question: string) => {
  trackEvent('faq_view', 'Content', question);
};

// Google Analytics Component
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      trackPageView(window.location.href, document.title);
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
