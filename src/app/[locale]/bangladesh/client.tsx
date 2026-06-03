'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, House, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function BangladeshContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '৳8 / kWh', sub: '~$0.070 USD (BPDB)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.3 kWh/m²/day', sub: 'Good — moderate seasonal variation', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: House, label: 'Rural electrification', value: '99%+ connected', sub: 'But reliability remains poor', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$800 - $2,200', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Solar home systems: powering rural and urban Bangladesh</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Bangladesh has achieved remarkable progress in rural electrification — over 99% of the population now has grid access. But the reality on the ground is that power quality remains poor, with frequent voltage fluctuations and load shedding, especially during the hot summer months when demand peaks and gas-fired power plants struggle to keep up.</p>
          <p>Solar irradiance averages 4.3 kWh/m²/day across Bangladesh, with the pre-monsoon season (March-May) offering the best conditions. The monsoon season (June-October) brings heavy cloud cover that significantly reduces solar output — this is the key reason battery storage is important for Bangladesh homes, allowing you to store excess power from clear days for use during cloudy periods.</p>
          <p><strong>Key advantage:</strong> Bangladesh has a long history with solar energy — over 6 million Solar Home Systems (SHS) have been installed in rural areas through IDCOL financing programs. This ecosystem means there are many qualified installers and established supply chains. The country also hosts major solar panel manufacturing facilities.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Small Flat', kwh: '2-3 kWh', panels: '1-2 kW solar', for: 'Dhaka apartments, 1-2 bedrooms', cost: '$800 - $1,200' },
            { title: 'Family Home', kwh: '4-6 kWh', panels: '2-4 kW solar', for: 'Standard houses, 3-4 bedrooms', cost: '$1,200 - $2,000' },
            { title: 'Large Home', kwh: '8-15 kWh', panels: '5-8 kW solar', for: 'Large houses, rural compounds', cost: '$2,000 - $4,500' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Bangladeshis are solarizing their homes</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Frequent load shedding in summer makes backup power essential</li>
            <li>✓ Established solar industry with many qualified installers nationwide</li>
            <li>✓ Battery storage smooths over monsoon season cloud cover</li>
            <li>✓ Rural Solar Home System programs can be upgraded with larger batteries</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Monsoon season (Jun-Oct) significantly reduces solar output — size battery accordingly</li>
            <li>⚠ Dhaka&apos;s rooftop space is limited — consider balcony or wall-mounted panels</li>
            <li>⚠ No net metering for most residential users — battery storage is essential</li>
            <li>⚠ Import duties on lithium batteries can be high — check current tariff rates</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=BD')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Power my home with solar <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
