"use client";

import React, { useState } from 'react';

const timelineEvents = [
  {
    year: '2025',
    label: 'Enactment',
    details: [
      'Law signed July 4, 2025.',
      'SNAP benefits are frozen (no cost-of-living boost beyond CPI).',
      'Work rules for childless adults are toughened (applies up to age 65 instead of 55).',
      'Student loan aid is cut back immediately – for example, unemployment/economic hardship deferments end July 2025.'
    ],
    sources: [
      { label: 'taxfoundation.org', url: 'https://taxfoundation.org' },
      { label: 'congress.gov', url: 'https://congress.gov' }
    ]
  },
  {
    year: '2026',
    label: 'Medicaid & Loans',
    details: [
      'States must expand Medicaid by Jan 1, 2026 to keep enhanced matching funds (any non-expansion state loses those funds).',
      'In mid-2026 the student‐loan overhaul kicks in: no new subsidized undergraduate loans or graduate PLUS loans after July 1, 2026, and existing income-driven repayment plans are largely wiped out (only a basic standard and one income-based plan remain).',
      'At the same time ACA marketplaces tighten enrollment: e.g. income-verified enrollments only (no open SEP on demand) and coverage of gender-transition care is barred.'
    ],
    sources: [
      { label: 'congress.gov', url: 'https://congress.gov' }
    ]
  },
  {
    year: '2027',
    label: 'Medicaid Work Rules',
    details: [
      'Medicaid expansion enrollees now face work/community-service requirements to keep coverage. Starting Dec 31, 2026 (effectively early 2027), expansion‐population adults must work or volunteer ≥80 hours each month or lose Medicaid.',
      'States also begin twice-yearly eligibility checks for these enrollees (redeterminations every 6 months).',
      '(Meanwhile, all SNAP and ACA changes from 2025–26 remain in place.)'
    ],
    sources: [
      { label: 'congress.gov', url: 'https://congress.gov' }
    ]
  },
  {
    year: '2028',
    label: 'Tax Cliff',
    details: [
      'Most temporary tax cuts expire at end of 2028. For tax year 2029, items like exempting tips, overtime pay, auto-loan interest, and the extra senior deduction will no longer apply (so taxes on workers and retirees rise relative to 2028).',
      'Families also lose expanded child and dependent exemptions as those provisions sunset.',
      'On Medicaid, FY2028 brings new costs: states covering some undocumented enrollees see a 10% cut in enhanced match.',
      'States must also begin paying a larger share of SNAP costs under error-rate rules, further tightening budgets.'
    ],
    sources: [
      { label: 'taxfoundation.org', url: 'https://taxfoundation.org' },
      { label: 'congress.gov', url: 'https://congress.gov' }
    ]
  },
  {
    year: '2033–2034',
    label: 'Full Sunset',
    details: [
      'By FY2033/34 all OBBBA provisions end. The tax code fully reverts (all 2017–25 tax hikes come back), and ACA funding is cut back.',
      'One analysis projects ~11.8 million more Americans will be uninsured by 2034 due to the ACA/Medicaid rollbacks.',
      'Any temporary energy or EV credits have lapsed, so individuals lose those subsidies (raising average energy and auto costs).'
    ],
    sources: [
      { label: 'factcheck.org', url: 'https://factcheck.org' },
      { label: 'crfb.org', url: 'https://crfb.org' }
    ]
  }
];

export default function TimelineImpact() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="timeline-impact" className="section">
      <div className="container">
        <h2 className="mb-8">One Big Beautiful Bill Act – Timeline of Key Individual Impacts</h2>
        <div className="relative w-full" style={{ maxWidth: 700, margin: '0 auto' }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', top: 40, left: 0, right: 0, height: 6, background: '#e5e5e5', borderRadius: 3, zIndex: 1 }} />
          
          {/* Dots */}
          {timelineEvents.map((event, idx) => {
            const left = (idx / (timelineEvents.length - 1)) * 100;
            const isActive = activeIdx === idx;
            return (
              <div
                key={event.year}
                style={{ position: 'absolute', left: `calc(${left}% - 12px)`, top: 28, zIndex: 2, cursor: 'pointer' }}
                onClick={() => setActiveIdx(idx === activeIdx ? null : idx)}
              >
                <div style={{
                  width: 24, height: 24, borderRadius: 12,
                  background: isActive ? 'var(--accent, #2563eb)' : '#fff',
                  border: isActive ? '3px solid var(--accent, #2563eb)' : '2px solid #000',
                  boxShadow: isActive ? '0 0 0 4px var(--accent-glow, #3b82f6)' : undefined,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isActive ? 'scale(1.1)' : 'scale(1)',
                }} />
                <div style={{ 
                  textAlign: 'center', 
                  marginTop: 8, 
                  fontWeight: 500, 
                  fontSize: 14,
                  transition: 'color 0.3s ease',
                  color: isActive ? 'var(--accent, #2563eb)' : 'inherit'
                }}>
                  {event.year}
                </div>
              </div>
            );
          })}
          
          {/* Expanded content area - pushes down other content */}
          <div style={{ 
            marginTop: 80,
            minHeight: activeIdx !== null ? 'auto' : 0,
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: activeIdx !== null ? 1 : 0,
            transform: activeIdx !== null ? 'translateY(0)' : 'translateY(-20px)',
          }}>
            {activeIdx !== null && (
              <div className="glass" style={{
                padding: 24,
                borderRadius: 16,
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(14px) saturate(150%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                animation: 'popIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <div style={{ 
                  fontWeight: 600, 
                  marginBottom: 16, 
                  fontSize: 18,
                  color: 'var(--accent, #2563eb)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}>
                  <span style={{
                    background: 'var(--accent, #2563eb)',
                    color: 'white',
                    borderRadius: '12px',
                    minWidth: 44,
                    minHeight: 32,
                    padding: '4px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.1,
                    textAlign: 'center',
                    whiteSpace: 'pre-line',
                    boxSizing: 'border-box',
                  }}>
                    {timelineEvents[activeIdx].year}
                  </span>
                  {timelineEvents[activeIdx].label}
                </div>
                <ul style={{ 
                  fontSize: 15, 
                  margin: 0, 
                  padding: 0, 
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12
                }}>
                  {timelineEvents[activeIdx].details.map((d, i) => (
                    <li key={i} style={{ 
                      marginBottom: 0,
                      paddingLeft: 20,
                      position: 'relative',
                      lineHeight: 1.6
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: 8,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--accent, #2563eb)'
                      }} />
                      {d}
                    </li>
                  ))}
                </ul>
                <div style={{ 
                  marginTop: 20, 
                  fontSize: 13, 
                  color: '#666', 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 12,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <span style={{ fontWeight: 500, color: '#888' }}>Sources:</span>
                  {timelineEvents[activeIdx].sources.map((src, i) => (
                    <a 
                      key={i} 
                      href={src.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        textDecoration: 'underline',
                        color: 'var(--accent, #2563eb)',
                        transition: 'opacity 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      {src.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes popIn {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
} 