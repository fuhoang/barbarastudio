import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrandLogo } from "@/components/home/brand-logo";

describe("BrandLogo", () => {
  it("renders the studio name", () => {
    render(<BrandLogo />);
    expect(screen.getByText("Barbara Studio")).toBeInTheDocument();
  });

  it("renders the compact version", () => {
    render(<BrandLogo compact />);
    expect(screen.getByText("Barbara Studio")).toBeInTheDocument();
  });
});
