'use client';

import React from 'react';
import { Play, Sparkles } from 'lucide-react';

interface StoryModeButtonProps {
  variant: 'calculator' | 'generic';
  onClick: () => void;
  className?: string;
}

const StoryModeButton: React.FC<StoryModeButtonProps> = ({ variant, onClick, className = '' }) => {
  if (variant === 'calculator') {
    return (
      <button
        onClick={onClick}
        className={`
          inline-flex items-center gap-2 px-6 py-3 rounded-full
          bg-gradient-to-r from-purple-600 to-pink-600
          hover:from-purple-500 hover:to-pink-500
          text-white font-bold
          shadow-lg hover:shadow-xl
          transform hover:scale-105
          transition-all duration-200
          ${className}
        `}
      >
        <Play className="w-5 h-5" fill="currentColor" />
        See Your Story
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full
        glass border border-white/20
        hover:bg-white/10
        text-white font-semibold text-sm
        transform hover:scale-105
        transition-all duration-200
        ${className}
      `}
      aria-label="Explore OBBBA Story"
    >
      <Sparkles className="w-4 h-4" />
      <span className="hidden sm:inline">Explore</span>
    </button>
  );
};

export default StoryModeButton;
