import React from 'react';
import { PageId } from '../types';
import { Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950/60 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-600/30 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
                S
              </div>
              <span className="font-bold text-white tracking-tight">Subhan's Web Development Portfolio</span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Created for the high school web development coursework curriculum. Designed for modular development across coursework phases.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-wider font-mono">
              Portfolio Navigation
            </h4>
            <div className="flex flex-col space-y-1.5 text-xs text-neutral-400">
              <button onClick={() => onNavigate('home')} className="hover:text-blue-400 text-left transition-colors">Phase 1: Home</button>
              <button onClick={() => onNavigate('media')} className="hover:text-blue-400 text-left transition-colors">Phase 2: Media</button>
              <button onClick={() => onNavigate('hobbies')} className="hover:text-blue-400 text-left transition-colors">Phase 3: Hobbies</button>
              <button onClick={() => onNavigate('traveling')} className="hover:text-blue-400 text-left transition-colors">Phase 4: Traveling</button>
              <button onClick={() => onNavigate('future')} className="hover:text-blue-400 text-left transition-colors">Phase 7: Future</button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Subhan · High School Web Development Project</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-blue-400 fill-blue-400 inline mx-0.5" /> on Replit
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
