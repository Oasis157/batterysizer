'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, MapPin, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function ItalyContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.398 / kWh', sub: '~€0.365 — highest in our data', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.3 kWh/m²/day', sub: 'South: 5.0+ (Sicily, Puglia)', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: CurrencyDollar, label: 'Net metering', value: 'Scambio sul Posto (SSP)', sub: 'Compensation for surplus grid injection', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: MapPin, label: 'Regional variation', value: 'North vs South', sub: 'Irradiance varies 30% across regions', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Taglia la tua bolletta energetica — solare e accumulo per risparmiare davvero</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Italy has the highest residential electricity prices in the dataset at $0.398/kWh — nearly double the US rate and 50% above the European average. This alone creates an enormous financial incentive for solar self-consumption. The country also has a rich solar history: the early Conto Energia feed-in tariff programs (2005-2013) made Italy one of the world&apos;s first mass solar adopters, creating a mature installation ecosystem and public familiarity with the technology.</p>
          <p>The Scambio sul Posto (SSP) net metering scheme allows households with solar systems to offset their consumption on an annual basis. When your system produces more than you consume, the surplus is injected into the grid and credited — you can draw that credit back when your production falls short. The Gestore dei Servizi Energetici (GSE) administers the program, providing a centralized and transparent process.</p>
          <p><strong>Key advantage:</strong> Southern Italy — Sicily, Puglia, Calabria, and Sardinia — receives over 5.0 kWh/m²/day of solar irradiance, rivaling North Africa. Even the Po Valley in the north receives ~3.5, which is comparable to central France. Battery storage is particularly valuable under SSP because it shifts your self-consumption to high-value evening hours when Italian time-of-use tariffs (monoraria/bioraria) are most expensive.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'City Apartment', kwh: '3-5 kWh', panels: '2-3 kW solar', for: 'Milan, Turin, Rome apartments', cost: '€4,000 - €6,000' },
            { title: 'Suburban Home', kwh: '6-10 kWh', panels: '4-6 kW solar', for: 'Standard villetta, 3-4 bedrooms', cost: '€6,000 - €10,000' },
            { title: 'Large / Southern Villa', kwh: '12-20 kWh', panels: '6-10 kW solar', for: 'Large homes in Sicily, Puglia, Sardinia', cost: '€10,000 - €16,000' },
          ].map(tier => (
            <div key={tier.title} className="bg-[var(--bg)] rounded-xl p-5 border border-[var(--border)]">
              <h3 className="text-sm mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{tier.title}</h3>
              <div className="text-2xl font-bold text-[var(--primary)]">{tier.kwh}</div>
              <div className="text-xs text-[var(--muted)] mt-1">{tier.panels}</div>
              <div className="text-xs text-[var(--muted)] mt-2"><strong>{tier.for}</strong></div>
              <div className="text-xs text-[var(--muted)]">Est. {tier.cost}</div>
            </div>
          ))}
        </div>
      </CardContent></Card>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="p-5 rounded-xl bg-[var(--primary-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Perché gli italiani stanno passando al solare</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Highest electricity prices in Europe — $0.398/kWh makes solar a no-brainer</li>
            <li>✓ SSP net metering through GSE for surplus energy compensation</li>
            <li>✓ Excellent southern irradiance (5.0+) in Sicily, Puglia, and Sardinia</li>
            <li>✓ Mature installer market from the Conto Energia era — experienced professionals available</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>&#9888; Bureaucratic process for grid connection (pratiche edilizie, GSE application)</li>
            <li>&#9888; SSP credit value depends on your consumption profile and time-of-use tariff</li>
            <li>&#9888; Regional permit requirements vary — check with your comune before installation</li>
            <li>&#9888; Historical/cultural heritage restrictions may apply in centro storico areas</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=IT')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Calcola il mio risparmio energetico <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
