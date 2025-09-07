// Utility function to update all single-item itineraries to placeholder format
export const placeholderItinerary = [
  {
    day: 1,
    title: "Itinerary Coming Soon",
    description: "Detailed itinerary will be updated soon. Please contact us for more information about this amazing journey.",
    activities: ["Arrival and welcome", "Orientation briefing", "Local introduction"],
    accommodation: "Premium accommodation as per itinerary",
    meals: "Meals as per itinerary"
  }
];

export const updateSingleItemItinerary = (itinerary: any[]) => {
  if (itinerary.length === 1) {
    return placeholderItinerary;
  }
  return itinerary;
};