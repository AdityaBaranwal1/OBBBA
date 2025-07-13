'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useScrollDirection } from '../hooks/useScrollEffects';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const navigationItems = [
    { label: 'Overview', id: 'hero' },
    { label: 'Key Impacts', id: 'pill-toggle-section' },
    { label: 'Timeline', id: 'timeline-impact' },
    { label: 'Calculator', id: 'income-impact' },
    { label: 'Distribution', id: 'distributional-impact' },
    { label: 'FAQ', id: 'faq-section' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl' 
          : 'bg-transparent'
      } ${
        scrollDirection === 'down' && isScrolled
          ? 'transform -translate-y-full'
          : 'transform translate-y-0'
      }`} style={{ 
        width: '100%',
        backdropFilter: isScrolled ? 'blur(30px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(30px)' : 'none',
        boxShadow: isScrolled ? '0 1px 0 rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.08)' : 'none'
      }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 4vw, 2rem)',
            height: 'clamp(68px, 12vh, 84px)', // Increased height for better mobile UX
          }}
        >
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            style={{ 
              fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', 
              fontWeight: 600, 
              letterSpacing: '0.05em', 
              lineHeight: 1,
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all 0.2s ease'
            }}
          >
            OBBBA
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex" style={{ 
            gap: 'clamp(1.5rem, 3vw, 2.5rem)', 
            fontSize: 'clamp(0.9rem, 2vw, 1rem)'
          }}>
            {navigationItems.slice(1, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-primary)', 
                  cursor: 'pointer', 
                  font: 'inherit', 
                  padding: '0.5rem 0',
                  fontWeight: 500,
                  transition: 'opacity 0.2s ease',
                  opacity: 0.8
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.opacity = '1'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.opacity = '0.8'}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center" style={{ gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
            {/* Desktop Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                background: 'var(--surface-glass)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(128,128,128,0.2)',
                borderRadius: '12px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                touchAction: 'manipulation'
              }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} strokeWidth={2} />
              ) : (
                <Menu size={24} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          style={{
            background: 'var(--surface-0)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            paddingTop: 'clamp(68px, 12vh, 84px)', // Account for header height
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          <nav style={{ 
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            {/* Theme Toggle in Mobile Menu */}
            <div style={{
              background: 'var(--surface-glass)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(128,128,128,0.2)',
              borderRadius: '16px',
              padding: '1rem 1.5rem',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  color: 'var(--text-primary)',
                  fontSize: '1.125rem',
                  fontWeight: 500
                }}>
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>

            {/* Navigation Items */}
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'var(--surface-glass)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(128,128,128,0.2)',
                  borderRadius: '16px',
                  padding: '1rem 1.5rem',
                  color: 'var(--text-primary)',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  touchAction: 'manipulation',
                  animation: `fadeInUp 0.3s ease-out ${(index + 1) * 0.1}s both` // Offset by 1 for theme toggle
                }}
                onTouchStart={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(0.95)';
                  target.style.background = 'var(--surface-1)';
                }}
                onTouchEnd={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'scale(1)';
                  target.style.background = 'var(--surface-glass)';
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
} 