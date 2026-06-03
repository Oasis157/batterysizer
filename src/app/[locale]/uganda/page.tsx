import type { Metadata } from 'next';
import '../../globals.css';
import UgandaContent from './client';
import Breadcrumbs from '@/components/Breadcrumbs';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === 'en'
    ? 'Uganda Solar Battery Calculator – Affordable Home Backup (2026)'
    : locale === 'fr'
    ? 'Calculateur Batterie Solaire Ouganda – Secours Abordable (2026)'
    : 'Calculadora Batería Solar Uganda – Respaldo Asequible (2026)';
  const description = locale === 'en'
    ? 'Free solar battery calculator for Uganda. Size your affordable home battery backup with local electricity tariffs.'
    : locale === 'fr'
    ? 'Calculateur gratuit de batterie solaire pour l\'Ouganda. Dimensionnez votre secours abordable.'
    : 'Calculadora gratuita de batería solar para Uganda. Dimensiona tu respaldo asequible.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/uganda`,
      languages: {
        en: `https://solbatterycalc.com/en/uganda`,
        fr: `https://solbatterycalc.com/fr/uganda`,
        es: `https://solbatterycalc.com/es/uganda`,
      },
    },
    openGraph: {
      title,
      description,
      images: [{ url: `https://solbatterycalc.com/og/uganda`, width: 1200, height: 630 }],
      url: `https://solbatterycalc.com/${locale}/uganda`,
    },
  };
}
export default async function UgandaPage({ params }: Props) {
  const { locale } = await params;
  const c = {
    en: { title: 'Uganda Home Battery – Affordable Backup Power', subtitle: 'Turn Uganda\'s equatorial sun into reliable home power' },
    fr: { title: 'Ouganda Batterie Solaire – Secours Abordable', subtitle: 'Transformez le soleil équatorial en électricité fiable' },
    es: { title: 'Uganda Batería Solar – Respaldo Asequible', subtitle: 'Convierta el sol ecuatorial en energía doméstica confiable' },
  }[locale as string] || { title: 'Uganda Home Battery – Affordable Backup Power', subtitle: 'Turn Uganda\'s equatorial sun into reliable home power' };
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Countries', href: `/${locale}/countries` },
            { label: 'Uganda' },
          ]}
        />
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-3 py-1 text-xs font-medium mb-4"><span>🇺🇬</span> Uganda</div>
          <h1 className="text-3xl md:text-4xl text-[var(--fg)] tracking-tight leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
          <p className="text-sm text-[var(--muted)] max-w-2xl">{c.subtitle}</p>
        </div>
        <UgandaContent />
        <div className="mt-12 text-center border-t border-[var(--border)] pt-8"><a href={`/${locale}`} className="text-xs text-[var(--primary)] hover:underline">&larr; Back to main calculator</a></div>
      </main>
    </div>
  );
}
