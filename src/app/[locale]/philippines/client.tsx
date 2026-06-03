'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Wind, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function PhilippinesContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '₱12 / kWh', sub: '~$0.200 USD (Meralco)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.5 kWh/m²/day', sub: 'Good year-round potential', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Wind, label: 'Typhoon risk', value: '20+ storms/year', sub: 'Grid outages are common', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$1,200 - $3,500', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Cut your Meralco bill in half with solar + battery backup</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>The Philippines has some of the highest electricity rates in Southeast Asia. Meralco and other utilities charge around ₱12/kWh — roughly double the regional average. Combined with frequent typhoons that knock out power lines for days, the case for home solar + battery is compelling.</p>
          <p>The country receives 4.5 kWh/m² of daily solar irradiance, with the dry season (Nov-Apr) offering near-perfect conditions for solar generation. Net metering has been available since the Renewable Energy Act of 2008, allowing homeowners to export excess power back to the grid for credits on their bill.</p>
          <p><strong>Key advantage:</strong> With Meralco rates rising 4-6% annually and typhoon intensity increasing due to climate change, solar + battery provides both financial protection and energy security. The payback period for a typical Manila home is just 4-6 years.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Condominium', kwh: '2-3 kWh', panels: '1-2 kW solar', for: 'Metro Manila condos, 1-2 bedrooms', cost: '$1,200 - $1,800' },
            { title: 'Suburban Home', kwh: '5-8 kWh', panels: '3-5 kW solar', for: 'Typical village house, 3-4 bedrooms', cost: '$1,800 - $3,000' },
            { title: 'Large Home', kwh: '10-15 kWh', panels: '5-8 kW solar', for: 'Large houses, small businesses', cost: '$3,000 - $6,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Filipino families are switching to solar</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Meralco rates are among SE Asia&apos;s highest — solar cuts bills by 50-70%</li>
            <li>✓ Net metering lets you earn credits for excess solar power</li>
            <li>✓ Battery backup keeps the lights on during typhoon outages</li>
            <li>✓ Rising electricity tariffs make payback faster every year</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Typhoon season can affect solar generation — ensure panels are rated for 180+ km/h winds</li>
            <li>⚠ Net metering applications can take 2-3 months — plan ahead</li>
            <li>⚠ Condo installations may face HOA restrictions on rooftop panels</li>
            <li>⚠ Battery lifespan is 8-12 years — factor replacement into your long-term costs</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=PH')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Cut my bill — size my system <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
