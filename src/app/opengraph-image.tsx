import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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

        {/* Logo */}
        <img
          src="https://solbatterycalc.com/logo.png"
          alt="SolBatteryCalc"
          style={{
            height: 120,
            width: 'auto',
            marginBottom: 32,
            objectFit: 'contain',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            fontFamily: '"Inter", sans-serif',
            color: '#c4820e',
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          Free Home Energy Storage Calculator
        </div>

        {/* Bottom bar */}
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
