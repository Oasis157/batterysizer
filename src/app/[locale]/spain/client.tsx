'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, TrendUp, House, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function SpainContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.282 / kWh', sub: '~€0.258 — among highest in Europe', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.6 kWh/m²/day', sub: 'Best in continental Europe', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: TrendUp, label: 'Tariff trend', value: 'Rising steadily', sub: 'Post-2019 regulatory adjustments', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: House, label: 'Avg system cost', value: '€4,000 - €8,000', sub: '5-7 kW typical residential', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Aprovecha el sol español para reducir tu factura de luz hasta un 70%</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Spain has experienced an extraordinary solar boom since the 2019 repeal of the &ldquo;sun tax&rdquo; (impuesto al sol). With electricity rates among the highest in Europe at ~$0.282/kWh, solar self-consumption has become one of the best investments available to Spanish households. The country receives 4.6 kWh/m² of daily solar irradiance — the best of any continental European nation — with Andalusia and Extremadura regularly exceeding 5.0 kWh/m².</p>
          <p>The autoconsumo (net metering) framework is exceptionally favorable. Under Royal Decree 244/2019, households can offset their consumption at near-retail rates and receive compensation for surplus energy fed back to the grid. Installation costs have dropped significantly as the installer network has matured, and the payback period for a typical 5-7 kW system is now 5-8 years — dramatically shorter than most European countries.</p>
          <p><strong>Key advantage:</strong> Spain&apos;s combination of high retail electricity prices, exceptional solar resource, and pro-solar regulation creates one of the best solar investment climates in the world. Battery storage allows you to maximize self-consumption and protect against future rate increases from major suppliers like Iberdrola, Endesa, and Naturgy.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Apartment / Flat', kwh: '3-5 kWh', panels: '1.5-3 kW solar', for: 'Madrid, Barcelona apartments, 1-2 bedrooms', cost: '€3,000 - €5,000' },
            { title: 'Suburban Home', kwh: '6-10 kWh', panels: '4-6 kW solar', for: 'Standard houses, 3-4 bedrooms', cost: '€5,000 - €8,000' },
            { title: 'Large / Villa', kwh: '12-20 kWh', panels: '6-10 kW solar', for: 'Large homes, villas in Costa del Sol', cost: '€8,000 - €14,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Por qué los españoles están apostando por el sol</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Highest retail electricity rates in continental Europe — solar cuts bills dramatically</li>
            <li>✓ Favorable autoconsumo net metering since 2019 sun tax repeal</li>
            <li>✓ Excellent irradiance, especially in Andalusia, Extremadura, and Valencia</li>
            <li>✓ Mature installer market with competitive pricing and strong supply chain</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>&#9888; Condominium (comunidad de vecinos) roof access requires neighbor approval</li>
            <li>&#9888; IVA (VAT) on solar installations is 21% — though some regions offer reductions</li>
            <li>&#9888; Grid injection limits may apply — verify with your distributor (Iberdrola, Endesa, etc.)</li>
            <li>&#9888; Battery payback improves with the PVPC time-of-use tariff — optimize your rate plan</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=ES')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Calcula mi ahorro energético <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
