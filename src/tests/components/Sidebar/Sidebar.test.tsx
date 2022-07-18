import { Sidebar } from "components/Sidebar";
import { expect, it, describe } from "vitest";
import { render, screen } from "utilities/test-utils";

describe("<Sidebar />", () => {
  render(<Sidebar />);

  it("The title is visible", () => {
    expect(screen.getByText(/Sidebar/i)).toBeInTheDocument();
  });
});
