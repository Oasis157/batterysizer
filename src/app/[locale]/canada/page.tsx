import type { Metadata } from 'next';
import '../../globals.css';
import CanadaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Canada Solar Battery Calculator – Winter Backup Power (2026)' : locale === 'fr' ? 'Calculateur Batterie Solaire Canada – Secours Hivernal (2026)' : 'Calculadora Batería Solar Canadá – Respaldo Invernal (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Canada. Size your home system with local provincial electricity rates and solar data.' : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/canada`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/canada`,
        en: `https://solbatterycalc.com/en/canada`,
        fr: `https://solbatterycalc.com/fr/canada`,
        es: `https://solbatterycalc.com/es/canada`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/canada`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/canada`,
    },
  };
}

export default async function CanadaPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Canada Solar Battery – Winter-Ready Backup Power', subtitle: 'Cold climate, strong savings — solar+battery works year-round in Canada' },
    fr: { title: 'Canada Batterie Solaire – Secours Prêt pour l\'Hiver', subtitle: 'Climat froid, économies solides — le solaire+batterie fonctionne toute l\'année au Canada' },
    es: { title: 'Canadá Batería Solar – Respaldo Listo para el Invierno', subtitle: 'Clima frío, grandes ahorros — la energía solar funciona todo el año en Canadá' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Canada' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇨🇦</span> Canada</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <CanadaContent />
        <FAQSection locale={locale} countryCode="CA" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
