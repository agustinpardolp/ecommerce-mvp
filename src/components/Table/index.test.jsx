import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Table from "./index";
import { getFullWrappedComponent, handleSizeChange } from "../../utils";

describe("Render Table with no errors", () => {
  const mockProps = {
    columns: [
      { name: "Test.Title Column", id: 1 },
      { name: "Test.Category Column", id: 2 },
      { name: "Test.Price Column", id: 3 },
    ],
    data: [
      {
        category: "men's clothing",
        description: "",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "Product test 1",
      },
    ],
    handleClick: jest.fn(),
    btnLabel: "",
    handlePagination: jest.fn(),
    paginationData: [],
    handleOrderColumns: jest.fn(),
  };

  test("Render Table items correctly", () => {
    const { container } = render(getFullWrappedComponent(Table, mockProps));
    expect(screen.getAllByText("men's clothing")[0]).toBeDefined();
    expect(screen.getByText("Product test 1")).toBeDefined();
    expect(screen.getByText(109.95)).toBeDefined();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("Correctly displays empty list message", () => {
    const noDataProps = {
      columns: [
        { name: "Test.Title Column", id: 1 },
        { name: "Test.Category Column", id: 2 },
        { name: "Test.Price Column", id: 3 },
      ],
      data: [],
      handleClick: jest.fn(),
      btnLabel: "",
      handlePagination: jest.fn(),
      paginationData: [],
      handleOrderColumns: jest.fn(),
    };
    render(getFullWrappedComponent(Table, noDataProps));
    expect(screen.getByText("No se encontraron datos")).toBeInTheDocument();
  });

  test("Render correctly mobile version", async () => {
    handleSizeChange();
    render(getFullWrappedComponent(Table, mockProps));
    const mobileCard = await screen.findAllByTestId("mobile-card");
    expect(mobileCard[0]).toBeInTheDocument();
  });
});
