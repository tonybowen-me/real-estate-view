'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PropertyServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to listings
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-6">
          Property Service Page
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
          <p className="text-lg text-gray-700">
            Property: <span className="font-semibold">{slug}</span>
          </p>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            This is a placeholder service page for the selected property.
            Both clicking a property in the list view and clicking its pin
            on the map will navigate here.
          </p>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="font-semibold mb-2">Next Steps:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Add property details fetching based on slug</li>
              <li>Display property images</li>
              <li>Show detailed property information</li>
              <li>Add contact forms or scheduling features</li>
              <li>Include neighborhood information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
