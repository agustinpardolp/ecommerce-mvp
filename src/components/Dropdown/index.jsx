import React, { useState } from 'react'
import PropTypes from "prop-types";
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
const Options = PropTypes.shape({
    key: PropTypes.number, text: PropTypes.string, value: PropTypes.string
});
Dropdown.propTypes = {
    options: PropTypes.arrayOf(Options),
    label: PropTypes.string,
    onChange: PropTypes.func,
};
export default Dropdown
