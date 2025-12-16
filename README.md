# Trulia/Zillow-like Property View

A Next.js prototype featuring a split-view interface with property listings and an interactive Google Maps display.

## Features

- **Split View Layout**: Property list on the left, Google Maps on the right
- **Interactive List**: Click any property in the list to navigate to its service page
- **Interactive Map**: Click any pin on the map to navigate to the property's service page
- **Synchronized Selection**: Both views highlight the selected property
- **No Images**: Clean, text-only list view as specified

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Google Maps (@vis.gl/react-google-maps)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Google Maps API Key

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Enable the Maps JavaScript API
3. Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

4. Add your API key to `.env.local`:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── components/
│   ├── PropertyList.tsx    # Left side - scrollable property list
│   └── PropertyMap.tsx     # Right side - Google Maps with pins
├── data/
│   └── properties.ts       # Sample property data
├── property/
│   └── [slug]/
│       └── page.tsx        # Dynamic property service page
├── types.ts                # TypeScript interfaces
└── page.tsx                # Main split-view page
```

## How It Works

1. **Main Page** ([app/page.tsx](app/page.tsx)): Renders the split view with both components
2. **Property List** ([app/components/PropertyList.tsx](app/components/PropertyList.tsx)): Displays properties in a scrollable list
3. **Property Map** ([app/components/PropertyMap.tsx](app/components/PropertyMap.tsx)): Shows property locations with pins
4. **Click Handler**: Both components use the same click handler that navigates to the property's service page
5. **Service Page** ([app/property/[slug]/page.tsx](app/property/[slug]/page.tsx)): Displays property details (placeholder for now)

## Customization

### Adding More Properties

Edit [app/data/properties.ts](app/data/properties.ts) to add more properties to the list.

### Changing Map Center

The map automatically centers on the first property in the list. To change this, modify the `center` calculation in [app/components/PropertyMap.tsx](app/components/PropertyMap.tsx:18-20).

### Styling

The project uses Tailwind CSS. Modify the className properties in the components to adjust styling.

## For Your Client Demo

This prototype demonstrates:
- Clean, functional split-view interface
- Seamless navigation from both list and map views
- Professional UI with hover states and selection highlighting
- Scalable architecture ready for real data integration
- TypeScript for type safety and better developer experience

## Next Steps (Based on Client Requirements)

- Connect to real property data API
- Add filtering and search functionality
- Implement user authentication
- Add property comparison features
- Mobile responsive design
- Property image galleries (when/if client decides they want images)
