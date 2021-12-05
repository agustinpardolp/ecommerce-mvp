import axios from "axios";
import { PRODUCTS_PATH } from "./constants/servicePaths";

export const fetchProductsList = () => {
  return axios.get(`${PRODUCTS_PATH}/`)
};
