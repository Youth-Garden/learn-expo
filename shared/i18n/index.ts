import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'expo-localization'

import en from './locales/en.json'
import vi from './locales/vi.json'

const deviceLang = getLocales()[0]?.languageCode ?? 'en'

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next)

// eslint-disable-next-line import/no-named-as-default-member
i18n.init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: deviceLang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
