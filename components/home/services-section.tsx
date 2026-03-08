import Image from "next/image";
import type { ServiceCategory, UiCopy } from "@/components/home/types";

type ServicesSectionProps = {
  ui: UiCopy;
  categories: ServiceCategory[];
};

export function ServicesSection({ ui, categories }: ServicesSectionProps) {
  const toId = (value: string) =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[color:var(--line)] bg-white/75 p-6 shadow-[0_14px_36px_rgba(183,115,129,0.06)] sm:p-8 lg:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--muted)]">
            {ui.treatmentsLabel}
          </p>
          <h2
            id="services-heading"
            className="mt-4 bg-[linear-gradient(120deg,_#b67381_0%,_#d798a5_45%,_#e9b9c5_100%)] bg-clip-text font-[family:var(--font-cormorant)] text-5xl leading-tight font-semibold text-transparent sm:text-6xl"
          >
            {ui.servicesHeadline}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--ink-soft)] sm:text-lg">
            {ui.servicesDescription}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              aria-labelledby={`service-title-${toId(category.title)}`}
              className="rounded-2xl border border-[color:var(--line)] bg-white/75 p-5"
            >
              <div className="mb-4 overflow-hidden rounded-xl border border-[color:var(--line)] bg-[#fff7f9]">
                <Image
                  src={category.illustration}
                  alt={category.illustrationAlt}
                  width={800}
                  height={500}
                  className="h-36 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3
                id={`service-title-${toId(category.title)}`}
                className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[color:var(--accent-deep)]"
              >
                {category.title}
              </h3>
              <div className="mt-5 space-y-5">
                {category.groups.map((group) => (
                  <section
                    key={`${category.title}-${group.name}`}
                    className="border-t border-[color:var(--line)] pt-4"
                    aria-labelledby={`service-group-${toId(category.title)}-${toId(
                      group.name
                    )}`}
                  >
                    <h4
                      id={`service-group-${toId(category.title)}-${toId(group.name)}`}
                      className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]"
                    >
                      {group.name}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((item) => (
                        <li key={`${group.name}-${item}`} className="text-sm leading-6 text-[color:var(--ink-soft)]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
