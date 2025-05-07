/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ocejpe.fr/',
  generateRobotsTxt: true,
  exclude: ['/admin', '/private'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://ocejpe.fr//server-sitemap.xml',
    ],
  },
};