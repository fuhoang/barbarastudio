"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/home/brand-logo";
import type { Language, UiCopy } from "@/components/home/types";

type SiteHeaderProps = {
  ui: UiCopy;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function SiteHeader({ ui, language, onLanguageChange }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLabel =
    language === "en" ? "Primary navigation" : "Navegación principal";
  const languageLabel =
    language === "en" ? "Language selector" : "Selector de idioma";
  const menuLabel =
    language === "en"
      ? "Toggle mobile menu"
      : "Alternar menú móvil";
  const langEnLabel =
    language === "en"
      ? "English selected"
      : "Switch to English";
  const langEsLabel =
    language === "en"
      ? "Switch to Spanish"
      : "Español seleccionado";

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--line)] pb-5">
      <div>
        <BrandLogo />
        <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
          {ui.brandSubtitle}
        </p>
      </div>
      <button
        type="button"
        onClick={() => setIsMenuOpen((open) => !open)}
        aria-label={menuLabel}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--accent-deep)] sm:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          {isMenuOpen ? (
            <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <nav
        className="hidden flex-wrap items-center gap-4 text-sm text-[color:var(--ink-soft)] sm:flex sm:gap-6"
        aria-label={navLabel}
      >
        <a
          href="#services"
          className="hover:text-[color:var(--accent-deep)]"
        >
          {ui.navServices}
        </a>
        <a
          href="#contact"
          className="rounded-full border border-[color:var(--line)] px-4 py-2 hover:border-[color:var(--line)] hover:bg-white/60"
        >
          {ui.navBookNow}
        </a>
        <div className="ml-1 inline-flex rounded-full border border-[color:var(--line)] bg-white p-1">
          <span className="sr-only">{languageLabel}</span>
          <button
            type="button"
            onClick={() => onLanguageChange("en")}
            aria-pressed={language === "en"}
            aria-label={langEnLabel}
            className={`rounded-full px-3 py-1 text-xs font-semibold tracking-[0.12em] ${
              language === "en"
                ? "bg-[color:var(--accent-deep)] text-white"
                : "text-[color:var(--ink-soft)]"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => onLanguageChange("es")}
            aria-pressed={language === "es"}
            aria-label={langEsLabel}
            className={`rounded-full px-3 py-1 text-xs font-semibold tracking-[0.12em] ${
              language === "es"
                ? "bg-[color:var(--accent-deep)] text-white"
                : "text-[color:var(--ink-soft)]"
            }`}
          >
            ES
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label={navLabel}
          className="w-full rounded-2xl border border-[color:var(--line)] bg-white/90 p-4 sm:hidden"
        >
          <div className="flex flex-col gap-3 text-sm text-[color:var(--ink-soft)]">
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full border border-[color:var(--line)] px-4 py-2 text-center hover:border-[color:var(--line)]"
            >
              {ui.navServices}
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full bg-[color:var(--accent-deep)] px-4 py-2 text-center font-semibold text-white"
            >
              {ui.navBookNow}
            </a>
            <div className="inline-flex self-center rounded-full border border-[color:var(--line)] bg-white p-1">
              <button
                type="button"
                onClick={() => onLanguageChange("en")}
                aria-pressed={language === "en"}
                aria-label={langEnLabel}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-[0.12em] ${
                  language === "en"
                    ? "bg-[color:var(--accent-deep)] text-white"
                    : "text-[color:var(--ink-soft)]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange("es")}
                aria-pressed={language === "es"}
                aria-label={langEsLabel}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-[0.12em] ${
                  language === "es"
                    ? "bg-[color:var(--accent-deep)] text-white"
                    : "text-[color:var(--ink-soft)]"
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
