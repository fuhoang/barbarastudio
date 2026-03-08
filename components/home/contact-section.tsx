import type { UiCopy } from "@/components/home/types";

export function ContactSection({ ui }: { ui: UiCopy }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      role="region"
      className="px-6 pb-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl rounded-[2.75rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,_#c98395,_#d798a5_45%,_#f1dbe2_100%)] p-8 text-white shadow-[0_28px_80px_rgba(183,115,129,0.16)] sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
            {ui.bookingsLabel}
          </p>
          <h2
            id="contact-heading"
            className="mt-4 font-[family:var(--font-cormorant)] text-5xl leading-tight font-semibold sm:text-6xl"
          >
            {ui.contactHeadline}
          </h2>
          <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
            {ui.contactDescription}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-sm sm:max-w-sm lg:mt-0 lg:min-w-80">
          <a
            href="tel:+584241257083"
            aria-label={ui.callLabel}
            className="rounded-full bg-white px-6 py-4 text-center font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-deep)] hover:-translate-y-0.5"
          >
            {ui.callLabel}
          </a>
          <a
            href="mailto:Barbaracolmenares4@gmail.com"
            aria-label={ui.emailAria}
            className="rounded-full border border-[color:var(--line)] px-6 py-4 text-center font-semibold uppercase tracking-[0.18em] text-white hover:-translate-y-0.5 hover:bg-white/10"
          >
            Barbaracolmenares4@gmail.com
          </a>
          <div className="mt-1 flex items-center justify-center gap-3 sm:justify-start">
            <a
              href="mailto:Barbaracolmenares4@gmail.com"
              aria-label={ui.emailIconAria}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] text-white transition hover:-translate-y-0.5 hover:bg-white/12"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <rect x="3.5" y="6.5" width="17" height="11" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4.5 8l7.5 5.8L19.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/Barbyeal.studio"
              target="_blank"
              rel="noreferrer"
              aria-label={ui.instagramAria}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] text-white transition hover:-translate-y-0.5 hover:bg-white/12"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://wa.me/584241257083"
              target="_blank"
              rel="noreferrer"
              aria-label={ui.whatsappAria}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] text-white transition hover:-translate-y-0.5 hover:bg-white/12"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M12 4.2C7.9 4.2 4.6 7.4 4.6 11.4c0 1.7.6 3.2 1.6 4.4l-.9 3.3 3.4-.9c1.1.8 2.3 1.2 3.8 1.2 4.1 0 7.4-3.2 7.4-7.2S16.1 4.2 12 4.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="M9.3 9.4c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.3l.8 1.9c.1.2.1.4 0 .5l-.4.5c-.1.1-.2.3-.1.4.2.4.6.9 1.1 1.3.6.5 1.2.9 1.8 1.1.2.1.3 0 .4-.1l.6-.7c.1-.1.3-.2.5-.1l1.8.8c.2.1.3.2.3.4v.5c0 .2 0 .4-.3.6-.5.3-1.1.5-1.7.4-1-.2-2-.7-3.4-1.9-1.3-1.2-2-2.4-2.2-3.4-.1-.6 0-1.2.3-1.7Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
