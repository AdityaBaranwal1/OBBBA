import type { Metadata } from 'next';
import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: 'OBBBA vs Other Bills - How Trump\'s Bill Compares to Major Legislation',
  description: 'Compare Trump\'s OBBBA to other major federal bills. See side-by-side analysis of economic impacts, scope, and effects on different demographics.',
  keywords: [
    'OBBBA comparison', 'Trump bill vs other bills', 'federal legislation comparison',
    'OBBBA vs stimulus bills', 'Trump bill analysis comparison'
  ],
  alternates: {
    canonical: 'https://obbba.org/comparison'
  }
};

export default function ComparisonPage() {
  const comparisons = [
    {
      bill: "American Rescue Plan Act (2021)",
      amount: "$1.9T",
      scope: "COVID-19 Relief",
      duration: "1-2 years",
      focus: "Emergency response, direct payments, unemployment benefits",
      impact: "Immediate economic relief, temporary programs"
    },
    {
      bill: "Infrastructure Investment Act (2021)", 
      amount: "$1.2T",
      scope: "Infrastructure",
      duration: "5-8 years",
      focus: "Roads, bridges, broadband, clean energy",
      impact: "Long-term infrastructure improvements"
    },
    {
      bill: "CARES Act (2020)",
      amount: "$2.2T", 
      scope: "COVID-19 Relief",
      duration: "1 year",
      focus: "Business loans, unemployment, direct payments",
      impact: "Emergency economic stabilization"
    },
    {
      bill: "Tax Cuts and Jobs Act (2017)",
      amount: "$1.5T",
      scope: "Tax Reform",
      duration: "10 years",
      focus: "Corporate and individual tax cuts",
      impact: "Tax structure changes, mixed economic effects"
    }
  ];

  return (
    <>
      <StructuredData 
        pageType="analysis"
        title="OBBBA Comparison with Other Major Bills"
        description="Side-by-side comparison of Trump's OBBBA with other major federal legislation"
        url="https://obbba.org/comparison"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              OBBBA vs. Other Major Bills
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              How Trump&rsquo;s One Big Beautiful Bill Act compares to other significant federal legislation
            </p>
          </div>

          {/* OBBBA Overview */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 mb-12 border border-white/20">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">One Big Beautiful Bill Act (OBBBA)</h2>
              <div className="text-blue-400 text-xl font-semibold">$2.8T Total Economic Impact</div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">5-10 years</div>
                <div className="text-slate-300">Implementation Period</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">Multi-Sector</div>
                <div className="text-slate-300">Comprehensive Scope</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">84 Provisions</div>
                <div className="text-slate-300">Major Components</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">127M</div>
                <div className="text-slate-300">Americans Affected</div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-6 text-white font-semibold">Legislation</th>
                    <th className="text-left p-6 text-white font-semibold">Total Value</th>
                    <th className="text-left p-6 text-white font-semibold">Primary Scope</th>
                    <th className="text-left p-6 text-white font-semibold">Duration</th>
                    <th className="text-left p-6 text-white font-semibold">Key Focus Areas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 bg-blue-600/10">
                    <td className="p-6">
                      <div className="font-semibold text-white">OBBBA (2025)</div>
                      <div className="text-sm text-blue-400">Trump&rsquo;s Comprehensive Bill</div>
                    </td>
                    <td className="p-6 text-white font-bold">$2.8T</td>
                    <td className="p-6 text-slate-300">Multi-sector reform</td>
                    <td className="p-6 text-slate-300">5-10 years</td>
                    <td className="p-6 text-slate-300">Tax reform, infrastructure, defense, regulation</td>
                  </tr>
                  
                  {comparisons.map((bill, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-6">
                        <div className="font-semibold text-white">{bill.bill}</div>
                      </td>
                      <td className="p-6 text-white font-bold">{bill.amount}</td>
                      <td className="p-6 text-slate-300">{bill.scope}</td>
                      <td className="p-6 text-slate-300">{bill.duration}</td>
                      <td className="p-6 text-slate-300">{bill.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Differences */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">What Makes OBBBA Unique</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">•</span>
                  <div>
                    <div className="text-white font-semibold">Comprehensive Scope</div>
                    <div className="text-slate-300">Unlike single-issue bills, OBBBA addresses multiple policy areas simultaneously</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">•</span>
                  <div>
                    <div className="text-white font-semibold">Long-term Vision</div>
                    <div className="text-slate-300">10-year implementation timeline vs. typical 1-2 year emergency measures</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <div>
                    <div className="text-white font-semibold">Structural Changes</div>
                    <div className="text-slate-300">Permanent policy reforms rather than temporary relief programs</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 mt-1">•</span>
                  <div>
                    <div className="text-white font-semibold">Revenue Neutral Goal</div>
                    <div className="text-slate-300">Attempts to balance costs through tax increases and spending cuts</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Impact Comparison</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Middle Class Impact</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">OBBBA:</span>
                      <span className="text-green-400">+$2,340/year avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">TCJA (2017):</span>
                      <span className="text-green-400">+$1,200/year avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">CARES Act:</span>
                      <span className="text-blue-400">$1,200 one-time</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Business Impact</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">OBBBA:</span>
                      <span className="text-green-400">Mixed, sector-dependent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">TCJA:</span>
                      <span className="text-green-400">Broad tax cuts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">PPP:</span>
                      <span className="text-blue-400">Emergency loans</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Comparison */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Implementation Timeline Comparison</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-32 text-white font-semibold">OBBBA</div>
                <div className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 h-8 rounded relative">
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                    5-10 years (Phased implementation)
                  </span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-32 text-white font-semibold">Infrastructure</div>
                <div className="flex-1 bg-green-600 h-6 rounded relative" style={{width: '60%'}}>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm">
                    5-8 years
                  </span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-32 text-white font-semibold">TCJA</div>
                <div className="flex-1 bg-orange-600 h-6 rounded relative" style={{width: '80%'}}>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm">
                    10 years (Expiring provisions)
                  </span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-32 text-white font-semibold">CARES/ARP</div>
                <div className="flex-1 bg-red-600 h-6 rounded relative" style={{width: '20%'}}>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm">
                    1-2 years
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                See How OBBBA Affects You Personally
              </h2>
              <p className="text-slate-300 mb-6">
                While other bills had broad impacts, OBBBA&rsquo;s effects vary significantly by individual situation
              </p>
              <a 
                href="/calculator"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Calculate Your Personal Impact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
