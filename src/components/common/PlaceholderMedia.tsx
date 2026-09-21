import React from 'react';
import { Image, Video, FileText, AlertCircle } from 'lucide-react';

interface PlaceholderMediaProps {
  label: string;
  type?: 'image' | 'video' | 'file';
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'banner';
  dimensions?: string;
  hint?: string;
  className?: string;
}

export const PlaceholderMedia: React.FC<PlaceholderMediaProps> = ({
  label,
  type = 'image',
  aspectRatio = 'video',
  dimensions = '16:9 Aspect Ratio',
  hint = 'Replace with your personal media file',
  className = '',
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
    banner: 'aspect-[3/1]',
  }[aspectRatio];

  const IconComponent = type === 'video' ? Video : type === 'file' ? FileText : Image;

  return (
    <div
      className={`relative w-full ${aspectClasses} rounded-xl bg-neutral-900/90 border-2 border-dashed border-blue-500/40 flex flex-col items-center justify-center p-6 text-center overflow-hidden group hover:border-blue-400 transition-colors ${className}`}
    >
      {/* Subtle blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-2 max-w-sm">
        <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-md group-hover:scale-105 transition-transform">
          <IconComponent className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[11px] font-mono font-medium border border-blue-500/20">
            <span>[Placeholder]</span>
          </div>
          <h4 className="text-sm font-semibold text-neutral-200 tracking-tight">
            {label}
          </h4>
          <p className="text-xs text-neutral-400 font-mono">
            {dimensions} • {hint}
          </p>
        </div>
      </div>
    </div>
  );
};
