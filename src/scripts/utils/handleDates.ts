export const getFormattedDate = (date: Date | string, locale: 'es-ES' | 'en-US', options: Intl.DateTimeFormatOptions) =>
  new Date(date).toLocaleDateString(locale, options);
