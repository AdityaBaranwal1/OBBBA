"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>("light");

  // On mount, read localStorage or system preference
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      // fall back to light mode as default
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const initial = prefersLight ? 'light' : 'light'; // Default to light
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }
  }, []);

  const toggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

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