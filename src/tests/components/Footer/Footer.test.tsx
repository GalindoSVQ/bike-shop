import { Footer } from "components/Footer";
import { expect, it, describe } from "vitest";
import { render, screen } from "utilities/test-utils";

describe("<Footer />", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("Footer title is visible", () => {
    expect(screen.getByText(/Handmade/i)).toBeInTheDocument();
  });

  it("Link to the repository code", () => {
    expect(screen.getByText(/Code/i).closest("a")).toHaveAttribute(
      "href",
      "https://github.com/GalindoSVQ/bike-shop/"
    );
  });

  it("Link to the Antonio Galindo website", () => {
    expect(screen.getByText(/Antonio Galindo/i).closest("a")).toHaveAttribute(
      "href",
      "https://gali.dev/"
    );
  });
});
