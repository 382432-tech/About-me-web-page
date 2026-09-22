import React from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  Image as ImageIcon, 
  Heart, 
  Plane, 
  Sparkles,
  UploadCloud
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-14 pb-8 overflow-hidden">
        {/* Blue ambient glow behind hero */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Text */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Phase 1: Home Page Complete
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hello, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-300">Subhan</span>.
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 font-medium">
                High School Web Development Student & Future Software Creator
              </p>
            </div>

            {/* Student Biography Section */}
            <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 shadow-xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-neutral-800 pb-2">
                <span>Personal Biography</span>
                <span className="text-blue-400">Student Profile</span>
              </div>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Welcome to my high school web development portfolio. This website is built to track and demonstrate my growth as a programmer and creator. Across this course, I am designing modular, interactive experiences covering media presentations, personal hobbies, travel aspirations, and future tech goals.
              </p>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Explore each phase below to see my coursework progression and project demos.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('media')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 active:scale-95 cursor-pointer"
              >
                <span>Explore Phase 2: Media</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('hobbies')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-medium text-sm transition-all cursor-pointer"
              >
                <span>View Hobbies</span>
              </button>

              <button
                onClick={() => onNavigate('future')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-medium text-sm transition-all cursor-pointer"
              >
                <span>Future Vision</span>
              </button>
            </div>

            {/* Course Information Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                School: <span className="text-neutral-200">High School Coursework</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                Course: <span className="text-neutral-200">Web Development</span>
              </span>
            </div>
          </div>

          {/* Profile Media Frame (Compact & Scaled Down) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-full max-w-[240px] sm:max-w-[260px] p-2.5 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-2.5">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center group">
                <img 
                  src="/images/profile.png" 
                  alt="Subhan's Profile Portrait" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('.png')) {
                      target.src = '/images/profile.jpg';
                    } else if (target.src.endsWith('.jpg')) {
                      target.src = '/images/282905.jpg';
                    } else {
                      target.style.display = 'none';
                      const fallbackEl = document.getElementById('profile-placeholder-box');
                      if (fallbackEl) fallbackEl.style.display = 'flex';
                    }
                  }}
                  referrerPolicy="no-referrer"
                />
                
                <div 
                  id="profile-placeholder-box" 
                  className="hidden absolute inset-0 flex-col items-center justify-center p-4 text-center bg-neutral-900"
                >
                  <UploadCloud className="w-8 h-8 text-blue-400 mb-2 animate-pulse" />
                  <span className="text-xs font-bold text-white mb-1">
                    Subhan's Profile Photo
                  </span>
                  <p className="text-[10px] text-neutral-400 max-w-[180px] font-mono">
                    Drop your photo into <span className="text-blue-400 font-semibold">public/images/profile.png</span>
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2 py-0.5 rounded-full bg-blue-600/80 backdrop-blur-md text-[10px] font-semibold text-white">
                    Subhan
                  </span>
                  <span className="text-[10px] font-mono text-neutral-300 bg-neutral-950/80 px-1.5 py-0.5 rounded border border-neutral-800">
                    Portrait
                  </span>
                </div>
              </div>

              <div className="py-1.5 px-2 rounded-lg bg-neutral-900/60 border border-neutral-800/80 text-center">
                <span className="text-[11px] font-mono text-neutral-400">
                  <code className="text-blue-400 font-semibold">profile.png</code>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Course Website Architecture Cards */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-800/80 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Site Navigation & Structure
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Project Pages & Modules
            </h2>
          </div>
          <p className="text-xs text-neutral-400">
            Click any section below to test client-side navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Media */}
          <div 
            onClick={() => onNavigate('media')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 2: Media
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Interactive multimedia showcase for photos, design graphics, and coursework video presentations.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-900 text-xs font-mono text-blue-400">
              <span>View Phase 2</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Hobbies */}
          <div 
            onClick={() => onNavigate('hobbies')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 3: Hobbies
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Personal interests, creative hobbies, coding projects, and extracurricular activities.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-900 text-xs font-mono text-rose-400">
              <span>View Phase 3</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Traveling */}
          <div 
            onClick={() => onNavigate('traveling')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 4: Traveling
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Places visited, bucket list destinations, cultural experiences, and travel photo journals.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-900 text-xs font-mono text-emerald-400">
              <span>View Phase 4</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Future */}
          <div 
            onClick={() => onNavigate('future')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 7: Future
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Long-term career aspirations, higher education pathways in computer science, and engineering vision.
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-900 text-xs font-mono text-violet-400">
              <span>View Phase 7</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
