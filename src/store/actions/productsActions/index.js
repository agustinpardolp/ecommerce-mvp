import types from "./types";

export const getProductList = (data) => {
  return({
  type: types.PRODUCTS,
  payload: data,
})}

export const updateProductList = (data) => {
  return({
  type: types.SELECTED_PRODUCTS,
  payload: data,
})}
