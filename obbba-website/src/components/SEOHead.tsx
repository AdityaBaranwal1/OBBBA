import { NextSeo, ArticleJsonLd } from 'next-seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string[];
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    authors: string[];
    tags: string[];
  };
}

export default function SEOHead({
  title = "OBBBA Act Analysis - Personal Impact Calculator & Economic Analysis",
  description = "Calculate how Trump's One Big Beautiful Bill Act (OBBBA) affects YOU personally. Fact-checked analysis with direct quotes and official PDF links. See your personal impact now!",
  canonicalUrl = "https://obbba.org",
  ogImage = "https://obbba.org/og-image.jpg",
  keywords = [
    "OBBBA calculator", "Trump bill personal impact", "One Big Beautiful Bill Act calculator",
    "OBBBA economic impact", "Trump legislation analysis", "personal tax calculator",
    "federal spending impact", "government bill calculator", "OBBBA cost analysis",
    "Trump bill breakdown", "political calculator", "policy impact tool"
  ],
  article
}: SEOHeadProps) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title,
          description,
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          site_name: 'OBBBA Analysis',
          type: 'website',
          locale: 'en_US',
        }}
        twitter={{
          handle: '@OBBBAAnalysis',
          site: '@OBBBAAnalysis',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords.join(', ')
          },
          {
            name: 'author',
            content: 'OBBBA Analysis Team'
          },
          {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          },
          {
            name: 'googlebot',
            content: 'index, follow'
          },
          {
            name: 'bingbot',
            content: 'index, follow'
          }
        ]}
        additionalLinkTags={[
          {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
          },
          {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'anonymous'
          },
          {
            rel: 'dns-prefetch',
            href: 'https://vercel.com'
          }
        ]}
      />
      
      {article && (
        <ArticleJsonLd
          url={canonicalUrl}
          title={title}
          images={[ogImage]}
          datePublished={article.publishedTime}
          dateModified={article.modifiedTime || article.publishedTime}
          authorName={article.authors}
          description={description}
        />
      )}
    </>
  );
}
