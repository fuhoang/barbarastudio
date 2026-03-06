import BlurText from "@/components/BlurText";
import { BrandLogo } from "@/components/home/brand-logo";
import type { UiCopy } from "@/components/home/types";

export function HeroSection({ ui }: { ui: UiCopy }) {
  return (
    <section className="py-10 lg:py-14">
      <div className="relative mx-auto max-w-5xl rounded-[2.6rem] border border-[color:var(--line)] p-7 shadow-[0_24px_70px_rgba(183,115,129,0.08)] sm:p-10">
        <div className="absolute right-6 top-8 h-24 w-24 rounded-full bg-[#f4d8e0]/60 blur-2xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white px-3 py-2">
              <BrandLogo compact />
            </div>
            <BlurText
              text={ui.heroHeadline}
              animateBy="words"
              delay={180}
              className="mx-auto mt-7 max-w-2xl justify-center text-center font-[family:var(--font-cormorant)] text-6xl leading-[0.92] font-bold tracking-tight text-[color:var(--accent-deep)] sm:text-7xl"
            />
            <div className="mx-auto mt-6 max-w-3xl">
              <p className="text-center text-base leading-8 text-[color:var(--ink-soft)]">
                {ui.heroParagraphOne}
              </p>
              <p className="mt-3 text-center text-base leading-8 text-[color:var(--ink-soft)]">
                {ui.heroParagraphTwo}
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent-deep)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:-translate-y-0.5 hover:bg-[color:var(--accent)]"
              >
                {ui.heroBookNow}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)] hover:-translate-y-0.5 hover:bg-[#fff7f9]"
              >
                {ui.heroViewServices}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-white/85 p-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="rounded-2xl border border-[color:var(--line)] bg-[#fff7f9] p-4 transition hover:-translate-y-1 hover:border-[color:var(--line)] hover:bg-white hover:shadow-[0_12px_26px_rgba(183,115,129,0.16)]">
                <svg viewBox="0 0 160 110" className="h-28 w-full" aria-label="Lashes illustration">
                  <path d="M22 74 Q80 34 138 74" fill="none" stroke="#b67381" strokeWidth="3" strokeLinecap="round" />
                  <path d="M40 70 L33 58" stroke="#d798a5" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M56 63 L51 48" stroke="#d798a5" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M74 58 L74 42" stroke="#d798a5" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M92 58 L97 44" stroke="#d798a5" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M110 63 L118 50" stroke="#d798a5" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M126 70 L134 58" stroke="#d798a5" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
                <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-deep)]">
                  {ui.lashesLabel}
                </figcaption>
              </figure>

              <figure className="rounded-2xl border border-[color:var(--line)] bg-white p-4 transition hover:-translate-y-1 hover:border-[color:var(--line)] hover:shadow-[0_12px_26px_rgba(183,115,129,0.16)]">
                <svg viewBox="0 0 160 110" className="h-28 w-full" aria-label="Nails illustration">
                  <rect x="20" y="35" width="25" height="48" rx="12" fill="#f5dce3" stroke="#d798a5" strokeWidth="2" />
                  <rect x="50" y="28" width="25" height="55" rx="12" fill="#f2cfd9" stroke="#d798a5" strokeWidth="2" />
                  <rect x="80" y="24" width="25" height="59" rx="12" fill="#efc2cf" stroke="#d798a5" strokeWidth="2" />
                  <rect x="110" y="31" width="25" height="52" rx="12" fill="#f7e6eb" stroke="#d798a5" strokeWidth="2" />
                  <path d="M18 87 Q80 102 142 87" fill="none" stroke="#b67381" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-deep)]">
                  {ui.nailsLabel}
                </figcaption>
              </figure>

              <figure className="rounded-2xl border border-[color:var(--line)] bg-[#fff7f9] p-4 transition hover:-translate-y-1 hover:border-[color:var(--line)] hover:bg-white hover:shadow-[0_12px_26px_rgba(183,115,129,0.16)]">
                <svg viewBox="0 0 160 110" className="h-28 w-full" aria-label="Hair illustration">
                  <path d="M35 95 Q28 55 48 28 Q66 8 88 18 Q112 30 126 56 Q134 72 128 95" fill="#f2cfd9" stroke="#d798a5" strokeWidth="2.4" />
                  <path d="M60 42 Q74 58 72 94" fill="none" stroke="#b67381" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M84 38 Q96 56 95 95" fill="none" stroke="#b67381" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M103 44 Q112 60 113 92" fill="none" stroke="#b67381" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-deep)]">
                  {ui.hairLabel}
                </figcaption>
              </figure>

              <figure className="rounded-2xl border border-[color:var(--line)] bg-white p-4 transition hover:-translate-y-1 hover:border-[color:var(--line)] hover:shadow-[0_12px_26px_rgba(183,115,129,0.16)]">
                <svg viewBox="0 0 160 110" className="h-28 w-full" aria-label="Eyebrows illustration">
                  <path d="M22 58 Q48 34 74 52" fill="none" stroke="#b67381" strokeWidth="4" strokeLinecap="round" />
                  <path d="M86 52 Q112 34 138 58" fill="none" stroke="#b67381" strokeWidth="4" strokeLinecap="round" />
                  <path d="M28 65 Q48 47 69 60" fill="none" stroke="#d798a5" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M92 60 Q113 47 132 65" fill="none" stroke="#d798a5" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="80" cy="76" r="3" fill="#d798a5" />
                </svg>
                <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-deep)]">
                  {ui.browsLabel}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
