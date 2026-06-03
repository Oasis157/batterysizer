import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Privacy Policy | SolBatteryCalc',
    fr: 'Politique de confidentialité | SolBatteryCalc',
    es: 'Política de privacidad | SolBatteryCalc',
  };
  const descs: Record<string, string> = {
    en: 'SolBatteryCalc privacy policy. We do not collect, store, or share any personal information. No cookies, no trackers.',
    fr: 'Politique de confidentialité de SolBatteryCalc. Nous ne collectons, stockons ni partageons aucune information personnelle. Pas de cookies, pas de traceurs.',
    es: 'Política de privacidad de SolBatteryCalc. No recopilamos, almacenamos ni compartimos información personal. Sin cookies, sin rastreadores.',
  };
  return {
    title: titles[locale] || titles.en,
    description: descs[locale] || descs.en,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/privacy`,
      languages: {
        en: 'https://solbatterycalc.com/en/privacy',
        fr: 'https://solbatterycalc.com/fr/privacy',
        es: 'https://solbatterycalc.com/es/privacy',
      },
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descs[locale] || descs.en,
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;

  const content = {
    en: {
      title: 'Privacy Policy',
      updated: 'Last updated: June 2026',
      sections: [
        { h: 'Information We Collect', p: 'SolBatteryCalc does not collect, store, or share any personal information. All calculator inputs are processed locally in your browser and are never sent to a server.' },
        { h: 'Cookies', p: 'We do not use cookies or any tracking technologies. We do not serve ads, analytics scripts, or third-party trackers.' },
        { h: 'Third-Party Links', p: 'Our site contains links to pack-e.com and other external websites. We are not responsible for their privacy practices.' },
        { h: 'Contact', p: 'If you have questions about this policy, please contact us through the pack-e.com website.' },
        { h: 'Changes', p: 'We may update this policy occasionally. Changes will be posted on this page.' },
      ],
    },
    fr: {
      title: 'Politique de confidentialité',
      updated: 'Dernière mise à jour : juin 2026',
      sections: [
        { h: 'Informations collectées', p: 'SolBatteryCalc ne collecte, ne stocke ni ne partage aucune information personnelle.' },
        { h: 'Cookies', p: 'Nous n\'utilisons pas de cookies ni de technologies de suivi.' },
        { h: 'Liens externes', p: 'Notre site contient des liens vers pack-e.com et d\'autres sites externes.' },
        { h: 'Contact', p: 'Pour toute question, contactez-nous via pack-e.com.' },
      ],
    },
    es: {
      title: 'Política de privacidad',
      updated: 'Última actualización: junio 2026',
      sections: [
        { h: 'Información que recopilamos', p: 'SolBatteryCalc no recopila, almacena ni comparte información personal.' },
        { h: 'Cookies', p: 'No utilizamos cookies ni tecnologías de rastreo.' },
        { h: 'Enlaces externos', p: 'Nuestro sitio contiene enlaces a pack-e.com y otros sitios externos.' },
        { h: 'Contacto', p: 'Si tiene preguntas, contáctenos a través de pack-e.com.' },
      ],
    },
  };

  const c = content[locale as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[var(--fg)] mb-2">{c.title}</h1>
        <p className="text-xs text-[var(--muted)] mb-8">{c.updated}</p>
        <div className="space-y-6 text-sm text-[var(--muted)] leading-relaxed">
          {c.sections.map(s => (
            <div key={s.h}>
              <h2 className="font-semibold text-[var(--fg)] mb-1">{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
