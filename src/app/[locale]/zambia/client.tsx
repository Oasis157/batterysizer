'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Clock, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function ZambiaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'ZK 0.6 / kWh', sub: '~$0.023 USD (ZESCO)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '5.0 kWh/m²/day', sub: 'Excellent year-round resource', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Clock, label: 'Load shedding', value: '8-12 hrs/day', sub: 'Severe ongoing crisis', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$850 - $2,600', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Low-cost solar backup — your answer to ZESCO power cuts</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Zambia is facing one of the most severe energy crises in its history. Hydropower — the source of over 80% of the country&apos;s electricity — has been crippled by drought, leading to rolling blackouts of 8-12 hours daily across Lusaka and the Copperbelt. Businesses are shutting down, and households are spending a fortune on emergency power sources just to keep the lights on.</p>
          <p>At ZK 0.6/kWh (~$0.023 USD), ZESCO&apos;s official residential tariff is among the cheapest in the world — but this number is misleading. The real cost of electricity includes generator fuel, inverter batteries charged from the grid, and lost productivity during outages. A solar + battery system eliminates this hidden cost entirely, providing reliable power regardless of what happens with ZESCO or the water levels at Kariba Dam.</p>
          <p><strong>Key advantage:</strong> Zambia receives 5.0 kWh/m² of daily solar energy — putting it in the same league as South Africa and Australia for solar potential. The drought that crippled hydropower doesn&apos;t affect solar panels. Pair solar with battery storage and you have a power source that works every day, rain or shine, drought or flood.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Essential Backup', kwh: '2-3 kWh', panels: '1-2 kW solar', for: 'Lights, phone, TV, WiFi', cost: '$850 - $1,300' },
            { title: 'Comfort Living', kwh: '4-8 kWh', panels: '2-4 kW solar', for: 'Adds fridge, fans, microwave', cost: '$1,300 - $2,200' },
            { title: 'Full Independence', kwh: '10-15 kWh', panels: '5-8 kW solar', for: 'Whole home, geyser, stove', cost: '$2,200 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Zambians are switching to solar backup</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ 8-12 hours of daily load shedding makes solar + battery a necessity, not a luxury</li>
            <li>✓ Drought-proof — unlike hydropower, solar panels work regardless of rainfall</li>
            <li>✓ ZESCO tariffs will inevitably rise — lock in your energy cost with solar</li>
            <li>✓ Strong installer network in Lusaka, Kitwe, and Ndola</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Low official tariffs mean the financial payback from bill savings alone is slower</li>
            <li>⚠ The real value is reliability — avoiding generator fuel and lost productivity</li>
            <li>⚠ Import duties on solar equipment may apply — check current regulations</li>
            <li>⚠ Size your battery for the full outage duration, not just partial backup</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=ZM')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Build my low-cost backup <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
