'use client';
import { useState, useEffect, useCallback } from 'react';
import { usePathname, useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Globe, Article, Info, List, X } from '@phosphor-icons/react';

const locales = ['en', 'fr', 'es'] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const currentPath = pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Close menu on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setMenuOpen(false);
  }, []);
  useEffect(() => {
    if (menuOpen) { document.addEventListener('keydown', handleKeyDown); document.body.style.overflow = 'hidden'; }
    else { document.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = ''; }
    return () => { document.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = ''; };
  }, [menuOpen, handleKeyDown]);

  const navItems = [
    { key: 'calculator', icon: Calculator, href: `/${locale}` },
    { key: 'countries', icon: Globe, href: `/${locale}/countries` },
    { key: 'blog', icon: Article, href: `/${locale}/blog` },
    { key: 'about', icon: Info, href: `/${locale}/about` },
  ];

  const labels: Record<string, Record<string, string>> = {
    en: { calculator: 'Calculator', countries: 'Countries', blog: 'Blog', about: 'About' },
    fr: { calculator: 'Calculateur', countries: 'Pays', blog: 'Blog', about: 'À propos' },
    es: { calculator: 'Calculadora', countries: 'Países', blog: 'Blog', about: 'Acerca' },
  };

  const t = labels[locale] || labels.en;

  const isActive = (key: string) => {
    if (key === 'calculator') return currentPath === `/${locale}` || currentPath === `/${locale}/`;
    return currentPath.includes(key);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-lg border-b border-[var(--border)] shadow-[0_1px_6px_rgba(13,94,74,0.06)]">
      {/* Gradient accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px]" style={{
        background: 'linear-gradient(to right, #0d5e4a, #1a8a6a, #c4820e)',
      }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href={`/${locale}`}
          className="flex items-center shrink-0"
        >
          <img src="/logo.png" alt="SolBatteryCalc" width={600} height={258} className="h-10 sm:h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const active = isActive(item.key);
            return (
              <a
                key={item.key}
                href={item.href}
                className={`flex items-center gap-1.5 text-sm px-3.5 py-2 rounded-full transition-all duration-200 ${
                  active
                    ? 'bg-[var(--primary-light)] text-[var(--primary)] font-semibold shadow-[0_1px_3px_rgba(13,94,74,0.08)]'
                    : 'text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg)]'
                }`}
              >
                <Icon size={16} weight={active ? 'fill' : 'regular'} />
                <span>{t[item.key]}</span>
              </a>
            );
          })}
        </nav>

        {/* Right side: locale switcher + hamburger */}
        <div className="flex items-center gap-2">
          {/* Locale switcher */}
          <div className="flex items-center gap-1 bg-[var(--bg)] rounded-full p-0.5 border border-[var(--border)]">
            {locales.map(l => (
              <a
                key={l}
                href={currentPath ? `/${l}${currentPath.replace(/^\/[a-z]{2}/, '')}` : `/${l}`}
                className={`text-xs px-2.5 py-1 rounded-full transition-all duration-200 font-medium ${
                  l === locale
                    ? 'bg-white text-[var(--primary)] shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
                    : 'text-[var(--muted)] hover:text-[var(--fg)]'
                }`}
              >
                {l.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Hamburger button — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-xl text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg)] transition-all cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/20 sm:hidden z-40"
              onClick={() => setMenuOpen(false)}
            />
            {/* Menu panel */}
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 bg-white border-b border-[var(--border)] shadow-lg sm:hidden z-50 px-4 py-3"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  const active = isActive(item.key);
                  return (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        active
                          ? 'bg-[var(--primary-light)] text-[var(--primary)]'
                          : 'text-[var(--fg)] hover:bg-[var(--bg)]'
                      }`}
                    >
                      <Icon size={18} weight={active ? 'fill' : 'regular'} className={active ? 'text-[var(--primary)]' : 'text-[var(--muted)]'} />
                      <span>{t[item.key]}</span>
                      {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />}
                    </motion.a>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
