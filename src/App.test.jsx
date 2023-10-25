import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders initial heading", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("renders new heading on click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: 'Click me!'});

    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/Salutations/i)
  })
});