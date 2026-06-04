import type { Metadata } from 'next';
import '../../globals.css';
import FranceContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'France Solar Battery Calculator – Optimize Electricity Costs (2026)' : locale === 'fr' ? 'Calculateur Batterie Solaire France – Optimisez vos Coûts (2026)' : 'Calculadora Batería Solar Francia – Optimiza Costos (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for France. Size your home system with local EDF tariffs and 3.8 kWh/m² solar data.' : locale === 'fr' ? 'Calculateur de batterie solaire gratuit pour la France. Dimensionnez votre système domestique avec les tarifs EDF et un ensoleillement de 3,8 kWh/m²/jour.' : 'Calculadora gratuita de batería solar para Francia. Dimensiona tu sistema doméstico con las tarifas EDF y datos solares de 3,8 kWh/m²/día.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/france`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/france`,
        en: `https://solbatterycalc.com/en/france`,
        fr: `https://solbatterycalc.com/fr/france`,
        es: `https://solbatterycalc.com/es/france`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/france`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/france`,
    },
  };
}

export default async function FrancePage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'France Batterie Solaire – Protégez-vous des Hausses', subtitle: 'Go solar with confidence in France — save on EDF electricity bills' },
    fr: { title: 'France Batterie Solaire – Protégez-vous des Hausses', subtitle: 'Passez au solaire en toute confiance — économisez sur vos factures EDF' },
    es: { title: 'Francia Batería Solar – Protégete de las Subidas', subtitle: 'Adopte la energía solar en Francia — ahorre en sus facturas de EDF' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'France' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>&#127467;&#127479;</span> France</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <FranceContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
