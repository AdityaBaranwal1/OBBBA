'use client';

import React from 'react';

const impactCategories = [
  {
    title: 'Economic Impacts of the Big Beautiful Bill',
    icon: '💰',
    impacts: [
      'GDP growth of +1.2% long-run boost (peaks in 2028)',
      'Approximately $3 trillion added to national debt over the decade',
      'Tax changes affecting different income brackets differently',
      'Federal spending reductions in various programs'
    ],
    source: 'Tax Foundation & CRFB Analysis'
  },
  {
    title: 'Healthcare Impacts',
    icon: '🏥',
    impacts: [
      'Approximately 16 million could lose health insurance by 2034',
      'Changes to Medicaid eligibility and coverage',
      'Modifications to healthcare subsidies and programs',
      'Impact on prescription drug costs and coverage'
    ],
    source: 'CBPP Healthcare Analysis'
  },
  {
    title: 'Social Program Impacts',
    icon: '🍽️',
    impacts: [
      '22.3 million families lose or see reduced SNAP benefits',
      'Changes to housing assistance programs',
      'Modifications to childcare and family support programs',
      'Impact on education funding and student aid'
    ],
    source: 'NLIHC & Social Policy Research'
  },
  {
    title: 'Timeline of Impacts',
    icon: '📅',
    impacts: [
      'FY 2025: Initial implementation begins',
      '2026-2028: Gradual phase-in of major provisions',
      '2028: Peak economic growth effects expected',
      '2034: Full implementation of all provisions'
    ],
    source: 'Congressional Budget Office'
  }
];

export default function ImpactsOverview() {
  return (
    <section className="section bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-6">
            What Are the Impacts of the Big Beautiful Bill?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding the comprehensive impacts of Trump's One Big Beautiful Bill across different sectors of the economy and society. 
            These impacts affect millions of Americans in various ways.
          </p>
        </div>

        {/* Impact Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {impactCategories.map((category, index) => (
            <div key={index} className="impact-card-apple bg-white">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3 mb-4">
                {category.impacts.map((impact, impactIndex) => (
                  <li key={impactIndex} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{impact}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-sm text-blue-600 font-medium border-t pt-3">
                Source: {category.source}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Calculate Your Personal Impact
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            These are the general impacts of the Big Beautiful Bill. Want to know exactly how it affects YOUR specific situation? 
            Use our free calculator to get personalized results based on your income and circumstances.
          </p>
          <button 
            onClick={() => {
              const calculator = document.getElementById('calculator-section');
              calculator?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Try the Impact Calculator
          </button>
        </div>
      </div>
    </section>
  );
}
