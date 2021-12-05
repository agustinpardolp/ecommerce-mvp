import React, { useMemo, useState } from 'react'
import { Table as SemanticTable, Header, Image } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl';
import PropTypes from "prop-types";
import Pagination from '../Pagination';
import { StyledTableContainer } from './styled-components';
import Spinner from '../../../Spinner';

const TableDesktop = ({ columns, data, handlePagination, paginationData, handleOrderColumns, loading }) => {
    const [columnOrder, setColumnOrder] = useState(false)
    const handleOrder = (columnName) => {
        setColumnOrder(!columnOrder)
        handleOrderColumns(columnName, columnOrder)
    }
    const renderBody = useMemo(() => {
        if (data && data.length > 0) {
            return data.map(({ id,
                title,
                price,
                category,
                image }) =>
            (
                <SemanticTable.Row key={id}>
                    <SemanticTable.Cell>
                        <Header as='h4' image>
                            <Image src={image} rounded size={"medium"} />
                            <Header.Content>
                                {title}
                                <Header.Subheader>{category}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </SemanticTable.Cell>
                    <SemanticTable.Cell>{category}</SemanticTable.Cell>
                    <SemanticTable.Cell>{price}</SemanticTable.Cell>
                </SemanticTable.Row>
            ))
        } else
            return (
                <tr>
                    <td>
                        <FormattedMessage id="table.no.result" />
                    </td>
                </tr>
            );
    }, [data]);

    return (
        <StyledTableContainer>
            {loading ? (<Spinner />) : (
                <SemanticTable sortable celled fixed>
                    <SemanticTable.Header>
                        <SemanticTable.Row>
                            {columns && columns.map((column) => {
                                return (
                                    <SemanticTable.HeaderCell key={column.id} onClick={() => handleOrder(column.sort)}>
                                        <FormattedMessage id={column.name} />
                                    </SemanticTable.HeaderCell>
                                )
                            })}
                        </SemanticTable.Row>
                    </SemanticTable.Header>
                    <SemanticTable.Body>
                        {renderBody}
                    </SemanticTable.Body>
                </SemanticTable>)}
            <Pagination data={data} handlePagination={handlePagination} paginationData={paginationData} />
        </StyledTableContainer>
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
TableDesktop.propTypes = {
    columns: PropTypes.arrayOf(Columns).isRequired,
    data: PropTypes.arrayOf(Data),
    handleOrderColumns: PropTypes.func,
    handlePagination: PropTypes.func,
    loading: PropTypes.bool,
    paginationData: PropTypes.arrayOf(Data)
};

export default TableDesktop