'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

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
      url: "#",
      type: "Document"
    },
    {
      title: "CBO Analysis Report",
      description: "Detailed cost estimates and economic impact analysis",
      url: "#",
      type: "Analysis"
    },
    {
      title: "Interactive Cost Calculator",
      description: "Customize assumptions and see different scenarios",
      url: "#",
      type: "Tool"
    },
    {
      title: "Supporting Research",
      description: "Academic studies and policy research",
      url: "#",
      type: "Research"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="learn-more" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about the legislation and explore additional resources 
            for deeper understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Common Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Additional Resources
            </h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  className="block p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {resource.title}
                        </h4>
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {resource.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Need More Information?
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Can't find what you're looking for? We're here to help clarify any questions 
                about the legislation and its implications.
              </p>
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 