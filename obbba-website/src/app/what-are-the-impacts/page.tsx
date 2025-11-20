import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'What Are the Impacts of the Big Beautiful Bill? Complete Analysis 2025',
  description: 'What are the impacts of the Big Beautiful Bill? Discover how Trump\'s One Big Beautiful Bill affects you, the economy, healthcare, and society. Complete 2025 analysis with facts.',
  keywords: [
    'what are the impacts of the big beautiful bill',
    'what are the impacts of Trump big beautiful bill',
    'what are the effects of the big beautiful bill',
    'big beautiful bill impacts explained',
    'One Big Beautiful Bill impacts analysis',
    'OBBBA impacts 2025',
    'Trump bill impacts explained'
  ],
  alternates: {
    canonical: 'https://obbba.org/what-are-the-impacts'
  }
};

export default function WhatAreTheImpactsPage() {
  return (
    <>
      <StructuredData 
        pageType="website" 
        title="What Are the Impacts of the Big Beautiful Bill? Complete Analysis 2025"
        description="Complete analysis of what the impacts of the Big Beautiful Bill are, including economic, social, and personal effects."
        url="https://obbba.org/what-are-the-impacts"
      />
      
      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="section py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="mb-6 text-center">
                What Are the Impacts of the Big Beautiful Bill?
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-center">
                A comprehensive answer to one of the most important questions about Trump's One Big Beautiful Bill. 
                Here's everything you need to know about its impacts.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <h2>The Short Answer: Wide-Ranging Impacts Across Multiple Areas</h2>
              <p>
                The impacts of the Big Beautiful Bill are extensive and affect virtually every aspect of American life. 
                From economic growth to healthcare coverage, from tax changes to social programs, this legislation 
                creates both positive and negative impacts depending on your situation.
              </p>

              <h2>Economic Impacts: Growth with Costs</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Economic Impacts:</h3>
                <ul className="space-y-2">
                  <li><strong>+1.2% GDP Growth:</strong> Long-run economic boost according to Tax Foundation analysis</li>
                  <li><strong>$3 Trillion Debt Increase:</strong> Added to national debt over 10 years (CBO estimate)</li>
                  <li><strong>Tax System Changes:</strong> Affects different income groups differently</li>
                  <li><strong>Business Investment:</strong> Incentives for corporate expansion and job creation</li>
                </ul>
              </div>

              <h2>Healthcare Impacts: Coverage Changes</h2>
              <p>
                One of the most significant impacts of the Big Beautiful Bill is on healthcare coverage. 
                The Center on Budget and Policy Priorities estimates that approximately 16 million Americans 
                could lose health insurance by 2034.
              </p>
              
              <div className="bg-red-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Healthcare Impact Details:</h3>
                <ul className="space-y-2">
                  <li>Changes to Medicaid eligibility requirements</li>
                  <li>Modifications to healthcare subsidies</li>
                  <li>Impact on prescription drug costs</li>
                  <li>Changes to Medicare benefits</li>
                </ul>
              </div>

              <h2>Social Program Impacts: Benefits Reductions</h2>
              <p>
                The impacts extend to social safety net programs, with the National Low Income Housing Coalition 
                reporting that 22.3 million families will lose or see reduced SNAP (food stamp) benefits.
              </p>

              <h2>Personal Impacts: It Depends on Your Situation</h2>
              <p>
                The personal impacts of the Big Beautiful Bill vary significantly based on your income level, 
                family situation, health status, and geographic location. Some may see tax reductions while 
                others face benefit cuts.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Calculate Your Personal Impact</h3>
                <p className="mb-4">
                  Want to know exactly how the Big Beautiful Bill impacts YOU? Our free calculator provides 
                  personalized results based on your specific situation.
                </p>
                <a 
                  href="/" 
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Try the Impact Calculator
                </a>
              </div>

              <h2>Timeline of Impacts</h2>
              <p>The impacts of the Big Beautiful Bill don't all happen at once:</p>
              <ul>
                <li><strong>2025:</strong> Initial implementation begins</li>
                <li><strong>2026-2028:</strong> Gradual phase-in of major provisions</li>
                <li><strong>2028:</strong> Peak economic growth effects expected</li>
                <li><strong>2034:</strong> Full implementation of all provisions</li>
              </ul>

              <h2>Who Is Most Affected?</h2>
              <p>The impacts of the Big Beautiful Bill affect different groups in different ways:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Most Positively Impacted:</h3>
                  <ul className="space-y-1">
                    <li>Higher-income taxpayers</li>
                    <li>Business owners</li>
                    <li>Investors</li>
                    <li>Certain industries</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Most Negatively Impacted:</h3>
                  <ul className="space-y-1">
                    <li>Low-income families</li>
                    <li>Those relying on social programs</li>
                    <li>Uninsured individuals</li>
                    <li>Medicaid beneficiaries</li>
                  </ul>
                </div>
              </div>

              <h2>The Bottom Line</h2>
              <p>
                The impacts of the Big Beautiful Bill are complex and far-reaching. While it may boost economic 
                growth and benefit some taxpayers, it also reduces social programs and could leave millions 
                without health coverage. Understanding these impacts is crucial for making informed decisions 
                about this significant piece of legislation.
              </p>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
