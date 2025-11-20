'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import StoryCard from './StoryCard';
import TopicSelectionCard from './TopicSelectionCard';
import LeadCaptureCard from './LeadCaptureCard';
import IncomeStackSelector from './IncomeStackSelector';
import {
    generateCalculatorStory,
    generateGenericStory,
    generateTopicSlides,
    type BracketData
} from '@/utils/storySequenceBuilder';

interface StoryModeProps {
    isOpen: boolean;
    onClose: () => void;
    mode: 'calculator' | 'generic';
    income?: number;
    bracket?: BracketData;
}

const StoryMode: React.FC<StoryModeProps> = ({
    isOpen,
    onClose,
    mode,
    income,
    bracket,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [allSlides, setAllSlides] = useState<Array<{ title: string; content: string | React.ReactNode; footer?: string; color?: string; type?: string }>>([]);
    const [showTopicSelection, setShowTopicSelection] = useState(false);
    const [showLeadCapture, setShowLeadCapture] = useState(false);
    const [showIncomeSelection, setShowIncomeSelection] = useState(false);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [selectedIncomeBracket, setSelectedIncomeBracket] = useState<BracketData | null>(bracket || null);

    // Initialize slides based on mode
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
            setShowTopicSelection(false);
            setShowLeadCapture(false);
            setShowIncomeSelection(false);
            setSelectedTopics([]);

            if (mode === 'calculator' && income && bracket) {
                const initialSlides = generateCalculatorStory(income, bracket);
                setAllSlides(initialSlides);
                setSelectedIncomeBracket(bracket);
            } else if (mode === 'generic') {
                const initialSlides = generateGenericStory();
                setAllSlides(initialSlides);
                setSelectedIncomeBracket(null);
            }

            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, mode, income, bracket]);

    const handleIncomeSelected = (bracket: BracketData) => {
        setSelectedIncomeBracket(bracket);
        setShowIncomeSelection(false);

        // Generate personalized impact slides based on selected income
        const personalizedSlides = [
            {
                id: 'income-result',
                type: 'impact',
                title: 'Your Income Bracket',
                content: bracket.label.replace(/\s*\([^)]*\)/, ''),
                color: 'bg-gradient-to-br from-blue-700 to-indigo-800',
            },
            {
                id: 'years-1-2',
                type: 'impact',
                title: 'Years 1-2 Impact',
                content: `${bracket.impactPreSunset > 0 ? '+' : ''}$${Math.abs(bracket.impactPreSunset).toLocaleString()} per year`,
                footer: bracket.impactPreSunset > 0 ? 'Initial benefit period' : 'Immediate cuts begin',
                color: bracket.impactPreSunset > 0 ? 'bg-green-600' : 'bg-red-600',
            },
            {
                id: 'year-3-plus',
                type: 'impact',
                title: 'Year 3+ Impact',
                content: `${bracket.impactPostSunset > 0 ? '+' : ''}$${Math.abs(bracket.impactPostSunset).toLocaleString()} per year`,
                footer: bracket.impactPostSunset < bracket.impactPreSunset
                    ? `That's a drop of $${Math.abs(bracket.impactPreSunset - bracket.impactPostSunset).toLocaleString()}`
                    : 'Long-term impact',
                color: bracket.impactPostSunset > 0 ? 'bg-green-600' : 'bg-red-600',
            },
            {
                id: 'why',
                type: 'why',
                title: 'Why?',
                content: bracket.oneLineWhy,
                color: 'bg-gradient-to-br from-indigo-800 to-purple-900',
            },
        ];

        setAllSlides(prev => [...prev, ...personalizedSlides]);
        setCurrentIndex(currentIndex + 1);
    };

    const handleTopicsSelected = (topics: string[]) => {
        setSelectedTopics(topics);
        const topicSlides = generateTopicSlides(topics, selectedIncomeBracket);
        setAllSlides(prev => [...prev, ...topicSlides]);
        setShowTopicSelection(false);
        setCurrentIndex(currentIndex + 1);
    };

    const handleTopicSkip = () => {
        setShowTopicSelection(false);
        setCurrentIndex(currentIndex + 1);
    };

    const handleLeadSubmit = (data: { email: string; phone?: string; wantsTexts: boolean }) => {
        console.log('Lead captured:', data);
        setShowLeadCapture(false);
        setCurrentIndex(currentIndex + 1);
    };

    const handleLeadSkip = () => {
        setShowLeadCapture(false);
        setCurrentIndex(currentIndex + 1);
    };

    const nextSlide = () => {
        const currentSlide = allSlides[currentIndex];

        // Check if current slide is income selection
        if (currentSlide?.type === 'incomeSelection') {
            setShowIncomeSelection(true);
            return;
        }

        // Check if we should show topic selection
        if (currentIndex === allSlides.length - 1 && !showTopicSelection && selectedTopics.length === 0 && selectedIncomeBracket) {
            setShowTopicSelection(true);
            return;
        }

        // Check if we should show lead capture
        if (currentIndex === allSlides.length - 1 && !showLeadCapture && selectedTopics.length > 0) {
            setShowLeadCapture(true);
            return;
        }

        if (currentIndex < allSlides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            onClose();
        }
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (showTopicSelection || showLeadCapture || showIncomeSelection) {
            setShowTopicSelection(false);
            setShowLeadCapture(false);
            setShowIncomeSelection(false);
            return;
        }
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const totalSteps = allSlides.length + (showTopicSelection ? 1 : 0) + (showLeadCapture ? 1 : 0) + (showIncomeSelection ? 1 : 0);
    const currentStep = showTopicSelection || showLeadCapture || showIncomeSelection ? currentIndex + 1 : currentIndex;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 text-white/70 hover:text-white p-2 bg-black/20 rounded-full"
                    >
                        <X size={32} />
                    </button>

                    {/* Progress Bar */}
                    <div className="absolute top-4 left-4 right-16 flex gap-2 h-1.5 z-50">
                        {Array.from({ length: Math.max(totalSteps, 5) }).map((_, idx) => (
                            <div
                                key={idx}
                                className={`flex-1 rounded-full transition-colors duration-300 ${idx <= currentStep ? 'bg-white' : 'bg-white/20'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Main Card Container */}
                    <div className="w-full max-w-md aspect-[9/16] max-h-[85vh] relative">
                        <AnimatePresence mode='wait'>
                            {showIncomeSelection ? (
                                <motion.div
                                    key="income-selection"
                                    className="h-full w-full bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl shadow-2xl overflow-hidden"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -100, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <IncomeStackSelector onSelect={handleIncomeSelected} />
                                </motion.div>
                            ) : showTopicSelection ? (
                                <motion.div
                                    key="topic-selection"
                                    className="h-full w-full"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -100, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <TopicSelectionCard
                                        onTopicsSelected={handleTopicsSelected}
                                        onSkip={handleTopicSkip}
                                    />
                                </motion.div>
                            ) : showLeadCapture ? (
                                <motion.div
                                    key="lead-capture"
                                    className="h-full w-full"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -100, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <LeadCaptureCard
                                        onSubmit={handleLeadSubmit}
                                        onSkip={handleLeadSkip}
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key={currentIndex}
                                    className="h-full w-full"
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -100, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <StoryCard
                                        title={allSlides[currentIndex]?.title || ''}
                                        content={allSlides[currentIndex]?.content || ''}
                                        footer={allSlides[currentIndex]?.footer}
                                        color={allSlides[currentIndex]?.color}
                                        onNext={nextSlide}
                                        isLast={currentIndex === allSlides.length - 1 && selectedTopics.length > 0}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation Controls (Desktop mainly) */}
                        {(currentIndex > 0 || showTopicSelection || showLeadCapture || showIncomeSelection) && (
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 text-white/50 hover:text-white hidden md:block"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                        )}
                        {!showTopicSelection && !showLeadCapture && !showIncomeSelection && currentIndex < allSlides.length - 1 && (
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 text-white/50 hover:text-white hidden md:block"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StoryMode;
