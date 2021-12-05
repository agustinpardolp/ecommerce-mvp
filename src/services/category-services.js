import axios from "axios";
import { CATEGORIES_PATH } from "./constants/servicePaths";

export const fetchCategoriesList = () => {
  return axios.get(`${CATEGORIES_PATH}/`);
};
