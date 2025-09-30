module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true, // (optional) Generates robots.txt file
  sitemapSize: 7000, // split sitemaps if needed
  // Optional: exclude paths
  // exclude: ['/admin/*', '/secret'],
  // Optional: transform function to customize each URL
};