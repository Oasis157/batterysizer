import type { Metadata } from 'next';
import '../../globals.css';
import PortugalContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Portugal Solar Battery Calculator – Solar Savings 2026' : locale === 'fr' ? 'Calculateur Batterie Solaire Portugal – Économies Solaires (2026)' : 'Calculadora Batería Solar Portugal – Ahorro Solar (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Portugal. Size your home system with local EDP tariffs and 4.5 kWh/m² solar data.' : locale === 'fr' ? 'Calculateur de batterie solaire gratuit pour le Portugal. Dimensionnez votre système domestique avec les tarifs EDP et un ensoleillement de 4,5 kWh/m²/jour.' : 'Calculadora gratuita de batería solar para Portugal. Dimensiona tu sistema doméstico con las tarifas EDP y datos solares de 4,5 kWh/m²/día.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/portugal`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/portugal`,
        en: `https://solbatterycalc.com/en/portugal`,
        fr: `https://solbatterycalc.com/fr/portugal`,
        es: `https://solbatterycalc.com/es/portugal`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/portugal`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/portugal`,
    },
  };
}

export default async function PortugalPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Portugal Solar Battery – Smart Energy Savings', subtitle: 'Power your home with Portugal\'s exceptional sunshine' },
    fr: { title: 'Portugal Batterie Solaire – Économies Intelligentes', subtitle: 'Alimentez votre maison avec l\'exceptionnel ensoleillement du Portugal' },
    es: { title: 'Portugal Batería Solar – Ahorro Inteligente', subtitle: 'Alimente su hogar con el sol excepcional de Portugal' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Portugal' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>&#127477;&#127469;</span> Portugal</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <PortugalContent />
        <FAQSection locale={locale} countryCode="PT" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
