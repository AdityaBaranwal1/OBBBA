'use client';
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the One Big Beautiful Bill (OBBBA)?",
      answer: "The OBBBA is a comprehensive piece of legislation that proposes significant federal spending across multiple sectors including infrastructure, healthcare, education, and social programs. The bill aims to address various national challenges but comes with substantial fiscal implications."
    },
    {
      question: "How was the $1.2 trillion cost calculated?",
      answer: "The cost estimate is based on Congressional Budget Office (CBO) analysis, which includes direct spending, tax expenditures, and projected administrative costs over the 10-year implementation period. The figure accounts for both mandatory and discretionary spending components."
    },
    {
      question: "What are the main funding sources for this bill?",
      answer: "The bill proposes a combination of new tax revenues, reallocation of existing federal funds, and deficit spending. Key revenue sources include increased corporate taxes, higher income tax rates for top earners, and new financial transaction taxes."
    },
    {
      question: "How will this affect the average American family?",
      answer: "The impact varies by income level and location. While some families may benefit from expanded services and infrastructure improvements, others may face higher taxes. The per-person cost of approximately $3,600 over 10 years represents the average burden across the population."
    },
    {
      question: "What safeguards are in place to prevent cost overruns?",
      answer: "The legislation includes oversight mechanisms, regular reporting requirements, and sunset provisions for certain programs. However, historical precedent suggests that large federal programs often exceed initial cost estimates."
    }
  ];

  const resources = [
    {
      title: "Full Bill Text",
      description: "Complete legislative language and amendments",
      url: "#"
    },
    {
      title: "CBO Analysis Report",
      description: "Detailed cost estimates and economic impact analysis",
      url: "#"
    },
    {
      title: "Interactive Cost Calculator",
      description: "Customize assumptions and see different scenarios",
      url: "#"
    },
    {
      title: "Supporting Research",
      description: "Academic studies and policy research",
      url: "#"
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
                <div key={index} className="card">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left"
                  >
                    <h4 className="mb-2">{faq.question}</h4>
                  </button>
                  {openFAQ === index && (
                    <p className="mt-4 pt-4 border-t">
                      {faq.answer}
                    </p>
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
                  className="block card hover:border-gray-400 transition-colors"
                >
                  <h4 className="mb-2">{resource.title}</h4>
                  <p className="text-sm">
                    {resource.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-8 card">
              <h4 className="mb-2">Need More Information?</h4>
              <p className="text-sm mb-4">
                Can't find what you're looking for? We're here to help clarify any questions 
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