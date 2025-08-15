import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#0B1220',
          card: 'rgba(255,255,255,0.08)',
          stroke: 'rgba(255,255,255,0.14)',
        },
        accent: {
          blue: '#3B82F6',
          teal: '#14B8A6',
          coral: '#F87171',
          amber: '#FBBF24',
        },
        text: { primary: '#E6EAF2', secondary: '#A9B4C0' },
      },
      boxShadow: {
        glass:
          '0 1px 0 0 rgba(255,255,255,0.15) inset, 0 8px 30px rgba(0,0,0,0.35)',
        glowBlue: '0 0 24px 4px rgba(59,130,246,0.35)',
        glowTeal: '0 0 24px 4px rgba(20,184,166,0.35)',
        glowCoral: '0 0 24px 4px rgba(248,113,113,0.35)',
      },
      backdropBlur: { xl: '20px' },
    },
  },
  plugins: [],
};

export default config;
