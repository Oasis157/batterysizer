'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, TrendUp, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function SriLankaContent() {
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'Rs 35 / kWh', sub: '~$0.120 USD (CEB)', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '4.6 kWh/m²/day', sub: 'Tropical — moderate seasonality', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: TrendUp, label: 'Tariff trend', value: 'Rising sharply', sub: 'Post-crisis rate increases', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$900 - $2,500', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(s => { const Icon = s.icon; return (
          <div key={s.label} className={`${s.bg} rounded-xl p-4`}>
            <div className="flex items-center gap-1.5 mb-2"><Icon size={16} weight="duotone" className={s.color} /><span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{s.label}</span></div>
            <div className="text-base font-bold text-[var(--fg)]">{s.value}</div><div className="text-[10px] text-[var(--muted)]">{s.sub}</div>
          </div>
        );})}
      </div>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Never sit in the dark again — solar backup for Sri Lanka's power cuts</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>Sri Lanka&apos;s energy landscape has been transformed by the recent economic crisis. CEB tariffs, which had been relatively stable, rose sharply as the government removed subsidies and adjusted to new fuel pricing realities. At ~Rs 35/kWh, household electricity bills have become a major expense for many families, making solar + battery an increasingly attractive investment.</p>
          <p>The country receives 4.6 kWh/m² of daily solar irradiance, with the dry season (January-March) offering peak generation. Even during the monsoon periods (May-September in the southwest, October-January in the northeast), solar output remains viable — the tropical latitude ensures decent light levels year-round. Battery storage is key to managing the seasonal variation.</p>
          <p><strong>Key advantage:</strong> Sri Lanka has a net metering program through CEB that allows solar homeowners to offset their consumption. While the policy has seen adjustments, self-consumption with battery storage offers the best return by maximizing the use of your own solar power. The growing solar installer network in Colombo, Kandy, and Galle makes installations accessible.</p>
        </div>
      </CardContent></Card>
      <Card className="mb-6"><CardContent>
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended system size</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'City Home', kwh: '2-4 kWh', panels: '1-2 kW solar', for: 'Colombo apartments, 1-2 bedrooms', cost: '$900 - $1,500' },
            { title: 'Suburban', kwh: '5-8 kWh', panels: '3-5 kW solar', for: 'Standard houses, 3-4 bedrooms', cost: '$1,500 - $2,500' },
            { title: 'Large / Estate', kwh: '10-15 kWh', panels: '5-8 kW solar', for: 'Large homes, tea/rubber estates', cost: '$2,500 - $5,000' },
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
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Why Sri Lankans are future-proofing with solar</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>✓ Post-crisis tariff hikes have made solar more cost-effective than ever</li>
            <li>✓ Net metering through CEB allows you to offset grid consumption</li>
            <li>✓ Tropical sun provides reliable year-round generation with battery backup</li>
            <li>✓ Growing number of qualified installers and competitive equipment pricing</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-[var(--warm-light)]">
          <h3 className="text-sm mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Things to consider</h3>
          <ul className="space-y-2 text-xs text-[var(--muted)]">
            <li>⚠ Monsoon seasons reduce solar output — size battery for cloudy periods</li>
            <li>⚠ Net metering policy has changed recently — verify current CEB regulations</li>
            <li>⚠ Imported equipment costs have risen due to currency depreciation</li>
            <li>⚠ Consider a hybrid inverter for seamless switching between solar, battery, and grid</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          onClick={() => router.push('/en?country=LK')}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white px-8 py-4 text-base font-medium shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          Build my power cut backup <ArrowRight size={18} weight="bold" />
        </motion.button>
      </div>
    </div>
  );
}
