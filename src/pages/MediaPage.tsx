import React from 'react';
import { PageId } from '../types';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { Image as ImageIcon, Video, Palette, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface MediaPageProps {
  onNavigate: (page: PageId) => void;
}

export const MediaPage: React.FC<MediaPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
          <ImageIcon className="w-3.5 h-3.5" />
          Phase 2 Showcase
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Media Gallery & Demonstrations
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
          Visual creations, coursework presentations, design graphics, and multimedia assets prepared for Phase 2.
        </p>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project Video Showcase */}
        <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold text-white text-lg">Coursework Video Presentation</h3>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              16:9 Video
            </span>
          </div>
          
          <PlaceholderMedia 
            label="Course Demo Video" 
            aspectRatio="video" 
            dimensions="16:9 Standard HD"
            hint="Supports embedded YouTube, Vimeo, or HTML5 MP4 video files"
          />

          <p className="text-xs text-neutral-400 leading-relaxed">
            Record a short walkthrough of your portfolio code or introduce yourself to the class in a personal video intro.
          </p>
        </div>

        {/* Graphic Design / Creative Asset */}
        <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-rose-400" />
              <h3 className="font-bold text-white text-lg">Digital Graphic & UI Mockup</h3>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
              High Resolution
            </span>
          </div>

          <PlaceholderMedia 
            label="Digital Design Asset" 
            aspectRatio="video" 
            dimensions="1920 x 1080 Image"
            hint="Showcase a graphic design, Figma mockup, or vector illustration"
          />

          <p className="text-xs text-neutral-400 leading-relaxed">
            Display your visual work, photo edits, digital artwork, or web wireframes designed during class projects.
          </p>
        </div>

      </div>

      {/* Next Phase Callout */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-base">Ready for the next unit?</h4>
          <p className="text-xs text-neutral-400 mt-1">
            Proceed to Phase 3 to explore hobbies, coding interests, and extracurriculars.
          </p>
        </div>
        <button
          onClick={() => onNavigate('hobbies')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shrink-0"
        >
          <span>Continue to Phase 3: Hobbies</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
