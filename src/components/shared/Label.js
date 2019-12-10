import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from '../../styledComponents/allComponents.styled';

const Label = ({ children }) => <StyledLabel>{children}</StyledLabel>;

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
