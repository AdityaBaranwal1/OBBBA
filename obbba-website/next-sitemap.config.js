/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://obbba.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: ['/'],
      },
    ],
    additionalSitemaps: [
      'https://obbba.org/sitemap.xml',
    ],
  },
  exclude: ['/admin/*', '/api/*', '/private/*'],
  changefreq: 'daily',
  priority: 0.7,
  lastmod: new Date().toISOString(),
  transform: async (config, path) => {
    // High priority pages
    const highPriorityPages = ['/', '/calculator', '/analysis', '/faq'];
    const isHighPriority = highPriorityPages.includes(path);
    
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: isHighPriority ? 1.0 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
