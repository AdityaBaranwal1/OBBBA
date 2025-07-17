import type { Metadata } from 'next';
import StructuredData from '../../components/StructuredData';
import SEOHead from '../../components/SEOHead';

export const metadata: Metadata = {
  title: 'OBBBA Personal Impact Calculator - See How Trump\'s Bill Affects You',
  description: 'Calculate your personal financial impact from Trump\'s One Big Beautiful Bill Act (OBBBA). Get instant results based on your income, location, and situation. Free calculator with fact-checked data.',
  keywords: [
    'OBBBA calculator', 'Trump bill calculator', 'personal impact calculator',
    'One Big Beautiful Bill Act calculator', 'tax impact calculator', 'federal bill calculator',
    'OBBBA cost calculator', 'Trump legislation calculator', 'policy impact tool'
  ],
  openGraph: {
    title: 'OBBBA Personal Impact Calculator - See How Trump\'s Bill Affects You',
    description: 'Free calculator shows exactly how Trump\'s OBBBA affects your finances. Enter your details for personalized results.',
    url: 'https://obbba.org/calculator',
    type: 'website',
    images: [
      {
        url: '/calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'OBBBA Personal Impact Calculator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OBBBA Calculator - See Your Personal Impact',
    description: 'Calculate how Trump\'s One Big Beautiful Bill Act affects YOU personally. Free tool with instant results.',
    images: ['/calculator-twitter.jpg']
  },
  alternates: {
    canonical: 'https://obbba.org/calculator'
  }
};

export default function CalculatorPage() {
  return (
    <>
      <StructuredData 
        pageType="calculator"
        title="OBBBA Personal Impact Calculator"
        description="Calculate your personal financial impact from Trump's One Big Beautiful Bill Act"
        url="https://obbba.org/calculator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              OBBBA Personal Impact Calculator
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Discover exactly how Trump&rsquo;s One Big Beautiful Bill Act affects <strong>YOU</strong> personally. 
              Get instant, fact-checked results based on your income, location, and family situation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="bg-green-600/20 px-3 py-1 rounded-full">✓ Fact-Checked Data</span>
              <span className="bg-blue-600/20 px-3 py-1 rounded-full">✓ Official PDF Sources</span>
              <span className="bg-purple-600/20 px-3 py-1 rounded-full">✓ Instant Results</span>
              <span className="bg-orange-600/20 px-3 py-1 rounded-full">✓ 100% Free</span>
            </div>
          </div>

          {/* Calculator Form */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Enter Your Information</h2>
            
            <form className="space-y-6">
              {/* Income Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Annual Household Income</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                    <option value="">Select income range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-75k">$50,000 - $75,000</option>
                    <option value="75k-100k">$75,000 - $100,000</option>
                    <option value="100k-150k">$100,000 - $150,000</option>
                    <option value="150k-250k">$150,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Filing Status</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                    <option value="">Select filing status</option>
                    <option value="single">Single</option>
                    <option value="married-joint">Married Filing Jointly</option>
                    <option value="married-separate">Married Filing Separately</option>
                    <option value="head-household">Head of Household</option>
                  </select>
                </div>
              </div>

              {/* Location & Demographics */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">State</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                    <option value="">Select your state</option>
                    <option value="AL">Alabama</option>
                    <option value="CA">California</option>
                    <option value="FL">Florida</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    {/* Add more states */}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Number of Dependents</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>

              {/* Additional Factors */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Additional Factors (Optional)</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center space-x-3 text-white">
                      <input type="checkbox" className="rounded" />
                      <span>Own a home</span>
                    </label>
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-3 text-white">
                      <input type="checkbox" className="rounded" />
                      <span>Have student loans</span>
                    </label>
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-3 text-white">
                      <input type="checkbox" className="rounded" />
                      <span>Small business owner</span>
                    </label>
                  </div>
                  
                  <div>
                    <label className="flex items-center space-x-3 text-white">
                      <input type="checkbox" className="rounded" />
                      <span>Receive government benefits</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <div className="text-center pt-6">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Calculate My Impact
                </button>
                <p className="text-slate-400 text-sm mt-3">
                  Results based on official OBBBA provisions and current tax law
                </p>
              </div>
            </form>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Detailed Breakdown</h3>
              <p className="text-slate-300">See exactly how each OBBBA provision affects your finances</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Source Links</h3>
              <p className="text-slate-300">Direct links to official PDF sections for every calculation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Share Results</h3>
              <p className="text-slate-300">Easy sharing to show others how OBBBA affects them</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-slate-300 mb-4">
              Want to understand more about the OBBBA Act?
            </p>
            <div className="space-x-4">
              <a 
                href="/analysis" 
                className="inline-block bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
              >
                Read Full Analysis
              </a>
              <a 
                href="/faq" 
                className="inline-block bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
              >
                Common Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
