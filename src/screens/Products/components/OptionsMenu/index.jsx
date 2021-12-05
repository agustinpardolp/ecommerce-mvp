import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import Input from '../../../../components/Input';
import Dropdown from '../../../../components/Dropdown';
import { fetchCategoriesList } from '../../../../services/category-services';
import { useRequest } from '../../../../hooks/useRequest';
import { generateDropdownOptions } from './constants';
import { StyledMenu, StyledOptionsMenu } from './styled-components';

const OptionsMenu = ({ handleSelectChange, handleSearch }) => {
    const intl = useIntl();
    const [categories, , ,] = useRequest(
        {
            request: fetchCategoriesList,
        },
        []
    );
    return (
        <StyledOptionsMenu secondary className='mobile-menu'>
            <Menu.Item as='h3' name={intl.formatMessage({ id: "submenu.title" })} />
            <StyledMenu position='right'>
                <Dropdown label={intl.formatMessage({ id: "submenu.dropdown" })} options={generateDropdownOptions(categories)} onChange={handleSelectChange} />
                <Menu.Item>
                    <Input type='text' icon='search' placeholder={intl.formatMessage({ id: "submenu.search" })} onChange={handleSearch} />
                </Menu.Item>
            </StyledMenu>
        </StyledOptionsMenu>
    )
}

OptionsMenu.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleSelectChange: PropTypes.func.isRequired,
};
export default OptionsMenu;
