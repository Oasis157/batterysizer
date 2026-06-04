import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';
import FAQSection from '@/components/FAQSection';

type Props = { params: Promise<{ locale: string }> };

const titles: Record<string, string> = {
  en: 'Solar Battery Calculator — Size Your Home Battery, Inverter & Solar PV',
  fr: 'Calculateur de Batterie Solaire — Dimensionnez Votre Système Domestique',
  es: 'Calculadora de Batería Solar — Dimensione Su Sistema de Respaldo',
};

const descs: Record<string, string> = {
  en: 'Free solar battery calculator for home backup and off-grid systems. Estimate battery capacity, inverter size, solar panels, cost, and payback by country.',
  fr: 'Calculateur gratuit de batterie solaire pour le stockage domestique. Estimez la capacité, l\'onduleur, les panneaux solaires, le coût et le retour sur investissement.',
  es: 'Calculadora gratuita de batería solar para respaldo doméstico y sistemas aislados. Estime capacidad, inversor, paneles solares, costo y recuperación.',
};

const h1Labels: Record<string, string> = {
  en: 'Solar Battery Calculator for Home Backup & Off-Grid Systems',
  fr: 'Calculateur de Batterie Solaire pour la Maison',
  es: 'Calculadora de Batería Solar para el Hogar',
};

const introLabels: Record<string, string> = {
  en: 'Estimate your home battery size, inverter power, solar PV capacity, and payback period. Select your country, enter your monthly electricity usage and backup hours — get a personalized system recommendation in seconds.',
  fr: 'Estimez la taille de votre batterie, la puissance de l\'onduleur, la capacité solaire et la période de retour. Sélectionnez votre pays, entrez votre consommation mensuelle — obtenez une recommandation personnalisée en quelques secondes.',
  es: 'Estime el tamaño de su batería, la potencia del inversor, la capacidad solar y el período de recuperación. Seleccione su país, ingrese su consumo mensual — obtenga una recomendación personalizada en segundos.',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: titles[locale] || titles.en,
    description: descs[locale] || descs.en,
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <div>
      {/* Hero intro section — visible H1 + SEO description */}
      <section className="max-w-2xl mx-auto px-6 pt-14 pb-4 text-center">
        <h1
          className="text-2xl md:text-[28px] text-[var(--fg)] leading-tight mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
        >
          {h1Labels[locale] || h1Labels.en}
        </h1>
        <p className="text-sm text-[var(--muted)] leading-relaxed max-w-lg mx-auto">
          {introLabels[locale] || introLabels.en}
        </p>
        {/* Decorative divider */}
        <div className="flex items-center gap-3 mt-6 mb-2">
          <div className="h-px flex-1 bg-[var(--border)]" />
          <div className="h-[3px] w-12 rounded-full bg-[var(--primary)]" />
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
      </section>

      <CalculatorClient locale={locale} />

      <footer className="max-w-2xl mx-auto px-6 pb-12">
        <FAQSection locale={locale} />
      </footer>
    </div>
  );
}
