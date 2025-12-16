'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PropertyList from './components/PropertyList';
import PropertyMap from './components/PropertyMap';
import { sampleProperties } from './data/properties';
import { Property } from './types';

export default function Home() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);
  const router = useRouter();

  const handlePropertyClick = (property: Property) => {
    setSelectedPropertyId(property.id);
    router.push(property.servicePageUrl);
  };

  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  return (
    <div className="flex h-screen">
      <div className="w-1/2 border-r">
        <PropertyList
          properties={sampleProperties}
          selectedPropertyId={selectedPropertyId}
          onPropertyClick={handlePropertyClick}
        />
      </div>
      <div className="w-1/2">
        <PropertyMap
          properties={sampleProperties}
          selectedPropertyId={selectedPropertyId}
          onPropertyClick={handlePropertyClick}
          apiKey={GOOGLE_MAPS_API_KEY}
        />
      </div>
    </div>
  );
}
