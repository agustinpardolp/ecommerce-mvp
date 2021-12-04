import React from 'react'
import { Menu } from 'semantic-ui-react'
import Input from '../../../../components/Input';
import Dropdown from '../../../../components/Dropdown';

const OptionsMenu = ({ }) => {

    return (
        <Menu secondary>
            <Menu.Item
                name='Products'
                onClick={() => { }}
            />
            <Menu.Menu position='right'>
                <Dropdown label={'Categorias'}/>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}
export default OptionsMenu;
