'use client';

import { useEffect, useState } from 'react';

interface ScrollEffectsOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollEffects(options: ScrollEffectsOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;

  useEffect(() => {
    // Scroll progress indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      scrollProgress.style.width = `${Math.min(progress, 100)}%`;
    };

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold,
      rootMargin,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // For section transitions
          if (entry.target.classList.contains('section-transition')) {
            entry.target.classList.add('visible');
          }
        }
      });
    }, observerOptions);

    // Observe all scroll animation elements
    const scrollElements = document.querySelectorAll([
      '.scroll-fade-in',
      '.scroll-fade-in-delay',
      '.scroll-scale-in', 
      '.scroll-slide-left',
      '.scroll-slide-right',
      '.section-transition'
    ].join(', '));

    scrollElements.forEach((el) => observer.observe(el));

    // Parallax effect
    let ticking = false;
    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5;
        const yPos = -(rate / 8);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Hero background parallax
      const heroParallax = document.querySelector('.hero-bg-parallax');
      if (heroParallax) {
        const rate = scrolled * -0.3;
        (heroParallax as HTMLElement).style.transform = `translateY(${rate}px)`;
      }

      ticking = false;
    };

    const requestParallaxUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    // Smooth scroll behavior
    const handleScroll = () => {
      updateScrollProgress();
      requestParallaxUpdate();
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    // Initial calls
    updateScrollProgress();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollProgress);
      observer.disconnect();
      if (scrollProgress.parentNode) {
        scrollProgress.parentNode.removeChild(scrollProgress);
      }
    };
  }, [threshold, rootMargin]);
}

// Hook for smooth scroll to element
export function useSmoothScroll() {
  const scrollToElement = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return { scrollToElement };
}

// Hook for scroll direction detection
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 5) {
        setScrollDirection(direction);
      }
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection, lastScrollY]);

  return scrollDirection;
}
