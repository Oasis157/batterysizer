export interface BatteryProduct {
  model: string;
  capacityKwh: number;
  cRate: number;
  priceUsd: number;
}
export interface InverterProduct {
  model: string;
  powerKw: number;
  type: 'hybrid' | 'off_grid' | 'grid_tie';
  priceUsd: number;
}
export interface BundleSystem {
  name: string;
  series: 'h6k' | 'e6k';
  description: string;
  items: string[];
  totalKwh: number;
  totalPriceUsd: number;
  imgSrc: string;
  url: string;
  /** Max battery kWh this bundle covers (matching logic) */
  maxBatteryKwh: number;
  /** Max inverter kW this bundle covers */
  maxInverterKw: number;
}

export const BATTERIES: BatteryProduct[] = [
  { model: 'TD-B5125', capacityKwh: 1.28, cRate: 2, priceUsd: 213 },
  { model: 'TD-B5130', capacityKwh: 1.38, cRate: 5, priceUsd: 316 },
  { model: 'TD-B5138', capacityKwh: 1.92, cRate: 3, priceUsd: 550 },
];

export const INVERTERS: InverterProduct[] = [
  { model: 'TD-H6K', powerKw: 6, type: 'hybrid', priceUsd: 500 },
  { model: 'TD-E6K', powerKw: 6, type: 'off_grid', priceUsd: 1350 },
];

// Prices from 囤电自研产品价格表 (标准价/retail, EXW USD)
// H6C1: 2-bay battery cabinet $180, H6C2: extension $180, H6D: base $100

export const BUNDLES: BundleSystem[] = [
  // ─── E6K Portable Series ───
  {
    name: 'E6K Portable',
    series: 'e6k',
    description: 'Portable power station, max 6kW output. One battery module for essential outdoor/backup use.',
    items: ['E6K Power Station', 'B5138 Battery ×1'],
    totalKwh: 1.92,
    totalPriceUsd: 1350 + 550,
    imgSrc: '/images/e6k.png',
    url: 'https://www.pack-e.com',
    maxBatteryKwh: 4,
    maxInverterKw: 6,
  },
  {
    name: 'E6K Plus',
    series: 'e6k',
    description: 'Extended portable power with dual batteries. 38 min fast charging, 9 units parallel up to 54kW.',
    items: ['E6K Power Station', 'B5138 Battery ×2'],
    totalKwh: 3.84,
    totalPriceUsd: 1350 + 2 * 550,
    imgSrc: '/images/e6k.png',
    url: 'https://www.pack-e.com',
    maxBatteryKwh: 6,
    maxInverterKw: 6,
  },
  // ─── H6K Home Storage Series ───
  {
    name: 'H6K Home 2.0',
    series: 'h6k',
    description: 'Entry-level home backup. 6kW hybrid inverter with 2kWh LFP battery, expandable to 32kWh.',
    items: ['H6K Hybrid Inverter', 'H6C1 Battery Cabinet', 'B5138 Battery ×1'],
    totalKwh: 1.92,
    totalPriceUsd: 500 + 180 + 550,
    imgSrc: '/images/h6k.jpg',
    url: 'https://www.pack-e.com',
    maxBatteryKwh: 4,
    maxInverterKw: 6,
  },
  {
    name: 'H6K Home 4.0',
    series: 'h6k',
    description: 'Standard home storage. Powers fridge, lights, wifi, and AC during outages. Battery packs hot-swappable.',
    items: ['H6K Hybrid Inverter', 'H6C1 Battery Cabinet', 'H6D Base', 'B5138 Battery ×2'],
    totalKwh: 3.84,
    totalPriceUsd: 500 + 180 + 100 + 2 * 550,
    imgSrc: '/images/h6k.jpg',
    url: 'https://www.pack-e.com',
    maxBatteryKwh: 8,
    maxInverterKw: 6,
  },
  {
    name: 'H6K Home 8.0',
    series: 'h6k',
    description: 'Large home system for whole-house backup. Supports solar input, 8kW output runs 3 ACs simultaneously.',
    items: ['H6K Hybrid Inverter', 'H6C1 Battery Cabinet', 'H6C2 Extension ×2', 'H6D Base', 'B5138 Battery ×6'],
    totalKwh: 11.52,
    totalPriceUsd: 500 + 180 + 2 * 180 + 100 + 6 * 550,
    imgSrc: '/images/h6k.jpg',
    url: 'https://www.pack-e.com',
    maxBatteryKwh: 32,
    maxInverterKw: 6,
  },
];

/**
 * Find the best-matching bundle(s) for a given system size.
 * Shows both H6K and E6K options near the user's size.
 */
export function findMatchingBundles(batteryKwh: number, inverterKw: number): BundleSystem[] {
  const h6kBundles = BUNDLES.filter(b => b.series === 'h6k').sort((a, b) => a.totalKwh - b.totalKwh);
  const e6kBundles = BUNDLES.filter(b => b.series === 'e6k').sort((a, b) => a.totalKwh - b.totalKwh);

  // Pick one H6K bundle: best fit or smallest if battery is tiny
  const bestH6k = h6kBundles.find(b => b.maxBatteryKwh >= batteryKwh) || h6kBundles[0];
  // Pick one E6K bundle: best fit or largest if battery is too big for E6K
  const bestE6k = e6kBundles.find(b => b.maxBatteryKwh >= batteryKwh) || e6kBundles[e6kBundles.length - 1];

  return [bestH6k, bestE6k].filter(Boolean);
}

export function calculateSystemPrice(inverterKw: number, batteryKwh: number, batteryType: string = 'TD-B5125') {
  const battery = BATTERIES.find(b => b.model === batteryType) || BATTERIES[0];
  const batteryCount = Math.ceil(batteryKwh / battery.capacityKwh);
  const inverter = INVERTERS.find(i => i.powerKw >= inverterKw) || INVERTERS[0];
  const totalPrice = inverter.priceUsd + batteryCount * battery.priceUsd;
  return { inverter, batteryModel: battery, batteryCount, totalPrice };
}
