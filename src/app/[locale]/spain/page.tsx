import type { Metadata } from 'next';
import '../../globals.css';
import SpainContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Spain Solar Battery Calculator – Maximize Self-Consumption (2026)' : locale === 'fr' ? 'Calculateur Batterie Solaire Espagne – Autoconsommation (2026)' : 'Calculadora Batería Solar España – Maximiza el Autoconsumo (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Spain. Size your home system with local Iberdrola tariffs and 4.6 kWh/m² solar data.' : locale === 'fr' ? 'Calculateur de batterie solaire gratuit pour l\'Espagne. Dimensionnez votre système domestique avec les tarifs Iberdrola et un ensoleillement de 4,6 kWh/m²/jour.' : 'Calculadora gratuita de batería solar para España. Dimensiona tu sistema doméstico con las tarifas Iberdrola y datos solares de 4,6 kWh/m²/día.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/spain`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/spain`,
        en: `https://solbatterycalc.com/en/spain`,
        fr: `https://solbatterycalc.com/fr/spain`,
        es: `https://solbatterycalc.com/es/spain`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/spain`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/spain`,
    },
  };
}

export default async function SpainPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Spain Solar Battery – Reduce tu Factura de Luz', subtitle: 'Harness Spain\'s abundant sunshine for energy independence' },
    fr: { title: 'Espagne Batterie Solaire – Réduisez votre Facture', subtitle: 'Profitez du soleil généreux de l\'Espagne pour votre indépendance énergétique' },
    es: { title: 'España Batería Solar – Reduce tu Factura de Luz', subtitle: 'Aproveche el abundante sol de España para su independencia energética' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Spain' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>&#127466;&#127480;</span> Spain</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <SpainContent />
        <FAQSection locale={locale} countryCode="ES" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
