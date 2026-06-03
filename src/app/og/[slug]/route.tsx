import { ImageResponse } from 'next/og';
import { COUNTRIES, getCountryFlag } from '@/lib/data/countries';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

function slugToName(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const countryName = slugToName(slug);

  // Find country data by matching name to slug
  const country = COUNTRIES.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  const flag = country ? getCountryFlag(country.code) : '';
  const tariff = country ? `${country.tariffUsdPerKwh.toFixed(3)} USD/kWh` : '';
  const irradiance = country ? `${country.avgDailyIrradiance} kWh/m²/day` : '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0d5e4a 0%, #094a3a 40%, #1a1815 100%)',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(ellipse, rgba(196,130,14,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: '40%',
            height: '40%',
            background: 'radial-gradient(ellipse, rgba(196,130,14,0.1) 0%, transparent 70%)',
          }}
        />

        {/* Flag */}
        {flag && (
          <div style={{ fontSize: 72, lineHeight: 1, marginBottom: 16 }}>
            {flag}
          </div>
        )}

        {/* Country Name */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: 12,
            lineHeight: 1.2,
          }}
        >
          {countryName}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: '#c4820e',
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          Free Home Energy Storage Calculator
        </div>

        {/* Stats row */}
        {(tariff || irradiance) && (
          <div
            style={{
              display: 'flex',
              gap: 24,
              fontSize: 18,
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            {tariff && <span>{tariff}</span>}
            {tariff && irradiance && (
              <span style={{ color: '#c4820e', fontWeight: 300 }}>·</span>
            )}
            {irradiance && <span>{irradiance}</span>}
          </div>
        )}

        {/* Bottom gradient bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #0d5e4a 0%, #c4820e 50%, #0d5e4a 100%)',
          }}
        />
      </div>
    ),
    size,
  );
}
