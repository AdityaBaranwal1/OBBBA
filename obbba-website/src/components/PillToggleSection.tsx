'use client';

import React, { useState, useRef, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────
// Custom hook for responsive behavior: detects mobile viewport
// Returns true when screen width is ≤ 768px (tablet/mobile breakpoint)
// ─────────────────────────────────────────────────────────────────
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// ─────────────────────────────────────────────────────────────────
// Topic definitions with semantic colors and accessibility labels
// Each topic has a unique key, human-readable label, and brand color
// ─────────────────────────────────────────────────────────────────
const TOPICS = [
  { key: 'gdp', label: 'GDP & Growth', color: 'var(--brand-blue)', description: 'Economic growth and GDP impacts' },
  { key: 'snap', label: 'SNAP', color: 'var(--accent-green)', description: 'Nutrition assistance program changes' },
  { key: 'health', label: 'Healthcare', color: 'var(--accent-red)', description: 'Medicaid, Medicare, and ACA modifications' },
  { key: 'edu', label: 'Education', color: 'var(--brand-blue)', description: 'Student loans and education funding' },
  { key: 'env', label: 'Environment', color: 'var(--accent-green)', description: 'Climate and environmental policy' },
  { key: 'finance', label: 'Finance', color: 'var(--accent-purple)', description: 'Financial regulation and consumer protection' },
  { key: 'imm', label: 'Immigration', color: 'var(--accent-red)', description: 'Immigration fees and border policies' },
];

// ─────────────────────────────────────────────────────────────────
// Animation type definitions for section removal effects
// Each animation provides a different visual experience for removing sections
// ─────────────────────────────────────────────────────────────────
// type AnimationType = 'fade' | 'slide' | 'scale' | 'dissolve' | 'shimmer' | 'none';

// ─────────────────────────────────────────────────────────────────
// Animation configuration with timing and easing
// Each animation has specific duration and easing for smooth transitions
// ─────────────────────────────────────────────────────────────────
// const ANIMATION_CONFIG = {
//   fade: { duration: 300, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
//   slide: { duration: 400, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
//   scale: { duration: 350, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' },
//   dissolve: { duration: 500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
//   shimmer: { duration: 600, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
//   none: { duration: 0, easing: 'linear' }
// };

// ─────────────────────────────────────────────────────────────────
// Section Card Component with Enhanced Animations
// Handles insertion, removal, and accessibility for each content panel
// ─────────────────────────────────────────────────────────────────
function SectionCard({ 
  color, 
  removing, 
  label, 
  children, 
  isNew, 
  panelId, 
  animationState, // 'entering' | 'exiting' | ''
  accentColor,
  accentKey
}: { 
  color: string; 
  removing: boolean; 
  label: string; 
  children: React.ReactNode; 
  isNew?: boolean;
  panelId: string;
  animationState: string;
  accentColor: string;
  accentKey: string;
}) {
  // Why: Wrap each panel in a .detail-card for animation and accessibility
  return (
    <div
      id={panelId}
      role="region"
      aria-label={`${label} impact details`}
      className={`detail-card relative rounded-xl shadow-md border-l-4 flex flex-col gap-2 ${animationState}`}
      data-accent={accentKey}
      style={{ borderColor: color, overflow: 'hidden', transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s' }}
    >
      <div className="panel-content" style={{ padding: '2rem 1.5rem' }}>
        {children}
      </div>
    </div>
  );
}

// Helper to convert CSS var color to rgb for background tint
function hexToRgb(hex: string): string {
  // Accepts hex like #1F5EFF or var(--brand-blue)
  if (hex.startsWith('var')) {
    // fallback to blue
    return '31,94,255';
  }
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map((x: string) => x + x).join('');
  const num = parseInt(c, 16);
  return `${(num >> 16) & 255},${(num >> 8) & 255},${num & 255}`;
}

// ─────────────────────────────────────────────────────────────────
// Content for each section with semantic structure and accessibility
// Each section includes proper heading hierarchy and descriptive links
// ─────────────────────────────────────────────────────────────────
const SECTION_CONTENT = {
  gdp: (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-brand-blue mb-4">GDP & Economic Growth</h4>
      <ul className="space-y-4 text-base text-neutral-dark leading-relaxed">
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold text-sm min-w-[80px]">Short-Term:</span>
          <span>OBBBA's tax cut extensions provide a modest short-term boost to GDP (e.g., <span className="text-brand-blue font-semibold">+0.6%</span> in 2026 per <a href="https://taxpolicycenter.org/taxvox/houses-one-big-beautiful-bill-modestly-boosts-short-term-growth-hurts-long-term-outlook" className="underline hover:text-brand-blue transition-colors" target="_blank" rel="noopener noreferrer">Tax Policy Center</a>), but these gains fade as higher debt and interest rates offset the stimulus.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold text-sm min-w-[80px]">Long-Term:</span>
          <span>Most independent analyses (<a href="https://www.cbo.gov/publication/61486" className="underline hover:text-brand-blue transition-colors" target="_blank" rel="noopener noreferrer">CBO</a>, <a href="https://www.crfb.org/blogs/how-much-would-obbba-pay-itself" className="underline hover:text-brand-blue transition-colors" target="_blank" rel="noopener noreferrer">CRFB</a>, <a href="https://taxfoundation.org/blog/infrastructure-spending-corporate-tax/" className="underline hover:text-brand-blue transition-colors" target="_blank" rel="noopener noreferrer">Tax Foundation</a>) project only a <span className="text-brand-blue font-semibold">0.4–0.8%</span> increase in GDP over decades, with most of the bill's cost not offset by growth. By 2049, higher debt could actually <span className="text-accent-red font-semibold">reduce GDP</span> below baseline.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-brand-blue font-bold text-sm min-w-[80px]">Expert Consensus:</span>
          <span>"Extraordinary growth" claims are not supported by mainstream models. Most experts agree the long-run economic impact is minor, while the debt impact is large. (<a href="https://www.brookings.edu/articles/dont-expect-much-growth-from-the-one-big-beautiful-bill/" className="underline hover:text-brand-blue transition-colors" target="_blank" rel="noopener noreferrer">Brookings</a>)</span>
        </li>
      </ul>
    </div>
  ),
  snap: (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-accent-green mb-4">Nutrition Assistance (SNAP)</h4>
      <ul className="space-y-4 text-base text-neutral-dark leading-relaxed">
        <li className="flex items-start gap-3">
          <span className="text-accent-green font-bold text-sm min-w-[120px]">Benefit Updates Frozen:</span>
          <span>SNAP benefits can only rise with inflation, not with food cost or diet changes, reducing future purchasing power. <span className="text-xs text-neutral-gray">(Sec. 10101, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H10101" className="underline hover:text-accent-green transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §10101</a>, <a href="https://www.cbpp.org/research/federal-budget/cut-and-tax-changes-affecting-low-income-people-from-reconciliation" className="underline hover:text-accent-green transition-colors" target="_blank" rel="noopener noreferrer">CBPP</a>)</span></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-accent-green font-bold text-sm min-w-[120px]">Stricter Work Requirements:</span>
          <span>Raises work age cutoff from 49 to 65 for "able-bodied adults without dependents." Many older low-income adults risk losing benefits. <span className="text-xs text-neutral-gray">(Sec. 10102, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H10102" className="underline hover:text-accent-green transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §10102</a>)</span></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-accent-green font-bold text-sm min-w-[120px]">Impact:</span>
          <span><span className="text-accent-red font-semibold">22.3 million families</span> face SNAP cuts; <span className="text-accent-red font-semibold">5.3 million</span> lose ≥ $25/month. Hardest-hit: families with children, working families, and those with a full-time worker. <span className="text-xs text-neutral-gray">(<a href="https://www.urban.org/research/publication/assessment-impact-hr1-snap-changes" className="underline hover:text-accent-green transition-colors" target="_blank" rel="noopener noreferrer">Urban Institute</a>)</span></span>
        </li>
      </ul>
    </div>
  ),
  health: (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-accent-red mb-4">Healthcare (Medicaid, Medicare, ACA)</h4>
      <ul className="space-y-4 text-base text-neutral-dark leading-relaxed">
        <li className="flex items-start gap-3">
          <span className="text-accent-red font-bold text-sm min-w-[100px]">Medicaid Cuts:</span>
          <span>Tighter eligibility, new work requirements, and cost-sharing push people off Medicaid. Seniors with modest home equity may lose nursing care coverage. <span className="text-xs text-neutral-gray">(Sec. 71108, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H71108" className="underline hover:text-accent-red transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §71108</a>)</span></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-accent-red font-bold text-sm min-w-[100px]">Medicare Restrictions:</span>
          <span>Raises eligibility age, weakens drug price negotiation, and could delay coverage for 65–66 year‑olds. <span className="text-xs text-neutral-gray">(Sec. 71201, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H71201" className="underline hover:text-accent-red transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §71201</a>)</span></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-accent-red font-bold text-sm min-w-[100px]">Impact:</span>
          <span><span className="text-accent-red font-semibold">16 million</span> could lose health coverage by 2034 due to Medicaid and ACA changes. <span className="text-xs text-neutral-gray">(<a href="https://www.cbpp.org/research/health/h-r-1-health-provisions" className="underline hover:text-accent-red transition-colors" target="_blank" rel="noopener noreferrer">CBPP</a>)</span></span>
        </li>
      </ul>
    </div>
  ),
  edu: (
    <>
      <h2 className="text-[1.75rem] font-semibold mb-2 text-brand-blue">Education</h2>
      <h3 className="text-[1.25rem] font-medium mb-4 text-neutral-dark">Student Loans & Aid</h3>
      <div className="detail-grid">
        <span className="label text-brand-blue">Loan Caps & PLUS Loan Elimination:</span>
        <span className="description">New borrowing limits and end of PLUS loans reduce access to education financing, especially for grad students and parents. <span className="text-xs text-neutral-gray">(Sec. 81001, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H81001" className="underline hover:text-brand-blue transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §81001</a>)</span></span>
        <span className="label text-brand-blue">Tougher Repayment Terms:</span>
        <span className="description">Less generous income-driven repayment, fewer deferments, and capped forbearance make repayment harder. <span className="text-xs text-neutral-gray">(Sec. 82001+, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H82001" className="underline hover:text-brand-blue transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §82001</a>)</span></span>
        <span className="label text-brand-blue">Impact:</span>
        <span className="description">Higher monthly payments, less safety net, and reduced access to higher education for many. <span className="text-xs text-neutral-gray">(<a href="https://www.urban.org/research/publication/assessment-impact-hr1-snap-changes" className="underline hover:text-brand-blue transition-colors" target="_blank" rel="noopener noreferrer">Urban Institute</a>)</span></span>
      </div>
    </>
  ),
  env: (
    <>
      <h2 className="text-[1.75rem] font-semibold mb-2 text-accent-green">Environment</h2>
      <h3 className="text-[1.25rem] font-medium mb-4 text-neutral-dark">Environment & Climate</h3>
      <div className="detail-grid">
        <span className="label text-accent-green">Cuts to Clean Energy & Conservation:</span>
        <span className="description">Repeals funding for clean energy, electric vehicles, and conservation projects. <span className="text-xs text-neutral-gray">(Sec. 60001+, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H60001" className="underline hover:text-accent-green transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §60001</a>)</span></span>
        <span className="label text-accent-green">Environmental Justice Funds Eliminated:</span>
        <span className="description">Ends grants for pollution reduction in disadvantaged communities. <span className="text-xs text-neutral-gray">(Sec. 60016, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H60016" className="underline hover:text-accent-green transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §60016</a>)</span></span>
        <span className="label text-accent-green">Impact:</span>
        <span className="description">Fewer upgrades for public housing, parks, and clean air; higher emissions and pollution-related health costs. <span className="text-xs text-neutral-gray">(<a href="https://www.brookings.edu/articles/dont-expect-much-growth-from-the-one-big-beautiful-bill/" className="underline hover:text-accent-green transition-colors" target="_blank" rel="noopener noreferrer">Brookings</a>)</span></span>
      </div>
    </>
  ),
  finance: (
    <>
      <h2 className="text-[1.75rem] font-semibold mb-2 text-accent-purple">Finance</h2>
      <h3 className="text-[1.25rem] font-medium mb-4 text-neutral-dark">Financial Regulation & Consumer Protection</h3>
      <div className="detail-grid">
        <span className="label text-accent-purple">CFPB Budget Slashed:</span>
        <span className="description">Cuts Consumer Financial Protection Bureau funding by ~50%, reducing oversight of banks, lenders, and predatory practices. <span className="text-xs text-neutral-gray">(Sec. 30001, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H30001" className="underline hover:text-accent-purple transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §30001</a>)</span></span>
        <span className="label text-accent-purple">SEC Reserve Fund Eliminated:</span>
        <span className="description">Slows tech upgrades and market oversight. <span className="text-xs text-neutral-gray">(Sec. 30003, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H30003" className="underline hover:text-accent-purple transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §30003</a>)</span></span>
        <span className="label text-accent-purple">Impact:</span>
        <span className="description">Weaker consumer protections and less market oversight. <span className="text-xs text-neutral-gray">(<a href="https://www.brookings.edu/articles/dont-expect-much-growth-from-the-one-big-beautiful-bill/" className="underline hover:text-accent-purple transition-colors" target="_blank" rel="noopener noreferrer">Brookings</a>)</span></span>
      </div>
    </>
  ),
  imm: (
    <div className="space-y-6">
      <h4 className="text-xl font-semibold text-accent-red mb-4">Immigration & Border-Related Fees</h4>
      <ul className="space-y-4 text-base text-neutral-dark leading-relaxed">
        <li className="flex items-start gap-3">
          <span className="text-accent-red font-bold text-sm min-w-[120px]">New Application Fees:</span>
          <span>Adds/raises fees for asylum, work permits, humanitarian parole, and more. <span className="text-xs text-neutral-gray">(Sec. 100002+, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H100002" className="underline hover:text-accent-red transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §100002</a>)</span></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-accent-red font-bold text-sm min-w-[120px]">Remittance Tax:</span>
          <span>New excise tax on money sent abroad, raising costs for immigrants and their families. <span className="text-xs text-neutral-gray">(Sec. 70604, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H70604" className="underline hover:text-accent-red transition-colors" target="_blank" rel="noopener noreferrer">H.R.1 §70604</a>)</span></span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-accent-red font-bold text-sm min-w-[120px]">Impact:</span>
          <span>Higher costs for legal immigration, work, and family support. <span className="text-xs text-neutral-gray">(<a href="https://www.urban.org/research/publication/assessment-impact-hr1-snap-changes" className="underline hover:text-accent-red transition-colors" target="_blank" rel="noopener noreferrer">Urban Institute</a>)</span></span>
        </li>
      </ul>
    </div>
  ),
};

// ─────────────────────────────────────────────────────────────────
// Main PillToggleSection Component
// Implements responsive accordion behavior, enhanced animations, and accessibility
// ─────────────────────────────────────────────────────────────────
export default function PillToggleSection() {
  // Why: State management for responsive accordion and animation
  const isMobile = useMediaQuery('(max-width: 768px)');
  // On mobile: only one open panel (openPanelId), on desktop: multiple (selected)
  const [selected, setSelected] = useState<string[]>([]);
  const [openPanelId, setOpenPanelId] = useState<string | null>(null); // for mobile
  const [removing, setRemoving] = useState<string | null>(null);
  const [entering, setEntering] = useState<string | null>(null);
  const [shake, setShake] = useState(false);
  const [ariaMsg, setAriaMsg] = useState('');
  const animationTimeout = useRef<NodeJS.Timeout | null>(null);

  // Why: Handle pill toggle with responsive logic and animation state
  function handleToggle(key: string) {
    const topic = TOPICS.find(t => t.key === key);
    if (isMobile) {
      // Mobile: only one open at a time
      if (openPanelId === key) {
        setOpenPanelId(null);
        setAriaMsg(`${topic?.label} section closed`);
      } else {
        setOpenPanelId(key);
        setAriaMsg(`${topic?.label} section opened`);
      }
      return;
    }
    // Desktop: multi-select with 4-panel limit
    if (selected.includes(key)) {
      setRemoving(key);
      setTimeout(() => {
        setSelected(selected.filter(k => k !== key));
        setRemoving(null);
        setAriaMsg(`${topic?.label} section closed`);
      }, 250);
      return;
    }
    if (selected.length >= 4) {
      if (removing) return;
      const oldest = selected[0];
      setRemoving(oldest);
      setShake(true);
      setTimeout(() => {
        setSelected(sel => [...sel.slice(1), key]);
        setRemoving(null);
        setShake(false);
        setEntering(key);
        setTimeout(() => setEntering(null), 400);
        setAriaMsg(`${TOPICS.find(t => t.key === oldest)?.label} section closed, ${topic?.label} section opened`);
      }, 250);
    } else {
      setSelected([...selected, key]);
      setEntering(key);
      setTimeout(() => setEntering(null), 400);
      setAriaMsg(`${topic?.label} section opened`);
    }
  }

  // Why: Keyboard navigation for accessibility
  function handleKeyDown(e: React.KeyboardEvent, key: string) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle(key);
    }
  }

  // Why: Pill bar styling with spacing tokens and shake animation
  const pillBarClass = `flex gap-3 overflow-x-auto py-4 px-4 bg-white rounded-xl shadow-md border border-gray-200 ${shake ? 'animate-shake' : ''}`;

  return (
    <div className="w-full max-w-4xl mx-auto my-12 pill-toggle-section" id="pill-toggle-section">
      {/* ARIA live region for screen reader announcements */}
      <div aria-live="polite" className="sr-only">{ariaMsg}</div>
      {/* Section Header with consistent typography */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-6">
          Key Impacts
        </h2>
        <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
          {isMobile 
            ? "Select a topic to explore how the OBBBA affects different areas."
            : "Select topics to explore how the OBBBA affects different areas. Choose up to 4 topics at once."
          }
        </p>
      </div>
      {/* Enhanced Pill Bar with accessibility */}
      <div 
        className={pillBarClass} 
        tabIndex={0} 
        role="toolbar"
        aria-label="Topic selection toolbar"
        aria-orientation="horizontal"
      >
        {TOPICS.map(topic => {
          const isSelected = isMobile ? openPanelId === topic.key : selected.includes(topic.key);
          // Assign unique color for each topic
          const pillBg = isSelected ? topic.color : '#f4f6fa';
          const pillBorder = isSelected ? topic.color : '#d1d5db';
          // Use white text for dark backgrounds, dark text otherwise
          const isDark = isSelected;
          const pillText = isDark ? '#fff' : '#1a2233';
          return (
            <button
              key={topic.key}
              className={`px-6 py-3 rounded-full border-2 text-base font-semibold focus:outline-none transition-all duration-200
                ${isSelected ? 'shadow-inner' : 'hover:scale-105 hover:shadow-lg'}
              `}
              style={{
                borderColor: pillBorder,
                background: pillBg,
                color: pillText,
                boxShadow: isSelected ? 'inset 0 2px 8px rgba(31,94,255,0.12)' : undefined,
              }}
              role="button"
              aria-pressed={isSelected}
              aria-expanded={isSelected}
              aria-controls={`panel-${topic.key}`}
              tabIndex={0}
              onClick={() => handleToggle(topic.key)}
              onKeyDown={(e) => handleKeyDown(e, topic.key)}
              aria-describedby={topic.description}
            >
              {topic.label}
            </button>
          );
        })}
      </div>
      {/* Selected Sections with enhanced animations */}
      <div 
        id="selected-sections" 
        className="mt-12 flex flex-col gap-8"
        role="main"
        aria-label="Selected topic details"
      >
        {isMobile
          ? openPanelId && (
              <SectionCard
                key={openPanelId}
                color={TOPICS.find(t => t.key === openPanelId)?.color || 'var(--brand-blue)'}
                removing={false}
                label={TOPICS.find(t => t.key === openPanelId)?.label || ''}
                isNew={true}
                panelId={`panel-${openPanelId}`}
                animationState={entering === openPanelId ? 'entering' : ''}
                accentColor={TOPICS.find(t => t.key === openPanelId)?.color || 'var(--brand-blue)'}
                accentKey={TOPICS.find(t => t.key === openPanelId)?.key || 'blue'}
              >
                {SECTION_CONTENT[openPanelId as keyof typeof SECTION_CONTENT]}
              </SectionCard>
            )
          : selected.map((key, index) => (
              <SectionCard
                key={key}
                color={TOPICS.find(t => t.key === key)?.color || 'var(--brand-blue)'}
                removing={removing === key}
                label={TOPICS.find(t => t.key === key)?.label || ''}
                isNew={entering === key}
                panelId={`panel-${key}`}
                animationState={removing === key ? 'exiting' : entering === key ? 'entering' : ''}
                accentColor={TOPICS.find(t => t.key === key)?.color || 'var(--brand-blue)'}
                accentKey={TOPICS.find(t => t.key === key)?.key || 'blue'}
              >
                {SECTION_CONTENT[key as keyof typeof SECTION_CONTENT]}
              </SectionCard>
            ))}
      </div>
    </div>
  );
} 