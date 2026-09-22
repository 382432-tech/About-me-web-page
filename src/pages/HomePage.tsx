import React from 'react';
import { PageId } from '../types';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Heart,
  Image as ImageIcon,
  MapPin,
  PencilLine,
  Plane,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

interface NotebookLink {
  id: PageId;
  number: string;
  title: string;
  description: string;
  accent: string;
  icon: React.ElementType;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const notebookLinks: NotebookLink[] = [
    {
      id: 'media',
      number: '02',
      title: 'Things I make',
      description: 'Images, interfaces, and the small experiments that teach me how to look closer.',
      accent: 'hsl(var(--coral))',
      icon: ImageIcon,
    },
    {
      id: 'hobbies',
      number: '03',
      title: 'Things I return to',
      description: 'The interests that keep my brain curious when the laptop is closed.',
      accent: 'hsl(var(--sage))',
      icon: Heart,
    },
    {
      id: 'traveling',
      number: '04',
      title: 'Places on my mind',
      description: 'A growing map of places, food, people, and ideas I want to meet.',
      accent: 'hsl(var(--ochre))',
      icon: Plane,
    },
    {
      id: 'future',
      number: '05',
      title: 'Where this could go',
      description: 'A sketch of the software creator I am becoming, one project at a time.',
      accent: 'hsl(var(--lilac))',
      icon: Sparkles,
    },
  ];

