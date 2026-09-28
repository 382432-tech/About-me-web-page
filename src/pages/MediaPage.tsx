import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Image as ImageIcon, 
  Video, 
  ArrowRight, 
  Play, 
  ExternalLink, 
  Sparkles,
  Instagram,
  Eye,
  X,
  Share2,
  Check,
  Film
} from 'lucide-react';

import doctorDeskImg from '../assets/images/doctor_stethoscope_desk_1790360436313.jpg';
import hospitalCareImg from '../assets/images/medical_hospital_care_1790360448999.jpg';
import anatomyLabImg from '../assets/images/medical_anatomy_lab_1790360460772.jpg';

interface MediaPageProps {
  onNavigate: (page: PageId) => void;
}

interface MediaCardItem {
  id: string;
  title: string;
  type: 'social' | 'video' | 'image';
  category: string;
  thumbnail: string;
  fallbackThumbnail?: string;
  caption: string;
  link?: string;
  details: string;
  badge: string;
}

export const MediaPage: React.FC<MediaPageProps> = ({ onNavigate }) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaCardItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'social' | 'video' | 'image'>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  // New Instagram reel requested by user
  const latestReelUrl = "https://www.instagram.com/reel/DbhOWoEAXTg/?utm_source=ig_web_button_share_sheet";
  const gameplayReelUrl = "https://www.instagram.com/reel/DblxbWghsYm/?utm_source=ig_web_button_share_sheet";
  const volleyballFivbUrl = "https://images.volleyballworld.com/image/upload/t_ratio10_16-size30-f_webp-c_fill/v1759772164/fivb-prd/d9tc28zji6svm0rmxuwq";

  const mediaItems: MediaCardItem[] = [
    {
      id: 'reel-athletic',
      title: 'Instagram Reel: Athletic Training & Drills',
      type: 'social',
      category: 'Instagram Reel',
      badge: 'Social Media',
      thumbnail: '/images/volleyball.webp',
      link: latestReelUrl,
      caption: 'Dynamic athletic workout video demonstrating speed, agility drills, and conditioning shared on Instagram Reels.',
      details: 'Short-form athletic reel capturing high-intensity movement, explosive jump power, and court reflex exercises for competitive volleyball.'
    },
    {
      id: 'reel-gameplay',
      title: 'Instagram Reel: Consistency & Reflexes',
      type: 'social',
      category: 'Instagram Reel',
      badge: 'Social Media',
      thumbnail: '/images/pubgm-reel-thumb.jpg',
      link: gameplayReelUrl,
      caption: 'Tactical gameplay coordination, recoil control, and video editing reel posted via @fear_pubgmo.',
      details: 'Showcasing tactical coordination, music timing synchronization, and video clip editing techniques on Instagram Reels.'
    },
    {
      id: 'portrait-photo',
      title: "Ahmad Shirzai's Student Portrait",
      type: 'image',
      category: 'Student Profile',
      badge: 'Profile Photo',
      thumbnail: '/images/profile.png',
      fallbackThumbnail: '/images/profile.jpg',
      caption: 'Official student portrait for high school web development coursework and personal portfolio.',
      details: 'Verified high school student headshot of Ahmad Shirzai, aspiring Medical Doctor (M.D.) and student web developer.'
    },
    {
      id: 'volleyball-spike',
      title: 'Volleyball World Championship Spike',
      type: 'image',
      category: 'Athletics & Passion',
      badge: 'FIVB Action',
      thumbnail: '/images/volleyball.webp',
      link: volleyballFivbUrl,
      caption: 'High-level FIVB competitive volleyball spike highlighting court awareness, jump elevation, and team strategy.',
      details: 'Inspirational volleyball action photography from Volleyball World, reflecting Ahmad’s dedication to competitive sportsmanship.'
    },
    {
      id: 'coursework-demo-video',
      title: 'Web Project Architecture Walkthrough',
      type: 'video',
      category: 'Coursework Video',
      badge: 'Video Demo',
      thumbnail: '/images/project-process.jpg',
      caption: 'Recorded coursework walkthrough explaining modular React components, CSS layouts, and Express server APIs.',
      details: 'Technical presentation examining the client-server data flow, contactReceived.json storage on the backend, and interactive UI states.'
    },
    {
      id: 'study-notebook',
      title: 'Biology & Pre-Med Research Workspace',
      type: 'image',
      category: 'Academic Study',
      badge: 'Lab Workspace',
      thumbnail: '/images/project-notebook.jpg',
      caption: 'Handwritten biology diagrams, pre-med study journals, and web development wireframe blueprints.',
      details: 'Daily academic workspace combining medical science foundational preparation with modern computer programming practices.'
    },
    {
      id: 'doctor-desk',
      title: 'Clinical Diagnostic Consultation',
      type: 'image',
      category: 'Medical Aspiration',
      badge: 'Future Career',
      thumbnail: doctorDeskImg,
      caption: 'Stethoscope and clinical tools representing Ahmad’s ultimate goal of becoming a Medical Doctor.',
      details: 'Medical clinical practice tools symbolizing patient diagnostic care, compassionate listening, and lifelong scientific commitment.'
    },
    {
      id: 'hospital-ward',
      title: 'Hospital Clinical Care & Rounds',
      type: 'image',
      category: 'Healthcare Pathway',
      badge: 'Clinical Care',
      thumbnail: hospitalCareImg,
      caption: 'Hospital inpatient wing representing clinical shadowing and emergency room healthcare volunteering.',
      details: 'Gaining hospital ward exposure and witnessing firsthand the collaboration between attending physicians, nurses, and specialists.'
    },
    {
      id: 'anatomy-lab',
      title: 'Microbiology & Anatomy Laboratory',
      type: 'image',
      category: 'Scientific Research',
      badge: 'Medical Science',
      thumbnail: anatomyLabImg,
      caption: 'Advanced laboratory microscopes and specimen analysis for human anatomy and biological research.',
      details: 'Experimental biology laboratory investigations examining cellular pathology, tissue histology, and physiological organ models.'
    },
    {
      id: 'travel-japan',
      title: 'Cultural Journey: Kyoto & Tokyo, Japan',
      type: 'image',
      category: 'Travel Journal',
      badge: 'Travel Photo',
      thumbnail: '/images/travel/japan.jpg',
      caption: 'Exploring historical temples, innovative architecture, and vibrant community culture across Japan.',
      details: 'International travel photo journal capturing cultural heritage, discipline, and aesthetic mindfulness in Japan.'
    },
    {
      id: 'travel-swiss',
      title: 'Alpine Exploration: Swiss Alps',
      type: 'image',
      category: 'Travel Journal',
      badge: 'Travel Photo',
      thumbnail: '/images/travel/switzerland.jpg',
      caption: 'High-altitude hiking across pristine Swiss alpine valleys and snow-covered peaks.',
      details: 'Mountain landscape photography exploring alpine ecosystems, physical stamina, and natural wonder.'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === activeFilter);

  const handleCopyModalLink = (link?: string) => {
    if (!link) return;
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            Phase 2: Multimedia Gallery ({mediaItems.length} Items)
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Media Gallery & Demonstrations
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive gallery displaying student photos, Instagram reels, video demos, medical science visuals, and travel journals. Click any card to expand.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-neutral-950 p-1.5 rounded-xl border border-neutral-800 shrink-0 self-start md:self-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === 'all' 
                ? 'bg-blue-600 text-white font-semibold' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All ({mediaItems.length})
          </button>
          <button
            onClick={() => setActiveFilter('social')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === 'social' 
                ? 'bg-rose-600 text-white font-semibold' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Social Reels
          </button>
          <button
            onClick={() => setActiveFilter('video')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === 'video' 
                ? 'bg-violet-600 text-white font-semibold' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveFilter('image')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === 'image' 
                ? 'bg-emerald-600 text-white font-semibold' 
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Images
          </button>
        </div>
      </div>

      {/* Featured Banner: Latest Instagram Reel (Requested by User) */}
      <div className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-4 max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono">
              <Instagram className="w-3.5 h-3.5 text-rose-400" />
              <span>Latest Instagram Reel Added</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Athletic Training & Volleyball Reflexes
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed">
              Explore Ahmad’s newly shared Instagram Reel highlighting high-intensity speed drills, jump conditioning, and athletic focus. Click below to view the reel directly on Instagram or open it in the media viewer.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={latestReelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-xs transition-all shadow-lg shadow-rose-600/25 active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch Reel on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedMedia(mediaItems[0])}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 text-xs font-medium transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span>Quick View Details</span>
              </button>
            </div>
          </div>

          {/* Reel Preview Card */}
          <div 
            onClick={() => setSelectedMedia(mediaItems[0])}
            className="w-full sm:w-[280px] aspect-[9/14] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 relative shadow-2xl cursor-pointer group/thumb shrink-0"
          >
            <img 
              src="/images/volleyball.webp" 
              alt="Instagram Reel Thumbnail"
              className="w-full h-full object-cover object-center group-hover/thumb:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20 flex flex-col items-center justify-center p-4 text-center">
              <div className="w-14 h-14 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-xl group-hover/thumb:scale-110 transition-transform border border-rose-400/50 mb-3">
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </div>
              <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono text-white border border-neutral-700">
                Tap to Expand
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white pointer-events-none">
              <span className="bg-neutral-950/80 px-2 py-0.5 rounded border border-neutral-800 backdrop-blur-sm">
                @Instagram
              </span>
              <span className="text-rose-300 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800/60 backdrop-blur-sm font-semibold">
                New Reel
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 9+ Media Gallery Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>Coursework & Personal Gallery</span>
            <span className="text-xs font-mono text-neutral-400 bg-neutral-900 px-2.5 py-0.5 rounded-full border border-neutral-800">
              {filteredItems.length} items
            </span>
          </h2>
          <span className="text-xs text-neutral-500 font-mono hidden sm:inline-block">
            Hover to animate • Click to view full size
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="rounded-2xl bg-neutral-950 border border-neutral-800/90 overflow-hidden shadow-lg hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-500/60 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              {/* Media Section */}
              <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    if (item.fallbackThumbnail) {
                      e.currentTarget.src = item.fallbackThumbnail;
                    }
                  }}
                />

                {/* Type Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider backdrop-blur-md shadow-md ${
                    item.type === 'social'
                      ? 'bg-rose-600/90 text-white'
                      : item.type === 'video'
                      ? 'bg-violet-600/90 text-white'
                      : 'bg-neutral-950/80 text-blue-300 border border-neutral-700'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Play icon overlay for videos & reels */}
                {(item.type === 'social' || item.type === 'video') && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/15 transition-colors">
                    <div className="w-11 h-11 rounded-full bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-black ml-0.5" />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Caption Section */}
              <div className="p-5 space-y-2 flex-grow flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-bold text-base text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span className="text-neutral-500">{item.category}</span>
                  <span className="text-blue-400 font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal View for Click Interaction */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedMedia(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl space-y-0 my-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold ${
                  selectedMedia.type === 'social'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : selectedMedia.type === 'video'
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                    : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                }`}>
                  {selectedMedia.badge}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {selectedMedia.category}
                </span>
              </div>

              <button
                onClick={() => setSelectedMedia(null)}
                className="w-8 h-8 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Media Display */}
            <div className="relative aspect-[16/10] sm:aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedMedia.thumbnail}
                alt={selectedMedia.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  if (selectedMedia.fallbackThumbnail) {
                    e.currentTarget.src = selectedMedia.fallbackThumbnail;
                  }
                }}
              />

              {/* Play Overlay if video/social */}
              {(selectedMedia.type === 'social' || selectedMedia.type === 'video') && selectedMedia.link && (
                <a
                  href={selectedMedia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/25 transition-colors group/play"
                >
                  <div className="w-16 h-16 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform border border-rose-400/50">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                  <span className="mt-3 px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs font-mono text-white border border-neutral-700 inline-flex items-center gap-1.5">
                    <span>Watch Full Post on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              )}
            </div>

            {/* Modal Body & Captions */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {selectedMedia.title}
                </h3>
                <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                  {selectedMedia.caption}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 leading-relaxed">
                <p><strong className="text-neutral-200">Context & Significance:</strong> {selectedMedia.details}</p>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-900">
                {selectedMedia.link ? (
                  <a
                    href={selectedMedia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                  >
                    <span>Open External Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-neutral-500">
                    Internal Portfolio Media Asset
                  </span>
                )}

                <div className="flex items-center gap-2">
                  {selectedMedia.link && (
                    <button
                      onClick={() => handleCopyModalLink(selectedMedia.link)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-mono transition-colors cursor-pointer"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? 'Copied Link!' : 'Share Link'}</span>
                    </button>
                  )}
                  
                  <button
                    onClick={() => setSelectedMedia(null)}
                    className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Next Phase Callout */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-base">Ready to explore hobbies and sports?</h4>
          <p className="text-xs text-neutral-400 mt-1">
            Proceed to Phase 3 to explore volleyball, fitness training, and recreational passions.
          </p>
        </div>
        <button
          onClick={() => onNavigate('hobbies')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shrink-0 cursor-pointer"
        >
          <span>Continue to Phase 3: Hobbies</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
