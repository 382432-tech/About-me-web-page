import React from 'react';
import { Sparkles, Video, Layers, ExternalLink, HelpCircle } from 'lucide-react';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';

export const ChoicePage: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Page 4 • Student Choice Topic / Showcase</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Choice Topic Showcase
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          This is your student-choice page for your favorite subject, coding project, hobby, or special topic. All content uses standard placeholder templates.
        </p>
      </div>

      {/* Choice Topic Banner / Feature Area */}
      <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono text-blue-400 font-semibold">
              [Placeholder: Choice Page Title]
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Featured Topic: Lorem Ipsum Dolor Sit Amet
            </h2>
          </div>
          <div className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            Selected by Subhan
          </div>
        </div>

        {/* Feature Media: Video or Interactive demo placeholder */}
        <div className="space-y-2">
          <PlaceholderMedia
            label="Featured Topic Media / Video Showcase"
            type="video"
            aspectRatio="video"
            dimensions="16:9 HD Player"
            hint="Embed your choice-page video, animation, or screenshot"
          />
          <span className="text-xs font-mono text-neutral-500 block text-center">
            [Placeholder: Choice Page Video / Interactive Canvas]
          </span>
        </div>

        {/* Description & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-sm text-neutral-400 leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">
              Why I Chose This Topic
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white">
              Key Highlights & Explorations
            </h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Topic Tag 1', 'Technology', 'Research', 'Creative'].map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-blue-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Supporting Media & Sub-topics Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            Topic Gallery & Supporting Modules
          </h3>
          <span className="text-xs font-mono text-neutral-400">
            [Placeholder: Choice Media Gallery]
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <PlaceholderMedia
              label="Choice Page Artifact #1"
              type="image"
              aspectRatio="video"
              dimensions="16:9 Image"
              hint="Upload project diagram or topic photo"
            />
            <h4 className="text-sm font-semibold text-white">[Placeholder: Gallery Item 1]</h4>
            <p className="text-xs text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <PlaceholderMedia
              label="Choice Page Artifact #2"
              type="image"
              aspectRatio="video"
              dimensions="16:9 Image"
              hint="Upload project diagram or topic photo"
            />
            <h4 className="text-sm font-semibold text-white">[Placeholder: Gallery Item 2]</h4>
            <p className="text-xs text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <PlaceholderMedia
              label="Choice Page Artifact #3"
              type="file"
              aspectRatio="video"
              dimensions="Documentation / Slide Deck"
              hint="Attach notes, references, or PDF"
            />
            <h4 className="text-sm font-semibold text-white">[Placeholder: Resource Item 3]</h4>
            <p className="text-xs text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Instructions Note */}
      <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-neutral-300 leading-relaxed">
          <span className="font-semibold text-white block">Customization Note for Subhan:</span>
          <p>
            Your teacher or assignment guidelines may specify what goes on this Choice Page (for instance: a favorite tech topic, video game development, sports hobby, or a science interest). You can edit <code className="text-blue-300">src/pages/ChoicePage.tsx</code> to align with your chosen topic!
          </p>
        </div>
      </div>
    </div>
  );
};
