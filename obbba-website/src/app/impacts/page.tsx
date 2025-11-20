import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Complete Guide: Impacts of the Big Beautiful Bill - Economic, Social & Personal Effects',
  description: 'Comprehensive analysis of all impacts of the Big Beautiful Bill. Discover how Trump\'s One Big Beautiful Bill affects the economy, healthcare, taxes, and your personal finances.',
  keywords: [
    'impacts of the big beautiful bill',
    'big beautiful bill impacts',
    'One Big Beautiful Bill impacts',
    'impacts of Trump big beautiful bill',
    'big beautiful bill effects',
    'One Big Beautiful Bill consequences',
    'OBBBA impacts analysis',
    'economic impacts big beautiful bill',
    'social impacts big beautiful bill',
    'personal impacts big beautiful bill'
  ],
  alternates: {
    canonical: 'https://obbba.org/impacts'
  }
};

const impactSections = [
  {
    title: 'Economic Impacts of the Big Beautiful Bill',
    content: [
      {
        subtitle: 'GDP and Economic Growth',
        details: 'The Tax Foundation projects a +1.2% long-run boost to GDP, with peak effects expected in 2028. This represents significant economic expansion driven by tax policy changes and increased business investment incentives.'
      },
      {
        subtitle: 'Federal Deficit Impact',
        details: 'The Congressional Budget Office estimates approximately $3 trillion will be added to the national debt over the decade (2025-2034), representing one of the largest fiscal impacts in recent legislative history.'
      },
      {
        subtitle: 'Tax Revenue Changes',
        details: 'New revenue measures include corporate rate permanence, excise tax increases, and a 0.2% financial transaction levy, projected to raise $1.56 trillion according to the Joint Committee on Taxation.'
      }
    ]
  },
  {
    title: 'Healthcare Impacts',
    content: [
      {
        subtitle: 'Insurance Coverage Changes',
        details: 'The Center on Budget and Policy Priorities estimates approximately 16 million Americans could lose health insurance by 2034 due to changes in Medicaid eligibility and healthcare subsidies.'
      },
      {
        subtitle: 'Medicaid Program Modifications',
        details: 'Significant changes to Medicaid eligibility requirements and coverage options will affect millions of low-income Americans, particularly in states that expanded Medicaid under the ACA.'
      },
      {
        subtitle: 'Prescription Drug Cost Impacts',
        details: 'Changes to prescription drug pricing mechanisms and Medicare negotiation powers will affect medication costs for seniors and other beneficiaries.'
      }
    ]
  },
  {
    title: 'Social Program Impacts',
    content: [
      {
        subtitle: 'SNAP Benefits Changes',
        details: 'The National Low Income Housing Coalition reports that 22.3 million families will lose or see reduced SNAP (food stamp) benefits, affecting food security for vulnerable populations.'
      },
      {
        subtitle: 'Housing Assistance Programs',
        details: 'Modifications to federal housing assistance programs will impact rental assistance, public housing, and homeownership programs across the country.'
      },
      {
        subtitle: 'Education and Childcare',
        details: 'Changes to federal education funding and childcare support programs will affect families\' access to quality education and childcare services.'
      }
    ]
  }
];

export default function ImpactsPage() {
  return (
    <>
      <StructuredData 
        pageType="website" 
        title="Complete Guide: Impacts of the Big Beautiful Bill"
        description="Comprehensive analysis of all impacts of the Big Beautiful Bill on the economy, healthcare, and personal finances."
        url="https://obbba.org/impacts"
      />
      
      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="section py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6">
                Complete Guide: Impacts of the Big Beautiful Bill
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Understanding the comprehensive impacts of Trump's One Big Beautiful Bill across the economy, 
                healthcare system, social programs, and your personal finances.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Key Impact Summary
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">+1.2%</div>
                    <div className="text-gray-600">GDP Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600">16M</div>
                    <div className="text-gray-600">Could Lose Insurance</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">22.3M</div>
                    <div className="text-gray-600">Families Affected (SNAP)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Impact Sections */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {impactSections.map((section, index) => (
                <div key={index} className="mb-16">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    {section.title}
                  </h2>
                  <div className="space-y-8">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white rounded-lg p-6 shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section bg-blue-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">
              Calculate Your Personal Impact
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              These are the general impacts of the Big Beautiful Bill. Want to know exactly how it affects YOUR specific situation?
            </p>
            <a 
              href="/" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Our Free Impact Calculator
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
