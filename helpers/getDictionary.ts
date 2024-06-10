import type { Locale } from 'i18n-config';

import 'server-only';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  id: () => import('@/dictionaries/id.json').then((module) => module.default),
};

export default async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en();
