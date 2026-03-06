import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barbara Studio | Lashes, Brows & Nails",
  description:
    "Aesthetic beauty treatments for polished lashes, sculpted brows, and clean luxury nail appointments.",
  metadataBase: new URL("https://barbarastudio.co.uk"),
  openGraph: {
    title: "Barbara Studio | Lashes, Brows & Nails",
    description:
      "Aesthetic beauty treatments for polished lashes, sculpted brows, and clean luxury nail appointments.",
    url: "https://barbarastudio.co.uk",
    siteName: "Barbara Studio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/beauty-salon-illustration.svg",
        width: 1200,
        height: 630,
        alt: "Barbara Studio beauty treatments illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbara Studio | Lashes, Brows & Nails",
    description:
      "Aesthetic beauty treatments for polished lashes, sculpted brows, and clean luxury nail appointments.",
    images: ["/beauty-salon-illustration.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
