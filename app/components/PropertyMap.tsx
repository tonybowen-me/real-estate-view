'use client';

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Property } from '../types';

interface PropertyMapProps {
  properties: Property[];
  selectedPropertyId: string | null;
  onPropertyClick: (property: Property) => void;
  apiKey: string;
}

export default function PropertyMap({
  properties,
  selectedPropertyId,
  onPropertyClick,
  apiKey
}: PropertyMapProps) {
  const center = properties.length > 0
    ? { lat: properties[0].lat, lng: properties[0].lng }
    : { lat: 37.7749, lng: -122.4194 };

  return (
    <div className="h-screen w-full">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={center}
          defaultZoom={13}
          mapId="property-map"
          disableDefaultUI={false}
        >
          {properties.map((property) => (
            <AdvancedMarker
              key={property.id}
              position={{ lat: property.lat, lng: property.lng }}
              onClick={() => onPropertyClick(property)}
            >
              <Pin
                background={selectedPropertyId === property.id ? '#2563eb' : '#ef4444'}
                borderColor={selectedPropertyId === property.id ? '#1e40af' : '#dc2626'}
                glyphColor="#ffffff"
              />
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
