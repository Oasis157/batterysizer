export interface CountryData {
  code: string;
  name: string;
  nameFr: string;
  nameEs: string;
  currency: string;
  tariffUsdPerKwh: number;
  avgDailyIrradiance: number;
  netMetering: boolean;
  region: 'africa' | 'asia' | 'americas' | 'europe';
  shortDesc: string;
  shortDescFr: string;
  shortDescEs: string;
}

// Electricity prices: GlobalPetrolPrices.com (2025-2026 residential avg)
// Solar irradiance: Global Solar Atlas (annual avg)
export const COUNTRIES: CountryData[] = [
  // ─── Africa ───
  { code: 'ZA', name: 'South Africa', nameFr: 'Afrique du Sud', nameEs: 'Sudáfrica', currency: 'ZAR', tariffUsdPerKwh: 0.204, avgDailyIrradiance: 5.2, netMetering: true, region: 'africa', shortDesc: 'Size your home battery for Eskom load shedding', shortDescFr: 'Dimensionnez votre batterie pour les coupures Eskom', shortDescEs: 'Dimensione su batería para los cortes de Eskom' },
  { code: 'NG', name: 'Nigeria', nameFr: 'Nigeria', nameEs: 'Nigeria', currency: 'NGN', tariffUsdPerKwh: 0.036, avgDailyIrradiance: 4.8, netMetering: false, region: 'africa', shortDesc: 'Solar battery backup for unreliable grid power', shortDescFr: 'Batterie solaire de secours pour réseau instable', shortDescEs: 'Batería solar de respaldo para red inestable' },
  { code: 'KE', name: 'Kenya', nameFr: 'Kenya', nameEs: 'Kenia', currency: 'KES', tariffUsdPerKwh: 0.218, avgDailyIrradiance: 5.0, netMetering: false, region: 'africa', shortDesc: 'Cut electricity costs with solar & battery storage', shortDescFr: 'Réduisez vos coûts avec batterie solaire', shortDescEs: 'Reduzca costos con almacenamiento solar' },
  { code: 'GH', name: 'Ghana', nameFr: 'Ghana', nameEs: 'Ghana', currency: 'GHS', tariffUsdPerKwh: 0.143, avgDailyIrradiance: 4.7, netMetering: false, region: 'africa', shortDesc: 'Reliable home backup battery sizing for Ghana', shortDescFr: 'Dimensionnement batterie de secours pour le Ghana', shortDescEs: 'Dimensionamiento de batería de respaldo para Ghana' },
  { code: 'TZ', name: 'Tanzania', nameFr: 'Tanzanie', nameEs: 'Tanzania', currency: 'TZS', tariffUsdPerKwh: 0.091, avgDailyIrradiance: 5.1, netMetering: false, region: 'africa', shortDesc: 'Off-grid & backup battery calculator for Tanzania', shortDescFr: 'Calculateur batterie hors-réseau pour Tanzanie', shortDescEs: 'Calculadora de batería fuera de red para Tanzania' },
  { code: 'UG', name: 'Uganda', nameFr: 'Ouganda', nameEs: 'Uganda', currency: 'UGX', tariffUsdPerKwh: 0.171, avgDailyIrradiance: 4.9, netMetering: false, region: 'africa', shortDesc: 'Home solar battery sizing with Uganda tariffs', shortDescFr: 'Batterie solaire avec tarifs ougandais', shortDescEs: 'Batería solar con tarifas de Uganda' },
  { code: 'ZM', name: 'Zambia', nameFr: 'Zambie', nameEs: 'Zambia', currency: 'ZMW', tariffUsdPerKwh: 0.023, avgDailyIrradiance: 5.0, netMetering: false, region: 'africa', shortDesc: 'Affordable backup power sizing for Zambia', shortDescFr: 'Dimensionnement secours abordable Zambie', shortDescEs: 'Dimensionamiento de respaldo asequible para Zambia' },
  // ─── Asia ───
  { code: 'PH', name: 'Philippines', nameFr: 'Philippines', nameEs: 'Filipinas', currency: 'PHP', tariffUsdPerKwh: 0.200, avgDailyIrradiance: 4.5, netMetering: true, region: 'asia', shortDesc: 'Solar battery sizing for high Meralco electricity rates', shortDescFr: 'Batterie solaire face aux tarifs Meralco élevés', shortDescEs: 'Batería solar para altas tarifas Meralco' },
  { code: 'VN', name: 'Vietnam', nameFr: 'Vietnam', nameEs: 'Vietnam', currency: 'VND', tariffUsdPerKwh: 0.080, avgDailyIrradiance: 4.1, netMetering: true, region: 'asia', shortDesc: 'Home battery backup with Vietnam solar potential', shortDescFr: 'Batterie de secours avec potentiel solaire Vietnam', shortDescEs: 'Batería de respaldo con potencial solar de Vietnam' },
  { code: 'ID', name: 'Indonesia', nameFr: 'Indonésie', nameEs: 'Indonesia', currency: 'IDR', tariffUsdPerKwh: 0.098, avgDailyIrradiance: 4.3, netMetering: false, region: 'asia', shortDesc: 'Estimate battery needs for Indonesian homes', shortDescFr: 'Estimez vos besoins batterie pour l\'Indonésie', shortDescEs: 'Estime necesidades de batería para Indonesia' },
  { code: 'PK', name: 'Pakistan', nameFr: 'Pakistan', nameEs: 'Pakistán', currency: 'PKR', tariffUsdPerKwh: 0.050, avgDailyIrradiance: 5.0, netMetering: false, region: 'asia', shortDesc: 'UPS & battery backup sizing for Pakistan power cuts', shortDescFr: 'Dimensionnement onduleur-batterie pour coupures Pakistan', shortDescEs: 'Dimensionamiento UPS para cortes en Pakistán' },
  { code: 'BD', name: 'Bangladesh', nameFr: 'Bangladesh', nameEs: 'Bangladesh', currency: 'BDT', tariffUsdPerKwh: 0.070, avgDailyIrradiance: 4.3, netMetering: false, region: 'asia', shortDesc: 'Solar home system sizing for Bangladesh', shortDescFr: 'Dimensionnement solaire domestique Bangladesh', shortDescEs: 'Dimensionamiento solar doméstico Bangladesh' },
  { code: 'LK', name: 'Sri Lanka', nameFr: 'Sri Lanka', nameEs: 'Sri Lanka', currency: 'LKR', tariffUsdPerKwh: 0.120, avgDailyIrradiance: 4.6, netMetering: false, region: 'asia', shortDesc: 'Battery storage sizing with Sri Lanka electricity tariffs', shortDescFr: 'Batterie avec tarifs Sri Lankais', shortDescEs: 'Batería con tarifas de Sri Lanka' },
  // ─── Americas ───
  { code: 'US', name: 'United States', nameFr: 'États-Unis', nameEs: 'Estados Unidos', currency: 'USD', tariffUsdPerKwh: 0.165, avgDailyIrradiance: 4.5, netMetering: true, region: 'americas', shortDesc: 'Home battery sizing with US solar incentives & net metering', shortDescFr: 'Batterie solaire avec crédits d\'impôt américains', shortDescEs: 'Batería solar con incentivos fiscales de EE. UU.' },
  { code: 'CA', name: 'Canada', nameFr: 'Canada', nameEs: 'Canadá', currency: 'CAD', tariffUsdPerKwh: 0.140, avgDailyIrradiance: 3.5, netMetering: true, region: 'americas', shortDesc: 'Solar battery backup sizing for Canadian winters', shortDescFr: 'Batterie solaire pour hivers canadiens', shortDescEs: 'Batería solar para inviernos canadienses' },
  { code: 'MX', name: 'Mexico', nameFr: 'Mexique', nameEs: 'México', currency: 'MXN', tariffUsdPerKwh: 0.120, avgDailyIrradiance: 5.0, netMetering: true, region: 'americas', shortDesc: 'Solar & battery calculator with Mexico electricity rates', shortDescFr: 'Calculateur solaire avec tarifs mexicains', shortDescEs: 'Calculadora solar con tarifas mexicanas' },
  { code: 'BR', name: 'Brazil', nameFr: 'Brésil', nameEs: 'Brasil', currency: 'BRL', tariffUsdPerKwh: 0.162, avgDailyIrradiance: 4.8, netMetering: true, region: 'americas', shortDesc: 'Battery storage sizing for Brazilian homes', shortDescFr: 'Dimensionnement batterie pour foyers brésiliens', shortDescEs: 'Dimensionamiento de batería para hogares brasileños' },
  { code: 'CO', name: 'Colombia', nameFr: 'Colombie', nameEs: 'Colombia', currency: 'COP', tariffUsdPerKwh: 0.221, avgDailyIrradiance: 4.5, netMetering: true, region: 'americas', shortDesc: 'Home battery sizing with Colombian electricity tariffs', shortDescFr: 'Batterie avec tarifs colombiens', shortDescEs: 'Batería con tarifas colombianas' },
  { code: 'CL', name: 'Chile', nameFr: 'Chili', nameEs: 'Chile', currency: 'CLP', tariffUsdPerKwh: 0.263, avgDailyIrradiance: 5.3, netMetering: true, region: 'americas', shortDesc: 'Solar battery calculator for Chile\'s high electricity costs', shortDescFr: 'Batterie solaire pour coûts élevés Chili', shortDescEs: 'Batería solar para altos costos Chile' },
  { code: 'PE', name: 'Peru', nameFr: 'Pérou', nameEs: 'Perú', currency: 'PEN', tariffUsdPerKwh: 0.197, avgDailyIrradiance: 5.0, netMetering: false, region: 'americas', shortDesc: 'Off-grid & backup battery sizing for Peru', shortDescFr: 'Batterie hors-réseau pour Pérou', shortDescEs: 'Batería fuera de red para Perú' },
  { code: 'AR', name: 'Argentina', nameFr: 'Argentine', nameEs: 'Argentina', currency: 'ARS', tariffUsdPerKwh: 0.080, avgDailyIrradiance: 4.8, netMetering: true, region: 'americas', shortDesc: 'Solar battery backup with Argentina tariffs', shortDescFr: 'Batterie solaire avec tarifs argentins', shortDescEs: 'Batería solar con tarifas argentinas' },
  // ─── Europe ───
  { code: 'ES', name: 'Spain', nameFr: 'Espagne', nameEs: 'España', currency: 'EUR', tariffUsdPerKwh: 0.282, avgDailyIrradiance: 4.6, netMetering: true, region: 'europe', shortDesc: 'Solar battery storage for Spain\'s sunny climate', shortDescFr: 'Batterie solaire pour le climat ensoleillé espagnol', shortDescEs: 'Batería solar para el clima soleado español' },
  { code: 'FR', name: 'France', nameFr: 'France', nameEs: 'Francia', currency: 'EUR', tariffUsdPerKwh: 0.272, avgDailyIrradiance: 3.8, netMetering: true, region: 'europe', shortDesc: 'Home battery sizing with French electricity tariffs', shortDescFr: 'Batterie domestique avec tarifs français', shortDescEs: 'Batería doméstica con tarifas francesas' },
  { code: 'PT', name: 'Portugal', nameFr: 'Portugal', nameEs: 'Portugal', currency: 'EUR', tariffUsdPerKwh: 0.262, avgDailyIrradiance: 4.5, netMetering: true, region: 'europe', shortDesc: 'Solar & battery calculator for Portuguese homes', shortDescFr: 'Calculateur solaire pour foyers portugais', shortDescEs: 'Calculadora solar para hogares portugueses' },
  { code: 'IT', name: 'Italy', nameFr: 'Italie', nameEs: 'Italia', currency: 'EUR', tariffUsdPerKwh: 0.398, avgDailyIrradiance: 4.3, netMetering: true, region: 'europe', shortDesc: 'Battery storage sizing with Italy\'s high electricity costs', shortDescFr: 'Batterie face aux coûts élevés italiens', shortDescEs: 'Batería para los altos costos italianos' },
  { code: 'GR', name: 'Greece', nameFr: 'Grèce', nameEs: 'Grecia', currency: 'EUR', tariffUsdPerKwh: 0.262, avgDailyIrradiance: 4.8, netMetering: true, region: 'europe', shortDesc: 'Solar battery backup sizing for Greek islands & homes', shortDescFr: 'Batterie solaire pour îles et maisons grecques', shortDescEs: 'Batería solar para islas y hogares griegos' },
];

export function getCountry(code: string): CountryData | undefined {
  return COUNTRIES.find(c => c.code === code);
}

/** Convert 2-letter country code to flag emoji (ZA → 🇿🇦) */
export function getCountryFlag(code: string): string {
  const base = 0x1f1e6; // Regional Indicator A
  const a = 'A'.charCodeAt(0);
  return String.fromCodePoint(
    base + code.toUpperCase().charCodeAt(0) - a,
    base + code.toUpperCase().charCodeAt(1) - a,
  );
}
