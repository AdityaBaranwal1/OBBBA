'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

interface LeadCaptureCardProps {
  onSubmit: (data: { email: string; phone?: string; wantsTexts: boolean }) => void;
  onSkip: () => void;
}

const LeadCaptureCard: React.FC<LeadCaptureCardProps> = ({ onSubmit, onSkip }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [wantsTexts, setWantsTexts] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (wantsTexts && phone && !validatePhone(phone)) {
      setError('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - replace with actual endpoint later
    try {
      console.log('Lead capture:', { email, phone: wantsTexts ? phone : undefined, wantsTexts });
      
      // TODO: Replace with actual API call
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, phone: wantsTexts ? phone : undefined, wantsTexts })
      // });
      
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      
      onSubmit({ email, phone: wantsTexts ? phone : undefined, wantsTexts });
    } catch {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
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
      <div className="absolute top-0 left-0 -ml-16 -mt-16 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl" />
      
      <motion.div
        className="mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Stay Informed
        </h2>
        <p className="text-sm md:text-base opacity-80">
          Get updates about how OBBBA affects you and what you can do about it
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg
                     bg-white/10 border border-white/20
                     text-white placeholder-white/50
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-200"
            required
          />
        </div>

        {/* Phone Input (optional) */}
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone (optional)"
            className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg
                     bg-white/10 border border-white/20
                     text-white placeholder-white/50
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-200"
          />
        </div>

        {/* Text Updates Checkbox */}
        {phone && (
          <motion.label
            className="flex items-center gap-3 cursor-pointer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="checkbox"
              checked={wantsTexts}
              onChange={(e) => setWantsTexts(e.target.checked)}
              className="w-5 h-5 rounded border-white/20 bg-white/10
                       checked:bg-blue-600 checked:border-blue-600
                       focus:ring-2 focus:ring-blue-500 focus:ring-offset-0
                       transition-all duration-200"
            />
            <span className="text-sm">Get updates via text message</span>
          </motion.label>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}

        <div className="mt-auto pt-4 flex flex-col gap-3">
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !email}
            className="w-full py-3 md:py-4 px-6 rounded-full font-bold text-base md:text-lg
                     bg-blue-600 hover:bg-blue-500 text-white
                     disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed
                     flex items-center justify-center gap-2
                     transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Stay Informed
              </>
            )}
          </button>

          {/* Skip Button */}
          <button
            type="button"
            onClick={onSkip}
            disabled={isSubmitting}
            className="w-full py-2 px-6 rounded-full font-medium text-sm
                     bg-transparent border border-white/20 text-white/70
                     hover:bg-white/10 hover:text-white
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200"
          >
            Maybe Later
          </button>
        </div>

        <p className="text-xs opacity-60 text-center mt-2">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.form>
    </motion.div>
  );
};

export default LeadCaptureCard;
