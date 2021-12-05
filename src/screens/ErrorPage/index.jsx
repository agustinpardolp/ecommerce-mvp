import React, { useCallback } from 'react'
import { useHistory } from "react-router-dom";
import {FormattedMessage, useIntl } from "react-intl";
import Button from '../../components/Button/'
import { StyledErrorPage } from './styled-components';
import { ROUTES } from '../../routes/constants';

const ErrorPage = () => {
    const history = useHistory();
    const intl = useIntl();
    const handleBack = useCallback(() => {
        history.push(ROUTES.PRODUCTS)
    }, [history])

    return (
        <StyledErrorPage>
            <div>
                <h2><FormattedMessage id="errorPage.message" /></h2>
                <Button label={intl.formatMessage({ id: "errorPage.back" })} onClick={handleBack} fontColor="var(--shark)" />
            </div>
        </StyledErrorPage>
    )
}

export default ErrorPage
