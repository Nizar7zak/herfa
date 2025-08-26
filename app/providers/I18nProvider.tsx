"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "ar" | "en";
type Messages = Record<string, string>;
type Theme = "light" | "dark";

type I18nContextValue = {
  lang: Language;
  dir: "rtl" | "ltr";
  theme: Theme;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "herfa.lang";
const THEME_STORAGE_KEY = "herfa.theme";

function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "ar";
  const lang = (navigator.language || "ar").toLowerCase();
  return lang.startsWith("ar") ? "ar" : "en";
}

async function loadMessages(lang: Language): Promise<Messages> {
  switch (lang) {
    case "en":
      return (await import("../../locales/en.json")).default as Messages;
    case "ar":
    default:
      return (await import("../../locales/ar.json")).default as Messages;
  }
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");
  const [theme, setTheme] = useState<Theme>("light");
  const [messages, setMessages] = useState<Messages>({});
  const [mounted, setMounted] = useState(false); // avoid SSR flash

  // Initialize language and theme from localStorage or browser
  useEffect(() => {
    const fromStorage = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Language | null;
    const themeFromStorage = (typeof window !== "undefined" && localStorage.getItem(THEME_STORAGE_KEY)) as Theme | null;
    setLang(fromStorage || detectBrowserLanguage());
    setTheme(themeFromStorage || "light");
    setMounted(true);
  }, []);

  // Update messages and html attributes
  useEffect(() => {
    if (!mounted) return;

    loadMessages(lang).then(setMessages).catch(() => setMessages({}));

    localStorage.setItem(STORAGE_KEY, lang);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [lang, theme, mounted]);

  const t = useMemo(() => (key: string) => messages[key] ?? key, [messages]);

  const value = useMemo<I18nContextValue>(() => ({
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    theme,
    t,
    setLanguage: setLang,
    toggleLanguage: () => setLang(prev => (prev === "ar" ? "en" : "ar")),
    toggleTheme: () => setTheme(prev => (prev === "light" ? "dark" : "light")),
  }), [lang, theme, t]);

  if (!mounted) return null; // prevent hydration mismatch

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
