import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Home, 
  Image as ImageIcon, 
  Compass, 
  Heart, 
  Plane, 
  ShieldAlert, 
  Menu, 
  X,
  Code
} from 'lucide-react';

interface NavigationProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  unreadCount?: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  activePage,
  onNavigate,
  unreadCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'media', label: 'Media', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'future', label: 'Future', icon: <Compass className="w-4 h-4" /> },
    { id: 'hobbies', label: 'Hobbies', icon: <Heart className="w-4 h-4" /> },
    { id: 'traveling', label: 'Traveling', icon: <Plane className="w-4 h-4" /> },
    { 
      id: 'admin', 
      label: 'Admin', 
      icon: <ShieldAlert className="w-4 h-4" /> 
    },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-neutral-800/90 text-neutral-100 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Student Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
            <span className="font-mono">S</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Subhan
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                Class Project
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-mono leading-none mt-0.5">
              High School Web Dev
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links with Active State */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/90 border border-neutral-800 rounded-full px-2 py-1 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                id={`nav-item-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all relative ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-600/30'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
                {link.id === 'admin' && unreadCount > 0 && (
                  <span className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-black text-blue-300' : 'bg-blue-600 text-white'
                  }`}>
                    {unreadCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Status Badge */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-neutral-400">JSON DB:</span>
            <span className="text-blue-400 font-semibold">Active</span>
          </div>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'text-neutral-300 hover:bg-neutral-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </div>
                {link.id === 'admin' && unreadCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs bg-black/40 text-blue-200 font-bold">
                    {unreadCount} new
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
