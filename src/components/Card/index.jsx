import React from 'react'
import PropTypes from "prop-types";
import Button from '../Button';
import { StyledCard, StyledImage } from './styled-components';

const Card = ({
    imgUrl,
    onClick,
    value,
    title,
    btnLabel,
    children,
    btnColor
}) => (
        <StyledCard data-testid="mobile-card">
            <StyledImage src={imgUrl} alt='product' />
            <StyledCard.Content>
                <StyledCard.Header>{title}</StyledCard.Header>
                {children}
            </StyledCard.Content>
            <div >
                {onClick &&
                    <Button
                        onClick={() => onClick(value)}
                        label={btnLabel}
                        color={btnColor}
                    />}
            </div>
        </StyledCard>
    );
    
Card.propTypes = {
    btnLabel: PropTypes.string,
    value: PropTypes.number,
    imgUrl: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.element,
    btnColor: PropTypes.string,
};
export default Card