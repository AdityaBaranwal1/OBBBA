"use client";

import React from 'react';

const impacts = [
  {
    title: 'People Affected',
    description: '22.3M families lose or shrink SNAP benefits.',
    source: 'National Low Income Housing Coalition',
    url: 'https://nlihc.org/resource/president-trump-signs-sweeping-reconciliation-bill-law-house-appropriators-aim-review-hud',
    icon: '🧑‍🤝‍🧑',
  },
  {
    title: 'GDP Growth',
    description: '+1.2% long-run boost (peaks in 2028).',
    source: 'Tax Foundation',
    url: 'https://taxfoundation.org/research/all/federal/big-beautiful-bill-senate-gop-tax-plan/',
    icon: '📈',
  },
  {
    title: 'Healthcare',
    description: '≈ 16 million could lose health insurance by 2034.',
    source: 'CBPP',
    url: 'https://www.cbpp.org/research/health/by-the-numbers-house-bill-takes-health-coverage-away-from-millions-of-people-and?utm_source=chatgpt.com',
    icon: '🩺',
  },
  {
    title: 'Deficit Hit',
    description: '≈ $3T added debt over the decade.',
    source: 'CRFB',
    url: 'https://www.crfb.org/blogs/breaking-down-one-big-beautiful-bill',
    icon: '💸',
  },
];

export default function KeyImpactCards() {
  return (
    <section className="section section-transition">
      <div className="container">
        <div className="grid-layout grid-4" style={{ width: '100%' }}>
          {impacts.map((impact, idx) => (
            <div
              key={idx}
              className={`impact-card-apple scroll-fade-in glass-scroll-effect animate-delay-${(idx + 1) * 100}`}
              tabIndex={0}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="impact-title">
                <span style={{ marginRight: 8 }}>{impact.icon}</span>
                {impact.title}
              </div>
              <div className="impact-desc">
                {impact.description}
              </div>
              <a 
                href={impact.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="impact-source"
              >
                {impact.source}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 