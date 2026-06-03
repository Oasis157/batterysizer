import type { Metadata } from 'next';
import '../../globals.css';
import ChileContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Chile Solar Battery Calculator – Cut High Energy Costs (2026)' : locale === 'fr' ? 'Calculateur Batterie Solaire Chili – Réduisez vos Coûts (2026)' : 'Calculadora Batería Solar Chile – Reduce Altos Costos (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Chile. Size your home system with local Ley de Generación Distribuida tariffs and solar data.' : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/chile`,
      languages: {
        en: `https://solbatterycalc.com/en/chile`,
        fr: `https://solbatterycalc.com/fr/chile`,
        es: `https://solbatterycalc.com/es/chile`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/chile`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/chile`,
    },
  };
}

export default async function ChilePage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Chile Solar Battery – Solve High Electricity Costs', subtitle: "Power your home with the world's best sunshine" },
    fr: { title: 'Chili Batterie Solaire – Solution aux Coûts Élevés', subtitle: 'Profitez du meilleur ensoleillement du monde' },
    es: { title: 'Chile Batería Solar – Soluciona los Altos Costos', subtitle: 'La mejor radiación solar del mundo para su hogar' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Chile' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇨🇱</span> Chile</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <ChileContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
