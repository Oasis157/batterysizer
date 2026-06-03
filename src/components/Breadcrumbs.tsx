export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({
  locale,
  items,
}: {
  locale: string;
  items: BreadcrumbItem[];
}) {
  const homeLabel: Record<string, string> = {
    en: 'Home',
    fr: 'Accueil',
    es: 'Inicio',
  };

  const allItems: BreadcrumbItem[] = [
    { label: homeLabel[locale] || 'Home', href: `/${locale}` },
    ...items,
  ];

  const baseUrl = 'https://solbatterycalc.com';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[var(--muted)] mb-6 flex-wrap">
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-[var(--border)]">/</span>}
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-[var(--primary)] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-[var(--fg)] font-medium truncate max-w-[200px]">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
