'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  /* ----------  NEW FAQs WITH HYPERLINKED SOURCES  ---------- */
  const faqs = [
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
    <section id="learn-more" className="section">
      <div className="container">
        <h2 className="mb-8">Frequently Asked Questions</h2>
        <p className="mb-8">
          Get answers to common questions about the legislation and explore additional resources
          for deeper understanding.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h3 className="mb-8">Common Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="impact-card-apple">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left"
                  >
                    <h4 className="mb-2">{faq.question}</h4>
                  </button>
                  {openFAQ === index && (
                    <p
                      className="mt-4 pt-4 border-t"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="mb-8">Additional Resources</h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  className="block impact-card-apple hover:border-gray-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="mb-2">{resource.title}</h4>
                  <p className="text-sm">
                    {resource.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-8 impact-card-apple">
              <h4 className="mb-2">Need More Information?</h4>
              <p className="text-sm mb-4">
                Can&rsquo;t find what you&rsquo;re looking for? We&rsquo;re here to help clarify any questions
                about the legislation and its implications.
              </p>
              <button className="btn">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
