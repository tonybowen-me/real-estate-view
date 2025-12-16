'use client';

import { Property } from '../types';

interface PropertyListProps {
  properties: Property[];
  selectedPropertyId: string | null;
  onPropertyClick: (property: Property) => void;
}

export default function PropertyList({
  properties,
  selectedPropertyId,
  onPropertyClick
}: PropertyListProps) {
  return (
    <div className="h-screen overflow-y-auto bg-white">
      <div className="p-4 border-b sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold text-gray-900">
          {properties.length} Properties
        </h1>
      </div>
      <div className="divide-y">
        {properties.map((property) => (
          <div
            key={property.id}
            onClick={() => onPropertyClick(property)}
            className={`p-6 cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedPropertyId === property.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold text-gray-900">
                ${property.price.toLocaleString()}
              </h2>
              <span className="text-sm text-gray-500">
                {property.beds} bd | {property.baths} ba | {property.sqft.toLocaleString()} sqft
              </span>
            </div>
            <p className="text-gray-700 font-medium">{property.address}</p>
            <p className="text-gray-600 text-sm">
              {property.city}, {property.state} {property.zipCode}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
