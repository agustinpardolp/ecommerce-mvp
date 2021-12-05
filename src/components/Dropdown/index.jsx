import React, { useState } from 'react'
import { Dropdown as SemanticDropdown } from 'semantic-ui-react'

const Dropdown = ({ options, onChange, label }) => {
    const [value, setValue] = useState(null)
    const handleChange = (e, { value }) => {
        setValue(value)
        onChange(value)
    }
    return (
        <SemanticDropdown clearable item placeholder={value || label} value={value} selection onChange={handleChange} options={options || []}>
        </SemanticDropdown>
    )
}

export default Dropdown
