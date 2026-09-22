import React from 'react';
import { PageId } from '../types';
import { Sparkles, Cpu, Briefcase, GraduationCap, ArrowRight, Compass } from 'lucide-react';

interface FuturePageProps {
  onNavigate: (page: PageId) => void;
}

export const FuturePage: React.FC<FuturePageProps> = ({ onNavigate }) => {
  const visions = [
    {
      title: 'University degree',
      icon: GraduationCap,
      accent: 'hsl(var(--lilac))',
      description: 'Planning to pursue a bachelor’s degree in Computer Science or Software Engineering with an emphasis on system architecture and human-computer interaction.'
    },
    {
      title: 'Emerging tech & AI',
      icon: Cpu,
      accent: 'hsl(var(--sage))',
      description: 'Interested in how intelligent models, data automation, and distributed cloud systems can be leveraged to build helpful tools for everyday people.'
    },
    {
      title: 'Engineering career',
      icon: Briefcase,
      accent: 'hsl(var(--coral))',
      description: 'Aiming to work as a full-stack engineer on cross-functional product teams, shipping high-impact, accessible software worldwide.'
    }
  ];

  return (
    <div className="notebook-page -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto max-w-[1240px] pb-16 sm:pb-24">
        <section className="relative grid grid-cols-1 gap-10 pb-16 pt-12 sm:pt-20 lg:grid-cols-12 lg:gap-16 lg:pb-24 lg:pt-28">
          <div className="absolute right-[7%] top-10 h-32 w-32 rounded-full bg-[hsl(var(--lilac)/.48)] -z-10" />
          <div className="absolute right-[14%] top-24 h-3 w-3 rounded-full bg-[hsl(var(--coral))] -z-10" />
          <div className="lg:col-span-7">
            <div className="reveal mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[hsl(var(--lilac))]" />
              <span className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--ink-soft))]">
                notebook entry 05 / forward
              </span>
            </div>
            <h1 className="reveal reveal-delay-1 max-w-3xl font-display text-[clamp(4rem,10vw,8rem)] leading-[.82] tracking-[-.05em]">
              Where this
              <br />
              <span className="italic text-[hsl(var(--coral))]">could go.</span>
            </h1>
            <div className="reveal reveal-delay-2 mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
              <p className="text-lg font-medium leading-snug sm:text-xl">
                The future is a direction, not a finished answer.
              </p>
              <p className="text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
                Long-term career aspirations, higher education pathways in computer science, and software engineering interests.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2 flex items-end lg:col-span-5 lg:justify-end">
            <div className="w-full max-w-sm rotate-[-2deg] bg-[hsl(var(--lilac)/.52)] p-7 shadow-[8px_10px_0_hsl(var(--ink)/.08)]">
              <div className="flex items-center justify-between">
                <Sparkles className="h-8 w-8 text-[hsl(var(--coral-deep))]" strokeWidth={1.3} />
                <span className="font-mono-custom text-[10px] uppercase tracking-[.18em] text-[hsl(var(--ink-soft))]">sketch / next</span>
              </div>
              <p className="mt-16 font-display text-5xl leading-[.86]">
                Keep
                <br />
                <span className="italic">moving forward.</span>
              </p>
              <div className="mt-10 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[hsl(var(--ink-soft))]">
                <span className="h-px w-8 bg-[hsl(var(--coral))]" />
                plans can stay curious
              </div>
            </div>
          </div>
        </section>

        <div className="sketch-line reveal" />

        <section className="grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--coral-deep))]">05 / next coordinates</p>
            <h2 className="mt-5 font-display text-5xl leading-[.9] tracking-tight sm:text-6xl">
              Three directions I am watching.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              Each goal gives the next project a little more shape. The details can change; the curiosity stays.
            </p>
            <div className="mt-10 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[hsl(var(--ink-soft))]">
              <Compass className="h-4 w-4 text-[hsl(var(--coral))]" strokeWidth={1.5} />
              direction over destination
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:col-span-8">
            {visions.map((vision, idx) => {
              const Icon = vision.icon;
              return (
                <article
                  key={vision.title}
                  className={`bg-[hsl(var(--paper-deep))] p-6 shadow-[6px_8px_0_hsl(var(--ink)/.08)] transition-transform duration-500 hover:-translate-y-1 ${
                    idx === 1 ? 'rotate-[1.5deg] md:mt-8 hover:rotate-0' : idx === 2 ? 'rotate-[-1deg] hover:rotate-0' : 'rotate-[.5deg] hover:rotate-0'
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--line))]" style={{ backgroundColor: `${vision.accent}55` }}>
                    <Icon className="h-5 w-5" style={{ color: vision.accent }} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-8 font-display text-3xl leading-none">{vision.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
                    {vision.description}
                  </p>
                  <div className="mt-8 flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-wider text-[hsl(var(--ink-soft))]">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: vision.accent }} />
                    a direction to explore
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[hsl(var(--ink))] px-6 py-14 text-[hsl(var(--paper))] sm:px-12 sm:py-16">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-[hsl(var(--ochre)/.45)]" />
          <div className="absolute -right-3 -top-7 h-28 w-28 rounded-full border border-[hsl(var(--coral)/.55)]" />
          <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--ochre))]">return / 01</p>
              <h2 className="mt-4 font-display text-5xl leading-[.85] sm:text-6xl">Back to the beginning.</h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-[hsl(var(--paper)/.7)]">
                Revisit Phase 1 to see the complete student overview and project directory.
              </p>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="group inline-flex shrink-0 items-center gap-3 border-b border-[hsl(var(--paper)/.5)] pb-2 text-sm font-semibold transition-colors hover:border-[hsl(var(--coral))] hover:text-[hsl(var(--coral))] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--ochre))]"
            >
              Back to home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};