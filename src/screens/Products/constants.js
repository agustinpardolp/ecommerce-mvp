export const COLUMN_VALUES = [
  { name: "table.title", id: 1 },
  { name: "table.category", id: 2 },
  { name: "table.price", id: 3 },
];
export const paginatedProducts = (selectedProducts, currentPage) =>
  selectedProducts?.slice((currentPage - 1) * 10, currentPage * 10);
