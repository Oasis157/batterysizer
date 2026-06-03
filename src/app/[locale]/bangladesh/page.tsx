import type { Metadata } from 'next';
import '../../globals.css';
import BangladeshContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Bangladesh Solar Battery Calculator – Solar Home System (2026)'
    : locale === 'fr' ? 'Calculateur Batterie Solaire Bangladesh – Système Solaire (2026)'
    : 'Calculadora de Batería Solar Bangladés | SolBatteryCalc';
  const description = locale === 'en' ? 'Free solar battery calculator for Bangladesh. Size your home system with local electricity tariffs and solar data.'
    : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/bangladesh`,
      languages: {
        en: `https://solbatterycalc.com/en/bangladesh`,
        fr: `https://solbatterycalc.com/fr/bangladesh`,
        es: `https://solbatterycalc.com/es/bangladesh`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/bangladesh`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/bangladesh`,
    },
  };
}

export default async function BangladeshPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Bangladesh Solar Battery – Power Your Home', subtitle: 'Reliable solar power for Bangladesh\'s growing energy needs' },
    fr: { title: 'Bangladesh Batterie Solaire – Alimentez Votre Maison', subtitle: 'Une énergie solaire fiable pour les besoins du Bangladesh' },
    es: { title: 'Bangladesh Batería Solar – Energía para tu Hogar', subtitle: 'Energía solar confiable para las necesidades de Bangladés' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Bangladesh' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇧🇩</span> Bangladesh</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <BangladeshContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
