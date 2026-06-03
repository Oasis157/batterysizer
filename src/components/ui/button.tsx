import { cn } from '@/lib/utils';

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'pill';
  size?: 'sm' | 'md' | 'lg';
}) {
  const v: Record<string, string> = {
    primary:
      'bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5',
    secondary:
      'bg-[var(--primary-light)] text-[var(--primary)] hover:bg-[#e0efe8]',
    outline:
      'border border-[var(--border)] text-[var(--fg)] hover:bg-[var(--bg)] hover:border-[var(--primary)]/30',
    ghost:
      'text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--bg)]',
    pill:
      'bg-gradient-to-b from-[#0d5e4a] to-[#094a3a] text-white rounded-full shadow-[0_2px_8px_rgba(13,94,74,0.2)] hover:shadow-[0_4px_16px_rgba(13,94,74,0.3)] hover:-translate-y-0.5',
  };
  const s: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base font-medium',
  };
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-[0.98]',
        v[variant],
        s[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
