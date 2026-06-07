import type { Metadata } from 'next';
import '../../globals.css';
import NigeriaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en'
    ? 'Nigeria Solar Battery Calculator – Backup Power for Grid Outages (2026)'
    : locale === 'fr'
    ? 'Calculateur Batterie Solaire Nigeria – Secours pour Coupures de Courant (2026)'
    : 'Calculadora Batería Solar Nigeria – Respaldo para Apagones (2026)';
  const description = locale === 'en'
    ? 'Free solar battery calculator for Nigeria. Size your backup system for NEPA grid outages with local electricity rates and solar data.'
    : locale === 'fr'
    ? 'Calculateur gratuit de batterie solaire pour le Nigeria. Dimensionnez votre secours pour les coupures de courant.'
    : 'Calculadora gratuita de batería solar para Nigeria. Dimensiona tu respaldo para apagones de red.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/nigeria`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/nigeria`,
        en: `https://solbatterycalc.com/en/nigeria`,
        fr: `https://solbatterycalc.com/fr/nigeria`,
        es: `https://solbatterycalc.com/es/nigeria`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/nigeria`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/nigeria`,
    },
  };
}
export default async function NigeriaPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Nigeria Solar Backup – Never Let NEPA Outages Stop You', subtitle: 'Escape unreliable grid power with solar + battery storage' },
    fr: { title: 'Nigeria Batterie Solaire – Ne Laissez Plus les Pannes Vous Arrêter', subtitle: 'Échappez au réseau électrique instable avec le solaire + batterie' },
    es: { title: 'Nigeria Batería Solar – Nunca Dejes que los Apagones te Detengan', subtitle: 'Escapa de la red eléctrica inestable con energía solar + batería' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Nigeria' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4">
            <span>🇳🇬</span> Nigeria
          </div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <NigeriaContent />
        <FAQSection locale={locale} countryCode="NG" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8">
          <a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a>
        </div>
      </main>
    </div>
  );
}
