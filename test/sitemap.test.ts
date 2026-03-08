import { describe, expect, it } from "vitest";
import generateSitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("includes both Spanish and English locale URLs", () => {
    const entries = generateSitemap();
    const urls = entries.map((entry) => entry.url);
    const hasSpanishLocale = urls.some((url) => String(url).endsWith("/es"));
    const hasEnglishLocale = urls.some((url) => String(url).endsWith("/en"));

    expect(hasSpanishLocale).toBe(true);
    expect(hasEnglishLocale).toBe(true);
  });
});
