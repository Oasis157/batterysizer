'use client';
import { ArrowRight } from '@phosphor-icons/react';

const locales = ['en', 'fr', 'es'] as const;

export default function SiteFooter({ locale }: { locale: string }) {
  const links = {
    en: {
      countries: 'All Countries',
      privacy: 'Privacy Policy',
      about: 'About',
      dataSource: 'Data sources: GlobalPetrolPrices.com, Global Solar Atlas',
      disclaimer: 'Estimates are for reference only. Actual system design should be verified by a qualified installer.',
      visit: 'pack-e.com',
    },
    fr: {
      countries: 'Tous les pays',
      privacy: 'Politique de confidentialité',
      about: 'À propos',
      dataSource: 'Sources: GlobalPetrolPrices.com, Global Solar Atlas',
      disclaimer: 'Estimations à titre indicatif. Vérifiez avec un installateur qualifié.',
      visit: 'pack-e.com',
    },
    es: {
      countries: 'Todos los países',
      privacy: 'Política de privacidad',
      about: 'Acerca de',
      dataSource: 'Fuentes: GlobalPetrolPrices.com, Global Solar Atlas',
      disclaimer: 'Estimaciones de referencia. Verifica con un instalador calificado.',
      visit: 'pack-e.com',
    },
  };

  const t = links[locale as keyof typeof links] || links.en;

  return (
    <footer className="border-t border-[var(--border)] bg-white/80 mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="text-sm font-bold text-[var(--primary)] mb-3">SolBatteryCalc</div>
            <p className="text-xs text-[var(--muted)]">{t.disclaimer}</p>
          </div>
          <div>
            <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-3">Pages</div>
            <div className="space-y-2">
              <a href={`/${locale}`} className="block text-xs text-[var(--fg)] hover:text-[var(--primary)] transition-colors">Calculator</a>
              <a href={`/${locale}/countries`} className="block text-xs text-[var(--fg)] hover:text-[var(--primary)] transition-colors">{t.countries}</a>
              <a href={`/${locale}/about`} className="block text-xs text-[var(--fg)] hover:text-[var(--primary)] transition-colors">{t.about}</a>
              <a href={`/${locale}/privacy`} className="block text-xs text-[var(--fg)] hover:text-[var(--primary)] transition-colors">{t.privacy}</a>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-3">Languages</div>
            <div className="space-y-2">
              {locales.map(l => (
                <a key={l} href={`/${l}`} className={`block text-xs transition-colors ${l === locale ? 'text-[var(--primary)] font-medium' : 'text-[var(--fg)] hover:text-[var(--primary)]'}`}>
                  {l === 'en' ? 'English' : l === 'fr' ? 'Français' : 'Español'}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-3">Reference</div>
            <p className="text-xs text-[var(--muted)]">{t.dataSource}</p>
            <a href="https://www.pack-e.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[var(--primary)] hover:underline mt-2">
              pack-e.com <ArrowRight size={10} weight="bold" />
            </a>
          </div>
        </div>
        <div className="pt-4 border-t border-[var(--border)] text-center text-[10px] text-[var(--muted)]">
          &copy; {new Date().getFullYear()} SolBatteryCalc. {t.disclaimer}
        </div>
      </div>
    </footer>
  );
}
