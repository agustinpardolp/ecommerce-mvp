import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useIntl } from "react-intl";
import Table from '../../components/Table';
import { useRequest } from '../../hooks/useRequest'
import useTable from '../../hooks/useTable';
import { fetchProductsList } from '../../services/products-services'
import { getProductList, updateProductList } from '../../store/actions/productsActions';
import OptionsMenu from './components/OptionsMenu'
import { COLUMN_VALUES } from './constants'

const Products = () => {
  const dispatch = useDispatch();
  const { selectedProducts: { data: { selectedProducts } }, products: { data: { products } } } = useSelector((state) => state)
  const intl = useIntl();
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
      }
    },
    []
  );
  const paginatedProducts = useCallback(() => selectedProducts?.slice((currentPage - 1) * 10, currentPage * 10)
    , [selectedProducts, currentPage])

  return (
    <div>
      <OptionsMenu handleSelectChange={handleSelectChange} handleSearch={handleSearch} />
      <Table columns={COLUMN_VALUES} data={paginatedProducts()} btnLabel={intl.formatMessage({ id: "button.mobile.add.cart" })} handlePagination={handlePagination} paginationData={selectedProducts} handleOrderColumns={handleOrderColumns} />
    </div>
  )
}

export default Products
