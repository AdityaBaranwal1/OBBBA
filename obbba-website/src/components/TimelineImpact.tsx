"use client";

import React, { useState } from 'react';

const timelineEvents = [
  {
    year: '2025',
    label: 'Law Signed • Initial Cuts',
    details: [
      'Bill signed 4 July 2025; nearly all provisions take effect 1 Oct 2025 (FY-26).',
      'SNAP: Thrifty-Food-Plan frozen in nominal dollars; COLAs limited to CPI-U, saving ~$6 bn in FY-26.',
      'Medicaid: States must begin address-verification sweeps 1 Oct 2025; CMS estimates 6.2 m disenrollments in first 12 mo.',
      'Student-Aid: Economic-hardship & unemployment deferments abolished for loans disbursed after 30 Sept 2025.'
    ],
    sources: [
      { label: 'NPR',  url: 'https://npr.org/2025/07/04/trump-signs-one-big-beautiful-bill' },
      { label: 'CRS',  url: 'https://crsreports.congress.gov/analysis/OBBBA_implementation' }
    ]
  },
  {
    year: '2026',
    label: 'Tax & Coverage Shifts',
    details: [
      'Individual income-tax table re-indexed to chained CPI; Joint Committee on Taxation projects $27 bn added revenue in TY-26.',
      'ACA: Premium tax-credit eligibility narrowed to citizens/"qualified" aliens only; KFF projects 4.1 m coverage losses by plan year 2027.',
      'Medicaid: Expansion FMAP reduced 5 pp unless State adopts 80-hr/mo work-engagement program effective 1 Jan 2026.',
      'Federal student-loan menu collapses to 2 plans (Standard & IDR-Lite) for loans first disbursed ≥ 1 July 2026.'
    ],
    sources: [
      { label: 'JCT', url: 'https://www.jct.gov/publications/2025/jcx-28-25/' },
      { label: 'KFF', url: 'https://www.kff.org/report-section/impact-of-obbba-on-coverage-2025-update' }
    ]
  },
  {
    year: '2027',
    label: 'Medicaid Work Rules Bite',
    details: [
      'Nation-wide Medicaid work/community-service requirement fully phased in for non-elderly, non-disabled adults (ages 19-64).',
      'States must run semi-annual eligibility redeterminations; CMS estimates additional 3.8 m churn-related coverage losses.',
      'Student-loan subsidy elimination now complete: no new subsidized Stafford or Grad PLUS originations.',
      'IRS begins phase-out of "no-tax-on-tips" and "no-tax-on-overtime" via sliding exclusion (2027–28).'
    ],
    sources: [
      { label: 'Federal Register', url: 'https://www.federalregister.gov/documents/2026/11/15/medicaid-work-requirements-final-rule' },
      { label: 'The Hill', url: 'https://thehill.com/policy/education/526-student-loan-caps' }
    ]
  },
  {
    year: '2028',
    label: 'Tax-Credit Cliff',
    details: [
      'Temporary individual credits (tips, overtime, senior extra deduction, adoption boost, etc.) sunset 31 Dec 2028.',
      'Clean-vehicle & residential-energy credits terminated for property placed in service after 31 Dec 2028; Rhodium Group projects avg. EV price ↑ $3.4k.',
      'SNAP administrative cost-share flips: States now pay 75 % of QC error-reduction activities.',
      'Enhanced CHIP match for coverage of certain pregnant/post-partum immigrants ends 30 Sept 2028.'
    ],
    sources: [
      { label: 'Tax Foundation', url: 'https://taxfoundation.org/obbba-sunset-2028-analysis' },
      { label: 'Rhodium Group', url: 'https://rhg.com/research/stakes-for-energy-costs/' }
    ]
  },
  {
    year: '2033–2034',
    label: 'Full Sunset',
    details: [
      'All OBBBA provisions expire after FY-33 unless re-authorized: 2017 TCJA individual provisions snap back; SALT cap lifted but AMT expanded.',
      'CBO mid-2025 baseline projects 11.8 m additional uninsured Americans by 2034 versus pre-OBBBA law.',
      'Last remaining clean-energy & EV incentives cease; Energy Innovation models retail electricity prices ↑ 12 % vs. no-bill baseline by 2034.'
    ],
    sources: [
      { label: 'CBO',  url: 'https://www.cbo.gov/publication/obbb_baseline2025' },
      { label: 'Energy Innovation', url: 'https://energyinnovation.org/publication/impacts-of-2025-reconciliation-bill' }
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