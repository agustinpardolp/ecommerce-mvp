import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from ".";
import { getFullWrappedComponent } from "../../utils";

const defaultProps = {
  imgUrl: "",
  onClick: jest.fn(),
  value: "1",
  title: "Title Card 1",
  effect: false,
  btnLabel: "accion button"
};

describe("Card", () => {
  test("should be defined", () => {
    expect(Card).toBeDefined();
  });
  test("Render component correctly", async () => {
    render(getFullWrappedComponent(Card, defaultProps));
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });
});
