import React from 'react';
import { PageId } from '../types';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { Heart, Code, Gamepad2, Dumbbell, Music, ArrowRight } from 'lucide-react';

interface HobbiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const HobbiesPage: React.FC<HobbiesPageProps> = ({ onNavigate }) => {
  const hobbies = [
    {
      title: 'Web & Software Development',
      icon: Code,
      color: 'text-blue-400',
      description: 'Experimenting with modern front-end frameworks, responsive CSS grids, and server-side script logic.',
      tag: 'Tech & Coding'
    },
    {
      title: 'Gaming & Strategy',
      icon: Gamepad2,
      color: 'text-violet-400',
      description: 'Competitive and cooperative games that challenge problem solving, teamwork, and quick decision making.',
      tag: 'Recreation'
    },
    {
      title: 'Fitness & Sports',
      icon: Dumbbell,
      color: 'text-emerald-400',
      description: 'Staying active with daily workouts, outdoor running, and team athletic activities to keep the mind sharp.',
      tag: 'Health'
    },
    {
      title: 'Music & Audio Production',
      icon: Music,
      color: 'text-amber-400',
      description: 'Listening to diverse music genres and exploring beats, audio mixing, and digital instruments.',
      tag: 'Creative'
    }
  ];

  return (
    <div className="space-y-12 pb-12">
      <div className="border-b border-neutral-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono mb-3">
          <Heart className="w-3.5 h-3.5" />
          Phase 3 Showcase
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Hobbies & Personal Interests
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
          What keeps me inspired outside the classroom—from coding side-projects and athletics to gaming and creative pursuits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((hobby, idx) => {
          const Icon = hobby.icon;
          return (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4 hover:border-neutral-700 transition-colors"
            >
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
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                {hobby.description}
              </p>

              <PlaceholderMedia 
                label={`${hobby.title} Photo`} 
                aspectRatio="video" 
                dimensions="16:9 Aspect Ratio"
                hint="Upload a personal photo of your hobby or interest"
              />
            </div>
          );
        })}
      </div>

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
