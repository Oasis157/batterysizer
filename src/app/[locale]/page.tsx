'use client';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams, usePathname, useRouter, useParams } from 'next/navigation';
import { motion } from 'motion/react';
import {
  Plug, Tree, Coin, BatteryVerticalFull, Lightning,
  Sun, ChartLineUp, ArrowLeft, ArrowRight, MapPin, Clock,
  House, Question, Gauge
} from '@phosphor-icons/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { COUNTRIES, getCountry, getCountryFlag } from '@/lib/data/countries';
import { BUNDLES, findMatchingBundles } from '@/lib/data/products';
import { calculateSystem } from '@/lib/calculator';
import type { Scenario, CalculatorOutput } from '@/lib/calculator';
import { formatCurrency, sliderToKwh, kwhToSlider, fetchExchangeRates, convertToLocal } from '@/lib/utils';
import FAQSection from '@/components/FAQSection';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const scenarios: { v: Scenario; icon: React.ReactNode; }[] = [
  { v: 'grid_backup', icon: <Plug size={24} weight="duotone" /> },
  { v: 'off_grid', icon: <Tree size={24} weight="duotone" /> },
  { v: 'grid_tou', icon: <Coin size={24} weight="duotone" /> },
];

const resultCards = [
  { key: 'battery', icon: BatteryVerticalFull, accent: 'var(--accent)', accentBg: 'var(--accent-light)' },
  { key: 'inverter', icon: Lightning, accent: 'var(--primary)', accentBg: 'var(--primary-light)' },
  { key: 'solar', icon: Sun, accent: 'var(--warm)', accentBg: 'var(--warm-light)' },
] as const;

