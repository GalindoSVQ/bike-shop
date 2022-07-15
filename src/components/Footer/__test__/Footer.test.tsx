import { Footer } from "../Footer";
import { expect, it, describe } from "vitest";
import { render, screen } from "utilities/test-utils";

describe("<Footer />", () => {
  render(<Footer />);

  it("The title is visible ", () => {
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });
});
