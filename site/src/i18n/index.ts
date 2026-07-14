import en from './en';
import ar from './ar';

export const translations = {
  en,
  ar,
};

export type Translation = typeof en;
export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale): Translation {
  return translations[locale] ?? translations.en;
}
