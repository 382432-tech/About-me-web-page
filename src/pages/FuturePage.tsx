import React from 'react';
import { PageId } from '../types';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { Sparkles, Cpu, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

interface FuturePageProps {
  onNavigate: (page: PageId) => void;
}

export const FuturePage: React.FC<FuturePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-12">
      <div className="border-b border-neutral-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Phase 7 Showcase
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Future Outlook & University Vision
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
          Long-term career aspirations, higher education pathways in computer science, and software engineering interests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-violet-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">University Degree</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Planning to pursue a bachelor’s degree in Computer Science or Software Engineering with an emphasis on system architecture and human-computer interaction.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Emerging Tech & AI</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Interested in how intelligent models, data automation, and distributed cloud systems can be leveraged to build helpful tools for everyday people.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Engineering Career</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Aiming to work as a full-stack engineer on cross-functional product teams, shipping high-impact, accessible software worldwide.
          </p>
        </div>

      </div>

      <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-base">Return to Home Showcase</h4>
          <p className="text-xs text-neutral-400 mt-1">
            Revisit Phase 1 to see the complete student overview and project directory.
          </p>
        </div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shrink-0"
        >
          <span>Back to Phase 1: Home</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
