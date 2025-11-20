'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  /* ----------  NEW FAQs WITH HYPERLINKED SOURCES  ---------- */
  const faqs = [
    {
      question: 'What are the main impacts of the Big Beautiful Bill?',
      answer: `The Big Beautiful Bill has wide-ranging impacts including: economic effects (+1.2% GDP growth), healthcare changes (≈16M could lose insurance), social program modifications (22.3M families affected by SNAP changes), and fiscal impacts ($3T added debt). <a class="underline" href="#impacts-overview" rel="noopener noreferrer">See detailed impacts above</a>.`
    },
    {
      question: 'What is the One Big Beautiful Bill (OBBBA)?',
      answer: `OBBBA is <strong>H.R. 1, 119th Congress</strong>—an omnibus budget-reconciliation act reshaping taxes, health care, and energy policy. Read the full text <a class="underline" href="https://www.congress.gov/bill/119th-congress/house-bill/1/text" target="_blank" rel="noopener noreferrer">here</a>.`
    },
    {
      question: 'How much will OBBBA cost?',
      answer: `The Congressional Budget Office projects <strong>$1.85 trillion</strong> in new spending and <strong>$1.48 trillion</strong> in revenue, for a <strong>$367 billion</strong> deficit increase (2025-34). See the <a class="underline" href="https://www.cbo.gov/publication/57627" target="_blank" rel="noopener noreferrer">CBO score</a>.`
    },
    {
      question: 'What does it do to long-run GDP?',
      answer: `According to the Tax Foundation, the Senate version would raise long-run GDP by <strong>1.2 percent</strong>. Full model results <a class="underline" href="https://taxfoundation.org/research/all/federal/big-beautiful-bill-senate-gop-tax-plan/" target="_blank" rel="noopener noreferrer">here</a>.`
    },
    {
      question: 'How many people could lose health coverage?',
      answer: `CBO estimates about <strong>10.9 million</strong> more uninsured Americans by 2034. Breakdown in <a class="underline" href="https://www.factcheck.org/2025/07/the-cbo-breakdown-on-medicaid-losses-increase-in-uninsured/" target="_blank" rel="noopener noreferrer">this analysis</a>.`
    },
    {
      question: 'What new revenue measures fund the bill?',
      answer: `The Joint Committee on Taxation lists corporate-rate permanence, excise hikes, and a 0.2 % financial-transaction levy—raising <strong>$1.56 trillion</strong>. Table JCX-46-21 is <a class="underline" href="https://www.jct.gov/publications/2021/jcx-46-21/" target="_blank" rel="noopener noreferrer">here</a>.`
    },
    {
      question: 'How will the Big Beautiful Bill impact my taxes?',
      answer: `Tax impacts vary by income level. The bill includes changes to tax rates, deductions, and credits. Use our <a class="underline" href="#calculator-section" rel="noopener noreferrer">personal impact calculator</a> to see exactly how your specific tax situation would be affected.`
    },
    {
      question: 'When do the impacts of the Big Beautiful Bill take effect?',
      answer: `Implementation begins in FY 2025 with gradual phase-in through 2028. Peak economic impacts are expected around 2028, with full implementation by 2034. The timeline varies by provision type.`
    }
  ];

  /* ----------  UPDATED RESOURCE LINKS  ---------- */
  const resources = [
    {
      title: 'Full Bill Text',
      description: 'Complete legislative language (H.R. 1, 119th Congress)',
      url: 'https://www.congress.gov/bill/119th-congress/house-bill/1/text'
    },
    {
      title: 'CBO Cost Estimate',
      description: 'Deficit and outlay projections (2025-34)',
      url: 'https://www.cbo.gov/publication/57627'
    },
    {
      title: 'JCT Revenue Estimate',
      description: 'Breakdown of tax provisions and scores',
      url: 'https://www.jct.gov/publications/2021/jcx-46-21/'
    },
    {
      title: 'Tax Foundation Economic Analysis',
      description: 'Dynamic growth and revenue effects',
      url: 'https://taxfoundation.org/research/all/federal/big-beautiful-bill-senate-gop-tax-plan/'
    },
    {
      title: 'Coverage-Loss Analysis',
      description: 'CBO Medicaid & ACA impact summary',
      url: 'https://www.factcheck.org/2025/07/the-cbo-breakdown-on-medicaid-losses-increase-in-uninsured/'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq-section" className="section">
      <div className="container">
        <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
        <p className="mb-12 text-center max-w-3xl mx-auto">
          Get answers to common questions about the legislation and explore additional resources
          for deeper understanding.
        </p>

        <div className="faq-grid-balanced">
          {/* FAQ Section */}
          <div className="faq-column">
            <h3 className="faq-section-title text-center lg:text-left">Common Questions</h3>
            <div className="space-y-4 flex-1 faq-questions-container">
              {faqs.map((faq, index) => (
                <div key={index} className="impact-card-apple faq-question-item hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left faq-button focus:outline-none"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="faq-question-text pr-4 flex-1 group-hover:text-blue-400 transition-colors">{faq.question}</h4>
                      <div className={`faq-toggle-icon ${openFAQ === index ? 'expanded' : ''}`}>
                        {openFAQ === index ? '−' : '+'}
                      </div>
                    </div>
                  </button>
                  {openFAQ === index && (
                    <div className="mt-4 pt-4 border-t border-opacity-30 border-gray-400 animate-in">
                      <div
                        className="faq-answer-text"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="faq-column">
            <h3 className="faq-section-title text-center lg:text-left">Additional Resources</h3>
            <div className="space-y-4 flex-1 faq-resources-container">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  className="block impact-card-apple resource-card hover:border-blue-400 hover:shadow-lg transition-all duration-300 group faq-resource-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="resource-title mb-2 group-hover:text-blue-400 transition-colors">
                        {resource.title}
                      </h4>
                      <p className="resource-description">
                        {resource.description}
                      </p>
                    </div>
                    <span className="external-link-icon text-blue-400 opacity-60 group-hover:opacity-100 transition-all ml-3 flex-shrink-0 text-lg">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Contact Section */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="impact-card-apple contact-card-special">
            <div className="text-center relative z-10">
              <h4 className="resource-title mb-4 text-blue-400">Need More Information?</h4>
              <p className="resource-description mb-6 leading-relaxed">
                Can&rsquo;t find what you&rsquo;re looking for? We&rsquo;re here to help clarify any questions
                about the legislation and its implications.
              </p>
              <a 
                href="mailto:questions@obbba-analysis.dev?subject=OBBBA%20Analysis%20Question"
                className="btn inline-block hover:scale-105 transition-transform duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
