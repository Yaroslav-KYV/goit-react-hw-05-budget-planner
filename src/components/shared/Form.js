import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from '../../styledComponents/allComponents.styled';

const Form = ({ onSubmit = () => null, children }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
