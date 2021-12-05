import react, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateProductList } from "../store/actions/productsActions";
import { debounce } from "../utils";

const useTable = (products) => {
  const dispatch = useDispatch();
  const handleSelectChange = (value) => {
    if (!value) {
      dispatch(
        updateProductList({
          data: products,
        })
      );
    } else {
      const productsFiltered = products.filter(
        (elements) => elements.category === value
      );
      dispatch(
        updateProductList({
          data: productsFiltered,
        })
      );
    }
  };

  const handleDataChange = (value) => {
    const search = products.filter((element) =>
      element.title.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(
      updateProductList({
        data: search,
      })
    );
  };

  const handleSearchDebouce = debounce(handleDataChange);
  const handleSearch = useCallback(
    (e) => {
      handleSearchDebouce(e.target.value);
    },
    [handleSearchDebouce]
  );
  const handlePagination=()=>{
    
  }
  return {
    handleSelectChange,
    handleSearch,
  };
};

export default useTable;
