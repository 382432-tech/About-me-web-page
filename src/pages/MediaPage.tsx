import React from 'react';
import { PageId } from '../types';
import { PlaceholderMedia } from '../components/common/PlaceholderMedia';
import { Image as ImageIcon, Video, Palette, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface MediaPageProps {
  onNavigate: (page: PageId) => void;
}

export const MediaPage: React.FC<MediaPageProps> = ({ onNavigate }) => {
  return (
    <div className="notebook-page -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto max-w-[1240px] pb-16 sm:pb-24">
        <section className="relative grid grid-cols-1 gap-10 pb-16 pt-12 sm:pt-20 lg:grid-cols-12 lg:gap-16 lg:pb-24 lg:pt-28">
          <div className="absolute right-[8%] top-12 h-24 w-24 rounded-full bg-[hsl(var(--lilac)/.55)] blur-[1px] -z-10" />
          <div className="absolute left-[42%] top-32 h-3 w-3 rounded-full bg-[hsl(var(--coral))] -z-10" />

          <div className="lg:col-span-7">
            <div className="reveal mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[hsl(var(--coral))]" />
              <span className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--ink-soft))]">
                notebook entry 02 / media
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 max-w-3xl font-display text-[clamp(4rem,10vw,8rem)] leading-[.82] tracking-[-.05em]">
              Things I
              <br />
              <span className="italic text-[hsl(var(--coral))]">make.</span>
            </h1>

            <div className="reveal reveal-delay-2 mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
              <p className="text-lg font-medium leading-snug sm:text-xl">
                Media is where an idea becomes something you can see, hear, or share.
              </p>
              <p className="text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
                Visual creations, coursework presentations, design graphics, and multimedia assets prepared for Phase 2.
              </p>
            </div>
          </div>

          <div className="reveal reveal-delay-2 flex items-end lg:col-span-5 lg:justify-end">
            <div className="w-full max-w-sm rotate-[2deg] bg-[hsl(var(--paper-deep))] p-5 shadow-[8px_10px_0_hsl(var(--ink)/.08)]">
              <div className="flex items-center justify-between font-mono-custom text-[10px] uppercase tracking-[.18em] text-[hsl(var(--ink-soft))]">
                <span>field note / 02</span>
                <ImageIcon className="h-4 w-4 text-[hsl(var(--coral))]" strokeWidth={1.5} />
              </div>
              <p className="mt-16 font-display text-4xl leading-[.9] sm:text-5xl">
                Collecting
                <br />
                <span className="italic">proof of play.</span>
              </p>
              <div className="mt-12 flex items-center gap-3 text-xs text-[hsl(var(--ink-soft))]">
                <span className="h-px w-8 bg-[hsl(var(--coral))]" />
                still experimenting
              </div>
            </div>
          </div>
        </section>

        <div className="sketch-line reveal" />

        <section className="grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--coral-deep))]">02 / media shelf</p>
            <h2 className="mt-5 font-display text-5xl leading-[.9] tracking-tight sm:text-6xl">
              Work in a few formats.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              These are open slots for the things that make the portfolio feel more like a working studio than a finished presentation.
            </p>
            <div className="mt-10 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[hsl(var(--ink-soft))]">
              <FileText className="h-4 w-4 text-[hsl(var(--coral))]" strokeWidth={1.5} />
              add the next artifact when it is ready
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8">
            <article className="group rotate-[-1deg] bg-[hsl(var(--paper-deep))] p-3 shadow-[6px_8px_0_hsl(var(--ink)/.08)] transition-transform duration-500 hover:rotate-0 focus-within:rotate-0">
              <div className="flex items-start justify-between gap-4 px-1 pb-4">
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-[hsl(var(--coral))]" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl leading-none">Coursework video</h3>
                </div>
                <span className="font-mono-custom text-[10px] uppercase tracking-wider text-[hsl(var(--ink-soft))]">16:9</span>
              </div>
              <PlaceholderMedia
                label="Course Demo Video"
                aspectRatio="video"
                dimensions="16:9 Standard HD"
                hint="Supports embedded YouTube, Vimeo, or HTML5 MP4 video files"
              />
              <p className="px-1 pt-4 text-xs leading-relaxed text-[hsl(var(--ink-soft))]">
                Record a short walkthrough of your portfolio code or introduce yourself to the class in a personal video intro.
              </p>
            </article>

            <article className="group mt-8 rotate-[1.5deg] bg-[hsl(var(--paper-deep))] p-3 shadow-[6px_8px_0_hsl(var(--ink)/.08)] transition-transform duration-500 hover:rotate-0 focus-within:rotate-0 sm:mt-14">
              <div className="flex items-start justify-between gap-4 px-1 pb-4">
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-[hsl(var(--ochre))]" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl leading-none">Digital graphic</h3>
                </div>
                <span className="font-mono-custom text-[10px] uppercase tracking-wider text-[hsl(var(--ink-soft))]">hi-res</span>
              </div>
              <PlaceholderMedia
                label="Digital Design Asset"
                aspectRatio="video"
                dimensions="1920 x 1080 Image"
                hint="Showcase a graphic design, Figma mockup, or vector illustration"
              />
              <p className="px-1 pt-4 text-xs leading-relaxed text-[hsl(var(--ink-soft))]">
                Display your visual work, photo edits, digital artwork, or web wireframes designed during class projects.
              </p>
            </article>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[hsl(var(--ink))] px-6 py-12 text-[hsl(var(--paper))] sm:px-10 sm:py-14">
          <Sparkles className="absolute -right-3 -top-8 h-36 w-36 text-[hsl(var(--ochre)/.25)]" strokeWidth={.7} />
          <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--ochre))]">next page / 03</p>
              <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">The things I return to.</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[hsl(var(--paper)/.7)]">
                Proceed to Phase 3 to explore hobbies, coding interests, and extracurriculars.
              </p>
            </div>
            <button
              onClick={() => onNavigate('hobbies')}
              className="group inline-flex shrink-0 items-center gap-3 border-b border-[hsl(var(--paper)/.5)] pb-2 text-sm font-semibold transition-colors hover:border-[hsl(var(--coral))] hover:text-[hsl(var(--coral))] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[hsl(var(--ochre))]"
            >
              Continue to hobbies
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};