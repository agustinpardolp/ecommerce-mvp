import React, { useMemo } from 'react'
import Card from '../../../Card';
import CardGrid from '../../../CardGrid/';
import { StyledCardContainer, StyledInfoContainer, StyledNoResults } from './styled-components';

const TableMobile = ({ data, handleClick = () => { }, btnLabel}) => {
    const onRenderMobileTable = useMemo(() => {
        return data?.map((product) => {
            return (
                <Card
                    key={product.id}
                    value={product.price}
                    title={product.title}
                    imgUrl={product.image}
                    btnLabel={btnLabel}
                    onClick={handleClick}
                    btnColor='orange'>
                    <StyledInfoContainer>
                        <h3> {product.category}</h3>
                        <span>{product.price}</span>
                    </StyledInfoContainer>
                </Card>
            )
        })
    }, [data])
    return (
        <StyledCardContainer>
            {data && data.length ? (
                <CardGrid>
                    {onRenderMobileTable}
                </CardGrid>) : (
                <StyledNoResults>
                    No hay datos disponibles
                </StyledNoResults>)
            }
        </StyledCardContainer>
    )
}

export default TableMobile
