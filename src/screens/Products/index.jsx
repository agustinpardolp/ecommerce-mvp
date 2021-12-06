import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import Table from '../../components/Table';
import { useRequest } from '../../hooks/useRequest'
import useTable from '../../hooks/useTable';
import { fetchProductsList } from '../../services/products-services'
import { getProductList, updateProductList } from '../../store/actions/productsActions';
import OptionsMenu from './components/OptionsMenu'
import { COLUMN_VALUES, paginatedProducts } from './constants'
import { ROUTES } from '../../routes/constants';

const Products = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const history = useHistory()
  const { selectedProducts: { data: { selectedProducts } }, products: { data: { products } } } = useSelector((state) => state)
  const { handleSelectChange, handleSearch, handlePagination, currentPage, handleOrderColumns } = useTable(products)
  const [, loading, ,] = useRequest(
    {
      request: fetchProductsList,
      withPostSuccess: (productList) => {
        dispatch(
          getProductList({
            data: productList,
          }))
        dispatch(updateProductList({
          data: productList,
        }))
      },
      withPostFailure: () => {
        history.push(ROUTES.ERROR)
      }
    },
    []
  );
  return (
    <div>
      <OptionsMenu handleSelectChange={handleSelectChange} handleSearch={handleSearch} />
      <Table
        loading={loading}
        columns={COLUMN_VALUES}
        data={paginatedProducts(selectedProducts, currentPage)}
        btnLabel={intl.formatMessage({ id: "button.mobile.add.cart" })}
        handlePagination={handlePagination}
        paginationData={selectedProducts}
        handleOrderColumns={handleOrderColumns} />
    </div>
  )
}

export default Products
