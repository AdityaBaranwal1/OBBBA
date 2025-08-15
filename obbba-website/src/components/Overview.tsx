import { DollarSign, Users, Calendar, TrendingUp } from 'lucide-react';

export default function Overview() {
  const overviewData = [
    {
      icon: DollarSign,
      title: "Total Cost",
      value: "$3.4 Trillion",
      description: "Estimated total cost over 10 years",
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
      value: "2024–2034",
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
    <section id="overview" className="section bg-white">
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
            <h4 className="text-xl font-bold text-gray-900 mb-4">Key Impacts of the OBBBA</h4>
            <div className="space-y-8">
              {/* GDP Impact */}
              <div>
                <h5 className="text-lg font-semibold text-blue-700 mb-2">GDP & Economic Growth</h5>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>
                    <span className="font-semibold">Short-Term:</span> OBBBA&rsquo;s tax cut extensions provide a modest short-term boost to GDP (e.g., <span className="text-blue-600">+0.6%</span> in 2026 per <a href="https://taxpolicycenter.org/taxvox/houses-one-big-beautiful-bill-modestly-boosts-short-term-growth-hurts-long-term-outlook" className="underline" target="_blank" rel="noopener noreferrer">Tax&nbsp;Policy&nbsp;Center</a>), but these gains fade as higher debt and interest rates offset the stimulus.
                  </li>
                  <li>
                  <span className="font-semibold">Long-Term:</span> Most independent analyses (<a href="https://www.cbo.gov/publication/61486" className="underline" target="_blank" rel="noopener noreferrer">CBO</a>, <a href="https://www.crfb.org/blogs/how-much-would-obbba-pay-itself" className="underline" target="_blank" rel="noopener noreferrer">CRFB</a>, <a href="https://taxfoundation.org/blog/infrastructure-spending-corporate-tax/" className="underline" target="_blank" rel="noopener noreferrer">Tax Foundation</a>) project only a <span className="text-blue-600">0.4–0.8%</span> increase in GDP over decades, with most of the bill&rsquo;s cost not offset by growth. By 2049, higher debt could actually <span className="text-red-600">reduce GDP</span> below baseline.
                  </li>
                  <li>
                  <span className="font-semibold">Expert Consensus:</span> &quot;Extraordinary growth&quot; claims are not supported by mainstream models. Most experts agree the long-run economic impact is minor, while the debt impact is large. (<a href="https://www.brookings.edu/articles/dont-expect-much-growth-from-the-one-big-beautiful-bill/" className="underline" target="_blank" rel="noopener noreferrer">Brookings</a>)
                  </li>
                </ul>
              </div>

              {/* Nutrition/SNAP */}
              <div>
                <h5 className="text-lg font-semibold text-green-700 mb-2">Nutrition Assistance (SNAP)</h5>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><span className="font-semibold">Benefit Updates Frozen:</span> SNAP benefits can only rise with inflation, not with food cost or diet changes, reducing future purchasing power. <span className="text-xs text-gray-500">(Sec. 10101, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H10101" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §10101</a>, <a href="https://www.cbpp.org/research/federal-budget/cut-and-tax-changes-affecting-low-income-people-from-reconciliation" className="underline" target="_blank" rel="noopener noreferrer">CBPP</a>)</span></li>
                  <li><span className="font-semibold">Stricter Work Requirements:</span> Raises work age cutoff from 49 to 65 for &ldquo;able-bodied adults without dependents.&rdquo; Many older low-income adults risk losing benefits. <span className="text-xs text-gray-500">(Sec. 10102, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H10102" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §10102</a>, <a href="https://www.cbpp.org/research/federal-budget/cut-and-tax-changes-affecting-low-income-people-from-reconciliation" className="underline" target="_blank" rel="noopener noreferrer">CBPP</a>)</span></li>
                  <li><span className="font-semibold">Eligibility Tightened:</span> New restrictions on utility/internet deductions, non-citizen eligibility, and state cost-sharing. Millions could see reduced or lost benefits. <span className="text-xs text-gray-500">(Sec. 10103–10108, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H10103" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §10103–08</a>, <a href="https://www.urban.org/research/publication/assessment-impact-hr1-snap-changes" className="underline" target="_blank" rel="noopener noreferrer">Urban&nbsp;Institute</a>)</span></li>
                  <li><span className="font-semibold">Impact:</span> <span className="text-red-600">22.3 million families</span> face SNAP cuts; <span className="text-red-600">5.3 million</span> lose ≥ $25/month. Hardest-hit: families with children, working families, and those with a full-time worker. <span className="text-xs text-gray-500">(<a href="https://www.urban.org/research/publication/assessment-impact-hr1-snap-changes" className="underline" target="_blank" rel="noopener noreferrer">Urban&nbsp;Institute</a>)</span></li>
                </ul>
              </div>

              {/* Healthcare */}
              <div>
                <h5 className="text-lg font-semibold text-pink-700 mb-2">Healthcare (Medicaid, Medicare, ACA)</h5>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><span className="font-semibold">Medicaid Cuts:</span> Tighter eligibility, new work requirements, and cost-sharing push people off Medicaid. Seniors with modest home equity may lose nursing care coverage. <span className="text-xs text-gray-500">(Sec. 71108, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H71108" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §71108</a>; Sec. 71119–71120, <a href="https://www.cbpp.org/research/federal-budget/impact-of-reconciliation-bill-on-medicaid" className="underline" target="_blank" rel="noopener noreferrer">CBPP</a>)</span></li>
                  <li><span className="font-semibold">Medicare Restrictions:</span> Raises eligibility age, weakens drug price negotiation, and could delay coverage for 65–66 year‑olds. <span className="text-xs text-gray-500">(Sec. 71201, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H71201" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §71201</a>, <a href="https://www.brookings.edu/articles/dont-expect-much-growth-from-the-one-big-beautiful-bill/" className="underline" target="_blank" rel="noopener noreferrer">Brookings</a>)</span></li>
                  <li><span className="font-semibold">ACA Subsidy Cuts:</span> Tightens eligibility, increases repayment risk, and excludes some immigrants. <span className="text-xs text-gray-500">(<a href="https://www.cbpp.org/research/health/h-r-1-health-provisions" className="underline" target="_blank" rel="noopener noreferrer">CBPP</a>)</span></li>
                  <li><span className="font-semibold">Impact:</span> <span className="text-red-600">16 million</span> could lose health coverage by 2034 due to Medicaid and ACA changes. <span className="text-xs text-gray-500">(<a href="https://www.cbpp.org/research/health/h-r-1-health-provisions" className="underline" target="_blank" rel="noopener noreferrer">CBPP</a>)</span></li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <h5 className="text-lg font-semibold text-yellow-700 mb-2">Education (Student Loans & Aid)</h5>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><span className="font-semibold">Loan Caps & PLUS Loan Elimination:</span> New borrowing limits and end of PLUS loans reduce access to education financing, especially for grad students and parents. <span className="text-xs text-gray-500">(Sec. 81001, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H81001" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §81001</a>)</span></li>
                  <li><span className="font-semibold">Tougher Repayment Terms:</span> Less generous income-driven repayment, fewer deferments, and capped forbearance make repayment harder. <span className="text-xs text-gray-500">(Sec. 82001+, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H82001" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §82001</a>)</span></li>
                  <li><span className="font-semibold">Delayed Loan Forgiveness:</span> Defrauded students and those at closed schools face long waits for relief. <span className="text-xs text-gray-500">(Sec. 85001+, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H85001" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §85001</a>)</span></li>
                  <li><span className="font-semibold">Impact:</span> Higher monthly payments, less safety net, and reduced access to higher education for many. <span className="text-xs text-gray-500">(<a href="https://www.urban.org/research/publication/assessment-impact-hr1-snap-changes" className="underline" target="_blank" rel="noopener noreferrer">Urban&nbsp;Institute</a>)</span></li>
                </ul>
              </div>

              {/* Environment & Climate */}
              <div>
                <h5 className="text-lg font-semibold text-teal-700 mb-2">Environment & Climate</h5>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><span className="font-semibold">Cuts to Clean Energy & Conservation:</span> Repeals funding for clean energy, electric vehicles, and conservation projects. <span className="text-xs text-gray-500">(Sec. 60001+, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H60001" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §60001</a>)</span></li>
                  <li><span className="font-semibold">Environmental Justice Funds Eliminated:</span> Ends grants for pollution reduction in disadvantaged communities. <span className="text-xs text-gray-500">(Sec. 60016, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H60016" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §60016</a>)</span></li>
                  <li><span className="font-semibold">NOAA & Climate Research Cuts:</span> Reduces funding for weather/climate resilience and research. <span className="text-xs text-gray-500">(Sec. 40008, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H40008" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §40008</a>)</span></li>
                  <li><span className="font-semibold">Impact:</span> Fewer upgrades for public housing, parks, and clean air; higher emissions and pollution-related health costs. <span className="text-xs text-gray-500">(<a href="https://www.brookings.edu/articles/dont-expect-much-growth-from-the-one-big-beautiful-bill/" className="underline" target="а_blank" rel="noopener noreferrer">Brookings</a>)</span></li>
                </ul>
              </div>

              {/* Financial Regulation & Consumer Protection */}
              <div>
                <h5 className="text-lg font-semibold text-purple-700 mb-2">Financial Regulation & Consumer Protection</h5>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><span className="font-semibold">CFPB Budget Slashed:</span> Cuts Consumer Financial Protection Bureau funding by ~50%, reducing oversight of banks, lenders, and predatory practices. <span className="text-xs text-gray-500">(Sec. 30001, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H30001" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §30001</a>)</span></li>
                  <li><span className="font-semibold">SEC Reserve Fund Eliminated:</span> Slows tech upgrades and market oversight. <span className="text-xs text-gray-500">(Sec. 30003, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H30003" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §30003</a>)</span></li>
                  <li><span className="font-semibold">Other Cuts:</span> Less funding for consumer education, financial literacy, and ESG investment options. <span className="text-xs text-gray-500">(<a href="https://www.brookings.edu/articles/dont-expect-much-growth-from-the-one-big-beautiful-bill/" className="underline" target="_blank" rel="noopener noreferrer">Brookings</a>)</span></li>
                  <li><span className="font-semibold">Impact:</span> Weaker consumer protections and less market oversight. <span className="text-xs text-gray-500">(<a href="https://www.brookings.edu/articles/dont-expect-much-growth-from-the-one-big-beautiful-bill/" className="underline" target="noopener noreferrer" rel="noopener noreferrer">Brookings</a>)</span></li>
                </ul>
              </div>

              {/* Immigration & Fees */}
              <div>
                <h5 className="text-lg font-semibold text-orange-700 mb-2">Immigration & Border-Related Fees</h5>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li><span className="font-semibold">New Application Fees:</span> Adds/raises fees for asylum, work permits, humanitarian parole, and more. <span className="text-xs text-gray-500">(Sec. 100002+, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H100002" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §100002</a>)</span></li>
                  <li><span className="font-semibold">Remittance Tax:</span> New excise tax on money sent abroad, raising costs for immigrants and their families. <span className="text-xs text-gray-500">(Sec. 70604, <a href="https://www.congress.gov/bill/119th-congress/house-bill/1/text#H70604" className="underline" target="_blank" rel="noopener noreferrer">H.R.1 §70604</a>)</span></li>
                  <li><span className="font-semibold">Impact:</span> Higher costs for legal immigration, work, and family support. <span className="text-xs text-gray-500">(<a href="https://www.urban.org/research/publication/assessment-impact-hr1-snap-changes" className="underline" target="_blank" rel="noopener noreferrer">Urban&nbsp;Institute</a>)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
