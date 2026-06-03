import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getCategories, getCategoryLabel } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Blog — Solar Battery Guides & Tips | SolBatteryCalc',
    fr: 'Blog — Guides et Conseils Batterie Solaire | SolBatteryCalc',
    es: 'Blog — Guías y Consejos de Batería Solar | SolBatteryCalc',
  };
  const descs: Record<string, string> = {
    en: 'Expert guides on home battery storage, solar energy, and saving money on electricity. Country-specific advice for 20+ countries.',
    fr: 'Guides experts sur le stockage de batterie domestique et l\'énergie solaire.',
    es: 'Guías expertas sobre almacenamiento de batería doméstica y energía solar.',
  };
  return { title: titles[locale] || titles.en, description: descs[locale] || descs.en,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/blog`,
      languages: {
        en: 'https://solbatterycalc.com/en/blog',
        fr: 'https://solbatterycalc.com/fr/blog',
        es: 'https://solbatterycalc.com/es/blog',
      },
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descs[locale] || descs.en,
    },
  };
}

const categoryBadgeColors: Record<string, string> = {
  'country-guide': 'bg-[var(--primary-light)] text-[var(--primary)]',
  'solar-basics': 'bg-[var(--warm-light)] text-[var(--warm)]',
  battery: 'bg-[var(--accent-light)] text-[var(--accent)]',
  savings: 'bg-green-50 text-green-700',
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const posts = getAllPosts(locale);
  const categories = getCategories(locale);

  const pageLabels: Record<string, { title: string; subtitle: string; empty: string }> = {
    en: { title: 'Blog', subtitle: 'Solar battery guides, country insights, and money-saving tips.', empty: 'No articles yet. Check back soon for solar battery guides and tips.' },
    fr: { title: 'Blog', subtitle: 'Guides sur les batteries solaires et conseils d\'économie.', empty: 'Pas encore d\'articles. Revenez bientôt.' },
    es: { title: 'Blog', subtitle: 'Guías de baterías solares y consejos de ahorro.', empty: 'Aún no hay artículos. Vuelva pronto.' },
  };
  const l = pageLabels[locale] || pageLabels.en;

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[var(--fg)] mb-2">{l.title}</h1>
        <p className="text-sm text-[var(--muted)] mb-8">{l.subtitle}</p>

        {/* Category tabs */}
        {posts.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <a
                key={cat.key}
                href={`/${locale}/blog`}
                className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        )}

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sm text-[var(--muted)]">{l.empty}</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="block rounded-xl border border-[var(--border)] bg-white p-6 hover:border-[var(--primary)] hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium ${categoryBadgeColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                    {getCategoryLabel(post.category, locale)}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{post.date}</span>
                  <span className="text-xs text-[var(--muted)]">· {post.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-[var(--fg)] mb-1">{post.title}</h2>
                <p className="text-sm text-[var(--muted)] line-clamp-2">{post.description}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
