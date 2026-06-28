import type { Locale } from './config'

const dictionaries = {
  zh: () => import('./locales/zh.json').then(m => m.default),
  en: () => import('./locales/en.json').then(m => m.default),
}

export const getDictionary = (locale: Locale) => dictionaries[locale]()
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
