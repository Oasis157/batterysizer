import type { Metadata } from 'next';
import '../../globals.css';
import ZambiaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en'
    ? 'Zambia Solar Battery Calculator – Low-Cost Backup Power (2026)'
    : locale === 'fr'
    ? 'Calculateur Batterie Solaire Zambie – Secours Économique (2026)'
    : 'Calculadora Batería Solar Zambia – Respaldo Económico (2026)';
  const description = locale === 'en'
    ? 'Free solar battery calculator for Zambia. Size your low-cost home backup power system with local solar data.'
    : locale === 'fr'
    ? 'Calculateur gratuit de batterie solaire pour la Zambie. Secours économique pour votre maison.'
    : 'Calculadora gratuita de batería solar para Zambia. Respaldo económico para tu hogar.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/zambia`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/zambia`,
        en: `https://solbatterycalc.com/en/zambia`,
        fr: `https://solbatterycalc.com/fr/zambia`,
        es: `https://solbatterycalc.com/es/zambia`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/zambia`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/zambia`,
    },
  };
}
export default async function ZambiaPage({ params }: Props) {
  const { locale } = await params;
  const c = {
    en: { title: 'Zambia Solar Backup – Low-Cost ZESCO Alternative', subtitle: 'Escape load shedding with solar + battery for your home' },
    fr: { title: 'Zambie Batterie Solaire – Alternative Économique à ZESCO', subtitle: 'Échappez aux coupures de courant avec le solaire + batterie' },
    es: { title: 'Zambia Batería Solar – Alternativa Económica a ZESCO', subtitle: 'Escape de los cortes de luz con energía solar + batería' },
  }[locale as string] || { title: 'Zambia Solar Backup – Low-Cost ZESCO Alternative', subtitle: 'Escape load shedding with solar + battery for your home' };
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Zambia' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇿🇲</span> Zambia</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <ZambiaContent />
        <FAQSection locale={locale} countryCode="ZM" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
