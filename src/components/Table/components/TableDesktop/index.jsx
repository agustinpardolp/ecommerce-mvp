import React, { useMemo, useState } from 'react'
import { Table as SemanticTable, Header, Image } from 'semantic-ui-react'
import Pagination from '../Pagination';
import { StyledTableContainer } from './styled-components';

const TableDesktop = ({ columns, data, handlePagination, paginationData, handleOrderColumns }) => {
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
                        No hay datos disponibles
                    </td>
                </tr>
            );
    }, [data]);

    return (
        <StyledTableContainer>
            <SemanticTable sortable celled fixed>
                <SemanticTable.Header>
                    <SemanticTable.Row>
                        {columns && columns.map((column) => {
                            return (
                                <SemanticTable.HeaderCell key={column.id} onClick={() => handleOrder(column.name)}>
                                    {column.name}
                                </SemanticTable.HeaderCell>
                            )
                        })}
                    </SemanticTable.Row>
                </SemanticTable.Header>
                <SemanticTable.Body>
                    {renderBody}
                </SemanticTable.Body>
            </SemanticTable>
            <Pagination data={data} handlePagination={handlePagination} paginationData={paginationData} />
        </StyledTableContainer>
    )
}

export default TableDesktop