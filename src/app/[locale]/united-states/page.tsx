import type { Metadata } from 'next';
import '../../globals.css';
import UnitedStatesContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'United States Solar Battery Calculator – Tax Credit 2026' : locale === 'fr' ? 'Calculateur Batterie Solaire États-Unis – Secours & Net Metering (2026)' : 'Calculadora Batería Solar EE.UU. – Respaldo y Net Metering (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for the United States. Size your home backup system with net metering, federal tax credits, and local rates.' : locale === 'fr' ? 'Calculateur gratuit de batterie solaire pour les États-Unis. Dimensionnez votre système avec le crédit fédéral ITC 30%, les aides étatiques et les tarifs locaux.' : 'Calculadora gratuita de batería solar para Estados Unidos. Dimensiona tu sistema con crédito federal ITC 30%, reembolsos estatales y tarifas locales.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/united-states`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/united-states`,
        en: `https://solbatterycalc.com/en/united-states`,
        fr: `https://solbatterycalc.com/fr/united-states`,
        es: `https://solbatterycalc.com/es/united-states`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/united-states`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/united-states`,
    },
  };
}

export default async function UnitedStatesPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'US Solar Battery – Maximize Your Tax Credits', subtitle: 'Harness American sunshine and save with the 30% federal tax credit' },
    fr: { title: 'États-Unis Batterie Solaire – Maximisez vos Crédits d\'Impôt', subtitle: 'Profitez du soleil américain et économisez avec le crédit d\'impôt fédéral de 30 %' },
    es: { title: 'EE.UU. Batería Solar – Maximiza tus Créditos Fiscales', subtitle: 'Aproveche el sol estadounidense y ahorre con el crédito fiscal federal del 30 %' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'United States' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇺🇸</span> United States</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <UnitedStatesContent />
        <FAQSection locale={locale} countryCode="US" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
