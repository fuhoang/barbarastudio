import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const resolvedSiteUrl = new URL(siteUrl);

const serviceSchema = [
  {
    "@type": "Service",
    name: "Lashes",
    serviceType: "Servicios de pestañas",
    description:
      "Extensiones, limpiezas, lifting y mantenimiento para resultados ligeros y naturales.",
    areaServed: {
      "@type": "Country",
      name: "Venezuela",
    },
  },
  {
    "@type": "Service",
    name: "Brows",
    serviceType: "Servicios de cejas",
    description:
      "Diseño, laminación y tintura de cejas para una forma definida y armoniosa.",
    areaServed: {
      "@type": "Country",
      name: "Venezuela",
    },
  },
  {
    "@type": "Service",
    name: "Nails",
    serviceType: "Servicios de uñas",
    description:
      "Manicura, tratamientos de gel y extensiones con acabados detallados y duraderos.",
    areaServed: {
      "@type": "Country",
      name: "Venezuela",
    },
  },
];

const seoStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${resolvedSiteUrl.origin}/#beauty-studio`,
      name: "Barbara Studio",
      image: `${resolvedSiteUrl.origin}/beauty-salon-illustration.svg`,
      description:
        "Tratamientos estéticos de belleza con enfoque en pestañas, cejas y uñas, con acabados naturales, precisos y duraderos.",
      url: `${resolvedSiteUrl.origin}/es`,
      telephone: "+584241257083",
      email: "Barbaracolmenares4@gmail.com",
      areaServed: {
        "@type": "Country",
        name: "Venezuela",
      },
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card",
      openingHours: "Tu-Sa 09:00-20:00",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
      ],
      sameAs: ["https://www.instagram.com/Barbyeal.studio"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Carabobo",
        addressRegion: "Valencia",
        addressCountry: "VE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "10.1621",
        longitude: "-68.0077",
      },
      makesOffer: serviceSchema.map((service) => ({
        "@type": "Offer",
        itemOffered: service,
      })),
    },
    {
      "@type": "Organization",
      "@id": `${resolvedSiteUrl.origin}/#organization`,
      name: "Barbara Studio",
      url: `${resolvedSiteUrl.origin}/`,
      logo: `${resolvedSiteUrl.origin}/beauty-salon-illustration.svg`,
      description:
        "Salón de belleza especializado en tratamientos estéticos de pestañas, cejas y uñas.",
      email: "Barbaracolmenares4@gmail.com",
      telephone: "+584241257083",
      sameAs: ["https://www.instagram.com/Barbyeal.studio"],
    },
    {
      "@type": "WebSite",
      "@id": `${resolvedSiteUrl.origin}/#website`,
      name: "Barbara Studio",
      url: `${resolvedSiteUrl.origin}`,
      inLanguage: ["es", "en"],
    },
    ...serviceSchema,
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Barbara Studio | Pestañas, Cejas y Uñas",
    template: "%s | Barbara Studio",
  },
  description:
    "Tratamientos estéticos de belleza con enfoque en pestañas, cejas y uñas para un acabado natural, preciso y luminoso.",
  metadataBase: resolvedSiteUrl,
  alternates: {
    canonical: `${resolvedSiteUrl.origin}/es`,
    languages: {
      "es-ES": "/es",
      "en-US": "/en",
      "x-default": "/es",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": "1",
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "pestañas",
    "cejas",
    "uñas",
    "salón de belleza",
    "extensiones de pestañas",
    "tratamientos estéticos",
    "lashes",
    "brows",
    "nails",
  ],
  openGraph: {
    title: "Barbara Studio | Pestañas, Cejas y Uñas",
    description:
      "Tratamientos estéticos de belleza con enfoque en pestañas, cejas y uñas para un acabado natural, preciso y luminoso.",
    url: `${resolvedSiteUrl.origin}/es`,
    siteName: "Barbara Studio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: new URL("/opengraph-image", resolvedSiteUrl),
        width: 1200,
        height: 630,
        alt: "Ilustración de tratamientos de belleza de Barbara Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbara Studio | Pestañas, Cejas y Uñas",
    description:
      "Tratamientos estéticos de belleza con enfoque en pestañas, cejas y uñas para un acabado natural, preciso y luminoso.",
    images: [new URL("/opengraph-image", resolvedSiteUrl)],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const language = cookieStore.get("barbara-lang")?.value === "en" ? "en" : "es";

  return (
    <html lang={language}>
      <body className="antialiased">
        <script
          id="structured-data-beauty-studio"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoStructuredData) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
