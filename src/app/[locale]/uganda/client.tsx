'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, TrendUp, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function UgandaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'USh 650 / kWh', sub: '~$0.171 USD (UMEME)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.9 kWh/m²/day', sub: 'Excellent equatorial potential', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: TrendUp, label: 'Tariff trend', value: 'Rising annually', sub: 'UMEME prices increasing steadily', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$900 - $2,800', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Affordable backup power for Ugandan homes and businesses</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Uganda has some of the highest electricity tariffs in East Africa relative to income levels. UMEME, the main power distributor, charges around USh 650/kWh (~$0.171 USD) — and prices have been climbing year after year. For a typical Kampala household spending USh 150,000-300,000 monthly on electricity, the savings from solar can be transformative.</p>
          <p>Located on the equator, Uganda receives 4.9 kWh/m² of daily solar irradiance — more than enough to power a home. The country also has abundant hydroelectric capacity (including the new Karuma dam), but transmission losses and distribution inefficiencies mean end-users still face high bills and occasional outages. Battery storage lets you capture cheap solar energy during the day and use it during expensive evening peak hours.</p>
          <p><strong>Key advantage:</strong> Uganda has a growing middle class and a strong entrepreneurial culture. Many small businesses — from salons to restaurants — already use solar to reduce operating costs. Home battery systems are the natural next step for residential users who want the same benefits.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Urban Flat', kwh: '2-3 kWh', panels: '1-2 kW solar', for: 'Kampala apartments, 1-3 rooms', cost: '$900 - $1,500' },
            { title: 'Middle-Income Home', kwh: '4-7 kWh', panels: '2-4 kW solar', for: 'Suburban houses, 3-4 bedrooms', cost: '$1,500 - $2,500' },
            { title: 'Large Home / Business', kwh: '8-15 kWh', panels: '4-8 kW solar', for: 'Large homes, small enterprises', cost: '$2,500 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Ugandans are investing in home battery storage</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ UMEME bills are among the highest in East Africa — solar cuts this drastically</li>
            <li>✓ Equatorial location means consistent sun year-round — no seasonal surprises</li>
            <li>✓ Strong mobile money ecosystem makes equipment financing more accessible</li>
            <li>✓ Growing solar installer market in Kampala, Jinja, and Mbarara</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ No net metering yet — size your battery to capture all your solar</li>
            <li>⚠ Quality varies among importers — choose equipment with local warranty support</li>
            <li>⚠ Consider a hybrid inverter that can switch between solar, battery, and grid</li>
            <li>⚠ Upfront cost is the main barrier — but payback is typically 3-5 years</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=UG')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Design my affordable backup <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
