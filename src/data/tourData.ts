// Tour data with detailed sub-tours and itineraries
import tajMahalImg from '@/assets/taj-mahal-sunrise.jpg';
import rajasthaniPalaceImg from '@/assets/rajasthani-palace.jpg';
import keralaBackwatersImg from '@/assets/kerala-backwaters.jpg';
import ladakhMonasteryImg from '@/assets/ladakh-monastery.jpg';
import goldenTriangleImg from '@/assets/golden-triangle.jpg';
import southIndiaImg from '@/assets/south-india.jpg';
import rajasthanImg from '@/assets/rajasthan.jpg';
import ladakhImg from '@/assets/ladakh.jpg';
import gujaratImg from '@/assets/gujarat.jpg';
import lakshadweepImg from '@/assets/lakshadweep.jpg';
import orissaImg from '@/assets/orissa.jpg';
import incredibleIndiaImg from '@/assets/incredible-india.jpg';
import bhutanImg from '@/assets/bhutan.jpg';
import nepalImg from '@/assets/nepal.jpg';
import thailandImg from '@/assets/thailand.jpg';
import omanImg from '@/assets/oman.jpg';

export interface SubTour {
  id: string;
  title: string;
  duration: string;
  price: string;
  rating: number;
  reviewCount: number;
  image: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    accommodation?: string;
    meals?: string;
  }[];
}

export interface TourCategory {
  id: string;
  title: string;
  subtitle: string;
  tours: number;
  rating: number;
  reviewCount: number;
  image: string;
  price?: string;
  duration?: string;
  subTours: SubTour[];
}

