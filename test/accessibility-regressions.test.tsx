import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { HomeView } from "@/components/home/home-view";
import { uiByLanguage } from "@/components/home/content";

const replaceMock = vi.fn();

vi.mock("@/components/DotGrid", () => ({
  default: () => null,
}));

vi.mock("@/components/home/hero-section", () => ({
  HeroSection: () => <div />,
}));

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual<typeof import("next/navigation")>(
    "next/navigation"
  );
  return {
    ...actual,
    usePathname: vi.fn(),
    useRouter: vi.fn(() => ({
      replace: replaceMock,
    })),
  };
});

import { usePathname } from "next/navigation";

const setMatchMedia = () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockReturnValue({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }),
  });
};

describe("accessibility regressions", () => {
  it("renders skip link and main landmark", () => {
    vi.mocked(usePathname).mockReturnValue("/es");
    setMatchMedia();

    render(<HomeView initialLanguage="es" />);

    expect(screen.getByRole("link", { name: uiByLanguage.es.skipToContent })).toHaveAttribute(
      "href",
      "#main-content"
    );
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByRole("navigation", { name: "Navegación principal" })).toBeInTheDocument();
    expect(screen.getByLabelText("Icono de correo")).toBeInTheDocument();
  });

  it("updates route when language is changed from spanish to english", () => {
    vi.mocked(usePathname).mockReturnValue("/es");
    setMatchMedia();

    render(<HomeView initialLanguage="es" />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to English" }));
    expect(replaceMock).toHaveBeenCalledWith("/en", { scroll: false });
  });
});
