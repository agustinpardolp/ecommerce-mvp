import React from 'react'
import { Input as SemanticInput } from 'semantic-ui-react'

const Input = ({ type, icon, onChange, placeholder }) => {
    return (
        <SemanticInput type={type} icon={icon} placeholder={placeholder} onChange={onChange} />
    )
}

export default Input
