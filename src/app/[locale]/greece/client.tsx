'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, Wind, Drop, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function GreeceContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.262 / kWh', sub: '~€0.240 — high with recent increases', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.8 kWh/m²/day', sub: 'Best in Europe — year-round sunshine', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Wind, label: 'Net metering', value: 'Ενεργειακός Συμψηφισμός', sub: 'Energy offset scheme available', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: Drop, label: 'Island advantage', value: 'High grid costs', sub: 'Islands benefit most from solar', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Lower your electricity costs with solar battery storage</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Greece boasts the best solar irradiance in Europe at 4.8 kWh/m²/day — higher than Spain, Italy, or Portugal — with many islands and the Peloponnese regularly exceeding 5.0 kWh/m²/day. This exceptional solar resource, combined with electricity rates of ~$0.262/kWh that have risen sharply in recent years, makes Greece one of the most attractive solar markets on the continent.</p>
          <p>The net metering scheme (Ενεργειακός Συμψηφισμός) allows households to offset their electricity consumption on an annual basis. Your solar system generates credits during sunny months that can be drawn down during the winter or at night. The scheme has been progressively simplified, and recent legislation has removed many of the bureaucratic barriers that previously slowed adoption.</p>
          <p><strong>Key advantage:</strong> Greek island communities face exceptionally high grid electricity costs due to expensive diesel generation and long underwater cable maintenance. For island homes in the Cyclades, Dodecanese, Ionian islands, and Crete, solar + battery systems can achieve grid parity far faster than on the mainland. Year-round sunshine means minimal seasonal variation — you generate meaningful power even in December, unlike northern European countries with severe winter drops.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Athens Apartment', kwh: '3-5 kWh', panels: '2-3 kW solar', for: 'City apartments, limited roof space', cost: '€3,500 - €5,500' },
            { title: 'Suburban / Island Home', kwh: '6-10 kWh', panels: '4-6 kW solar', for: 'Standard homes, island residences', cost: '€5,500 - €9,000' },
            { title: 'Large Island Estate', kwh: '12-20 kWh', panels: '6-10 kW solar', for: 'Large homes, island villas, agrotourism', cost: '€9,000 - €15,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Greeks are investing in solar storage</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Best solar irradiance in Europe at 4.8 kWh/m²/day — exceptional year-round</li>
            <li>✓ High electricity rates with recent PPC price increases driving payback urgency</li>
            <li>✓ Island communities benefit most — avoids expensive diesel-based grid power</li>
            <li>✓ Simplifying net metering regulations and growing installer ecosystem</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>&#9888; Island grid interconnection constraints may limit injection capacity</li>
            <li>&#9888; Bureaucracy for net metering application requires patience and documentation</li>
            <li>&#9888; Summer heat above 40°C reduces panel efficiency — factor temperature derating</li>
            <li>&#9888; Tourism-heavy island seasons create variable consumption patterns year-round</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=GR')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Calculate my energy savings <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
