import type { Metadata } from "next";
import { Belleza, DM_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const displayFont = Belleza({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Barbara Studio | Lashes, Brows & Nails",
  description:
    "Aesthetic beauty treatments for polished lashes, sculpted brows, and clean luxury nail appointments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
