import type { Metadata } from "next";
import "./globals.css";
import "../styles/mobile.css";

export const metadata: Metadata = {
  title: "OBBBA Act Analysis - Understanding the Real Costs | Comprehensive Economic Impact Study",
  description: "Detailed analysis of the One Big Beautiful Bill Act (OBBBA) examining economic impacts, fiscal implications, and long-term consequences for American taxpayers. Interactive calculator and timeline included.",
  keywords: [
    "OBBBA", "One Big Beautiful Bill Act", "legislation analysis", "economic impact", 
    "federal spending", "policy analysis", "fiscal policy", "government spending", 
    "tax implications", "economic consequences", "budget analysis", "legislative review",
    "political economy", "public policy", "government finance", "taxpayer impact"
  ],
  authors: [{ name: "OBBBA Analysis Team" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "OBBBA Act Analysis - Understanding the Real Economic Costs",
    description: "Comprehensive analysis of the One Big Beautiful Bill Act and its far-reaching economic implications for American taxpayers and future generations.",
    type: "website",
    locale: "en_US",
    siteName: "OBBBA Analysis",
    url: "https://obbba.org",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OBBBA Act Analysis - Economic Impact Overview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@OBBBAAnalysis",
    creator: "@OBBBAAnalysis",
    title: "OBBBA Act Analysis - Understanding the Real Economic Costs",
    description: "Comprehensive analysis of the One Big Beautiful Bill Act and its economic implications. Interactive tools and detailed breakdowns included.",
    images: ["/twitter-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://obbba.org",
  },
  category: "Government Policy Analysis",
  classification: "Economic Policy Research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Prevent flash and hydration mismatch - set theme before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const theme = stored || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `
          }}
        />
        
        {/* Additional SEO meta tags */}
        <link rel="canonical" href="https://obbba.org" />
        <meta name="author" content="OBBBA Analysis Team" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "OBBBA Act Analysis",
              "url": "https://obbba.org",
              "description": "Comprehensive analysis of the One Big Beautiful Bill Act and its economic implications",
              "publisher": {
                "@type": "Organization",
                "name": "OBBBA Analysis Team"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://obbba.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {/* Apple-style background shapes */}
        <div className="background-shapes">
          <div className="bg-shape-1"></div>
          <div className="bg-shape-2"></div>
          <div className="bg-shape-3"></div>
          <div className="bg-gradient-overlay-1"></div>
          <div className="bg-gradient-overlay-2"></div>
          <div className="bg-grid-pattern"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
