import React, { useMemo } from 'react'
import { FormattedMessage } from 'react-intl';
import PropTypes from "prop-types";

import Card from '../../../Card';
import CardGrid from '../../../CardGrid/';
import Spinner from '../../../Spinner';
import { StyledCardContainer, StyledInfoContainer, StyledNoResults } from './styled-components';

const TableMobile = ({ data, handleClick = () => { }, btnLabel, loading }) => {
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
    }, [data, btnLabel, handleClick])
    return (
        <StyledCardContainer>
            {loading ? (<Spinner />) : (
                <>
                    {data && data.length ? (
                        <CardGrid>
                            {onRenderMobileTable}
                        </CardGrid>) : (
                        <StyledNoResults>
                            <FormattedMessage id="table.no.result" />
                        </StyledNoResults>
                    )
                    }
                </>)}
        </StyledCardContainer>
    )
}
const Data =  PropTypes.shape({
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

TableMobile.propTypes = {
    data: PropTypes.arrayOf(Data),
    btnLabel: PropTypes.string,
    handleClick: PropTypes.func,
    loading: PropTypes.bool,
};

export default TableMobile
