import React from 'react'
import PropTypes from "prop-types";
import { Input as SemanticInput } from 'semantic-ui-react'

const Input = ({ type, icon, onChange, placeholder }) => {
    return (
        <SemanticInput type={type} icon={icon} placeholder={placeholder} onChange={onChange} />
    )
}
Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};
export default Input
