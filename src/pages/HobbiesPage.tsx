import React from 'react';
import { Heart, Sparkles, HelpCircle } from 'lucide-react';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';

export const HobbiesPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5" />
          <span>Phase 4 • Hobbies & Passions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Hobbies & Personal Interests
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Dedicated showcase for Subhan's favorite extracurricular interests and hobbies. Currently structured with clean placeholders ready for Phase 4.
        </p>
      </div>

      {/* Featured Hobby Showcase Banner */}
      <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono text-blue-400 font-semibold">
              [Placeholder: Primary Hobby Selection]
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Featured Hobby: Lorem Ipsum Passion
            </h2>
          </div>
          <div className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            Selected Hobby
          </div>
        </div>

        <PlaceholderMedia
          label="Featured Hobby Photo / Demonstration"
          type="image"
          aspectRatio="video"
          dimensions="16:9 Landscape"
          hint="Upload photo of your hobby or interest"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-sm text-neutral-400 leading-relaxed">
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">
              About This Hobby
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">
              Why I Enjoy It
            </h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
      </div>

      {/* Sub-hobbies Grid */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-white">
          Other Interests & Activities
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
              <PlaceholderMedia
                label={`Activity #${idx}`}
                type="image"
                aspectRatio="video"
                dimensions="16:9"
                hint="Upload image"
              />
              <span className="text-sm font-semibold text-white block">
                [Placeholder: Hobby #{idx}]
              </span>
              <p className="text-xs text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs text-neutral-300 leading-relaxed">
          <span className="font-semibold text-white block">Phase 4 Preparation:</span>
          <p>
            When we reach Phase 4, we will choose your hobby (such as gaming, coding, music, reading, art, etc.) and add your real stories and photos!
          </p>
        </div>
      </div>
    </div>
  );
};
