import type { Metadata } from 'next';
import '../../globals.css';
import ArgentinaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Argentina Solar Battery Calculator – Costs & Backup 2026' : locale === 'fr' ? 'Calculateur Batterie Solaire Argentine – Secours Anti-Inflation (2026)' : 'Calculadora Batería Solar Argentina – Respaldo Anti-Inflación (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Argentina. Size your home system with local Ley 27.424 tariffs and solar data.' : locale === 'fr' ? 'Calculateur gratuit de batterie solaire pour l\'Argentine. Dimensionnez votre système avec les tarifs locaux et l\'ensoleillement argentin.' : 'Calculadora gratuita de batería solar para Argentina. Dimensiona tu sistema con las tarifas locales y datos solares de Argentina.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/argentina`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/argentina`,
        en: `https://solbatterycalc.com/en/argentina`,
        fr: `https://solbatterycalc.com/fr/argentina`,
        es: `https://solbatterycalc.com/es/argentina`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/argentina`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/argentina`,
    },
  };
}

export default async function ArgentinaPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Argentina Solar Battery – Protegé tu Hogar de la Inflación', subtitle: 'Power your home through Argentina\'s energy transition' },
    fr: { title: 'Argentine Batterie Solaire – Protégez votre Maison de l\'Inflation', subtitle: 'Alimentez votre maison malgré la crise énergétique argentine' },
    es: { title: 'Argentina Batería Solar – Protegé tu Hogar de la Inflación', subtitle: 'Energía solar para su hogar en la transición argentina' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Argentina' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇦🇷</span> Argentina</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <ArgentinaContent />
        <FAQSection locale={locale} countryCode="AR" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
