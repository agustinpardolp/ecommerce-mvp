import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
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

  const { handleSelectChange, handleSearch } = useTable(products)
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
    console.log(selectedProducts)
  return (
    <div>
      <OptionsMenu handleSelectChange={handleSelectChange} handleSearch={handleSearch} />
      <Table columns={COLUMN_VALUES} data={selectedProducts} />
    </div>
  )
}

export default Products
