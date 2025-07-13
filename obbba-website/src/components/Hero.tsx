'use client';

import { useSmoothScroll, useScrollEffects } from '../hooks/useScrollEffects';

export default function Hero() {
  const { scrollToElement } = useSmoothScroll();
  
  // Initialize scroll effects
  useScrollEffects();

  const scrollToDetails = () => {
    scrollToElement('pill-toggle-section', 80);
  };

  return (
    <section id="hero" className="section py-32 flex flex-col items-center justify-center text-center parallax-container relative overflow-hidden">
      {/* Parallax background */}
      <div className="hero-bg-parallax"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl floating-element"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-lg floating-element-delayed"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-400/10 rounded-full blur-lg floating-element"></div>
      
      <div className="container text-center relative z-10">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="mb-4 scroll-fade-in">
            One Big Beautiful Bill Act: Understanding the Real Costs
          </h1>

          {/* Subheading */}
          <p className="text-lg max-w-2xl mx-auto mb-8 scroll-fade-in-delay">
            A comprehensive analysis of the proposed legislation and its far-reaching implications 
            for our economy, society, and future generations.
          </p>

          {/* Call to Action */}
          <div className="scroll-scale-in">
            <button
              onClick={scrollToDetails}
              className="btn glass-scroll-effect"
            >
              Explore Key Impacts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 