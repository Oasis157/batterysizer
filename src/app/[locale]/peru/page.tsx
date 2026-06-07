import type { Metadata } from 'next';
import '../../globals.css';
import PeruContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Peru Solar Battery Calculator – Grid Backup & Off-Grid (2026)' : locale === 'fr' ? 'Calculateur Batterie Solaire Pérou – Secours & Hors-Réseau (2026)' : 'Calculadora Batería Solar Perú – Respaldo y Fuera de Red (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Peru. Size your home system with local electricity tariffs and solar data.' : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/peru`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/peru`,
        en: `https://solbatterycalc.com/en/peru`,
        fr: `https://solbatterycalc.com/fr/peru`,
        es: `https://solbatterycalc.com/es/peru`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/peru`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/peru`,
    },
  };
}

export default async function PeruPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Peru Solar Battery – Grid Backup & Off-Grid Power', subtitle: "Power your home with Peru's highland sunshine" },
    fr: { title: 'Pérou Batterie Solaire – Secours Réseau & Hors-Réseau', subtitle: "Profitez du soleil des hauts plateaux péruviens" },
    es: { title: 'Perú Batería Solar – Respaldo de Red y Fuera de Red', subtitle: 'Energía solar de los Andes para su hogar' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Peru' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇵🇪</span> Peru</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <PeruContent />
        <FAQSection locale={locale} countryCode="PE" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
