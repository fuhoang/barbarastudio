export default function Home() {
  const services = [
    {
      name: "Lashes",
      description:
        "Soft classics, wispy hybrids, and fuller sets designed to lift the eye without looking heavy.",
      detail: "From 60 min",
    },
    {
      name: "Brows",
      description:
        "Precision shaping, tinting, and lamination for a clean frame that stays effortless between visits.",
      detail: "Tailored finish",
    },
    {
      name: "Nails",
      description:
        "Glossy BIAB, structured manicures, and refined nail art with a polished, editorial feel.",
      detail: "Luxury prep",
    },
  ];

  const testimonials = [
    {
      quote:
        "Everything feels polished, calm, and incredibly detailed from start to finish.",
      name: "Ava",
    },
    {
      quote:
        "My brows stay clean and lifted, and the finish always looks soft rather than overdone.",
      name: "Nadia",
    },
  ];

  const accentDirections = [
    {
      name: "Gold",
      tag: "Warm luxe",
      surface: "bg-[#fff8ee]",
      border: "border-[#dcc39b]/60",
      chip: "bg-[#c7a567]",
      text: "text-[#4e3c20]",
      button: "bg-[#c7a567] text-white",
      line: "bg-[#dcc39b]/50",
    },
    {
      name: "Black",
      tag: "Clean contrast",
      surface: "bg-[#ffffff]",
      border: "border-black/10",
      chip: "bg-[#1d191b]",
      text: "text-[#1d191b]",
      button: "bg-[#1d191b] text-white",
      line: "bg-black/10",
    },
    {
      name: "Rose",
      tag: "Soft signature",
      surface: "bg-[#fff4f6]",
      border: "border-[#d798a5]/50",
      chip: "bg-[#d798a5]",
      text: "text-[#7d4d59]",
      button: "bg-[#d798a5] text-white",
      line: "bg-[#d798a5]/30",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.92),_transparent_34%),radial-gradient(circle_at_85%_20%,_rgba(244,238,233,0.9),_transparent_30%),linear-gradient(135deg,_#faf7f5_0%,_#f7f2ee_46%,_#f3eeea_100%)]" />
      <div className="absolute left-[-8rem] top-28 -z-10 h-72 w-72 rounded-full bg-white/45 blur-3xl" />
      <div className="absolute right-[-7rem] top-[34rem] -z-10 h-80 w-80 rounded-full bg-[#f1e8e2]/70 blur-3xl" />
      <div className="absolute inset-x-0 top-[42rem] -z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(107,107,107,0.12),transparent)]" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-12 pt-6 sm:px-10 lg:px-16">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--line)] pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Barbara Studio
            </p>
            <p className="mt-1 text-sm text-[color:var(--ink-soft)]">
              Aesthetic beauty treatments
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-[color:var(--ink-soft)] sm:gap-6">
            <a
              href="#services"
              className="hover:text-[color:var(--accent-deep)]"
            >
              Services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[color:var(--line)] px-4 py-2 hover:border-[color:var(--accent)] hover:bg-white/60"
            >
              Book now
            </a>
          </nav>
        </header>

        <section className="py-10 lg:py-14">
          <div className="relative mx-auto max-w-5xl rounded-[2.6rem] border border-[color:var(--line)] p-7 shadow-[0_24px_70px_rgba(183,115,129,0.08)] sm:p-10">
              <div className="absolute right-6 top-8 h-24 w-24 rounded-full bg-[#f4d8e0]/60 blur-2xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    Barbara Studio
                  </div>
                  <h1 className="mx-auto mt-7 max-w-2xl bg-[linear-gradient(120deg,_#b67381_0%,_#d798a5_45%,_#e9b9c5_100%)] bg-clip-text text-center font-[family:var(--font-cormorant)] text-6xl leading-[0.92] font-bold tracking-tight text-transparent sm:text-7xl">
                    The Art of beauty
                  </h1>
                  <div className="mx-auto mt-6 max-w-3xl">
                    <p className="text-center text-base leading-8 text-[color:var(--ink-soft)]">
                      Beauty is the art of enhancing what is already there — refining,
                      shaping, and illuminating natural features with intention and care.
                    </p>
                    <p className="mt-3 text-center text-base leading-8 text-[color:var(--ink-soft)]">
                      Through precision, balance, and softness, true beauty creates confidence
                      that feels effortless and uniquely yours.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent-deep)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:-translate-y-0.5 hover:bg-[color:var(--accent)]"
                    >
                      Book now
                    </a>
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)] hover:-translate-y-0.5 hover:bg-[#fff7f9]"
                    >
                      View services
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-[color:var(--line)] bg-white/85 p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <figure className="rounded-2xl border border-[color:var(--line)] bg-[#fff7f9] p-4">
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
                        Lashes
                      </figcaption>
                    </figure>

                  <figure className="rounded-2xl border border-[color:var(--line)] bg-white p-4">
                    <svg viewBox="0 0 160 110" className="h-28 w-full" aria-label="Nails illustration">
                      <rect x="20" y="35" width="25" height="48" rx="12" fill="#f5dce3" stroke="#d798a5" strokeWidth="2" />
                      <rect x="50" y="28" width="25" height="55" rx="12" fill="#f2cfd9" stroke="#d798a5" strokeWidth="2" />
                      <rect x="80" y="24" width="25" height="59" rx="12" fill="#efc2cf" stroke="#d798a5" strokeWidth="2" />
                      <rect x="110" y="31" width="25" height="52" rx="12" fill="#f7e6eb" stroke="#d798a5" strokeWidth="2" />
                      <path d="M18 87 Q80 102 142 87" fill="none" stroke="#b67381" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-deep)]">
                      Nails
                    </figcaption>
                  </figure>

                  <figure className="rounded-2xl border border-[color:var(--line)] bg-[#fff7f9] p-4">
                    <svg viewBox="0 0 160 110" className="h-28 w-full" aria-label="Hair illustration">
                      <path d="M35 95 Q28 55 48 28 Q66 8 88 18 Q112 30 126 56 Q134 72 128 95" fill="#f2cfd9" stroke="#d798a5" strokeWidth="2.4" />
                      <path d="M60 42 Q74 58 72 94" fill="none" stroke="#b67381" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M84 38 Q96 56 95 95" fill="none" stroke="#b67381" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M103 44 Q112 60 113 92" fill="none" stroke="#b67381" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                    <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-deep)]">
                      Hair
                    </figcaption>
                  </figure>

                  <figure className="rounded-2xl border border-[color:var(--line)] bg-white p-4">
                    <svg viewBox="0 0 160 110" className="h-28 w-full" aria-label="Eyebrows illustration">
                      <path d="M22 58 Q48 34 74 52" fill="none" stroke="#b67381" strokeWidth="4" strokeLinecap="round" />
                      <path d="M86 52 Q112 34 138 58" fill="none" stroke="#b67381" strokeWidth="4" strokeLinecap="round" />
                      <path d="M28 65 Q48 47 69 60" fill="none" stroke="#d798a5" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M92 60 Q113 47 132 65" fill="none" stroke="#d798a5" strokeWidth="2.2" strokeLinecap="round" />
                      <circle cx="80" cy="76" r="3" fill="#d798a5" />
                    </svg>
                    <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--accent-deep)]">
                      Eyebrows
                    </figcaption>
                  </figure>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </section>

      <section id="services" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">
                Treatments
              </p>
              <h2 className="mt-4 max-w-md font-[family:var(--font-cormorant)] text-5xl leading-tight font-semibold sm:text-6xl">
                Detail-led beauty, tailored to your features.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[color:var(--ink-soft)] sm:text-lg">
              Each service is built around clean prep, considered shaping, and long-wear
              results that elevate your everyday routine.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.name}
                className={`group border-t px-1 pb-4 pt-6 ${
                  index === 1
                    ? "border-[color:var(--accent)] lg:-translate-y-3"
                    : "border-[color:var(--line)]"
                }`}
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.28em] ${
                    index === 1 ? "text-[color:var(--accent-deep)]" : "text-[color:var(--muted)]"
                  }`}
                >
                  {service.detail}
                </p>
                <h3
                  className={`mt-6 font-[family:var(--font-cormorant)] text-4xl font-semibold ${
                    index === 1 ? "text-[color:var(--accent-deep)]" : "text-[color:var(--foreground)]"
                  }`}
                >
                  {service.name}
                </h3>
                <p
                  className={`mt-4 text-base leading-8 ${
                    index === 1 ? "text-[color:var(--ink-soft)]" : "text-[color:var(--ink-soft)]"
                  }`}
                >
                  {service.description}
                </p>
                <div
                  className={`mt-8 h-px w-full ${
                    index === 1 ? "bg-[color:var(--accent)]/35" : "bg-[color:var(--line)]"
                  }`}
                />
                <p
                  className={`mt-5 text-sm font-medium group-hover:translate-x-1 ${
                    index === 1 ? "text-[color:var(--accent-deep)]" : "text-[color:var(--accent-deep)]"
                  }`}
                >
                  Consultation included
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <blockquote
              key={item.name}
              className={`border-t p-0 pt-7 sm:pt-8 ${
                index === 0
                  ? "border-[color:var(--line)]"
                  : "border-[color:var(--accent)]/35"
              }`}
            >
              <p
                className={`font-[family:var(--font-cormorant)] text-4xl leading-tight sm:text-5xl ${
                  index === 0 ? "text-[color:var(--foreground)]" : "text-[color:var(--accent-deep)]"
                }`}
              >
                “{item.quote}”
              </p>
              <footer
                className={`mt-6 text-sm font-semibold uppercase tracking-[0.28em] ${
                  index === 0 ? "text-[color:var(--muted)]" : "text-[color:var(--accent-deep)]/75"
                }`}
              >
                {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">
              Accent variations
            </p>
            <h2 className="font-[family:var(--font-cormorant)] text-5xl leading-tight font-semibold sm:text-6xl">
              Soft Beauty (Pastel) base, with three sharper brand accents.
            </h2>
            <p className="text-base leading-8 text-[color:var(--ink-soft)] sm:text-lg">
              The core direction stays airy, pastel, and calm. These accent options let the
              same site shift between warm luxury, modern contrast, or a softer feminine finish.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {accentDirections.map((accent) => (
              <article
                key={accent.name}
                className={`border-t p-0 pt-6 ${accent.border}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${accent.chip}`} />
                  <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${accent.text}`}>
                      {accent.tag}
                    </p>
                  </div>
                  <p className={`font-[family:var(--font-cormorant)] text-3xl font-semibold ${accent.text}`}>
                    {accent.name}
                  </p>
                </div>

                <div className={`mt-6 rounded-[1.75rem] p-5 ${accent.surface}`}>
                  <p className={`text-sm uppercase tracking-[0.24em] ${accent.text}`}>Preview</p>
                  <p className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[color:var(--foreground)]">
                    Beauty Edit
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                    Use this accent for buttons, icons, dividers, and highlighted service cards.
                  </p>
                  <div className={`mt-5 h-px w-full ${accent.line}`} />
                  <div className="mt-5 flex items-center gap-3">
                    <span className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${accent.button}`}>
                      Book now
                    </span>
                    <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${accent.text}`}>
                      Social icons
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="px-6 pb-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl rounded-[2.75rem] border border-white/80 bg-[linear-gradient(145deg,_#c98395,_#d798a5_45%,_#f1dbe2_100%)] p-8 text-white shadow-[0_28px_80px_rgba(183,115,129,0.16)] sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
              Bookings
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-5xl leading-tight font-semibold sm:text-6xl">
              Your next maintenance appointment starts here.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
              Tuesday to Saturday appointments, bespoke consultations, and treatment plans
              built around your schedule.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm sm:max-w-sm lg:mt-0 lg:min-w-80">
            <a
              href="tel:+440000000000"
              className="rounded-full bg-white px-6 py-4 text-center font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-deep)] hover:-translate-y-0.5"
            >
              Call 00 0000 0000
            </a>
            <a
              href="mailto:hello@barbarastudio.co.uk"
              className="rounded-full border border-white/30 px-6 py-4 text-center font-semibold uppercase tracking-[0.18em] text-white hover:-translate-y-0.5 hover:bg-white/10"
            >
              hello@barbarastudio.co.uk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
