'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Drop, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function ColombiaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.221 / kWh', sub: 'Highest in Latin America (COP)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.5 kWh/m²/day', sub: 'La Guajira & Caribbean: 5.5+', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Drop, label: 'Hydro dependence', value: '~65% of grid', sub: 'Vulnerable to El Niño droughts', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$1,000 - $3,000', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Bájale a tu recibo de luz — solar + battery storage for Colombian homes</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Colombia has some of the highest residential electricity rates in Latin America at $0.221/kWh. This is largely due to the country&apos;s heavy dependence on hydroelectric power (~65% of generation). During El Niño events, droughts reduce hydro output, forcing the grid to rely on expensive thermal plants — costs that are passed directly to consumers.</p>
          <p>The country receives excellent solar irradiance, averaging 4.5 kWh/m²/day nationally. The La Guajira Peninsula and Caribbean coast regions see 5.5+ kWh/m²/day, rivaling some of the best solar resources globally. While Bogotá&apos;s altitude (2,600m) and cloud cover reduce irradiance there, cities like Medellín, Cali, and Barranquilla offer excellent conditions for solar generation year-round.</p>
          <p><strong>Key advantage:</strong> Colombia&apos;s net metering program (Resolución CREG 174 de 2021) allows solar homeowners to export excess power to the grid. With electricity rates among the highest in the region, payback periods for solar + battery systems can be surprisingly short — often 4-6 years in high-irradiance areas. The growing solar installer network in major cities makes adoption increasingly accessible.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'City Apartment', kwh: '2-4 kWh', panels: '1-2 kW solar', for: 'Bogotá / Medellín apartments, 1-2 bedrooms', cost: '$1,000 - $1,500' },
            { title: 'Suburban Home', kwh: '5-8 kWh', panels: '3-5 kW solar', for: 'Standard houses, 3-4 bedrooms', cost: '$1,500 - $2,500' },
            { title: 'Large / Finca', kwh: '10-15 kWh', panels: '5-8 kW solar', for: 'Large homes, fincas in rural areas', cost: '$2,500 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Por qué los colombianos están migrando a energía solar</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Highest electricity rates in Latin America — solar pays back fast</li>
            <li>✓ Net metering (CREG 174/2021) lets you offset grid consumption</li>
            <li>✓ Excellent solar resource in Caribbean region and Cauca Valley</li>
            <li>✓ Protection from El Niño-driven price spikes and hydro shortages</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Bogotá&apos;s altitude (2,600m) reduces solar output by ~20-30%</li>
            <li>⚠ Cloudy conditions during rainy seasons affect generation</li>
            <li>⚠ Verify current CREG net metering regulations — policies evolve</li>
            <li>⚠ Imported equipment may have higher costs due to logistics</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=CO')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Calcula mi ahorro en luz <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
