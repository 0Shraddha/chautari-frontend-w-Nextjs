import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker icons in Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const cafesAndRestaurants = [
    {
        "name": "Himalayan Java Coffee",
        "location": "Thamel, Kathmandu",
        "lat": 27.7156,
        "lng": 85.3123,
        "openingTime": "07:00 AM",
        "closingTime": "09:00 PM",
        "specialities": ["Organic Coffee", "Bakery Items", "Healthy Breakfast"],
        "theme": "Modern Coffee House with Cozy Ambience",
        "country" : "Nepal"
    },
    {
        "name": "OR2K",
        "location": "Thamel, Kathmandu",
        "lat": 27.7152,
        "lng": 85.3114,
        "openingTime": "11:00 AM",
        "closingTime": "10:00 PM",
        "specialities": ["Middle Eastern Cuisine", "Vegetarian", "Vegan Options"],
        "theme": "Bohemian with Artistic Vibes",
        "country" : "Nepal"
    },
    {
        "name": "Third Eye Restaurant",
        "location": "Thamel, Kathmandu",
        "lat": 27.7145,
        "lng": 85.3120,
        "openingTime": "10:00 AM",
        "closingTime": "10:00 PM",
        "specialities": ["Indian Cuisine", "Tandoori Dishes", "Fine Dining"],
        "theme": "Traditional Indian with Elegant Decor",
        "country" : "Nepal"
    },
    {
        "name": "Kaiser Cafe",
        "location": "Garden of Dreams, Kathmandu",
        "lat": 27.7148,
        "lng": 85.3127,
        "openingTime": "09:00 AM",
        "closingTime": "09:00 PM",
        "specialities": ["European Cuisine", "Pastries", "High Tea"],
        "theme": "Colonial-Era European Cafe",
        "country" : "Nepal"
    },
    {
        "name": "Roadhouse Cafe",
        "location": "Jhamsikhel, Lalitpur",
        "lat": 27.6739,
        "lng": 85.3192,
        "openingTime": "11:00 AM",
        "closingTime": "11:00 PM",
        "specialities": ["Wood-Fired Pizza", "Pasta", "Cocktails"],
        "theme": "Rustic with a Modern Touch",
        "country" : "Nepal"
    },
    {
        "name": "Patan Museum Cafe",
        "location": "Patan Durbar Square, Lalitpur",
        "lat": 27.6730,
        "lng": 85.3250,
        "openingTime": "10:00 AM",
        "closingTime": "07:00 PM",
        "specialities": ["Traditional Newari Cuisine", "Organic Ingredients"],
        "theme": "Heritage Setting with Outdoor Seating",
        "country" : "Nepal"
    },
    {
        "name": "Raithaane",
        "location": "Pulchowk, Lalitpur",
        "lat": 27.6715,
        "lng": 85.3185,
        "openingTime": "12:00 PM",
        "closingTime": "10:00 PM",
        "specialities": ["Authentic Nepali Cuisine", "Ethnic Dishes"],
        "theme": "Traditional Nepali with Cultural Decor",
        "country" : "Nepal"
    },
    {
        "name": "Nandini Food Court",
        "location": "Bhaktapur Durbar Square, Bhaktapur",
        "lat": 27.6722,
        "lng": 85.4290,
        "openingTime": "08:00 AM",
        "closingTime": "09:00 PM",
        "specialities": ["Newari Khaja Set", "Buff Sukuti", "Juju Dhau"],
        "theme": "Classic Newari Architecture",
        "country" : "Nepal"
    },
    {
        "name": "Daily Grind",
        "location": "Sallaghari, Bhaktapur",
        "lat": 27.6678,
        "lng": 85.4293,
        "openingTime": "07:00 AM",
        "closingTime": "08:00 PM",
        "specialities": ["Specialty Coffee", "Pancakes", "Vegan Options"],
        "theme": "Minimalist Coffee Shop",
        "country" : "Nepal"
    },
    {
        "name": "The Bakery Cafe",
        "location": "Maitighar, Kathmandu",
        "lat": 27.6975,
        "lng": 85.3268,
        "openingTime": "08:00 AM",
        "closingTime": "10:00 PM",
        "specialities": ["Momo", "Burgers", "Sandwiches"],
        "theme": "Casual Dining with a Social Cause",
        "country" : "Nepal"
    }
];

    
const RestaurantMap = () => {
    const [selectedCafes, setSelectedCafes] = useState(null);
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null; // Prevents rendering on SSR
  
    return (
      <div style={{ display: "flex" }}>
        {/* Map Section */}
        <div style={{ width: "70%", height: "90vh" }}>
        <MapContainer center={[28.3949, 84.1240]} zoom={8} style={{ height: "90vh", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {cafesAndRestaurants.map((cafe, index) => (
              <Marker
                key={index}
                position={[cafe.lat, cafe.lng]}
                icon={customIcon}
                eventHandlers={{
                  click: () => setSelectedCafes(cafe), // Update state on click
                }}
              >
                <Popup>
                  <strong>{cafe.name}</strong>
                  <br />
                  {cafe.location}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
  
        {/* Side Container for Selected Cafe Details */}
        {selectedCafes ? (
        <div className="p-5 mx-4 bg-light border">
          {/* Cafe Name, Rating, Location */}
          <h2 className="text-xl font-semibold text-gray-900">{selectedCafes.name}</h2>
          <p className="text-gray-600">{selectedCafes.cuisine} • {selectedCafes.location}</p>
          <p className="text-gray-500">⭐ {selectedCafes.reviews} reviews • {selectedCafes.priceRange}</p>
          <p className="text-sm text-gray-600">📅 Booked {selectedCafes.bookingsToday} times today</p>

          {/* Directions Button */}
          <button className="mt-4 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
            <a href="">📍 Directions</a> 
          </button>

          {/* Select a Time */}
          <h3 className="mt-5 text-lg font-semibold">Select a time</h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <span>
            {selectedCafes.openingTime} | {selectedCafes.closingTime}  
            </span>
          </div>

          {/* Open Restaurant Profile Button */}
          <button className="mt-5 w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
            Open restaurant profile
          </button>

          {/* Popular Menu Items Section */}
          <h3 className="mt-5 text-lg font-semibold">Popular menu items</h3>
          {selectedCafes.specialities}
       
        </div>
      ) : (
        <div className="p-6 w-1/3 text-center bg-gray-100">
          <p>No cafe selected. Click on a marker to view details.</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantMap;