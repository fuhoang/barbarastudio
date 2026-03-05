import { BrandLogo } from "@/components/home/brand-logo";
import type { Language, UiCopy } from "@/components/home/types";

type SiteHeaderProps = {
  ui: UiCopy;
  language: Language;
  setLanguage: (language: Language) => void;
};

export function SiteHeader({ ui, language, setLanguage }: SiteHeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--line)] pb-5">
      <div>
        <BrandLogo />
        <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
          {ui.brandSubtitle}
        </p>
      </div>
      <nav className="flex flex-wrap items-center gap-4 text-sm text-[color:var(--ink-soft)] sm:gap-6">
        <a
          href="#services"
          className="hover:text-[color:var(--accent-deep)]"
        >
          {ui.navServices}
        </a>
        <a
          href="#contact"
          className="rounded-full border border-[color:var(--line)] px-4 py-2 hover:border-[color:var(--accent)] hover:bg-white/60"
        >
          {ui.navBookNow}
        </a>
        <div className="ml-1 inline-flex rounded-full border border-[color:var(--line)] bg-white p-1">
          <button
            type="button"
            onClick={() => setLanguage("en")}
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
            onClick={() => setLanguage("es")}
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
    </header>
  );
}
