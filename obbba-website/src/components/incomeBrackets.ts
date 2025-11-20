// incomeBrackets data extracted from IncomeImpactCalculator.tsx
export const incomeBrackets = [
  {
    min: 0,
    max: 39999,
    label: '< $40,000 (Lowest Earners)',
    impactPreSunset: -1600,
    impactPostSunset: -2800,
    impactPercentPre: -4,
    impactPercentPost: -7,
    oneLineWhy: "Major Medicaid & SNAP cuts outweigh small tax boost.",
    sunsetDetails: [
      "Standard deduction shrinks from $15,750 to $13,850 → +$228 more tax",
      "Tip & overtime deductions disappear → lose $25k tip + $12.5k overtime deductions",
      "Baby bonus ($1,000) and Trump Account ($5k/year) expire",
      "Childcare subsidy cap returns to higher levels",
      "Energy credits roll back to prior levels"
    ],
    details: [
      "SNAP cuts: 22.3M families face cuts; 5.3M lose ≥$25/mo",
      "Medicaid loss: 16M could lose coverage by 2034", 
      "New work rules: Able-bodied adults 49–65 must work",
      "Benefit freeze: SNAP won't keep pace with food costs"
    ],
    sources: [
      { text: "Urban Institute", url: "https://www.urban.org" },
      { text: "CBPP", url: "https://www.cbpp.org" },
      { text: "CBO", url: "https://www.cbo.gov/publication/61387" }
    ],
    color: 'text-red-700'
  },
  {
    min: 40000,
    max: 159999,
    label: '$40,000 – $160,000 (Lower-Middle)',
    impactPreSunset: 750,
    impactPostSunset: -450,
    impactPercentPre: 0.6,
    impactPercentPost: -0.3,
    oneLineWhy: "Modest tax relief, but ACA subsidies expire in 2026.",
    sunsetDetails: [
      "Standard deduction drops from $15,750 to $13,850 → +$228 more tax",
      "Tip & overtime deductions disappear → lose significant deductions",
      "Baby bonus ($1,000) and Trump Account ($5k/year) expire",
      "Childcare subsidy cap returns to higher levels",
      "Energy credits roll back to prior levels"
    ],
    details: [
      "ACA subsidy loss: Insurance costs rise for many families",
      "Tax relief: Higher standard deduction, child credit up to $2,200",
      "Temporary perks: Tips/overtime deductions through 2028",
      "Health coverage risk: Some families may lose ACA coverage"
    ],
    sources: [
      { text: "CBO", url: "https://www.cbo.gov/publication/61387" }
    ],
    color: 'text-yellow-700'
  },
  {
    min: 160000,
    max: 359999,
    label: '$160,000 – $360,000 (Middle Income)',
    impactPreSunset: 3500,
    impactPostSunset: 2800,
    impactPercentPre: 1.5,
    impactPercentPost: 1.2,
    oneLineWhy: "Major tax savings with 10% liability reduction and SALT relief.",
    sunsetDetails: [
      "SALT relief expires → deduction cap returns to $10k from $40k",
      "Tip & overtime deductions disappear → lose significant deductions",
      "Auto loan interest deduction expires → lose up to $150k deduction",
      "Some temporary credits phase out",
      "Still keeps permanent tax cuts and child credit enhancement"
    ],
    details: [
      "Tax liability reduction: 10% reduction in federal tax liability in 2027",
      "SALT relief: Deduction cap raised to $40k for incomes under $500k",
      "Special deductions: Tips/overtime and auto loan interest up to $150k",
      "No benefit cuts: Completely shielded from Medicaid, SNAP, and ACA reductions"
    ],
    sources: [
      { text: "JCT", url: "https://www.jct.gov/publications/2025/jcx-33-25/" }
    ],
    color: 'text-green-600'
  },
  {
    min: 360000,
    max: 639999,
    label: '$360,000 – $640,000 (High Earners)',
    impactPreSunset: 12000,
    impactPostSunset: 11000,
    impactPercentPre: 2.3,
    impactPercentPost: 2.1,
    oneLineWhy: "Top 10% get ~80% of bill's benefits with largest absolute gains.",
    sunsetDetails: [
      "SALT relief expires → deduction cap returns to $10k from $40k",
      "Some temporary deductions phase out",
      "Still keeps permanent 2017 tax cuts",
      "Estate tax benefits remain permanent",
      "Minimal impact from sunset provisions"
    ],
    details: [
      "Largest absolute gains: Top 10% benefit most in dollar terms",
      "Permanent tax cuts: 2017 cuts made permanent, major savings",
      "SALT relief: $40k deduction cap through 2029",
      "Benefit share: Top 10% receive ~80% of bill's total benefits",
      "No program cuts: Completely protected from all benefit reductions"
    ],
    sources: [
      { text: "CBO", url: "https://www.cbo.gov/publication/61387" }
    ],
    color: 'text-green-700'
  },
  {
    min: 640000,
    max: 99999999,
    label: '$640,000+ (Wealthy Elite)',
    impactPreSunset: 20000,
    impactPostSunset: 20000,
    impactPercentPre: 2.3,
    impactPercentPost: 2.3,
    oneLineWhy: "Biggest and most lasting tax cuts with zero program impact.",
    sunsetDetails: [
      "All benefits are permanent - no sunset provisions",
      "Estate tax benefits remain permanent",
      "Top tax rates remain permanently lower",
      "Complete protection from all benefit cuts",
      "Zero impact from sunset provisions"
    ],
    details: [
      "Largest tax breaks: Biggest and most lasting tax cuts of any group",
      "Estate tax benefits: Reduced estate and business tax liability",
      "Permanent relief: All benefits are immediate and permanent",
      "Top tax rates: Permanent lower rates on highest income brackets",
      "Complete protection: Zero impact from any benefit cuts or program reductions"
    ],
    sources: [
      { text: "CBO", url: "https://www.cbo.gov/publication/61387" }
    ],
    color: 'text-green-800'
  },
]; 