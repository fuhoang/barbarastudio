"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import DotGrid from "@/components/DotGrid";
import type { Language } from "@/components/home/types";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { serviceCategoriesByLanguage, testimonialsByLanguage, uiByLanguage } from "@/components/home/content";
import { ServicesSection } from "@/components/home/services-section";
import { SiteHeader } from "@/components/home/site-header";
import { TestimonialsSection } from "@/components/home/testimonials-section";

type HomeViewProps = {
  initialLanguage: Language;
};

function normalizeLanguage(value: string): Language {
  if (value === "en" || value === "pt") {
    return value;
  }
  return "es";
}

export function HomeView({ initialLanguage }: HomeViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const pathLanguage = normalizeLanguage(
    pathname.startsWith("/en") ? "en" : pathname.startsWith("/pt") ? "pt" : "es"
  );
  const language = pathLanguage ?? initialLanguage;
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    document.documentElement.lang = pathLanguage;
  }, [pathLanguage]);

  const ui = uiByLanguage[language];
  const localizedServiceCategories = serviceCategoriesByLanguage[language];
  const localizedTestimonials = testimonialsByLanguage[language];

  const changeLanguage = (nextLanguage: Language) => {
    const nextUrl = `/${nextLanguage}`;
    document.documentElement.lang = nextLanguage;
    router.replace(nextUrl, { scroll: false });
  };

  return (
    <main id="main-content" tabIndex={-1} className="relative overflow-hidden">
      <a href="#main-content" className="skip-link">
        {ui.skipToContent}
      </a>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.92),_transparent_34%),radial-gradient(circle_at_85%_20%,_rgba(244,238,233,0.9),_transparent_30%),linear-gradient(135deg,_#faf7f5_0%,_#f7f2ee_46%,_#f3eeea_100%)]" />
      {!reducedMotion ? (
        <DotGrid
          className="!absolute inset-0 -z-10 opacity-30 pointer-events-none"
          dotSize={4}
          gap={20}
          baseColor="#efd8df"
          activeColor="#d798a5"
          proximity={140}
          speedTrigger={70}
          shockRadius={180}
          shockStrength={2.8}
          maxSpeed={2500}
          resistance={900}
          returnDuration={1.2}
          ariaHidden
        />
      ) : null}
      <div className="absolute left-[-8rem] top-28 -z-10 h-72 w-72 rounded-full bg-white/45 blur-3xl" />
      <div className="absolute right-[-7rem] top-[34rem] -z-10 h-80 w-80 rounded-full bg-[#f1e8e2]/70 blur-3xl" />
      <div className="absolute inset-x-0 top-[42rem] -z-10 h-px bg-[linear-gradient(90deg,transparent,rgba(107,107,107,0.12),transparent)]" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-12 pt-6 sm:px-10 lg:px-16">
        <SiteHeader
          ui={ui}
          language={language}
          onLanguageChange={changeLanguage}
        />
        <HeroSection ui={ui} />
      </section>

      <ServicesSection ui={ui} categories={localizedServiceCategories} />
      <TestimonialsSection ui={ui} testimonials={localizedTestimonials} />
      <ContactSection ui={ui} />
    </main>
  );
}
