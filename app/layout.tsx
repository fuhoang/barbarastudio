import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const resolvedSiteUrl = new URL(siteUrl);

const seoStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${resolvedSiteUrl.origin}/#beauty-studio`,
  name: "Barbara Studio",
  image: `${resolvedSiteUrl.origin}/beauty-salon-illustration.svg`,
  description:
    "Tratamientos estéticos de belleza con enfoque en pestañas, cejas y uñas, con acabados naturales, precisos y duraderos.",
  url: `${resolvedSiteUrl.origin}/`,
  telephone: "+584241257083",
  email: "Barbaracolmenares4@gmail.com",
  areaServed: "Venezuela",
  priceRange: "$$",
  openingHours: "Tu-Sa 09:00-20:00",
  sameAs: ["https://www.instagram.com/Barbyeal.studio"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "VE",
  },
  makesOffer: {
    "@type": "Service",
    serviceType: "Tratamientos de belleza",
  },
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
    canonical: resolvedSiteUrl.origin,
    languages: {
      "es-ES": "/",
      "en-US": "/",
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
    url: resolvedSiteUrl.origin,
    siteName: "Barbara Studio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: new URL("/opengraph-image.png", resolvedSiteUrl),
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
    images: [new URL("/opengraph-image.png", resolvedSiteUrl)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
