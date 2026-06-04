import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'About | SolBatteryCalc',
    fr: 'À propos | SolBatteryCalc',
    es: 'Acerca de | SolBatteryCalc',
  };
  const descs: Record<string, string> = {
    en: 'SolBatteryCalc is a free online solar battery calculator built by a solar storage industry professional. Size your home battery, inverter, and solar system.',
    fr: 'SolBatteryCalc est un calculateur gratuit de batterie solaire créé par un professionnel du stockage d\'énergie. Dimensionnez votre système solaire.',
    es: 'SolBatteryCalc es una calculadora gratuita de batería solar creada por un profesional de almacenamiento de energía. Dimensione su sistema solar.',
  };
  return {
    title: titles[locale] || titles.en,
    description: descs[locale] || descs.en,
    alternates: {
      canonical: `https://solbatterycalc.com/${locale}/about`,
      languages: {
        'x-default': 'https://solbatterycalc.com/en/about',
        en: 'https://solbatterycalc.com/en/about',
        fr: 'https://solbatterycalc.com/fr/about',
        es: 'https://solbatterycalc.com/es/about',
      },
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descs[locale] || descs.en,
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  const content: Record<string, { title: string; sections: { h: string; p: string }[] }> = {
    en: {
      title: 'About SolBatteryCalc',
      sections: [
        {
          h: 'What is SolBatteryCalc?',
          p: 'SolBatteryCalc is a <strong>free online solar battery calculator</strong> that sizes home battery, inverter, and solar PV systems. Enter your country, monthly electricity usage, and backup duration — it instantly calculates the recommended system size, component pricing, and estimated annual savings using <strong>local electricity tariffs and solar irradiance data</strong> for <strong>20+ countries</strong>.',
        },
        {
          h: 'Why I built it',
          p: 'I work in sales at a Chinese energy storage factory. Every day, I talk to customers around the world — homeowners, installers, small business owners — each with their own electricity bill, backup needs, and solar setup. The hardest part was never the product; it was figuring out what system each customer actually needed.<br><br>So I built SolBatteryCalc. Instead of going back and forth collecting details by hand, I wanted a tool that does the heavy lifting: pick your country, tell it your monthly usage and backup hours, and get a <strong>battery + inverter + solar</strong> recommendation instantly. No spreadsheets, no back-and-forth emails.',
        },
        {
          h: 'A public knowledge base for solar storage',
          p: 'The more I worked on it, the more I realized the knowledge I was using every day — electricity tariffs by country, solar irradiance data, system sizing logic — could help more people if I put it online. This site is also my way of building a <strong>public knowledge base</strong> for the solar and battery storage industry. A place where anyone, anywhere, can understand what system makes sense for their home.',
        },
        {
          h: 'Data & pricing notes',
          p: 'Electricity tariff data sourced from <strong>GlobalPetrolPrices.com</strong>. Solar irradiance data from the <strong>Global Solar Atlas</strong>. Product pricing is manufacturer reference pricing (EXW USD). For accurate local quotes, contact a certified installer in your area.<br><br>Free, no signup, 20+ countries and growing.',
        },
      ],
    },
    fr: {
      title: 'À propos de SolBatteryCalc',
      sections: [
        {
          h: 'Qu\'est-ce que SolBatteryCalc ?',
          p: 'SolBatteryCalc est un <strong>calculateur gratuit de batterie solaire</strong> qui dimensionne les systèmes de batterie, onduleur et panneaux solaires. Indiquez votre pays, votre consommation mensuelle et la durée de secours — il calcule instantanément la taille recommandée, les prix des composants et les économies estimées à partir des <strong>tarifs électriques locaux et des données d\'ensoleillement</strong> pour <strong>20+ pays</strong>.',
        },
        {
          h: 'Pourquoi je l\'ai construit',
          p: 'Je travaille dans la vente pour une usine chinoise de stockage d\'énergie. Chaque jour, je parle à des clients du monde entier — propriétaires, installateurs, petits entrepreneurs — chacun avec sa propre facture, ses besoins et son installation. Le plus difficile était de déterminer le système dont chaque client avait besoin.<br><br>Alors j\'ai construit SolBatteryCalc. Au lieu d\'échanger des emails, je voulais un outil qui fait le travail : choisissez votre pays, indiquez votre consommation, et obtenez une recommandation <strong>batterie + onduleur + solaire</strong> instantanément.',
        },
        {
          h: 'Une base de connaissances publique pour le stockage solaire',
          p: 'Plus j\'y travaillais, plus je réalisais que ces connaissances — tarifs par pays, ensoleillement, dimensionnement — pouvaient aider plus de gens en ligne. Ce site est aussi ma façon de construire une <strong>base de connaissances publique</strong> pour l\'industrie du stockage solaire.',
        },
        {
          h: 'Données et prix',
          p: 'Tarifs électriques : <strong>GlobalPetrolPrices.com</strong>. Données solaires : <strong>Global Solar Atlas</strong>. Prix produits : prix fabricant de référence (EXW USD). Pour un devis local, contactez un installateur certifié.<br><br>Gratuit, sans inscription, 20+ pays et en croissance.',
        },
      ],
    },
    es: {
      title: 'Acerca de SolBatteryCalc',
      sections: [
        {
          h: '¿Qué es SolBatteryCalc?',
          p: 'SolBatteryCalc es una <strong>calculadora gratuita de batería solar</strong> que dimensiona sistemas de batería, inversor y paneles solares. Ingrese su país, consumo mensual y horas de respaldo — calcula al instante el tamaño recomendado, precios de componentes y ahorros estimados usando <strong>tarifas eléctricas locales y datos de irradiación solar</strong> para <strong>20+ países</strong>.',
        },
        {
          h: 'Por qué lo construí',
          p: 'Trabajo en ventas para una fábrica china de almacenamiento de energía. Cada día hablo con clientes de todo el mundo — propietarios, instaladores, pequeños empresarios — cada uno con su propia factura y necesidades. Lo más difícil era determinar qué sistema necesitaba cada cliente.<br><br>Así que construí SolBatteryCalc. En lugar de intercambiar correos, quería una herramienta que hiciera el trabajo pesado: seleccione su país, indique su consumo, y obtenga una recomendación de <strong>batería + inversor + solar</strong> al instante.',
        },
        {
          h: 'Una base de conocimiento pública para el almacenamiento solar',
          p: 'Cuanto más trabajaba, más me daba cuenta de que este conocimiento — tarifas por país, irradiación solar, dimensionamiento — podía ayudar a más personas en línea. Este sitio es también mi forma de construir una <strong>base de conocimiento pública</strong> para la industria del almacenamiento solar.',
        },
        {
          h: 'Datos y precios',
          p: 'Tarifas eléctricas: <strong>GlobalPetrolPrices.com</strong>. Datos solares: <strong>Global Solar Atlas</strong>. Precios de productos: precios de referencia del fabricante (EXW USD). Para un presupuesto local, contacte a un instalador certificado.<br><br>Gratis, sin registro, 20+ países y creciendo.',
        },
      ],
    },
  };

  const c = content[locale as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <main className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl text-[var(--fg)] mb-8" style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>{c.title}</h1>
        <div className="space-y-6 text-sm text-[var(--muted)] leading-relaxed">
          {c.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-base font-semibold text-[var(--fg)] mb-2" style={{ fontFamily: 'var(--font-display)' }}>{s.h}</h2>
              <p dangerouslySetInnerHTML={{ __html: s.p }} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
