import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Home, 
  Image, 
  Heart, 
  Plane, 
  Stethoscope, 
  Menu,
  X
} from 'lucide-react';

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
    { id: 'home', label: 'Home', phase: 'Phase 1', icon: Home },
    { id: 'media', label: 'Media', phase: 'Phase 2', icon: Image },
    { id: 'hobbies', label: 'Hobbies', phase: 'Phase 3', icon: Heart },
    { id: 'traveling', label: 'Traveling', phase: 'Phase 4', icon: Plane },
    { id: 'future', label: 'Future', phase: 'Phase 7', icon: Stethoscope },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:border-blue-400 transition-colors">
              <span className="font-mono font-bold text-sm">S</span>
            </div>
            <div>
              <span className="font-bold text-base text-white tracking-tight group-hover:text-blue-400 transition-colors">
                Subhan
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-mono text-neutral-400">
                Course Portfolio
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-blue-700 text-blue-100' : 'text-neutral-400'
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
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-1">
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
                  className={`flex items-center gap-3 p-3 rounded-xl text-xs font-medium transition-all text-left ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'bg-neutral-900/60 text-neutral-300 hover:bg-neutral-900 hover:text-white border border-neutral-800/80'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0 text-blue-400" />
                  <div>
                    <div className="leading-tight">{item.label}</div>
                    <div className="text-[10px] text-neutral-300 font-mono">{item.phase}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
