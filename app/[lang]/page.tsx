import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { HomeView } from "@/components/home/home-view";
import type { Language } from "@/components/home/types";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const resolvedSiteUrl = new URL(siteUrl);

const metadataByLanguage = {
  es: {
    title: "Barbara Studio | Pestañas, Cejas y Uñas",
    description:
      "Tratamientos estéticos de belleza con enfoque en pestañas, cejas y uñas para un acabado natural, preciso y luminoso.",
    locale: "es_ES",
    ogTitle: "Barbara Studio | Pestañas, Cejas y Uñas",
    ogDescription:
      "Tratamientos estéticos de belleza con enfoque en pestañas, cejas y uñas para un acabado natural, preciso y luminoso.",
    twitterTitle: "Barbara Studio | Pestañas, Cejas y Uñas",
    twitterDescription:
      "Tratamientos estéticos de belleza con enfoque en pestañas, cejas y uñas para un acabado natural, preciso y luminoso.",
  },
  en: {
    title: "Barbara Studio | Lashes, Brows & Nails",
    description:
      "Aesthetic beauty treatments with a focus on lashes, brows, and nails for a natural, precise, and luminous look.",
    locale: "en_US",
    ogTitle: "Barbara Studio | Lashes, Brows & Nails",
    ogDescription:
      "Aesthetic beauty treatments with a focus on lashes, brows, and nails for a natural, precise, and luminous look.",
    twitterTitle: "Barbara Studio | Lashes, Brows & Nails",
    twitterDescription:
      "Aesthetic beauty treatments with a focus on lashes, brows, and nails for a natural, precise, and luminous look.",
  },
};

function normalizeLanguage(value: string): Language {
  return value === "en" ? "en" : "es";
}

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = normalizeLanguage(lang);
  const seoText = metadataByLanguage[language];
  const canonical = `/${language}`;

  return {
    title: {
      default: seoText.title,
      template: "%s | Barbara Studio",
    },
    description: seoText.description,
    alternates: {
      canonical,
      languages: {
        "es-ES": "/es",
        "en-US": "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      title: seoText.ogTitle,
      description: seoText.ogDescription,
      locale: seoText.locale,
      url: `${resolvedSiteUrl.origin}${canonical}`,
      siteName: "Barbara Studio",
      type: "website",
      images: [
        {
          url: new URL("/opengraph-image", resolvedSiteUrl),
          width: 1200,
          height: 630,
          alt:
            language === "en"
              ? "Barbara Studio beauty treatments illustration"
              : "Ilustración de tratamientos de belleza de Barbara Studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoText.twitterTitle,
      description: seoText.twitterDescription,
      images: [new URL("/opengraph-image", resolvedSiteUrl)],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "es") {
    redirect("/es");
  }

  const normalizedLanguage = normalizeLanguage(lang);

  return <HomeView initialLanguage={normalizedLanguage} />;
}
