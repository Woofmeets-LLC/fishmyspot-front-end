/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fishmyspot.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://fishmyspot.com/server-sitemap.xml', // <==== Add here
    ],
  },
};
