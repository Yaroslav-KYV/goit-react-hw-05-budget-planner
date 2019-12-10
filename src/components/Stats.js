import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Value } from '../styledComponents/Stats.styled';

const Stats = ({ label, value, isPositive }) => (
  <Container isPositive={isPositive}>
    <Label>{label}</Label>
    <Value>{value}&nbsp;&#x24;</Value>
  </Container>
);

Stats.defaultProps = {
  isPositive: false,
};

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isPositive: PropTypes.bool,
};

export default Stats;
