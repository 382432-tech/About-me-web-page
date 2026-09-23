import React from 'react';
import { PageId } from '../types';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { Image as ImageIcon, Video, Palette, ArrowRight, Play, ExternalLink, Sparkles } from 'lucide-react';

interface MediaPageProps {
  onNavigate: (page: PageId) => void;
}

export const MediaPage: React.FC<MediaPageProps> = ({ onNavigate }) => {
  const reelUrl = "https://www.instagram.com/reel/DblxbWghsYm/?utm_source=ig_web_button_share_sheet";

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
          Visual creations, coursework presentations, digital gameplay reels, and multimedia assets prepared for Phase 2.
        </p>
      </div>

      {/* Featured Video Reel Banner */}
      <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
              <Play className="w-5 h-5 fill-violet-400 ml-0.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-lg">Featured Video Highlight</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  Instagram Reel
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                PUBG Mobile gameplay clip: “Consistency 🙌” via @fear_pubgmo
              </p>
            </div>
          </div>

          <a
            href={reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors self-start sm:self-auto"
          >
            <span>Open on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Reel Video Player Card */}
          <div className="md:col-span-6 lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl group">
              <img
                src="/images/pubgm-reel-thumb.jpg"
                alt="Instagram Reel: Consistency"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Play Button Overlay */}
              <a
                href={reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/25 transition-colors group/play"
                aria-label="Play Reel on Instagram"
              >
                <div className="w-14 h-14 rounded-full bg-violet-600/90 text-white flex items-center justify-center shadow-xl transform group-hover/play:scale-110 transition-transform border border-violet-400/50">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
                <span className="mt-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono text-white border border-neutral-700">
                  Tap to Watch Video
                </span>
              </a>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white pointer-events-none">
                <span className="bg-neutral-950/80 px-2 py-0.5 rounded border border-neutral-800 backdrop-blur-sm">
                  @fear_pubgmo
                </span>
                <span className="text-violet-300 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-800/60 backdrop-blur-sm font-semibold">
                  PUBG Mobile
                </span>
              </div>
            </div>
          </div>

          {/* Details & Commentary */}
          <div className="md:col-span-6 lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Digital Media Highlight</span>
            </div>
            
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Tactical Gameplay Reel & Video Editing
            </h4>

            <p className="text-neutral-300 text-sm leading-relaxed">
              This short-form video demonstration captures fast-paced tactical reflexes, precision spray control, and target acquisition in PUBG Mobile. Producing and posting clips is part of my digital content creation practice—learning pacing, music synchronization, and video presentation.
            </p>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Video Details</span>
              <ul className="text-xs space-y-1.5 text-neutral-300 font-mono">
                <li>• <strong className="text-white">Platform:</strong> Instagram Reels</li>
                <li>• <strong className="text-white">Creator Account:</strong> @fear_pubgmo</li>
                <li>• <strong className="text-white">Theme:</strong> Consistency 🙌 #pubgmobile #mobilegaming</li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href={reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs transition-all shadow-lg shadow-violet-600/20 active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch Reel on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Coursework Video Presentation */}
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
