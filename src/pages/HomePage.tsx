import React from 'react';
import { PageId } from '../types';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { 
  ArrowRight, 
  Image as ImageIcon, 
  Compass, 
  Heart, 
  Plane, 
  ShieldCheck, 
  Database,
  BookOpen,
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Student Portfolio • High School Web Development</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Welcome, I'm <span className="text-blue-500 underline decoration-blue-500/30 decoration-wavy">Subhan</span>.
              </h1>
              <p className="text-lg sm:text-xl text-neutral-400 font-medium">
                Welcome to my first web development course website!
              </p>
            </div>

            {/* Clearly labeled template placeholder with lorem ipsum as mandated */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-neutral-300 space-y-2 leading-relaxed">
              <div className="flex items-center justify-between text-xs font-mono text-blue-400">
                <span>[Placeholder: Personal Introduction]</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Template Text</span>
              </div>
              <p className="text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('media')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
              >
                <span>Explore Media Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('admin')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-sm font-medium transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Admin Dashboard</span>
              </button>
            </div>

            {/* Quick Links / Socials Slot */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
              <span className="text-neutral-500 font-mono text-[11px]">[Profiles & Links]:</span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                GitHub: <span className="text-blue-400">[Not Provided Yet]</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                Replit: <span className="text-blue-400">[Not Provided Yet]</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400">
                Email: <span className="text-blue-400">[Not Provided Yet]</span>
              </span>
            </div>
          </div>

          {/* Profile Media Frame */}
          <div className="lg:col-span-5">
            <div className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl space-y-3">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 flex items-center justify-center group">
                <img 
                  src="/images/profile.png" 
                  alt="Subhan's Profile Portrait" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Try fallback to .jpg if user uploaded as .jpg
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
                
                {/* Fallback box displayed only if image file is not yet placed in public/images/ */}
                <div 
                  id="profile-placeholder-box" 
                  className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center bg-neutral-900"
                >
                  <UploadCloud className="w-10 h-10 text-blue-400 mb-2 animate-pulse" />
                  <span className="text-sm font-bold text-white mb-1">
                    Upload Profile Photo
                  </span>
                  <p className="text-xs text-neutral-400 max-w-xs font-mono">
                    Drop your image into <span className="text-blue-400 font-semibold">public/images/profile.png</span>
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-[11px] font-semibold text-white">
                    Subhan
                  </span>
                  <span className="text-[11px] font-mono text-neutral-300 bg-neutral-950/80 px-2 py-0.5 rounded border border-neutral-800">
                    Profile Portrait
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-center">
                <span className="text-xs font-mono text-neutral-400">
                  Target location: <code className="text-blue-400 font-semibold">public/images/profile.png</code>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            <div className="flex items-center justify-between text-xs text-blue-400 font-semibold pt-3 border-t border-neutral-900">
              <span>View Media Page</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Future */}
          <div 
            onClick={() => onNavigate('future')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 3: Future
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Structured roadmap for academic goals, future career aspirations, timeline milestones, and vision board.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-blue-400 font-semibold pt-3 border-t border-neutral-900">
              <span>View Future Page</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Hobbies */}
          <div 
            onClick={() => onNavigate('hobbies')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 4: Hobbies
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Personal interest showcase detailing your favorite creative projects, extracurriculars, or passion pursuits.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-blue-400 font-semibold pt-3 border-t border-neutral-900">
              <span>View Hobbies Page</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Traveling */}
          <div 
            onClick={() => onNavigate('traveling')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 5: Traveling
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Global explorations featuring your favorite travel memories, dream destinations, architecture, and scenery photos.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-blue-400 font-semibold pt-3 border-t border-neutral-900">
              <span>View Traveling Page</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Admin Dashboard */}
          <div 
            onClick={() => onNavigate('admin')}
            className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 hover:border-blue-500/50 cursor-pointer transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Phase 6: Admin
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Administrative console with live stats, message management, read/unread status, and direct JSON storage inspection.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-blue-400 font-semibold pt-3 border-t border-neutral-900">
              <span>View Admin Page</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Replit & Server Architecture Note */}
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/90 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400 mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Persistent JSON Storage
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Powered by Express server-side JavaScript with a persistent JSON storage file located at <code className="text-blue-300">/data/submissions.json</code>.
              </p>
            </div>
            <div className="text-[11px] font-mono text-neutral-500 pt-3 border-t border-neutral-900">
              Server: Online • Port 3000
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Quick Guide */}
      <section className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase">
          <span>Student Project Notice</span>
        </div>
        <h3 className="text-lg font-bold text-white">
          Hi Subhan! Here is how your website template is organized:
        </h3>
        <p className="text-xs text-neutral-300 leading-relaxed">
          Every requirement has been created with working client-side and server-side JavaScript. All placeholder areas are clearly marked so you can easily replace the Lorem Ipsum text and media placeholders with your own words, photos, and project details as you progress through class!
        </p>
      </section>
    </div>
  );
};
