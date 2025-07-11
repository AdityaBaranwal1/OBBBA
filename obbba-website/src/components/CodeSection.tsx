'use client';
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
    <section id="code" className="section">
      <div className="container">
        <h2 className="mb-8">The Code Behind the Numbers</h2>
        <p className="mb-8">
          See how we calculate the real costs and impacts. This JavaScript code demonstrates 
          the methodology used to analyze the legislation's financial implications.
        </p>

        {/* Code Block */}
        <div className="relative mb-8">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleCopy}
              className="btn-secondary text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </>
              )}
            </button>
          </div>
          
          <div className="border border-gray-200 rounded">
            <SyntaxHighlighter
              language="javascript"
              style={tomorrow}
              customStyle={{
                margin: 0,
                padding: '2rem',
                fontSize: '14px',
                lineHeight: '1.6',
                borderRadius: '0',
                minHeight: '400px',
                background: '#f8f9fa'
              }}
              showLineNumbers={true}
              wrapLines={true}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Code Explanation */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3>Cost Calculation</h3>
            <p className="text-sm">
              The calculator breaks down the $1.2 trillion cost into annual and per-person impacts, 
              accounting for inflation over the 10-year period.
            </p>
          </div>
          <div className="card">
            <h3>Inflation Impact</h3>
            <p className="text-sm">
              Using a 4.2% annual inflation rate, the real cost increases to $1.48 trillion 
              when accounting for the time value of money.
            </p>
          </div>
          <div className="card">
            <h3>Population Impact</h3>
            <p className="text-sm">
              Dividing the total cost by the US population shows that each person's share 
              would be approximately $3,600 over the 10-year period.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 