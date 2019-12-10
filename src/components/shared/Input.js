import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from '../../styledComponents/allComponents.styled';

const Input = ({
  type = ' text',
  value = '',
  onChange = () => null,
  name = '',
}) => <StyledInput type={type} value={value} onChange={onChange} name={name} />;

Input.defaultProps = {
  name: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string,
};

export default Input;