export default function CalculatorPage() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'en';

  // Read URL params for sharing/prefilling
  const urlCountry = searchParams.get('country') || 'ZA';
  const urlKwh = searchParams.get('kwh');
  const urlPeak = searchParams.get('peak');
  const urlBackup = searchParams.get('backup');
  const urlScenario = searchParams.get('scenario') as Scenario | null;
  const urlHasSolar = searchParams.get('hasSolar');
  const urlSolarKw = searchParams.get('solarKw');
  const urlResult = searchParams.get('result');

  const [page, setPage] = useState<'form' | 'results'>(urlResult === 'true' ? 'results' : 'form');
  const [scenario, setScenario] = useState<Scenario>(urlScenario || 'grid_backup');
  const [sliderPos, setSliderPos] = useState(urlKwh ? kwhToSlider(Number(urlKwh)) : kwhToSlider(300));
  const [peakLoadKw, setPeakLoadKw] = useState(urlPeak ? Number(urlPeak) : 3);
  const [backupHours, setBackupHours] = useState(urlBackup ? Number(urlBackup) : 4);
  const [countryCode, setCountryCode] = useState(urlCountry);
  const [hasSolar, setHasSolar] = useState(urlHasSolar === 'true');
  const [solarKw, setSolarKw] = useState(urlSolarKw ? Number(urlSolarKw) : 3);
  const [result, setResult] = useState<CalculatorOutput | null>(null);
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteSent, setQuoteSent] = useState(false);
  const [showPeakHelp, setShowPeakHelp] = useState(false);
  const [rates, setRates] = useState<Record<string, number>>({});
  const [ratesLoading, setRatesLoading] = useState(true);
  const [localTariff, setLocalTariff] = useState<number | null>(null);
  const [editingTariff, setEditingTariff] = useState(false);

  const country = getCountry(countryCode);
  const currency = country?.currency || 'USD';
  const monthlyKwh = sliderToKwh(sliderPos);

  const autoCalcDone = useRef(false);

  useEffect(() => {
    fetchExchangeRates().then(setRates).finally(() => setRatesLoading(false));
  }, []);

  // Auto-calculate when URL has result=true (e.g. shared link)
  useEffect(() => {
    if (urlResult === 'true' && !autoCalcDone.current) {
      autoCalcDone.current = true;
      // Slight delay to let rates load and state settle
      const timer = setTimeout(() => handleCalculate(), 300);
      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll to top when entering results page (after DOM update)
  useEffect(() => {
    if (page === 'results') {
      window.scrollTo(0, 0);
    }
  }, [page]);

  const tariffInLocal = country ? convertToLocal(country.tariffUsdPerKwh, rates, currency) : 0;
  const effectiveTariff = editingTariff && localTariff !== null ? localTariff : tariffInLocal;

  const handleCalculate = () => {
    const output = calculateSystem({ scenario, monthlyKwh, peakLoadKw, backupHours, countryCode, existingSolarKw: hasSolar ? solarKw : undefined });
    if (editingTariff && localTariff !== null && country) {
      const ratio = localTariff / (country.tariffUsdPerKwh || 0.15);
      output.roi.annualSavingsUsd = Math.round(output.roi.annualSavingsUsd * ratio);
      output.roi.paybackYears = output.roi.paybackYears > 0 ? Math.round(output.roi.paybackYears / ratio * 10) / 10 : 99;
      output.roi.tenYearSavingsUsd = Math.round(output.roi.annualSavingsUsd * 10 - output.roi.systemCostUsd);
    }
    setResult(output);
    setPage('results');

    // Update URL with calculation params for sharing
    const params = new URLSearchParams();
    params.set('country', countryCode);
    params.set('kwh', String(monthlyKwh));
    params.set('peak', String(peakLoadKw));
    params.set('backup', String(backupHours));
    params.set('scenario', scenario);
    params.set('hasSolar', String(hasSolar));
    if (hasSolar) params.set('solarKw', String(solarKw));
    params.set('result', 'true');
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const resetForm = () => {
    setPage('form');
    setResult(null);
    setQuoteSent(false);
    setQuoteEmail('');
    // Clear result from URL
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete('result');
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  // ─── RESULTS PAGE ───
  if (page === 'results' && result) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-[var(--bg)]">
        <main className="max-w-4xl mx-auto px-6 py-10">
          <button onClick={resetForm} className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-8 cursor-pointer">
            <ArrowLeft size={16} weight="bold" /> {t('wizard.calculateNew')}
          </button>
          <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary)] px-4 py-1 text-sm font-medium mb-4">
              {scenarios.find(s => s.v === scenario)?.icon}
              {t(`scenario.${scenario}.title`)}
            </span>
            <div className="flex items-center justify-center gap-5">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15, type: 'spring', stiffness: 120 }} className="text-5xl sm:text-7xl font-light text-[var(--fg)]" style={{ fontFamily: 'var(--font-display)' }}>{result.dailyKwh.toFixed(0)}</motion.div>
              <div className="text-left">
                <div className="text-sm text-[var(--muted)]">kWh / day</div>
                <div className="text-xs text-[var(--muted)]">{monthlyKwh} kWh / month</div>
              </div>
            </div>
          </motion.div>

          <h2 className="text-xl text-[var(--fg)] mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Your System Design</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {resultCards.map((c, i) => {
              const Icon = c.icon;
              const r = result;
              const value = c.key === 'battery'
                ? r.battery.recommendedKwh.toFixed(0) + ' kWh'
                : c.key === 'inverter'
                ? r.inverter.recommendedKw + ' kW'
                : r.solar.recommendedKw.toFixed(1) + ' kW';
              const sub = c.key === 'solar'
                ? r.solar.panelCount + ' panels'
                : (c.key === 'battery' ? formatCurrency(r.battery.priceUsd) : formatCurrency(r.inverter.priceUsd));
              return (
                <motion.div key={c.key} variants={staggerVariants} initial="hidden" animate="visible" custom={i}>
                  <Card>
                    <div className="h-1 rounded-t-2xl" style={{ backgroundColor: c.accent }} />
                    <CardContent>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={20} weight="duotone" style={{ color: c.accent }} />
                      <span className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">{t(`results.${c.key}`)}</span>
                    </div>
                    <div className="text-2xl font-semibold text-[var(--fg)]">{value}</div>
                    <div className="text-sm text-[var(--muted)] mt-1">{sub}</div>
                  </CardContent></Card>
                </motion.div>
              );
            })}
          </div>
          <motion.div variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            <h2 className="text-xl text-[var(--fg)] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Savings Estimate</h2>
            <Card className="mb-6"><CardContent className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <ChartLineUp size={16} weight="duotone" className="text-[var(--accent)]" />
                <span className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">{t('results.annualSavings')}</span>
              </div>
              <p className="text-xs text-[var(--muted)] mb-5">Based on {effectiveTariff.toFixed(2)}/{t('location.perKwh')} tariff</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--accent-light)] rounded-xl p-5">
                  <div className="text-xs text-[var(--muted)] mb-1">{t('results.annualSavings')}</div>
                  <div className="text-3xl font-bold text-[var(--accent)]">{formatCurrency(convertToLocal(result.roi.annualSavingsUsd, rates, currency), currency)}/yr</div>
                </div>
                <div className="bg-[var(--bg)] rounded-xl p-5">
                  <div className="text-xs text-[var(--muted)] mb-1">Monthly savings</div>
                  <div className="text-3xl font-bold text-[var(--fg)]">{formatCurrency(convertToLocal(Math.round(result.roi.annualSavingsUsd / 12), rates, currency), currency)}/mo</div>
                </div>
              </div>
            </CardContent></Card>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.35 }} className="mt-10 pt-8 border-t border-[var(--border)]">
            <h2 className="text-xl text-[var(--fg)] mb-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Recommended Products</h2>
            <p className="text-xs text-[var(--muted)] mb-4">Component prices are manufacturer reference estimates in USD. Actual pricing varies by region and installer.</p>
            <Card className="mb-6"><CardContent className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <Lightning size={16} weight="duotone" className="text-[var(--primary)]" />
                <span className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">Pack-E Bundles</span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {findMatchingBundles(result.battery.recommendedKwh, result.inverter.recommendedKw).map(bundle => (
                  <a key={bundle.name} href={bundle.url} target="_blank" rel="noopener noreferrer"
                    className="block rounded-xl border border-[var(--border)] bg-white hover:border-[var(--primary)] hover:shadow-sm transition-all overflow-hidden"
                  >
                    <div className="aspect-[3/4] bg-gray-50 flex items-center justify-center p-4">
                      <img src={bundle.imgSrc} alt={bundle.name} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={'text-xs font-semibold uppercase tracking-wider ' + (bundle.series === 'h6k' ? 'text-[var(--primary)]' : 'text-[var(--accent)]')}>
                          {bundle.series === 'h6k' ? 'Home Storage' : 'Portable Power'}
                        </span>
                      </div>
                      <div className="font-semibold text-sm text-[var(--fg)]">{bundle.name}</div>
                      <p className="text-xs text-[var(--muted)] mt-1 mb-2 leading-relaxed">{bundle.description}</p>
                      <div className="text-xs text-[var(--muted)] mb-2">{bundle.totalKwh.toFixed(1)} kWh · {bundle.items.join(' + ')}</div>
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-[var(--fg)]">{formatCurrency(bundle.totalPriceUsd)} <span className="text-xs text-[var(--muted)] font-normal">USD</span></div>
                        <span className="inline-flex items-center gap-1 text-xs text-[var(--primary)] font-medium">
                          View <ArrowRight size={12} weight="bold" />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-3 text-center">
                <a href="https://www.pack-e.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--primary)] hover:underline">
                  {t('results.seeProducts')} <ArrowRight size={12} weight="bold" />
                </a>
              </div>
            </CardContent></Card>
          </motion.div>

          <motion.div variants={sectionVariants} initial="hidden" animate="visible" transition={{ delay: 0.45 }} className="text-center space-y-4">
            {!quoteSent ? (
              <div className="max-w-sm mx-auto space-y-3">
                <p className="font-medium text-sm text-[var(--fg)]">{t('results.getQuote')}</p>
                <div className="flex gap-2">
                  <input type="text" placeholder={t('results.quotePlaceholder')} className="flex-1 rounded-xl border border-[var(--border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-blue-200" value={quoteEmail} onChange={e => setQuoteEmail(e.target.value)} />
                  <motion.div whileTap={{ scale: 0.96 }}>
                    <Button onClick={() => { if (quoteEmail) setQuoteSent(true); }}>{t('results.quoteButton')}</Button>
                  </motion.div>
                </div>
              </div>
            ) : (
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-[var(--accent)] font-medium">{t('results.quoteThanks')}</motion.p>
            )}
          </motion.div>
          <div className="mt-12 text-center text-xs text-[var(--muted)]">{t('footer.disclaimer')}</div>

          {/* FAQ */}
          <FAQSection locale={locale} />

          {/* Popular Countries */}
          <PopularCountries locale={locale} />
        </main>
      </motion.div>
    );
  }

  // ─── FORM PAGE ───
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-2xl mx-auto px-6 py-10">
        {/* SEO H1 — visually hidden, visible to search engines */}
        <h1 className="sr-only">Free Solar Battery Storage Calculator – Size Your Home Backup System</h1>

        {/* Step indicator */}
        <div className="flex items-center mb-12">
          {[t('scenario.title'), t('appliances.title'), t('backup.title'), t('location.title')].map((label, i) => (
            <div key={label} className="flex items-center flex-1 last:flex-[0]">
              <div className={'w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-semibold transition-colors ' + (i === 0 ? 'bg-[var(--primary)] text-white' : 'bg-[var(--border)] text-[var(--muted)]')}>
                {i + 1}
              </div>
              <span className="hidden sm:block ml-2 text-xs text-[var(--muted)] whitespace-nowrap">{label}</span>
              {i < 3 && <div className="h-px flex-1 mx-1 sm:mx-3 bg-[var(--border)]" />}
            </div>
          ))}
        </div>

        {/* Scenario */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <Card className="mb-4"><CardContent>
            <h2 className="text-lg mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{t('scenario.title')}</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {scenarios.map(opt => {
                const selected = scenario === opt.v;
                return (
                  <button key={opt.v} onClick={() => { setScenario(opt.v); setBackupHours(opt.v === 'off_grid' ? 3 : 4); }}
                    className={'flex flex-col items-center gap-1.5 rounded-2xl border-2 p-5 text-center transition-all duration-200 cursor-pointer ' + (selected ? 'border-[var(--primary)] bg-[var(--primary-light)] shadow-[0_2px_12px_rgba(13,94,74,0.1)]' : 'border-[var(--border)] hover:border-[var(--primary)]/30 bg-white hover:shadow-sm')}
                  >
                    <div className={'p-3 rounded-2xl transition-colors ' + (selected ? 'bg-[var(--primary)] text-white' : 'bg-[var(--bg)] text-[var(--muted)]')}>
                      {opt.icon}
                    </div>
                    <span className={'font-semibold text-sm ' + (selected ? 'text-[var(--primary)]' : 'text-[var(--fg)]')}>{t(`scenario.${opt.v}.title`)}</span>
                    <span className="text-xs text-[var(--muted)] leading-relaxed">{t(`scenario.${opt.v}.desc`)}</span>
                  </button>
                );
              })}
            </div>
          </CardContent></Card>
        </motion.div>

        {/* Usage */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <Card className="mb-4"><CardContent className="p-6">
            <div className="flex items-center gap-2 mb-1">
              <House size={16} weight="duotone" className="text-[var(--primary)]" />
              <h2 className="text-lg" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{t('appliances.title')}</h2>
            </div>
            <p className="text-sm text-[var(--muted)] mb-6">{t('appliances.subtitle')}</p>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[var(--fg)] mb-2">{t('usage.monthlyLabel')}</label>
              <div className="flex items-center gap-3">
                <input type="range" min={0} max={100} step={1} value={sliderPos} onChange={e => setSliderPos(Number(e.target.value))} className="flex-1" aria-label={t('usage.monthlyLabel')} />
                <input type="number" min={20} max={3000} value={monthlyKwh} onChange={e => setSliderPos(kwhToSlider(Math.max(20, Math.min(3000, Number(e.target.value)))))} className="w-24 rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-center outline-none focus:border-[var(--primary)] focus:ring-2" aria-label="Monthly kWh" />
              </div>
              <div className="flex justify-between mt-1.5 text-xs text-[var(--muted)]">
                <span>0 kWh</span>
                <span className="relative">
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-[var(--primary)] font-medium whitespace-nowrap">{t('usage.typical')}</span>
                  <span className="text-[var(--primary)] font-medium">|</span> 1000 kWh
                </span>
                <span>3000 kWh</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Gauge size={16} weight="duotone" className="text-[var(--primary)]" />
                <label className="text-sm font-medium text-[var(--fg)]">{t('usage.peakLabel')}</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="range" min={0.5} max={20} step={0.5} value={peakLoadKw} onChange={e => setPeakLoadKw(Number(e.target.value))} className="flex-1" aria-label={t('usage.peakLabel')} />
                <input type="number" min={0.5} max={50} step={0.5} value={peakLoadKw} onChange={e => setPeakLoadKw(Number(e.target.value))} className="w-24 rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-center outline-none focus:border-[var(--primary)] focus:ring-2" aria-label="Peak load kW" />
              </div>
              <div className="flex justify-between mt-1.5 text-xs text-[var(--muted)]">
                <span>0.5 kW</span>
                <button onClick={() => setShowPeakHelp(!showPeakHelp)} className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline cursor-pointer">
                  <Question size={14} weight="bold" />
                  {showPeakHelp ? t('usage.hideGuide') : t('usage.needHelp')}
                </button>
                <span>20 kW</span>
              </div>
              {showPeakHelp && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 p-4 bg-[var(--primary-light)] rounded-xl text-xs space-y-2 overflow-hidden">
                  <p className="font-medium text-[var(--fg)]">{t('usage.guideTitle')}</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[var(--muted)]">
                    <span>&bull; {t('usage.guideAC')}</span><span>&bull; {t('usage.guideHeater')}</span>
                    <span>&bull; {t('usage.guideCooktop')}</span><span>&bull; {t('usage.guideMicrowave')}</span>
                    <span>&bull; {t('usage.guideFridge')}</span><span>&bull; {t('usage.guideWashing')}</span>
                  </div>
                  <p className="text-[var(--fg)]">{t('usage.guideExample')}</p>
                </motion.div>
              )}
            </div>
          </CardContent></Card>
        </motion.div>

        {/* Backup Duration */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <Card className="mb-4"><CardContent className="p-6">
            <div className="flex items-center gap-2 mb-1">
              <Clock size={16} weight="duotone" className="text-[var(--primary)]" />
              <h2 className="text-lg" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{t('backup.title')}</h2>
            </div>
            <p className="text-sm text-[var(--muted)] mb-6">{t('backup.' + scenario)}</p>
            <div className="text-center mb-6">
              <span className="text-5xl font-light text-[var(--primary)]">{backupHours}</span>
              <span className="text-[var(--muted)] ml-2 text-lg">{scenario === 'off_grid' ? 'days' : 'hours'}</span>
            </div>
            <input type="range" min={1} max={scenario === 'off_grid' ? 7 : 24} value={backupHours} onChange={e => setBackupHours(Number(e.target.value))} className="w-full" aria-label={t('backup.title')} />
          </CardContent></Card>
        </motion.div>

        {/* Location + Solar + Bill */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible">
          <Card className="mb-6"><CardContent className="p-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={16} weight="duotone" className="text-[var(--primary)]" />
                <h2 className="text-lg" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{t('location.title')}</h2>
              </div>
              <p className="text-sm text-[var(--muted)] mb-4">{t('location.subtitle')}</p>
              <Select value={countryCode} onChange={e => setCountryCode(e.target.value)} options={[{ value: '', label: t('location.selectCountry') }, ...COUNTRIES.map(c => ({ value: c.code, label: c.name }))]} />
              {country && (<div className="mt-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[var(--bg)] rounded-xl p-4"><div className="text-xs text-[var(--muted)]">{t('location.irradiance')}</div><div className="text-lg font-semibold text-[var(--fg)]">{country.avgDailyIrradiance} kWh/m&sup2;/day</div></div>
                  <div className="bg-[var(--bg)] rounded-xl p-4"><div className="text-xs text-[var(--muted)]">{t('location.currency')}</div><div className="text-lg font-semibold text-[var(--fg)]">{currency}</div></div>
                </div>
                <div className="bg-[var(--primary-light)] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-[var(--primary)]">{t('location.electricityPrice')}</span>
                    {!editingTariff && <button onClick={() => { setLocalTariff(tariffInLocal); setEditingTariff(true); }} className="text-xs text-[var(--primary)] hover:underline cursor-pointer">{t('location.edit')}</button>}
                  </div>
                  {editingTariff ? (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[var(--fg)]">{currency}</span>
                      <Input type="number" step={0.01} min={0} max={10} value={localTariff ?? tariffInLocal} onChange={e => setLocalTariff(Number(e.target.value))} />
                      <span className="text-xs text-[var(--muted)]">{t('location.perKwh')}</span>
                      <button onClick={() => setEditingTariff(false)} className="text-xs text-[var(--primary)] hover:underline cursor-pointer whitespace-nowrap">{t('location.useDefault')}</button>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      {ratesLoading && currency !== 'USD' ? (
                        <span className="text-xl font-bold text-[var(--muted)]">...</span>
                      ) : (
                        <span className="text-xl font-bold text-[var(--fg)]">{effectiveTariff.toFixed(2)} {currency !== 'USD' ? currency : ''}</span>
                      )}
                      <span className="text-xs text-[var(--muted)]">{t('location.perKwh')}</span>
                    </div>
                  )}
                  <div className="text-[10px] text-[var(--muted)] mt-1">{t('location.dataSource')}</div>
                </div>
              </div>)}
            </div>
            <div className="pt-4 border-t border-[var(--border)]">
              <div className="flex items-center gap-2 mb-3">
                <Sun size={16} weight="duotone" className="text-[var(--warm)]" />
                <h3 className="text-base" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{t('solar.title')}</h3>
              </div>
              <div className="flex gap-3 mb-3">
                {[{ v: false, label: t('solar.noSolar') }, { v: true, label: t('solar.haveSolar') }].map(opt => (
                  <button key={String(opt.v)} onClick={() => setHasSolar(opt.v)} className={'flex-1 rounded-xl border-2 py-2.5 text-sm font-medium transition-all cursor-pointer ' + (hasSolar === opt.v ? 'border-[var(--primary)] bg-[var(--primary-light)] text-[var(--primary)]' : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)]/40')}>{opt.label}</button>
                ))}
              </div>
              {hasSolar && <>
                <Input type="number" min={0} max={100} step={0.5} value={solarKw} onChange={e => setSolarKw(Number(e.target.value))} placeholder={t('solar.existingCapacity')} />
                <p className="text-[10px] text-[var(--muted)] mt-1">Enter total power of your solar system (e.g. 5 = 5kW). We will recommend additional panels only if needed.</p>
              </>}
            </div>
          </CardContent></Card>
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="text-center mt-8">
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" onClick={handleCalculate} className="w-full max-w-sm text-base">
              {t('wizard.calculate')} →
            </Button>
          </motion.div>
        </motion.div>
        <div className="mt-8 text-center text-xs text-[var(--muted)]">
          <p>{t('footer.disclaimer')}</p>
          <p className="mt-1">{t('footer.reference')} <a href="https://www.pack-e.com" target="_blank" className="text-[var(--primary)] hover:underline">{t('footer.visit')}</a></p>
        </div>

        {/* FAQ */}
        <FAQSection locale={locale} />

        {/* Popular Countries */}
        <PopularCountries locale={locale} />
      </main>
    </motion.div>
  );
}