  return (
    <div className="text-[hsl(var(--ink))]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-12 sm:pt-20 lg:pt-28 pb-20 sm:pb-28">
          <div className="absolute top-14 right-[13%] w-24 h-24 rounded-full bg-[hsl(var(--lilac)/.55)] blur-[1px] -z-10" />
          <div className="absolute top-36 left-[43%] w-3 h-3 rounded-full bg-[hsl(var(--coral))] -z-10" />

          <div className="lg:col-span-7">
            <div className="reveal flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-[hsl(var(--coral))]" />
              <span className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--ink-soft))]">
                notebook entry 01 / hello
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 font-display text-[clamp(4.5rem,12vw,10.5rem)] leading-[.78] tracking-[-.055em] max-w-4xl">
              I’m figuring
              <br />
              <span className="italic text-[hsl(var(--coral))]">it out.</span>
            </h1>

            <div className="reveal reveal-delay-2 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
              <p className="text-lg sm:text-xl leading-snug font-medium">
                I’m Subhan, a high-school web development student and future software creator.
              </p>
              <p className="text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
                This is the place where I collect the useful mess: what I am learning, what I notice, and what I want to build next.
              </p>
            </div>

            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('media')}
                className="group inline-flex items-center gap-3 rounded-full bg-[hsl(var(--ink))] px-5 py-3 text-sm font-semibold text-[hsl(var(--paper))] transition-transform hover:-translate-y-1"
              >
                Open the notebook
                <ArrowRight className="w-4 h-4 text-[hsl(var(--ochre))] transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('future')}
                className="inline-flex items-center gap-2 rounded-full px-2 py-3 text-sm font-semibold text-[hsl(var(--ink-soft))] transition-colors hover:text-[hsl(var(--coral-deep))]"
              >
                A note about the future
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-14 reveal reveal-delay-2">
            <div className="relative max-w-md ml-auto">
              <div className="absolute -top-7 -left-7 w-20 h-20 border-t border-l border-[hsl(var(--ink)/.3)]" />
              <div className="absolute -bottom-5 -right-5 w-24 h-20 bg-[hsl(var(--ochre)/.35)] -z-10" />
              <div className="rotate-[2deg] bg-[hsl(var(--paper-deep))] p-3 shadow-[10px_12px_0_hsl(var(--ink)/.08)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[hsl(var(--sage)/.55)]">
                  <img
                    src="/images/profile.jpg"
                    srcSet="/images/profile-480.jpg 480w, /images/profile.jpg 800w"
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 90vw"
                    alt="Portrait of Subhan"
                    width="800"
                    height="1000"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-center mix-blend-multiply transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ink)/.38)] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between text-[hsl(var(--paper))]">
                    <span className="font-display text-3xl">Subhan</span>
                    <span className="font-mono-custom text-[10px] uppercase tracking-wider">self / study</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1 pt-3 font-mono-custom text-[10px] uppercase tracking-wider text-[hsl(var(--ink-soft))]">
                  <span>currently learning</span>
                  <span>web / 01</span>
                </div>
              </div>
              <div className="absolute -right-8 top-1/2 hidden -rotate-90 font-mono-custom text-[10px] uppercase tracking-[.24em] text-[hsl(var(--ink-soft))] sm:block">
                keep making notes
              </div>
            </div>
          </div>
        </section>

        <div className="sketch-line reveal" />

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-20 sm:py-28">
          <div className="lg:col-span-4">
            <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--coral-deep))]">01 / a little context</p>
            <h2 className="mt-5 font-display text-5xl sm:text-6xl leading-[.9] tracking-tight">
              More curious than certain.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-2xl sm:text-3xl leading-tight max-w-2xl">
              I like the moment an idea stops being abstract and starts responding to a click.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              <p>
                I’m learning how the web works by making things for it. Sometimes that means carefully planning a page; sometimes it means following a strange bug until it reveals what I misunderstood.
              </p>
              <p>
                This portfolio is less a finished answer and more a record of the questions I am asking. Take what you like, and come back later to see what changed.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[hsl(var(--ink-soft))]">
              <PencilLine className="w-4 h-4 text-[hsl(var(--coral))]" />
              last edited between assignments
            </div>
          </div>
        </section>

        <section className="border-y border-[hsl(var(--line))] py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div>
              <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--coral-deep))]">index / open pages</p>
              <h2 className="mt-3 font-display text-5xl sm:text-6xl leading-none">The rest of the story</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              Four places to wander through the interests behind the code.
            </p>
          </div>

          <div className="divide-y divide-[hsl(var(--line))] border-t border-[hsl(var(--line))]">
            {notebookLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="group grid w-full grid-cols-[2.5rem_2.5rem_1fr_auto] items-center gap-3 sm:gap-6 py-6 text-left transition-[padding] hover:px-3 sm:hover:px-5"
                >
                  <span className="font-mono-custom text-[10px] text-[hsl(var(--ink-soft))]">{item.number}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--line))] transition-colors group-hover:border-transparent" style={{ backgroundColor: `${item.accent}66` }}>
                    <Icon className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0 pr-3">
                    <span className="block font-display text-3xl sm:text-4xl leading-none group-hover:text-[hsl(var(--coral-deep))] transition-colors">{item.title}</span>
                    <span className="mt-2 block max-w-xl text-xs sm:text-sm leading-relaxed text-[hsl(var(--ink-soft))]">{item.description}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-[hsl(var(--ink-soft))] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[hsl(var(--coral))]" />
                </button>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-20 sm:py-28">
          <div className="lg:col-span-4">
            <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--coral-deep))]">01 / things in progress</p>
            <h2 className="mt-5 font-display text-5xl sm:text-6xl leading-[.9] tracking-tight">
              The work leaves traces.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[hsl(var(--ink-soft))]">
              A few visual notes from the desk: collecting references, sketching interfaces, and turning a rough idea into something you can use.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <figure className="group rotate-[-1deg] bg-[hsl(var(--paper-deep))] p-2 shadow-[6px_8px_0_hsl(var(--ink)/.08)] transition-transform duration-500 hover:rotate-0">
              <div className="overflow-hidden aspect-[3/2] bg-[hsl(var(--ochre)/.25)]">
                <img
                  src="/images/project-notebook.jpg"
                  srcSet="/images/project-notebook-640.jpg 640w, /images/project-notebook.jpg 1200w"
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 42vw, 90vw"
                  alt="Open field notebook beside a laptop, camera, color swatches, and interface sketches"
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between px-1 pt-3 font-mono-custom text-[10px] uppercase tracking-wider text-[hsl(var(--ink-soft))]">
                <span>reference / 01</span>
                <span>collecting</span>
              </figcaption>
            </figure>

            <figure className="group mt-6 rotate-[2deg] bg-[hsl(var(--paper-deep))] p-2 shadow-[6px_8px_0_hsl(var(--ink)/.08)] transition-transform duration-500 hover:rotate-0 sm:mt-12">
              <div className="overflow-hidden aspect-[3/2] bg-[hsl(var(--coral)/.2)]">
                <img
                  src="/images/project-process.jpg"
                  srcSet="/images/project-process-640.jpg 640w, /images/project-process.jpg 1200w"
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 42vw, 90vw"
                  alt="Hands working at a keyboard beside wireframe sketches and clipped visual references"
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between px-1 pt-3 font-mono-custom text-[10px] uppercase tracking-wider text-[hsl(var(--ink-soft))]">
                <span>process / 02</span>
                <span>making</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-20 sm:py-28">
          <div className="lg:col-span-7 notebook-rule rounded-sm bg-[hsl(var(--lilac)/.38)] p-8 sm:p-12">
            <div className="flex items-center justify-between font-mono-custom text-[10px] uppercase tracking-[.18em] text-[hsl(var(--ink-soft))]">
              <span>margin note</span>
              <Code2 className="h-4 w-4" />
            </div>
            <blockquote className="mt-16 sm:mt-24 max-w-xl font-display text-5xl sm:text-7xl leading-[.86] tracking-tight">
              “The best projects leave you with better questions.”
            </blockquote>
            <div className="mt-12 flex items-center gap-3 text-sm text-[hsl(var(--ink-soft))]">
              <span className="h-px w-8 bg-[hsl(var(--coral))]" />
              something I am learning
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-between">
            <div>
              <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--coral-deep))]">02 / current signals</p>
              <h2 className="mt-5 font-display text-5xl leading-[.9]">What is on my desk.</h2>
            </div>
            <div className="mt-12 space-y-6">
              <div className="flex gap-4 border-b border-[hsl(var(--line))] pb-5">
                <BookOpen className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--coral))]" strokeWidth={1.7} />
                <div>
                  <p className="font-semibold">Learning the fundamentals</p>
                  <p className="mt-1 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">HTML, CSS, JavaScript, and how to make them feel like one language.</p>
                </div>
              </div>
              <div className="flex gap-4 border-b border-[hsl(var(--line))] pb-5">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--ochre))]" strokeWidth={1.7} />
                <div>
                  <p className="font-semibold">Collecting perspectives</p>
                  <p className="mt-1 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">Good software starts with paying attention to people and place.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--coral-deep))]" strokeWidth={1.7} />
                <div>
                  <p className="font-semibold">Making room for surprise</p>
                  <p className="mt-1 text-sm leading-relaxed text-[hsl(var(--ink-soft))]">The next idea usually arrives while working on the current one.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[hsl(var(--ink))] px-6 py-16 sm:px-12 sm:py-20 text-[hsl(var(--paper))]">
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-[hsl(var(--ochre)/.45)]" />
          <div className="absolute -right-3 -top-7 h-28 w-28 rounded-full border border-[hsl(var(--coral)/.55)]" />
          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.2em] text-[hsl(var(--ochre))]">
              <span className="h-px w-8 bg-[hsl(var(--ochre))]" />
              03 / keep in touch with the work
            </div>
            <h2 className="mt-7 font-display text-6xl sm:text-8xl leading-[.82] tracking-tight">
              There’s more
              <br />
              <span className="italic text-[hsl(var(--coral))]">ahead.</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-[hsl(var(--paper)/.7)]">
              Follow the trail through the pages above, or jump straight to the part of the notebook that feels most like you.
            </p>
            <button
              onClick={() => onNavigate('hobbies')}
              className="group mt-8 inline-flex items-center gap-3 border-b border-[hsl(var(--paper)/.5)] pb-2 text-sm font-semibold transition-colors hover:border-[hsl(var(--coral))] hover:text-[hsl(var(--coral))]"
            >
              Start with the things I love
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-8 text-[10px] font-mono-custom uppercase tracking-[.18em] text-[hsl(var(--ink-soft))]">
          <span>Subhan / high-school web development</span>
          <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--sage))]" /> work in progress, by design</span>
        </div>
      </div>
    </div>
  );
};