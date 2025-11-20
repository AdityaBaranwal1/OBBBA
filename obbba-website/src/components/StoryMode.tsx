'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import StoryCard from './StoryCard';
import TopicSelectionCard from './TopicSelectionCard';
import LeadCaptureCard from './LeadCaptureCard';
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
    const [allSlides, setAllSlides] = useState<Array<{ title: string; content: string | React.ReactNode; footer?: string; color?: string }>>([]);
    const [showTopicSelection, setShowTopicSelection] = useState(false);
    const [showLeadCapture, setShowLeadCapture] = useState(false);
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

    // Initialize slides based on mode
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(0);
            setShowTopicSelection(false);
            setShowLeadCapture(false);
            setSelectedTopics([]);
            
            if (mode === 'calculator' && income && bracket) {
                const initialSlides = generateCalculatorStory(income, bracket);
                setAllSlides(initialSlides);
            } else if (mode === 'generic') {
                const initialSlides = generateGenericStory();
                setAllSlides(initialSlides);
            }
            
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, mode, income, bracket]);

    const handleTopicsSelected = (topics: string[]) => {
        setSelectedTopics(topics);
        const topicSlides = generateTopicSlides(topics, bracket || null);
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
        // Check if we should show topic selection
        if (currentIndex === allSlides.length - 1 && !showTopicSelection && selectedTopics.length === 0) {
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
        if (showTopicSelection || showLeadCapture) {
            setShowTopicSelection(false);
            setShowLeadCapture(false);
            return;
        }
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const totalSteps = allSlides.length + (showTopicSelection ? 1 : 0) + (showLeadCapture ? 1 : 0);
    const currentStep = showTopicSelection || showLeadCapture ? currentIndex + 1 : currentIndex;

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
                                className={`flex-1 rounded-full transition-colors duration-300 ${
                                    idx <= currentStep ? 'bg-white' : 'bg-white/20'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Main Card Container */}
                    <div className="w-full max-w-md aspect-[9/16] max-h-[85vh] relative">
                        <AnimatePresence mode='wait'>
                            {showTopicSelection ? (
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
                        {(currentIndex > 0 || showTopicSelection || showLeadCapture) && (
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 text-white/50 hover:text-white hidden md:block"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                        )}
                        {!showTopicSelection && !showLeadCapture && currentIndex < allSlides.length - 1 && (
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
