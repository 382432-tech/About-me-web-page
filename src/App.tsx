import React, { useState } from 'react';
import { PageId } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MediaPage } from './pages/MediaPage';
import { HobbiesPage } from './pages/HobbiesPage';
import { TravelingPage } from './pages/TravelingPage';
import { FuturePage } from './pages/FuturePage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'media':
        return <MediaPage onNavigate={handleNavigate} />;
      case 'hobbies':
        return <HobbiesPage onNavigate={handleNavigate} />;
      case 'traveling':
        return <TravelingPage onNavigate={handleNavigate} />;
      case 'future':
        return <FuturePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col justify-between selection:bg-blue-600/30 selection:text-blue-200">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
