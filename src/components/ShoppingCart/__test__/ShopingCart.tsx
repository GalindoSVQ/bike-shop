import { ShoppingCart } from "../ShoppingCart";
import { expect, it, describe } from "vitest";
import { render, screen } from "utilities/test-utils";

describe("<ShoppingCart />", () => {
  render(<ShoppingCart />);

  it("The title is visible", () => {
    expect(screen.getByText(/Shopping Cart/i)).toBeInTheDocument();
  });
});
