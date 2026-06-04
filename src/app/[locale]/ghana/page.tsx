import type { Metadata } from 'next';
import '../../globals.css';
import GhanaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en'
    ? 'Ghana Solar Battery Calculator – Reliable Backup Power (2026)'
    : locale === 'fr'
    ? 'Calculateur Batterie Solaire Ghana – Secours Fiable (2026)'
    : 'Calculadora Batería Solar Ghana – Respaldo Confiable (2026)';
  const description = locale === 'en'
    ? 'Free solar battery calculator for Ghana. Size your home backup system for reliable power with local electricity tariffs.'
    : locale === 'fr'
    ? 'Calculateur gratuit de batterie solaire pour le Ghana. Dimensionnez votre secours fiable.'
    : 'Calculadora gratuita de batería solar para Ghana. Dimensiona tu respaldo confiable.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/ghana`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/ghana`,
        en: `https://solbatterycalc.com/en/ghana`,
        fr: `https://solbatterycalc.com/fr/ghana`,
        es: `https://solbatterycalc.com/es/ghana`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/ghana`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/ghana`,
    },
  };
}
export default async function GhanaPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Ghana Solar Backup – Dumsor-Proof Your Home', subtitle: 'Beat dumsor with reliable solar + battery backup' },
    fr: { title: 'Ghana Batterie Solaire – Protégez votre Maison du Dumsor', subtitle: 'Vaincre le dumsor avec une batterie solaire fiable' },
    es: { title: 'Ghana Batería Solar – Protege tu Hogar de Apagones', subtitle: 'Supera los apagones con batería solar confiable' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Ghana' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇬🇭</span> Ghana</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <GhanaContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
