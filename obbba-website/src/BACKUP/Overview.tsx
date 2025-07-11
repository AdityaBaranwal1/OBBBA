import { DollarSign, Users, Calendar, TrendingUp } from 'lucide-react';

export default function Overview() {
  const overviewData = [
    {
      icon: DollarSign,
      title: "Total Cost",
      value: "$3.4 Trillion",
      description: "Estimated total cost over 10 years",
      color: "bg-red-50 text-red-600 border-red-200"
    },
    {
      icon: Users,
      title: "Impact",
      value: "300M+",
      description: "All Americans are affected by this legislation",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: Calendar,
      title: "Timeline",
      value: "2024-2034",
      description: "Implementation and funding period",
      color: "bg-green-50 text-green-600 border-green-200"
    },
    {
      icon: TrendingUp,
      title: "Growth Rate",
      value: "4.2%",
      description: "Annual increase in federal spending",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Key Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the essential facts and figures you need to understand the scope and impact of this legislation.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {overviewData.map((item, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border-2 ${item.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/50 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <div className="text-2xl font-bold mb-2">{item.value}</div>
              <p className="text-sm opacity-80">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            What This Means
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Economic Impact</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Significant increase in federal debt burden
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Potential inflationary pressures
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Long-term fiscal sustainability concerns
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Social Implications</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Expanded access to essential services
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Investment in infrastructure and education
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Support for vulnerable populations
                </li>
              </ul>
            </div>
          </div>

          {/* Key Impacts Section */}
          <div className="mt-12">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Key Impacts</h4>
            <ul className="space-y-6 text-gray-700">
              <li className="border-l-4 border-blue-500 pl-4">
                <span className="font-semibold">The Big Beautiful Bill will raise the National Debt by <span className='text-red-600'>$3.4 Trillion</span>. Up to <span className='text-red-600'>$4.7 Trillion</span> if made Permanent.</span>
                <br />
                <span className="text-xs text-gray-500">Source: <a href="https://www.crfb.org" target="_blank" rel="noopener noreferrer" className="underline">CRFB.org (Congressional Budget Office)</a></span>
              </li>
              <li className="border-l-4 border-blue-500 pl-4">
                <span className="font-semibold">“Roughly 16 million people by 2034 would lose health coverage and become uninsured because of the Medicaid cuts, the bill's failure to extend enhanced premium tax credits for ACA marketplace coverage, and other harmful ACA marketplace changes”</span>
                <br />
                <span className="text-xs text-gray-500">Source: <a href="https://www.cbpp.org" target="_blank" rel="noopener noreferrer" className="underline">CBPP.org (Center on Budget & Policy Priorities)</a></span>
              </li>
              <li className="border-l-4 border-blue-500 pl-4">
                <span className="font-semibold">22.3 million U.S. families would face SNAP cuts; of those, 5.3 million would lose ≥ $25/month (averaging $146/month or $1,752/year). This hardest-hit group includes:</span>
                <ul className="list-disc ml-8 mt-2 text-gray-600">
                  <li>3.3 million families with children</li>
                  <li>3.5 million working families</li>
                  <li>1.7 million families with a full-time, full-year worker</li>
                </ul>
                <span className="text-xs text-gray-500 block mt-2">Source: <a href="https://www.urban.org" target="_blank" rel="noopener noreferrer" className="underline">Urban Institute</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 