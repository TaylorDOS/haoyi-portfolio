export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://haoyi-portfolio.vercel.app/sitemap.xml',
    }
  }