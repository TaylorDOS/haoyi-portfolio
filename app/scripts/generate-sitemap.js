const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { getServerSideProps } = require('next'); // This is just for illustration; you may need to adapt it to your actual data fetching methods

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://haoyi-portfolio.vercel.app' });

  // Add static pages
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.7 });
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.5 });

  // Example dynamic pages (you need to fetch your dynamic routes here)
  // const pages = await fetchYourDynamicRoutes(); // Replace with your actual data fetching
  // pages.forEach(page => {
  //   sitemap.write({ url: `/your-dynamic-route/${page.id}`, changefreq: 'weekly', priority: 0.7 });
  // });

  sitemap.end();

  const sitemapXml = (await streamToPromise(sitemap)).toString();

  fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemapXml);
  console.log('Sitemap generated at /public/sitemap.xml');
}

generateSitemap().catch(console.error);
