import React from 'react';
import { PageId } from '../types';
import { Database, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-400 text-xs mt-auto py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Student branding & description */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                S
              </div>
              <span className="font-bold text-white text-sm">
                Subhan's Web Dev Portfolio
              </span>
            </div>
            <p className="text-neutral-500 text-xs leading-relaxed max-w-sm">
              Built as part of High School Web Development. Featuring client-side page routing, server-side Express architecture, and persistent JSON database storage.
            </p>
          </div>

          {/* Col 2: Navigation links */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-semibold text-neutral-200 text-xs font-mono uppercase tracking-wider block">
              Page Directory
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button 
                onClick={() => onNavigate('home')} 
                className="text-left hover:text-blue-400 transition-colors"
              >
                1. Home
              </button>
              <button 
                onClick={() => onNavigate('media')} 
                className="text-left hover:text-blue-400 transition-colors"
              >
                2. Media
              </button>
              <button 
                onClick={() => onNavigate('future')} 
                className="text-left hover:text-blue-400 transition-colors"
              >
                3. Future
              </button>
              <button 
                onClick={() => onNavigate('hobbies')} 
                className="text-left hover:text-blue-400 transition-colors"
              >
                4. Hobbies
              </button>
              <button 
                onClick={() => onNavigate('traveling')} 
                className="text-left hover:text-blue-400 transition-colors"
              >
                5. Traveling
              </button>
              <button 
                onClick={() => onNavigate('admin')} 
                className="text-left text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-1"
              >
                <span>6. Admin</span>
                <ShieldCheck className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Col 3: Storage & Tech Stack */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-semibold text-neutral-200 text-xs font-mono uppercase tracking-wider block">
              Technology Stack
            </span>
            <div className="space-y-1 text-[11px] font-mono text-neutral-500">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <Database className="w-3.5 h-3.5 text-blue-400" />
                <span>JSON Persistence</span>
              </div>
              <div>Frontend: React & Tailwind CSS</div>
              <div>Backend: Node.js & Express API</div>
              <div>Theme: Black & Blue Accent</div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} Subhan • All project requirements implemented
          </div>
          <div className="flex items-center gap-2">
            <span>Primary: Black</span>
            <span>•</span>
            <span className="text-blue-400">Secondary: Blue</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
