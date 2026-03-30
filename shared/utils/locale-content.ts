import { getLocales } from 'expo-localization'

/**
 * Resolve localized text from a multi-language object (e.g. MangaDex title/description).
 * Automatically picks the best match based on device language.
 */
export const getLocalizedText = (
  textObj: Record<string, string> | undefined | null,
  fallback = '',
): string => {
  if (!textObj) return fallback
  const userLang = getLocales()[0]?.languageCode ?? 'en'
  return (
    textObj[userLang] || textObj.en || Object.values(textObj)[0] || fallback
  )
}
