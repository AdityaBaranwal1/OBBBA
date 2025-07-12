'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled 
        ? 'bg-white border-b border-gray-200' 
        : 'bg-transparent'
    }`} style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          height: 'clamp(56px, 8vh, 72px)',
        }}
      >
        {/* Logo */}
        <div style={{ 
          fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', 
          fontWeight: 300, 
          letterSpacing: '0.05em', 
          lineHeight: 1 
        }}>
          OBBBA
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex" style={{ 
          gap: 'clamp(1rem, 3vw, 2rem)', 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)'
        }}>
          <button
            onClick={() => scrollToSection('pill-toggle-section')}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit', padding: 0 }}
          >
            Key Impacts
          </button>
          <button
            onClick={() => scrollToSection('income-impact')}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit', padding: 0 }}
          >
            Calculator
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile menu button - visible only on small screens */}
          <button 
            className="md:hidden"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: 'var(--surface-glass)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            aria-label="Toggle mobile menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 