/** Small component to render popular country cards */
const POPULAR_CODES = ['US', 'CA', 'ZA', 'NG', 'PH', 'ES', 'FR', 'IT'];

function PopularCountries({ locale }: { locale: string }) {
  const popular = COUNTRIES.filter(c => POPULAR_CODES.includes(c.code));

  const headingLabels: Record<string, string> = {
    en: 'Popular Countries',
    fr: 'Pays populaires',
    es: 'Países populares',
  };
  const descLabels: Record<string, string> = {
    en: 'Browse solar battery sizing guides for popular countries',
    fr: 'Consultez les guides pour les pays les plus populaires',
    es: 'Explore guías de baterías solares para países populares',
  };

  return (
    <div className="mt-14 pt-8 border-t border-[var(--border)]">
      <h2 className="text-lg text-center mb-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>
        {headingLabels[locale] || headingLabels.en}
      </h2>
      <p className="text-xs text-[var(--muted)] text-center mb-6">
        {descLabels[locale] || descLabels.en}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {popular.map(c => {
          const slug = c.name.toLowerCase().replace(/\s+/g, '-');
          const label = locale === 'fr' ? c.nameFr : locale === 'es' ? c.nameEs : c.name;
          return (
            <a
              key={c.code}
              href={`/${locale}/${slug}`}
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white p-3 hover:border-[var(--primary)] hover:shadow-sm transition-all group"
            >
              <span className="text-xl shrink-0">{getCountryFlag(c.code)}</span>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--primary)] transition-colors truncate">
                  {label}
                </div>
                <div className="text-[10px] text-[var(--muted)] truncate">
                  {locale === 'fr' ? c.shortDescFr : locale === 'es' ? c.shortDescEs : c.shortDesc}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
