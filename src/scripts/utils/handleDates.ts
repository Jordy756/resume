import type { Locale } from '@i18n/utils';

const LOCALES: Record<Locale, string> = {
  es: 'es-ES',
  en: 'en-US',
} as const;

// Dates in the resume data are date-only strings (YYYY-MM-DD), which parse as UTC
// midnight. Formatting without an explicit timezone shifts them back one day in
// negative offsets, turning the 1st of a month into the last day of the previous one.
export const getFormattedDate = (date: Date | string, locale: Locale, options: Intl.DateTimeFormatOptions) =>
  new Date(date).toLocaleDateString(LOCALES[locale], { timeZone: 'UTC', ...options });
