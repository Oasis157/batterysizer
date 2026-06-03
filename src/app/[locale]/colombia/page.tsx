import type { Metadata } from 'next';
import '../../globals.css';
import ColombiaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Colombia Solar Battery Calculator – High Tariff Savings (2026)' : locale === 'fr' ? 'Calculateur Batterie Solaire Colombie – Économies Tarifs Élevés (2026)' : 'Calculadora Batería Solar Colombia – Ahorro en Tarifas Altas (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Colombia. Size your home system with local CREG tariffs and solar data.' : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/colombia`,
      languages: {
        en: `https://solbatterycalc.com/en/colombia`,
        fr: `https://solbatterycalc.com/fr/colombia`,
        es: `https://solbatterycalc.com/es/colombia`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/colombia`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/colombia`,
    },
  };
}

export default async function ColombiaPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Colombia Solar Battery – Reduce tu Recibo de Luz', subtitle: "Power your home with Colombia's abundant tropical sun" },
    fr: { title: 'Colombie Batterie Solaire – Réduisez votre Facture', subtitle: 'Alimentez votre maison avec le soleil tropical de la Colombie' },
    es: { title: 'Colombia Batería Solar – Reduce tu Recibo de Luz', subtitle: 'Energía solar tropical para su hogar colombiano' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Colombia' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇨🇴</span> Colombia</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <ColombiaContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
