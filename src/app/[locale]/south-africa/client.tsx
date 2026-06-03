'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Sun, Lightning, CurrencyDollar, Clock, ArrowRight } from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';

export default function SouthAfricaCalculator() {
  const router = useRouter();

  return (
    <div>
      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { icon: Lightning, label: 'Electricity price', value: 'R3.80 / kWh', sub: '$0.204 USD', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent-light)]' },
          { icon: Sun, label: 'Solar irradiance', value: '5.2 kWh/m²/day', sub: 'Among best in world', color: 'text-[var(--warm)]', bg: 'bg-[var(--warm-light)]' },
          { icon: Clock, label: 'Load shedding', value: '2-6 hrs/day', sub: 'Eskom Stage 2-6', color: 'text-[var(--primary)]', bg: 'bg-[var(--primary-light)]' },
          { icon: CurrencyDollar, label: 'Avg system cost', value: '$1,100 - $3,900', sub: 'EXW reference price', color: 'text-[var(--fg)]', bg: 'bg-[var(--bg)]' },
        ].map(stat => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`${stat.bg} rounded-xl p-4`}>
              <div className="flex items-center gap-1.5 mb-2">
                <Icon size={16} weight="duotone" className={stat.color} />
                <span className="text-[10px] font-semibold text-[var(--muted)] uppercase tracking-wider">{stat.label}</span>
              </div>
              <div className="text-base font-bold text-[var(--fg)]">{stat.value}</div>
              <div className="text-[10px] text-[var(--muted)]">{stat.sub}</div>
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <Card className="mb-6"><CardContent className="p-6 md:p-8">
        <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Protect your home from load shedding with solar + battery</h2>
        <div className="space-y-3 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            South Africa&apos;s energy crisis isn&apos;t going away. Eskom implements scheduled load shedding that can last 2-6 hours per day, costing households and businesses billions in lost productivity.
          </p>
          <p>
            A home battery system with solar panels is the most reliable way to protect your home from load shedding. Unlike diesel generators, solar + battery is quiet, emissions-free, and actually saves you money over time.
          </p>
        </div>

        <h3 className="font-semibold text-[var(--fg)] mt-6 mb-3">Home battery systems built for South African load shedding</h3>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { name: 'Essential', kwh: '2-4 kWh', desc: 'Lights, wifi, TV, phone charging', price: '$1,100-1,700' },
            { name: 'Standard', kwh: '4-8 kWh', desc: 'Above + fridge, freezer, security', price: '$1,700-2,500' },
            { name: 'Whole Home', kwh: '10-15+ kWh', desc: 'Multiple ACs, full appliances', price: '$2,500-3,900' },
          ].map(tier => (
            <div key={tier.name} className="rounded-xl border border-[var(--border)] bg-white p-4">
              <div className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider">{tier.name}</div>
              <div className="text-lg font-bold text-[var(--fg)] mt-1">{tier.kwh}</div>
              <div className="text-xs text-[var(--muted)] mt-1">{tier.desc}</div>
              <div className="text-xs text-[var(--muted)] mt-1">From {tier.price}</div>
            </div>
          ))}
        </div>

        <h3 className="font-semibold text-[var(--fg)] mt-6 mb-3">Why SA homeowners are making the switch</h3>
        <ul className="space-y-2 text-sm text-[var(--muted)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--accent)] mt-0.5">✓</span>
            <span><strong className="text-[var(--fg)]">Keep the lights on</strong> during load shedding — no more dark homes and spoiled food</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--accent)] mt-0.5">✓</span>
            <span><strong className="text-[var(--fg)]">Cut electricity bills</strong> by shifting usage to off-peak hours and using solar during the day</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--accent)] mt-0.5">✓</span>
            <span><strong className="text-[var(--fg)]">Reduce generator dependency</strong> — no diesel costs, no noise, no maintenance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--accent)] mt-0.5">✓</span>
            <span><strong className="text-[var(--fg)]">Excellent solar resource</strong> — South Africa averages 5.2 kWh/m²/day, among the best globally</span>
          </li>
        </ul>
      </CardContent></Card>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center py-8 border-t border-[var(--border)]"
      >
        <h2 className="text-2xl font-bold text-[var(--fg)] mb-2">Ready to Beat Load Shedding?</h2>
        <p className="text-sm text-[var(--muted)] mb-6 max-w-lg mx-auto">
          Tell us about your home and we'll recommend the right battery, inverter, and solar setup for Eskom load shedding. Takes 2 minutes.
        </p>
        <a
          href="/en?country=ZA"
          className="inline-flex items-center gap-2 bg-[var(--primary-btn)] text-white px-8 py-3.5 rounded-xl font-medium hover:bg-[var(--primary-btn-hover)] transition-all shadow-sm text-base"
        >
          Size my load shedding backup system <ArrowRight size={18} weight="bold" />
        </a>
      </motion.div>

      {/* Data source */}
      <p className="text-center text-[10px] text-[var(--muted)] mt-4">
        Electricity price data: GlobalPetrolPrices.com. Solar data: Global Solar Atlas. Product prices: manufacturer reference estimates (EXW USD).
      </p>
    </div>
  );
}
