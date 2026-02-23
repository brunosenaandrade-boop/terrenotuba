import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/impressao',
    },
    sitemap: 'https://www.terrenotubarao.com.br/sitemap.xml',
  };
}
