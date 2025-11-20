interface StructuredDataProps {
  pageType?: 'website' | 'calculator' | 'analysis' | 'faq';
  title?: string;
  description?: string;
  url?: string;
}

export default function StructuredData({ 
  pageType = 'website',
  title,
  description
  , url
}: StructuredDataProps) {
  
  // Core data that all pages share
  const baseData = {
    "@context": "https://schema.org",
    "@type": pageType === 'calculator' ? 'WebApplication' : 'WebSite',
    "name": title || "OBBBA Personal Impact Calculator 2025",
    "description": description || "Calculate how Trump's One Big Beautiful Bill affects your personal finances with our free tool",
  "url": url || "https://obbba.org",
    "keywords": "OBBBA calculator 2025, Trump bill impact, personal finance tool"
  };

  // Add page-specific enhancements only when needed
  const enhancedData = (() => {
    switch (pageType) {
      case 'calculator':
        return {
          ...baseData,
          "applicationCategory": "FinanceApplication",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        };
      
      case 'faq':
        return {
          ...baseData,
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are the main impacts of the Big Beautiful Bill?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Big Beautiful Bill has wide-ranging impacts including: economic effects (+1.2% GDP growth), healthcare changes (≈16M could lose insurance), social program modifications (22.3M families affected by SNAP changes), and fiscal impacts ($3T added debt)."
              }
            },
            {
              "@type": "Question",
              "name": "What is the OBBBA Act?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trump's One Big Beautiful Bill Act - comprehensive federal legislation affecting taxes, healthcare, and spending."
              }
            },
            {
              "@type": "Question",
              "name": "How will the Big Beautiful Bill impact my taxes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tax impacts vary by income level. The bill includes changes to tax rates, deductions, and credits. Use our personal impact calculator to see exactly how your specific tax situation would be affected."
              }
            }
          ]
        };
      
      default:
        return baseData;
    }
  })();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedData) }}
    />
  );
}
