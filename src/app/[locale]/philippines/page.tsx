import type { Metadata } from 'next';
import '../../globals.css';
import PhilippinesContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Philippines Solar Battery Calculator – Typhoon Backup Power (2026)'
    : locale === 'fr' ? 'Calculateur Batterie Solaire Philippines – Secours Typhon (2026)'
    : 'Calculadora Batería Solar Filipinas – Respaldo para Tifones (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for the Philippines. Size your home system with local Meralco tariffs and solar data.'
    : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/philippines`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/philippines`,
        en: `https://solbatterycalc.com/en/philippines`,
        fr: `https://solbatterycalc.com/fr/philippines`,
        es: `https://solbatterycalc.com/es/philippines`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/philippines`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/philippines`,
    },
  };
}

export default async function PhilippinesPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Philippines Solar Battery – Cut Your Meralco Bill', subtitle: 'Beat Meralco\'s high rates with solar + battery storage' },
    fr: { title: 'Philippines Batterie Solaire – Réduisez votre Facture Meralco', subtitle: 'Réduisez vos factures avec le solaire + batterie' },
    es: { title: 'Filipinas Batería Solar – Reduce tu Factura Meralco', subtitle: 'Reduzca sus facturas con energía solar + batería' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Philippines' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇵🇭</span> Philippines</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <PhilippinesContent />
        <FAQSection locale={locale} countryCode="PH" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
