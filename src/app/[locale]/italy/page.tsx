import type { Metadata } from 'next';
import '../../globals.css';
import ItalyContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Italy Solar Battery Calculator – Cut Your Bills (2026)' : locale === 'fr' ? 'Calculateur Batterie Solaire Italie – Économies Coûts Élevés (2026)' : 'Calculadora Batería Solar Italia – Ahorro en Altos Costos (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Italy. Size your home system with local Enel tariffs and 4.3 kWh/m² solar data.' : locale === 'fr' ? 'Calculateur de batterie solaire gratuit pour l\'Italie. Dimensionnez votre système domestique avec les tarifs Enel et un ensoleillement de 4,3 kWh/m²/jour.' : 'Calculadora gratuita de batería solar para Italia. Dimensiona tu sistema doméstico con las tarifas Enel y datos solares de 4,3 kWh/m²/día.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/italy`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/italy`,
        en: `https://solbatterycalc.com/en/italy`,
        fr: `https://solbatterycalc.com/fr/italy`,
        es: `https://solbatterycalc.com/es/italy`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/italy`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/italy`,
    },
  };
}

export default async function ItalyPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Italy Solar Battery – Taglia la Bolletta Energetica', subtitle: 'Beat Italy\'s highest-in-Europe electricity prices with solar' },
    fr: { title: 'Italie Batterie Solaire – Coupez la Facture Énergétique', subtitle: 'Contrez les prix de l\'électricité les plus élevés d\'Europe avec le solaire' },
    es: { title: 'Italia Batería Solar – Corta la Factura Energética', subtitle: 'Venza los precios de electricidad más altos de Europa con energía solar' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Italy' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>&#127470;&#127481;</span> Italy</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <ItalyContent />
        <FAQSection locale={locale} countryCode="IT" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
