import React from 'react';
import { PageId } from '../types';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { Heart, Code, Gamepad2, Dumbbell, Music, ArrowRight, PencilLine } from 'lucide-react';

interface HobbiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const HobbiesPage: React.FC<HobbiesPageProps> = ({ onNavigate }) => {
  const hobbies = [
    {
      title: 'Web & Software Development',
      icon: Code,
      accent: 'hsl(var(--coral))',
      description: 'Experimenting with modern front-end frameworks, responsive CSS grids, and server-side script logic.',
      tag: 'Tech & Coding'
    },
    {
      title: 'Gaming & Strategy',
      icon: Gamepad2,
      accent: 'hsl(var(--lilac))',
      description: 'Competitive and cooperative games that challenge problem solving, teamwork, and quick decision making.',
      tag: 'Recreation'
    },
    {
      title: 'Fitness & Sports',
      icon: Dumbbell,
      accent: 'hsl(var(--sage))',
      description: 'Staying active with daily workouts, outdoor running, and team athletic activities to keep the mind sharp.',
      tag: 'Health'
    },
    {
      title: 'Music & Audio Production',
      icon: Music,
      accent: 'hsl(var(--ochre))',
      description: 'Listening to diverse music genres and exploring beats, audio mixing, and digital instruments.',
      tag: 'Creative'
    }
  ];

  return (
    <div className="notebook-page -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto max-w-[1240px] pb-16 sm:pb-24">
        <section className="relative grid grid-cols-1 gap-10 pb-16 pt-12 sm:pt-20 lg:grid-cols-12 lg:gap-16 lg:pb-24 lg:pt-28">
          <div className="absolute right-[14%] top-14 h-20 w-20 rounded-full bg-[hsl(var(--coral)/.18)] -z-10" />
          <div className="lg:col-span-7">
            <div className="reveal mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[hsl(var(--coral))]" />
              <span className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--ink-soft))]">
                notebook entry 03 / interests
              </span>
            </div>
            <h1 className="reveal reveal-delay-1 max-w-3xl font-display text-[clamp(4rem,10vw,8rem)] leading-[.82] tracking-[-.05em]">
              Things I
              <br />
              <span className="italic text-[hsl(var(--coral))]">return to.</span>
            </h1>
            <div className="reveal reveal-delay-2 mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
              <p className="text-lg font-medium leading-snug sm:text-xl">
                The interests that keep my brain curious when the laptop is closed.
              </p>
              <p className="text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
                What keeps me inspired outside the classroom—from coding side-projects and athletics to gaming and creative pursuits.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2 flex items-end lg:col-span-5 lg:justify-end">
            <div className="w-full max-w-sm rotate-[-2deg] bg-[hsl(var(--sage)/.55)] p-7 shadow-[8px_10px_0_hsl(var(--ink)/.08)]">
              <Heart className="h-7 w-7 text-[hsl(var(--coral-deep))]" strokeWidth={1.4} />
              <p className="mt-14 font-display text-5xl leading-[.86]">
                Follow the
                <br />
                <span className="italic">energy.</span>
              </p>
              <div className="mt-10 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[hsl(var(--ink-soft))]">
                <span className="h-px w-8 bg-[hsl(var(--coral))]" />
                notes from off-hours
              </div>
            </div>
          </div>
        </section>

        <div className="sketch-line reveal" />

        <section className="grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--coral-deep))]">03 / the index</p>
            <h2 className="mt-5 font-display text-5xl leading-[.9] tracking-tight sm:text-6xl">
              A little fuel for the work.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              The best ideas usually arrive from somewhere else. These are the places I go to reset, compete, listen, and keep learning.
            </p>
            <div className="mt-10 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[hsl(var(--ink-soft))]">
              <PencilLine className="h-4 w-4 text-[hsl(var(--coral))]" strokeWidth={1.5} />
              still adding pages
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:col-span-8">
            {hobbies.map((hobby, idx) => {
              const Icon = hobby.icon;
              return (
                <article
                  key={hobby.title}
                  className={`group bg-[hsl(var(--paper-deep))] p-3 shadow-[6px_8px_0_hsl(var(--ink)/.08)] transition-transform duration-500 hover:-translate-y-1 ${
                    idx % 2 === 1 ? 'rotate-[1.5deg] sm:mt-8 hover:rotate-0' : 'rotate-[-1deg] hover:rotate-0'
                  }`}
                >
                  <div className="flex items-start gap-3 px-1 pb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--line))]" style={{ backgroundColor: `${hobby.accent}33` }}>
                      <Icon className="h-5 w-5" style={{ color: hobby.accent }} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl leading-none">{hobby.title}</h3>
                      <span className="mt-2 block font-mono-custom text-[10px] uppercase tracking-wider text-[hsl(var(--ink-soft))]">{hobby.tag}</span>
                    </div>
                  </div>
                  <p className="px-1 pb-4 text-xs leading-relaxed text-[hsl(var(--ink-soft))]">
                    {hobby.description}
                  </p>
                  <PlaceholderMedia
                    label={`${hobby.title} Photo`}
                    aspectRatio="video"
                    dimensions="16:9 Aspect Ratio"
                    hint="Upload a personal photo of your hobby or interest"
                  />
                </article>
              );
            })}
          </div>
        </section>

        <section className="notebook-rule rounded-sm bg-[hsl(var(--lilac)/.38)] px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--ink-soft))]">next page / 04</p>
              <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">Places on my mind.</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
                Check out Phase 4 to see travel experiences and dream destinations.
              </p>
            </div>
            <button
              onClick={() => onNavigate('traveling')}
              className="group inline-flex shrink-0 items-center gap-3 border-b border-[hsl(var(--ink)/.45)] pb-2 text-sm font-semibold transition-colors hover:border-[hsl(var(--coral))] hover:text-[hsl(var(--coral-deep))] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--coral))]"
            >
              Continue to traveling
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};