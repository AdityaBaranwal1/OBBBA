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
    title: 'Time Frame',
    description: 'FY 2025 ➜ 2034 (changes phase-in, fully felt by 2034).',
    source: 'CRFB',
    url: 'https://www.crfb.org/blogs/breaking-down-one-big-beautiful-bill',
    icon: '📅',
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
    <section className="section">
      <div className="container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', width: '100%' }}>
        {impacts.map((impact, idx) => (
          <div
            key={idx}
            className="impact-card glass-3d"
            tabIndex={0}
            style={{ cursor: 'pointer', outline: 'none' }}
          >
            <div style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 12 }}>
              <span style={{ marginRight: 8 }}>{impact.icon}</span>
              {impact.title}
            </div>
            <div style={{ fontSize: '1.05rem', opacity: 0.92, marginBottom: 12 }}>{impact.description}</div>
            <a href={impact.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent, #2563eb)', textDecoration: 'underline', fontWeight: 500 }}>
              {impact.source}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
} 