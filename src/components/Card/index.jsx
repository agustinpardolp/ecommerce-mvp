import React from 'react'
import Button from '../Button';
import { StyledCard, StyledImage } from './styled-components';

const Card = ({
    imgUrl,
    onClick,
    value,
    title,
    effect,
    btnLabel,
    children,
    btnColor
}) => {

    return (
        <StyledCard effect={effect}>
            <StyledImage src={imgUrl} />
            <StyledCard.Content>
                <StyledCard.Header>{title}</StyledCard.Header>
                {children}
            </StyledCard.Content>
            <div >
                {onClick &&
                    <Button
                        onClick={() => onClick(value.id)}
                        label={btnLabel}
                        color={btnColor}
                    />}
            </div>
        </StyledCard>
    )
}

export default Card