export function Progress({ value }: { value: number }) {
  return (
    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
      <div className="h-1 bg-[var(--primary)] rounded-full transition-all duration-500"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}
