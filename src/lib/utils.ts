export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$', EUR: '€', GBP: '£', JPY: '¥', CNY: '¥',
  ZAR: 'R', NGN: '₦', KES: 'KSh', GHS: 'GH₵', TZS: 'TSh',
  UGX: 'USh', ZMW: 'ZK', PHP: '₱', VND: '₫', IDR: 'Rp',
  PKR: '₨', BDT: '৳', LKR: 'Rs', MMK: 'K',
  COP: '$', CLP: '$', PEN: 'S/', BRL: 'R$', MXN: '$',
  INR: '₹', SAR: '﷼', AED: 'د.إ',
};

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  const sym = CURRENCY_SYMBOLS[currency] || currency + ' ';
  return sym + Math.round(amount).toLocaleString();
}

// Non-linear slider: 0-1000 kWh (50% track) + 1000-3000 kWh (50% track)
export function sliderToKwh(pos: number): number {
  if (pos <= 50) return Math.round(pos * 20);
  return 1000 + Math.round((pos - 50) * 40);
}
export function kwhToSlider(kwh: number): number {
  if (kwh <= 1000) return kwh / 20;
  return 50 + (kwh - 1000) / 40;
}

// Exchange rate cache
let ratesCache: Record<string, number> | null = null;
let ratesFetchedAt = 0;

export async function fetchExchangeRates(): Promise<Record<string, number>> {
  if (ratesCache && Date.now() - ratesFetchedAt < 3600000) return ratesCache;
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.rates) {
      ratesCache = data.rates;
      ratesFetchedAt = Date.now();
      return data.rates;
    }
    throw new Error('Invalid response format');
  } catch (err) {
    console.warn('Failed to fetch exchange rates:', err);
    return {};
  }
}

export function convertToLocal(usdAmount: number, rates: Record<string, number>, currencyCode: string): number {
  if (currencyCode === 'USD') return usdAmount;
  const rate = rates[currencyCode];
  if (!rate) return usdAmount;
  return Math.round(usdAmount * rate * 100) / 100;
}
