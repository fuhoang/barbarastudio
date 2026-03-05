import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ContactSection } from "@/components/home/contact-section";
import { uiByLanguage } from "@/components/home/content";

describe("ContactSection", () => {
  it("renders localized call-to-action copy", () => {
    render(<ContactSection ui={uiByLanguage.es} />);

    expect(screen.getByText("Reservas")).toBeInTheDocument();
    expect(screen.getByText(uiByLanguage.es.callLabel)).toBeInTheDocument();
    expect(screen.getByLabelText("Correo")).toBeInTheDocument();
  });
});
