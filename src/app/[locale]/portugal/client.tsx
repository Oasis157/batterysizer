'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, TrendUp, Wind, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function PortugalContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: '$0.262 / kWh', sub: '~€0.240 — above EU average', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.5 kWh/m²/day', sub: 'Among best in mainland Europe', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: TrendUp, label: 'Net metering', value: 'UPAC scheme', sub: 'Unidades de Produção para Autoconsumo', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: Wind, label: 'Renewables share', value: '~60% of grid', sub: 'Strong government push for solar', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Solar + battery: the smartest investment for Portuguese homeowners</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Portugal enjoys some of the best solar resources in Europe, with an average of 4.5 kWh/m²/day across the country and the Algarve region regularly exceeding 5.0. Combined with electricity rates of ~$0.262/kWh — among the highest in the EU relative to local purchasing power — solar self-consumption offers compelling economics for Portuguese households.</p>
          <p>The UPAC (Unidades de Produção para Autoconsumo) regulatory framework allows households to install solar systems for self-consumption with simplified registration. Surplus energy can be injected into the grid through a net metering arrangement, with compensation calculated based on the O&M tariff (tarifa de acesso às redes). The government has actively promoted solar adoption through VAT reductions on equipment and streamlined licensing for systems up to 30 kW.</p>
          <p><strong>Key advantage:</strong> Portugal&apos;s mild Atlantic climate means solar panels operate efficiently year-round — unlike hotter southern European countries where extreme heat reduces panel efficiency. Battery storage helps you maximize the value of your UPAC system by storing midday surplus for evening use, when EDP and other suppliers charge premium rates during peak hours.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Lisbon/Porto Apt', kwh: '3-5 kWh', panels: '2-3 kW solar', for: 'City apartments, 1-2 bedrooms', cost: '€3,500 - €5,500' },
            { title: 'Suburban Home', kwh: '6-10 kWh', panels: '4-6 kW solar', for: 'Standard moradia, 3-4 bedrooms', cost: '€5,500 - €9,000' },
            { title: 'Large / Quinta', kwh: '12-20 kWh', panels: '6-10 kW solar', for: 'Large homes, quintas in Algarve', cost: '€9,000 - €15,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Portuguese homeowners are going solar</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Excellent irradiance of 4.5 kWh/m²/day with the Algarve exceeding 5.0</li>
            <li>✓ Simplified UPAC self-consumption registration for systems under 30 kW</li>
            <li>✓ High retail electricity rates make payback attractive (5-8 years typical)</li>
            <li>✓ Growing installer network with increasingly competitive pricing</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>&#9888; UPAC registration process requires licensed electrician certification</li>
            <li>&#9888; IVA on equipment is 23% (mainland) — though reduced rates apply for systems under 1 kW</li>
            <li>&#9888; Grid injection compensation is based on O&M rates, not retail price</li>
            <li>&#9888; Verify inverter compatibility with DGEG (Direção-Geral de Energia) technical requirements</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=PT')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Calculate my energy savings <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
