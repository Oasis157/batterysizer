import type { Metadata } from 'next';
import '../../globals.css';
import MexicoContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Mexico Solar Battery Calculator – Lower Electricity Bills (2026)' : locale === 'fr' ? 'Calculateur Batterie Solaire Mexique – Réduisez vos Factures (2026)' : 'Calculadora Batería Solar México – Reduce tu Recibo (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Mexico. Size your home system with CFE tariffs and excellent solar data.' : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/mexico`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/mexico`,
        en: `https://solbatterycalc.com/en/mexico`,
        fr: `https://solbatterycalc.com/fr/mexico`,
        es: `https://solbatterycalc.com/es/mexico`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/mexico`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/mexico`,
    },
  };
}

export default async function MexicoPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Mexico Solar Battery – Aprovecha el Net Metering', subtitle: 'Mexico\'s abundant sunshine makes solar the smartest energy investment' },
    fr: { title: 'Mexique Batterie Solaire – Profitez du Net Metering', subtitle: 'L\'abondant soleil mexicain fait du solaire l\'investissement énergétique le plus malin' },
    es: { title: 'México Batería Solar – Aprovecha el Net Metering', subtitle: 'El abundante sol de México hace de la energía solar la inversión energética más inteligente' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Mexico' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇲🇽</span> Mexico</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <MexicoContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
