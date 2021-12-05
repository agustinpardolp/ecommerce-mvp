import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import TableDesktop from './components/TableDesktop';
import TableMobile from './components/TableMobile';

const Table = ({ columns, data, handleClick, btnLabel, handlePagination, paginationData, handleOrderColumns }) => {
    const [isMobile] = useWindowSize();
    return (
        <>
            {isMobile ? (
                <TableMobile data={data} handleClick={handleClick} btnLabel={btnLabel} />
            ) : (
                <TableDesktop columns={columns} data={data} handlePagination={handlePagination} paginationData={paginationData} handleOrderColumns={handleOrderColumns} />
            )}
        </>
    )
}

export default Table
