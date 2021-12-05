import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductList } from "../store/actions/productsActions";
import { debounce } from "../utils";
import { manageDispatch } from "./constants";

//hook created to manage all Table functionality
const useTable = (products) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const handleSelectChange = (value) => {
    if (!value) {
      manageDispatch(dispatch, updateProductList, products);
    } else {
      const productsFiltered = products.filter(
        (elements) => elements.category === value
      );
      manageDispatch(dispatch, updateProductList, productsFiltered);
    }
  };

  const handleDataChange = (value) => {
    const search = products.filter((element) =>
      element.title.toLowerCase().includes(value.toLowerCase())
    );
    manageDispatch(dispatch, updateProductList, search);
  };

  const handleSearchDebouce = debounce(handleDataChange);
  const handleSearch = useCallback(
    (e) => {
      handleSearchDebouce(e.target.value);
    },
    [handleSearchDebouce]
  );
  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const handleOrderColumns = (column, order) => {
    const key = column.toLowerCase();
    const sortedProducts = products.sort((a, b) => {
      const { x, y } = order ? { x: a, y: b } : { x: b, y: a };
      return x[key] > y[key] ? 1 : -1;
    });
    manageDispatch(dispatch, updateProductList, sortedProducts);
  };

  return {
    handleSelectChange,
    handleSearch,
    handlePagination,
    currentPage,
    handleOrderColumns,
  };
};

export default useTable;
