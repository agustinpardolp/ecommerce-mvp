import React from 'react'
import PropTypes from "prop-types";
import useWindowSize from '../../hooks/useWindowSize';
import TableDesktop from './components/TableDesktop';
import TableMobile from './components/TableMobile';

const Table = ({ columns, data, handleClick, btnLabel, handlePagination, paginationData, handleOrderColumns, loading }) => {
    const [isMobile] = useWindowSize();
    return (
        <>
            {isMobile ? (
                <TableMobile data={data} handleClick={handleClick} btnLabel={btnLabel} loading={loading} />
            ) : (
                <TableDesktop
                    loading={loading}
                    columns={columns} data={data}
                    handlePagination={handlePagination}
                    paginationData={paginationData}
                    handleOrderColumns={handleOrderColumns} />
            )}
        </>
    )
}
const Columns = PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    sort: PropTypes.string
});

const Data = PropTypes.shape({
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.shape({
        rate: PropTypes.number, count: PropTypes.number
    })
});

Table.propTypes = {
    columns: PropTypes.arrayOf(Columns).isRequired,
    data: PropTypes.arrayOf(Data),
    btnLabel: PropTypes.string,
    handleOrderColumns: PropTypes.func,
    handlePagination: PropTypes.func,
    loading: PropTypes.bool,
    paginationData: PropTypes.arrayOf(Data)
};

export default Table
