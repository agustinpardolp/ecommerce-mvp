import React from 'react'
import { Menu } from 'semantic-ui-react'
import Input from '../../../../components/Input';
import Dropdown from '../../../../components/Dropdown';
import { fetchCategoriesList } from '../../../../services/category-services';
import { useRequest } from '../../../../hooks/useRequest';
import { generateDropdownOptions } from './constants';
import { StyledMenu, StyledOptionsMenu } from './styled-components';

const OptionsMenu = ({ handleSelectChange, handleSearch }) => {

    const [categories, , ,] = useRequest(
        {
            request: fetchCategoriesList,
        },
        []
    );

    return (
        <StyledOptionsMenu secondary className='mobile-menu'>
            <Menu.Item as='h3' name='Products' />
            <StyledMenu position='right'>
                <Dropdown label={'Categorias'} options={generateDropdownOptions(categories)} onChange={handleSelectChange} />
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' onChange={handleSearch} />
                </Menu.Item>
            </StyledMenu>
        </StyledOptionsMenu>
    )
}
export default OptionsMenu;
