import React from 'react';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { User, GraduationCap, Heart, Link as LinkIcon, BookOpen } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
          <User className="w-3.5 h-3.5" />
          <span>Page 2 • Profile & Background</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Subhan
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Personal profile and background template. Replace the placeholder sections below with your personal writing, school information, and hobbies.
        </p>
      </div>

      {/* Main Grid: Bio & Media */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Biography & Background */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Section: Biography */}
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Personal Biography</span>
              </div>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                [Placeholder: Personal Biography]
              </span>
            </div>

            <div className="space-y-3 text-sm text-neutral-400 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
              </p>
              <p>
                Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
              </p>
              <p>
                Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
              </p>
            </div>
          </div>

          {/* Section: Education & School */}
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Education & Web Development Class</span>
              </div>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                [Placeholder: Education & School]
              </span>
            </div>

            <div className="space-y-3 text-sm text-neutral-400 leading-relaxed">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-blue-400 font-mono block mb-1">[Placeholder: High School]</span>
                  <span className="text-sm font-semibold text-white">Lorem Ipsum High School</span>
                  <span className="text-xs text-neutral-500 block mt-0.5">Grade / Year: [Placeholder: Grade 9-12]</span>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-blue-400 font-mono block mb-1">[Placeholder: Course Title]</span>
                  <span className="text-sm font-semibold text-white">Web Development 101</span>
                  <span className="text-xs text-neutral-500 block mt-0.5">Platform: Replit & Modern Web Tools</span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 pt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo id risus ullamcorper sodales. Fusce viverra semper libero, eget accumsan sem efficitur ac.
              </p>
            </div>
          </div>

          {/* Section: Interests & Activities */}
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Heart className="w-4 h-4 text-blue-400" />
                <span>Interests & Extracurriculars</span>
              </div>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                [Placeholder: Personal Interests]
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['Interest #1', 'Interest #2', 'Interest #3'].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
                  <span className="text-xs font-mono text-blue-400 block mb-1">[{item}]</span>
                  <span className="text-xs text-neutral-300">Lorem Ipsum Dolor</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Social & External Links */}
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <LinkIcon className="w-4 h-4 text-blue-400" />
                <span>Links & Social Profiles</span>
              </div>
              <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                [Placeholder: Social Links]
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Replit Profile', 'GitHub (Optional)', 'School Portal', 'Personal Blog'].map((linkName, i) => (
                <div 
                  key={i} 
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>[Placeholder: {linkName}]</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Media Placeholders */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
            <h3 className="text-sm font-bold text-white">
              Personal Media Gallery
            </h3>
            
            <PlaceholderMedia 
              label="Subhan's Profile Photo" 
              type="image"
              aspectRatio="square"
              dimensions="1:1 Square Ratio"
              hint="Replace with your preferred profile image"
            />

            <PlaceholderMedia 
              label="Introductory Video / Workspace Tour" 
              type="video"
              aspectRatio="video"
              dimensions="16:9 Video Embed"
              hint="Embed YouTube or MP4 video"
            />
          </div>

          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2">
            <span className="text-xs font-mono text-blue-400 font-semibold block">
              Instructions for Subhan:
            </span>
            <p className="text-xs text-neutral-300 leading-relaxed">
              When ready to update this page, simply edit <code className="text-blue-300">src/pages/AboutPage.tsx</code> to replace the Lorem Ipsum sentences and add your real hobbies, school name, and photos!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
