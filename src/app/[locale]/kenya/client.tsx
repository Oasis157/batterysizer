'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Leaf, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function KenyaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'KSh 28 / kWh', sub: '~$0.218 USD (KPLC)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '5.0 kWh/m²/day', sub: 'Near equatorial — ideal for solar', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Leaf, label: 'Renewable leadership', value: '90%+ renewable grid', sub: 'Geothermal + hydro dominant', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$1,000 - $3,200', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Stop overpaying Kenya Power — solar + battery is cheaper and cleaner</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Kenya is a global leader in renewable energy — over 90% of its grid power comes from geothermal, hydro, and wind. But rising electricity demand and aging infrastructure mean power outages are still common in many areas. With KPLC tariffs steadily climbing (now ~KSh 28/kWh for residential), solar + battery offers both backup security and long-term savings.</p>
          <p>Kenya straddles the equator, receiving 5.0 kWh/m² of daily solar irradiance with minimal seasonal variation. This means solar panels produce consistent power year-round — no winter slump. Combined with battery storage, a typical Kenyan household can cut electricity bills by 60-80% while keeping lights on during outages.</p>
          <p><strong>Key advantage:</strong> Kenya has a mature solar market with many qualified installers. The government supports renewable energy through tax incentives and net metering is available through KPLC in some regions. Kenya is also a hub for PAYGO (pay-as-you-go) solar financing, making systems accessible even without large upfront capital.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Apartment', kwh: '2-4 kWh', panels: '1-2 kW solar', for: 'Nairobi apartments, 1-3 rooms', cost: '$1,000 - $1,800' },
            { title: 'Suburban Home', kwh: '5-8 kWh', panels: '2-4 kW solar', for: 'Standalone houses, 3-4 bedrooms', cost: '$1,800 - $3,000' },
            { title: 'Farm / Large Home', kwh: '10-15 kWh', panels: '5-8 kW solar', for: 'Farms, large compounds', cost: '$3,000 - $6,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Kenyans are saying goodbye to Kenya Power</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ KPLC tariffs have risen steadily — solar locks in your energy cost</li>
            <li>✓ Year-round sunshine means consistent solar output, no winter dip</li>
            <li>✓ Available net metering lets you sell excess power back to KPLC</li>
            <li>✓ PAYGO financing makes solar accessible without large upfront payment</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Battery costs are the biggest expense — size correctly for your needs</li>
            <li>⚠ Check if your local KPLC branch supports net metering</li>
            <li>⚠ Nairobi&apos;s occasional cloudy seasons may reduce output slightly</li>
            <li>⚠ Import-quality equipment lasts longer than cheaper alternatives</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=KE')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Switch to solar — size my system <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
