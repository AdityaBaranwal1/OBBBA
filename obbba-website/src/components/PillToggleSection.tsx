'use client';

import React, { useState } from 'react';

const TOPICS = [
  { key: 'gdp', label: 'GDP & Growth', description: 'Economic growth and GDP impacts', color: 'emerald' },
  { key: 'snap', label: 'SNAP', description: 'Nutrition assistance program changes', color: 'orange' },
  { key: 'health', label: 'Healthcare', description: 'Medicaid, Medicare, and ACA modifications', color: 'red' },
  { key: 'edu', label: 'Education', description: 'Student loans and education funding', color: 'purple' },
  { key: 'env', label: 'Environment', description: 'Climate and environmental policy', color: 'green' },
  { key: 'finance', label: 'Finance', description: 'Financial regulation and consumer protection', color: 'blue' },
  { key: 'imm', label: 'Immigration', description: 'Immigration fees and border policies', color: 'indigo' },
];

const SECTION_CONTENT = {
  gdp: (
    <div>
      <h3>GDP & Economic Growth</h3>
      <p><strong>Short-Term:</strong> OBBBA&rsquo;s tax cut extensions provide a modest short-term boost to GDP (+0.6% in 2026 per Tax Policy Center), but these gains fade as higher debt and interest rates offset the stimulus.</p>
      <p><strong>Long-Term:</strong> Most independent analyses (CBO, CRFB, Tax Foundation) project only a 0.4–0.8% increase in GDP over decades, with most of the bill&rsquo;s cost not offset by growth. By 2049, higher debt could actually reduce GDP below baseline.</p>
      <p><strong>Expert Consensus:</strong> &quot;Extraordinary growth&quot; claims are not supported by mainstream models. Most experts agree the long-run economic impact is minor, while the debt impact is large.</p>
    </div>
  ),
  snap: (
    <div>
      <h3>Nutrition Assistance (SNAP)</h3>
      <p><strong>Benefit Updates Frozen:</strong> SNAP benefits can only rise with inflation, not with food cost or diet changes, reducing future purchasing power.</p>
      <p><strong>Stricter Work Requirements:</strong> Raises work age cutoff from 49 to 65 for &ldquo;able-bodied adults without dependents.&rdquo; Many older low-income adults risk losing benefits.</p>
      <p><strong>Impact:</strong> 22.3 million families face SNAP cuts; 5.3 million lose ≥ $25/month. Hardest-hit: families with children, working families, and those with a full-time worker.</p>
    </div>
  ),
  health: (
    <div>
      <h3>Healthcare (Medicaid, Medicare, ACA)</h3>
      <p><strong>Medicaid Cuts:</strong> Tighter eligibility, new work requirements, and cost-sharing push people off Medicaid. Seniors with modest home equity may lose nursing care coverage.</p>
      <p><strong>Medicare Restrictions:</strong> Raises eligibility age, weakens drug price negotiation, and could delay coverage for 65–66 year‑olds.</p>
      <p><strong>Impact:</strong> 16 million could lose health coverage by 2034 due to Medicaid and ACA changes.</p>
    </div>
  ),
  edu: (
    <div>
      <h3>Education</h3>
      <p><strong>Loan Caps & PLUS Loan Elimination:</strong> New borrowing limits and end of PLUS loans reduce access to education financing, especially for grad students and parents.</p>
      <p><strong>Tougher Repayment Terms:</strong> Less generous income-driven repayment, fewer deferments, and capped forbearance make repayment harder.</p>
      <p><strong>Impact:</strong> Higher monthly payments, less safety net, and reduced access to higher education for many.</p>
    </div>
  ),
  env: (
    <div>
      <h3>Environment</h3>
      <p><strong>Cuts to Clean Energy & Conservation:</strong> Repeals funding for clean energy, electric vehicles, and conservation projects.</p>
      <p><strong>Environmental Justice Funds Eliminated:</strong> Ends grants for pollution reduction in disadvantaged communities.</p>
      <p><strong>Impact:</strong> Fewer upgrades for public housing, parks, and clean air; higher emissions and pollution-related health costs.</p>
    </div>
  ),
  finance: (
    <div>
      <h3>Finance</h3>
      <p><strong>CFPB Budget Slashed:</strong> Cuts Consumer Financial Protection Bureau funding by ~50%, reducing oversight of banks, lenders, and predatory practices.</p>
      <p><strong>SEC Reserve Fund Eliminated:</strong> Slows tech upgrades and market oversight.</p>
      <p><strong>Impact:</strong> Weaker consumer protections and less market oversight.</p>
    </div>
  ),
  imm: (
    <div>
      <h3>Immigration & Border-Related Fees</h3>
      <p><strong>New Application Fees:</strong> Adds/raises fees for asylum, work permits, humanitarian parole, and more.</p>
      <p><strong>Remittance Tax:</strong> New excise tax on money sent abroad, raising costs for immigrants and their families.</p>
      <p><strong>Impact:</strong> Higher costs for legal immigration, work, and family support.</p>
    </div>
  ),
};

export default function PillToggleSection() {
  const [selected, setSelected] = useState<string[]>([]); // Start with nothing selected

  const handleToggle = (key: string) => {
    setSelected(prev => {
      const newSelection = prev.includes(key) 
        ? prev.filter(k => k !== key)
        : [...prev, key];
      return newSelection;
    });
  };

  return (
    <section id="pill-toggle-section" className="section section-glassmorphism">
      <div className="container">
        {/* Enhanced Header with Glassmorphism */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Key Impacts
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore different aspects of the legislation by selecting topics below
          </p>
        </div>
        
        {/* Topic Pills with Color Pop */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {TOPICS.map(topic => {
            const isSelected = selected.includes(topic.key);
            return (
              <button
                key={topic.key}
                onClick={() => handleToggle(topic.key)}
                className={`pill-toggle ${isSelected ? `pill-active pill-${topic.color}` : 'pill-inactive'}`}
                data-selected={isSelected}
                data-color={isSelected ? topic.color : 'inactive'}
              >
                <span className="pill-label">{topic.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Sections */}
        <div className="space-y-6" style={{ width: '100%' }}>
          {selected.map(key => (
            <div key={key} className="impact-card-apple">
              {SECTION_CONTENT[key as keyof typeof SECTION_CONTENT]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 