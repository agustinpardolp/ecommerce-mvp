import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from ".";
const buttonLabel = "Confirmar";

const defaultProps = {
  label: buttonLabel,
  disabled: false,
  onClick: jest.fn(),
  label: "Confirmar",
  value: "1",
  fontColor: "var(shark)",
  variant: "confirm",
  width: "30px",
};
describe("Button", () => {
  test("should be defined", () => {
    expect(Button).toBeDefined();
  });
  test("Render component correctly", async () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByText(buttonLabel)).toBeInTheDocument();
  });

  it("Should be click", () => {
    const onClick = jest.fn();
    render(<Button {...defaultProps} onClick={onClick} />);
    const buttonComponent = screen.getByRole("button", buttonLabel);
    fireEvent.click(buttonComponent);
    expect(onClick.mock.calls.length).toBe(1);
  });
  it("Should not click", () => {
    const onClick = jest.fn();
    render(<Button {...defaultProps} disabled={true} onClick={onClick} />);
    const buttonComponent = screen.getByRole("button", buttonLabel);
    fireEvent.click(buttonComponent);
    expect(onClick.mock.calls.length).toBe(0);
  });
});
