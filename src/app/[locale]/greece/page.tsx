import type { Metadata } from 'next';
import '../../globals.css';
import GreeceContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Greece Solar Battery Calculator – Solar Backup for Homes (2026)' : locale === 'fr' ? 'Calculateur Batterie Solaire Grèce – Secours Solaire (2026)' : 'Calculadora Batería Solar Grecia – Respaldo Solar (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Greece. Size your home system with local PPC tariffs and 4.8 kWh/m² solar data.' : locale === 'fr' ? 'Calculateur de batterie solaire gratuit pour la Grèce. Dimensionnez votre système domestique avec les tarifs PPC et un ensoleillement de 4,8 kWh/m²/jour.' : 'Calculadora gratuita de batería solar para Grecia. Dimensiona tu sistema doméstico con las tarifas PPC y datos solares de 4,8 kWh/m²/día.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/greece`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/greece`,
        en: `https://solbatterycalc.com/en/greece`,
        fr: `https://solbatterycalc.com/fr/greece`,
        es: `https://solbatterycalc.com/es/greece`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/greece`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/greece`,
    },
  };
}

export default async function GreecePage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Greece Solar Battery – Lower Your Energy Costs', subtitle: 'Power your home with Greece\'s best-in-Europe sunshine' },
    fr: { title: 'Grèce Batterie Solaire – Réduisez vos Coûts', subtitle: 'Profitez du meilleur ensoleillement d\'Europe pour votre maison' },
    es: { title: 'Grecia Batería Solar – Reduce tus Costos', subtitle: 'Aproveche el mejor sol de Europa para su hogar' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Greece' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>&#127477;&#127475;</span> Greece</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <GreeceContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
