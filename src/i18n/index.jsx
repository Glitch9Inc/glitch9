import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from './locales/en.js'
import ko from './locales/ko.js'
import ja from './locales/ja.js'

const dictionaries = { en, ko, ja }

export const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ko', label: '한국어', short: 'KO' },
  { code: 'ja', label: '日本語', short: 'JA' },
]

const LanguageContext = createContext(null)

const detect = () => {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem('g9-lang')
  if (saved && dictionaries[saved]) return saved
  const nav = (navigator.language || 'en').toLowerCase()
  if (nav.startsWith('ko')) return 'ko'
  if (nav.startsWith('ja')) return 'ja'
  return 'en'
}

const resolve = (dict, path) =>
  path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), dict)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detect)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem('g9-lang', lang)
  }, [lang])

  const value = useMemo(() => {
    const t = (path) => {
      const hit = resolve(dictionaries[lang], path)
      if (hit !== undefined) return hit
      const fallback = resolve(dictionaries.en, path)
      if (fallback === undefined && import.meta.env.DEV) {
        console.warn(`[i18n] missing key: ${path}`)
        return path
      }
      return fallback ?? path
    }
    return { lang, setLang, t }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
