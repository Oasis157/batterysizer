'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Wind, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function CanadaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.140 / kWh', sub: 'Avg — Ontario $0.17, Alberta $0.16', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '3.5 kWh/m²/day', sub: 'Lower — need larger arrays', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Wind, label: 'Cold climate edge', value: '-20°C to +40°C', sub: 'LiFePO4 batteries excel in cold', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: 'CAD $12,000 - $22,000', sub: 'Before provincial incentives', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Winter-ready: solar + battery backup for Canadian homes</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Canada&apos;s reputation for cold weather often overshadows its excellent solar potential — especially during long summer days when northern latitudes provide extended daylight hours. While the national average irradiance of 3.5 kWh/m²/day is lower than sunbelt countries, modern solar panels actually perform more efficiently in cooler temperatures, partially offsetting the reduced light.</p>
          <p>Electricity rates vary significantly by province: Ontario at ~$0.17/kWh (among the highest in North America), Alberta at ~$0.16/kWh with a deregulated market, and Quebec at ~$0.07/kWh thanks to abundant hydro power. Battery storage is particularly compelling in Ontario and Alberta, where time-of-use pricing and peak demand charges make self-consumption highly valuable.</p>
          <p><strong>Key advantage:</strong> LiFePO4 (lithium iron phosphate) batteries excel in Canadian winters. Unlike lead-acid batteries that lose capacity in cold, modern lithium batteries maintain strong performance to -20°C, making them ideal for heated garages or basement installations. Net metering programs in Ontario (net metering 1:1), British Columbia, Alberta, and Quebec allow you to offset grid consumption, while the Canada Greener Homes Grant has provided up to CAD $5,000 for solar installations.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Condo / Townhouse', kwh: '5-10 kWh', panels: '3-4 kW solar', for: '1-2 bedroom units with balcony/roof', cost: 'CAD $8,000 - $14,000' },
            { title: 'Suburban Home', kwh: '10-15 kWh', panels: '5-7 kW solar', for: '3-4 bedroom homes with basement', cost: 'CAD $14,000 - $22,000' },
            { title: 'Large Home / EV', kwh: '15-25 kWh', panels: '7-10 kW solar', for: 'Large homes with EV and electric heating', cost: 'CAD $22,000 - $35,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Canadians are battery-ready for winter</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Net metering in Ontario, BC, Alberta, and Quebec offsets grid consumption 1:1</li>
            <li>✓ LiFePO4 batteries perform excellently in cold Canadian winters</li>
            <li>✓ Canada Greener Homes Grant (up to CAD $5,000) and provincial rebates available</li>
            <li>✓ Extended summer daylight (15-17 hours) provides peak generation when you need it most</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Lower winter irradiance means larger solar arrays and battery capacity needed</li>
            <li>⚠ Snow accumulation on panels — consider tilt mounts and snow-shedding designs</li>
            <li>⚠ Provincial incentives vary and change frequently — verify current programs</li>
            <li>⚠ Quebec&apos;s low hydro rates make solar less financially compelling than in Ontario or Alberta</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=CA')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Size my winter-ready system <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
