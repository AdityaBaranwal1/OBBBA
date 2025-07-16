import type { Metadata } from 'next';
import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: 'OBBBA FAQ - Common Questions About Trump\'s One Big Beautiful Bill Act',
  description: 'Get answers to frequently asked questions about Trump\'s OBBBA Act. Learn about economic impacts, calculator methodology, and what the bill means for you.',
  keywords: [
    'OBBBA FAQ', 'Trump bill questions', 'One Big Beautiful Bill Act explained',
    'OBBBA questions and answers', 'Trump legislation FAQ', 'OBBBA explained'
  ],
  openGraph: {
    title: 'OBBBA FAQ - Your Questions Answered',
    description: 'Common questions about Trump\'s One Big Beautiful Bill Act answered with fact-checked information.',
    url: 'https://obbba.org/faq',
  },
  alternates: {
    canonical: 'https://obbba.org/faq'
  }
};

const faqs = [
  {
    question: "What is the One Big Beautiful Bill Act (OBBBA)?",
    answer: "The OBBBA is federal legislation proposed by Trump that consolidates multiple policy initiatives into a single comprehensive bill. It covers areas including taxation, government spending, regulatory changes, and economic policy reforms that could significantly impact American taxpayers.",
    category: "General"
  },
  {
    question: "How accurate is your personal impact calculator?",
    answer: "Our calculator uses official provisions from the OBBBA PDF document and current tax law. All calculations are based on the specific text of the bill with direct section references. However, final impacts may vary based on implementation details and individual circumstances.",
    category: "Calculator"
  },
  {
    question: "Where do you get your information?",
    answer: "All our analysis is based directly on the official OBBBA bill text. We provide direct quotes and section references so you can verify every claim in the original PDF document. We do not use interpretations or third-party analysis.",
    category: "Sources"
  },
  {
    question: "Is the calculator really free?",
    answer: "Yes, completely free. No registration required, no hidden fees, no data collection beyond what's necessary for the calculation. Our goal is to help Americans understand how this legislation affects them personally.",
    category: "Calculator"
  },
  {
    question: "How often is the information updated?",
    answer: "We update our analysis whenever there are changes to the OBBBA bill text or related legislation. The site shows the last update date, and we notify users of significant changes that might affect their personal impact calculations.",
    category: "Updates"
  },
  {
    question: "Can I trust the results for my tax planning?",
    answer: "Our calculator provides educational estimates based on bill provisions. For tax planning decisions, consult a qualified tax professional who can consider your complete financial situation and the latest legislative developments.",
    category: "Disclaimer"
  },
  {
    question: "What if the bill changes or doesn't pass?",
    answer: "Legislative bills often undergo changes during the process. We track amendments and update our analysis accordingly. If the bill doesn't pass, the impacts shown would not occur, but the analysis helps understand what was proposed.",
    category: "Updates"
  },
  {
    question: "How does OBBBA compare to other major bills?",
    answer: "OBBBA is unique in its comprehensive scope, combining multiple policy areas into one bill. Unlike typical single-issue legislation, it addresses taxation, spending, and regulatory changes simultaneously, creating complex interactions between different provisions.",
    category: "Comparison"
  },
  {
    question: "Why should I care about this bill?",
    answer: "The OBBBA could significantly impact your taxes, benefits, job prospects, and overall financial situation. Understanding these potential changes helps you make informed decisions about voting, financial planning, and civic engagement.",
    category: "Impact"
  },
  {
    question: "Can I share my calculator results?",
    answer: "Yes! The calculator generates shareable summaries that show how OBBBA might affect different income levels and family situations. This helps spread awareness about the bill's potential impacts on various demographics.",
    category: "Sharing"
  },
  {
    question: "What happens to my data when I use the calculator?",
    answer: "The calculator runs entirely in your browser. We don&rsquo;t store your personal information, income details, or calculation results on our servers. Your privacy is protected while you explore how OBBBA might affect you.",
    category: "Privacy"
  },
  {
    question: "Are you affiliated with any political party?",
    answer: "No. We&rsquo;re focused on providing fact-based analysis of the OBBBA&rsquo;s provisions and potential impacts. Our goal is to help Americans understand the bill&rsquo;s contents and effects, regardless of political affiliation.",
    category: "General"
  }
];

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <>
      <StructuredData 
        pageType="faq"
        title="OBBBA Frequently Asked Questions"
        description="Common questions about Trump's One Big Beautiful Bill Act answered"
        url="https://obbba.org/faq"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Common questions about Trump's One Big Beautiful Bill Act (OBBBA) and our analysis
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-4">Quick Navigation</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <a
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="px-4 py-2 bg-blue-600/20 text-blue-200 rounded-lg hover:bg-blue-600/30 transition-colors text-sm"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* FAQ Sections */}
          {categories.map(category => (
            <div key={category} id={category.toLowerCase()} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">
                {category}
              </h2>
              
              <div className="space-y-6">
                {faqs.filter(faq => faq.category === category).map((faq, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center border border-white/20 mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-slate-300 mb-6">
              Can't find what you're looking for? Try our calculator to see how OBBBA affects you personally,
              or read our detailed analysis.
            </p>
            <div className="space-x-4">
              <a 
                href="/calculator"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Use Calculator
              </a>
              <a 
                href="/analysis"
                className="inline-block bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Read Analysis
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
