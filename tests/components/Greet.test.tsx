import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet Component", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Mosh" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should render login button when the name is not provided", () => {
    render(<Greet />);
    const button = screen.getByRole("button", { name: /login/i });
    expect(button).toBeInTheDocument();
  });
});
