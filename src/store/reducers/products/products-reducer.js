import types from "../../actions/productsActions/types";

export const products = (
  state = {
    data: {
      products: [],
    },
    error: "",
  },
  action
) => {
  const { payload: { data } = {} } = action;
  switch (action.type) {
    case types.PRODUCTS:
      return {
        data: { products: data },
      };
    default:
      return state;
  }
};

export default products;
