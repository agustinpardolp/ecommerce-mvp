import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dropdown from ".";
const DropdownLabel = "Placeholed-dropdown-test";

const defaultProps = {
  options: [{ key: 1, text: "test-electronic", value: "test-electronic" }, { key: 2, text: "test-clothes", value: "test-clothes" }],
  onChange: jest.fn(), label: "Placeholed-dropdown-test"
};
describe("Dropdown", () => {
  test("should be defined", () => {
    expect(Dropdown).toBeDefined();
  });
  
  test("Render component correctly", async () => {
    render(<Dropdown {...defaultProps} />);
    expect(screen.getByText(DropdownLabel)).toBeInTheDocument();
  });

  it("Should select correctly one of the options", () => {
    const onClick = jest.fn();
    render(<Dropdown {...defaultProps} onClick={onClick} />);
    const dropdownComponent = screen.getAllByRole("option", DropdownLabel);
    fireEvent.select(dropdownComponent[0]);
    expect(screen.getByText("test-electronic")).toBeInTheDocument();
  });
});
