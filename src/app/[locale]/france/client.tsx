'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Factory, Lightning, House, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function FranceContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.272 / kWh', sub: '~€0.250 — high despite nuclear baseload', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '3.8 kWh/m²/day', sub: 'South > 4.5; north ~3.0', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Factory, label: 'Grid context', value: 'Nuclear-dominant', sub: 'Cheap baseload, peak rates still high', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: House, label: 'Avg system cost', value: '€5,000 - €10,000', sub: '5-7 kW typical residential', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Protégez-vous des hausses du prix de l'électricité avec le solaire</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>France&apos;s electricity market is unique in Europe. While the country&apos;s nuclear fleet provides cheap baseload power (ARENH-regulated rates are among the lowest in Europe for base supply), residential retail tariffs from EDF have climbed to ~$0.272/kWh — comparable to neighboring countries. The difference between cheap nuclear generation and high retail prices creates a compelling arbitrage opportunity for solar self-consumption.</p>
          <p>The autoconsommation avec vente du surplus (self-consumption with surplus sale) framework allows households to offset their own consumption first and sell excess generation to EDF at a guaranteed feed-in tariff. EDF Obligation d&apos;Achat (EDF OA) provides a 20-year purchase contract for surplus electricity, making the investment predictable and bankable. The government further supports adoption through MaPrimeRénov&apos; subsidies and reduced VAT (TVA à 10%) on solar installations under 3 kW.</p>
          <p><strong>Key advantage:</strong> While northern France receives only ~3.0 kWh/m²/day, the southern half of the country — from Nouvelle-Aquitaine through Occitanie to Provence-Alpes-Côte d&apos;Azur — exceeds 4.5 kWh/m²/day, comparable to parts of Spain. Battery storage is particularly valuable in France because it lets you avoid buying back your own electricity during peak evening hours when EDF&apos;s tempo or peak/off-peak tariffs make grid power most expensive.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Paris Apartment', kwh: '2-4 kWh', panels: '1-3 kW solar', for: 'Small apartments, limited roof space', cost: '€4,000 - €6,000' },
            { title: 'Suburban Home', kwh: '5-9 kWh', panels: '3-6 kW solar', for: 'Maison individuelle, 3-4 bedrooms', cost: '€6,000 - €10,000' },
            { title: 'Large / Rural', kwh: '10-15 kWh', panels: '6-9 kW solar', for: 'Large homes in southern France, farms', cost: '€10,000 - €15,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Pourquoi les Français choisissent le solaire</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ EDF OA provides 20-year guaranteed purchase contract for surplus solar power</li>
            <li>✓ MaPrimeRénov&apos; subsidies can cover 10-40% of installation costs</li>
            <li>✓ Reduced TVA at 10% (vs 20% standard) for systems under 3 kW</li>
            <li>✓ Southern France has excellent irradiance comparable to Mediterranean neighbors</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>&#9888; Northern France has lower irradiance (~3.0) — ensure adequate panel area</li>
            <li>&#9888; Nuclear baseload reduces the night-time arbitrage benefit of batteries</li>
            <li>&#9888; Administrative procedures for grid connection can be complex (Consuel certification)</li>
            <li>&#9888; Self-consumption rates above 50% maximize ROI — size your battery accordingly</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=FR')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Calculez mes économies d'énergie <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
