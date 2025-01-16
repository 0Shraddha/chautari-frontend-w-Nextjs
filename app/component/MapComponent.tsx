import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Sample marker data
const markers = [
  {
    id: 1,
    position: [27.7172, 85.3240],
    name: 'Fusion Himalaya Café & Restaurant',
    description: 'A cozy place for traditional and fusion Himalayan dishes.',
  },
  {
    id: 2,
    position: [27.6726, 85.3188],
    name: 'Another Restaurant in Patan',
    description: 'Delicious local Newari cuisine in Patan.',
  },
  {
    id: 3,
    position: [27.7215, 85.3495],
    name: 'Restaurant in Boudha',
    description: 'Great ambiance with Tibetan food specialties.',
  },
];

const MapComponent = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);  // Track selected marker

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left Sidebar */}
      <aside style={{
        width: '30%',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #ddd',
        overflowY: 'auto',
      }}>
        <h2>Restaurant Details</h2>
        {selectedMarker ? (
          <div>
            <h3>{selectedMarker.name}</h3>
            <p>{selectedMarker.description}</p>
          </div>
        ) : (
          <p>Click on a marker to view details.</p>
        )}
      </aside>

      {/* Map Section */}
      <div style={{ width: '70%', height: '100%' }}>
        <MapContainer center={[27.7172, 85.3240]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {markers.map(marker => (
            <Marker
              key={marker.id}
              position={marker.position}
              eventHandlers={{
                click: () => {
                  setSelectedMarker(marker);  // Set the clicked marker as selected
                },
              }}
            >
              <Popup>{marker.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
