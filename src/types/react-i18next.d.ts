// import all namespaces (for the default language, only)
import { defaultNS, resources } from '~/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: { translation: (typeof resources)['en'] };
  }
}
