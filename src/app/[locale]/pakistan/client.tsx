'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Clock, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function PakistanContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'Rs 14 / kWh', sub: '~$0.050 USD (subsidized)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '5.0 kWh/m²/day', sub: 'Excellent — among world\'s best', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Clock, label: 'Load shedding', value: '4-10 hrs/day', sub: 'Circular debt crisis ongoing', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$800 - $2,500', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Beat 8-12 hour power cuts with reliable battery backup</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Pakistan&apos;s power sector is in deep crisis. The circular debt has crippled the grid, leading to daily load shedding of 4-10 hours across most cities. While official tariffs are low at ~Rs 14/kWh (subsidized), the real cost comes from reliance on UPS systems, diesel generators, and the lost productivity during blackouts.</p>
          <p>With 5.0 kWh/m² of daily solar irradiance, Pakistan has among the best solar resources in the world — comparable to South Africa and Australia. The bright, dry climate across most of the country (especially Punjab, Sindh, and Balochistan) is ideal for solar PV. Even in the cooler northern regions, winter sunshine is abundant.</p>
          <p><strong>Key advantage:</strong> Pakistan has no net metering for residential users, so battery storage is essential. But the high solar irradiance means a well-sized system can generate enough power in 5-6 hours to cover a full day&apos;s consumption. The payback period against generator fuel costs alone is often just 2-3 years.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Small Home', kwh: '2-4 kWh', panels: '1-2 kW solar', for: 'Apartments, 1-2 bedrooms', cost: '$800 - $1,400' },
            { title: 'Family Home', kwh: '5-10 kWh', panels: '3-5 kW solar', for: 'Standard houses, 3-4 bedrooms', cost: '$1,400 - $2,500' },
            { title: 'Large / Farm', kwh: '12-20 kWh', panels: '6-10 kW solar', for: 'Farmhouses, large compounds', cost: '$2,500 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Pakistani families are cutting the grid cord</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ 4-10 hours of daily load shedding makes solar + battery a necessity</li>
            <li>✓ Worlds best solar resource (5.0 kWh/m²/day) — exceptional output per panel</li>
            <li>✓ Eliminates generator fuel costs and maintenance headaches</li>
            <li>✓ UPS batteries wear out fast — LiFePO4 solar batteries last 10+ years</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ No residential net metering — all excess solar needs battery storage</li>
            <li>⚠ Summer dust storms can reduce panel output — regular cleaning is essential</li>
            <li>⚠ High ambient temperatures reduce battery lifespan — ensure proper ventilation</li>
            <li>⚠ Work with reputable installers — equipment quality varies widely</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=PK')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Build my power cut solution <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
