'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Factory, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function ArgentinaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.080 / kWh', sub: 'Artificially low — subsidized (ARS)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.8 kWh/m²/day', sub: 'Northwest: 5.5+ (excellent)', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Factory, label: 'Grid stability', value: 'Energy crisis', sub: 'Repeated failures & shortages', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$1,100 - $3,000', sub: 'Priced in USD (hedge vs inflation)', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Protegé tu hogar de la inflación con energía solar + batería</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Argentina presents a unique solar opportunity. On the surface, the $0.080/kWh residential tariff — heavily subsidized by the government — seems too low to justify solar investment. However, the reality is more nuanced. Argentina has been experiencing 100%+ annual inflation, and while electricity tariffs are subsidized now, the gap between subsidized rates and real costs is unsustainable. Hardware (solar panels, batteries, inverters) is priced in US dollars, making it a hard-asset hedge against peso devaluation.</p>
          <p>The country also faces a chronic energy crisis. Grid failures, supply shortages, and voltage fluctuations are increasingly common, particularly during summer peak demand. Solar + battery systems provide genuine energy independence and backup power. Argentina&apos;s northern provinces — Salta, Jujuy, and San Juan — receive outstanding irradiance of 5.5+ kWh/m²/day, some of the best in South America outside the Atacama.</p>
          <p><strong>Key advantage:</strong> Argentina has a net metering law (Ley 27.424 — Régimen de Fomento a la Generación Distribuida) that allows homeowners to inject surplus solar power into the grid. While the regulatory rollout has been uneven across provinces, the legal framework exists. For those who can invest in USD-priced hardware, solar is both a hedge against inflation and a solution to grid unreliability.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'City Apartment', kwh: '2-4 kWh', panels: '1-2 kW solar', for: 'Buenos Aires / CABA apartments', cost: '$1,100 - $1,600' },
            { title: 'Suburban Home', kwh: '5-8 kWh', panels: '3-5 kW solar', for: 'Standard houses, 3-4 bedrooms', cost: '$1,600 - $2,500' },
            { title: 'Large / Norte', kwh: '10-15 kWh', panels: '5-8 kW solar', for: 'Large homes, northern provinces', cost: '$2,500 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Por qué los argentinos eligen energía solar + batería</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Solar hardware is USD-priced — a hedge against 100%+ inflation</li>
            <li>✓ Grid failures and supply shortages make backup power essential</li>
            <li>✓ Net metering law (Ley 27.424) provides a legal framework for solar exports</li>
            <li>✓ Northern provinces offer world-class irradiance (5.5+ kWh/m²/day)</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Subsidized tariffs ($0.080/kWh) make pure financial payback slower than elsewhere</li>
            <li>⚠ Net metering implementation varies by province — check local regulations</li>
            <li>⚠ Import restrictions may affect equipment availability and pricing</li>
            <li>⚠ Patagonia has lower irradiance — consider wind as a complementary renewable source</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=AR')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Protegé mi hogar — calculá mi sistema <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
