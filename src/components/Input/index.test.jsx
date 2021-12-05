import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Input from ".";

const defaultProps = {
  type: 'text', 
  icon: '', 
  onChange: jest.fn(), 
  placeholder: "Input placeholder test"
};
describe("Input", () => {
  test("should be defined", () => {
    expect(Input).toBeDefined();
  });
  test("Render component correctly", async () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });
});
