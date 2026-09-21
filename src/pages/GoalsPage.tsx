import React, { useState } from 'react';
import { Target, CheckCircle2, Circle, Trophy, Calendar, Sparkles } from 'lucide-react';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';

export const GoalsPage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'All' | 'Academic' | 'Career' | 'Personal'>('All');

  const sampleGoals = [
    {
      id: 'goal-1',
      category: 'Academic' as const,
      title: 'Complete Web Development 101 Class Project',
      placeholderTag: '[Placeholder: Academic Goal 1]',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      targetDate: 'Semester End 2026',
      progress: 65,
      milestones: [
        'Set up website structure & navigation in Replit',
        'Build persistent JSON storage backend & contact form',
        'Replace all lorem ipsum placeholders with personal content',
        'Present project to class and instructor'
      ]
    },
    {
      id: 'goal-2',
      category: 'Career' as const,
      title: 'Learn Full-Stack Web Technologies',
      placeholderTag: '[Placeholder: Career Goal 2]',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      targetDate: 'Summer 2027',
      progress: 40,
      milestones: [
        'Master HTML5, CSS3, and modern styling',
        'Learn JavaScript interactivity and DOM manipulation',
        'Explore backend APIs and persistent storage engines',
        'Deploy first standalone production web application'
      ]
    },
    {
      id: 'goal-3',
      category: 'Personal' as const,
      title: 'Develop Consistent Coding & Study Routine',
      placeholderTag: '[Placeholder: Personal Goal 3]',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      targetDate: 'Ongoing',
      progress: 50,
      milestones: [
        'Dedicate 30 minutes daily to web dev practice',
        'Document learnings and challenges in a development log',
        'Collaborate with classmates on coding problem sets'
      ]
    }
  ];

  const displayedGoals = filterCategory === 'All' 
    ? sampleGoals 
    : sampleGoals.filter(g => g.category === filterCategory);

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
          <Target className="w-3.5 h-3.5" />
          <span>Page 3 • Aspirations & Milestones</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Goals & Aspirations
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          A structured template for Subhan's academic, career, and personal goals. Replace the placeholder descriptions and targets with your own milestones.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-neutral-900 p-1.5 rounded-xl border border-neutral-800">
          {(['All', 'Academic', 'Career', 'Personal'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === cat
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="text-xs font-mono text-neutral-400">
          Showing {displayedGoals.length} goal templates
        </span>
      </div>

      {/* Goals Cards List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Goals cards list */}
        <div className="lg:col-span-8 space-y-6">
          {displayedGoals.map((goal) => (
            <div
              key={goal.id}
              className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all space-y-5"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {goal.category}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {goal.placeholderTag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {goal.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{goal.targetDate}</span>
                </div>
              </div>

              {/* Lorem Ipsum description */}
              <p className="text-sm text-neutral-400 leading-relaxed">
                {goal.description}
              </p>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-400">Milestone Progress</span>
                  <span className="text-blue-400 font-bold">{goal.progress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-900 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-500"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>

              {/* Milestones list */}
              <div className="pt-3 border-t border-neutral-900 space-y-2">
                <span className="text-xs font-semibold text-neutral-300 block">
                  Action Steps & Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {goal.milestones.map((m, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-2 p-2 rounded-lg bg-neutral-900/50 border border-neutral-900 text-xs text-neutral-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar: Vision Board / Media Placeholder */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Trophy className="w-4 h-4 text-blue-400" />
              <span>Vision Board & Inspiration</span>
            </div>

            <PlaceholderMedia
              label="Goal Vision Board / Certificate"
              type="image"
              aspectRatio="square"
              dimensions="1:1 Ratio"
              hint="Upload an inspirational image or certificate"
            />

            <div className="p-3 rounded-xl bg-neutral-900/70 border border-neutral-800 text-xs text-neutral-400 space-y-1">
              <span className="font-semibold text-white block">Student Tip:</span>
              <p>
                Writing down SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals helps keep projects on track during the semester!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
