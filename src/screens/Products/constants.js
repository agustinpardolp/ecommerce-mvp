export const COLUMN_VALUES = [
  { name: "table.title", id: 1, sort: "title" },
  { name: "table.category", id: 2, sort: "category" },
  { name: "table.price", id: 3, sort: "price" },
];
export const paginatedProducts = (selectedProducts, currentPage) =>
  selectedProducts?.slice((currentPage - 1) * 10, currentPage * 10);
