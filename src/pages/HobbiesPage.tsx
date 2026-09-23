import React from 'react';
import { PageId } from '../types';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { Heart, Code, Gamepad2, Dumbbell, Music, ArrowRight, Trophy, ExternalLink, Play } from 'lucide-react';

interface HobbiesPageProps {
  onNavigate: (page: PageId) => void;
}

interface HobbyItem {
  title: string;
  icon: React.ElementType;
  color: string;
  badgeBg: string;
  description: string;
  tag: string;
  image?: string;
  imageAlt?: string;
  imageLabel?: string;
  badgeText?: string;
  reelUrl?: string;
  isReel?: boolean;
}

export const HobbiesPage: React.FC<HobbiesPageProps> = ({ onNavigate }) => {
  const hobbies: HobbyItem[] = [
    {
      title: 'Volleyball & Athletics',
      icon: Trophy,
      color: 'text-amber-400',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      description: 'Competitive and recreational volleyball—developing quick agility, court awareness, jump mechanics, and dependable team communication.',
      tag: 'Sports & Athletics',
      image: '/images/volleyball.webp',
      imageAlt: 'Volleyball match spike action',
      imageLabel: 'Volleyball Action',
      badgeText: 'Sport'
    },
    {
      title: 'Mobile Gaming & Esports (PUBG)',
      icon: Gamepad2,
      color: 'text-violet-400',
      badgeBg: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
      description: 'Competitive tactical mobile gaming (PUBG Mobile)—focusing on recoil control, strategic rotation, squad coordination, and consistent gameplay highlights.',
      tag: 'Gaming & Reels',
      image: '/images/pubgm-reel-thumb.jpg',
      imageAlt: 'PUBG Mobile Gameplay Reel: Consistency',
      imageLabel: 'Instagram Reel: Consistency',
      badgeText: 'PUBG Mobile',
      reelUrl: 'https://www.instagram.com/reel/DblxbWghsYm/',
      isReel: true
    },
    {
      title: 'Web & Software Development',
      icon: Code,
      color: 'text-blue-400',
      badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      description: 'Experimenting with modern front-end frameworks, responsive CSS grids, and server-side script logic.',
      tag: 'Tech & Coding'
    },
    {
      title: 'Fitness & Conditioning',
      icon: Dumbbell,
      color: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      description: 'Staying active with daily strength workouts, outdoor running, and mobility training to keep energy and mental focus sharp.',
      tag: 'Health'
    },
    {
      title: 'Music & Audio Production',
      icon: Music,
      color: 'text-rose-400',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      description: 'Listening to diverse music genres and exploring beats, audio mixing, and digital instruments.',
      tag: 'Creative'
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-3">
          <Heart className="w-3.5 h-3.5" />
          Phase 3 Showcase
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Hobbies & Personal Interests
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
          What keeps me inspired outside the classroom—from competitive volleyball and PUBG mobile gaming reels to programming, fitness, and creative audio.
        </p>
      </div>

      {/* Grid of Hobbies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((hobby, idx) => {
          const Icon = hobby.icon;
          return (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${hobby.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">{hobby.title}</h3>
                      <span className="text-[11px] font-mono text-neutral-400">{hobby.tag}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${hobby.badgeBg}`}>
                    {hobby.tag}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              <div className="pt-2">
                {hobby.image ? (
                  <div className="space-y-2">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group/img shadow-md">
                      <img
                        src={hobby.image}
                        alt={hobby.imageAlt || hobby.title}
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Play overlay button if it's a video reel */}
                      {hobby.isReel && hobby.reelUrl && (
                        <a
                          href={hobby.reelUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black/35 hover:bg-black/20 transition-colors group/play"
                          aria-label="Watch on Instagram"
                        >
                          <div className="w-12 h-12 rounded-full bg-violet-600/90 text-white flex items-center justify-center shadow-lg transform group-hover/play:scale-110 transition-transform border border-violet-400/40">
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          </div>
                        </a>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white pointer-events-none">
                        <span className="bg-neutral-950/80 px-2 py-0.5 rounded border border-neutral-800 backdrop-blur-sm">
                          {hobby.imageLabel || 'Media Highlight'}
                        </span>
                        <span className="text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60 backdrop-blur-sm font-semibold">
                          {hobby.badgeText || 'Featured'}
                        </span>
                      </div>
                    </div>

                    {hobby.reelUrl && (
                      <a
                        href={hobby.reelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors pt-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Watch reel on Instagram (@fear_pubgmo)</span>
                      </a>
                    )}
                  </div>
                ) : (
                  <PlaceholderMedia 
                    label={`${hobby.title} Photo`} 
                    aspectRatio="video" 
                    dimensions="16:9 Aspect Ratio"
                    hint="Upload a personal photo of your hobby or interest"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Footer Callout */}
      <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-base">Next up: Exploring the world</h4>
          <p className="text-xs text-neutral-400 mt-1">
            Check out Phase 4 to see travel experiences and dream destinations.
          </p>
        </div>
        <button
          onClick={() => onNavigate('traveling')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shrink-0"
        >
          <span>Continue to Phase 4: Traveling</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
