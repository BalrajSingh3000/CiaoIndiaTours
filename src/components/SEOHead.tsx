import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = "Ciao India Tours - Premium Luxury Travel & Tour Packages in India | Ciao India Tour",
  description = "Ciao India Tours offers premium, tailor-made luxury travel experiences across India. Expert local guides, 100% customized itineraries for Golden Triangle, Rajasthan, Kerala, Ladakh & more. Book your dream India tour today!",
  keywords = "Ciao India Tours, Ciao India Tour, India travel packages, luxury India tours, Golden Triangle tour, Rajasthan tour, Kerala backwaters, Ladakh tour, custom India travel, premium India tours, India travel agency, tailor-made India tours",
  canonicalUrl = "https://ciaoindiatours.com/",
  ogImage = "https://ciaoindiatours.com/assets/taj-mahal-sunrise.jpg",
  ogType = "website",
  structuredData
}: SEOHeadProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Ciao India Tours",
    "alternateName": "Ciao India Tour",
    "description": description,
    "url": canonicalUrl,
    "logo": "https://ciaoindiatours.com/assets/ciao-logo.png",
    "image": ogImage,
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@ciaoindiatours.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937",
      "longitude": "78.9629"
    },
    "sameAs": [
      "https://www.facebook.com/ciaoindiatours",
      "https://www.instagram.com/ciaoindiatours",
      "https://twitter.com/CiaoIndiaTours",
      "https://www.linkedin.com/company/ciao-india-tours"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ciao India Tours" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Ciao India Tours - Luxury Travel in India" />
      <meta property="og:site_name" content="Ciao India Tours" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Ciao India Tours - Luxury Travel in India" />
      <meta name="twitter:site" content="@CiaoIndiaTours" />
      <meta name="twitter:creator" content="@CiaoIndiaTours" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      <meta name="application-name" content="Ciao India Tours" />
      <meta name="apple-mobile-web-app-title" content="Ciao India Tours" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="20.5937;78.9629" />
      <meta name="ICBM" content="20.5937, 78.9629" />
      
      {/* Language and Content */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
