'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Factory, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function VietnamContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '₫2,000 / kWh', sub: '~$0.080 USD (EVN)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.1 kWh/m²/day', sub: 'South: 5.0+ | North: 3.0+', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Factory, label: 'Grid demand', value: 'Rising 10%+/yr', sub: 'Industrial growth driving tariffs', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$900 - $2,800', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Maximize your solar investment with battery storage</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Vietnam is one of the fastest-growing economies in Southeast Asia, and electricity demand is rising at over 10% per year. EVN tariffs, while still relatively low at ~₫2,000/kWh, have been increasing steadily to fund new power plants and grid upgrades. For homeowners, solar + battery is a way to lock in lower energy costs and gain energy independence.</p>
          <p>Vietnam&apos;s solar resource varies significantly by region. The south (Ho Chi Minh City, Mekong Delta) receives 5.0+ kWh/m²/day — comparable to Thailand — while the north (Hanoi, Haiphong) gets only 3.0-3.5 due to cloudy winters. Battery storage is especially valuable in the north, where winter solar output is low and grid demand peaks.</p>
          <p><strong>Key advantage:</strong> Vietnam has a thriving rooftop solar market with strong government support (Decision 13/2020 on net metering). While net metering policies have been adjusted, self-consumption solar + battery remains highly viable. Many Vietnamese manufacturers offer competitive equipment prices.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'City Apartment', kwh: '2-4 kWh', panels: '1-2 kW solar', for: 'HCMC/Hanoi apartments, 1-2 rooms', cost: '$900 - $1,500' },
            { title: 'Townhouse', kwh: '5-8 kWh', panels: '3-5 kW solar', for: 'Typical tube houses, 3-4 floors', cost: '$1,500 - $2,500' },
            { title: 'Villa / Large Home', kwh: '10-15 kWh', panels: '5-8 kW solar', for: 'Detached houses, small factories', cost: '$2,500 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Vietnamese families are choosing solar</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Rising EVN tariffs make solar more attractive every year</li>
            <li>✓ Net metering allows excess solar to offset grid consumption</li>
            <li>✓ Local manufacturing makes equipment more affordable</li>
            <li>✓ Battery backup protects against grid instability and brownouts</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Northern Vietnam&apos;s cloudy winters reduce solar output — size for worst month</li>
            <li>⚠ Net metering policies have changed — verify current regulations</li>
            <li>⚠ Tube house rooftops can be small — measure your available area first</li>
            <li>⚠ Installation quality varies — choose certified installers with warranties</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=VN')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Maximize my solar investment <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
