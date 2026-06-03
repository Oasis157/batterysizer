'use client';
export function Slider({ min, max, step = 1, value, onChange }: {
  min: number; max: number; step?: number;
  value: number; onChange: (v: number) => void;
}) {
  return (
    <div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full" />
    </div>
  );
}
