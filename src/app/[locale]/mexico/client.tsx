'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Factory, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function MexicoContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'MXN $2.40 / kWh', sub: '~$0.12 USD — DAC tariff much higher', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '5.0 kWh/m²/day', sub: 'Excellent — among the best globally', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Factory, label: 'Solar market growth', value: '+40% YoY', sub: 'Rapid residential & commercial adoption', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: 'MXN $70,000 - $150,000', sub: '~$3,500 - $7,500 USD', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Take advantage of CFE net metering with solar + battery storage</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Mexico enjoys one of the best solar resources in the world with a national average of 5.0 kWh/m²/day — significantly higher than the United States or Europe. The country&apos;s northern states (Sonora, Chihuahua, Baja California) regularly see 5.5-6.0 kWh/m²/day, rivaling the world&apos;s best solar locations. This exceptional resource means smaller solar arrays can generate more power than in most other markets.</p>
          <p>CFE (Comisión Federal de Electricidad), Mexico&apos;s state-owned utility, operates a net metering program called &quot;medición neta&quot; that allows residential solar owners to offset their consumption. The DAC (Doméstico de Alto Consumo) tariff — applied to households exceeding monthly consumption thresholds — charges significantly higher rates, creating a strong financial incentive to install solar. Rising electricity prices, driven by natural gas prices and infrastructure costs, have made solar payback periods increasingly attractive.</p>
          <p><strong>Key advantage:</strong> Mexico&apos;s high irradiance combined with rising CFE rates creates compelling economics for solar + battery. The solar market has grown rapidly, with a mature installer network in Mexico City, Guadalajara, Monterrey, and major tourist destinations. Battery storage allows homeowners to maximize self-consumption and protect against CFE&apos;s tiered tariff structure, particularly for households in the DAC bracket.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Small Home / Apt', kwh: '3-6 kWh', panels: '2-3 kW solar', for: 'Departments, 1-2 bedrooms, basic loads', cost: 'MXN $50,000 - $80,000' },
            { title: 'Standard Home', kwh: '6-12 kWh', panels: '3-5 kW solar', for: '3-4 bedroom homes with AC', cost: 'MXN $80,000 - $150,000' },
            { title: 'Large Home / DAC', kwh: '12-20 kWh', panels: '5-8 kW solar', for: 'Large homes escaping DAC tariff', cost: 'MXN $150,000 - $250,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Por qué los mexicanos están aprovechando la energía solar</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Exceptional 5.0 kWh/m²/day solar resource — among the best in the world</li>
            <li>✓ Net metering (medición neta) through CFE reduces grid consumption charges</li>
            <li>✓ DAC tariff avoidance — high-consumption households save thousands annually</li>
            <li>✓ Mature solar installer market with competitive pricing and financing options</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ CFE net metering policy is limited compared to full 1:1 programs — verify current terms</li>
            <li>⚠ Equipment quality varies — choose certified installers and Tier 1 panel brands</li>
            <li>⚠ Hot climates reduce panel efficiency slightly — ensure adequate roof ventilation</li>
            <li>⚠ Financing rates in Mexico can be high — compare solar loans and cash purchase options</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=MX')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Calcula mi ahorro con net metering <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
