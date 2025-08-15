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
    <section id="hero" className="section-hero flex flex-col items-center justify-center text-center parallax-container relative overflow-hidden">
      {/* Parallax background */}
      <div className="hero-bg-parallax"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl floating-element"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-lg floating-element-delayed"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-400/10 rounded-full blur-lg floating-element"></div>
      
      <div className="container text-center relative z-10">
        <div className="space-y-8">
          {/* Concise Main Headline for users */}
          <h1 className="mb-4 scroll-fade-in">
            OBBBA Impact Calculator 2025
          </h1>

          {/* Keyword-rich H2 for SEO, visually styled as subheading */}
          <h2 className="text-xl font-semibold text-blue-700 mb-2 scroll-fade-in-delay" style={{marginTop: '-0.5rem'}}>
            How Trump's One Big Beautiful Bill Will Affect Your Income
          </h2>

          {/* Improved subheading for clarity and trust */}
          <p className="text-lg max-w-2xl mx-auto mb-8 scroll-fade-in-delay">
            Instantly calculate your 2025 personal impact using official government data. Enter your income for fact-checked, personalized results from CBO and Tax Foundation reports.
          </p>

          {/* Call to Action - Centered Button */}
          <div className="scroll-scale-in flex justify-center">
            <button
              onClick={scrollToDetails}
              className="pill-btn pill-impact glass-scroll-effect flex items-center gap-2 px-6 py-2 text-base font-semibold shadow-lg"
              style={{ borderRadius: '2rem', background: 'linear-gradient(90deg, #3B82F6 60%, #8B5CF6 100%)', color: '#fff', boxShadow: '0 4px 24px rgba(59,130,246,0.25)' }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" opacity="0.15"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              Explore Key Impacts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 