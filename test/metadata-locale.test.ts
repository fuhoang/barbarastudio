import { describe, expect, it } from "vitest";
import { generateMetadata } from "@/app/[lang]/page";

function getImageUrl(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (value && typeof value === "object" && "href" in value) {
    return String((value as { href: string }).href);
  }

  return "";
}

describe("localized metadata", () => {
  it("returns Spanish metadata with locale-specific SEO fields", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lang: "es" }) });

    expect(metadata.title?.default).toBe("Barbara Studio | Pestañas, Cejas y Uñas");
    expect(metadata.description).toContain("pestañas");
    expect(metadata.alternates?.canonical).toBe("/es");
    expect(metadata.alternates?.languages).toMatchObject({
      "es-ES": "/es",
      "en-US": "/en",
      "pt-BR": "/pt",
      "x-default": "/es",
    });
    expect(metadata.openGraph?.locale).toBe("es_ES");
    expect(getImageUrl(metadata.openGraph?.images?.[0]?.url)).toContain("/opengraph-image");
    expect(metadata.twitter?.images?.[0]).toBeDefined();
  });

  it("returns English metadata with locale-specific SEO fields", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lang: "en" }) });

    expect(metadata.title?.default).toBe("Barbara Studio | Lashes, Brows & Nails");
    expect(metadata.description).toContain("Aesthetic beauty treatments");
    expect(metadata.alternates?.canonical).toBe("/en");
    expect(metadata.alternates?.languages).toMatchObject({
      "es-ES": "/es",
      "en-US": "/en",
      "x-default": "/es",
    });
    expect(metadata.openGraph?.locale).toBe("en_US");
    expect(getImageUrl(metadata.openGraph?.images?.[0]?.url)).toContain("/opengraph-image");
    expect(metadata.twitter?.images?.[0]).toBeDefined();
  });

  it("returns Portuguese (Brazil) metadata with locale-specific SEO fields", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lang: "pt" }) });

    expect(metadata.title?.default).toBe("Barbara Studio | Cílios, Sobrancelhas e Unhas");
    expect(metadata.description).toContain("cílios");
    expect(metadata.alternates?.canonical).toBe("/pt");
    expect(metadata.alternates?.languages).toMatchObject({
      "es-ES": "/es",
      "en-US": "/en",
      "pt-BR": "/pt",
      "x-default": "/es",
    });
    expect(metadata.openGraph?.locale).toBe("pt_BR");
    expect(getImageUrl(metadata.openGraph?.images?.[0]?.url)).toContain("/opengraph-image");
    expect(metadata.twitter?.images?.[0]).toBeDefined();
  });
});
