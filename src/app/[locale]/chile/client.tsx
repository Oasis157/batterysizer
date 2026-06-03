'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, TrendUp, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function ChileContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.263 / kWh', sub: 'Highest in South America (CLP)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '5.3 kWh/m²/day', sub: 'Atacama Desert: 7.0+ (world best)', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: TrendUp, label: 'Solar market', value: 'Mature & regulated', sub: 'Ley de Generación Distribuida', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$1,200 - $3,500', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Chile's electricity costs are through the roof — solar battery is the fix</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Chile has the highest residential electricity rates in South America at $0.263/kWh — a massive incentive for solar adoption. The country also boasts the world&apos;s best solar irradiance in the Atacama Desert (7.0+ kWh/m²/day), though most residential areas receive a still-excellent 5.3 kWh/m²/day average. This combination of high power costs and superb solar resource makes Chile one of the most attractive markets for residential solar + battery in the world.</p>
          <p>Chile&apos;s solar market is the most mature in Latin America. The country has a stable regulatory framework under the Ley de Generación Distribuida (Net Billing), which allows homeowners to inject surplus solar power into the grid and receive credit on their bills. The government has consistently supported distributed generation, and the installer ecosystem is well-developed from Santiago to Antofagasta.</p>
          <p><strong>Key advantage:</strong> Solar thermal water heating is already widely adopted in Chile, meaning many homeowners understand the value of solar energy. Adding photovoltaic + battery storage is a natural next step. The payback period in high-consumption households can be as short as 3-5 years, particularly in the northern regions where irradiance peaks.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'City Apartment', kwh: '2-4 kWh', panels: '1-2 kW solar', for: 'Santiago apartments, 1-2 bedrooms', cost: '$1,200 - $1,800' },
            { title: 'Suburban Home', kwh: '5-8 kWh', panels: '3-5 kW solar', for: 'Standard houses, 3-4 bedrooms', cost: '$1,800 - $2,800' },
            { title: 'Large Home', kwh: '10-15 kWh', panels: '5-8 kW solar', for: 'Large homes in Las Condes / Vitacura', cost: '$2,800 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Por qué los chilenos están cambiando al sol</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Highest electricity rates in South America — maximum savings per kWh</li>
            <li>✓ World-class solar irradiance, especially in the Atacama region</li>
            <li>✓ Mature net billing law (Ley de Generación Distribuida) with stable regulation</li>
            <li>✓ Extensive installer network and competitive equipment pricing</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Southern Chile (Patagonia) has significantly lower irradiance</li>
            <li>⚠ Coastal fog (camanchaca) in northern Chile can reduce morning output</li>
            <li>⚠ Net billing credits may be lower than retail rate — verify with distributor</li>
            <li>⚠ Earthquake-resistant mounting is essential in seismic zones</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=CL')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Calculate my energy savings <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
