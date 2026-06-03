'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Wrench, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function NigeriaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '₦55 / kWh', sub: '~$0.036 USD (subsidized)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.8 kWh/m²/day', sub: 'Excellent for solar PV', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Wrench, label: 'Grid reliability', value: '6-18 hrs outages', sub: 'Daily load shedding common', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$850 - $2,800', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Never let another NEPA outage catch you off guard — switch to solar + battery</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Nigeria has the largest economy in Africa but one of the most unreliable power grids. Despite being Africa&apos;s biggest oil producer, most households and businesses rely on diesel or petrol generators that cost 3-5× more than grid electricity. A typical Nigerian home faces 6-18 hours of grid outage daily.</p>
          <p>Solar irradiance averages 4.8 kWh/m²/day — putting Nigeria in an excellent position for solar energy. With the government removing fuel subsidies in 2023, generator running costs have skyrocketed, making solar + battery the smarter alternative. A well-sized system can eliminate generator dependency and pay for itself within 2-4 years.</p>
          <p><strong>Key advantage:</strong> Nigeria has almost no net metering infrastructure, so battery storage is essential — you can&apos;t just feed excess solar back to the grid. This makes a properly sized home battery system critical for maximizing your solar investment.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Small Home', kwh: '2-4 kWh', panels: '1-2 kW solar', for: 'Apartments, 1-2 bedrooms', cost: '$850 - $1,500' },
            { title: 'Family Home', kwh: '4-8 kWh', panels: '2-4 kW solar', for: '3-4 bedroom houses', cost: '$1,500 - $2,500' },
            { title: 'Large Home / Business', kwh: '10-20 kWh', panels: '5-10 kW solar', for: 'Large houses, small offices', cost: '$2,500 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Nigerians are ditching generators for solar</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Generator fuel costs have doubled since subsidy removal</li>
            <li>✓ Solar + battery is quieter, cleaner, and cheaper long-term</li>
            <li>✓ No dependence on fuel availability or price volatility</li>
            <li>✓ Increases property value in Lagos, Abuja, and Port Harcourt</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Upfront cost is higher than a generator, but pays back in 2-4 years</li>
            <li>⚠ Battery lifespan is 8-12 years — factor in replacement cost</li>
            <li>⚠ Installation quality varies — work with certified installers</li>
            <li>⚠ Import duties may add 10-20% to equipment costs</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=NG')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Design my NEPA-proof system <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
