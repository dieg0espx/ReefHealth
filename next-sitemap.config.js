/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://reefhealth.com',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Optional: Add additional paths or exclude paths
  exclude: ['/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  // Transform function to add custom properties
  transform: async (config, path) => {
    // Custom priority based on page
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    if (path === '/' || path === '/home') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/about' || path === '/blog') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/contact') {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
}; 