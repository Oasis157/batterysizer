'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from '@phosphor-icons/react';
import { getGeneralFAQ, getCountryFAQ } from '@/lib/data/faq';

export default function FAQSection({ locale, countryCode }: { locale: string; countryCode?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faq = countryCode ? getCountryFAQ(countryCode, locale) || getGeneralFAQ(locale) : getGeneralFAQ(locale);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // JSON-LD structured data
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.replace(/<[^>]*>/g, ''), // strip HTML for schema
      },
    })),
  };

  return (
    <div className="mt-14 pt-8 border-t border-[var(--border)]">
      <h2
        className="text-lg text-center mb-6"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
      >
        {faq.heading}
      </h2>

      <div className="max-w-2xl mx-auto space-y-2">
        {faq.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="rounded-xl border border-[var(--border)] bg-white overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium text-[var(--fg)] hover:bg-[var(--bg)] transition-colors cursor-pointer"
              >
                <span>{item.question}</span>
                <span className="shrink-0 text-[var(--muted)]">
                  {isOpen ? (
                    <Minus size={16} weight="bold" />
                  ) : (
                    <Plus size={16} weight="bold" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-5 pb-4 text-xs text-[var(--muted)] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
