import type { Locale } from '@i18n/utils';

const LOCALES: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en-US',
} as const;

export const getFormattedDate = (date: Date | string, locale: Locale, options: Intl.DateTimeFormatOptions) =>
  new Date(date).toLocaleDateString(LOCALES[locale], options);
