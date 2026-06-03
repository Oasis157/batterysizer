'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, TrendUp, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function UnitedStatesContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.165 / kWh', sub: 'National average — varies by state', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.5 kWh/m²/day', sub: 'Southwest leads at 6.0+', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: TrendUp, label: 'Federal incentive', value: '30% ITC tax credit', sub: 'Available through 2032', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$10,000 - $20,000', sub: 'Before ITC — varies by state', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Maximize your 30% solar tax credit with the right battery system</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>The U.S. electricity market is famously fragmented — rates range from under $0.10/kWh in Idaho to over $0.30/kWh in California and the Northeast. This means solar + battery payback varies dramatically by location, but the fundamentals have never been stronger nationwide. The Inflation Reduction Act (IRA) locked in the <strong>federal Investment Tax Credit (ITC) at 30%</strong> through 2032, making solar more affordable than ever.</p>
          <p>Solar irradiance averages 4.5 kWh/m²/day nationally, but the Southwest (Arizona, Nevada, New Mexico) regularly exceeds 6.0, while the Pacific Northwest sees 3.5-4.0. Battery storage is increasingly critical as net metering policies shift — California&apos;s NEM 3.0 slashed export rates by ~75%, making self-consumption with batteries far more attractive than sending power to the grid.</p>
          <p><strong>Key advantage:</strong> The 30% federal ITC is available to all homeowners with tax liability. Combined with state-level incentives (like California&apos;s SGIP battery rebate, New York&apos;s NY-Sun, or Massachusetts&apos; SMART program), the effective cost of a solar + battery system can be reduced by 40-50%. With ERCOT&apos;s grid reliability concerns in Texas and frequent PG&amp;E public safety power shutoffs in California, battery backup provides both financial and resilience value.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Apartment / Small Home', kwh: '5-10 kWh', panels: '3-5 kW solar', for: 'Condos, small houses, 1-2 bedrooms', cost: '$10,000 - $15,000' },
            { title: 'Standard Home', kwh: '10-20 kWh', panels: '5-8 kW solar', for: '3-4 bedroom homes with AC', cost: '$15,000 - $25,000' },
            { title: 'Large Home / EV', kwh: '20-30 kWh', panels: '8-12 kW solar', for: 'Large homes with EV charging', cost: '$25,000 - $40,000' },
          ].map(tier => (
            <div key={tier.title} className="bg-[var(--bg)] rounded-xl p-5 border border-[var(--border)]">
              <h3 className="text-sm mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{tier.title}</h3>
              <div className="text-2xl font-bold text-[var(--primary)]">{tier.kwh}</div>
              <div className="text-xs text-[var(--muted)] mt-1">{tier.panels}</div>
              <div className="text-xs text-[var(--muted)] mt-2"><strong>{tier.for}</strong></div>
              <div className="text-xs text-[var(--muted)]">Est. {tier.cost} before ITC</div>
            </div>
          ))}
        </div>
      </CardContent></Card>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="p-5 rounded-xl bg-[var(--primary-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Americans are going solar + storage now</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ 30% federal ITC tax credit — available to all homeowners through 2032</li>
            <li>✓ Net metering in 40+ states with growing battery incentives</li>
            <li>✓ Battery backup protects against grid outages (PG&amp;E shutoffs, ERCOT blackouts)</li>
            <li>✓ Falling lithium-ion battery prices and competitive installer market</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ NEM 3.0 in California drastically reduces export rates — battery storage is now essential</li>
            <li>⚠ Local permit processes and HOA approvals can delay installations by weeks</li>
            <li>⚠ State and utility incentives vary widely — check your local programs before purchasing</li>
            <li>⚠ Finance charges on solar loans can eat into savings — compare cash vs. loan vs. lease</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=US')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Maximize my tax credit — size my system <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
