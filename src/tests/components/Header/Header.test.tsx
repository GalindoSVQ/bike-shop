import { Header } from "components/Header";
import { expect, it, describe } from "vitest";
import { render, screen } from "utilities/test-utils";

describe("<Header />", () => {
  render(<Header />);

  it("The title is visible", () => {
    expect(screen.getByText(/Header/i)).toBeInTheDocument();
  });
});
