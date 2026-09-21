import React from 'react';
import { Plane, Compass, MapPin, Globe, HelpCircle, Calendar, Camera } from 'lucide-react';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';

export const TravelingPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
          <Plane className="w-3.5 h-3.5" />
          <span>Phase 5 • Traveling & Destinations</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Traveling & Global Explorations
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Subhan's favorite travel experiences, dream destinations, and cultural adventures. Structured with clean blueprint placeholders ready for Phase 5.
        </p>
      </div>

      {/* Featured Destination Hero */}
      <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono text-blue-400 font-semibold">
              [Placeholder: Featured Destination Choice]
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Featured Trip: City, Country, or Dream Journey
            </h2>
          </div>
          <div className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-xs font-mono text-blue-400 flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            <span>Featured Location</span>
          </div>
        </div>

        <PlaceholderMedia
          label="Travel Landscape / Memorable Destination Photo"
          type="image"
          aspectRatio="video"
          dimensions="16:9 Landscape Photo"
          hint="Upload photo from your trip or dream destination"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-sm text-neutral-400 leading-relaxed">
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">
              Trip Highlights & Experience
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">
              Culture, Cuisine & Memorable Sights
            </h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
      </div>

      {/* Destination Wishlist / Past Journeys Cards */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Globe className="w-4 h-4 text-blue-400" />
          <span>Destinations & Travel Wishlist</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { tag: 'Visited City', title: 'Historic Sight & Landmarks', sub: 'Past Journey' },
            { tag: 'Dream Destination', title: 'Scenic Nature & Coastlines', sub: 'Future Wishlist' },
            { tag: 'Cultural Journey', title: 'Architecture & Exploration', sub: 'Adventure Wishlist' }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <PlaceholderMedia
                label={`Destination #${idx + 1}`}
                type="image"
                aspectRatio="video"
                dimensions="16:9 Photo"
                hint="Upload scenery photo"
              />
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>[{item.tag}]</span>
              </div>
              <div className="text-base font-bold text-white">[Placeholder: {item.title}]</div>
              <p className="text-xs text-neutral-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-neutral-300 leading-relaxed">
          <span className="font-semibold text-white block">Phase 5 Preparation:</span>
          <p>
            When we reach Phase 5, we will confirm your favorite travel stories, destinations, or travel bucket list, and replace these placeholders with your real photos and memories!
          </p>
        </div>
      </div>
    </div>
  );
};
