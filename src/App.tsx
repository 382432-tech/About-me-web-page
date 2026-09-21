import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MediaPage } from './pages/MediaPage';
import { FuturePage } from './pages/FuturePage';
import { HobbiesPage } from './pages/HobbiesPage';
import { TravelingPage } from './pages/TravelingPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { motion, AnimatePresence } from 'motion/react';

export function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [unreadCount, setUnreadCount] = useState<number>(0);

  const fetchUnreadCount = async () => {
    try {
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        const data = await res.json();
        setUnreadCount(data.stats?.unreadCount || 0);
      }
    } catch (err) {
      console.warn('Backend stats polling:', err);
    }
  };

  useEffect(() => {
    fetchUnreadCount();
    // Poll stats periodically to keep unread badge up to date
    const interval = setInterval(fetchUnreadCount, 15000);
    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={setActivePage} />;
      case 'media':
        return <MediaPage />;
      case 'future':
        return <FuturePage />;
      case 'hobbies':
        return <HobbiesPage />;
      case 'traveling':
        return <TravelingPage />;
      case 'admin':
        return (
          <AdminDashboardPage 
            unreadCount={unreadCount} 
            onRefreshBadge={fetchUnreadCount} 
          />
        );
      default:
        return <HomePage onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Navigation */}
      <Navigation 
        activePage={activePage} 
        onNavigate={setActivePage} 
        unreadCount={unreadCount} 
      />

      {/* Main Content Area with Animated Page Transition */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={setActivePage} />
    </div>
  );
}

export default App;
