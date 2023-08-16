import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import 'intl-pluralrules';

import en from '@/locales/en.json';

export const resources = {
  en,
} as const;

export const defaultNS = 'translation';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
  },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS,
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
