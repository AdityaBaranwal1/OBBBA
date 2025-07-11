'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-gray' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-neutral-dark">
              OBBBA
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('pill-toggle-section')}
              className="text-neutral-gray hover:text-neutral-dark transition-colors duration-200 font-medium"
            >
              Key Impacts
            </button>
            <button
              onClick={() => scrollToSection('income-impact')}
              className="text-neutral-gray hover:text-neutral-dark transition-colors duration-200 font-medium"
            >
              Calculator
            </button>
            <button
              onClick={() => scrollToSection('code')}
              className="text-neutral-gray hover:text-neutral-dark transition-colors duration-200 font-medium"
            >
              Code
            </button>
            <button
              onClick={() => scrollToSection('embed')}
              className="text-neutral-gray hover:text-neutral-dark transition-colors duration-200 font-medium"
            >
              Embed
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-neutral-gray hover:text-neutral-dark">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 