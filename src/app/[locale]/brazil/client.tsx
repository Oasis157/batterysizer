'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Drop, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function BrazilContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'R$ 0.85 / kWh', sub: '~$0.162 USD — rising due to water crisis', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.8 kWh/m²/day', sub: 'Excellent across most of the country', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Drop, label: 'Hydro dependence', value: '~60% of grid', sub: 'Water scarcity drives rate spikes', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: 'R$ 15,000 - R$ 30,000', sub: '~$3,000 - $6,000 USD', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Solar + battery: the best investment in Brazil's sunniest resource</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Brazil&apos;s electricity system is uniquely dependent on hydroelectric power — approximately 60% of the national grid relies on hydro, with major plants at Itaipu, Belo Monte, and Tucuruí. While this has historically provided clean, low-cost power, recurring droughts and water scarcity have exposed a critical vulnerability: when reservoirs run low, thermal plants are activated at much higher costs, driving rate increases across the board.</p>
          <p>At R$ 0.85/kWh (~$0.162 USD), Brazilian electricity rates are among the highest in Latin America. ANEEL (Agência Nacional de Energia Elétrica) regulates the market and has implemented a net metering program called the &quot;Sistema de Compensação de Energia Elétrica&quot; (SCEE), which allows solar homeowners to offset their consumption. Recent regulatory changes (Lei 14.300/2022) introduced gradual grid usage charges for new solar systems, making battery storage increasingly important for optimizing returns.</p>
          <p><strong>Key advantage:</strong> Brazil&apos;s 4.8 kWh/m²/day solar irradiance provides excellent generation across all regions, from the Northeast (approaching 5.5) to the Southeast (4.5-5.0). The growing local solar manufacturing industry has reduced equipment costs, and the mature installer network — concentrated in São Paulo, Rio de Janeiro, Belo Horizonte, and Brasília — makes installations accessible. Battery storage insulates homeowners from both rate hikes and grid instability caused by hydro variability.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Apartamento', kwh: '4-8 kWh', panels: '2-4 kW solar', for: 'Apartment units, 1-2 bedrooms, basic loads', cost: 'R$ 10,000 - R$ 18,000' },
            { title: 'Casa Padrão', kwh: '8-15 kWh', panels: '4-7 kW solar', for: 'Standard houses, 3-4 bedrooms with AC', cost: 'R$ 18,000 - R$ 30,000' },
            { title: 'Casa Grande', kwh: '15-25 kWh', panels: '7-10 kW solar', for: 'Large homes, pools, home offices', cost: 'R$ 30,000 - R$ 50,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Por que os brasileiros estão adotando energia solar</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ High electricity rates (R$ 0.85/kWh) with frequent rate adjustments due to hydro risk</li>
            <li>✓ Net metering (SCEE) through ANEEL reduces grid consumption charges</li>
            <li>✓ Excellent solar resource (4.8 kWh/m²/day) across all major regions</li>
            <li>✓ Strong local solar manufacturing and competitive installer pricing</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Lei 14.300/2022 introduced gradual grid usage charges for new solar systems</li>
            <li>⚠ Import duties on certain battery and inverter components can increase costs</li>
            <li>⚠ Installer quality varies — choose companies certified by INMETRO or ABGD</li>
            <li>⚠ High temperatures in northern regions can reduce panel efficiency by 5-10%</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=BR')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Calcule minha economia de energia <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
