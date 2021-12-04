import React from 'react'
import { Dropdown as SemanticDropdown } from 'semantic-ui-react'

const Dropdown = ({ options, onChange, label }) => {
    return (
        <SemanticDropdown item text={label} onChange={onChange}>
            <SemanticDropdown.Menu>
                {options && options.map((item) => <SemanticDropdown.Item key={item.id}>{item.label}</SemanticDropdown.Item>
                )}
            </SemanticDropdown.Menu>
        </SemanticDropdown>
    )
}

export default Dropdown
