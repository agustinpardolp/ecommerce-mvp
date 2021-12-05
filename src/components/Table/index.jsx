import React, { useMemo } from 'react'
import { Table as SemanticTable, Header, Image } from 'semantic-ui-react'
import Pagination from './components/Pagination';

// const tableData = [
//     { name: 'John', age: 15, gender: 'Male' },
//     { name: 'Amber', age: 40, gender: 'Female' },
//     { name: 'Leslie', age: 25, gender: 'Other' },
//     { name: 'Ben', age: 70, gender: 'Male' },
// ]

// function exampleReducer(state, action) {
//     switch (action.type) {
//         case 'CHANGE_SORT':
//             if (state.column === action.column) {
//                 return {
//                     ...state,
//                     data: state.data.slice().reverse(),
//                     direction:
//                         state.direction === 'ascending' ? 'descending' : 'ascending',
//                 }
//             }

//             return {
//                 column: action.column,
//                 data: _.sortBy(state.data, [action.column]),
//                 direction: 'ascending',
//             }
//         default:
//             throw new Error()
//     }
// }

function Table({ columns, data }) {
    // const [state, dispatch] = React.useReducer(exampleReducer, {
    //     column: null,
    //     data: tableData,
    //     direction: null,
    // })
    // const { column, data, direction } = state
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
        <>
            <SemanticTable sortable celled fixed>
                <SemanticTable.Header>
                    <SemanticTable.Row>
                        {columns && columns.map((column) => {
                            return (
                                <SemanticTable.HeaderCell
                                    key={column.id}
                                // sorted={column === 'name' ? direction : null}
                                // onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
                                >
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
            <Pagination />
        </>
    )
}

export default Table