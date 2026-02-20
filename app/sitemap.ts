import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.terrenotubarao.com.br',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        'https://www.terrenotubarao.com.br/images/fachada-principal.jpg',
        'https://www.terrenotubarao.com.br/images/foto-01.jpg',
        'https://www.terrenotubarao.com.br/images/foto-02.jpg',
        'https://www.terrenotubarao.com.br/images/foto-03.jpg',
        'https://www.terrenotubarao.com.br/images/foto-04.jpg',
        'https://www.terrenotubarao.com.br/images/foto-05.jpg',
        'https://www.terrenotubarao.com.br/images/foto-06.jpg',
        'https://www.terrenotubarao.com.br/images/foto-07.jpg',
        'https://www.terrenotubarao.com.br/images/foto-08.jpg',
        'https://www.terrenotubarao.com.br/images/foto-09.jpg',
        'https://www.terrenotubarao.com.br/images/foto-10.jpg',
        'https://www.terrenotubarao.com.br/images/foto-11.jpg',
        'https://www.terrenotubarao.com.br/images/foto-12.jpg',
        'https://www.terrenotubarao.com.br/images/foto-13.jpg',
        'https://www.terrenotubarao.com.br/images/foto-14.jpg',
        'https://www.terrenotubarao.com.br/images/foto-15.jpg',
        'https://www.terrenotubarao.com.br/images/foto-16.jpg',
        'https://www.terrenotubarao.com.br/images/foto-17.jpg',
      ],
    },
  ];
}
