'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, MapPin, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function PeruContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.197 / kWh', sub: 'Moderate but rising (PEN)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '5.0 kWh/m²/day', sub: 'Highlands: 5.5+ (excellent)', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: MapPin, label: 'Net metering', value: 'NOT available', sub: 'Battery storage is essential', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$900 - $2,500', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Grid backup and off-grid solutions for every region of Peru</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Peru offers excellent solar conditions with an average of 5.0 kWh/m²/day of irradiance — and the southern highlands and coastal deserts regularly exceed 5.5. At $0.197/kWh, electricity is moderately priced but trending upward, creating a growing incentive to generate your own power. However, there is a critical catch: Peru does <strong>not</strong> have a net metering program. Residential solar exports to the grid are not compensated, which makes battery storage an essential component of any solar installation.</p>
          <p>Without the ability to sell power back to the grid, the economic model shifts to self-consumption. Solar panels charge batteries during the day, and stored power is used in the evening and early morning. This makes the system design more complex but also more rewarding — you become genuinely energy independent. The mining industry has already embraced large-scale solar in Peru, but the residential market is still in its early stages.</p>
          <p><strong>Key advantage:</strong> With battery storage, you can store cheap solar power during the day and avoid paying grid rates at night. Given Peru&apos;s rising electricity prices and excellent solar resource, a well-designed off-grid or hybrid system can achieve attractive returns while providing energy resilience in areas with unreliable grid service.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'City Apartment', kwh: '3-5 kWh', panels: '1-2 kW solar', for: 'Lima apartments, 1-2 bedrooms', cost: '$900 - $1,500' },
            { title: 'Suburban Home', kwh: '6-10 kWh', panels: '3-5 kW solar', for: 'Standard houses, 3-4 bedrooms', cost: '$1,500 - $2,500' },
            { title: 'Large / Highland', kwh: '12-18 kWh', panels: '5-8 kW solar', for: 'Large homes, highland estates', cost: '$2,500 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Por qué los peruanos están migrando a energía solar</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Excellent solar resource — highlands and coast offer 5.0+ kWh/m²/day</li>
            <li>✓ Hardly any net metering — full self-consumption means real energy independence</li>
            <li>✓ Battery storage provides backup during grid outages (common in some areas)</li>
            <li>✓ Rising electricity prices make solar + battery increasingly cost-effective</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ No net metering means every kWh stored replaces a kWh purchased — battery is mandatory</li>
            <li>⚠ Lima&apos;s coastal fog (garúa) from May-October reduces solar output significantly</li>
            <li>⚠ Solar installer market is still developing — vet your installer carefully</li>
            <li>⚠ Equipment imports may face duties — factor these into your budget</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=PE')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Diseña mi solución energética <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
