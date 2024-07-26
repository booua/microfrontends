import type { AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(
    `../locales/${locale}.json`
  )) as AbstractIntlMessages;
  return {
    messages: messages.default as AbstractIntlMessages,
  };
});

export const SUPPORTED_LANGUAGES = ['pl', 'en'];
export const DEFAULT_LOCALE = 'pl';
