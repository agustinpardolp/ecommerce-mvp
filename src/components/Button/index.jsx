import React from "react";
import PropTypes from "prop-types";
import { Button as SemanticButton } from "semantic-ui-react";

const Button = ({
  onClick,
  label,
  value,
  width,
  disabled,
  color
}) => {

  return (
    <SemanticButton
      onClick={() => onClick(value)}
      width={width}
      disabled={disabled}
      color={color}
    >
      {label}
    </SemanticButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.string
};

export default Button;
