import React from 'react';
import { motion } from 'framer-motion';

interface StoryCardProps {
    title: string;
    content: React.ReactNode;
    footer?: string;
    color?: string;
    onNext?: () => void;
    isLast?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({
    title,
    content,
    footer,
    color = 'bg-blue-600',
    onNext,
    isLast,
}) => {
    return (
        <motion.div
            className={`flex flex-col h-full w-full ${color} text-white p-8 rounded-xl shadow-2xl relative overflow-hidden`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl" />

            <div className="flex-1 flex flex-col justify-center items-center text-center z-10">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {title}
                </motion.h2>

                <motion.div
                    className="text-xl md:text-2xl font-medium leading-relaxed whitespace-pre-line"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {typeof content === 'string' ? content : content}
                </motion.div>
            </div>

            {footer && (
                <motion.div
                    className="mt-auto pt-8 text-sm opacity-80 text-center z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {footer}
                </motion.div>
            )}

            {/* Tap hint / Navigation area */}
            <div
                className="absolute inset-0 z-20 cursor-pointer"
                onClick={onNext}
                aria-label={isLast ? 'Close story' : 'Next slide'}
            />

            {!isLast && (
                <div className="absolute bottom-4 right-4 text-white/50 text-xs animate-pulse pointer-events-none z-30">
                    Tap to continue
                </div>
            )}
            
            {/* Cancel/Exit hint at bottom left */}
            <div className="absolute bottom-4 left-4 text-white/40 text-xs pointer-events-none z-30">
                Press ESC or × to exit
            </div>
        </motion.div>
    );
};

export default StoryCard;
