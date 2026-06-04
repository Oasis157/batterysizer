import type { Metadata } from 'next';
import '../../globals.css';
import SouthAfricaCalculator from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en'
    ? 'South Africa Solar Battery Calculator – Size for Load Shedding (2026)'
    : locale === 'fr'
    ? 'Calculateur Batterie Solaire Afrique du Sud – Dimensionnez pour les Délestages (2026)'
    : 'Calculadora Batería Solar Sudáfrica – Dimensiona para Cortes de Luz (2026)';

  const description = locale === 'en'
    ? 'Free solar battery calculator for South Africa. Size your home backup system for Eskom load shedding with local tariffs and solar irradiance data.'
    : locale === 'fr'
    ? 'Calculateur gratuit de batterie solaire pour l\'Afrique du Sud. Dimensionnez votre système de secours pour les coupures de courant.'
    : 'Calculadora gratuita de batería solar para Sudáfrica. Dimensiona tu sistema de respaldo para los cortes de luz de Eskom.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/south-africa`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/south-africa`,
        en: `https://solbatterycalc.com/en/south-africa`,
        fr: `https://solbatterycalc.com/fr/south-africa`,
        es: `https://solbatterycalc.com/es/south-africa`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/south-africa`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/south-africa`,
    },
  };
}

export default async function SouthAfricaPage({ params }: Props) {
  const { locale } = await params;

  const h = {
    en: { title: 'South Africa Home Battery Backup for Load Shedding', subtitle: 'Size your home backup system for load shedding' },
    fr: { title: 'Afrique du Sud Batterie Solaire – Secours Contre les Délestages', subtitle: 'Dimensionnez votre système de secours pour les coupures de courant' },
    es: { title: 'Sudáfrica Batería Solar – Respaldo para Cortes de Luz', subtitle: 'Dimensiona tu sistema de respaldo para cortes de luz' },
  };

  const content = h[locale as keyof typeof h] || h.en;

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'South Africa' },
          ]}
        />
        {/* Hero */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4">
            <span>🇿🇦</span> South Africa
          </div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
            {content.title}
          </h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">
            {content.subtitle}
          </p>
        </div>

        <SouthAfricaCalculator />

        {/* Back to calculator */}
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8">
          <a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">
            &larr; Back to main calculator
          </a>
        </div>
      </main>
    </div>
  );
}
