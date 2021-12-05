import { combineReducers } from 'redux';

import { products } from '../reducers/products/products-reducer'
import { selectedProducts } from '../reducers/selectedProducts/selected-products-reducer';

const allReducers = combineReducers({
  products,
  selectedProducts,
});

const reducers = (state, action) => allReducers(state, action);

export default reducers;
