'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Heart, 
  DollarSign, 
  Baby, 
  Home, 
  Gem,
  Check
} from 'lucide-react';

interface TopicSelectionCardProps {
  onTopicsSelected: (topics: string[]) => void;
  onSkip: () => void;
}

const topics = [
  { id: 'snap', label: 'SNAP Benefits', icon: ShoppingBag, description: 'Food assistance programs' },
  { id: 'medicaid', label: 'Healthcare', icon: Heart, description: 'Medicaid & ACA coverage' },
  { id: 'taxes', label: 'Tax Changes', icon: DollarSign, description: 'Deductions & brackets' },
  { id: 'childcredits', label: 'Child Benefits', icon: Baby, description: 'Credits & bonuses' },
  { id: 'salt', label: 'SALT Deduction', icon: Home, description: 'Property tax relief' },
  { id: 'estate', label: 'Estate & Wealth', icon: Gem, description: 'High-earner benefits' },
];

const TopicSelectionCard: React.FC<TopicSelectionCardProps> = ({ onTopicsSelected, onSkip }) => {
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);

  const toggleTopic = (topicId: string) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleContinue = () => {
    if (selectedTopics.length > 0) {
      onTopicsSelected(selectedTopics);
    }
  };

  return (
    <motion.div
      className="flex flex-col h-full w-full glass text-white p-6 md:p-8 rounded-xl relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          What Matters Most to You?
        </h2>
        <p className="text-sm md:text-base opacity-80">
          Select topics to learn more (choose at least one)
        </p>
      </motion.div>

      <motion.div
        className="flex-1 grid grid-cols-2 gap-3 mb-6 overflow-y-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          const isSelected = selectedTopics.includes(topic.id);
          
          return (
            <motion.button
              key={topic.id}
              onClick={() => toggleTopic(topic.id)}
              className={`
                relative p-4 rounded-lg border-2 transition-all duration-200
                flex flex-col items-center justify-center gap-2 text-center
                ${isSelected 
                  ? 'border-blue-400 bg-blue-500/20' 
                  : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                }
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSelected && (
                <motion.div
                  className="absolute top-2 right-2 bg-blue-500 rounded-full p-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <Check className="w-3 h-3" />
                </motion.div>
              )}
              
              <Icon className="w-8 h-8 md:w-10 md:h-10" />
              <div>
                <div className="font-semibold text-sm md:text-base">{topic.label}</div>
                <div className="text-xs opacity-70 hidden md:block">{topic.description}</div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button
          onClick={handleContinue}
          disabled={selectedTopics.length === 0}
          className={`
            w-full py-3 md:py-4 px-6 rounded-full font-bold text-base md:text-lg
            transition-all duration-200
            ${selectedTopics.length > 0
              ? 'bg-blue-600 hover:bg-blue-500 text-white'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
            }
          `}
        >
          Continue {selectedTopics.length > 0 && `(${selectedTopics.length})`}
        </button>
        
        <button
          onClick={onSkip}
          className="w-full py-2 px-6 rounded-full font-medium text-sm
                     bg-transparent border border-white/20 text-white/70
                     hover:bg-white/10 hover:text-white transition-all duration-200"
        >
          Skip for now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TopicSelectionCard;
