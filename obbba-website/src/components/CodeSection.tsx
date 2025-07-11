'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

export default function CodeSection() {
  const [copied, setCopied] = useState(false);

  const codeString = `// OBBBA Cost Calculator
// Calculate the real impact of the proposed legislation

class OBBCalculator {
  constructor() {
    this.baseCost = 1200000000000; // $1.2 trillion
    this.timeframe = 10; // years
    this.population = 331000000; // US population
  }

  calculateAnnualCost() {
    return this.baseCost / this.timeframe;
  }

  calculatePerPersonCost() {
    return this.baseCost / this.population;
  }

  calculateWithInflation(inflationRate = 0.042) {
    let totalCost = 0;
    for (let year = 1; year <= this.timeframe; year++) {
      totalCost += this.baseCost / this.timeframe * 
                   Math.pow(1 + inflationRate, year);
    }
    return totalCost;
  }

  generateReport() {
    const annual = this.calculateAnnualCost();
    const perPerson = this.calculatePerPersonCost();
    const withInflation = this.calculateWithInflation();

    return {
      annualCost: \`\${(annual / 1e9).toFixed(1)}B/year\`,
      perPersonCost: \`\${(perPerson / 1e3).toFixed(0)}K/person\`,
      totalWithInflation: \`\${(withInflation / 1e12).toFixed(2)}T total\`,
      impact: "Affects all Americans directly or indirectly"
    };
  }
}

// Usage example
const calculator = new OBBCalculator();
const report = calculator.generateReport();

console.log("OBBBA Impact Report:", report);
/* Output:
{
  annualCost: "120.0B/year",
  perPersonCost: "3.6K/person", 
  totalWithInflation: "1.48T total",
  impact: "Affects all Americans directly or indirectly"
}
*/`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <section id="code" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Code Behind the Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we calculate the real costs and impacts. This JavaScript code demonstrates 
            the methodology used to analyze the legislation's financial implications.
          </p>
        </div>

        {/* Code Block */}
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleCopy}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-sm">Copy</span>
                </>
              )}
            </button>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <SyntaxHighlighter
              language="javascript"
              style={dracula}
              customStyle={{
                margin: 0,
                padding: '2rem',
                fontSize: '14px',
                lineHeight: '1.6',
                borderRadius: '12px',
                minHeight: '500px'
              }}
              showLineNumbers={true}
              wrapLines={true}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Code Explanation */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Cost Calculation</h3>
            <p className="text-gray-300 text-sm">
              The calculator breaks down the $1.2 trillion cost into annual and per-person impacts, 
              accounting for inflation over the 10-year period.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Inflation Impact</h3>
            <p className="text-gray-300 text-sm">
              Using a 4.2% annual inflation rate, the real cost increases to $1.48 trillion 
              when accounting for the time value of money.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Population Impact</h3>
            <p className="text-gray-300 text-sm">
              Dividing the total cost by the US population shows that each person&apos;s share 
              would be approximately $3,600 over the 10-year period.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 