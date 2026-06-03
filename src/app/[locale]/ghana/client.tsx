'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Warning, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function GhanaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'GH₵ 1.8 / kWh', sub: '~$0.143 USD (ECG)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.7 kWh/m²/day', sub: 'Strong year-round sunshine', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Warning, label: 'Dumsor risk', value: 'Unstable supply', sub: 'Periodic load shedding', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$900 - $2,800', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Dumsor no more — keep your home powered through every outage</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Ghanaians know the word &quot;dumsor&quot; all too well — the Akan term for persistent on-and-off power outages that have plagued the country for over a decade. While the situation has improved since the 2014-2016 crisis, periodic load shedding and voltage fluctuations remain a concern for households and businesses relying on the Electricity Company of Ghana (ECG) grid.</p>
          <p>Ghana receives 4.7 kWh/m² of daily solar irradiance, providing a strong foundation for solar PV systems. Combined with battery storage, solar can shield your home from dumsor disruptions while reducing monthly ECG bills. With tariffs having increased by over 50% in recent years, the financial case gets stronger every year.</p>
          <p><strong>Key advantage:</strong> Ghana has a growing solar industry with government support. The Renewable Energy Act provides a framework for net metering, though implementation is still rolling out. For most households, a battery-backed system provides the most reliable path to energy independence — regardless of what happens with the grid.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Urban Apartment', kwh: '2-3 kWh', panels: '1-2 kW solar', for: 'Accra/Kumasi apartments', cost: '$900 - $1,500' },
            { title: 'Family House', kwh: '4-8 kWh', panels: '2-4 kW solar', for: '3-4 bedroom houses', cost: '$1,500 - $2,500' },
            { title: 'Large Property', kwh: '10-15 kWh', panels: '5-8 kW solar', for: 'Large homes, guest houses', cost: '$2,500 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Ghanaians are choosing solar over dumsor</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Freedom from dumsor — your lights stay on regardless of grid status</li>
            <li>✓ ECG tariffs rising faster than inflation — solar protects against future hikes</li>
            <li>✓ Strong sunshine all year, even during rainy seasons</li>
            <li>✓ Growing installer network in Accra, Kumasi, and Takoradi</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Net metering is not yet widely available — size battery accordingly</li>
            <li>⚠ Harmattan dust can reduce panel output — plan for occasional cleaning</li>
            <li>⚠ Verify installer credentials — the market has mixed quality providers</li>
            <li>⚠ Battery-only systems work but solar + battery gives the best return</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=GH')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Build my dumsor-proof system <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
