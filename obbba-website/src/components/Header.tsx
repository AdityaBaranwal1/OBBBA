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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
        }}
      >
        {/* Logo */}
        <div style={{ fontSize: '2.2rem', fontWeight: 300, letterSpacing: '0.05em', lineHeight: 1 }}>OBBBA</div>
        {/* Navigation */}
        <nav style={{ display: 'flex', gap: '2rem', fontSize: '1rem' }}>
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
          <button
            onClick={() => scrollToSection('code')}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit', padding: 0 }}
          >
            Code
          </button>
          <button
            onClick={() => scrollToSection('embed')}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', font: 'inherit', padding: 0 }}
          >
            Embed
          </button>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
} 