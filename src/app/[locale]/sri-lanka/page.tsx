import type { Metadata } from 'next';
import '../../globals.css';
import SriLankaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Sri Lanka Solar Battery Calculator – Backup for Power Cuts (2026)'
    : locale === 'fr' ? 'Calculateur Batterie Solaire Sri Lanka – Secours Coupures (2026)'
    : 'Calculadora Batería Solar Sri Lanka – Respaldo Cortes (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Sri Lanka. Size your home system with local CEB tariffs and solar data.'
    : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/sri-lanka`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/sri-lanka`,
        en: `https://solbatterycalc.com/en/sri-lanka`,
        fr: `https://solbatterycalc.com/fr/sri-lanka`,
        es: `https://solbatterycalc.com/es/sri-lanka`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/sri-lanka`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/sri-lanka`,
    },
  };
}

export default async function SriLankaPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Sri Lanka Battery Backup – Stay Powered Through Blackouts', subtitle: 'Power your home with Sri Lanka\'s tropical sunshine' },
    fr: { title: 'Sri Lanka Batterie Solaire – Restez Alimenté', subtitle: 'Alimentez votre maison avec le soleil tropical du Sri Lanka' },
    es: { title: 'Sri Lanka Batería Solar – Mantente Conectado', subtitle: 'Energía solar tropical para su hogar' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Sri Lanka' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇱🇰</span> Sri Lanka</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <SriLankaContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
