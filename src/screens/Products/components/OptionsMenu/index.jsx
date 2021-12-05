import React from 'react'
import { Menu } from 'semantic-ui-react'
import Input from '../../../../components/Input';
import Dropdown from '../../../../components/Dropdown';
import { fetchCategoriesList } from '../../../../services/category-services';
import { useRequest } from '../../../../hooks/useRequest';
import { generateDropdownOptions } from './constants';

const OptionsMenu = ({ handleSelectChange, handleSearch }) => {

    const [categories, , ,] = useRequest(
        {
            request: fetchCategoriesList,
        },
        []
    );

    return (
        <Menu secondary>
            <Menu.Item as='h3'
                name='Products'
            />
            <Menu.Menu position='right'>
                <Dropdown label={'Categorias'} options={generateDropdownOptions(categories)} onChange={handleSelectChange} />
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' onChange={handleSearch} />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}
export default OptionsMenu;