export const tourCategories: TourCategory[] = [
  {
    id: 'golden-triangle',
    title: "Golden Triangle",
    subtitle: "Delhi, Agra & Jaipur - Experience India's most iconic destinations",
    tours: 8,
    rating: 4.9,
    reviewCount: 234,
    image: goldenTriangleImg,
    subTours: [
      {
        id: 'golden-triangle-varanasi',
        title: 'Golden triangle and Varanasi',
        duration: '08 nights/09 days',
        price: '€530 pp',
        rating: 4.9,
        reviewCount: 45,
        image: '/src/assets/taj-mahal-sunrise.jpg',
        highlights: ['Explore Delhi\'s historic monuments', 'Taj Mahal sunrise experience', 'Jaipur\'s royal palaces', 'Varanasi spiritual journey'],
        itinerary: [
          {
            day: 1,
            title: "Itinerary Coming Soon",
            description: "Detailed itinerary will be updated soon. Please contact us for more information about this amazing journey.",
            activities: ["Arrival and welcome", "Orientation briefing", "Local introduction"],
            accommodation: "Premium accommodation as per itinerary",
            meals: "Meals as per itinerary"
          }
        ]
      },
      {
        id: 'golden-triangle-classic',
        title: 'Golden triangle in India',
        duration: '06 nights/07 days',
        price: '€330 pp',
        rating: 4.8,
        reviewCount: 67,
        image: tajMahalImg,
        highlights: ['Classic Delhi-Agra-Jaipur circuit', 'UNESCO World Heritage sites', 'Cultural immersion', 'Local experiences'],
        itinerary: [
          {
            day: 1,
            title: "Itinerary Coming Soon", 
            description: "Detailed itinerary will be updated soon. Please contact us for more information about this amazing journey.",
            activities: ["Arrival and welcome", "Orientation briefing", "Local introduction"],
            accommodation: "Premium accommodation as per itinerary",
            meals: "Meals as per itinerary"
          }
        ]
      },
      {
        id: 'golden-triangle-beach',
        title: 'Golden triangle with Beach',
        duration: '12 nights/14 days',
        price: '€1320 pp',
        rating: 4.9,
        reviewCount: 89,
        image: tajMahalImg,
        highlights: ['Complete Golden Triangle', 'Beach relaxation in Goa', 'Water sports activities', 'Luxury resorts'],
        itinerary: [
          {
            day: 1,
            title: "Itinerary Coming Soon",
            description: "Detailed itinerary will be updated soon. Please contact us for more information about this amazing journey.",
            activities: ["Arrival and welcome", "Orientation briefing", "Local introduction"],
            accommodation: "Premium accommodation as per itinerary",
            meals: "Meals as per itinerary"
          }
        ]
      },
      {
        id: 'golden-triangle-khajuraho',
        title: 'Golden triangle with Khajuraho',
        duration: '10 nights/11 days',
        price: '€810 pp',
        rating: 4.7,
        reviewCount: 56,
        image: tajMahalImg,
        highlights: ['UNESCO Khajuraho temples', 'Erotic sculptures', 'Ancient architecture', 'Cultural heritage'],
        itinerary: [
          {
            day: 1,
            title: "Itinerary Coming Soon",
            description: "Detailed itinerary will be updated soon. Please contact us for more information about this amazing journey.",
            activities: ["Arrival and welcome", "Orientation briefing", "Local introduction"],
            accommodation: "Premium accommodation as per itinerary",
            meals: "Meals as per itinerary"
          }
        ]
      },
      {
        id: 'golden-triangle-ladakh',
        title: 'Golden triangle with Ladakh',
        duration: '11 nights/12 days',
        price: '€1121 pp',
        rating: 4.8,
        reviewCount: 43,
        image: ladakhImg,
        highlights: ['High altitude adventure', 'Buddhist monasteries', 'Scenic landscapes', 'Mountain culture'],
        itinerary: [
          {
            day: 1,
            title: "Itinerary Coming Soon",
            description: "Detailed itinerary will be updated soon. Please contact us for more information about this amazing journey.",
            activities: ["Arrival and welcome", "Orientation briefing", "Local introduction"],
            accommodation: "Premium accommodation as per itinerary",
            meals: "Meals as per itinerary"
          }
        ]
      },
      {
        id: 'golden-triangle-ranthambhore',
        title: 'Golden triangle with Ranthambhore',
        duration: '06 nights/07 days',
        price: '€480 pp',
        rating: 4.9,
        reviewCount: 78,
        image: tajMahalImg,
        highlights: ['Tiger safari experience', 'Wildlife photography', 'Ranthambhore Fort', 'Nature conservation'],
        itinerary: [{ day: 1, title: 'Delhi Start', description: 'Wildlife adventure', activities: ['Airport pickup', 'Safari briefing'] }]
      },
      {
        id: 'golden-triangle-rishikesh',
        title: 'Golden triangle with Rishikesh',
        duration: '09 nights/08 days',
        price: '€560 pp',
        rating: 4.6,
        reviewCount: 91,
        image: tajMahalImg,
        highlights: ['Yoga capital experience', 'Ganges spirituality', 'Adventure sports', 'Meditation retreats'],
        itinerary: [{ day: 1, title: 'Delhi Welcome', description: 'Spiritual journey', activities: ['Arrival', 'Spiritual orientation'] }]
      },
      {
        id: 'golden-triangle-vrindavan',
        title: 'Golden triangle with Vrindavan',
        duration: '07 nights/08 days',
        price: '€380 pp',
        rating: 4.7,
        reviewCount: 65,
        image: tajMahalImg,
        highlights: ['Krishna temples', 'Spiritual pilgrimage', 'ISKCON visits', 'Devotional culture'],
        itinerary: [{ day: 1, title: 'Delhi Arrival', description: 'Divine journey begins', activities: ['Temple introduction', 'Spiritual preparation'] }]
      }
    ]
  },
  {
    id: 'south-india',
    title: "Tour In South India",
    subtitle: "Kerala, Tamil Nadu & Karnataka - Discover the cultural richness of South India",
    tours: 8,
    rating: 4.8,
    reviewCount: 189,
    image: keralaBackwatersImg,
    subTours: [
      {
        id: 'grand-south-india',
        title: 'Grand tour of South India',
        duration: '21 nights/22 days',
        price: '€1450 pp',
        rating: 4.9,
        reviewCount: 32,
        image: keralaBackwatersImg,
        highlights: ['Complete South India experience', 'Backwater cruises', 'Temple architecture', 'Cultural diversity'],
        itinerary: [{ day: 1, title: 'Chennai Arrival', description: 'Gateway to South India', activities: ['Airport transfer', 'City introduction'] }]
      },
      {
        id: 'classic-kerala',
        title: 'Classic tour in Kerala',
        duration: '11 nights/12 days',
        price: '€990 pp',
        rating: 4.8,
        reviewCount: 67,
        image: keralaBackwatersImg,
        highlights: ['Backwater houseboats', 'Spice plantations', 'Hill stations', 'Ayurvedic treatments'],
        itinerary: [{ day: 1, title: 'Kochi Arrival', description: 'Gods Own Country', activities: ['Airport pickup', 'Fort Kochi tour'] }]
      },
      {
        id: 'tamilnadu-kerala',
        title: 'Best of Tamilnadu and Kerala',
        duration: '16 nights/17 days',
        price: '€1140 pp',
        rating: 4.7,
        reviewCount: 45,
        image: keralaBackwatersImg,
        highlights: ['Temple trails', 'Backwater experiences', 'Cultural heritage', 'Natural beauty'],
        itinerary: [{ day: 1, title: 'Chennai Welcome', description: 'Cultural journey begins', activities: ['Arrival', 'Temple visit'] }]
      },
      {
        id: 'kerala-tamilnadu-highlights',
        title: 'Hightlights of Kerala and Tamilnadu',
        duration: '11 nights/12 days',
        price: '€840 pp',
        rating: 4.6,
        reviewCount: 58,
        image: keralaBackwatersImg,
        highlights: ['Key destinations', 'Cultural immersion', 'Natural wonders', 'Local experiences'],
        itinerary: [{ day: 1, title: 'Kochi Start', description: 'Highlights tour', activities: ['Airport transfer', 'Overview briefing'] }]
      },
      {
        id: 'karnataka-lakshadweep',
        title: 'Karnataka with Lakshadweep',
        duration: '12 nights/13 days',
        price: '€990 pp',
        rating: 4.8,
        reviewCount: 34,
        image: lakshadweepImg,
        highlights: ['Palace architecture', 'Island paradise', 'Coral reefs', 'Beach relaxation'],
        itinerary: [{ day: 1, title: 'Bangalore Arrival', description: 'Garden city welcome', activities: ['Airport pickup', 'City tour'] }]
      },
      {
        id: 'kerala-lakshadweep',
        title: 'Kerala with Lakshadweep',
        duration: '13 nights/14 days',
        price: '€1296 pp',
        rating: 4.9,
        reviewCount: 41,
        image: lakshadweepImg,
        highlights: ['Backwaters to beaches', 'Island hopping', 'Water sports', 'Pristine nature'],
        itinerary: [{ day: 1, title: 'Kochi Gateway', description: 'Backwaters to islands', activities: ['Arrival', 'Backwater introduction'] }]
      },
      {
        id: 'kerala-ayurveda',
        title: 'Kerala Ayurwedic welness retreat',
        duration: '11 nights/12 days',
        price: '€1220 pp',
        rating: 4.9,
        reviewCount: 76,
        image: keralaBackwatersImg,
        highlights: ['Authentic Ayurveda', 'Wellness treatments', 'Yoga sessions', 'Detox programs'],
        itinerary: [{ day: 1, title: 'Wellness Journey', description: 'Ayurvedic healing begins', activities: ['Health consultation', 'Treatment planning'] }]
      },
      {
        id: 'kerala-tamilnadu-lakshadweep',
        title: 'Kerala, Tamilnadu e Lakashadweep',
        duration: '18 nights/19 days',
        price: '€1760 pp',
        rating: 4.8,
        reviewCount: 29,
        image: lakshadweepImg,
        highlights: ['Complete South experience', 'Cultural diversity', 'Island paradise', 'Comprehensive tour'],
        itinerary: [{ day: 1, title: 'Grand Journey', description: 'Ultimate South India', activities: ['Chennai arrival', 'Journey planning'] }]
      }
    ]
  },
  {
    id: 'rajasthan',
    title: "Tour In Rajasthan",
    subtitle: "Land of Kings - Explore majestic palaces, forts, and desert landscapes",
    tours: 8,
    rating: 4.9,
    reviewCount: 312,
    image: rajasthaniPalaceImg,
    subTours: [
      {
        id: 'classic-rajasthan',
        title: 'Classic tour of Rajasthan',
        duration: '13 Nights/14 Days',
        price: '€752 pp',
        rating: 4.9,
        reviewCount: 89,
        image: rajasthaniPalaceImg,
        highlights: ['Majestic palaces', 'Desert safaris', 'Cultural performances', 'Royal heritage'],
        itinerary: [{ day: 1, title: 'Jaipur Arrival', description: 'Pink City welcome', activities: ['Airport transfer', 'Palace visit'] }]
      },
      {
        id: 'cultural-rajasthan',
        title: 'Cultural tour of Rajasthan',
        duration: '13 Nights/14 Days',
        price: '€722 pp',
        rating: 4.8,
        reviewCount: 67,
        image: rajasthaniPalaceImg,
        highlights: ['Folk traditions', 'Handicrafts', 'Music and dance', 'Local communities'],
        itinerary: [{ day: 1, title: 'Cultural Immersion', description: 'Rajasthani culture', activities: ['Folk performance', 'Craft workshop'] }]
      },
      {
        id: 'rajasthan-varanasi',
        title: 'Tour of Rajasthan with Varanasi',
        duration: '16 nights/17 days',
        price: '€981 pp',
        rating: 4.9,
        reviewCount: 54,
        image: rajasthaniPalaceImg,
        highlights: ['Royal Rajasthan', 'Spiritual Varanasi', 'Ganges experience', 'Cultural contrast'],
        itinerary: [{ day: 1, title: 'Jaipur Start', description: 'Royalty to spirituality', activities: ['Palace tour', 'Journey planning'] }]
      },
      {
        id: 'rajasthan-khajuraho-varanasi',
        title: 'Rajasthan, Khajuraho and Varanasi',
        duration: '21 nights/22 days',
        price: '€1286 pp',
        rating: 4.8,
        reviewCount: 43,
        image: rajasthaniPalaceImg,
        highlights: ['Complete cultural circuit', 'UNESCO sites', 'Diverse experiences', 'Heritage trail'],
        itinerary: [{ day: 1, title: 'Grand Circuit', description: 'Ultimate cultural journey', activities: ['Comprehensive briefing', 'Heritage introduction'] }]
      },
      {
        id: 'rajasthan-tiger-safari',
        title: 'Rajasthan tour with tiger Safari',
        duration: '15 nights/16 days',
        price: '€912 pp',
        rating: 4.9,
        reviewCount: 71,
        image: rajasthaniPalaceImg,
        highlights: ['Royal palaces', 'Tiger spotting', 'Wildlife photography', 'Nature conservation'],
        itinerary: [{ day: 1, title: 'Wildlife Adventure', description: 'Royalty meets wilderness', activities: ['Safari briefing', 'Palace visit'] }]
      },
      {
        id: 'maharaja-rajasthan',
        title: 'Maharaja Tour of Rajasthan',
        duration: '16 nights/17 days',
        price: '€2050 pp',
        rating: 4.9,
        reviewCount: 38,
        image: rajasthaniPalaceImg,
        highlights: ['Luxury experiences', 'Palace hotels', 'Royal treatment', 'Exclusive access'],
        itinerary: [{ day: 1, title: 'Royal Welcome', description: 'Maharaja experience', activities: ['Palace check-in', 'Royal dinner'] }]
      },
      {
        id: 'glimpse-rajasthan',
        title: 'Glimpse of Rajasthan',
        duration: '09 nights/10 days',
        price: '€610 pp',
        rating: 4.7,
        reviewCount: 92,
        image: rajasthaniPalaceImg,
        highlights: ['Key highlights', 'Essential experiences', 'Cultural overview', 'Desert taste'],
        itinerary: [{ day: 1, title: 'Quick Introduction', description: 'Rajasthan highlights', activities: ['City tour', 'Cultural show'] }]
      },
      {
        id: 'safari-rajasthan',
        title: 'Safari tour in Rajasthan',
        duration: '14 nights/15 days',
        price: '€956 pp',
        rating: 4.8,
        reviewCount: 65,
        image: rajasthaniPalaceImg,
        highlights: ['Multiple safaris', 'Wildlife diversity', 'Desert exploration', 'Nature photography'],
        itinerary: [{ day: 1, title: 'Safari Adventure', description: 'Wildlife exploration', activities: ['Safari preparation', 'Equipment briefing'] }]
      }
    ]
  },
  {
    id: 'gujarat',
    title: "Tour in Gujarat",
    subtitle: "Vibrant Gujarat - Discover the land of legends, culture, and natural beauty",
    tours: 4,
    rating: 4.7,
    reviewCount: 156,
    image: gujaratImg,
    subTours: [
      {
        id: 'cultural-gujarat',
        title: 'Cultural tour of Gujarat',
        duration: '13 Nights/14 Days',
        price: '€722 pp',
        rating: 4.8,
        reviewCount: 45,
        image: gujaratImg,
        highlights: ['Gujarati culture', 'Handicrafts', 'Festivals', 'Local traditions'],
        itinerary: [{ day: 1, title: 'Ahmedabad Arrival', description: 'Cultural capital', activities: ['Heritage walk', 'Textile museum'] }]
      },
      {
        id: 'grand-gujarat',
        title: 'Grand tour of Gujarat',
        duration: '13 nights/14 days',
        price: '€1420 pp',
        rating: 4.9,
        reviewCount: 32,
        image: gujaratImg,
        highlights: ['Comprehensive Gujarat', 'Luxury experiences', 'Exclusive access', 'Premium services'],
        itinerary: [{ day: 1, title: 'Grand Welcome', description: 'Luxury Gujarat tour', activities: ['VIP transfer', 'Premium briefing'] }]
      },
      {
        id: 'unique-gujarat',
        title: 'Unique land of Gujarat',
        duration: '14 nights/15 days',
        price: '€1470 pp',
        rating: 4.7,
        reviewCount: 38,
        image: gujaratImg,
        highlights: ['Hidden gems', 'Unique experiences', 'Off-beat destinations', 'Local insights'],
        itinerary: [{ day: 1, title: 'Unique Journey', description: 'Discover hidden Gujarat', activities: ['Local interaction', 'Unique sites'] }]
      },
      {
        id: 'gujarat-rajasthan',
        title: 'Gujarat with Rajasthan',
        duration: '21 nights/22 days',
        price: '€1645 pp',
        rating: 4.8,
        reviewCount: 41,
        image: gujaratImg,
        highlights: ['Two vibrant states', 'Cultural diversity', 'Royal heritage', 'Comprehensive tour'],
        itinerary: [{ day: 1, title: 'Twin State Journey', description: 'Gujarat to Rajasthan', activities: ['Journey planning', 'Cultural briefing'] }]
      }
    ]
  },
  {
    id: 'lakshadweep',
    title: "Tour in Lakshadweep",
    subtitle: "Coral Paradise - Experience pristine beaches and crystal-clear waters",
    tours: 4,
    rating: 4.9,
    reviewCount: 98,
    image: lakshadweepImg,
    subTours: [
      {
        id: 'relax-lakshadweep',
        title: 'Relax in Lakshadweep',
        duration: '10 nights/11 days',
        price: '€1296 pp',
        rating: 4.9,
        reviewCount: 34,
        image: lakshadweepImg,
        highlights: ['Beach relaxation', 'Water sports', 'Coral reefs', 'Island hopping'],
        itinerary: [{ day: 1, title: 'Island Paradise', description: 'Tropical relaxation', activities: ['Beach arrival', 'Island orientation'] }]
      },
      {
        id: 'karnataka-lakshadweep-combo',
        title: 'Karnataka with Lakshadweep',
        duration: '12 nights/13 days',
        price: '€990 pp',
        rating: 4.8,
        reviewCount: 28,
        image: lakshadweepImg,
        highlights: ['Cultural Karnataka', 'Island paradise', 'Diverse experiences', 'Land to sea'],
        itinerary: [{ day: 1, title: 'Bangalore Start', description: 'City to islands', activities: ['City tour', 'Island preparation'] }]
      },
      {
        id: 'kerala-lakshadweep-combo',
        title: 'Kerala with Lakshadweep',
        duration: '13 nights/14 days',
        price: '€1296 pp',
        rating: 4.9,
        reviewCount: 42,
        image: lakshadweepImg,
        highlights: ['Backwaters to beaches', 'Complete relaxation', 'Natural beauty', 'Water experiences'],
        itinerary: [{ day: 1, title: 'Kochi Gateway', description: 'Backwaters to coral reefs', activities: ['Backwater cruise', 'Island briefing'] }]
      },
      {
        id: 'kerala-tamilnadu-lakshadweep-combo',
        title: 'Kerala, Tamilnadu Lakshadweep',
        duration: '18 nights/19 days',
        price: '€1760 pp',
        rating: 4.8,
        reviewCount: 25,
        image: lakshadweepImg,
        highlights: ['Ultimate South tour', 'Cultural diversity', 'Island paradise', 'Comprehensive experience'],
        itinerary: [{ day: 1, title: 'Grand South Journey', description: 'Complete South India', activities: ['Journey overview', 'Cultural introduction'] }]
      }
    ]
  },
  {
    id: 'ladakh',
    title: "Tour In Ladakh",
    subtitle: "Little Tibet - Explore high-altitude deserts and Buddhist monasteries",
    tours: 11,
    rating: 4.8,
    reviewCount: 187,
    image: '/src/assets/ladakh.jpg',
    subTours: [
      {
        id: 'ladakh-monasteries',
        title: 'Ladakh monasteries tour',
        duration: '10 nights/11 days',
        price: '€1120 pp',
        rating: 4.9,
        reviewCount: 45,
        image: ladakhMonasteryImg,
        highlights: ['Ancient monasteries', 'Buddhist culture', 'Mountain landscapes', 'Spiritual journey'],
        itinerary: [{ day: 1, title: 'Leh Arrival', description: 'High altitude acclimatization', activities: ['Rest day', 'Monastery visit'] }]
      },
      {
        id: 'glimpse-ladakh',
        title: 'Glimpse of Ladakh',
        duration: '07 nights/08 Days',
        price: '€ 790 pp',
        rating: 4.7,
        reviewCount: 67,
        image: ladakhImg,
        highlights: ['Key highlights', 'Mountain views', 'Cultural overview', 'Adventure taste'],
        itinerary: [{ day: 1, title: 'Leh Introduction', description: 'Ladakh highlights', activities: ['Acclimatization', 'Local tour'] }]
      },
      {
        id: 'heritage-ladakh',
        title: 'Heritage tour of Ladakh',
        duration: '10 nights/11 days',
        price: '€990 pp',
        rating: 4.8,
        reviewCount: 38,
        image: ladakhMonasteryImg,
        highlights: ['Cultural heritage', 'Historical sites', 'Traditional life', 'Ancient architecture'],
        itinerary: [{ day: 1, title: 'Heritage Journey', description: 'Cultural exploration', activities: ['Heritage briefing', 'Palace visit'] }]
      },
      {
        id: 'ladakh-kashmir',
        title: 'Ladakh with Kashmir',
        duration: '14 Nights/15 Days',
        price: '€1180 pp',
        rating: 4.9,
        reviewCount: 52,
        image: ladakhImg,
        highlights: ['Desert to valley', 'Diverse landscapes', 'Cultural contrast', 'Complete experience'],
        itinerary: [{ day: 1, title: 'Twin Regions', description: 'Ladakh to Kashmir', activities: ['Journey planning', 'Regional briefing'] }]
      },
      {
        id: 'cultural-ladakh',
        title: 'Cultural tour of Ladakh',
        duration: '05 nights/06 days',
        price: '€ 650 pp',
        rating: 4.6,
        reviewCount: 73,
        image: ladakhImg,
        highlights: ['Cultural immersion', 'Local traditions', 'Festival experiences', 'Community visits'],
        itinerary: [{ day: 1, title: 'Cultural Dive', description: 'Ladakhi culture', activities: ['Cultural center', 'Local family visit'] }]
      },
      {
        id: 'grand-ladakh',
        title: 'Grand tour of Ladakh',
        duration: '15 nights/16 days',
        price: '€1584 pp',
        rating: 4.9,
        reviewCount: 29,
        image: ladakhImg,
        highlights: ['Comprehensive Ladakh', 'Remote regions', 'Adventure activities', 'Complete exploration'],
        itinerary: [{ day: 1, title: 'Grand Adventure', description: 'Ultimate Ladakh', activities: ['Expedition briefing', 'Equipment check'] }]
      },
      {
        id: 'ladakh-golden-triangle',
        title: 'Ladakh with Golden Triangle',
        duration: '11 nights/12 days',
        price: '€1121 pp',
        rating: 4.8,
        reviewCount: 41,
        image: ladakhImg,
        highlights: ['Mountains to monuments', 'Diverse India', 'Cultural contrast', 'Complete circuit'],
        itinerary: [{ day: 1, title: 'Contrasting India', description: 'Himalayas to plains', activities: ['Journey overview', 'Cultural briefing'] }]
      },
      {
        id: 'ladakh-trekking',
        title: 'Ladakh tour with trekking',
        duration: '15 nights/16 days',
        price: '€1321 pp',
        rating: 4.9,
        reviewCount: 36,
        image: ladakhImg,
        highlights: ['Adventure trekking', 'High altitude', 'Mountain peaks', 'Wilderness experience'],
        itinerary: [{ day: 1, title: 'Trekking Adventure', description: 'Mountain expedition', activities: ['Trek preparation', 'Equipment briefing'] }]
      },
      {
        id: 'zingchen-chilling-trek',
        title: 'Trek of Zingchen to Chilling',
        duration: '05 nights/06 days',
        price: '€590 pp',
        rating: 4.7,
        reviewCount: 48,
        image: ladakhImg,
        highlights: ['River trek', 'Village visits', 'Local culture', 'Scenic route'],
        itinerary: [{ day: 1, title: 'Trek Start', description: 'River valley trek', activities: ['Trek briefing', 'Route planning'] }]
      },
      {
        id: 'markha-valley-trek',
        title: 'Trek of Markha Valley',
        duration: '08 nights/09 days',
        price: '€780 pp',
        rating: 4.8,
        reviewCount: 55,
        image: ladakhImg,
        highlights: ['Classic trek', 'Valley views', 'Wildlife spotting', 'Mountain passes'],
        itinerary: [{ day: 1, title: 'Valley Trek', description: 'Markha Valley adventure', activities: ['Trek preparation', 'Valley introduction'] }]
      },
      {
        id: 'chadar-trek',
        title: 'The trek of frozen river – Chadar',
        duration: '09 nights/10 days',
        price: '€1290 pp',
        rating: 4.9,
        reviewCount: 32,
        image: ladakhImg,
        highlights: ['Frozen river trek', 'Winter adventure', 'Extreme conditions', 'Unique experience'],
        itinerary: [{ day: 1, title: 'Frozen Adventure', description: 'Chadar trek preparation', activities: ['Winter gear', 'Safety briefing'] }]
      }
    ]
  },
  {
    id: 'orissa',
    title: "Tour in Orissa",
    subtitle: "Kalinga Heritage - Explore ancient temples and tribal culture",
    tours: 3,
    rating: 4.6,
    reviewCount: 87,
    image: orissaImg,
    subTours: [
      {
        id: 'cultural-orissa',
        title: 'Cultural tour of Orissa',
        duration: '08 nights/09 days',
        price: '€850 pp',
        rating: 4.7,
        reviewCount: 34,
        image: orissaImg,
        highlights: ['Ancient temples', 'Classical dance', 'Handicrafts', 'Cultural heritage'],
        itinerary: [{ day: 1, title: 'Bhubaneswar Arrival', description: 'Temple city welcome', activities: ['Temple tour', 'Cultural briefing'] }]
      },
      {
        id: 'tribal-orissa',
        title: 'Tribal tour of Orissa',
        duration: '08 nights/09 days',
        price: '€870 pp',
        rating: 4.6,
        reviewCount: 28,
        image: orissaImg,
        highlights: ['Tribal communities', 'Traditional life', 'Handicrafts', 'Cultural exchange'],
        itinerary: [{ day: 1, title: 'Tribal Journey', description: 'Indigenous culture', activities: ['Community visit', 'Cultural exchange'] }]
      },
      {
        id: 'orissa-kolkata',
        title: 'Orissa tour with Kolkata',
        duration: '10 nights/11 days',
        price: '€1250 pp',
        rating: 4.8,
        reviewCount: 25,
        image: orissaImg,
        highlights: ['Temple heritage', 'Colonial Kolkata', 'Cultural diversity', 'Historical journey'],
        itinerary: [{ day: 1, title: 'Eastern India', description: 'Heritage to modernity', activities: ['Historical overview', 'Cultural briefing'] }]
      }
    ]
  },
  {
    id: 'incredible-india',
    title: "Incredible Tour of India",
    subtitle: "Complete India Experience - Discover the diversity and beauty of India",
    tours: 4,
    rating: 4.8,
    reviewCount: 245,
    image: incredibleIndiaImg,
    subTours: [
      {
        id: 'golden-triangle-india',
        title: 'Golden Triangle In India',
        duration: '07 Nights / 08 Days',
        price: '497 € pp',
        rating: 4.9,
        reviewCount: 89,
        image: tajMahalImg,
        highlights: ['Classic circuit', 'Iconic monuments', 'Cultural immersion', 'Heritage sites'],
        itinerary: [{ day: 1, title: 'Delhi Gateway', description: 'India introduction', activities: ['Airport transfer', 'City overview'] }]
      },
      {
        id: 'north-india-travel',
        title: 'Travel to North India',
        duration: '17 Nights / 18 Days',
        price: '1184 € p.p',
        rating: 4.8,
        reviewCount: 67,
        image: incredibleIndiaImg,
        highlights: ['Comprehensive North', 'Diverse experiences', 'Cultural journey', 'Historical sites'],
        itinerary: [{ day: 1, title: 'North India Journey', description: 'Comprehensive exploration', activities: ['Journey planning', 'Regional briefing'] }]
      },
      {
        id: 'incredible-trip-india',
        title: 'incredible trip to india',
        duration: '14 nights/15 days',
        price: '€1470 pp',
        rating: 4.9,
        reviewCount: 54,
        image: incredibleIndiaImg,
        highlights: ['Complete India taste', 'Diverse regions', 'Cultural variety', 'Memorable experiences'],
        itinerary: [{ day: 1, title: 'Incredible Journey', description: 'India discovery', activities: ['Welcome briefing', 'Journey overview'] }]
      },
      {
        id: 'cultural-tour-india',
        title: 'Cultural Tour in India',
        duration: '25 Nights / 26 Days',
        price: '€ 2452 pp',
        rating: 4.9,
        reviewCount: 35,
        image: incredibleIndiaImg,
        highlights: ['Ultimate cultural tour', 'All regions covered', 'Deep immersion', 'Comprehensive experience'],
        itinerary: [{ day: 1, title: 'Grand Cultural Journey', description: 'Ultimate India experience', activities: ['Cultural overview', 'Journey planning'] }]
      }
    ]
  },
  {
    id: 'bhutan',
    title: "Tour in Bhutan",
    subtitle: "Last Shangri-La - Discover the Land of the Thunder Dragon",
    tours: 1,
    rating: 4.9,
    reviewCount: 67,
    image: bhutanImg,
    subTours: [
      {
        id: 'bhutan-tour',
        title: 'Tour in Bhutan',
        duration: '14 nights/15 days',
        price: '€1470 pp',
        rating: 4.9,
        reviewCount: 67,
        image: bhutanImg,
        highlights: ['Himalayan kingdom', 'Buddhist culture', 'Pristine nature', 'Gross National Happiness'],
        itinerary: [{ day: 1, title: 'Paro Arrival', description: 'Dragon kingdom welcome', activities: ['Airport transfer', 'Cultural briefing'] }]
      }
    ]
  },
  {
    id: 'nepal',
    title: "Amazing Nepal",
    subtitle: "Roof of the World - Experience the Himalayas and ancient culture",
    tours: 1,
    rating: 4.8,
    reviewCount: 89,
    image: nepalImg,
    subTours: [
      {
        id: 'nepal-tour',
        title: 'Tour of Nepal',
        duration: '14 nights/15 days',
        price: '€1470 pp',
        rating: 4.8,
        reviewCount: 89,
        image: nepalImg,
        highlights: ['Himalayan peaks', 'Ancient temples', 'Cultural heritage', 'Adventure activities'],
        itinerary: [{ day: 1, title: 'Kathmandu Arrival', description: 'Himalayan kingdom', activities: ['Airport transfer', 'Valley tour'] }]
      }
    ]
  },
  {
    id: 'thailand',
    title: "Tour of Thailand",
    subtitle: "Land of Smiles - Tropical paradise with rich culture and cuisine",
    tours: 1,
    rating: 4.7,
    reviewCount: 134,
    image: thailandImg,
    subTours: [
      {
        id: 'thailand-tour',
        title: 'Tour of Thailand',
        duration: '14 nights/15 days',
        price: '€1470 pp',
        rating: 4.7,
        reviewCount: 134,
        image: thailandImg,
        highlights: ['Tropical beaches', 'Buddhist temples', 'Thai cuisine', 'Cultural experiences'],
        itinerary: [{ day: 1, title: 'Bangkok Arrival', description: 'Land of smiles', activities: ['Airport transfer', 'City tour'] }]
      }
    ]
  },
  {
    id: 'oman',
    title: "Tour of Oman",
    subtitle: "Arabian Jewel - Discover the beauty of the Arabian Peninsula",
    tours: 1,
    rating: 4.6,
    reviewCount: 78,
    image: omanImg,
    subTours: [
      {
        id: 'oman-tour',
        title: 'Tour of Oman',
        duration: '07 Nights / 08 Days',
        price: '497 € pp',
        rating: 4.6,
        reviewCount: 78,
        image: omanImg,
        highlights: ['Desert landscapes', 'Coastal beauty', 'Arabian culture', 'Historical sites'],
        itinerary: [
          {
            day: 1,
            title: "Itinerary Coming Soon",
            description: "Detailed itinerary will be updated soon. Please contact us for more information about this amazing journey.",
            activities: ["Arrival and welcome", "Orientation briefing", "Local introduction"],
            accommodation: "Premium accommodation as per itinerary",
            meals: "Meals as per itinerary"
          }
        ]
      }
    ]
  }
];
