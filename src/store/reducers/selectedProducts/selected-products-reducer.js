import types from "../../actions/productsActions/types";

export const selectedProducts = (
  state = {
    data: [],
  },
  action
) => {
  const { payload: { error, data } = {} } = action;
  switch (action.type) {
    case types.SELECTED_PRODUCTS:
      return {
        data: { selectedProducts: data },
      };
    default:
      return state;
  }
};

export default selectedProducts;
