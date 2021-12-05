import React from 'react'
import { getPages } from './constants';
import { StyledPagination } from './styled-components'

const Pagination = ({ handlePagination, paginationData }) => {
  const pageRange = getPages(paginationData)
  return (
    <StyledPagination>
      {pageRange?.map((page) => {
        return <span key={page} onClick={()=>handlePagination(page)}>{page}</span>
      })}
    </StyledPagination>
  )
}

export default Pagination