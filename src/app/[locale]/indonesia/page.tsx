import type { Metadata } from 'next';
import '../../globals.css';
import IndonesiaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Indonesia Solar Battery Calculator – Reliable Home Power (2026)'
    : locale === 'fr' ? 'Calculateur Batterie Solaire Indonésie – Énergie Fiable (2026)'
    : 'Calculadora Batería Solar Indonesia – Energía Confiable (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Indonesia. Size your home system with local PLN tariffs and solar data.'
    : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/indonesia`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/indonesia`,
        en: `https://solbatterycalc.com/en/indonesia`,
        fr: `https://solbatterycalc.com/fr/indonesia`,
        es: `https://solbatterycalc.com/es/indonesia`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/indonesia`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/indonesia`,
    },
  };
}

export default async function IndonesiaPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Indonesia Solar Battery – Reliable Power Anywhere', subtitle: 'Harness equatorial sunshine for reliable home power' },
    fr: { title: 'Indonésie Batterie Solaire – Énergie Fiable Partout', subtitle: 'Profitez du soleil équatorial pour votre maison' },
    es: { title: 'Indonesia Batería Solar – Energía Confiable en Todas Partes', subtitle: 'Aproveche el sol ecuatorial para su hogar' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Indonesia' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇮🇩</span> Indonesia</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <IndonesiaContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
