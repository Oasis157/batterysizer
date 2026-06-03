import { cn } from '@/lib/utils';

export function Card({
  className,
  children,
  hover = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-[var(--border)] shadow-[0_1px_3px_rgba(26,24,21,0.04),0_4px_16px_rgba(26,24,21,0.03)]',
        hover &&
          'hover:shadow-[0_2px_6px_rgba(26,24,21,0.06),0_8px_24px_rgba(26,24,21,0.05)] hover:-translate-y-0.5 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-8', className)}>{children}</div>;
}
