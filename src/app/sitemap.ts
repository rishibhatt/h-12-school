import { MetadataRoute } from 'next';
import { newsArticles } from '@/content/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://h12school-demo.org';
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    '',
    '/about',
    '/academics',
    '/academics/primary',
    '/academics/middle',
    '/academics/senior',
    '/admissions',
    '/faculty',
    '/roadmap',
    '/campus-life',
    '/gallery',
    '/news',
    '/events',
    '/contact',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route === '/news' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : route === '/admissions' ? 0.9 : 0.8,
  }));

  const newsRoutes = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...newsRoutes];
}
