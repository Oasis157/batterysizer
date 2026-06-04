import type { Metadata } from 'next';
import '../../globals.css';
import VietnamContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Vietnam Solar Battery Calculator – Maximize Solar Savings (2026)'
    : locale === 'fr' ? 'Calculateur Batterie Solaire Vietnam – Maximisez vos Économies (2026)'
    : 'Calculadora Batería Solar Vietnam – Maximiza el Ahorro (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Vietnam. Size your home system with local EVN tariffs and solar data.'
    : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/vietnam`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/vietnam`,
        en: `https://solbatterycalc.com/en/vietnam`,
        fr: `https://solbatterycalc.com/fr/vietnam`,
        es: `https://solbatterycalc.com/es/vietnam`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/vietnam`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/vietnam`,
    },
  };
}

export default async function VietnamPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Vietnam Solar Battery – Maximize Your Solar Investment', subtitle: 'Store Vietnam\'s abundant sunshine for reliable home power' },
    fr: { title: 'Vietnam Batterie Solaire – Maximisez votre Investissement Solaire', subtitle: 'Stockez le soleil abondant du Vietnam pour une électricité fiable' },
    es: { title: 'Vietnam Batería Solar – Maximiza tu Inversión Solar', subtitle: 'Almacene el abundante sol de Vietnam para energía confiable' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Vietnam' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇻🇳</span> Vietnam</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <VietnamContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
