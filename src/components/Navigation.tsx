import React, { useState } from 'react';
import { PageId } from '../types';
import { Home, Image, Heart, Plane, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

interface NavItem {
  id: PageId;
  label: string;
  phase: string;
  icon: React.ElementType;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'About', phase: '01', icon: Home },
    { id: 'media', label: 'Media', phase: '02', icon: Image },
    { id: 'hobbies', label: 'Hobbies', phase: '03', icon: Heart },
    { id: 'traveling', label: 'Travel', phase: '04', icon: Plane },
    { id: 'future', label: 'Future', phase: '05', icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--line)/.75)] bg-[hsl(var(--paper)/.9)] backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between min-h-[76px]">
          {/* Brand Logo */}
          <div 
            onClick={() => onNavigate('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') onNavigate('home');
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--coral))] border border-[hsl(var(--ink)/.15)] flex items-center justify-center text-[hsl(var(--paper))] group-hover:-rotate-6 transition-transform">
              <span className="font-display text-xl">S</span>
            </div>
            <div>
              <span className="block font-display text-xl leading-none text-[hsl(var(--ink))]">
                Subhan
              </span>
              <span className="hidden sm:block mt-1 text-[10px] font-mono-custom uppercase tracking-[.16em] text-[hsl(var(--ink-soft))]">
                field notes / 2024—now
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[hsl(var(--ink))] text-[hsl(var(--paper))]'
                      : 'text-[hsl(var(--ink-soft))] hover:text-[hsl(var(--ink))] hover:bg-[hsl(var(--paper-deep)/.65)]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.8} />
                  <span>{item.label}</span>
                  <span className={`text-[10px] font-mono-custom ${
                    isActive ? 'text-[hsl(var(--ochre))]' : 'text-[hsl(var(--ink-soft)/.65)]'
                  }`}>
                    {item.phase}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[hsl(var(--ink))] hover:bg-[hsl(var(--paper-deep))] border border-[hsl(var(--line))] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[hsl(var(--paper))] border-b border-[hsl(var(--line))] px-5 pt-3 pb-6 space-y-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                    className={`flex items-center gap-3 p-3 rounded-2xl text-xs font-medium transition-all text-left ${
                    isActive
                      ? 'bg-[hsl(var(--ink))] text-[hsl(var(--paper))] font-semibold'
                      : 'bg-[hsl(var(--paper-deep)/.35)] text-[hsl(var(--ink))] hover:bg-[hsl(var(--paper-deep)/.7)] border border-[hsl(var(--line)/.8)]'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[hsl(var(--ochre))]' : 'text-[hsl(var(--coral))]'}`} />
                  <div>
                    <div className="leading-tight">{item.label}</div>
                    <div className={`text-[10px] font-mono-custom ${isActive ? 'text-[hsl(var(--paper)/.7)]' : 'text-[hsl(var(--ink-soft))]'}`}>{item.phase} / notebook</div>
                  </div>
                  {isActive && <ArrowUpRight className="ml-auto w-4 h-4" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
