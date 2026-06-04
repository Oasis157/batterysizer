import type { Metadata } from 'next';
import { COUNTRIES, getCountryFlag } from '@/lib/data/countries';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Solar Battery Calculator by Country | SolBatteryCalc',
    fr: 'Calculateur de Batterie Solaire par Pays | SolBatteryCalc',
    es: 'Calculadora de Batería Solar por País | SolBatteryCalc',
  };
  const descs: Record<string, string> = {
    en: 'Find the right home battery system for your country. Local electricity tariffs, solar data, and pricing for 20+ countries.',
    fr: 'Trouvez le bon système de batterie pour votre pays. Tarifs locaux, données solaires pour 20+ pays.',
    es: 'Encuentre el sistema de batería adecuado para su país. Tarifas locales, datos solares para 20+ países.',
  };
  return {
    title: titles[locale] || titles.en,
    description: descs[locale] || descs.en,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/countries`,
      languages: {
        'x-default': 'https://solbatterycalc.com/en/countries',
        en: 'https://solbatterycalc.com/en/countries',
        fr: 'https://solbatterycalc.com/fr/countries',
        es: 'https://solbatterycalc.com/es/countries',
      },
    },
  };
}

const regionLabels: Record<string, Record<string, string>> = {
  en: { africa: 'Africa', asia: 'Asia', americas: 'Americas', europe: 'Europe' },
  fr: { africa: 'Afrique', asia: 'Asie', americas: 'Amériques', europe: 'Europe' },
  es: { africa: 'África', asia: 'Asia', americas: 'Américas', europe: 'Europa' },
};

export default async function CountriesPage({ params }: Props) {
  const { locale } = await params;
  const label = regionLabels[locale] || regionLabels.en;
  const regions = ['africa', 'asia', 'americas', 'europe'] as const;

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl text-[var(--fg)] mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>Countries</h1>
        <p className="text-sm text-[var(--muted)] mb-8">Select your country for localized solar battery sizing. Each country page uses local electricity tariffs and solar irradiance data.</p>

        {regions.map(region => {
          const countries = COUNTRIES.filter(c => c.region === region);
          return (
            <div key={region} className="mb-8">
              <h2 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-3">{label[region]}</h2>
              <div className="grid gap-2">
                {countries.map(c => (
                  <a
                    key={c.code}
                    href={`/${locale}/${c.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-white p-4 hover:border-[var(--primary)] hover:shadow-sm transition-all"
                  >
                    <div className="p-2 rounded-lg bg-[var(--primary-light)]">
                      <span className="text-xl">{getCountryFlag(c.code)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-[var(--fg)]">{c.name}</div>
                      <div className="text-xs text-[var(--muted)] line-clamp-1 mt-0.5">{locale === 'fr' ? c.shortDescFr : locale === 'es' ? c.shortDescEs : c.shortDesc}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-[var(--fg)]">{c.tariffUsdPerKwh.toFixed(3)}</div>
                      <div className="text-[10px] text-[var(--muted)]">USD / kWh</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
