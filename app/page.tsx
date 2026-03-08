import type { Metadata } from "next";
import { HomeView } from "@/components/home/home-view";
import type { Language } from "@/components/home/types";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const resolvedSiteUrl = new URL(siteUrl);

type PageSearchParams = {
  lang?: string | string[];
};

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

function normalizeLanguage(value: string | string[] | undefined): Language {
  const langValue = Array.isArray(value) ? value[0] : value;
  return langValue === "en" ? "en" : "es";
}

function getLanguageFromParams(searchParams: PageSearchParams | undefined): Language {
  return normalizeLanguage(searchParams?.lang);
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<PageSearchParams>;
}): Promise<Metadata> {
  const params = await searchParams;
  const language = getLanguageFromParams(params);
  const seoText = metadataByLanguage[language];
  const canonical = language === "en" ? "/?lang=en" : "/";

  return {
    title: {
      default: seoText.title,
      template: "%s | Barbara Studio",
    },
    description: seoText.description,
    alternates: {
      canonical: canonical,
      languages: {
        "es-ES": "/",
        "en-US": "/?lang=en",
        "x-default": "/",
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
          url: new URL("/opengraph-image.png", resolvedSiteUrl),
          width: 1200,
          height: 630,
          alt: language === "en"
            ? "Barbara Studio beauty treatments illustration"
            : "Ilustración de tratamientos de belleza de Barbara Studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoText.twitterTitle,
      description: seoText.twitterDescription,
      images: [new URL("/opengraph-image.png", resolvedSiteUrl)],
    },
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<PageSearchParams>;
}) {
  const resolvedParams = await searchParams;
  const language = getLanguageFromParams(resolvedParams);

  return <HomeView initialLanguage={language} />;
}
