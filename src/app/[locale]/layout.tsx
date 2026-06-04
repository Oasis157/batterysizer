import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import '../globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'SolBatteryCalc - Free Home Energy Storage Calculator',
    fr: 'SolBatteryCalc - Calculateur de Stockage d\'Énergie Gratuit',
    es: 'SolBatteryCalc - Calculadora de Almacenamiento de Energía Gratis',
  };
  const descs: Record<string, string> = {
    en: 'Free solar battery sizing calculator. Estimate battery capacity, inverter size, solar PV needs, and savings for your home. Supports 20+ countries.',
    fr: 'Calculateur gratuit de dimensionnement de batterie solaire. Estimez la capacité, l\'onduleur, le solaire et les économies pour votre maison.',
    es: 'Calculadora gratuita de dimensionamiento de baterías solares. Estime capacidad, inversor, paneles y ahorros para su hogar.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descs[locale] || descs.en,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}`,
      languages: {
        'x-default': 'https://solbatterycalc.com',
        en: 'https://solbatterycalc.com/en',
        fr: 'https://solbatterycalc.com/fr',
        es: 'https://solbatterycalc.com/es',
      },
    },
    openGraph: {
      locale: locale === 'fr' ? 'fr_FR' : locale === 'es' ? 'es_ES' : 'en_US',
      siteName: 'SolBatteryCalc',
      type: 'website',
      images: [{ url: 'https://solbatterycalc.com/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.en,
      description: descs[locale] || descs.en,
      images: ['https://solbatterycalc.com/opengraph-image'],
    },
    themeColor: '#0d5e4a',
    other: {
      'google': 'translate',
    },
  };
}

export default async function LocaleLayout({
  children, params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound();
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          {children}
          <SiteFooter locale={locale} />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
