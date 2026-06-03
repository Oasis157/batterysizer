'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, MapPin, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function IndonesiaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'Rp 1,500 / kWh', sub: '~$0.098 USD (PLN)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.3 kWh/m²/day', sub: 'Consistent equatorial sun', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: MapPin, label: 'Archipelago', value: '17,000+ islands', sub: 'Many remote/off-grid areas', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$1,000 - $3,000', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Reliable home power for Indonesia's diverse geography — from Java to Papua</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Indonesia is the world&apos;s largest archipelago, with over 17,000 islands and significant disparities in grid access. While Jakarta and Java have relatively reliable PLN electricity (~Rp 1,500/kWh), many outer islands depend on diesel generators that cost 3-5× more. Solar + battery is often the most practical path to 24/7 electricity in these areas.</p>
          <p>Being on the equator, Indonesia receives consistent sunlight year-round with minimal seasonal variation. The daily solar irradiance of 4.3 kWh/m² is spread evenly across the year — unlike temperate countries that see big winter drops. This makes solar highly predictable and reliable for budgeting energy costs.</p>
          <p><strong>Key advantage:</strong> Indonesia does not currently offer net metering (PLN regulations limit grid exports), so battery storage is essential to capture excess solar generation. A properly sized battery turns your solar system into true 24-hour power, especially valuable in areas with unreliable grid supply.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'City Home', kwh: '2-4 kWh', panels: '1-2 kW solar', for: 'Jakarta/Surabaya homes, 1-2 bedrooms', cost: '$1,000 - $1,600' },
            { title: 'Suburban', kwh: '5-8 kWh', panels: '3-5 kW solar', for: 'Standard houses, 3-4 bedrooms', cost: '$1,600 - $2,800' },
            { title: 'Large / Off-grid', kwh: '10-20 kWh', panels: '5-10 kW solar', for: 'Large homes, remote islands', cost: '$2,800 - $6,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Indonesians are turning to solar power</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Year-round equatorial sunshine means no seasonal solar slump</li>
            <li>✓ Essential for outer islands — often cheaper than diesel generators</li>
            <li>✓ PLN tariffs are rising — solar locks in your long-term energy cost</li>
            <li>✓ Growing installer network across Java, Sumatra, and Sulawesi</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ No net metering — battery is essential to capture excess solar power</li>
            <li>⚠ Equipment import costs can be high — buy from established local distributors</li>
            <li>⚠ Remote island installations have higher transport and labor costs</li>
            <li>⚠ Check PLN regulations — grid-tied systems may require permits</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=ID')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Design my home power solution <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
