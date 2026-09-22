import React from 'react';
import { PageId } from '../types';
import { ArrowUpRight, Circle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-[hsl(var(--line))] bg-[hsl(var(--paper-deep)/.34)] mt-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          <div className="space-y-4 md:col-span-7">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[hsl(var(--coral))] flex items-center justify-center text-[hsl(var(--paper))] font-display text-sm">
                S
              </div>
              <span className="font-display text-2xl text-[hsl(var(--ink))]">Subhan's field notebook</span>
            </div>
            <p className="text-sm text-[hsl(var(--ink-soft))] max-w-md leading-relaxed">
              A living record of what I am learning, noticing, and making as a high-school web development student.
            </p>
          </div>

          <div className="space-y-3 md:col-span-3">
            <h4 className="text-[10px] font-semibold text-[hsl(var(--ink-soft))] uppercase tracking-[.16em] font-mono-custom">
              Turn the page
            </h4>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-[hsl(var(--ink-soft))]">
              <button onClick={() => onNavigate('home')} className="hover:text-[hsl(var(--coral-deep))] text-left transition-colors">About</button>
              <button onClick={() => onNavigate('media')} className="hover:text-[hsl(var(--coral-deep))] text-left transition-colors">Media</button>
              <button onClick={() => onNavigate('hobbies')} className="hover:text-[hsl(var(--coral-deep))] text-left transition-colors">Hobbies</button>
              <button onClick={() => onNavigate('traveling')} className="hover:text-[hsl(var(--coral-deep))] text-left transition-colors">Travel</button>
              <button onClick={() => onNavigate('future')} className="hover:text-[hsl(var(--coral-deep))] text-left transition-colors">Future</button>
            </div>
          </div>

          <div className="md:col-span-2 flex md:justify-end items-start">
            <div className="inline-flex items-center gap-2 text-xs font-mono-custom text-[hsl(var(--ink-soft))]">
              <Circle className="w-2.5 h-2.5 fill-[hsl(var(--sage))] text-[hsl(var(--sage))]" />
              still in progress
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[hsl(var(--line)/.8)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[hsl(var(--ink-soft))]">
          <p>© {new Date().getFullYear()} Subhan · made between classes</p>
          <div className="flex items-center gap-1 font-mono-custom">
            Keep looking <ArrowUpRight className="w-3.5 h-3.5 text-[hsl(var(--coral))]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
