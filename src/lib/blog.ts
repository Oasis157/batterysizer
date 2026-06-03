import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: 'country-guide' | 'solar-basics' | 'battery' | 'savings';
  country?: string;
  readTime: string;
  contentHtml: string;
}

const contentRoot = path.join(process.cwd(), 'content', 'blog');

const categoryLabels: Record<string, Record<string, string>> = {
  en: {
    'country-guide': 'Country Guide',
    'solar-basics': 'Solar Basics',
    battery: 'Battery',
    savings: 'Savings',
  },
  fr: {
    'country-guide': 'Guide Pays',
    'solar-basics': 'Énergie Solaire',
    battery: 'Batterie',
    savings: 'Économies',
  },
  es: {
    'country-guide': 'Guía de País',
    'solar-basics': 'Energía Solar',
    battery: 'Batería',
    savings: 'Ahorros',
  },
};

export function getCategoryLabel(category: string, locale: string): string {
  const labels = categoryLabels[locale] || categoryLabels.en;
  return labels[category] || category;
}

export function getCategories(locale: string) {
  const labels = categoryLabels[locale] || categoryLabels.en;
  return Object.entries(labels).map(([key, label]) => ({ key, label }));
}

export function getAllPosts(locale: string): BlogPost[] {
  const dir = path.join(contentRoot, locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));

  const posts = files.map(file => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title || file,
      date: data.date || '2026-01-01',
      description: data.description || '',
      category: data.category || 'solar-basics',
      country: data.country,
      readTime: data.readTime || '5 min',
      contentHtml: marked.parse(content) as string,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string, locale: string): BlogPost | null {
  const filePath = path.join(contentRoot, locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title || slug,
    date: data.date || '2026-01-01',
    description: data.description || '',
    category: data.category || 'solar-basics',
    country: data.country,
    readTime: data.readTime || '5 min',
    contentHtml: marked.parse(content) as string,
  };
}

export function getRelatedPosts(
  post: BlogPost,
  locale: string,
  limit: number = 2
): BlogPost[] {
  const all = getAllPosts(locale);
  return all
    .filter(p => p.slug !== post.slug)
    .filter(p => p.category === post.category || p.country === post.country)
    .slice(0, limit);
}
