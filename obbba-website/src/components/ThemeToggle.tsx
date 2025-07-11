"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>("dark");

  // On mount, read localStorage or system preference
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      // fall back to system
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const initial = prefersLight ? 'light' : 'dark';
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
      className="button"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0.4rem 1rem',
        background: 'var(--surface-glass)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 9999,
        fontSize: 14,
        color: 'var(--text-primary)'
      }}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
} 