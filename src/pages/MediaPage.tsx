import React from 'react';
import { Image as ImageIcon, Video, Layers, Sparkles, Filter, Info } from 'lucide-react';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';

export const MediaPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Phase 2 • Media Gallery Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Media Gallery
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Visual showcase for photos, project screenshots, and video embeds. All slots are configured with labeled blueprint placeholders ready for Phase 2.
        </p>
      </div>

      {/* Featured Video Embed Slot */}
      <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Video className="w-4 h-4 text-blue-400" />
            <span>Featured Video Presentation</span>
          </div>
          <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
            [Placeholder: Video Embed]
          </span>
        </div>
        <PlaceholderMedia
          label="Coursework / Personal Video Presentation"
          type="video"
          aspectRatio="video"
          dimensions="16:9 High Definition Video"
          hint="Embed YouTube, Vimeo, or upload MP4"
        />
        <div className="p-3 rounded-xl bg-neutral-900 text-xs text-neutral-400 font-mono">
          [Placeholder: Video Caption & Context Description]
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <h2 className="text-xl font-bold text-white">
            Photo & Graphic Gallery
          </h2>
          <span className="text-xs font-mono text-neutral-400">
            6 Grid Placeholders
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
              <PlaceholderMedia
                label={`Media Item #${num}`}
                type="image"
                aspectRatio="square"
                dimensions="1:1 Ratio Photo"
                hint="Upload photo or screenshot"
              />
              <div className="space-y-1">
                <span className="text-xs font-bold text-white block">
                  [Placeholder: Media Title #{num}]
                </span>
                <p className="text-[11px] text-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
