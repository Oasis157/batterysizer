'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, House, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function TanzaniaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'TSh 230 / kWh', sub: '~$0.091 USD (TANESCO)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '5.1 kWh/m²/day', sub: 'Among Africa\'s highest', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: House, label: 'Rural access', value: '~40% electrified', sub: 'Huge off-grid potential', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$800 - $2,500', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Off-grid living made easy with solar + battery storage</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Tanzania has one of Africa&apos;s best solar resources at 5.1 kWh/m²/day, yet only about 40% of the population has access to the electricity grid. For rural and peri-urban households, solar + battery isn&apos;t just about savings — it&apos;s often the only reliable way to get electricity. Even grid-connected homes in Dar es Salaam and Arusha face frequent outages and voltage drops.</p>
          <p>TANESCO tariffs are relatively affordable at ~$0.091/kWh, but the real cost is unreliability. Businesses lose income during blackouts, and households resort to expensive alternatives like kerosene lamps. A solar + battery system provides 24/7 power at a predictable cost, with zero dependence on fuel deliveries or grid availability.</p>
          <p><strong>Key advantage:</strong> Tanzania&apos;s equatorial location means solar output is consistent throughout the year with minimal seasonal variation. Combined with declining battery prices, a system that would have cost 2× more five years ago is now within reach for middle-income households.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Basic Home', kwh: '2-3 kWh', panels: '0.5-1 kW solar', for: 'Lights, phone charging, TV', cost: '$800 - $1,200' },
            { title: 'Comfortable Home', kwh: '4-6 kWh', panels: '1-3 kW solar', for: 'Adds fridge, fans, laptop', cost: '$1,200 - $2,000' },
            { title: 'Full Home / Business', kwh: '8-15 kWh', panels: '3-6 kW solar', for: 'Full household, small shop', cost: '$2,000 - $4,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Tanzanians are going off-grid</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Solar works even where the grid doesn&apos;t reach — true energy independence</li>
            <li>✓ Consistent equatorial sunshine means predictable year-round power</li>
            <li>✓ No fuel costs — unlike diesel generators, sunlight is free and unlimited</li>
            <li>✓ Government supports off-grid solar through rural electrification programs</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Off-grid systems need larger batteries — no grid backup available</li>
            <li>⚠ Transport and installation costs can be higher in remote areas</li>
            <li>⚠ Check equipment warranties — local support matters more than price</li>
            <li>⚠ Start small and expand — most Tanzanian users grow their systems over time</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=TZ')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Design my off-grid system <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
