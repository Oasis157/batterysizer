import createMiddleware from 'next-intl/middleware';
export default createMiddleware({
  locales: ['en', 'fr', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always',
  alternateLinks: false,
});
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
