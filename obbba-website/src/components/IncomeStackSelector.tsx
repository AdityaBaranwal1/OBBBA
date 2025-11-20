import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Check } from 'lucide-react';
import { incomeBrackets } from './incomeBrackets';
import { BracketData } from '@/utils/storySequenceBuilder';

interface IncomeStackSelectorProps {
  onSelect: (bracket: BracketData) => void;
  initialStackCount?: number;
}

const IncomeStackSelector: React.FC<IncomeStackSelectorProps> = ({
  onSelect,
  initialStackCount = 0,
}) => {
  const [stackCount, setStackCount] = useState(initialStackCount);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartY = useRef<number | null>(null);

  // Levels mapping to brackets
  const levels = [
    { bracket: incomeBrackets[0], label: "< $40,000" },
    { bracket: incomeBrackets[1], label: "$40,000 – $160,000" },
    { bracket: incomeBrackets[2], label: "$160,000 – $360,000" },
    { bracket: incomeBrackets[3], label: "$360,000 – $640,000" },
    { bracket: incomeBrackets[4], label: "$640,000+" },
  ];

  const currentLevel = stackCount > 0 ? levels[stackCount - 1] : null;

  const addBundle = () => {
    if (stackCount < 5 && !isAnimating) {
      setIsAnimating(true);
      setStackCount((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  const removeBundle = () => {
    if (stackCount > 0 && !isAnimating) {
      setIsAnimating(true);
      setStackCount((prev) => prev - 1);
      setTimeout(() => setIsAnimating(false), 400);
    }
  };

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current !== null) {
      e.preventDefault(); // Prevent scrolling while interacting
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (diff > 30) {
      addBundle(); // Swipe Up
    } else if (diff < -30) {
      removeBundle(); // Swipe Down
    }

    touchStartY.current = null;
  };

  // Keyboard handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') addBundle();
      if (e.key === 'ArrowDown') removeBundle();
      if (e.key === 'Enter' && stackCount > 0 && currentLevel) {
        onSelect(currentLevel.bracket);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stackCount, isAnimating, currentLevel, onSelect]);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-between py-8 select-none overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header / Instructions */}
      <div className="z-20 text-center space-y-2 mt-4">
        <h2 className="text-3xl font-bold text-white drop-shadow-md">
          {currentLevel ? currentLevel.label : 'Select Your Income'}
        </h2>
        <p className="text-white/60 text-sm animate-pulse">
          {stackCount === 0
            ? 'Swipe UP to stack cash'
            : stackCount === 5
              ? 'Maximum reached'
              : 'Swipe UP to add • DOWN to remove'}
        </p>
      </div>

      {/* 3D Stack Container */}
      <div className="flex-1 w-full flex items-center justify-center perspective-container relative">
        <div
          className="income-stack-base relative w-[200px] h-[200px]"
          style={{
            transform: `rotateX(60deg) rotateZ(-45deg) scale(${Math.max(
              0.6,
              1 - stackCount * 0.05,
            )})`,
          }}
        >
          {/* Base Plate Shadow */}
          <div className="absolute inset-0 bg-black/30 rounded-full blur-xl transform translate-z-[-20px]" />

          {/* Render Bundles */}
          <AnimatePresence>
            {Array.from({ length: stackCount }).map((_, index) => (
              <motion.div
                key={index}
                className="cash-bundle"
                initial={{ z: 200, opacity: 0, scale: 1.2 }}
                animate={{
                  z: index * 15,
                  opacity: 1,
                  scale: 1,
                  x: Math.random() * 4 - 2, // Slight random jitter
                  y: Math.random() * 4 - 2,
                }}
                exit={{ z: 100, y: -100, opacity: 0, scale: 0.8 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  mass: 1,
                }}
                style={{
                  bottom: 0, // Base position, z-index handles stacking
                  zIndex: index + 1,
                }}
              >
                <div className="cash-bundle-badge">$</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Click Zones for Desktop */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 z-10 cursor-n-resize"
          onClick={addBundle}
          aria-label="Add bundle"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 z-10 cursor-s-resize"
          onClick={removeBundle}
          aria-label="Remove bundle"
        />
      </div>

      {/* Controls & Confirm */}
      <div className="z-20 flex flex-col items-center gap-6 mb-8 w-full px-6">
        {/* Manual Controls */}
        <div className="flex gap-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeBundle();
            }}
            disabled={stackCount === 0}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-all active:scale-95"
            aria-label="Decrease income"
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addBundle();
            }}
            disabled={stackCount === 5}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-all active:scale-95"
            aria-label="Increase income"
          >
            <ChevronUp className="w-8 h-8 text-white" />
          </button>
        </div>

        {/* Confirm Button */}
        <AnimatePresence>
          {stackCount > 0 && currentLevel && (
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(currentLevel.bracket);
              }}
              className="w-full max-w-xs bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-transform"
            >
              <span>Continue with {currentLevel.label}</span>
              <Check className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IncomeStackSelector;
