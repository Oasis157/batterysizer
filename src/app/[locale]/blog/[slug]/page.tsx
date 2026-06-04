import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getRelatedPosts, getCategoryLabel } from '@/lib/blog';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return { title: 'Not Found' };

  return {
    title: `${post.title} | SolBatteryCalc Blog`,
    description: post.description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/blog/${slug}`,
      languages: { en: `https://solbatterycalc.com/en/blog/${slug}` },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

const categoryBadgeColors: Record<string, string> = {
  'country-guide': 'bg-[var(--primary-light)] text-[var(--primary)]',
  'solar-basics': 'bg-[var(--warm-light)] text-[var(--warm)]',
  battery: 'bg-[var(--accent-light)] text-[var(--accent)]',
  savings: 'bg-green-50 text-green-700',
};

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);

  if (!post) notFound();

  const related = getRelatedPosts(post, locale, 2);

  const labels: Record<string, { backToBlog: string; related: string; tryCalc: string; tryCalcDesc: string; tryCalcBtn: string }> = {
    en: { backToBlog: 'Blog', related: 'Related Articles', tryCalc: 'Ready to size your system?', tryCalcDesc: 'Use our free calculator to get a personalized battery, inverter, and solar recommendation based on your actual usage.', tryCalcBtn: 'Open Calculator' },
    fr: { backToBlog: 'Blog', related: 'Articles connexes', tryCalc: 'Prêt à dimensionner votre système ?', tryCalcDesc: 'Utilisez notre calculateur gratuit.', tryCalcBtn: 'Ouvrir le calculateur' },
    es: { backToBlog: 'Blog', related: 'Artículos relacionados', tryCalc: '¿Listo para dimensionar tu sistema?', tryCalcDesc: 'Usa nuestra calculadora gratuita.', tryCalcBtn: 'Abrir calculadora' },
  };
  const l = labels[locale] || labels.en;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'SolBatteryCalc' },
    publisher: { '@type': 'Organization', name: 'SolBatteryCalc' },
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-3xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[var(--muted)] mb-6">
          <Link href={`/${locale}/blog`} className="hover:text-[var(--primary)] transition-colors">{l.backToBlog}</Link>
          <span>/</span>
          <span className="text-[var(--fg)] truncate">{post.title}</span>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium ${categoryBadgeColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
            {getCategoryLabel(post.category, locale)}
          </span>
          <span className="text-xs text-[var(--muted)]">{post.date}</span>
          <span className="text-xs text-[var(--muted)]">{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl text-[var(--fg)] tracking-tight leading-tight mb-6" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
          {post.title}
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-[3px] w-12 rounded-full bg-[var(--primary)]" />
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        {/* Article content */}
        <article
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* CTA Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent-light)] p-8 md:p-10 text-center border border-[var(--border)]">
          <h3 className="text-xl font-bold text-[var(--fg)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>{l.tryCalc}</h3>
          <p className="text-sm text-[var(--muted)] mb-6 max-w-md mx-auto leading-relaxed">{l.tryCalcDesc}</p>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-3.5 text-sm font-semibold shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200"
          >
            {l.tryCalcBtn} →
          </Link>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <h2 className="text-lg font-bold text-[var(--fg)] mb-4">{l.related}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {related.map(rp => (
                <Link
                  key={rp.slug}
                  href={`/${locale}/blog/${rp.slug}`}
                  className="block rounded-xl border border-[var(--border)] bg-white p-4 hover:border-[var(--primary)] hover:shadow-sm transition-all"
                >
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium mb-2 ${categoryBadgeColors[rp.category] || 'bg-gray-100 text-gray-600'}`}>
                    {getCategoryLabel(rp.category, locale)}
                  </span>
                  <div className="font-medium text-sm text-[var(--fg)]">{rp.title}</div>
                  <div className="text-xs text-[var(--muted)] mt-1">{rp.date} · {rp.readTime}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
    </div>
  );
}
