export const COLUMN_VALUES = [
  { name: "Title", id: 1 },
  { name: "Category", id: 2 },
  { name: "Price", id: 3 },
];

export const paginatedProducts = (selectedProducts, currentPage) =>
  selectedProducts?.slice((currentPage - 1) * 10, currentPage * 10);
