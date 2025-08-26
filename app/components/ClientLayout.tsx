"use client";
import { useEffect } from "react";
import { useI18n } from "@/app/providers/I18nProvider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { lang, dir, theme } = useI18n();

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", dir);
    
    if (theme === "dark") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
    }
  }, [lang, dir, theme]);

  return <>{children}</>;
}
