import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://solbatterycalc.com'),
  title: {
    default: 'SolBatteryCalc - Free Home Energy Storage Calculator',
    template: '%s | SolBatteryCalc',
  },
  description: 'Free solar battery sizing calculator. Estimate battery capacity, inverter size, solar PV needs, and ROI payback period for your home. Supports 24+ countries.',
  keywords: ['solar battery calculator', 'home energy storage', 'battery sizing tool', 'off-grid calculator', 'solar ROI', 'backup battery sizing'],
  openGraph: {
    title: 'SolBatteryCalc - Home Energy Storage Calculator',
    description: 'Free tool to size your home battery system. Calculate battery, inverter, solar, and savings.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SolBatteryCalc',
    images: [{ url: 'https://solbatterycalc.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolBatteryCalc - Home Energy Storage Calculator',
    description: 'Free tool to size your home battery system.',
    images: ['https://solbatterycalc.com/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://solbatterycalc.com',
    languages: {
      'x-default': 'https://solbatterycalc.com',
      en: 'https://solbatterycalc.com/en',
      fr: 'https://solbatterycalc.com/fr',
      es: 'https://solbatterycalc.com/es',
    },
  },
  other: {
    // 🔧 Replace with your actual verification codes from Google Search Console
    // 'google-site-verification': 'YOUR_GSC_CODE_HERE',
    // 🔧 Replace with your actual verification code from Bing Webmaster Tools
    // 'msvalidate.01': 'YOUR_BING_CODE_HERE',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'SolBatteryCalc',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      description: 'Free home energy storage calculator. Size battery, inverter, solar panels, and estimate savings.',
      url: 'https://solbatterycalc.com',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'WebSite',
      name: 'SolBatteryCalc',
      url: 'https://solbatterycalc.com',
      description: 'Free home battery sizing calculator',
      inLanguage: ['en', 'fr', 'es'],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
