"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(null);
  const [mounted, setMounted] = useState(false);

  // On mount, read localStorage and set theme
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      // Default to dark mode
      setTheme('dark');
      localStorage.setItem("theme", 'dark');
    }
  }, []);

  useEffect(() => {
    if (theme && mounted) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  const toggle = () => {
    if (!mounted) return;
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted || !theme) {
    return (
      <button
        style={{
          background: 'var(--surface-glass)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '12px',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          color: 'var(--text-primary)',
          visibility: 'hidden' // Hide until mounted
        }}
        disabled
      >
        <Moon size={20} />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark / light mode"
      className="theme-toggle-button"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '0.5rem 1rem',
        background: 'var(--surface-glass)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 9999,
        fontSize: 14,
        color: 'var(--text-primary)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        touchAction: 'manipulation',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        minHeight: '44px', // Better touch target for mobile
        minWidth: '88px' // Ensure button is wide enough for text
      }}
    >
      {theme === 'dark' ? (
        <Sun size={18} style={{ color: 'var(--text-primary)' }} />
      ) : (
        <Moon size={18} style={{ color: 'var(--text-primary)' }} />
      )}
      <span style={{ 
        fontSize: '14px', 
        fontWeight: 500,
        color: 'var(--text-primary)'
      }}>
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  );
} 