import type { Metadata } from 'next';
import '../../globals.css';
import BrazilContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en' ? 'Brazil Solar Battery Calculator – Solar + Battery Savings (2026)' : locale === 'fr' ? 'Calculateur Batterie Solaire Brésil – Économies Solaires (2026)' : 'Calculadora Batería Solar Brasil – Ahorro Solar (2026)';
  const description = locale === 'en' ? 'Free solar battery calculator for Brazil. Size your home system with ANEEL tariffs and abundant solar data.' : '';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/brazil`,
      languages: {
        'x-default': `https://solbatterycalc.com/en/brazil`,
        en: `https://solbatterycalc.com/en/brazil`,
        fr: `https://solbatterycalc.com/fr/brazil`,
        es: `https://solbatterycalc.com/es/brazil`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/brazil`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/brazil`,
    },
  };
}

export default async function BrazilPage({ params }: Props) {
  const { locale } = await params;
  const h: Record<string, { title: string; subtitle: string }> = {
    en: { title: 'Brazil Solar Battery – O Melhor Investimento Solar', subtitle: 'Brazil\'s sun and high rates make solar+battery a powerful investment' },
    fr: { title: 'Brésil Batterie Solaire – Le Meilleur Investissement Solaire', subtitle: 'Le soleil brésilien et les tarifs élevés font du solaire+batterie un investissement puissant' },
    es: { title: 'Brasil Batería Solar – O Melhor Investimento Solar', subtitle: 'El sol brasileño y las altas tarifas hacen del solar+batería una inversión poderosa' },
  };
  const c = h[locale] || h.en;
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Brazil' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇧🇷</span> Brazil</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <BrazilContent />
        <FAQSection locale={locale} countryCode="BR" />

        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
