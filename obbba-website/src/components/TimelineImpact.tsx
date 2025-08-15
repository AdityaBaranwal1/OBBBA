'use client';

import React, { useState } from 'react';

const timelineEvents = [
  {
    year: '2025',
    label: 'College Aid & SNAP Changes',
    details: [
      "**1 July 2025:** More students qualify for Pell Grants—any U.S. college that's part of an official association now counts (so more low-income folks get free tuition)",
      "**1 July 2025:** New loans lose safety net—grads and undergrads taking out federal loans can't pause payments for job loss or hardship (you get just 9 months of forbearance every two years)",
      '**1 Oct 2025:** Food-stamp amounts stop growing—instead of automatically rising with food prices, benefit levels stick where they are and can only budge if CPI (overall inflation) goes up',
      '**1 Oct 2025:** Must work longer to qualify—healthy, childless adults now must clock work or volunteering up to age 65 (not 60) to keep their SNAP cards',
    ],
    sources: [
      {
        label: 'Bill text (p.145)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=145',
      },
      {
        label: 'Bill text (p.16)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=16',
      },
      {
        label: 'Bill text (p.24)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=24',
      },
    ],
  },
  {
    year: '2026',
    label: 'Family Taxes & Key Deductions',
    details: [
      "**1 Jan 2026:** Child Tax Credit trimmed—you'll get $2,500 per kid for 2025 & '26, but it falls back to $2,000 in 2028",
      '**1 Jan 2026:** "Pease" deduction returns—if you earn a lot, your itemized deductions get capped again, so high-earners owe more tax starting in 2026',
      '**1 Jan 2026:** ABLE accounts & 529 rollovers—you can move college-savings money into disability savings accounts; all those old tax breaks stay forever',
      "**1 Jan 2026:** Mortgage-interest & AMT stay put—the $750,000 loan limit, the $10,000 state/local tax cap, and Alternative Minimum Tax rules don't expire anymore",
    ],
    sources: [
      {
        label: 'Bill text (p.660)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=660',
      },
      {
        label: 'Bill text (p.667)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=667',
      },
      {
        label: 'Bill text (p.673)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=673',
      },
      {
        label: 'Bill text (p.675)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=675',
      },
    ],
  },
  {
    year: '2026-2028',
    label: 'Medicaid & Healthcare Changes',
    details: [
      "**1 Oct 2026:** No federal funds for immigrants without verified citizenship—states can't use new Medicaid/CHIP money for people whose legal status isn't fully confirmed",
      '**1 Oct 2027:** States covering certain immigrants pay more—for any state still using Medicaid on undocumented or non-qualified adults, the 90% federal subsidy drops to 80%',
      "**1 Jan 2028:** Home equity unlock—you can now tap up to $500,000 of your home's equity (indexed each year) for long-term care without losing Medicaid eligibility",
      "**1 Oct 2028:** Thrifty Food Plan gets a check-up—USDA can look at our eating costs every five years (first chance is 10/1/28) but can't increase benefit levels except by general inflation",
    ],
    sources: [
      {
        label: 'Bill text (p.301)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=301',
      },
      {
        label: 'Bill text (p.307)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=307',
      },
      {
        label: 'Bill text (p.299)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=299',
      },
      {
        label: 'Bill text (p.16)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=16',
      },
    ],
  },
  {
    year: '2029-2030',
    label: 'SNAP Changes & Program Sunsets',
    details: [
      '**1 Oct 2029:** States face bigger SNAP admin bills if mistakes > 6%—once your payment-error rate is that high, the feds pick up less of the food-stamp cost',
      '**30 Sep 2029:** Strategic Petroleum Reserve rebuild money runs out—all the FY 2025 cleanup & purchase dollars for SPR expire, so no further DOE payments afterward',
      '**1 Oct 2030:** No more SNAP waivers for childless adults—the exceptions (like for foster-care alumni up to age 24) all end, so those groups must meet work rules again',
    ],
    sources: [
      {
        label: 'Bill text (p.296)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=296',
      },
      {
        label: 'Bill text (p.265)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=265',
      },
      {
        label: 'Bill text (p.19)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=19',
      },
    ],
  },
  {
    year: '2034',
    label: 'Full OBBBA Sunset',
    details: [
      '**30 Sep 2034:** Everything reverts to pre-2017 law—all the temporary tax cuts & credits disappear, SNAP and Medicaid roll back to their old rules, and ACA funding drops back to baseline',
    ],
    sources: [
      {
        label: 'Bill text (p.137)',
        url: 'https://www.govinfo.gov/content/pkg/BILLS-119hr1eh/pdf/BILLS-119hr1eh.pdf#page=137',
      },
    ],
  },
];

