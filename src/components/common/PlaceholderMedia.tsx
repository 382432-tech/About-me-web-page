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
      className={`relative w-full ${getAspectClass()} rounded-sm border border-dashed border-[hsl(var(--line))] bg-[hsl(var(--paper)/.55)] hover:bg-[hsl(var(--paper-deep)/.8)] transition-colors flex flex-col items-center justify-center p-6 text-center group ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-[hsl(var(--sage)/.45)] border border-[hsl(var(--sage))] flex items-center justify-center text-[hsl(var(--ink))] mb-3 group-hover:scale-110 transition-transform">
        <UploadCloud className="w-6 h-6" strokeWidth={1.5} />
      </div>

      <div className="space-y-1 max-w-xs">
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[hsl(var(--ink))] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--coral))]" strokeWidth={1.7} />
          <span>{label}</span>
        </div>
        {dimensions && (
          <p className="text-[11px] font-mono-custom text-[hsl(var(--ink-soft))] font-semibold">
            {dimensions}
          </p>
        )}
        {hint && (
          <p className="text-xs text-[hsl(var(--ink-soft))] leading-relaxed pt-1">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
};