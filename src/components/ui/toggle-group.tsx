'use client';
import { cn } from '@/lib/utils';

export function ToggleGroup<T extends string>({ options, value, onChange }: {
  options: { value: T; label: string; desc?: string; icon?: string }[];
  value: T; onChange: (v: T) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {options.map(opt => (
        <button key={opt.value} onClick={() => onChange(opt.value)}
          className={cn(
            'flex flex-col items-start gap-1.5 rounded-xl border-2 p-5 text-left transition-all duration-150 cursor-pointer',
            value === opt.value
              ? 'border-[var(--primary)] bg-[var(--primary-light)]'
              : 'border-[var(--border)] hover:border-[#cbd5e1] bg-white'
          )}>
          {opt.icon && <span className="text-2xl mb-1">{opt.icon}</span>}
          <span className="font-semibold text-sm text-[var(--fg)]">{opt.label}</span>
          {opt.desc && <span className="text-xs text-[var(--muted)] leading-relaxed">{opt.desc}</span>}
        </button>
      ))}
    </div>
  );
}
