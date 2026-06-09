import type { Metadata } from 'next';
import '../../globals.css';
import PakistanContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Pakistan Solar Battery Calculator – Beat Outages 2026'
    : locale === 'fr' ? 'Calculateur Batterie Solaire Pakistan – Contre les Délestages (2026)'
    : 'Calculadora Batería Solar Pakistán – Combate los Cortes (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Pakistan. Size your home system with local electricity tariffs and solar data.' : locale === 'fr' ? 'Calculateur gratuit de batterie solaire pour le Pakistan. Dimensionnez votre système pour battre 8-12h de coupures avec le net metering NEPRA.' : 'Calculadora gratuita de batería solar para Pakistán. Dimensiona tu sistema para superar 8-12h de apagones con net metering NEPRA.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/pakistan`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/pakistan`,
        en: `https://solbatterycalc.com/en/pakistan`,
        fr: `https://solbatterycalc.com/fr/pakistan`,
        es: `https://solbatterycalc.com/es/pakistan`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/pakistan`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/pakistan`,
    },
  };
}

export default async function PakistanPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Pakistan Battery Backup – Beat Load Shedding', subtitle: 'Beat load shedding with reliable solar + battery power' },
    fr: { title: 'Pakistan Batterie Solaire – Vainquez les Délestages', subtitle: 'Échappez aux coupures avec le solaire + batterie' },
    es: { title: 'Pakistán Batería Solar – Vence los Cortes de Luz', subtitle: 'Evite los cortes con energía solar + batería' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Pakistan' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇵🇰</span> Pakistan</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <PakistanContent />
        <FAQSection locale={locale} countryCode="PK" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
