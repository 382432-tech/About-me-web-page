import React, { useState } from 'react';
import { PageId } from '../types';
import { Plane, MapPin, ArrowRight, Globe, Sparkles, Heart, Eye, X, Calendar, Mountain, Camera, Check } from 'lucide-react';

interface TravelingPageProps {
  onNavigate: (page: PageId) => void;
}

interface Destination {
  id: string;
  country: string;
  flag: string;
  city: string;
  region: 'Asia' | 'Europe' | 'North America' | 'Middle East';
  status: string;
  badgeColor: string;
  image: string;
  description: string;
  highlights: string[];
  bestSeason: string;
  topLandmark: string;
}

export const TravelingPage: React.FC<TravelingPageProps> = ({ onNavigate }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({
    japan: true,
    switzerland: true,
  });

  const destinations: Destination[] = [
    {
      id: 'japan',
      country: 'Japan',
      flag: '🇯🇵',
      city: 'Tokyo, Kyoto & Mt. Fuji',
      region: 'Asia',
      status: '#1 Dream Destination',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      image: '/images/travel/japan.jpg',
      description: 'The ultimate blend of ancient tradition and futuristic innovation. From high-speed Shinkansen bullet trains and Akihabara tech culture to peaceful bamboo groves and iconic Mt. Fuji panoramas.',
      highlights: ['Shinjuku & Shibuya', 'Mt. Fuji & Pagodas', 'Bullet Trains', 'Ramen & Street Food'],
      bestSeason: 'Spring (Cherry Blossoms) or Autumn',
      topLandmark: 'Mount Fuji & Chureito Pagoda',
    },
    {
      id: 'switzerland',
      country: 'Switzerland',
      flag: '🇨🇭',
      city: 'Swiss Alps & Zermatt',
      region: 'Europe',
      status: 'Alpine Adventure',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      image: '/images/travel/switzerland.jpg',
      description: 'Breathtaking towering peaks, crystal-clear glacial lakes, and world-class mountain railways winding through idyllic alpine valleys and chalets.',
      highlights: ['The Matterhorn', 'Glacier Express', 'Alpine Hiking', 'Lake Geneva & Lucerne'],
      bestSeason: 'Summer (Hiking) / Winter (Snow sports)',
      topLandmark: 'The Matterhorn & Zermatt',
    },
    {
      id: 'usa',
      country: 'United States',
      flag: '🇺🇸',
      city: 'New York City & Coastlines',
      region: 'North America',
      status: 'Metropolitan Exploration',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      image: '/images/travel/usa.jpg',
      description: 'The vibrant electric energy of the world’s most iconic metropolis. Sky-scraping architecture, diverse global food districts, Central Park, and tech hubs.',
      highlights: ['Manhattan Skyline', 'Brooklyn Bridge', 'Central Park', 'Broadway & Tech Hubs'],
      bestSeason: 'Autumn (October - November)',
      topLandmark: 'Empire State & Manhattan Skyline',
    },
    {
      id: 'italy',
      country: 'Italy',
      flag: '🇮🇹',
      city: 'Rome, Venice & Amalfi',
      region: 'Europe',
      status: 'Historic & Culinary',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      image: '/images/travel/italy.jpg',
      description: 'Centuries of legendary human history, Roman architecture, stunning Mediterranean seaside cliffs, and world-renowned gastronomy.',
      highlights: ['The Colosseum', 'Venice Canals', 'Amalfi Coast', 'Authentic Pizza & Gelato'],
      bestSeason: 'Spring (May) or Autumn (September)',
      topLandmark: 'Roman Colosseum & Forum',
    },
    {
      id: 'france',
      country: 'France',
      flag: '🇫🇷',
      city: 'Paris & French Riviera',
      region: 'Europe',
      status: 'Art & Architecture',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      image: '/images/travel/france.jpg',
      description: 'Iconic world landmarks, riverside promenades along the Seine, timeless cafe culture, and celebrated art museums that inspire creativity.',
      highlights: ['Eiffel Tower', 'The Louvre', 'Montmartre', 'Champs-Élysées'],
      bestSeason: 'Spring (April - June)',
      topLandmark: 'Eiffel Tower',
    },
    {
      id: 'iceland',
      country: 'Iceland',
      flag: '🇮🇸',
      city: 'Reykjavík & Southern Ring Road',
      region: 'Europe',
      status: 'Glacial & Aurora Wonders',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      image: '/images/travel/iceland.jpg',
      description: 'A surreal landscape of raw nature: thundering waterfalls, volcanic black sand beaches, geothermal hot springs, and dancing Northern Lights.',
      highlights: ['Aurora Borealis', 'Skógafoss Waterfall', 'Black Sand Beach', 'Blue Lagoon'],
      bestSeason: 'Winter for Auroras / Summer for Midnight Sun',
      topLandmark: 'Skógafoss & Gullfoss Waterfalls',
    },
    {
      id: 'uae',
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      city: 'Dubai & Abu Dhabi',
      region: 'Middle East',
      status: 'Modern Wonder & Desert Oasis',
      badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      image: '/images/travel/uae.jpg',
      description: 'Daring futuristic skylines rising from the desert sands, record-breaking architectural marvels, modern luxury, and desert safari adventures.',
      highlights: ['Burj Khalifa', 'Palm Jumeirah', 'Desert Safaris', 'Museum of the Future'],
      bestSeason: 'Winter (November - March)',
      topLandmark: 'Burj Khalifa',
    },
    {
      id: 'canada',
      country: 'Canada',
      flag: '🇨🇦',
      city: 'Banff National Park & Vancouver',
      region: 'North America',
      status: 'Wilderness & Rocky Mountains',
      badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
      image: '/images/travel/canada.jpg',
      description: 'Vibrant turquoise glacial lakes surrounded by the majestic Canadian Rockies, pristine pine forests, and welcoming multicultural cities.',
      highlights: ['Lake Louise', 'Banff Rockies', 'Canoeing & Trails', 'Vancouver Waterfront'],
      bestSeason: 'Summer (July - August)',
      topLandmark: 'Lake Louise & Moraine Lake',
    },
  ];

  const regions = ['All', 'Asia', 'Europe', 'North America', 'Middle East'];

  const filteredDestinations = selectedRegion === 'All'
    ? destinations
    : destinations.filter(d => d.region === selectedRegion);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header section */}
      <div className="border-b border-neutral-800 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Plane className="w-3.5 h-3.5" />
            Phase 4 Showcase
          </div>
          <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-emerald-400" />
            {destinations.length} Countries Featured
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Traveling & Global Explorations
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
          A visual collection of dream destinations, scenic country landscapes, and cultural journeys around the globe.
        </p>

        {/* Region filter tabs */}
        <div className="flex flex-wrap gap-2 mt-6">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedRegion === region
                  ? 'bg-emerald-500 text-neutral-950 font-semibold shadow-lg shadow-emerald-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {region} {region === 'All' ? `(${destinations.length})` : `(${destinations.filter(d => d.region === region).length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of country destinations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((dest) => {
          const isFav = !!favorites[dest.id];
          return (
            <div
              key={dest.id}
              onClick={() => setActiveModalDest(dest)}
              className="group cursor-pointer rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/50 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={dest.image}
                  alt={`${dest.country} - ${dest.city}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-black/30 pointer-events-none" />

                {/* Country and Status tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto">
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border backdrop-blur-md ${dest.badgeColor}`}>
                    {dest.status}
                  </span>
                  
                  <button
                    onClick={(e) => toggleFavorite(dest.id, e)}
                    title={isFav ? 'Remove from wishlist' : 'Add to wishlist'}
                    className={`p-2 rounded-full backdrop-blur-md border transition-all ${
                      isFav 
                        ? 'bg-rose-500/80 border-rose-400 text-white' 
                        : 'bg-neutral-900/70 border-white/20 text-neutral-300 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Country Name overlay bottom */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-300 font-mono">
                      <span>{dest.flag}</span>
                      <span>{dest.country}</span>
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide mt-0.5">
                      {dest.city}
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 bg-black/60 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1 shrink-0">
                    <Eye className="w-3 h-3" />
                    View
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                  {dest.description}
                </p>

                {/* Highlights tags */}
                <div className="space-y-2 pt-1 border-t border-neutral-900">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
                    <Mountain className="w-3 h-3 text-emerald-400" />
                    <span>Top Spot: <strong className="text-neutral-200 font-normal">{dest.topLandmark}</strong></span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {dest.highlights.slice(0, 3).map((hl, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal / Lightbox */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl space-y-0">
            {/* Modal Image Header */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.country}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/60" />

              <button
                onClick={() => setActiveModalDest(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                    <span>{activeModalDest.flag}</span>
                    <span>{activeModalDest.country}</span>
                    <span>•</span>
                    <span>{activeModalDest.region}</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">
                    {activeModalDest.city}
                  </h2>
                </div>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border backdrop-blur-md ${activeModalDest.badgeColor}`}>
                  {activeModalDest.status}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-5">
              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeModalDest.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-emerald-400" />
                    Iconic Landmark
                  </span>
                  <p className="text-xs font-semibold text-white">{activeModalDest.topLandmark}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    Optimal Season
                  </span>
                  <p className="text-xs font-semibold text-white">{activeModalDest.bestSeason}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">Key Highlights</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalDest.highlights.map((hl, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-200 px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-900">
                <button
                  onClick={(e) => toggleFavorite(activeModalDest.id, e)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border transition-colors ${
                    favorites[activeModalDest.id]
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:text-white'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${favorites[activeModalDest.id] ? 'fill-current' : ''}`} />
                  <span>{favorites[activeModalDest.id] ? 'Saved to Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <button
                  onClick={() => setActiveModalDest(null)}
                  className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Next Phase Navigator Banner */}
      <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-base">Look ahead to the future</h4>
          <p className="text-xs text-neutral-400 mt-1">
            Check out Phase 7 to explore university goals and software aspirations.
          </p>
        </div>
        <button
          onClick={() => onNavigate('future')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shrink-0 shadow-lg shadow-blue-600/20"
        >
          <span>Continue to Phase 7: Future</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
