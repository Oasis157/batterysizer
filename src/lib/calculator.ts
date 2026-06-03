import { getCountry } from './data/countries';

export type Scenario = 'grid_backup' | 'off_grid' | 'grid_tou';

export interface CalculatorInput {
  scenario: Scenario;
  monthlyKwh: number;       // user provides monthly bill kWh
  peakLoadKw: number;       // user provides or we estimate from appliances
  backupHours: number;
  countryCode: string;
  existingSolarKw?: number;
  monthlyBillUsd?: number;
  /** If user provides both bill and monthlyKwh, derive their actual tariff */
  customTariffUsdPerKwh?: number;
}

export interface BatteryResult {
  recommendedKwh: number;
  priceUsd: number;
}

export interface InverterResult {
  recommendedKw: number;
  priceUsd: number;
  note: string;
}

export interface SolarResult {
  recommendedKw: number;
  panelCount: number;
  priceUsd: number;
}

export interface ROIResult {
  systemCostUsd: number;
  annualSavingsUsd: number;
  paybackYears: number;
  tenYearSavingsUsd: number;
  monthlyBillCurrent?: number;
  monthlyBillAfter?: number;
}

export interface CalculatorOutput {
  dailyKwh: number;
  battery: BatteryResult;
  inverter: InverterResult;
  solar: SolarResult;
  roi: ROIResult;
}

// Constants
const BATTERY_DOD = 0.8;
const SYSTEM_EFFICIENCY = 0.75;
const PV_COST_PER_KW = 800;
const SAFETY_FACTOR = 1.25;
const BATTERY_COST_PER_KWH = 350;  // $/kWh (battery pack cost)
const INSTALL_PCT = 0.15;

export function calculateSystem(input: CalculatorInput): CalculatorOutput {
  const dailyKwh = input.monthlyKwh / 30;
  const country = getCountry(input.countryCode);
  const tariff = input.customTariffUsdPerKwh ?? country?.tariffUsdPerKwh ?? 0.15;
  const irradiance = country?.avgDailyIrradiance ?? 5.0;

  // ─── Battery ───
  let neededKwh: number;
  switch (input.scenario) {
    case 'grid_backup':
      neededKwh = (dailyKwh * input.backupHours / 24) / BATTERY_DOD;
      break;
    case 'off_grid':
      neededKwh = (dailyKwh * input.backupHours) / BATTERY_DOD;
      break;
    case 'grid_tou':
      neededKwh = (dailyKwh * Math.min(input.backupHours / 24, 1)) / BATTERY_DOD;
      break;
  }
  // Round up to nearest 0.5kWh for realistic sizing
  neededKwh = Math.ceil(neededKwh * 2) / 2;

  const battery: BatteryResult = {
    recommendedKwh: Math.max(2, neededKwh),
    priceUsd: Math.round(Math.max(2, neededKwh) * BATTERY_COST_PER_KWH),
  };

  // ─── Inverter ───
  const neededInvKw = input.peakLoadKw * SAFETY_FACTOR;
  const roundedInvKw = Math.ceil(neededInvKw);
  const invPriceMap: Record<number, number> = { 1: 200, 2: 300, 3: 400, 5: 500, 6: 550, 8: 700, 10: 900, 12: 1100 };
  const invKws = Object.keys(invPriceMap).map(Number).sort((a, b) => a - b);
  const invKw = invKws.find(k => k >= roundedInvKw) || invKws[invKws.length - 1];

  const inverter: InverterResult = {
    recommendedKw: invKw,
    priceUsd: invPriceMap[invKw] || invKw * 100,
    note: '',
  };

  // ─── Solar ───
  let solarKw: number;
  switch (input.scenario) {
    case 'off_grid':
      solarKw = (dailyKwh / (irradiance * SYSTEM_EFFICIENCY)) * 1.3;
      break;
    case 'grid_tou':
      solarKw = dailyKwh / (irradiance * SYSTEM_EFFICIENCY);
      break;
    default:
      solarKw = (dailyKwh * 0.5) / (irradiance * SYSTEM_EFFICIENCY);
  }
  const existing = input.existingSolarKw ?? 0;
  const additionalKw = Math.max(0, solarKw - existing);
  const panelCount = Math.ceil(additionalKw * 1000 / 450);

  const solar: SolarResult = {
    recommendedKw: Math.round(additionalKw * 10) / 10,
    panelCount,
    priceUsd: Math.round(additionalKw * PV_COST_PER_KW),
  };

  // ─── ROI ───
  const installCost = Math.round(battery.priceUsd * INSTALL_PCT);
  const systemCost = battery.priceUsd + inverter.priceUsd + solar.priceUsd + installCost;
  const solarOffset = solar.recommendedKw > 0 ? 0.7 : 0.3;
  const annualSavings = dailyKwh * 365 * tariff * solarOffset;
  const paybackYears = annualSavings > 0 ? Math.round(systemCost / annualSavings * 10) / 10 : 99;
  const tenYearSavings = annualSavings * 10 - systemCost;

  const roi: ROIResult = {
    systemCostUsd: Math.round(systemCost),
    annualSavingsUsd: Math.round(annualSavings),
    paybackYears,
    tenYearSavingsUsd: Math.round(Math.max(0, tenYearSavings)),
    monthlyBillCurrent: input.monthlyBillUsd,
    monthlyBillAfter: input.monthlyBillUsd ? Math.round(Math.max(0, input.monthlyBillUsd - annualSavings / 12)) : undefined,
  };

  return { dailyKwh, battery, inverter, solar, roi };
}
