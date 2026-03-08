import { describe, expect, it } from "vitest";
import { metadata as globalMetadata } from "@/app/layout";
import { generateMetadata } from "@/app/[lang]/page";

function imagePath(url: unknown): string {
  return typeof url === "string" ? url : typeof url === "object" && url && "href" in url ? String(url.href) : "";
}

describe("Open Graph image URL", () => {
  it("uses Next.js OG endpoint path in global metadata", () => {
    const url = imagePath(globalMetadata.openGraph?.images?.[0]?.url);

    expect(url).toContain("/opengraph-image");
    expect(url).not.toContain("opengraph-image.png");
  });

  it("uses locale OG endpoint path for Spanish and English", async () => {
    const esMetadata = await generateMetadata({ params: Promise.resolve({ lang: "es" }) });
    const enMetadata = await generateMetadata({ params: Promise.resolve({ lang: "en" }) });

    expect(imagePath(esMetadata.openGraph?.images?.[0]?.url)).toContain("/opengraph-image");
    expect(imagePath(enMetadata.openGraph?.images?.[0]?.url)).toContain("/opengraph-image");
    expect(esMetadata.openGraph?.images?.[0]).toMatchObject({ width: 1200, height: 630 });
    expect(enMetadata.twitter?.images?.[0]).toBeTruthy();
    expect(imagePath(enMetadata.twitter?.images?.[0])).toContain("/opengraph-image");
  });
});
