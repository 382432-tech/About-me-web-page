import React from 'react';
import { UploadCloud, Sparkles } from 'lucide-react';

interface PlaceholderMediaProps {
  label: string;
  aspectRatio?: 'portrait' | 'video' | 'square' | 'wide';
  dimensions?: string;
  hint?: string;
  className?: string;
}

export const PlaceholderMedia: React.FC<PlaceholderMediaProps> = ({
  label,
  aspectRatio = 'video',
  dimensions,
  hint,
  className = ''
}) => {
  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'portrait':
        return 'aspect-[3/4]';
      case 'square':
        return 'aspect-square';
      case 'wide':
        return 'aspect-[21/9]';
      case 'video':
      default:
        return 'aspect-video';
    }
  };

  return (
    <div 
      className={`relative w-full ${getAspectClass()} rounded-xl border border-dashed border-neutral-700/80 bg-neutral-900/50 hover:bg-neutral-900/70 transition-all flex flex-col items-center justify-center p-6 text-center group ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
        <UploadCloud className="w-6 h-6" />
      </div>

      <div className="space-y-1 max-w-xs">
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-neutral-300 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>{label}</span>
        </div>
        {dimensions && (
          <p className="text-[11px] font-mono text-neutral-300 font-semibold">
            {dimensions}
          </p>
        )}
        {hint && (
          <p className="text-xs text-neutral-300 leading-relaxed pt-1">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
};
