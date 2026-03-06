import type { Testimonial, UiCopy } from "@/components/home/types";

type TestimonialsSectionProps = {
  ui: UiCopy;
  testimonials: Testimonial[];
};

export function TestimonialsSection({ ui, testimonials }: TestimonialsSectionProps) {
  return (
    <section className="px-6 pb-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[color:var(--line)] bg-white/75 p-6 shadow-[0_14px_36px_rgba(183,115,129,0.06)] sm:p-8">
        <h2 className="mb-6 text-center font-[family:var(--font-cormorant)] text-4xl font-semibold text-[color:var(--accent-deep)] sm:text-5xl">
          {ui.testimonialsHeading}
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <blockquote
              key={item.name}
              className={`rounded-xl border p-4 sm:p-5 ${
                index === 0
                  ? "border-[color:var(--line)]"
                  : "border-[color:var(--line)]"
              }`}
            >
              <p
                className={`font-[family:var(--font-cormorant)] text-2xl leading-tight italic sm:text-3xl ${
                  index === 0 ? "text-[color:var(--foreground)]" : "text-[color:var(--accent-deep)]"
                }`}
              >
                “{item.quote}”
              </p>
              <footer
                className={`mt-5 text-xs font-semibold uppercase tracking-[0.24em] ${
                  index === 0 ? "text-[color:var(--muted)]" : "text-[color:var(--accent-deep)]/75"
                }`}
              >
                {item.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
