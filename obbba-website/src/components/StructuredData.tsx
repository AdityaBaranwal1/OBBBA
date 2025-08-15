interface StructuredDataProps {
  pageType?: 'website' | 'calculator' | 'analysis' | 'faq';
  title?: string;
  description?: string;
}

export default function StructuredData({ 
  pageType = 'website',
  title,
  description
}: StructuredDataProps) {
  
  // Core data that all pages share
  const baseData = {
    "@context": "https://schema.org",
    "@type": pageType === 'calculator' ? 'WebApplication' : 'WebSite',
    "name": title || "OBBBA Personal Impact Calculator 2025",
    "description": description || "Calculate how Trump's One Big Beautiful Bill affects your personal finances with our free tool",
    "url": "https://obbba.org",
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
          "mainEntity": [{
            "@type": "Question",
            "name": "What is the OBBBA Act?",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "Trump's One Big Beautiful Bill Act - comprehensive federal legislation affecting taxes, healthcare, and spending."
            }
          }]
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
