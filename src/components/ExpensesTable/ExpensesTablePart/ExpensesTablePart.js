import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button';

const ExpensesTablePart = ({ name, amount, onRemove = () => {} }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{amount} $</td>
      <td>
        <Button label="Delete" onClick={onRemove} />
      </td>
    </tr>
  );
};

ExpensesTablePart.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ExpensesTablePart;
