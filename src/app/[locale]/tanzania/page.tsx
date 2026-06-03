import type { Metadata } from 'next';
import '../../globals.css';
import TanzaniaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en'
    ? 'Tanzania Solar Battery Calculator – Off-Grid & Backup Power (2026)'
    : locale === 'fr'
    ? 'Calculateur Batterie Solaire Tanzanie – Hors-Réseau (2026)'
    : 'Calculadora Batería Solar Tanzania – Fuera de Red (2026)';
  const description = locale === 'en'
    ? 'Free solar battery calculator for Tanzania. Size off-grid and backup power systems using local solar data and tariffs.'
    : locale === 'fr'
    ? 'Calculateur gratuit de batterie solaire pour la Tanzanie. Dimensionnez vos systèmes hors-réseau.'
    : 'Calculadora gratuita de batería solar para Tanzania. Dimensiona sistemas fuera de red.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/tanzania`,
      languages: {
        en: `https://solbatterycalc.com/en/tanzania`,
        fr: `https://solbatterycalc.com/fr/tanzania`,
        es: `https://solbatterycalc.com/es/tanzania`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/tanzania`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/tanzania`,
    },
  };
}
export default async function TanzaniaPage({ params }: Props) {
  const { locale } = await params;
  const c = {
    en: { title: 'Tanzania Off-Grid Solar – Power Anywhere', subtitle: 'Power your home with Tanzania\'s abundant sunshine and battery storage' },
    fr: { title: 'Tanzanie Batterie Solaire – Énergie Partout', subtitle: 'Alimentez votre maison avec le soleil abondant de Tanzanie' },
    es: { title: 'Tanzania Batería Solar – Energía en Cualquier Lugar', subtitle: 'Energía solar abundante con almacenamiento en batería' },
  }[locale as string] || { title: 'Tanzania Off-Grid Solar – Power Anywhere', subtitle: 'Power your home with Tanzania\'s abundant sunshine and battery storage' };
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Tanzania' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇹🇿</span> Tanzania</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <TanzaniaContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
