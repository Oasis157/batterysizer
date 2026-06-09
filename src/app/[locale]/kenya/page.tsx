import type { Metadata } from 'next';
import '../../globals.css';
import KenyaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en'
    ? 'Kenya Solar Battery Calculator – Cut Power Bills 2026'
    : locale === 'fr'
    ? 'Calculateur Batterie Solaire Kenya – Réduisez vos Factures (2026)'
    : 'Calculadora Batería Solar Kenia – Reduce Altos Costos (2026)';
  const description = locale === 'en'
    ? 'Free solar battery calculator for Kenya. Reduce high electricity bills with solar and battery storage using local tariffs and solar data.'
    : locale === 'fr'
    ? 'Calculateur gratuit de batterie solaire pour le Kenya. Réduisez vos factures d\'électricité avec le solaire.'
    : 'Calculadora gratuita de batería solar para Kenia. Reduce altas facturas con energía solar.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/kenya`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/kenya`,
        en: `https://solbatterycalc.com/en/kenya`,
        fr: `https://solbatterycalc.com/fr/kenya`,
        es: `https://solbatterycalc.com/es/kenya`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/kenya`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/kenya`,
    },
  };
}
export default async function KenyaPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Kenya Solar Battery – Cut Your Electricity Bills', subtitle: 'Harness Kenya\'s abundant sunshine with home battery storage' },
    fr: { title: 'Kenya Batterie Solaire – Réduisez vos Factures', subtitle: 'Exploitez le soleil abondant du Kenya avec le stockage par batterie' },
    es: { title: 'Kenia Batería Solar – Reduce tus Facturas', subtitle: 'Aproveche el abundante sol de Kenia con batería doméstica' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Kenya' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇰🇪</span> Kenya</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <KenyaContent />
        <FAQSection locale={locale} countryCode="KE" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
