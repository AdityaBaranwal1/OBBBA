interface StructuredDataProps {
  pageType?: 'website' | 'calculator' | 'analysis' | 'faq';
  title?: string;
  description?: string;
  url?: string;
}

export default function StructuredData({ 
  pageType = 'website',
  title = "OBBBA Act Analysis",
  description = "Personal impact calculator and comprehensive analysis of Trump's One Big Beautiful Bill Act",
  url = "https://obbba.org"
}: StructuredDataProps) {
  
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "OBBBA Act Analysis",
      "description": description,
      "url": url,
      "publisher": {
        "@type": "Organization",
        "name": "OBBBA Analysis Team",
        "url": "https://obbba.org"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://obbba.org/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "about": {
        "@type": "Thing",
        "name": "One Big Beautiful Bill Act",
        "description": "Federal legislation analysis and economic impact assessment"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "American taxpayers, policy researchers, political analysts"
      },
      "keywords": "OBBBA, Trump bill, economic impact, personal calculator, policy analysis"
    };

    if (pageType === 'calculator') {
      return {
        ...baseData,
        "@type": "WebApplication",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Personal impact calculation",
          "Tax implication analysis", 
          "Economic effect breakdown",
          "Demographic comparisons"
        ]
      };
    }

    if (pageType === 'analysis') {
      return {
        ...baseData,
        "@type": "AnalysisNewsArticle",
        "headline": title,
        "author": {
          "@type": "Organization",
          "name": "OBBBA Analysis Team"
        },
        "datePublished": "2025-01-15",
        "dateModified": new Date().toISOString(),
        "articleSection": "Political Analysis"
      };
    }

    if (pageType === 'faq') {
      return {
        ...baseData,
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the OBBBA Act?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The One Big Beautiful Bill Act (OBBBA) is federal legislation with significant economic implications for American taxpayers."
            }
          },
          {
            "@type": "Question", 
            "name": "How does the calculator work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our calculator analyzes your personal situation against OBBBA provisions to show direct financial impact."
            }
          }
        ]
      };
    }

    return baseData;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(getStructuredData()) 
      }}
    />
  );
}
