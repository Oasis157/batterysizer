import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const baseUrl = 'https://solbatterycalc.com';
const locales = ['en', 'fr', 'es'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Home
    entries.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    });

    // Countries
    entries.push({
      url: `${baseUrl}/${locale}/countries`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });

    // Country pages — Africa
    const africaCountries = ['south-africa', 'nigeria', 'kenya', 'ghana', 'tanzania', 'uganda', 'zambia'];
    for (const country of africaCountries) {
      entries.push({
        url: `${baseUrl}/${locale}/${country}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }

    // Country pages — Americas
    const americasCountries = ['united-states', 'canada', 'mexico', 'brazil', 'colombia', 'chile', 'peru', 'argentina'];
    for (const country of americasCountries) {
      entries.push({
        url: `${baseUrl}/${locale}/${country}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }

    // Country pages — Asia
    const asiaCountries = ['philippines', 'vietnam', 'indonesia', 'pakistan', 'bangladesh', 'sri-lanka'];
    for (const country of asiaCountries) {
      entries.push({
        url: `${baseUrl}/${locale}/${country}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }

    // Country pages — Europe
    const europeCountries = ['spain', 'france', 'portugal', 'italy', 'greece'];
    for (const country of europeCountries) {
      entries.push({
        url: `${baseUrl}/${locale}/${country}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      });
    }

    // Blog index
    entries.push({
      url: `${baseUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // Blog posts
    const posts = getAllPosts(locale);
    for (const post of posts) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    // Static pages
    entries.push({
      url: `${baseUrl}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
    entries.push({
      url: `${baseUrl}/${locale}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    });
  }

  return entries;
}
