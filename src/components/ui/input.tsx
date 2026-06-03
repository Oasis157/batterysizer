export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none placeholder:text-[var(--muted)]/60 focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--primary)]/10 transition-all duration-200 ${className || ''}`}
      {...props}
    />
  );
}
