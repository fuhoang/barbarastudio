import { describe, expect, it } from "vitest";
import { testimonialsByLanguage, uiByLanguage } from "@/components/home/content";

describe("home content", () => {
  it("includes all supported language dictionaries", () => {
    expect(uiByLanguage.en.navServices).toBe("Services");
    expect(uiByLanguage.es.navServices).toBe("Servicios");
    expect(uiByLanguage.pt.navServices).toBe("Serviços");
  });

  it("keeps testimonial counts consistent across languages", () => {
    expect(testimonialsByLanguage.en).toHaveLength(4);
    expect(testimonialsByLanguage.es).toHaveLength(4);
    expect(testimonialsByLanguage.pt).toHaveLength(4);
  });
});