export default function TimelineImpact() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="timeline-impact" className="section">
      <div className="container">
        <h2 className="mb-8">
          One Big Beautiful Bill Act – Timeline of Key Implementation Phases
        </h2>
        <div
          className="relative w-full"
          style={{ maxWidth: 700, margin: '0 auto' }}
        >
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              top: 40,
              left: 0,
              right: 0,
              height: 6,
              background: '#e5e5e5',
              borderRadius: 3,
              zIndex: 1,
            }}
          />

          {/* Dots */}
          {timelineEvents.map((event, idx) => {
            const left = (idx / (timelineEvents.length - 1)) * 100;
            const isActive = activeIdx === idx;
            return (
              <button
                key={event.year}
                type="button"
                aria-label={`${event.year} ${event.label}`}
                aria-current={isActive ? 'step' : undefined}
                style={{
                  position: 'absolute',
                  left: `calc(${left}% - 12px)`,
                  top: 28,
                  zIndex: 2,
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                }}
                onClick={() => setActiveIdx(idx === activeIdx ? null : idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIdx(idx === activeIdx ? null : idx);
                  }
                }}
                className="focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-full"
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    background: isActive ? 'var(--accent, #2563eb)' : '#fff',
                    border: isActive
                      ? '3px solid var(--accent, #2563eb)'
                      : '2px solid #000',
                    boxShadow: isActive
                      ? '0 0 0 4px var(--accent-glow, #3b82f6)'
                      : undefined,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: 8,
                    fontWeight: 500,
                    fontSize: 14,
                    transition: 'color 0.3s ease',
                    color: isActive ? 'var(--accent, #2563eb)' : 'inherit',
                  }}
                >
                  {event.year}
                </div>
              </button>
            );
          })}

          {/* Expanded content area - pushes down other content */}
          <div
            style={{
              marginTop: 80,
              minHeight: activeIdx !== null ? 'auto' : 0,
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: activeIdx !== null ? 1 : 0,
              transform:
                activeIdx !== null ? 'translateY(0)' : 'translateY(-20px)',
            }}
          >
            {activeIdx !== null && (
              <div
                className="glass"
                style={{
                  padding: 24,
                  borderRadius: 16,
                  background: 'rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(14px) saturate(150%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                  animation: 'popIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    marginBottom: 16,
                    fontSize: 18,
                    color: 'var(--accent, #2563eb)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <span
                    style={{
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
                    }}
                  >
                    {timelineEvents[activeIdx].year}
                  </span>
                  {timelineEvents[activeIdx].label}
                </div>
                <ul
                  style={{
                    fontSize: 15,
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  {timelineEvents[activeIdx].details.map((d, i) => {
                    // Parse bold text in markdown format **text**
                    const parts = d.split(/(\*\*[^*]+\*\*)/);
                    return (
                      <li
                        key={i}
                        style={{
                          marginBottom: 0,
                          paddingLeft: 20,
                          position: 'relative',
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 8,
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: 'var(--accent, #2563eb)',
                          }}
                        />
                        {parts.map((part, idx) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return (
                              <strong key={idx} style={{ fontWeight: 600 }}>
                                {part.slice(2, -2)}
                              </strong>
                            );
                          }
                          return part;
                        })}
                      </li>
                    );
                  })}
                </ul>
                <div
                  style={{
                    marginTop: 20,
                    fontSize: 13,
                    color: '#666',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 12,
                    paddingTop: 16,
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <span style={{ fontWeight: 500, color: '#888' }}>
                    Sources:
                  </span>
                  {timelineEvents[activeIdx].sources.map((src, i) => (
                    <a
                      key={i}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'underline',
                        color: 'var(--accent, #2563eb)',
                        transition: 'opacity 0.2s ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = '0.7')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = '1')
                      }
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
