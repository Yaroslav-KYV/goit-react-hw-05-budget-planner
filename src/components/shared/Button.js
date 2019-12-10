import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../../styledComponents/allComponents.styled';

const Button = ({ type = 'button', label = '', onClick = () => null }) => (
  <StyledButton type={type} onClick={onClick}>
    {label}
  </StyledButton>
);

Button.defaultProps = {
  onClick: () => null,
  type: 'button',
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Button;
