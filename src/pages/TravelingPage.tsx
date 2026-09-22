import React from 'react';
import { PageId } from '../types';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { Plane, MapPin, Compass, Globe2, ArrowRight } from 'lucide-react';

interface TravelingPageProps {
  onNavigate: (page: PageId) => void;
}

export const TravelingPage: React.FC<TravelingPageProps> = ({ onNavigate }) => {
  const destinations = [
    {
      city: 'Tokyo, Japan',
      country: 'East Asia',
      status: 'Bucket List Destination',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      description: 'Excited by the harmony of futuristic high-tech robotics, bullet trains, historic shrines, and world-class street food.'
    },
    {
      city: 'New York City, USA',
      country: 'North America',
      status: 'Metropolitan Exploration',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      description: 'The energy of iconic architecture, broadway culture, world-class museums, and diverse global neighborhoods.'
    },
    {
      city: 'Swiss Alps, Switzerland',
      country: 'Europe',
      status: 'Nature & Adventure',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      description: 'Picturesque alpine landscapes, scenic mountain rail routes, and peaceful outdoor hiking trails.'
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      <div className="border-b border-neutral-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
          <Plane className="w-3.5 h-3.5" />
          Phase 4 Showcase
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Traveling & Global Explorations
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
          Favorite memories, dream travel spots, and cultural perspectives from journeys near and far.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map((dest, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${dest.badgeColor}`}>
                  {dest.status}
                </span>
                <span className="text-xs text-neutral-300 flex items-center gap-1 font-mono">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  {dest.country}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">{dest.city}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {dest.description}
              </p>
            </div>

            <div className="pt-2">
              <PlaceholderMedia 
                label={`${dest.city} Photo`} 
                aspectRatio="video" 
                dimensions="16:9 Landscape"
                hint="Add scenic photo or travel memory"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-base">Look ahead to the future</h4>
          <p className="text-xs text-neutral-400 mt-1">
            Check out Phase 7 to explore university goals and software aspirations.
          </p>
        </div>
        <button
          onClick={() => onNavigate('future')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shrink-0"
        >
          <span>Continue to Phase 7: Future</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
