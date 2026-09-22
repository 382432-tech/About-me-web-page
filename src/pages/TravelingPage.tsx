import React from 'react';
import { PageId } from '../types';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { Plane, MapPin, Compass, Globe2, ArrowRight } from 'lucide-react';

interface TravelingPageProps {
  onNavigate: (page: PageId) => void;
}

export const TravelingPage: React.FC<TravelingPageProps> = ({ onNavigate }) => {
  const destinations = [
    {
      city: 'Tokyo, Japan',
      country: 'East Asia',
      status: 'Bucket List Destination',
      accent: 'hsl(var(--coral))',
      description: 'Excited by the harmony of futuristic high-tech robotics, bullet trains, historic shrines, and world-class street food.'
    },
    {
      city: 'New York City, USA',
      country: 'North America',
      status: 'Metropolitan Exploration',
      accent: 'hsl(var(--lilac))',
      description: 'The energy of iconic architecture, broadway culture, world-class museums, and diverse global neighborhoods.'
    },
    {
      city: 'Swiss Alps, Switzerland',
      country: 'Europe',
      status: 'Nature & Adventure',
      accent: 'hsl(var(--sage))',
      description: 'Picturesque alpine landscapes, scenic mountain rail routes, and peaceful outdoor hiking trails.'
    }
  ];

  return (
    <div className="notebook-page -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto max-w-[1240px] pb-16 sm:pb-24">
        <section className="relative grid grid-cols-1 gap-10 pb-16 pt-12 sm:pt-20 lg:grid-cols-12 lg:gap-16 lg:pb-24 lg:pt-28">
          <div className="absolute right-[10%] top-10 h-32 w-32 rounded-full border border-[hsl(var(--ochre)/.5)] -z-10" />
          <div className="absolute right-[15%] top-16 h-20 w-20 rounded-full border border-[hsl(var(--coral)/.5)] -z-10" />
          <div className="lg:col-span-7">
            <div className="reveal mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[hsl(var(--ochre))]" />
              <span className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--ink-soft))]">
                notebook entry 04 / map
              </span>
            </div>
            <h1 className="reveal reveal-delay-1 max-w-3xl font-display text-[clamp(4rem,10vw,8rem)] leading-[.82] tracking-[-.05em]">
              Places on
              <br />
              <span className="italic text-[hsl(var(--ochre))]">my mind.</span>
            </h1>
            <div className="reveal reveal-delay-2 mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
              <p className="text-lg font-medium leading-snug sm:text-xl">
                A growing map of places, food, people, and ideas I want to meet.
              </p>
              <p className="text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
                Favorite memories, dream travel spots, and cultural perspectives from journeys near and far.
              </p>
            </div>
          </div>
          <div className="reveal reveal-delay-2 flex items-end lg:col-span-5 lg:justify-end">
            <div className="w-full max-w-sm rotate-[2deg] bg-[hsl(var(--ochre)/.36)] p-7 shadow-[8px_10px_0_hsl(var(--ink)/.08)]">
              <div className="flex items-center justify-between">
                <Compass className="h-8 w-8 text-[hsl(var(--ink))]" strokeWidth={1.3} />
                <span className="font-mono-custom text-[10px] uppercase tracking-[.18em] text-[hsl(var(--ink-soft))]">unfold / explore</span>
              </div>
              <p className="mt-16 font-display text-5xl leading-[.86]">
                Notice
                <br />
                <span className="italic">the details.</span>
              </p>
              <div className="mt-10 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[hsl(var(--ink-soft))]">
                <span className="h-px w-8 bg-[hsl(var(--coral))]" />
                every place teaches
              </div>
            </div>
          </div>
        </section>

        <div className="sketch-line reveal" />

        <section className="grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--coral-deep))]">04 / destinations</p>
            <h2 className="mt-5 font-display text-5xl leading-[.9] tracking-tight sm:text-6xl">
              A few pins worth following.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              Every destination is a prompt to pay attention: to how people move, what they build, and what they make room for.
            </p>
            <div className="mt-10 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[hsl(var(--ink-soft))]">
              <Globe2 className="h-4 w-4 text-[hsl(var(--ochre))]" strokeWidth={1.5} />
              route still being drawn
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:col-span-8">
            {destinations.map((dest, idx) => (
              <article
                key={dest.city}
                className={`group flex flex-col justify-between bg-[hsl(var(--paper-deep))] p-3 shadow-[6px_8px_0_hsl(var(--ink)/.08)] transition-transform duration-500 hover:-translate-y-1 ${
                  idx === 1 ? 'rotate-[1.5deg] md:mt-8 hover:rotate-0' : idx === 2 ? 'rotate-[-1deg] hover:rotate-0' : 'rotate-[.5deg] hover:rotate-0'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3 px-1">
                    <span className="font-mono-custom text-[10px] uppercase tracking-wider" style={{ color: dest.accent }}>
                      {dest.status}
                    </span>
                    <span className="flex items-center gap-1 font-mono-custom text-[10px] text-[hsl(var(--ink-soft))]">
                      <MapPin className="h-3 w-3" style={{ color: dest.accent }} strokeWidth={1.7} />
                      {dest.country}
                    </span>
                  </div>
                  <h3 className="px-1 font-display text-3xl leading-none">{dest.city}</h3>
                  <p className="px-1 text-xs leading-relaxed text-[hsl(var(--ink-soft))]">
                    {dest.description}
                  </p>
                </div>
                <div className="mt-5">
                  <PlaceholderMedia
                    label={`${dest.city} Photo`}
                    aspectRatio="video"
                    dimensions="16:9 Landscape"
                    hint="Add scenic photo or travel memory"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[hsl(var(--line))] py-12 sm:py-14">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--coral-deep))]">next page / 05</p>
              <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">Where this could go.</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
                Check out Phase 7 to explore university goals and software aspirations.
              </p>
            </div>
            <button
              onClick={() => onNavigate('future')}
              className="group inline-flex shrink-0 items-center gap-3 border-b border-[hsl(var(--ink)/.45)] pb-2 text-sm font-semibold transition-colors hover:border-[hsl(var(--coral))] hover:text-[hsl(var(--coral-deep))] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--coral))]"
            >
              Continue to the future
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};