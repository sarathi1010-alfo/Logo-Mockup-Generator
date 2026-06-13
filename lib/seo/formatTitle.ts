const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'MockBrand';
const SEPARATOR = ' | ';

export function formatTitle(rawTitle: string, isHomepage = false): string {
  if (isHomepage) return SITE_NAME;
  return `${rawTitle}${SEPARATOR}${SITE_NAME}`;
}
